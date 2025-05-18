"use server";

import axios, {AxiosError, AxiosResponse} from "axios";
import {decodeJwt} from "jose";
import {getAuthenticationToken} from "@/libs/actions/session";
import {transformObjectToSnakeCaseKeys} from "@/libs/libs";
import {EndPageData} from "@/libs/schemas/endpage";

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

export type ActionResponse = {
    code: string,
    message: string,
}

export type EndPage = {
    "id": string,
    "category": string,
    "text": string,
    "createdAt": string,
    "image": string,
    "music": string,
    "background": string,
    "gif": string,
    "user": {
        "id": string,
        "firstname": string,
        "lastname": string
    },
    "title": string,
    "views": number,
    "likes": number
}


export type LeaderBoardResponse = {
    code: string,
    message?: string,
    data?: EndPage[]
}

export type EndPageResponse = {
    code: string,
    message?: string,
    data?: EndPage
}

export async function getStats(): Promise<StatsResponse> {
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
export async function getMines(): Promise<LeaderBoardResponse> {
    try {
        const refreshResponse =  await axios.get(`${BASE_URL}/my-endpages`, {
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

export async function view(viewId: string): Promise<EndPage> {
    try {
        const passwordResponse =  await axios.post(`${BASE_URL}/public/view`, {id: viewId}, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${await getAuthenticationToken()}`
            }
        })


        if (passwordResponse.status === 200) {
            return {
                code: "REQUEST_SUCCEED",
                message: passwordResponse.data as EndPage
            }
        } else {
            return {
                code: "REQUEST_FAILED",
                message: passwordResponse.data.message
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

export async function getLeaderboard(): Promise<LeaderBoardResponse> {
    try {
        const leaderboardResponse = await axios.get(`${BASE_URL}/public/leaderboard`, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            }
        })


        if (leaderboardResponse.status === 200) {
            return {
                code: "REQUEST_SUCCEED",
                data: transformObjectToSnakeCaseKeys(leaderboardResponse.data) as EndPage[],
            }
        } else {
            return {
                code: "REQUEST_FAILED",
                message: leaderboardResponse.data.message
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

export async function create(endpageData: EndPageData): Promise<ActionResponse> {
    try {
        const passwordResponse =  await axios.post(`${BASE_URL}`, endpageData, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${await getAuthenticationToken()}`
            }
        })

        if (passwordResponse.status === 200) {
            return {
                code: "REQUEST_SUCCEED",
                message: passwordResponse.data.message
            }
        } else {
            return {
                code: "REQUEST_FAILED",
                message: passwordResponse.data.message
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



