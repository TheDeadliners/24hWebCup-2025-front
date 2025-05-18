"use client";

import {useState} from "react";

export default function CopyButton() {
    const [copied, setCopied] = useState(false);

    const handleCopyLink = () => {
        const currentUrl = window.location.href;
        navigator.clipboard.writeText(currentUrl).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <>
            <button onClick={handleCopyLink}  className="btn btn-primary">
                {copied ? "Lien copié !" : "Copier le lien"}
            </button>
        </>
    );
}
