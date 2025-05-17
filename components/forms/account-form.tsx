"use client";

import React, {useState} from "react";
import {AccountData, AccountSchema} from "@/libs/schemas/account";
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {SpinnerIcon, WarningIcon} from "@phosphor-icons/react";
import toast from "react-hot-toast";
import {account} from "@/libs/actions/authentication";
import {refresh} from "@/libs/actions/authentication";
import {UserData} from "@/libs/actions/session";

export default function AccountForm({accountDetails}: {accountDetails: UserData}) {
    const [submitState, setSubmitState] = useState<boolean>(true);

    const accountForm = useForm<AccountData>({
        resolver: zodResolver(AccountSchema),
        defaultValues: {
            firstname: accountDetails.firstname,
            lastname: accountDetails.lastname,
            currentPassword: ""
        }
    });

    const onSubmit = async (accountData: AccountData): Promise<void> => {
        setSubmitState(false);
        const accountResponse = await account(accountData);
        if (accountResponse.code == "REQUEST_SUCCEED") {
            toast.success(accountResponse.message);
            accountForm.reset({
                currentPassword: ""
            });

            const refreshResponse = await refresh();
            if (refreshResponse.code == "REFRESH_SUCCEED") {
                toast.success(refreshResponse.message);
            } else {
                toast.error(refreshResponse.message);
            }
        } else {
            toast.error(accountResponse.message);
        }
        setSubmitState(true);
    }

    return (
        <form onSubmit={accountForm.handleSubmit(onSubmit)}>
            <div className="max-w-3xl mx-auto p-6">
                <div className="card bg-black shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Modifier compte</h2>
                        <div className="space-y-4">
                            <Controller control={accountForm.control} name="firstname" render={({field}) => (
                                <fieldset className="fieldset mb-2">
                                    <legend className="fieldset-legend">Prénom</legend>
                                    <input type="text" className="input" {...field}/>
                                    {accountForm.formState.errors.firstname && (
                                        <div role="alert" className="form-error">
                                            <WarningIcon className="icon"/>
                                            <div>{accountForm.formState.errors.firstname.message}</div>
                                        </div>
                                    )}
                                </fieldset>
                            )}/>
                            <Controller control={accountForm.control} name="lastname" render={({field}) => (
                                <fieldset className="fieldset mb-2">
                                    <legend className="fieldset-legend">Nom</legend>
                                    <input type="text" className="input" {...field}/>
                                    {accountForm.formState.errors.lastname && (
                                        <div role="alert" className="form-error">
                                            <WarningIcon className="icon"/>
                                            <div>{accountForm.formState.errors.lastname.message}</div>
                                        </div>
                                    )}
                                </fieldset>
                            )}/>
                            <Controller control={accountForm.control} name="currentPassword" render={({field}) => (
                                <fieldset className="fieldset mb-2">
                                    <legend className="fieldset-legend">Mot de passe actuel</legend>
                                    <input type="password" className="input" {...field}/>
                                    {accountForm.formState.errors.currentPassword && (
                                        <div role="alert" className="form-error">
                                            <WarningIcon className="icon"/>
                                            <div>{accountForm.formState.errors.currentPassword.message}</div>
                                        </div>
                                    )}
                                </fieldset>
                            )}/>
                        </div>
                        <div className="card-actions pt-5 justify-center">
                            <fieldset className="fieldset">
                                <div className="mx-auto">
                                    <button className="btn btn-primary" type={submitState ? "submit" : "button"} disabled={!submitState}>
                                        {submitState ? "Enregistrer" : <>Enregistrement <SpinnerIcon className="icon animate-spin"/></>}
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
