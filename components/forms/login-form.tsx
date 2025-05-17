"use client";

import React, {useState} from "react";
import {LoginData, LoginSchema} from "@/libs/schemas/login";
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {EyeIcon, EyeSlashIcon, SpinnerIcon, WarningIcon} from "@phosphor-icons/react";
import {login} from "@/libs/actions/authentication";
import {redirect, useSearchParams} from "next/navigation";
import toast from "react-hot-toast";

export default function LoginForm() {
    const [isPasswordClearText, setPasswordClearText] = useState<boolean>(false);
    const [submitState, setSubmitState] = useState<boolean>(true);
    const params = useSearchParams();

    const toggleClearPassword = () => {
        setPasswordClearText(!isPasswordClearText);
    }

    const loginForm = useForm<LoginData>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    });

    const onSubmit = async (loginData: LoginData): Promise<void> => {
        setSubmitState(false);
        const response = await login(loginData);
        if (response.code == "LOGIN_SUCCEED") {
            toast.success(response.message);
            redirect("/dashboard");
        } else {
            toast.error(response.message);
        }
        setSubmitState(true);
    }

    return (
        <form onSubmit={loginForm.handleSubmit(onSubmit)} className="card">
            <section className="card-body items-center">
                <h2 className="card-title">Connexion</h2>
                <div className="w-full">
                    <Controller control={loginForm.control} name="email" render={({field}) => (
                        <fieldset className="fieldset mb-2">
                            <legend className="fieldset-legend">Identifiant</legend>
                            <input type="text" className="input" {...field}/>
                            {loginForm.formState.errors.email && (
                                <div role="alert" className="form-error">
                                    <WarningIcon className="icon"/>
                                    <div>{loginForm.formState.errors.email.message}</div>
                                </div>
                            )}
                        </fieldset>
                    )}/>
                    <Controller control={loginForm.control} name="password" render={({field}) => (
                        <fieldset className="fieldset mb-2">
                            <legend className="fieldset-legend">Mot de passe</legend>
                            <div className="flex gap-2">
                                <input type={isPasswordClearText ? "text" : "password"}
                                       className="input" {...field}/>
                                <button className="btn btn-primary" type="button" onClick={toggleClearPassword}>
                                    {isPasswordClearText ? <EyeIcon className="icon"/> : <EyeSlashIcon className="icon"/>}
                                </button>
                            </div>
                            {loginForm.formState.errors.password && (
                                <div role="alert" className="form-error">
                                    <WarningIcon className="icon"/>
                                    <div>{loginForm.formState.errors.password.message}</div>
                                </div>
                            )}
                        </fieldset>
                    )}/>
                </div>
                <div className="card-actions justify-end">
                    <fieldset className="fieldset">
                        <div className="mx-auto">
                            <button className="btn btn-primary" type={submitState ? "submit" : "button"} disabled={!submitState}>
                                {submitState ? "Connexion" : <><SpinnerIcon className="icon animate-spin"/></>}
                            </button>
                        </div>
                    </fieldset>
                </div>
            </section>

            { params.get("redirect") == "not-logged-in" ? (
                <div className="fieldset mt-2 p-5">
                    <div className="alert alert-error">
                        Votre session a expiré.
                    </div>
                </div>
            ) : null }
        </form>
    );
}
