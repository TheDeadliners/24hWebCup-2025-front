import React, {ReactNode} from "react";
import Header from "@/components/controls/backoffice/header";
import Footer from "@/components/controls/backoffice/footer";

export default function RootLayout({children}: Readonly<{ children: ReactNode }>) {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    );
}
