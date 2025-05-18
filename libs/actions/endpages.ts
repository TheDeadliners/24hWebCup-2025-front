"use server";

import axios, {AxiosError, AxiosResponse} from "axios";
import {decodeJwt} from "jose";
import {getAuthenticationToken} from "@/libs/actions/session";

const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/end-pages`;

export type StatsResponse = {
    code: string,
    message?: string,
    data?: {
        count: number,
        likes: number,
        views: number
    }
}

export async function stats(): Promise<StatsResponse> {
    try {
        const refreshResponse =  await axios.get(`${BASE_URL}/stats`, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${await getAuthenticationToken()}`
            }
        })

        if (refreshResponse.status === 200) {
            return {
                code: "REQUEST_SUCCEED",
                data: refreshResponse.data,
            }
        } else {
            return {
                code: "REQUEST_FAILED",
                message: refreshResponse.data.message
            }
        }
    } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.response?.status === 401) {
            return {
                code: "REQUEST_FAILED",
                message: "Vous n'êtes pas connecté.",
            }
        } else if (axiosError.code == "ECONNREFUSED") {
            return {
                code: "REQUEST_ERROR",
                message: `Erreur : L'API est injoignable.`
            }
        } else {
            const responseError = axiosError.response as AxiosResponse;
            return {
                code: "REQUEST_ERROR",
                message: `Erreur : ${responseError.data?.message ?? axiosError.code}`
            }
        }
    }
}




