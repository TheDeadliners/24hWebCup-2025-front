import type { Metadata } from "next";
import {Lexend} from "next/font/google";
import "./globals.css";
import {ReactNode} from "react";
import {Toaster} from "react-hot-toast";


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
        <Toaster
            position="bottom-center"
            toastOptions={{
                style: {
                    borderRadius: '2rem',
                    boxShadow: "1rem",
                    backgroundColor: "#FFFFFFFF",
                    color: "#090909FF",
                    borderColor: "#FFFFFFFF",
                    borderWidth: "0.5px"
                },
                success: {
                    style: {
                        backgroundColor: "#9AE600FF",
                        borderColor: "#9AE600FF",
                        color: "#FFFFFFFF",
                    },
                    iconTheme: {
                        primary: '#9AE600FF',
                        secondary: '#FFFFFFFF'
                    }
                },
                error: {
                    style: {
                        backgroundColor: "#FF2056FF",
                        borderColor: "#FF2056FF",
                        color: "#FFFFFFFF"
                    },
                    iconTheme: {
                        primary: '#FF2056FF',
                        secondary: '#FFFFFFFF'
                    }
                }
            }}
        />
        </body>
        </html>
    );
}
