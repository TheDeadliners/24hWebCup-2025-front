"use client";

import React, {useState} from "react";
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {SpinnerIcon, WarningIcon} from "@phosphor-icons/react";
import { reset} from "@/libs/actions/authentication";
import {redirect, useSearchParams} from "next/navigation";
import toast from "react-hot-toast";
import {ResetData, ResetSchema} from "@/libs/schemas/reset";

export default function ResetForm() {
    const [submitState, setSubmitState] = useState<boolean>(true);
    const params = useSearchParams();
    const token = params.get('token');

    const resetForm = useForm<ResetData>({
        resolver: zodResolver(ResetSchema),
        defaultValues: {
            token: token as string,
            password: "",
            confirmPassword: "",
        }
    });

    const onSubmit = async (resetData: ResetData): Promise<void> => {
        setSubmitState(false);
        const response = await reset(resetData);
        if (response.code == "RESET_SUCCEED") {
            toast.success(response.message, {duration: 10000});
            redirect("/login");
        } else {
            toast.error(response.message);
        }
        setSubmitState(true);
    }

    return (
        <form onSubmit={resetForm.handleSubmit(onSubmit)} className="card w-full md:w-auto">
            <section className="card-body items-center">
                <h2 className="card-title">Réinitialisation</h2>
                <div>
                    <Controller control={resetForm.control} name="password" render={({field}) => (
                        <fieldset className="fieldset mb-2">
                            <legend className="fieldset-legend">Mot de passe</legend>
                            <input type="password" className="input" {...field}/>
                            {resetForm.formState.errors.password && (
                                <div role="alert" className="form-error">
                                    <WarningIcon className="icon"/>
                                    <div>{resetForm.formState.errors.password.message}</div>
                                </div>
                            )}
                        </fieldset>
                    )}/>
                    <Controller control={resetForm.control} name="confirmPassword" render={({field}) => (
                        <fieldset className="fieldset mb-2">
                            <legend className="fieldset-legend">Confirmer le mot de passe</legend>
                            <input type="password" className="input" {...field}/>
                            {resetForm.formState.errors.confirmPassword && (
                                <div role="alert" className="form-error">
                                    <WarningIcon className="icon"/>
                                    <div>{resetForm.formState.errors.confirmPassword.message}</div>
                                </div>
                            )}
                        </fieldset>
                    )}/>
                </div>
                <div className="card-actions justify-end">
                    <fieldset className="fieldset">
                        <div className="mx-auto">
                            <button className="btn btn-primary" type={submitState ? "submit" : "button"} disabled={!submitState}>
                                {submitState ? "Modifier le mot de passe" : <><SpinnerIcon weight="bold" className="icon animate-spin"/></>}
                            </button>
                        </div>
                    </fieldset>
                </div>
            </section>
        </form>
    );
}
