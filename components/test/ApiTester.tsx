"use client";

import { useState } from "react";

export default function ApiTester({requestType}: {requestType: string}) {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const buttonColor =
        status === "success"
            ? "bg-green-700 hover:bg-green-600 focus:bg-green-600 active:bg-green-600"
            : status === "error"
                ? "bg-red-700 hover:bg-red-600 focus:bg-red-600 active:bg-red-600"
                : "bg-neutral-800 hover:bg-neutral-700 focus:bg-neutral-700 active:bg-neutral-700";

    async function handleClick() {
        setLoading(true);
        setMessage("");
        setStatus("idle");

        try {
            await new Promise((resolve) => setTimeout(resolve, 5000));

            const response = await fetch("https://localhost:8000/api/test", {
                method: requestType.toUpperCase(),
                headers: { 'Content-Type': 'application/json' },
                ...(requestType.toUpperCase() === 'POST' && {
                    body: JSON.stringify({ key: 'value' }),
                }),
            });
            const data = await response.json();
            setMessage(JSON.stringify(data, null, 2));
            setStatus("success");
        } catch (error) {
            console.error(`${requestType} error:`, error);
            setMessage(`Erreur lors de la requête ${requestType}`);
            setStatus("error");
        } finally {
            setLoading(false);
        }
    }

    return (
        <section className="w-full flex flex-col gap-4 justify-center items-center text-center px-4">
            <div>
                <button
                    onClick={handleClick}
                    className={`font-semibold uppercase rounded-md py-2 px-4 border border-transparent text-sm text-white transition-all shadow-md hover:shadow-lg focus:shadow-none active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ${buttonColor}`}
                    type="button"
                >
                    {requestType}
                </button>
            </div>

            {(loading || message) && (
                <div className="w-full max-w-2xl p-4 bg-neutral-900 border border-neutral-700 rounded text-white text-sm text-left">
                    {loading ? (
                        <div className="text-center animate-pulse">Chargement...</div>
                    ) : (
                        <pre className="whitespace-pre-wrap break-words">
                            <code>{message}</code>
                        </pre>
                    )}
                </div>
            )}
        </section>
    );
}
