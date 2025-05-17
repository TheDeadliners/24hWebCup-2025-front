import {getUserData, UserData} from "@/libs/actions/session";
import React from "react";
import LogoutModal from "@/components/controls/backoffice/logout-modal";
import {UserCircleIcon, HouseIcon} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default async function Header() {
    const userData: UserData = await getUserData() as UserData;



    return (
        <>
            <div className="hidden md:flex navbar shadow-sm py-6">
                <div className="navbar-start gap-2">
                    <Link href="/account" className="btn">
                        <UserCircleIcon weight="bold" className="h-6 w-6" /> <span className="hidden md:flex">Profil</span>
                    </Link>
                    <Link href="/dashboard" className="btn">
                        <HouseIcon weight="bold" className="h-6 w-6" /> <span className="hidden md:flex">Menu</span>
                    </Link>
                </div>
                <div className="navbar-end">
                    <LogoutModal userData={userData} />
                </div>
            </div>
            <div className="flex md:hidden navbar shadow-sm py-6">
                <div className="navbar-center justify-center w-full gap-2">
                    <Link href="/account" className="btn">
                        <UserCircleIcon weight="bold" className="h-6 w-6" /> <span className="hidden md:flex">Profil</span>
                    </Link>
                    <Link href="/dashboard" className="btn">
                        <HouseIcon weight="bold" className="h-6 w-6" /> <span className="hidden md:flex">Menu</span>
                    </Link>
                    <LogoutModal userData={userData} />
                </div>
            </div>
        </>
    );
}