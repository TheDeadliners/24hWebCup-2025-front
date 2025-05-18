"use client";

import React, {useState} from "react";
import {RegisterData, RegisterSchema} from "@/libs/schemas/register";
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {SpinnerIcon, WarningIcon} from "@phosphor-icons/react";
import {register} from "@/libs/actions/authentication";
import {redirect} from "next/navigation";
import toast from "react-hot-toast";

export default function RegisterForm() {
    const [submitState, setSubmitState] = useState<boolean>(true);

    const registerForm = useForm<RegisterData>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: "",
            firstname: "",
            lastname: "",
            password: "",
            confirmPassword: "",
        }
    });

    const onSubmit = async (registerData: RegisterData): Promise<void> => {
        setSubmitState(false);
        const response = await register(registerData);
        if (response.code == "REGISTER_SUCCEED") {
            toast.success(response.message, {duration: 10000});
            redirect("/login");
        } else {
            toast.error(response.message);
        }
        setSubmitState(true);
    }

    return (
        <form onSubmit={registerForm.handleSubmit(onSubmit)} className="card w-full md:w-auto">
            <section className="card-body items-center">
                <h2 className="card-title">Inscription</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-5 w-full">
                    <div>
                        <Controller control={registerForm.control} name="email" render={({field}) => (
                            <fieldset className="fieldset mb-2">
                                <legend className="fieldset-legend">Identifiant</legend>
                                <input type="text" className="input" {...field}/>
                                {registerForm.formState.errors.email && (
                                    <div role="alert" className="form-error">
                                        <WarningIcon className="icon"/>
                                        <div>{registerForm.formState.errors.email.message}</div>
                                    </div>
                                )}
                            </fieldset>
                        )}/>
                        <Controller control={registerForm.control} name="password" render={({field}) => (
                            <fieldset className="fieldset mb-2">
                                <legend className="fieldset-legend">Mot de passe</legend>
                                <input type="password" className="input" {...field}/>
                                {registerForm.formState.errors.password && (
                                    <div role="alert" className="form-error">
                                        <WarningIcon className="icon"/>
                                        <div>{registerForm.formState.errors.password.message}</div>
                                    </div>
                                )}
                            </fieldset>
                        )}/>
                        <Controller control={registerForm.control} name="confirmPassword" render={({field}) => (
                            <fieldset className="fieldset mb-2">
                                <legend className="fieldset-legend">Confirmer le mot de passe</legend>
                                <input type="password" className="input" {...field}/>
                                {registerForm.formState.errors.confirmPassword && (
                                    <div role="alert" className="form-error">
                                        <WarningIcon className="icon"/>
                                        <div>{registerForm.formState.errors.confirmPassword.message}</div>
                                    </div>
                                )}
                            </fieldset>
                        )}/>
                    </div>
                    <div className="h-full flex flex-col justify-center">
                        <Controller control={registerForm.control} name="firstname" render={({field}) => (
                            <fieldset className="fieldset mb-2">
                                <legend className="fieldset-legend">Prénom</legend>
                                <input type="text" className="input" {...field}/>
                                {registerForm.formState.errors.firstname && (
                                    <div role="alert" className="form-error">
                                        <WarningIcon className="icon"/>
                                        <div>{registerForm.formState.errors.firstname.message}</div>
                                    </div>
                                )}
                            </fieldset>
                        )}/>
                        <Controller control={registerForm.control} name="lastname" render={({field}) => (
                            <fieldset className="fieldset mb-2">
                                <legend className="fieldset-legend">Nom</legend>
                                <input type="text" className="input" {...field}/>
                                {registerForm.formState.errors.lastname && (
                                    <div role="alert" className="form-error">
                                        <WarningIcon className="icon"/>
                                        <div>{registerForm.formState.errors.lastname.message}</div>
                                    </div>
                                )}
                            </fieldset>
                        )}/>
                    </div>
                </div>
                <div className="card-actions justify-end">
                    <fieldset className="fieldset">
                        <div className="mx-auto">
                            <button className="btn btn-primary" type={submitState ? "submit" : "button"} disabled={!submitState}>
                                {submitState ? "Inscription" : <><SpinnerIcon className="icon animate-spin"/></>}
                            </button>
                        </div>
                    </fieldset>
                </div>
            </section>
        </form>
    );
}
