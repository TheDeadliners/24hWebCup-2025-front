import {getUserData, UserData} from "@/libs/actions/session";
import React from "react";
import LogoutModal from "@/components/controls/backoffice/logout-modal";
import {UserCircleIcon, HouseIcon} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default async function Footer() {
    const userData: UserData = await getUserData() as UserData;

    return (
        <>
            <div className="dock py-6 gap-4 flex md:hidden">
                <div>
                    <Link href="/account" className="btn">
                        <UserCircleIcon weight="bold" className="h-6 w-6" /> <span className="hidden md:flex">Profil</span>
                    </Link>
                </div>
                <div>
                    <Link href="/dashboard" className="btn">
                        <HouseIcon weight="bold" className="h-6 w-6" /> <span className="hidden md:flex">Menu</span>
                    </Link>
                </div>
                <div>
                    <LogoutModal userData={userData} />
                </div>
            </div>
        </>
    );
}