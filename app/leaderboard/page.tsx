'use client';

import "./leaderboard.css";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Link from "next/link";

export default function Leaderboard() {
    // État pour gérer l'ouverture/fermeture du menu burger
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // État pour suivre si on est sur mobile
    const [isMobile, setIsMobile] = useState(false);
    // Simulation de données pour le leaderboard
    const [topPages, setTopPages] = useState([
        {
            id: 1,
            title: "Au revoir, startup toxique",
            author: "Claire D.",
            votes: 843,
            category: "Dramatique",
            date: "15 mai 2025",
            image: "/img/example1.png"
        },
        {
            id: 2,
            title: "Démission épique",
            author: "Thomas M.",
            votes: 756,
            category: "Passif-agressif",
            date: "10 mai 2025",
            image: "/img/example2.png"
        },
        {
            id: 3,
            title: "Quitter WhatsApp familial",
            author: "Laure T.",
            votes: 721,
            category: "Ironique",
            date: "5 mai 2025",
            image: "/img/example3.png"
        },
        {
            id: 4,
            title: "Adieu l'open space",
            author: "Julien R.",
            votes: 698,
            category: "Absurde",
            date: "28 avril 2025",
            image: "/img/avatar1.jpg"
        },
        {
            id: 5,
            title: "Rupture cinématographique",
            author: "Sophie K.",
            votes: 645,
            category: "Dramatique",
            date: "21 avril 2025",
            image: "/img/avatar2.jpg"
        },
        {
            id: 6,
            title: "Départ à la retraite",
            author: "Bernard L.",
            votes: 598,
            category: "Classe",
            date: "15 avril 2025",
            image: "/img/avatar.jpg"
        },
        {
            id: 7,
            title: "Au revoir les réseaux sociaux",
            author: "Manon F.",
            votes: 553,
            category: "Touchant",
            date: "10 avril 2025",
            image: "/img/avatar1.jpg"
        },
        {
            id: 8,
            title: "Quitter sa colocation",
            author: "Antoine D.",
            votes: 524,
            category: "Honnête",
            date: "5 avril 2025",
            image: "/img/avatar2.jpg"
        }
    ]);

    // Filtre actif
    const [activeFilter, setActiveFilter] = useState("all");

    // Fonction pour basculer l'état du menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Fermer le menu si on clique sur un lien
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Effet pour détecter la taille de l'écran
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Vérifier au chargement de la page
        checkIfMobile();

        // Mettre à jour à chaque redimensionnement
        window.addEventListener("resize", checkIfMobile);

        // Nettoyer l'événement lors du démontage du composant
        return () => {
            window.removeEventListener("resize", checkIfMobile);
        };
    }, []);

    // Filtrer les pages selon la catégorie sélectionnée
    const filteredPages = activeFilter === "all"
        ? topPages
        : topPages.filter(page => page.category.toLowerCase() === activeFilter.toLowerCase());

    // Voter pour une page
    const votePage = (id) => {
        setTopPages(prevPages =>
            prevPages.map(page =>
                page.id === id
                    ? {...page, votes: page.votes + 1}
                    : page
            ).sort((a, b) => b.votes - a.votes)
        );
    };

    return (
        <main className="w-full">
            <div className="noise"></div>

            <header>
                <nav className="nav-container">
                    <Link href="/" className="logo">The<span>End</span>.page</Link>

                    {/* Menu burger pour mobile */}
                    <div className={`burger-menu ${isMobile ? 'visible' : 'hidden'}`} onClick={toggleMenu}>
                        <div className={`burger-bar ${isMenuOpen ? 'open' : ''}`}></div>
                        <div className={`burger-bar ${isMenuOpen ? 'open' : ''}`}></div>
                        <div className={`burger-bar ${isMenuOpen ? 'open' : ''}`}></div>
                    </div>

                    {/* Menu navigation (desktop ou mobile ouvert) */}
                    <div className={`nav-links ${isMenuOpen || !isMobile ? 'active' : ''}`}>
                        <Link href="/leaderboard" className="active" onClick={closeMenu}>Leaderboard</Link>
                        <Link href="/#how-it-works" onClick={closeMenu}>Comment ça marche</Link>
                        <Link href="/#gallery" onClick={closeMenu}>Exemples</Link>
                        <Link href="/#testimonials" onClick={closeMenu}>Témoignages</Link>
                        {isMobile && (
                            <Link href="/login" className="cta-button door-slam-btn mobile-cta" onClick={closeMenu}>
                                Créer ma page
                            </Link>
                        )}
                    </div>

                    {/* Bouton CTA (visible uniquement sur desktop) */}
                    {!isMobile && (
                        <Link href="/login" className="cta-button door-slam-btn">
                            Créer ma page
                        </Link>
                    )}
                </nav>
            </header>

            <section className="leaderboard-hero">
                <div className="bg-elements">
                    <div className="bg-circle circle-1"></div>
                    <div className="bg-circle circle-2"></div>
                </div>

                <div className="hero-content flex flex-col">
                    <h1>Le <span className="highlight glitch-effect" data-text="Hall of Fame">Hall of Fame</span></h1>
                    <p className="tagline">Les adieux les plus légendaires votés par la communauté. Faites entrer votre page dans la légende !</p>
                </div>
            </section>

            <section className="leaderboard-section">
                <div className="filter-container">
                    <h2 className="section-title">Les pages les plus acclamées</h2>
                    <div className="filter-buttons">
                        <button
                            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                            onClick={() => setActiveFilter('all')}
                        >
                            Tous
                        </button>
                        <button
                            className={`filter-btn ${activeFilter === 'Dramatique' ? 'active' : ''}`}
                            onClick={() => setActiveFilter('Dramatique')}
                        >
                            Dramatique
                        </button>
                        <button
                            className={`filter-btn ${activeFilter === 'Ironique' ? 'active' : ''}`}
                            onClick={() => setActiveFilter('Ironique')}
                        >
                            Ironique
                        </button>
                        <button
                            className={`filter-btn ${activeFilter === 'Passif-agressif' ? 'active' : ''}`}
                            onClick={() => setActiveFilter('Passif-agressif')}
                        >
                            Passif-agressif
                        </button>
                        <button
                            className={`filter-btn ${activeFilter === 'Classe' ? 'active' : ''}`}
                            onClick={() => setActiveFilter('Classe')}
                        >
                            Classe
                        </button>
                    </div>
                </div>

                <div className="leaderboard-grid">
                    {filteredPages.map((page, index) => (
                        <div className="leaderboard-card" key={page.id}>
                            <div className="card-rank">
                                <span className="rank-number">{index + 1}</span>
                            </div>
                            <div className="card-image" style={{ backgroundImage: `url(${page.image})` }}>
                                <div className="category-badge">{page.category}</div>
                            </div>
                            <div className="card-content">
                                <h3>{page.title}</h3>
                                <p className="card-author">Par {page.author} • {page.date}</p>
                                <div className="card-footer">
                                    <button className="vote-button" onClick={() => votePage(page.id)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M12 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                                            <path d="m18 11-6-9-6 9h12Z"></path>
                                            <path d="M5 11v3c0 3 1 6 7 8 6-2 7-5 7-8v-3"></path>
                                        </svg>
                                        Voter
                                    </button>
                                    <div className="vote-count">{page.votes} votes</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="join-leaderboard">
                    <h2>Prêt à rejoindre le panthéon des fins légendaires ?</h2>
                    <p>Créez votre page de sortie mémorable et laissez la communauté voter pour vous propulser dans notre Hall of Fame.</p>
                    <Link href="/create" className="big-cta-button door-slam-btn">CRÉER MA PAGE LÉGENDAIRE</Link>
                </div>
            </section>

            <footer>
                <div className="footer-content">
                    <p className="copyright">© 2025 TheEnd.page - Parce que toutes les fins méritent d'être
                        inoubliables.</p>
                </div>
            </footer>
        </main>
    );
}