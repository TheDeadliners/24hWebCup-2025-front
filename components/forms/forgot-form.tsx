"use client";

import React, {useState} from "react";
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {forgot} from "@/libs/actions/authentication";
import toast from "react-hot-toast";
import {ForgotData, ForgotSchema} from "@/libs/schemas/forgot";
import {WarningIcon, SpinnerIcon} from "@phosphor-icons/react/dist/ssr";

export default function ForgotForm() {
    const [submitState, setSubmitState] = useState<boolean>(true);

    const forgotForm = useForm<ForgotData>({
        resolver: zodResolver(ForgotSchema),
        defaultValues: {
            email: "",
        }
    });

    const onSubmit = async (forgotData: ForgotData): Promise<void> => {
        setSubmitState(false);
        const response = await forgot(forgotData);
        if (response.code == "FORGOT_SUCCEED") {
            toast.success(response.message);
        } else {
            toast.error(response.message);
        }
        setSubmitState(true);
    }

    return (
        <form onSubmit={forgotForm.handleSubmit(onSubmit)} className="card">
            <section className="card-body items-center">
                <h2 className="card-title">Mot de passe oublié</h2>
                <div className="w-full">
                    <Controller control={forgotForm.control} name="email" render={({field}) => (
                        <fieldset className="fieldset mb-2">
                            <legend className="fieldset-legend">Identifiant</legend>
                            <input type="text" className="input" {...field}/>
                            {forgotForm.formState.errors.email && (
                                <div role="alert" className="form-error">
                                    <WarningIcon className="icon"/>
                                    <div>{forgotForm.formState.errors.email.message}</div>
                                </div>
                            )}
                        </fieldset>
                    )}/>
                </div>
                <div className="card-actions justify-end">
                    <fieldset className="fieldset">
                        <div className="mx-auto">
                            <button className="btn btn-primary" type={submitState ? "submit" : "button"} disabled={!submitState}>
                                {submitState ? "Demande de lien" : <><SpinnerIcon weight="bold" className="icon animate-spin"/></>}
                            </button>
                        </div>
                    </fieldset>
                </div>
            </section>
        </form>
    );
}
