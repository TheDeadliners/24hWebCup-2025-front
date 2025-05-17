"use server";

import {LoginData} from "@/libs/schemas/login";
import axios, {AxiosError, AxiosResponse} from "axios";
import {createSession, destroySession, getAuthenticationToken, JwtTokenData} from "@/libs/actions/session";
import {decodeJwt} from "jose";
import {AccountData} from "@/libs/schemas/account";
import {PasswordData} from "@/libs/schemas/password";
import {RegisterData} from "@/libs/schemas/register";

const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/auth`;

export type AuthenticationResponse = {
    code: string,
    message: string
}

export async function login(loginData: LoginData): Promise<AuthenticationResponse> {
    try {
        const loginResponse =  await axios.post(`${BASE_URL}/login`, loginData, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })

        if (loginResponse.status === 200) {
            await createSession(loginResponse.data.token);
            return {
                code: "LOGIN_SUCCEED",
                message: "Connexion établie !"
            }
        } else {
            return {
                code: "LOGIN_FAILED",
                message: loginResponse.data.message
            }
        }
    } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.response?.status === 401) {
            return {
                code: "LOGIN_FAILED",
                message: "Identifiants invalides.",
            }
        } else if (axiosError.code == "ECONNREFUSED") {
            return {
                code: "LOGIN_ERROR",
                message: `Erreur : L'API est injoignable.`
            }
        } else {
            const responseError = axiosError.response as AxiosResponse;
            return {
                code: "LOGIN_ERROR",
                message: `Erreur : ${responseError.data?.message ?? axiosError.code}`
            }
        }
    }
}

export async function register(registerData: RegisterData): Promise<AuthenticationResponse> {
    try {
        const registerResponse =  await axios.post(`${BASE_URL}/register`, registerData, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })

        if (registerResponse.status === 200) {
            return {
                code: "REGISTER_SUCCEED",
                message: registerResponse.data.message
            }
        } else {
            return {
                code: "REGISTER_FAILED",
                message: registerResponse.data.message
            }
        }
    } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.code == "ECONNREFUSED") {
            return {
                code: "REGISTER_ERROR",
                message: `Erreur : L'API est injoignable.`
            }
        } else {
            const responseError = axiosError.response as AxiosResponse;
            return {
                code: "REGISTER_ERROR",
                message: `Erreur : ${responseError.data?.message ?? axiosError.code}`
            }
        }
    }
}

export async function refresh(): Promise<AuthenticationResponse> {
    try {
        const refreshResponse =  await axios.get(`${BASE_URL}/refresh`, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${await getAuthenticationToken()}`
            }
        })

        if (refreshResponse.status === 200) {
            await createSession(refreshResponse.data.token);
            const tokenData: JwtTokenData = decodeJwt(refreshResponse.data.token)
            return {
                code: "REFRESH_SUCCEED",
                message: `Session actualisée pour ${tokenData.username} !`
            }
        } else {
            return {
                code: "REFRESH_FAILED",
                message: refreshResponse.data.message
            }
        }
    } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.response?.status === 401) {
            return {
                code: "REFRESH_FAILED",
                message: "Vous n'êtes pas connecté.",
            }
        } else if (axiosError.code == "ECONNREFUSED") {
            return {
                code: "REFRESH_ERROR",
                message: `Erreur : L'API est injoignable.`
            }
        } else {
            const responseError = axiosError.response as AxiosResponse;
            return {
                code: "REFRESH_ERROR",
                message: `Erreur : ${responseError.data?.message ?? axiosError.code}`
            }
        }
    }
}

export async function logout(): Promise<void> {
    await destroySession();
}

export async function check(): Promise<boolean> {
    const authSession = await getAuthenticationToken();
    return authSession !== undefined;
}

export async function password(passwordData: PasswordData): Promise<AuthenticationResponse> {
    try {
        const passwordResponse =  await axios.post(`${BASE_URL}/change-password`, passwordData, {
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

export async function account(accountData: AccountData): Promise<AuthenticationResponse> {
    try {
        const accountResponse =  await axios.post(`${BASE_URL}/edit-account`, accountData, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${await getAuthenticationToken()}`
            }
        })

        if (accountResponse.status === 200) {
            return {
                code: "REQUEST_SUCCEED",
                message: accountResponse.data.message
            }
        } else {
            return {
                code: "REQUEST_FAILED",
                message: accountResponse.data.message
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