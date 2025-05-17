"use client";
import { useState } from "react";

const FormPage = () => {
    // Données fictives pour tester le formulaire
    const [formData, setFormData] = useState({
        name: "Clarel GRONDIN",
        email: "john.doe@example.com",
        message: "Ceci est un message de test."
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simuler l'appel API vers Symfony
        setTimeout(() => {
            console.log("Données envoyées : ", formData);
            // Ici, tu enverrais les données à ton backend Symfony
            // Par exemple : fetch('/api/submit', { method: 'POST', body: JSON.stringify(formData) });

            // Réinitialisation après envoi fictif
            setIsSubmitting(false);
        }, 1000);
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-black rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Builder</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Champ nom */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                    />
                </div>

                {/* Champ email */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                    />
                </div>

                {/* Champ message */}
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                    ></textarea>
                </div>

                {/* Bouton de soumission */}
                <div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-2 px-4 bg-primary text-white rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                    >
                        {isSubmitting ? "Envoi..." : "Envoyer"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormPage;
