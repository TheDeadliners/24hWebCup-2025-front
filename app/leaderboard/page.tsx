'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AOS from 'aos';

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
    useEffect(() => {
        AOS.init({
            duration: 800, // durée par défaut de l'animation (en ms)
            once: true,    // si true, l'animation ne se déclenche qu'une seule fois
        });
    }, []);

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
        <main className="min-h-screen bg-base-100">
            {/* Noise overlay */}
            <div
                className="fixed inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%220.1%22/%3E%3C/svg%3E')] opacity-10 pointer-events-none z-[-1]">

            </div>
            <div data-aos="fade-down"
                 data-aos-duration="1500" className="navbar bg-base-100 shadow-sm pt-5 pb-4">
                <div className="navbar-start text-white">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <Link href="/" className="logo">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                            </Link>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><Link href="/" className="font-semibold">Accueil</Link></li>
                            <li><Link href="/leaderboard" className="font-semibold text-primary">Leaderboard</Link></li>
                            <li><Link href="/#how-it-works" className="font-semibold">Comment ça marche</Link></li>
                            <li><Link href="/#gallery" className="font-semibold">Exemples</Link></li>
                            <li><Link href="/#testimonials" className="font-semibold">Témoignages</Link></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl"><Image src="/images/logo.svg" alt="Logo Officielle" width={150} height={150}/></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link href="/" className="font-semibold">Accueil</Link></li>
                        <li><Link href="/leaderboard" className="font-semibold text-primary">Leaderboard</Link></li>
                        <li><Link href="/#how-it-works" className="font-semibold">Comment ça marche</Link></li>
                        <li><Link href="/#gallery" className="font-semibold">Exemples</Link></li>
                        <li><Link href="/#testimonials" className="font-semibold">Témoignages</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link href="/login" className="btn btn-primary hidden md:flex">
                        Créer ma EndPage
                    </Link>
                </div>
            </div>

            {/* Hero section */}
            <section data-aos="fade-up"
                     data-aos-duration="1500" className="hero min-h-screen relative overflow-hidden">

                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {/* Cercles lumineux */}
                    <div
                        className="absolute top-[-100px] right-[-150px] w-[500px] h-[500px] rounded-full bg-primary/25 blur-[80px] animate-pulse"></div>
                    <div
                        className="absolute bottom-[-200px] left-[-200px] w-[600px] h-[600px] rounded-full bg-secondary/15 blur-[80px] animate-pulse animation-delay-2000"></div>

                    {/* GIFs flottants */}
                    <div data-aos="zoom-in"
                         data-aos-delay="100"
                         data-aos-duration="1000" className="absolute top-[5%] right-[10%] opacity-70 animate-[float_8s_ease-in-out_infinite]">
                        <Image src="/images/medaille.png" alt="Porte qui claque" width={200} height={200}/>
                    </div>
                    <div data-aos="zoom-in"
                         data-aos-delay="300"
                         data-aos-duration="1000"
                        className="absolute bottom-[25%] left-[15%] opacity-70 animate-[float_8s_ease-in-out_infinite_2s]">
                        <Image src="/images/menor.png" alt="Au revoir" width={200} height={200}/>
                    </div>
                    <div data-aos="zoom-in"
                         data-aos-delay="200"
                         data-aos-duration="1000"
                        className="absolute top-[10%] left-[20%] opacity-70 animate-[float_8s_ease-in-out_infinite_4s]">
                        <Image src="/images/coupe.png" alt="Dramatique" width={200} height={200}/>
                    </div>
                    <div data-aos="zoom-in"
                         data-aos-delay="120"
                         data-aos-duration="1000"
                        className="absolute top-[60%] right-[15%] opacity-70 animate-[float_8s_ease-in-out_infinite_5s]">
                        <Image src="/images/couronne.png" alt="Dramatique" width={200} height={200}/>
                    </div>
                </div>

                <div className="hero-content text-center relative z-10 px-4">
                    <div data-aos="zoom-in"
                         data-aos-delay="500"
                         data-aos-duration="1000"
                        className="max-w-3xl backdrop-blur-sm bg-base-100/30 p-8 md:p-12 rounded-box border border-white/5 shadow-2xl">
                        <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                            Le <span className="text-primary italic relative inline-block">Hall of Fame</span>
                        </h1>
                        <p className="text-xl font-light mb-8 text-white/80">
                            Les adieux les plus légendaires votés par la communauté. Faites entrer votre page dans la légende !
                        </p>
                    </div>
                </div>
            </section>

            {/* Leaderboard section */}
            <section data-aos="fade-up"
                     data-aos-duration="1500" className="py-16 px-4 max-w-7xl mx-auto">
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
                <div data-aos="fade-up"
                     data-aos-duration="1500" className="card bg-base-200/80 mt-16 text-center">
                    <div className="card-body p-8 md:p-12">
                        <h2 className="text-2xl md:text-3xl font-black mb-4">Prêt à rejoindre le panthéon des fins légendaires ?</h2>
                        <p className="max-w-2xl mx-auto mb-8 text-white/80">
                            Créez votre page de sortie mémorable et laissez la communauté voter pour vous propulser dans notre Hall of Fame.
                        </p>
                        <div className="card-actions justify-center">
                            <Link href="/login" className="btn btn-primary btn-lg">
                                CRÉER MA LÉGENDAIRE ENDPAGE
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