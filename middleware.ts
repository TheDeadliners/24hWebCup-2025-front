import { NextResponse, NextRequest } from "next/server";
import {check} from "@/libs/actions/authentication";

export async function middleware(req : NextRequest) {

    if (req.nextUrl.pathname !== '/' && req.nextUrl.pathname !== '/leaderboard' && !req.nextUrl.pathname.startsWith('/this-is-the-end')) {
        if (req.nextUrl.pathname == "/login" || req.nextUrl.pathname == "/register" || req.nextUrl.pathname == "/forgot-password" || req.nextUrl.pathname == "/reset-password") {
            if (await check()) {
                return NextResponse.redirect(new URL("/dashboard", req.nextUrl.origin));
            }
        } else {
            if (! await check()) {
                return NextResponse.redirect(new URL("/login?redirect=not-logged-in", req.nextUrl.origin));
            }
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|images|favicon.ico|sitemap.xml|robots.txt).*)",
    ],
}