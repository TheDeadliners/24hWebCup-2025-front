import "./page.css";
import Image from 'next/image';
import React from 'react';

import Link from "next/link";

export default function Home() {
    return (
        <main className="w-full">
            <div className="noise"></div>

            <header>
                <nav>
                    <a href="#" className="logo">The<span>End</span>.page</a>
                    <div className="nav-links">
                        <Link href="/leaderboard">Leaderboard</Link>
                        <Link href="/#how-it-works">Comment ça marche</Link>
                        <Link href="/#gallery">Exemples</Link>
                        <Link href="/#testimonials">Témoignages</Link>
                    </div>
                    <Link href="/login" className="cta-button door-slam-btn hidden md:flex">Créer ma EndPage</Link>
                    <div className="dropdown dropdown-end flex md:hidden">
                        <div role="button" className="btn m-1">
                            <Image src="/images/burger.png" alt="GIF animé porte qui claque" width={50}
                                   height={50}/>
                        </div>
                        <ul className="dropdown-content menu bg-base-200 rounded-box top-[50px] z-1 w-52 p-2 shadow-sm"
                            id="nav-dropdown">
                            <li className="nav-dropdown-link"><a>Leaderboard</a></li>
                            <li className="nav-dropdown-link"><a>Comment ça marche</a></li>
                            <li className="nav-dropdown-link"><a>Exemples</a></li>
                            <li className="nav-dropdown-link"><a>Témoignages</a></li>
                        </ul>
                    </div>
                </nav>
            </header>

            <section className="hero">
                <div className="bg-elements">
                    <div className="bg-circle circle-1"></div>
                    <div className="bg-circle circle-2"></div>
                    <div className="floating-gif gif-1">
                        <Image src="/images/leave.png" alt="GIF animé porte qui claque" width={200}
                               height={200} />
                    </div>
                    <div className="floating-gif gif-2">
                        <Image src="/images/masque.png" alt="GIF animé au revoir" width={200}
                               height={200} />
                    </div>
                    <div className="floating-gif gif-3">
                        <Image src="/images/exit.png" alt="GIF animé dramatique" width={200}
                               height={200} />
                    </div>
                    <div className="floating-gif gif-4">
                        <Image src="/images/heart.png" alt="GIF animé dramatique" width={200}
                               height={200} />
                    </div>
                </div>

                <div className="hero-content flex flex-col">
                    <h1>Claque la porte avec <span className="highlight glitch-effect" data-text="style">style</span>
                    </h1>
                    <p className="tagline">Créez votre page de départ mémorable - pour quitter votre job, votre couple,
                        ou n&apos;importe quoi d&apos;autre - avec tout le drama que ça mérite.</p>
                    <Link href="/login" className="cta-button door-slam-btn">Créer ma EndPage</Link>
                </div>
            </section>

            <section className="features" id="features">
                <h2 className="section-title">Choisis ton style de sortie</h2>
                <div className="tone-cards">
                    <div className="tone-card">
                        <div className="tone-icon">🎭</div>
                        <h3>Dramatique</h3>
                        <p>Pour ceux qui veulent que leur départ soit aussi intense qu&apos;une fin de saison de série
                            Netflix.</p>
                    </div>

                    <div className="tone-card">
                        <div className="tone-icon">😏</div>
                        <h3>Ironique</h3>
                        <p>Parce que parfois, le meilleur moyen de dire &quot;c&apos;est fini&quot; est avec un sourire en coin.</p>
                    </div>

                    <div className="tone-card">
                        <div className="tone-icon">😬</div>
                        <h3>Ultra Cringe</h3>
                        <p>Laisse un souvenir si gênant qu&apos;ils en auront des frissons pendant des années.</p>
                    </div>

                    <div className="tone-card">
                        <div className="tone-icon">🎩</div>
                        <h3>Classe</h3>
                        <p>Sortez par la grande porte, avec élégance et dignité. Non mais.</p>
                    </div>

                    <div className="tone-card">
                        <div className="tone-icon">💔</div>
                        <h3>Touchant</h3>
                        <p>Pour exprimer ce que vous avez vraiment sur le cœur avant de partir.</p>
                    </div>

                    <div className="tone-card">
                        <div className="tone-icon">🤪</div>
                        <h3>Absurde</h3>
                        <p>Quand la situation est tellement ridicule qu&apos;elle mérite une sortie surréaliste.</p>
                    </div>

                    <div className="tone-card">
                        <div className="tone-icon">😤</div>
                        <h3>Passif-agressif</h3>
                        <p>Pour dire &quot;tout va bien&quot; alors que clairement, non, tout ne va pas bien.</p>
                    </div>

                    <div className="tone-card">
                        <div className="tone-icon">🫡</div>
                        <h3>Honnête</h3>
                        <p>Parfois, la vérité brute est la meilleure manière de tourner la page.</p>
                    </div>
                </div>
            </section>

            <section className="how-it-works" id="how-it-works">
                <h2 className="section-title">Comment ça marche</h2>
                <div className="steps gap-x-7 mx-auto max-w-7xl flex flex-wrap justify-center">
                    <div className="step">
                        <div className="step-number">1</div>
                        <h3>Choisis ton style</h3>
                        <p>Sélectionne le ton qui correspond le mieux à ta situation et à ton état d&apos;esprit.</p>
                    </div>

                    <div className="step">
                        <div className="step-number">2</div>
                        <h3>Raconte ton histoire</h3>
                        <p>Explique pourquoi tu pars, avec tous les détails croustillants (ou pas).</p>
                    </div>

                    <div className="step">
                        <div className="step-number">3</div>
                        <h3>Personnalise ta page</h3>
                        <p>Ajoute des GIFs, des sons, des images ou des mèmes pour appuyer ton message.</p>
                    </div>

                    <div className="step">
                        <div className="step-number">4</div>
                        <h3>Partage ton lien</h3>
                        <p>Envoie ta page TheEnd à la personne ou au groupe concerné. Et... BOOM.</p>
                    </div>
                </div>
            </section>

            <section className="gallery" id="gallery">
                <h2 className="section-title">Des départs qui claquent</h2>
                <div className="examples">
                    <div className="example-card" style={{ backgroundImage: "url('/images/example1.png')" }}>
                        <div className="example-overlay">
                            <h4>Au revoir, startup toxique</h4>
                            <p>Claire a quitté sa startup après 2 ans de promesses non tenues.</p>
                        </div>
                    </div>

                    <div className="example-card" style={{ backgroundImage: "url('/images/example2.png')" }}>
                        <div className="example-overlay">
                            <h4>C&apos;est pas toi, c&apos;est moi</h4>
                            <p>Thomas explique pourquoi il quitte son coloc après 3 ans.</p>
                        </div>
                    </div>

                    <div className="example-card" style={{ backgroundImage: "url('/images/example3.png')" }}>
                        <div className="example-overlay">
                            <h4>30 ans de service</h4>
                            <p>Bernard part à la retraite en mode passif-agressif.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="testimonials" id="testimonials">
                <h2 className="section-title">Ils ont claqué la porte</h2>
                <div className="testimonial-container">
                    <div className="testimonial">
                        <p className="testimonial-text">&quot;J&apos;ai quitté mon job après 5 ans sans augmentation. Ma page
                            TheEnd est devenue virale dans toute l&apos;entreprise. Le DRH a même dû organiser une réunion
                            d&apos;urgence. Meilleure. Décision. De. Ma. Vie.&quot;</p>
                        <div className="testimonial-author">
                            <Image className="rounded-full" src="/images/avatar1.jpg" alt="" width={30}
                                   height={30} />
                            <div className="testimonial-author-text">
                                <div className="author-name">Julien D.</div>
                                <div className="author-title">Ex-dev fullstack sous-payé</div>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial">
                        <p className="testimonial-text">&quot;J&apos;avais besoin de fermer ce chapitre de ma vie avec mon ex.
                            TheEnd.page m&apos;a permis d&apos;exprimer tout ce que je n&apos;avais jamais osé dire en face. Libération
                            totale.&quot;</p>
                        <div className="testimonial-author">
                            <Image className="rounded-full" src="/images/avatar2.jpg" alt="" width={30}
                                   height={30} />
                            <div className="testimonial-author-text">
                                <div className="author-name">Sophie M.</div>
                                <div className="author-title">Cœur maintenant libre</div>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial">
                        <p className="testimonial-text">&quot;J&apos;ai quitté le groupe WhatsApp familial toxique après 4 ans de
                            messages passifs-agressifs de ma belle-mère. Ma page était tellement drôle que même mon mari
                            a dû admettre que j&apos;avais raison.&quot;</p>
                        <div className="testimonial-author">
                            <Image className="rounded-full" src="/images/avatar.jpg" alt="" width={30}
                                   height={30} />
                            <div className="testimonial-author-text">
                                <div className="author-name">Laure T.</div>
                                <div className="author-title">Belle-fille libérée</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-section" id="create">
                <h2 className="cta-title">Prêt à claquer la porte ?</h2>
                <p className="cta-text">Parce que toutes les fins méritent un dernier mot mémorable. Crée ta page
                    maintenant, et marque les esprits pour longtemps.</p>
                <Link href="/login" className="big-cta-button door-slam-btn">CRÉER MA PAGE THE END</Link>
            </section>

            <footer>
                <div className="footer-content">

                    <p className="copyright">© 2025 TheEnd.page - Parce que toutes les fins méritent d&apos;être
                        inoubliables.</p>
                </div>
            </footer>
        </main>
    );
}