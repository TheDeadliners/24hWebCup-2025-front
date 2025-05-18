import {EyesIcon, HeartIcon, PencilLineIcon} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default async function DashboardPage() {
    return (
        <>
            <div className="min-h-screen">
                <div className="p-8">
                    <div className="mt-4 max-w-md mx-auto gap-y-3 sm:w-full text-center flex flex-col sm:flex-row justify-center">
                        <Link href="/create" className="btn btn-primary mx-2">Nouvelle EndPage</Link>
                    </div>
                </div>
                <div className="flex justify-center p-8">
                    <div className="stats shadow-xl rounded-box flex flex-col sm:flex-row w-full p-4">
                        <a href="#" className="stat border-inline-end w-full md:w-1/3">
                            <div className="stat-figure text-primary">
                                <PencilLineIcon className="inline-block h-16 w-16 stroke-current" weight="fill"/>
                            </div>
                            <div className="stat-title">EndPages Publiées</div>
                            <div className="stat-value">4</div>
                        </a>

                        <a href="#" className="stat border-inline-end w-full md:w-1/3">
                            <div className="stat-figure text-primary">
                                <HeartIcon className="inline-block h-16 w-16 stroke-current" weight="fill"/>
                            </div>
                            <div className="stat-title">Likes</div>
                            <div className="stat-value">2</div>
                        </a>

                        <a href="#" className="stat border-inline-end w-full md:w-1/3">
                            <div className="stat-figure text-primary">
                                <EyesIcon className="inline-block h-16 w-16 stroke-current" weight="fill"/>
                            </div>
                            <div className="stat-title">Total Vues</div>
                            <div className="stat-value">4,152</div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
