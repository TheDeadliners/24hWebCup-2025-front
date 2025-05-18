import {getUserData, UserData} from "@/libs/actions/session";
import Link from "next/link";

export default async function AccountPage() {
    const userData: UserData = await getUserData() as UserData;

    return (
        <>
            <div className="max-w-3xl mx-auto p-6">
                <div className="card bg-black shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Mon Compte</h2>
                        <div className="space-y-4">
                            {/* Affichage des données utilisateur */}
                            <div className="flex justify-between">
                                <span className="font-medium">Prénom :</span>
                                <span>{userData.firstname}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-medium">Nom :</span>
                                <span>{userData.lastname}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-medium">Email :</span>
                                <span>{userData.username}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-medium">Date d&apos;inscription :</span>
                                <span>{new Date(Number(userData.created_at) * 1000).toLocaleDateString()}</span>
                            </div>
                        </div>
                        <div className="card-actions pt-5 justify-center">
                            <Link href="/account/edit" className="justify-end card-actions">
                                <span className="btn btn-primary">Modifier mon compte</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
