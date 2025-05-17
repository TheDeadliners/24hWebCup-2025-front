"use server";

import {cookies} from "next/headers";
import {decodeJwt} from "jose";
import {redirect} from "next/navigation";

export type JwtTokenData = {
    iat: number,
    exp: number,
    roles: string[],
    username: string,
    firstname: string,
    lastname: string,
    created_at: string
};

export type UserData = {
    firstname: string,
    lastname: string,
    username: string,
    created_at: string
};

export async function createSession(jwtToken: string): Promise<void> {
    const tokenData: JwtTokenData = decodeJwt(jwtToken);
    const cookieManager = await cookies();

    if (process.env.NEXT_PUBLIC_SECURE_COOKIE === "secure") {
        cookieManager.set("auth-token", jwtToken, {
            httpOnly: true,
            secure: true,
            expires: new Date(tokenData.exp * 1000),
            path: "/"
        })
    } else {
        cookieManager.set("auth-token", jwtToken, {
            httpOnly: true,
            expires: new Date(tokenData.exp * 1000),
            path: "/"
        })
    }
}

export async function destroySession(): Promise<void> {
    const cookieManager = await cookies();
    cookieManager.delete("auth-token");
    for (const cookie of cookieManager.getAll()) {
        cookieManager.delete(cookie.name)
    }
    redirect("/")
}

export async function getAuthenticationToken(): Promise<string | undefined> {
    const cookieManager = await cookies();
    return cookieManager.get("auth-token")?.value;
}

export async function getUserData(): Promise<UserData | undefined> {
    const cookieManager = await cookies();
    const cookie = cookieManager.get("auth-token");

    if (cookie?.value) {
        const details: JwtTokenData = decodeJwt(cookie.value);
        return {
            firstname: details.firstname,
            lastname: details.lastname,
            username: details.username,
            created_at: details.created_at,
        };
    } else {
        return undefined;
    }
}