"use client";
import React, { useState } from "react";

export default function Contact() {
    const [contactType, setContactType] = useState<"message" | "devis">("message");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        service: "",
    });

    // Fonction pour gérer les changements dans les champs du formulaire
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Fonction pour gérer l'envoi du formulaire
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted:", { contactType, ...formData });
        // Ici, vous ajouteriez votre logique d'envoi du formulaire
        alert("Message envoyé avec succès!");
        setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
            service: "",
        });
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100 relative">
            {/* Section carte visible en haut */}
            <div className="h-96 w-full relative">
                <iframe
                    title="Carte de localisation"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7451.368769033253!2d55.65656147488736!3d-20.96518618066831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x217887fa7a3e8707%3A0xd2f3de82c8e1bfdc!2sEcole%20informatique%20Saint-Andr%C3%A9%20(La%20R%C3%A9union)%20-%20Epitech!5e0!3m2!1sfr!2sfr!4v1747482387558!5m2!1sfr!2sfr"
                    width="100%"
                    height="100%"
                    style={{ border: '0' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="z-10"
                />
                {/* Dégradé de transition */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-900 to-transparent z-20"></div>
            </div>

            {/* Section formulaire avec carte floutée en fond */}
            <div className="flex-grow relative">
                {/* Carte floutée en arrière-plan */}
                <div className="absolute inset-0 z-0 opacity-30">
                    <iframe
                        title="Carte floutée"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7451.368769033253!2d55.65656147488736!3d-20.96518618066831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x217887fa7a3e8707%3A0xd2f3de82c8e1bfdc!2sEcole%20informatique%20Saint-Andr%C3%A9%20(La%20R%C3%A9union)%20-%20Epitech!5e0!3m2!1sfr!2sfr!4v1747482387558!5m2!1sfr!2sfr"
                        width="100%"
                        height="100%"
                        style={{ border: '0', filter: 'grayscale(1) blur(3px)' }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>

                {/* Overlay pour assurer la lisibilité du contenu */}
                <div className="absolute inset-0 bg-gray-900 opacity-70 z-10"></div>

                {/* Contenu principal */}
                <div className="relative z-20 container mx-auto px-4 py-8">
                    <h1 className="text-5xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                        Contactez-nous
                    </h1>

                    <div className="flex flex-col lg:flex-row gap-10 mt-8 max-w-6xl mx-auto">
                        {/* Informations de contact */}
                        <div className="flex-1 bg-gray-800 bg-opacity-70 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-gray-700">
                            <h2 className="text-2xl font-semibold mb-6 text-purple-400">Nos coordonnées</h2>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-purple-600 p-3 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-200">Adresse</h3>
                                        <p className="text-gray-400 mt-1">5 Avenue Anatole France, 75007 Paris</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-pink-600 p-3 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-200">Téléphone</h3>
                                        <p className="text-gray-400 mt-1">+33 1 23 45 67 89</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-purple-500 p-3 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-200">Email</h3>
                                        <p className="text-gray-400 mt-1">contact@entreprise.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-pink-500 p-3 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-200">Heures d'ouverture</h3>
                                        <p className="text-gray-400 mt-1">Lun-Ven: 9h-18h</p>
                                        <p className="text-gray-400">Weekend: Fermé</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h3 className="text-xl font-medium mb-4 text-pink-400">Suivez-nous</h3>
                                <div className="flex space-x-4">
                                    <a href="#" className="bg-gray-700 hover:bg-purple-600 p-3 rounded-full transition-colors duration-300">
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="bg-gray-700 hover:bg-purple-600 p-3 rounded-full transition-colors duration-300">
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="bg-gray-700 hover:bg-purple-600 p-3 rounded-full transition-colors duration-300">
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="bg-gray-700 hover:bg-purple-600 p-3 rounded-full transition-colors duration-300">
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Formulaire de contact */}
                        <div className="flex-1 bg-gray-800 bg-opacity-70 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-gray-700">
                            <div className="mb-8">
                                <h2 className="text-2xl font-semibold mb-2 text-pink-400">Envoyez-nous un message</h2>
                                <p className="text-gray-400">Nous vous répondrons dans les plus brefs délais</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Choix du type de contact */}
                                <div className="flex space-x-4 mb-6">
                                    <div
                                        className={`flex-1 py-3 px-4 text-center rounded-xl cursor-pointer transition-all duration-300 ${
                                            contactType === "message"
                                                ? "bg-purple-600 text-white shadow-lg shadow-purple-700/30"
                                                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                                        }`}
                                        onClick={() => setContactType("message")}
                                    >
                                        <span className="font-medium">Laisser un message</span>
                                    </div>
                                    <div
                                        className={`flex-1 py-3 px-4 text-center rounded-xl cursor-pointer transition-all duration-300 ${
                                            contactType === "devis"
                                                ? "bg-pink-600 text-white shadow-lg shadow-pink-700/30"
                                                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                                        }`}
                                        onClick={() => setContactType("devis")}
                                    >
                                        <span className="font-medium">Demande de devis</span>
                                    </div>
                                </div>

                                {/* Nom */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                                        Nom complet <span className="text-pink-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                                        placeholder="Votre nom"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                                        Email <span className="text-pink-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                                        placeholder="votre@email.com"
                                    />
                                </div>

                                {/* Téléphone */}
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                                        Téléphone
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                                        placeholder="Votre numéro de téléphone"
                                    />
                                </div>

                                {/* Champ service pour le devis */}
                                {contactType === "devis" && (
                                    <div>
                                        <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-1">
                                            Service souhaité <span className="text-pink-500">*</span>
                                        </label>
                                        <select
                                            id="service"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            required={contactType === "devis"}
                                            className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                                        >
                                            <option value="" disabled>Sélectionnez un service</option>
                                            <option value="web">Développement Web</option>
                                            <option value="mobile">Application Mobile</option>
                                            <option value="design">Design Graphique</option>
                                            <option value="marketing">Marketing Digital</option>
                                            <option value="autre">Autre</option>
                                        </select>
                                    </div>
                                )}

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                                        Message <span className="text-pink-500">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                                        placeholder={contactType === "devis" ? "Décrivez votre projet en détail pour un devis précis..." : "Votre message..."}
                                    ></textarea>
                                </div>

                                {/* Bouton d'envoi */}
                                <div>
                                    <button
                                        type="submit"
                                        className={`w-full py-3 px-6 rounded-xl font-medium transition-all duration-300 ${
                                            contactType === "message"
                                                ? "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-lg shadow-purple-700/30"
                                                : "bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white shadow-lg shadow-pink-700/30"
                                        }`}
                                    >
                                        {contactType === "message" ? "Envoyer le message" : "Demander un devis"}
                                    </button>
                                </div>

                                {/* Notification d'information */}
                                <div className="text-xs text-gray-400 mt-4">
                                    En soumettant ce formulaire, vous acceptez notre politique de confidentialité.
                                    <br />
                                    <span className="text-green-400">✓</span> Les informations fournies restent confidentielles.
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Statut indicateurs */}
                    <div className="flex flex-wrap justify-center gap-4 mt-10">
                        <div className="bg-green-500 bg-opacity-20 text-green-400 px-4 py-2 rounded-full border border-green-600">
                            <span className="font-medium">Statut du système: </span>
                            <span>Opérationnel</span>
                        </div>
                        <div className="bg-purple-500 bg-opacity-20 text-purple-400 px-4 py-2 rounded-full border border-purple-600">
                            <span className="font-medium">Temps de réponse moyen: </span>
                            <span>24h</span>
                        </div>
                        <div className="bg-yellow-500 bg-opacity-20 text-yellow-400 px-4 py-2 rounded-full border border-yellow-600">
                            <span className="font-medium">Prochaine maintenance: </span>
                            <span>15/06/2025</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}