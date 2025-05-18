import {EyesIcon, HeartIcon, PencilLineIcon} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import {getMines, getStats} from "@/libs/actions/endpages";

export default async function DashboardPage() {

    const leaderboardStats = await getStats();
    const myEndPages = await getMines();

    console.log(myEndPages.data)
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
                            <div className="stat-value">{leaderboardStats.data?.count}</div>
                        </a>

                        <a href="#" className="stat border-inline-end w-full md:w-1/3">
                            <div className="stat-figure text-primary">
                                <HeartIcon className="inline-block h-16 w-16 stroke-current" weight="fill"/>
                            </div>
                            <div className="stat-title">Likes</div>
                            <div className="stat-value">{leaderboardStats.data?.likes}</div>
                        </a>

                        <a href="#" className="stat border-inline-end w-full md:w-1/3">
                            <div className="stat-figure text-primary">
                                <EyesIcon className="inline-block h-16 w-16 stroke-current" weight="fill"/>
                            </div>
                            <div className="stat-title">Total Vues</div>
                            <div className="stat-value">{leaderboardStats.data?.views}</div>
                        </a>
                    </div>
                </div>

                <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {myEndPages.data?.map((page, index) => (
                        <div key={index} className="card shadow-xl p-4">
                            <div className="card-title uppercase">
                                {page.category}
                            </div>
                            <div className="card-body">
                                <div>
                                    <p>{page.text}</p>
                                </div>
                                <div className="card-actions">
                                    <Link className="btn btn-primary" href={`/this-is-the-end/${page.id}`}>Voir la EndPage</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
