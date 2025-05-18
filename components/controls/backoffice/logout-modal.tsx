"use client";

import {useState} from "react";
import {logout} from "@/libs/actions/authentication";
import {DoorIcon, SpinnerIcon} from "@phosphor-icons/react";
import {UserData} from "@/libs/actions/session";

export default function LogoutModal({userData}: {userData: UserData}) {
    const [isModalOpenState, setIsModalOpenState] = useState<boolean>(false);
    const [isLoggingOutState, setIsLoggingOutState] = useState<boolean>(false);

    const openLogoutModal = () => {
        setIsModalOpenState(true);
    }

    const closeLogoutModal = () => {
        setIsModalOpenState(false);
    }

    const logoutFromApplication = async () => {
        setIsLoggingOutState(true);
        await logout();
    }

    return (
        <>
            <button type="button" className="btn btn-neutral" onClick={openLogoutModal}>
                <DoorIcon weight="bold" className="h-6 w-6" /> <span className="hidden md:flex">Déconnexion</span>
            </button>
            <dialog className={`modal ${isModalOpenState ? "modal-open" : null}`}>
                <div className="modal-box text-center">
                    <h3 className="font-bold text-lg">Déconnexion de l&apos;application</h3>
                    <p className="py-4">Voulez-vous vous déconnecter ?</p>
                    <div>
                        <div className="badge badge-success">{userData.username}</div>
                    </div>
                    <div className="modal-action justify-between">
                        <button type="button" className="btn btn-neutral" onClick={closeLogoutModal}>Annuler</button>
                        <button type="button" className="btn btn-error" onClick={logoutFromApplication} disabled={isLoggingOutState}>
                            {!isLoggingOutState ? "Confirmer" : <><SpinnerIcon className="icon animate-spin"/></>}
                        </button>
                    </div>
                </div>
            </dialog>
        </>
    );
}
