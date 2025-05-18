"use client";

import React, {ChangeEvent, useState} from "react";
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {SpinnerIcon, WarningIcon} from "@phosphor-icons/react";
import toast from "react-hot-toast";
import {EndPageData, EndPageSchema} from "@/libs/schemas/endpage";
import {create} from "@/libs/actions/endpages";
import Image from "next/image";
import {redirect} from "next/navigation";

export default function EndPageForm() {
    const [submitState, setSubmitState] = useState<boolean>(true);

    const categories = [
        "ABSURDE",
        "HONNÊTE",
        "PASSIF-AGGRESSIF",
        "TOUCHANT",
        'CLASSE',
        'DRAMATIQUE'
    ]

    const photos = [
        "absurd.jpg",
        "honest.jpg",
        "passive-aggressive.jpg",
        "touching.jpg",
        'classy.jpg',
        'drama.jpg'
    ]

    const gifs = [
        "https://media.giphy.com/media/F0fnMTynQfFUrpbZA1/giphy.gif?cid=ecf05e47xqt7ivx1biknj0bf58t1lnr5qk5b7g6me6c0zcz5&ep=v1_gifs_search&rid=giphy.gif&ct=g",
        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb24zN2NvbWtmYWowZXFydnZ1bDNreXM5Mzhjem5rZ2VlOTFxYnE4bCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/5t2ev2eCEzYWjag91c/giphy.gif",
        "https://media.giphy.com/media/GELwcprquGddm/giphy.gif?cid=ecf05e47knlbgaxik4gs9nfqjrzq8d9yb6aylosaljucuxmi&ep=v1_gifs_search&rid=giphy.gif&ct=g",
        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzZtbzJhNXZtNDR0M242ODF6aW1qN3F0ZzBvbTRxYnkwaHh2bTc0MyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/LXedhClrfqrppgfViE/giphy.gif",
        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExamlubGo2czdoOHFlZnhobDdrbjZ4aGlwNWl5NTd3d2tlMXZyZ21rcSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/1BXa2alBjrCXC/giphy.gif"
    ]

    const endpageForm = useForm<EndPageData>({
        resolver: zodResolver(EndPageSchema),
        defaultValues: {
            title: "Mon message",
            background: "absurd.jpg",
            text: "mon message absurde, c'est fini !",
            category: "absurde",
            gif: "https://media.giphy.com/media/F0fnMTynQfFUrpbZA1/giphy.gif?cid=ecf05e47xqt7ivx1biknj0bf58t1lnr5qk5b7g6me6c0zcz5&ep=v1_gifs_search&rid=giphy.gif&ct=g",
        }
    });

    function handleBackgroundChange(event: ChangeEvent<HTMLInputElement>) {
        endpageForm.setValue("background", event.target.value);
    }

    function handleGifChange(event: ChangeEvent<HTMLInputElement>) {
        endpageForm.setValue("gif", event.target.value);
    }

    function handleCategoryChange(event: ChangeEvent<HTMLInputElement>) {
        endpageForm.setValue("gif", event.target.value);
    }

    const onSubmit = async (endpageData: EndPageData): Promise<void> => {
        setSubmitState(false);

        const endpageResponse = await create(endpageData);
        if (endpageResponse.code == "REQUEST_SUCCEED") {
            toast.success(endpageResponse.message);
        } else {
            toast.error(endpageResponse.message);
        }
        redirect("/dashboard");
        setSubmitState(true);
    }

    return (
        <form onSubmit={endpageForm.handleSubmit(onSubmit)}>
            <div className="max-w-3xl mx-auto p-6">
                <div className="card bg-black shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Créer une EndPage</h2>
                        <div className="space-y-4">
                            <fieldset className="fieldset mb-4">
                                <legend className="fieldset-legend mb-2">Catégorie</legend>
                                <div className="flex flex-wrap justify-around">
                                    {categories.map((category, index) => (
                                        <label key={index} className="flex flex-col text-base items-center gap-2 mb-2">
                                            <input type="radio" className="radio radio-sm radio-primary" {...endpageForm.register("category")} onChange={handleCategoryChange} value={category}/>
                                            <div>{category}</div>
                                        </label>
                                    ))}
                                </div>
                                {endpageForm.formState.errors.category != undefined ? (
                                    <div role="alert" className="form-error">
                                        <WarningIcon className="icon"/>
                                        <div>{endpageForm.formState.errors.category.message}</div>
                                    </div>
                                ) : null}
                            </fieldset>

                            <Controller control={endpageForm.control} name="title" render={({field}) => (
                                <fieldset className="fieldset mb-2">
                                    <legend className="fieldset-legend">Titre</legend>
                                    <input type="text" className="input" {...field}/>
                                    {endpageForm.formState.errors.title && (
                                        <div role="alert" className="form-error">
                                            <WarningIcon className="icon"/>
                                            <div>{endpageForm.formState.errors.title.message}</div>
                                        </div>
                                    )}
                                </fieldset>
                            )}/>

                            <Controller control={endpageForm.control} name="text" render={({field}) => (
                                <fieldset className="fieldset mb-2">
                                    <legend className="fieldset-legend">Message</legend>
                                    <input type="text" className="input" {...field}/>
                                    {endpageForm.formState.errors.text && (
                                        <div role="alert" className="form-error">
                                            <WarningIcon className="icon"/>
                                            <div>{endpageForm.formState.errors.text.message}</div>
                                        </div>
                                    )}
                                </fieldset>
                            )}/>

                            <fieldset className="fieldset mb-4">
                                <legend className="fieldset-legend mb-2">Arrière-plan</legend>
                                <div className="flex flex-wrap justify-around">
                                    {photos.map((photo, index) => (
                                        <label key={index} className="flex flex-col text-base items-center gap-2 mb-2">
                                            <input type="radio" className="radio radio-sm radio-primary" {...endpageForm.register("background")} onChange={handleBackgroundChange} value={photo}/>
                                            <Image src={`/images/${photo}`} alt={String(index)} width={64} height={64}/>
                                        </label>
                                    ))}
                                </div>
                                {endpageForm.formState.errors.background != undefined ? (
                                    <div role="alert" className="form-error">
                                        <WarningIcon className="icon"/>
                                        <div>{endpageForm.formState.errors.background.message}</div>
                                    </div>
                                ) : null}
                            </fieldset>

                            <fieldset className="fieldset mb-4">
                                <legend className="fieldset-legend mb-2">GIF</legend>
                                <div className="flex flex-wrap justify-around">
                                    {gifs.map((gif, index) => (
                                        <label key={index} className="flex flex-col text-base items-center gap-2 mb-2">
                                            <input type="radio" className="radio radio-sm radio-primary" {...endpageForm.register("gif")} onChange={handleGifChange} value={gif}/>
                                            <img src={`${gif}`} alt={String(index)} width={128} height={128}/>
                                        </label>
                                    ))}
                                </div>
                                {endpageForm.formState.errors.gif != undefined ? (
                                    <div role="alert" className="form-error">
                                        <WarningIcon className="icon"/>
                                        <div>{endpageForm.formState.errors.gif.message}</div>
                                    </div>
                                ) : null}
                            </fieldset>
                        </div>
                        <div className="card-actions pt-5 justify-center">
                            <fieldset className="fieldset">
                                <div className="mx-auto">
                                    <button className="btn btn-primary" type={submitState ? "submit" : "button"} disabled={!submitState}>
                                        {submitState ? "Publier" : <>Enregistrement <SpinnerIcon className="icon animate-spin"/></>}
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
