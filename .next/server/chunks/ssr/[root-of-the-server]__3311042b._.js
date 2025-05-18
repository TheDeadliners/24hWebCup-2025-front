module.exports = {

"[externals]/util [external] (util, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/https [external] (https, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/crypto [external] (crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[externals]/assert [external] (assert, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}}),
"[externals]/tty [external] (tty, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}}),
"[externals]/os [external] (os, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/events [external] (events, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}}),
"[project]/libs/actions/session.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"0022a358f3a895515ba22ff142925402071a8f901f":"destroySession","003c2f48fc9fd4b16b1b35e0c07441da6877e057d9":"getAuthenticationToken","0069552b5f2fb2d1588bad2f52a1e5e4092c77e2a5":"getUserData","407615b1fe7c12b66d44b5b6eeb3ccb4d4bde5158a":"createSession"},"",""] */ __turbopack_context__.s({
    "createSession": (()=>createSession),
    "destroySession": (()=>destroySession),
    "getAuthenticationToken": (()=>getAuthenticationToken),
    "getUserData": (()=>getUserData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$decode_jwt$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/util/decode_jwt.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
async function createSession(jwtToken) {
    const tokenData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$decode_jwt$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decodeJwt"])(jwtToken);
    const cookieManager = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
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
    const cookieManager = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    cookieManager.delete("auth-token");
    for (const cookie of cookieManager.getAll()){
        cookieManager.delete(cookie.name);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/");
}
async function getAuthenticationToken() {
    const cookieManager = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    return cookieManager.get("auth-token")?.value;
}
async function getUserData() {
    const cookieManager = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    const cookie = cookieManager.get("auth-token");
    if (cookie?.value) {
        const details = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$decode_jwt$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decodeJwt"])(cookie.value);
        return {
            firstname: details.firstname,
            lastname: details.lastname,
            username: details.username,
            created_at: details.created_at
        };
    } else {
        return undefined;
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createSession,
    destroySession,
    getAuthenticationToken,
    getUserData
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createSession, "407615b1fe7c12b66d44b5b6eeb3ccb4d4bde5158a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(destroySession, "0022a358f3a895515ba22ff142925402071a8f901f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAuthenticationToken, "003c2f48fc9fd4b16b1b35e0c07441da6877e057d9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getUserData, "0069552b5f2fb2d1588bad2f52a1e5e4092c77e2a5", null);
}}),
"[project]/libs/actions/authentication.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"004de578af4ed21ceafbf3987e56aad2028873a80a":"check","0065e98b5a8ed8a40c608a126ae238cc218bd341b9":"refresh","00f0bb854a9631403e20b09db56e5924b7c214739d":"logout","40065be6dded5ab37c547464a29494f29d5572b00c":"login","4039b31958895b2184a8362927e3d7aa293af8d83b":"account","404d1bb54a906db45b0449b76b3d642cff3371890e":"register","404d6cf451abee4754922f3f3b2e658fc47d4c05f4":"forgot","4087f8796819b70ade1e052ee3d000ef634d9a1f54":"reset","408a46e618e0120c38f5b7555c735b60860d1276ad":"password"},"",""] */ __turbopack_context__.s({
    "account": (()=>account),
    "check": (()=>check),
    "forgot": (()=>forgot),
    "login": (()=>login),
    "logout": (()=>logout),
    "password": (()=>password),
    "refresh": (()=>refresh),
    "register": (()=>register),
    "reset": (()=>reset)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$actions$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/libs/actions/session.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$decode_jwt$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/util/decode_jwt.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
const BASE_URL = `${("TURBOPACK compile-time value", "https://api.deadliners.lareunion.webcup.hodi.host/api")}/auth`;
async function login(loginData) {
    try {
        const loginResponse = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].post(`${BASE_URL}/login`, loginData, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        });
        if (loginResponse.status === 200) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$actions$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createSession"])(loginResponse.data.token);
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
async function forgot(forgotData) {
    try {
        const forgotResponse = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].post(`${BASE_URL}/forgot-password`, forgotData, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        });
        if (forgotResponse.status === 200) {
            return {
                code: "FORGOT_SUCCEED",
                message: forgotResponse.data.message
            };
        } else {
            return {
                code: "FORGOT_FAILED",
                message: forgotResponse.data.message
            };
        }
    } catch (error) {
        const axiosError = error;
        if (axiosError.code == "ECONNREFUSED") {
            return {
                code: "FORGOT_ERROR",
                message: `Erreur : L'API est injoignable.`
            };
        } else {
            const responseError = axiosError.response;
            return {
                code: "FORGOT_ERROR",
                message: `Erreur : ${responseError.data?.message ?? axiosError.code}`
            };
        }
    }
}
async function register(registerData) {
    try {
        const registerResponse = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].post(`${BASE_URL}/register`, registerData, {
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
async function reset(resetData) {
    try {
        const registerResponse = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].post(`${BASE_URL}/reset-password`, resetData, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        });
        if (registerResponse.status === 200) {
            return {
                code: "RESET_SUCCEED",
                message: registerResponse.data.message
            };
        } else {
            return {
                code: "RESET_FAILED",
                message: registerResponse.data.message
            };
        }
    } catch (error) {
        const axiosError = error;
        if (axiosError.code == "ECONNREFUSED") {
            return {
                code: "RESET_ERROR",
                message: `Erreur : L'API est injoignable.`
            };
        } else {
            const responseError = axiosError.response;
            return {
                code: "RESET_ERROR",
                message: `Erreur : ${responseError.data?.message ?? axiosError.code}`
            };
        }
    }
}
async function refresh() {
    try {
        const refreshResponse = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].get(`${BASE_URL}/refresh`, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${await (0, __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$actions$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthenticationToken"])()}`
            }
        });
        if (refreshResponse.status === 200) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$actions$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createSession"])(refreshResponse.data.token);
            const tokenData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$decode_jwt$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decodeJwt"])(refreshResponse.data.token);
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
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$actions$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["destroySession"])();
}
async function check() {
    const authSession = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$actions$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthenticationToken"])();
    return authSession !== undefined;
}
async function password(passwordData) {
    try {
        const passwordResponse = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].post(`${BASE_URL}/change-password`, passwordData, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${await (0, __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$actions$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthenticationToken"])()}`
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
        const accountResponse = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].post(`${BASE_URL}/edit-account`, accountData, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${await (0, __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$actions$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthenticationToken"])()}`
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
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    login,
    forgot,
    register,
    reset,
    refresh,
    logout,
    check,
    password,
    account
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(login, "40065be6dded5ab37c547464a29494f29d5572b00c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(forgot, "404d6cf451abee4754922f3f3b2e658fc47d4c05f4", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(register, "404d1bb54a906db45b0449b76b3d642cff3371890e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(reset, "4087f8796819b70ade1e052ee3d000ef634d9a1f54", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(refresh, "0065e98b5a8ed8a40c608a126ae238cc218bd341b9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(logout, "00f0bb854a9631403e20b09db56e5924b7c214739d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(check, "004de578af4ed21ceafbf3987e56aad2028873a80a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(password, "408a46e618e0120c38f5b7555c735b60860d1276ad", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(account, "4039b31958895b2184a8362927e3d7aa293af8d83b", null);
}}),
"[project]/.next-internal/server/app/(root)/(auth)/register/page/actions.js { ACTIONS_MODULE0 => \"[project]/libs/actions/authentication.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$actions$2f$authentication$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/libs/actions/authentication.ts [app-rsc] (ecmascript)");
;
}}),
"[project]/.next-internal/server/app/(root)/(auth)/register/page/actions.js { ACTIONS_MODULE0 => \"[project]/libs/actions/authentication.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$actions$2f$authentication$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/libs/actions/authentication.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$root$292f28$auth$292f$register$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$libs$2f$actions$2f$authentication$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(root)/(auth)/register/page/actions.js { ACTIONS_MODULE0 => "[project]/libs/actions/authentication.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/(root)/(auth)/register/page/actions.js { ACTIONS_MODULE0 => \"[project]/libs/actions/authentication.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "404d1bb54a906db45b0449b76b3d642cff3371890e": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$actions$2f$authentication$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["register"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$actions$2f$authentication$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/libs/actions/authentication.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$root$292f28$auth$292f$register$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$libs$2f$actions$2f$authentication$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(root)/(auth)/register/page/actions.js { ACTIONS_MODULE0 => "[project]/libs/actions/authentication.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/(root)/(auth)/register/page/actions.js { ACTIONS_MODULE0 => \"[project]/libs/actions/authentication.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "404d1bb54a906db45b0449b76b3d642cff3371890e": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$root$292f28$auth$292f$register$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$libs$2f$actions$2f$authentication$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["404d1bb54a906db45b0449b76b3d642cff3371890e"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$root$292f28$auth$292f$register$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$libs$2f$actions$2f$authentication$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(root)/(auth)/register/page/actions.js { ACTIONS_MODULE0 => "[project]/libs/actions/authentication.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$root$292f28$auth$292f$register$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$libs$2f$actions$2f$authentication$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(root)/(auth)/register/page/actions.js { ACTIONS_MODULE0 => "[project]/libs/actions/authentication.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <exports>');
}}),
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/app/(root)/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/(root)/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/app/(root)/(auth)/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/(root)/(auth)/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/components/forms/register-form.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/forms/register-form.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/forms/register-form.tsx <module evaluation>", "default");
}}),
"[project]/components/forms/register-form.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/forms/register-form.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/forms/register-form.tsx", "default");
}}),
"[project]/components/forms/register-form.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$forms$2f$register$2d$form$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/forms/register-form.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$forms$2f$register$2d$form$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/components/forms/register-form.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$forms$2f$register$2d$form$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/app/(root)/(auth)/register/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>RegisterPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$forms$2f$register$2d$form$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/forms/register-form.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
;
;
;
;
function RegisterPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "flex flex-col items-center justify-center gap-8 h-dvh p-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    src: "/images/logo.svg",
                    alt: "TheEndPage logo",
                    priority: true,
                    width: 256,
                    height: 256
                }, void 0, false, {
                    fileName: "[project]/app/(root)/(auth)/register/page.tsx",
                    lineNumber: 9,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$forms$2f$register$2d$form$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/(root)/(auth)/register/page.tsx",
                    lineNumber: 10,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    href: "/login",
                    className: "btn btn-neutral",
                    children: "Connexion"
                }, void 0, false, {
                    fileName: "[project]/app/(root)/(auth)/register/page.tsx",
                    lineNumber: 11,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(root)/(auth)/register/page.tsx",
            lineNumber: 8,
            columnNumber: 13
        }, this)
    }, void 0, false);
}
}}),
"[project]/app/(root)/(auth)/register/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/(root)/(auth)/register/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__3311042b._.js.map