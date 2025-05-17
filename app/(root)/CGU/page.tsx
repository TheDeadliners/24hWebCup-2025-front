// src/components/TermsOfUse.tsx
import React from 'react';

const TermsOfUse: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white py-12 transition-colors duration-500">
            <div className="container mx-auto px-4 space-y-8">

                {/* Header */}
                <header className="text-center space-y-2">
                    <h1 className="text-5xl font-extrabold">Conditions d’Utilisation</h1>
                    <p className="text-md text-gray-400">Dernière mise à jour : 17 mai 2025</p>
                </header>

                {/* Ligne de séparation */}
                <div className="divider before:bg-gray-700 after:bg-gray-700"></div>

                {/* Card contenant le contenu */}
                <div className="card bg-gray-800 shadow-xl transition-transform duration-300 ease-in-out hover:shadow-2xl">
                    <div className="card-body prose prose-invert lg:prose-lg max-w-none space-y-6 text-lg">

                        <h2>1. Objet</h2>
                        <p>
                            Les présentes Conditions d’Utilisation définissent les modalités d’accès et d’utilisation
                            du site et de ses services. En naviguant ici, vous acceptez sans réserve ces conditions.
                        </p>

                        <h2>2. Accès au service</h2>
                        <p>
                            L’accès est libre et gratuit. Certains services nécessitent une inscription : fournissez
                            des infos exactes et à jour.
                        </p>

                        <h2>3. Propriété intellectuelle</h2>
                        <p>
                            Tous les contenus (textes, images, logos…) sont protégés par le droit d’auteur. Toute
                            reproduction non autorisée est interdite.
                        </p>

                        <h2>4. Responsabilité</h2>
                        <p>
                            Nous mettons tout en œuvre pour garantir la fiabilité des informations, mais l’obligation
                            reste de moyens. Nous ne sommes pas responsables des dommages directs ou indirects.
                        </p>

                        <h2>5. Données personnelles</h2>
                        <p>
                            Les données collectées sont traitées conformément à notre
                            <a
                                href="/politique-de-confidentialite"
                                className="ml-1 link link-primary transition-colors duration-300 hover:text-primary-focus"
                            >
                                Politique de Confidentialité
                            </a>.
                        </p>

                        <h2>6. Modification des conditions</h2>
                        <p>
                            Nous pouvons modifier ces Conditions à tout moment ; les nouvelles versions s’appliquent
                            dès leur mise en ligne. Consultez-les régulièrement.
                        </p>

                        <h2>7. Contact</h2>
                        <p>
                            Pour toute question, écrivez-nous à
                            <a
                                href="mailto:support@votresite.com"
                                className="ml-1 link link-secondary transition-colors duration-300 hover:text-secondary-focus"
                            >
                                support@votresite.com
                            </a>.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsOfUse;
