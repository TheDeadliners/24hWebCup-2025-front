"use client";

import React, {useState} from "react";
import {PasswordData, PasswordSchema} from "@/libs/schemas/password";
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {SpinnerIcon, WarningIcon} from "@phosphor-icons/react";
import {password, refresh} from "@/libs/actions/authentication";
import toast from "react-hot-toast";

export default function PasswordForm() {
    const [submitState, setSubmitState] = useState<boolean>(true);



    const passwordForm = useForm<PasswordData>({
        resolver: zodResolver(PasswordSchema),
        defaultValues: {
            currentPassword: "",
            newPassword: "",
            confirmPassword: ""
        }
    });

    const onSubmit = async (passwordData: PasswordData): Promise<void> => {
        setSubmitState(false);
        const passwordResponse = await password(passwordData);
        if (passwordResponse.code == "REQUEST_SUCCEED") {
            toast.success(passwordResponse.message);

            const refreshResponse = await refresh();
            if (refreshResponse.code == "REFRESH_SUCCEED") {
                toast.success(refreshResponse.message);
            } else {
                toast.error(refreshResponse.message);
            }
        } else {
            toast.error(passwordResponse.message);
        }

        passwordForm.reset();
        setSubmitState(true);
    }

    return (
        <form onSubmit={passwordForm.handleSubmit(onSubmit)}>
            <div className="max-w-3xl mx-auto p-6">
                <div className="card bg-black shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Modifier mot de passe</h2>
                        <div className="space-y-4">
                            <Controller control={passwordForm.control} name="currentPassword" render={({field}) => (
                                <fieldset className="fieldset mb-2">
                                    <legend className="fieldset-legend">Mot de passe actuel</legend>
                                    <input type="password" className="input" {...field}/>
                                    {passwordForm.formState.errors.currentPassword && (
                                        <div role="alert" className="form-error">
                                            <WarningIcon className="icon"/>
                                            <div>{passwordForm.formState.errors.currentPassword.message}</div>
                                        </div>
                                    )}
                                </fieldset>
                            )}/>
                            <Controller control={passwordForm.control} name="newPassword" render={({field}) => (
                                <fieldset className="fieldset mb-2">
                                    <legend className="fieldset-legend">Nouveau mot de passe</legend>
                                    <input type="password" className="input" {...field}/>
                                    {passwordForm.formState.errors.newPassword && (
                                        <div role="alert" className="form-error">
                                            <WarningIcon className="icon"/>
                                            <div>{passwordForm.formState.errors.newPassword.message}</div>
                                        </div>
                                    )}
                                </fieldset>
                            )}/>
                            <Controller control={passwordForm.control} name="confirmPassword" render={({field}) => (
                                <fieldset className="fieldset mb-2">
                                    <legend className="fieldset-legend">Confirmer le mot de passe</legend>
                                    <input type="password" className="input" {...field}/>
                                    {passwordForm.formState.errors.confirmPassword && (
                                        <div role="alert" className="form-error">
                                            <WarningIcon className="icon"/>
                                            <div>{passwordForm.formState.errors.confirmPassword.message}</div>
                                        </div>
                                    )}
                                </fieldset>
                            )}/>
                        </div>
                        <div className="card-actions pt-5 justify-center">
                            <fieldset className="fieldset">
                                <div className="mx-auto">
                                    <button className="btn btn-primary" type={submitState ? "submit" : "button"} disabled={!submitState}>
                                        {submitState ? "Enregistrer" : <><SpinnerIcon className="icon animate-spin"/></>}
                                    </button>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}
