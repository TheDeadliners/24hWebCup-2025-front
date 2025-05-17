(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/[root-of-the-server]__e15669d1._.js", {

"[externals]/node:buffer [external] (node:buffer, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}}),
"[project]/libs/actions/session.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createSession": (()=>createSession),
    "destroySession": (()=>destroySession),
    "getAuthenticationToken": (()=>getAuthenticationToken),
    "getUserData": (()=>getUserData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/headers.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$cookies$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/request/cookies.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$decode_jwt$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/util/decode_jwt.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/navigation.react-server.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/client/components/redirect.js [middleware-edge] (ecmascript)");
"use server";
;
;
;
async function createSession(jwtToken) {
    const tokenData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$decode_jwt$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["decodeJwt"])(jwtToken);
    const cookieManager = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$cookies$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["cookies"])();
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } else {
        cookieManager.set("auth-token", jwtToken, {
            httpOnly: true,
            expires: new Date(tokenData.exp * 1000),
            path: "/"
        });
    }
}
async function destroySession() {
    const cookieManager = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$cookies$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["cookies"])();
    cookieManager.delete("auth-token");
    for (const cookie of cookieManager.getAll()){
        cookieManager.delete(cookie.name);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["redirect"])("/");
}
async function getAuthenticationToken() {
    const cookieManager = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$cookies$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["cookies"])();
    return cookieManager.get("auth-token")?.value;
}
async function getUserData() {
    const cookieManager = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$cookies$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["cookies"])();
    const cookie = cookieManager.get("auth-token");
    if (cookie?.value) {
        const details = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$decode_jwt$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["decodeJwt"])(cookie.value);
        return {
            firstname: details.firstname,
            lastname: details.lastname,
            username: details.username
        };
    } else {
        return undefined;
    }
}
}}),
"[project]/libs/actions/authentication.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "account": (()=>account),
    "check": (()=>check),
    "login": (()=>login),
    "logout": (()=>logout),
    "password": (()=>password),
    "refresh": (()=>refresh),
    "register": (()=>register)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$actions$2f$session$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/libs/actions/session.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$decode_jwt$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/util/decode_jwt.js [middleware-edge] (ecmascript)");
"use server";
;
;
;
const BASE_URL = `${("TURBOPACK compile-time value", "http://localhost:8000/api")}/auth`;
async function login(loginData) {
    try {
        const loginResponse = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].post(`${BASE_URL}/login`, loginData, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        });
        if (loginResponse.status === 200) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$actions$2f$session$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createSession"])(loginResponse.data.token);
            return {
                code: "LOGIN_SUCCEED",
                message: "Connexion établie !"
            };
        } else {
            return {
                code: "LOGIN_FAILED",
                message: loginResponse.data.message
            };
        }
    } catch (error) {
        const axiosError = error;
        if (axiosError.response?.status === 401) {
            return {
                code: "LOGIN_FAILED",
                message: "Identifiants invalides."
            };
        } else if (axiosError.code == "ECONNREFUSED") {
            return {
                code: "LOGIN_ERROR",
                message: `Erreur : L'API est injoignable.`
            };
        } else {
            const responseError = axiosError.response;
            return {
                code: "LOGIN_ERROR",
                message: `Erreur : ${responseError.data?.message ?? axiosError.code}`
            };
        }
    }
}
async function register(registerData) {
    try {
        const registerResponse = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].post(`${BASE_URL}/register`, registerData, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        });
        if (registerResponse.status === 200) {
            return {
                code: "REGISTER_SUCCEED",
                message: registerResponse.data.message
            };
        } else {
            return {
                code: "REGISTER_FAILED",
                message: registerResponse.data.message
            };
        }
    } catch (error) {
        const axiosError = error;
        if (axiosError.code == "ECONNREFUSED") {
            return {
                code: "REGISTER_ERROR",
                message: `Erreur : L'API est injoignable.`
            };
        } else {
            const responseError = axiosError.response;
            return {
                code: "REGISTER_ERROR",
                message: `Erreur : ${responseError.data?.message ?? axiosError.code}`
            };
        }
    }
}
async function refresh() {
    try {
        const refreshResponse = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].get(`${BASE_URL}/refresh`, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${await (0, __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$actions$2f$session$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getAuthenticationToken"])()}`
            }
        });
        if (refreshResponse.status === 200) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$actions$2f$session$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createSession"])(refreshResponse.data.token);
            const tokenData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$decode_jwt$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["decodeJwt"])(refreshResponse.data.token);
            return {
                code: "REFRESH_SUCCEED",
                message: `Session actualisée pour ${tokenData.username} !`
            };
        } else {
            return {
                code: "REFRESH_FAILED",
                message: refreshResponse.data.message
            };
        }
    } catch (error) {
        const axiosError = error;
        if (axiosError.response?.status === 401) {
            return {
                code: "REFRESH_FAILED",
                message: "Vous n'êtes pas connecté."
            };
        } else if (axiosError.code == "ECONNREFUSED") {
            return {
                code: "REFRESH_ERROR",
                message: `Erreur : L'API est injoignable.`
            };
        } else {
            const responseError = axiosError.response;
            return {
                code: "REFRESH_ERROR",
                message: `Erreur : ${responseError.data?.message ?? axiosError.code}`
            };
        }
    }
}
async function logout() {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$actions$2f$session$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["destroySession"])();
}
async function check() {
    const authSession = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$actions$2f$session$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getAuthenticationToken"])();
    return authSession !== undefined;
}
async function password(passwordData) {
    try {
        const passwordResponse = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].post(`${BASE_URL}/change-password`, passwordData, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${await (0, __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$actions$2f$session$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getAuthenticationToken"])()}`
            }
        });
        if (passwordResponse.status === 200) {
            return {
                code: "REQUEST_SUCCEED",
                message: passwordResponse.data.message
            };
        } else {
            return {
                code: "REQUEST_FAILED",
                message: passwordResponse.data.message
            };
        }
    } catch (error) {
        const axiosError = error;
        if (axiosError.response?.status === 401) {
            return {
                code: "REQUEST_FAILED",
                message: "Vous n'êtes pas connecté."
            };
        } else if (axiosError.code == "ECONNREFUSED") {
            return {
                code: "REQUEST_ERROR",
                message: `Erreur : L'API est injoignable.`
            };
        } else {
            const responseError = axiosError.response;
            return {
                code: "REQUEST_ERROR",
                message: `Erreur : ${responseError.data?.message ?? axiosError.code}`
            };
        }
    }
}
async function account(accountData) {
    try {
        const accountResponse = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].post(`${BASE_URL}/edit-account`, accountData, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${await (0, __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$actions$2f$session$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getAuthenticationToken"])()}`
            }
        });
        if (accountResponse.status === 200) {
            return {
                code: "REQUEST_SUCCEED",
                message: accountResponse.data.message
            };
        } else {
            return {
                code: "REQUEST_FAILED",
                message: accountResponse.data.message
            };
        }
    } catch (error) {
        const axiosError = error;
        if (axiosError.response?.status === 401) {
            return {
                code: "REQUEST_FAILED",
                message: "Vous n'êtes pas connecté."
            };
        } else if (axiosError.code == "ECONNREFUSED") {
            return {
                code: "REQUEST_ERROR",
                message: `Erreur : L'API est injoignable.`
            };
        } else {
            const responseError = axiosError.response;
            return {
                code: "REQUEST_ERROR",
                message: `Erreur : ${responseError.data?.message ?? axiosError.code}`
            };
        }
    }
}
}}),
"[project]/middleware.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "config": (()=>config),
    "middleware": (()=>middleware)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$actions$2f$authentication$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/libs/actions/authentication.ts [middleware-edge] (ecmascript)");
;
;
async function middleware(req) {
    if (req.nextUrl.pathname != '/') {
        if (req.nextUrl.pathname == "/login" || req.nextUrl.pathname == "/register" || req.nextUrl.pathname == "/forgot-password" || req.nextUrl.pathname == "/reset-password" || req.nextUrl.pathname == "/leaderboard") {
            if (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$actions$2f$authentication$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["check"])()) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/dashboard", req.nextUrl.origin));
            }
        } else {
            if (!await (0, __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$actions$2f$authentication$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["check"])()) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/login?redirect=not-logged-in", req.nextUrl.origin));
            }
        }
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
}
const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|images|favicon.ico|sitemap.xml|robots.txt).*)"
    ]
};
}}),
}]);

//# sourceMappingURL=%5Broot-of-the-server%5D__e15669d1._.js.map