'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import AOS from 'aos';

export default function Home() {
    // État pour gérer le menu sur mobile
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(() => {
        AOS.init({
            duration: 800, // durée par défaut de l'animation (en ms)
            once: true,    // si true, l'animation ne se déclenche qu'une seule fois
        });
    }, []);

    return (
        <main className="min-h-screen bg-base-100">
            {/* Effet de bruit de fond */}
            <div
                className="fixed inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%220.1%22/%3E%3C/svg%3E')] opacity-10 pointer-events-none z-[-1]">
            </div>

            <div data-aos="fade-down"
                 data-aos-duration="1500" className="navbar bg-base-100 shadow-sm pt-5 pb-4">
                <div className="navbar-start text-white">

                    <a className="hidden md:flex btn btn-ghost text-xl"><Image src="/images/logo.svg" alt="Logo Officielle" width={128} height={128}/></a>
                    <a className="flex md:hidden btn btn-ghost text-xl"><Image src="/images/logo.svg" alt="Logo Officielle" width={96} height={96}/></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link href="/" className="font-semibold text-primary">Accueil</Link></li>
                        <li><Link href="/leaderboard" className="font-semibold">Leaderboard</Link></li>
                        <li><Link href="/#how-it-works" className="font-semibold">Comment ça marche</Link></li>
                        <li><Link href="/#gallery" className="font-semibold">Exemples</Link></li>
                        <li><Link href="/#testimonials" className="font-semibold">Témoignages</Link></li>
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <Link href="/login" className="btn btn-primary hidden md:flex">
                        Créer ma EndPage
                    </Link>

                    <Link className="btn btn-primary" href="/leaderboard">Leaderboard</Link>
                </div>
            </div>
            {/* Hero Section */}
            <section className="hero min-h-screen relative overflow-hidden">
                {/* Background elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {/* Cercles lumineux */}
                    <div data-aos="zoom-in"
                         data-aos-delay="100"
                         data-aos-duration="1000"
                        className="absolute top-[-100px] right-[-150px] w-[500px] h-[500px] rounded-full bg-primary/25 blur-[80px] animate-pulse"></div>
                    <div data-aos="zoom-in"
                         data-aos-delay="200"
                         data-aos-duration="1000"
                        className="absolute bottom-[-200px] left-[-200px] w-[600px] h-[600px] rounded-full bg-secondary/15 blur-[80px] animate-pulse animation-delay-2000"></div>

                    {/* GIFs flottants */}
                    <div data-aos="zoom-in"
                         data-aos-delay="80"
                         data-aos-duration="1000" className="absolute top-[20%] right-[10%] opacity-70 animate-[float_8s_ease-in-out_infinite]">
                        <Image src="/images/leave.png" alt="Porte qui claque" width={200} height={200}/>
                    </div>
                    <div data-aos="zoom-in"
                         data-aos-delay="300"
                         data-aos-duration="1000"
                        className="absolute bottom-[15%] left-[5%] opacity-70 animate-[float_8s_ease-in-out_infinite_2s]">
                        <Image src="/images/masque.png" alt="Au revoir" width={200} height={200}/>
                    </div>
                    <div data-aos="zoom-in"
                         data-aos-delay="200"
                         data-aos-duration="1000"
                        className="absolute top-[10%] left-[15%] opacity-70 animate-[float_8s_ease-in-out_infinite_4s]">
                        <Image src="/images/exit.png" alt="Dramatique" width={200} height={200}/>
                    </div>
                    <div data-aos="zoom-in"
                         data-aos-delay="120"
                         data-aos-duration="1000"
                        className="absolute top-[65%] right-[15%] opacity-70 animate-[float_8s_ease-in-out_infinite_5s]">
                        <Image src="/images/heart.png" alt="Dramatique" width={200} height={200}/>
                    </div>
                </div>

                <div className="hero-content text-center relative z-10 px-4">
                    <div data-aos="zoom-in"
                         data-aos-delay="500"
                         data-aos-duration="1000"
                        className="max-w-3xl backdrop-blur-sm bg-base-100/30 p-8 md:p-12 rounded-box border border-white/5 shadow-2xl">
                        <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                            Claque la porte avec <span
                            className="text-primary italic relative inline-block animate-glitch">style</span>
                        </h1>
                        <p className="text-lg md:text-xl font-light mb-8 text-white/80 max-w-2xl mx-auto">
                            Créez votre page de départ mémorable - pour quitter votre job, votre couple, ou
                            n&apos;importe quoi d&apos;autre - avec tout le drama que ça mérite.
                        </p>
                        <Link href="/login" className="btn btn-primary btn-lg">
                            Créer ma EndPage
                        </Link>
                    </div>
                </div>
            </section>

            {/* Styles Section */}
            <section data-aos="fade-up"
                     data-aos-duration="1500" id="features" className="py-16 px-4 max-w-7xl mx-auto">
                <h2 className="text-4xl font-black text-center mb-16 relative">
                    Choisis ton style de sortie
                    <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-4"></div>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="card hover:shadow-xl transition-all duration-300 hover:-translate-y-4 group">
                        <div className="card-body text-center">
                            <div
                                className="text-6xl mb-4 transform -rotate-6 group-hover:rotate-0 group-hover:scale-125 transition-transform duration-300">🎭
                            </div>
                            <h3 className="card-title justify-center mb-2">Dramatique</h3>
                            <p className="text-white/70">Pour ceux qui veulent que leur départ soit aussi intense
                                qu&apos;une fin de saison de série Netflix.</p>
                        </div>
                    </div>

                    <div className="card hover:shadow-xl transition-all duration-300 hover:-translate-y-4 group">
                        <div className="card-body text-center">
                            <div
                                className="text-6xl mb-4 transform -rotate-6 group-hover:rotate-0 group-hover:scale-125 transition-transform duration-300">😏
                            </div>
                            <h3 className="card-title justify-center mb-2">Ironique</h3>
                            <p className="text-white/70">Parce que parfois, le meilleur moyen de dire &quot;c&apos;est
                                fini&quot; est avec un sourire en coin.</p>
                        </div>
                    </div>

                    <div className="card hover:shadow-xl transition-all duration-300 hover:-translate-y-4 group">
                        <div className="card-body text-center">
                            <div
                                className="text-6xl mb-4 transform -rotate-6 group-hover:rotate-0 group-hover:scale-125 transition-transform duration-300">😬
                            </div>
                            <h3 className="card-title justify-center mb-2">Ultra Cringe</h3>
                            <p className="text-white/70">Laisse un souvenir si gênant qu&apos;ils en auront des frissons
                                pendant des années.</p>
                        </div>
                    </div>

                    <div className="card hover:shadow-xl transition-all duration-300 hover:-translate-y-4 group">
                        <div className="card-body text-center">
                            <div
                                className="text-6xl mb-4 transform -rotate-6 group-hover:rotate-0 group-hover:scale-125 transition-transform duration-300">🎩
                            </div>
                            <h3 className="card-title justify-center mb-2">Classe</h3>
                            <p className="text-white/70">Sortez par la grande porte, avec élégance et dignité. Non
                                mais.</p>
                        </div>
                    </div>

                    <div className="card hover:shadow-xl transition-all duration-300 hover:-translate-y-4 group">
                        <div className="card-body text-center">
                            <div
                                className="text-6xl mb-4 transform -rotate-6 group-hover:rotate-0 group-hover:scale-125 transition-transform duration-300">💔
                            </div>
                            <h3 className="card-title justify-center mb-2">Touchant</h3>
                            <p className="text-white/70">Pour exprimer ce que vous avez vraiment sur le cœur avant de
                                partir.</p>
                        </div>
                    </div>

                    <div className="card hover:shadow-xl transition-all duration-300 hover:-translate-y-4 group">
                        <div className="card-body text-center">
                            <div
                                className="text-6xl mb-4 transform -rotate-6 group-hover:rotate-0 group-hover:scale-125 transition-transform duration-300">🤪
                            </div>
                            <h3 className="card-title justify-center mb-2">Absurde</h3>
                            <p className="text-white/70">Quand la situation est tellement ridicule qu&apos;elle mérite
                                une sortie surréaliste.</p>
                        </div>
                    </div>

                    <div className="card hover:shadow-xl transition-all duration-300 hover:-translate-y-4 group">
                        <div className="card-body text-center">
                            <div
                                className="text-6xl mb-4 transform -rotate-6 group-hover:rotate-0 group-hover:scale-125 transition-transform duration-300">😤
                            </div>
                            <h3 className="card-title justify-center mb-2">Passif-agressif</h3>
                            <p className="text-white/70">Pour dire &quot;tout va bien&quot; alors que clairement, non,
                                tout ne va pas bien.</p>
                        </div>
                    </div>

                    <div className="card hover:shadow-xl transition-all duration-300 hover:-translate-y-4 group">
                        <div className="card-body text-center">
                            <div
                                className="text-6xl mb-4 transform -rotate-6 group-hover:rotate-0 group-hover:scale-125 transition-transform duration-300">🫡
                            </div>
                            <h3 className="card-title justify-center mb-2">Honnête</h3>
                            <p className="text-white/70">Parfois, la vérité brute est la meilleure manière de tourner la
                                page.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comment ça marche */}
            <section data-aos="fade-up"
                     data-aos-duration="1500" id="how-it-works" className="py-16 px-4 bg-gradient-to-b from-base-200 to-base-100 relative">
                <div
                    className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2232%22 height=%2232%22 fill=%22%23181818%22 viewBox=%220 0 256 256%22%3E%3Cpath d=%22M220.17,100L202.86,70a28,28,0,0,0-38.24-10.25,27.69,27.69,0,0,0-9,8.34L138.2,38a28,28,0,0,0-48.48,0A28,28,0,0,0,48.15,74l1.59,2.76A27.67,27.67,0,0,0,38,80.41a28,28,0,0,0-10.24,38.25l40,69.32a87.47,87.47,0,0,0,53.43,41,88.56,88.56,0,0,0,22.92,3,88,88,0,0,0,76.06-132Zm-6.66,62.64A72,72,0,0,1,81.62,180l-40-69.32a12,12,0,0,1,20.78-12L81.63,132a8,8,0,1,0,13.85-8L62,66A12,12,0,1,1,82.78,54L114,108a8,8,0,1,0,13.85-8L103.57,58h0a12,12,0,1,1,20.78-12l33.42,57.9a48,48,0,0,0-5.54,60.6,8,8,0,0,0,13.24-9A32,32,0,0,1,172.78,112a8,8,0,0,0,2.13-10.4L168.23,90A12,12,0,1,1,189,78l17.31,30A71.56,71.56,0,0,1,213.51,162.62ZM184.25,31.71A8,8,0,0,1,194,26a59.62,59.62,0,0,1,36.53,28l.33.57a8,8,0,1,1-13.85,8l-.33-.57a43.67,43.67,0,0,0-26.8-20.5A8,8,0,0,1,184.25,31.71ZM80.89,237a8,8,0,0,1-11.23,1.33A119.56,119.56,0,0,1,40.06,204a8,8,0,0,1,13.86-8,103.67,103.67,0,0,0,25.64,29.72A8,8,0,0,1,80.89,237Z%22/%3E%3C/svg%3E')]"></div>

                <h2 className="text-4xl font-black text-center mb-16 relative z-10">
                    Comment ça marche
                    <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-4"></div>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto relative z-10">
                    <div className="card hover:shadow-xl transition-all duration-300 hover:-translate-y-4">
                        <div className="card-body items-center text-center">
                            <div
                                className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl font-black mb-4">1
                            </div>
                            <h3 className="card-title mb-2">Choisis ton style</h3>
                            <p className="text-white/70">Sélectionne le ton qui correspond le mieux à ta situation et à
                                ton état d&apos;esprit.</p>
                        </div>
                    </div>

                    <div className="card hover:shadow-xl transition-all duration-300 hover:-translate-y-4">
                        <div className="card-body items-center text-center">
                            <div
                                className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl font-black mb-4">2
                            </div>
                            <h3 className="card-title mb-2">Raconte ton histoire</h3>
                            <p className="text-white/70">Explique pourquoi tu pars, avec tous les détails croustillants
                                (ou pas).</p>
                        </div>
                    </div>

                    <div className="card hover:shadow-xl transition-all duration-300 hover:-translate-y-4">
                        <div className="card-body items-center text-center">
                            <div
                                className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl font-black mb-4">3
                            </div>
                            <h3 className="card-title mb-2">Personnalise ta page</h3>
                            <p className="text-white/70">Ajoute des GIFs, des sons, des images ou des mèmes pour appuyer
                                ton message.</p>
                        </div>
                    </div>

                    <div className="card hover:shadow-xl transition-all duration-300 hover:-translate-y-4">
                        <div className="card-body items-center text-center">
                            <div
                                className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl font-black mb-4">4
                            </div>
                            <h3 className="card-title mb-2">Partage ton lien</h3>
                            <p className="text-white/70">Envoie ta page TheEnd à la personne ou au groupe concerné.
                                Et... BOOM.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Exemples */}
            <section data-aos="fade-up"
                     data-aos-duration="1500" id="gallery" className="py-16 px-4 max-w-7xl mx-auto">
                <h2 className="text-4xl font-black text-center mb-16 relative">
                    Des départs qui claquent
                    <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-4"></div>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="card image-full h-72 overflow-hidden group shadow-xl">
                        <figure>
                            <Image src="/images/example1.png" alt="Startup toxique" fill
                                   className="object-cover transform group-hover:scale-110 transition-transform duration-500"/>
                        </figure>
                        <div
                            className="card-body opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end">
                            <h3 className="card-title text-white">Au revoir, startup toxique</h3>
                            <p>Claire a quitté sa startup après 2 ans de promesses non tenues.</p>
                        </div>
                    </div>

                    <div className="card image-full h-72 overflow-hidden group shadow-xl">
                        <figure>
                            <Image src="/images/example2.png" alt="C'est pas toi, c'est moi" fill
                                   className="object-cover transform group-hover:scale-110 transition-transform duration-500"/>
                        </figure>
                        <div
                            className="card-body opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end">
                            <h3 className="card-title text-white">C&apos;est pas toi, c&apos;est moi</h3>
                            <p>Thomas explique pourquoi il quitte son coloc après 3 ans.</p>
                        </div>
                    </div>

                    <div className="card image-full h-72 overflow-hidden group shadow-xl">
                        <figure>
                            <Image src="/images/example3.png" alt="30 ans de service" fill
                                   className="object-cover transform group-hover:scale-110 transition-transform duration-500"/>
                        </figure>
                        <div
                            className="card-body opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end">
                            <h3 className="card-title text-white">30 ans de service</h3>
                            <p>Bernard part à la retraite en mode passif-agressif.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Témoignages */}
            <section data-aos="fade-up"
                     data-aos-duration="1500" id="testimonials" className="py-16 px-4 bg-base-200/50">
                <h2 className="text-4xl font-black text-center mb-16 relative">
                    Ils ont claqué la porte
                    <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-4"></div>
                </h2>

                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="card relative">
                        <div className="absolute -top-5 left-6 text-8xl text-primary opacity-20 font-serif">&quot;</div>
                        <div className="card-body">
                            <p className="italic mb-4">J&apos;ai quitté mon job après 5 ans sans augmentation. Ma page
                                TheEnd est devenue virale dans toute l&apos;entreprise. Le DRH a même dû organiser une
                                réunion d&apos;urgence. Meilleure. Décision. De. Ma. Vie.</p>
                            <div className="flex items-center">
                                <div className="avatar">
                                    <div className="w-10 rounded-full">
                                        <Image src="/images/avatar1.jpg" alt="Julien D." width={40} height={40}/>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <div className="font-bold">Julien D.</div>
                                    <div className="text-sm opacity-70">Ex-dev fullstack sous-payé</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card relative">
                        <div className="absolute -top-5 left-6 text-8xl text-primary opacity-20 font-serif">&quot;</div>
                        <div className="card-body">
                            <p className="italic mb-4">J&apos;avais besoin de fermer ce chapitre de ma vie avec mon ex.
                                TheEnd.page m&apos;a permis d&apos;exprimer tout ce que je n&apos;avais jamais osé dire
                                en face. Libération totale.</p>
                            <div className="flex items-center">
                                <div className="avatar">
                                    <div className="w-10 rounded-full">
                                        <Image src="/images/avatar2.jpg" alt="Sophie M." width={40} height={40}/>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <div className="font-bold">Sophie M.</div>
                                    <div className="text-sm opacity-70">Cœur maintenant libre</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card relative">
                        <div className="absolute -top-5 left-6 text-8xl text-primary opacity-20 font-serif">&quot;</div>
                        <div className="card-body">
                            <p className="italic mb-4">J&apos;ai quitté le groupe WhatsApp familial toxique après 4 ans
                                de messages passifs-agressifs de ma belle-mère. Ma page était tellement drôle que même
                                mon mari a dû admettre que j&apos;avais raison.</p>
                            <div className="flex items-center">
                                <div className="avatar">
                                    <div className="w-10 rounded-full">
                                        <Image src="/images/avatar.jpg" alt="Laure T." width={40} height={40}/>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <div className="font-bold">Laure T.</div>
                                    <div className="text-sm opacity-70">Belle-fille libérée</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section data-aos="fade-up"
                     data-aos-duration="1500" id="create" className="py-16 px-4 max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-black mb-6">Prêt à claquer la porte ?</h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto text-white/70">
                    Parce que toutes les fins méritent un dernier mot mémorable. Crée ta page maintenant, et marque les
                    esprits pour longtemps.
                </p>
                <Link href="/login" className="btn btn-primary btn-lg">
                    CRÉER MA PAGE THE END
                </Link>
            </section>

            {/* Footer */}
            <footer className="footer footer-center p-10 bg-base-200 text-base-content">
                <aside>
                    <p className="text-white/50 text-sm">
                        © 2025 TheEnd.page - Parce que toutes les fins méritent d&apos;être inoubliables.
                    </p>
                </aside>
            </footer>
        </main>
    );
}