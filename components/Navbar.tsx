import "./navbar.css";

export default function Navbar() {
    return (
        <main className="w-full">
            <div className="noise"></div>

            <header>
                <nav>
                    <a href="#" className="logo">The<span>End</span>.page</a>
                    <div className="nav-links">
                        <a href="#features">Styles</a>
                        <a href="#how-it-works">Comment ça marche</a>
                        <a href="#gallery">Exemples</a>
                        <a href="#testimonials">Témoignages</a>
                    </div>
                    <a href="#create" className="cta-button door-slam-btn">Créer ma page</a>
                </nav>
            </header>

        </main>
    );
}