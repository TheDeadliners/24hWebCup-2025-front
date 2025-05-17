"use client";
import { useState } from "react";

export default function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleLogout = () => {
        // Logique de déconnexion ici (par exemple, effacer les cookies ou rediriger)
        console.log("Déconnexion...");
        closeModal();
    };
    return (
        <>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li className="py-1">
                                <a className="hover:bg-primary">Accueil</a>
                            </li>
                            <li className="py-1"><a>Portfolio</a></li>
                            <li className="py-1"><a>About</a></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <a className="btn btn-ghost text-xl">TheEnd.Page</a>
                </div>
                <div className="navbar-end">
                    <div className="pr-4 dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li className="py-1">
                                <a className="justify-between">
                                    Profil
                                    {/*<span className="badge badge-primary text-white">TEP Plus</span>*/}
                                </a>
                            </li>
                            <li className="py-1"><a>Éditer mon profil</a></li>
                            <li className="py-1 cursor-pointer" onClick={openModal} ><a>Déconnexion</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center transition-all duration-300 opacity-100">
                    <div className="bg-black p-6 rounded-lg shadow-lg w-1/3">
                        <h2 className="text-xl font-semibold mb-4">Voulez-vous vraiment vous déconnecter ?</h2>
                        <div className="flex justify-between">
                            <button
                                onClick={handleLogout}
                                className="btn btn-primary text-white px-4 py-2 rounded-lg"
                            >
                                Oui, déconnexion
                            </button>
                            <button
                                onClick={closeModal}
                                className="btn btn-neutral text-white px-4 py-2 rounded-lg"
                            >
                                Annuler
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
