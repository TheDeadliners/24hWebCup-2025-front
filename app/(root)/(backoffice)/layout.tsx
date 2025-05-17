import {ReactNode} from "react";
import Header from "@/components/controls/backoffice/header";

export default function RootLayout({children}: Readonly<{ children: ReactNode }>) {
    return (
        <>
            <Header/>
            {children}
        </>
    );
}
