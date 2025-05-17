import {getUserData, UserData} from "@/libs/actions/session";
import React from "react";
import LogoutModal from "@/components/controls/backoffice/logout-modal";
import {UserCircleIcon} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default async function Header() {
    const userData: UserData = await getUserData() as UserData;



    return (
        <>
            <div className="navbar shadow-sm py-6">
                <div className="navbar-start">
                    <Link href="" className="btn">
                        <UserCircleIcon size={32} weight="bold" className="h-6 w-6" /> <span className="hidden md:flex">Profil</span>
                    </Link>
                </div>
                <div className="navbar-center">
                    <a href="#" className="logo">The<span>End</span>.page</a>
                </div>
                <div className="navbar-end">
                    <LogoutModal userData={userData} />
                </div>
            </div>
        </>
    );
}