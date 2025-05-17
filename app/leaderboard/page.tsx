'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Définition du type pour une page
interface LeaderboardPage {
    id: number;
    title: string;
    author: string;
    votes: number;
    category: string;
    date: string;
    image: string;
}

// Données initiales de démonstration
const initialPages: LeaderboardPage[] = [
    {
        id: 1,
        title: "Au revoir, startup toxique",
        author: "Claire D.",
        votes: 843,
        category: "Dramatique",
        date: "15 mai 2025",
        image: "/images/example1.png"
    },
    {
        id: 2,
        title: "Démission épique",
        author: "Thomas M.",
        votes: 756,
        category: "Passif-agressif",
        date: "10 mai 2025",
        image: "/images/example2.png"
    },
    {
        id: 3,
        title: "Quitter WhatsApp familial",
        author: "Laure T.",
        votes: 721,
        category: "Ironique",
        date: "5 mai 2025",
        image: "/images/example3.png"
    },
    {
        id: 4,
        title: "Adieu l'open space",
        author: "Julien R.",
        votes: 698,
        category: "Absurde",
        date: "28 avril 2025",
        image: "/images/avatar1.jpg"
    },
    {
        id: 5,
        title: "Rupture cinématographique",
        author: "Sophie K.",
        votes: 645,
        category: "Dramatique",
        date: "21 avril 2025",
        image: "/images/avatar2.jpg"
    },
    {
        id: 6,
        title: "Départ à la retraite",
        author: "Bernard L.",
        votes: 598,
        category: "Classe",
        date: "15 avril 2025",
        image: "/images/avatar.jpg"
    },
    {
        id: 7,
        title: "Au revoir les réseaux sociaux",
        author: "Manon F.",
        votes: 553,
        category: "Touchant",
        date: "10 avril 2025",
        image: "/images/avatar1.jpg"
    },
    {
        id: 8,
        title: "Quitter sa colocation",
        author: "Antoine D.",
        votes: 524,
        category: "Honnête",
        date: "5 avril 2025",
        image: "/images/avatar2.jpg"
    }
];

const Leaderboard: React.FC = () => {
    // États pour la gestion des données et filtres
    const [pages, setPages] = useState<LeaderboardPage[]>(initialPages);
    const [filteredPages, setFilteredPages] = useState<LeaderboardPage[]>(initialPages);
    const [activeFilter, setActiveFilter] = useState<string>('all');
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    // Filtrer les pages selon la catégorie sélectionnée
    useEffect(() => {
        if (activeFilter === 'all') {
            setFilteredPages(pages);
        } else {
            setFilteredPages(pages.filter(page =>
                page.category.toLowerCase() === activeFilter.toLowerCase()
            ));
        }
    }, [activeFilter, pages]);

    // Voter pour une page
    const handleVote = (id: number) => {
        setPages(prevPages =>
            prevPages.map(page =>
                page.id === id
                    ? {...page, votes: page.votes + 1}
                    : page
            ).sort((a, b) => b.votes - a.votes)
        );
    };

    // Afficher une médaille selon le rang
    const renderRankBadge = (index: number) => {
        if (index === 0) {
            return <div className="badge badge-lg absolute top-3 left-3 bg-gradient-to-br from-yellow-300 to-yellow-600 border-2 border-yellow-300 text-black font-black">1</div>;
        } else if (index === 1) {
            return <div className="badge badge-lg absolute top-3 left-3 bg-gradient-to-br from-gray-300 to-gray-400 border-2 border-gray-300 text-black font-black">2</div>;
        } else if (index === 2) {
            return <div className="badge badge-lg absolute top-3 left-3 bg-gradient-to-br from-amber-600 to-amber-800 border-2 border-amber-600 text-black font-black">3</div>;
        } else {
            return <div className="badge badge-lg absolute top-3 left-3 bg-base-100 border border-white/20 text-white font-black">{index + 1}</div>;
        }
    };

    return (
        <main className="min-h-screen">
            {/* Noise overlay */}
            <div className="fixed inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%220.1%22/%3E%3C/svg%3E')] opacity-10 pointer-events-none z-[-1]"></div>

            {/* Navigation */}
            <div className="navbar bg-base-100/90 backdrop-blur-md fixed top-0 z-50 border-b border-white/5">
                <div className="navbar-start">
                    <Link href="/" className="logo">The<span>End</span>.page</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-6">
                        <li><Link href="/" className="font-semibold">Accueil</Link></li>
                        <li><Link href="/leaderboard" className="font-semibold text-primary">Leaderboard</Link></li>
                        <li><Link href="/#how-it-works" className="font-semibold">Comment ça marche</Link></li>
                        <li><Link href="/#gallery" className="font-semibold">Exemples</Link></li>
                        <li><Link href="/#testimonials" className="font-semibold">Témoignages</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link href="/login" className="btn btn-primary ml-4 hidden md:flex">Créer ma page</Link>
                    <div className="dropdown dropdown-end lg:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </div>
                        {isMenuOpen && (
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-200 rounded-box w-60">
                                <li><Link href="/leaderboard" className="font-semibold text-primary">Leaderboard</Link></li>
                                <li><Link href="/#how-it-works" className="font-semibold">Comment ça marche</Link></li>
                                <li><Link href="/#gallery" className="font-semibold">Exemples</Link></li>
                                <li><Link href="/#testimonials" className="font-semibold">Témoignages</Link></li>
                                <li className="mt-4"><Link href="/login" className="btn btn-primary btn-sm w-full">Créer ma page</Link></li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>

            {/* Hero section */}
            <section className="hero min-h-[50vh] bg-base-100 relative pt-24">
                <div className="absolute inset-0 overflow-hidden">
                    {/* Cercles de fond animés */}
                    <div className="absolute top-[-100px] right-[-150px] w-[500px] h-[500px] rounded-full bg-primary/25 blur-[80px] animate-pulse"></div>
                    <div className="absolute bottom-[-200px] left-[-200px] w-[600px] h-[600px] rounded-full bg-accent/15 blur-[80px] animate-pulse animation-delay-2000"></div>
                </div>

                <div className="hero-content text-center relative z-10">
                    <div className="max-w-md bg-base-100/50 backdrop-blur-sm p-8 rounded-box border border-white/5 shadow-2xl">
                        <h1 className="text-5xl font-black mb-6">
                            Le <span className="text-primary italic relative inline-block">Hall of Fame</span>
                        </h1>
                        <p className="text-xl font-light mb-8 text-white/80">
                            Les adieux les plus légendaires votés par la communauté. Faites entrer votre page dans la légende !
                        </p>
                    </div>
                </div>
            </section>

            {/* Leaderboard section */}
            <section className="py-16 px-4 max-w-7xl mx-auto">
                <h2 className="text-3xl font-black text-center mb-12 relative">
                    Les pages les plus acclamées
                    <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-4"></div>
                </h2>

                {/* Filtres */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    <button
                        className={`btn ${activeFilter === 'all' ? 'btn-primary' : 'btn-ghost'}`}
                        onClick={() => setActiveFilter('all')}
                    >
                        Tous
                    </button>
                    <button
                        className={`btn ${activeFilter === 'Dramatique' ? 'btn-primary' : 'btn-ghost'}`}
                        onClick={() => setActiveFilter('Dramatique')}
                    >
                        Dramatique
                    </button>
                    <button
                        className={`btn ${activeFilter === 'Ironique' ? 'btn-primary' : 'btn-ghost'}`}
                        onClick={() => setActiveFilter('Ironique')}
                    >
                        Ironique
                    </button>
                    <button
                        className={`btn ${activeFilter === 'Passif-agressif' ? 'btn-primary' : 'btn-ghost'}`}
                        onClick={() => setActiveFilter('Passif-agressif')}
                    >
                        Passif-agressif
                    </button>
                    <button
                        className={`btn ${activeFilter === 'Classe' ? 'btn-primary' : 'btn-ghost'}`}
                        onClick={() => setActiveFilter('Classe')}
                    >
                        Classe
                    </button>
                </div>

                {/* Grille de cartes */}
                {filteredPages.length === 0 ? (
                    <div className="alert alert-info mb-8">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span>Aucune page ne correspond à ce filtre pour le moment.</span>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPages.map((page, index) => (
                            <div key={page.id} className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group">
                                {renderRankBadge(index)}

                                <figure className="relative h-48">
                                    <Image
                                        src={page.image}
                                        alt={page.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="badge badge-sm absolute bottom-2 right-2 bg-base-100/70 backdrop-blur-sm text-primary border-primary">
                                        {page.category}
                                    </div>
                                </figure>

                                <div className="card-body">
                                    <h3 className="card-title text-xl">{page.title}</h3>
                                    <p className="text-white/60 text-sm italic">Par {page.author} • {page.date}</p>

                                    <div className="card-actions justify-between items-center mt-4 pt-3 border-t border-white/10">
                                        <button
                                            className="btn btn-sm btn-primary gap-2"
                                            onClick={() => handleVote(page.id)}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M12 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                                                <path d="m18 11-6-9-6 9h12Z"></path>
                                                <path d="M5 11v3c0 3 1 6 7 8 6-2 7-5 7-8v-3"></path>
                                            </svg>
                                            Voter
                                        </button>
                                        <div className="badge badge-lg bg-base-100 text-primary font-bold">
                                            {page.votes} votes
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* CTA Section */}
                <div className="card bg-base-200/80 mt-16 text-center">
                    <div className="card-body p-8 md:p-12">
                        <h2 className="text-2xl md:text-3xl font-black mb-4">Prêt à rejoindre le panthéon des fins légendaires ?</h2>
                        <p className="max-w-2xl mx-auto mb-8 text-white/80">
                            Créez votre page de sortie mémorable et laissez la communauté voter pour vous propulser dans notre Hall of Fame.
                        </p>
                        <div className="card-actions justify-center">
                            <Link href="/create" className="btn btn-primary btn-lg">
                                CRÉER MA PAGE LÉGENDAIRE
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer footer-center p-10 bg-base-200 text-base-content mt-16">
                <aside>
                    <p className="text-white/50 text-sm">© 2025 TheEnd.page - Parce que toutes les fins méritent d&apos;être inoubliables.</p>
                </aside>
            </footer>
        </main>
    );
};

export default Leaderboard;