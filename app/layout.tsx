import type { Metadata } from "next";
import {Lexend} from "next/font/google";
import "./globals.css";
import {ReactNode} from "react";

const lexendSans = Lexend({
    variable: "--font-funnel-sans",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "TheEnd.page - Claque la porte avec style",
    description: "Créez votre page de départ mémorable - pour quitter votre job, votre couple, ou n'importe quoi d'autre - avec tout le drama que ça mérite.",
};

export default function RootLayout({children}: Readonly<{ children: ReactNode }>) {
    return (
        <html lang="fr" data-theme="the-end-page">
        <body className={`${lexendSans.className}`}>
        {children}
        </body>
        </html>
    );
}
