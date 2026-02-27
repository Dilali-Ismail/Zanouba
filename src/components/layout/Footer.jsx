import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaTripadvisor } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white dark:bg-[#121212] pt-16 pb-8 border-t border-gray-100 dark:border-gray-800">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand & Abstract */}
                    <div className="lg:col-span-1">
                        <h2 className="font-playfair text-2xl font-bold tracking-widest text-secondary dark:text-white mb-6">
                            ZANOUBA
                        </h2>
                        <p className="font-montserrat text-text-secondary text-sm leading-relaxed mb-6">
                            Un sanctuaire de paix au cœur de la médina de Marrakech, où l'authenticité marocaine rencontre le luxe contemporain.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-colors">
                                <FaInstagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-colors">
                                <FaFacebookF size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-colors">
                                <FaTripadvisor size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="font-playfair text-lg font-bold mb-6 text-primary">Navigation</h3>
                        <ul className="space-y-3 font-montserrat text-sm text-text-secondary">
                            <li><Link to="/about" className="hover:text-primary transition-colors">Histoire du Riad</Link></li>
                            <li><Link to="/rooms" className="hover:text-primary transition-colors">Suites & Chambres</Link></li>
                            <li><Link to="/gallery" className="hover:text-primary transition-colors">Galerie Photo</Link></li>
                            <li><Link to="/services" className="hover:text-primary transition-colors">Expériences</Link></li>
                            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-playfair text-lg font-bold mb-6 text-primary">Contact</h3>
                        <ul className="space-y-4 font-montserrat text-sm text-text-secondary">
                            <li className="flex items-start">
                                <span className="mt-1 mr-3 text-accent">📍</span>
                                <span>Derb Assehbe, Médina<br />40000 Marrakech, Maroc</span>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-3 text-accent">📞</span>
                                <span>+212 5 24 00 00 00</span>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-3 text-accent">✉️</span>
                                <span>contact@riadzanouba.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="font-playfair text-lg font-bold mb-6 text-primary">Newsletter</h3>
                        <p className="font-montserrat text-text-secondary text-sm mb-4">
                            Inscrivez-vous pour recevoir nos offres exclusives et actualités.
                        </p>
                        <form className="flex flex-col space-y-3" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Votre adresse email"
                                className="bg-bg-secondary dark:bg-[#1E1E1E] border-none font-montserrat text-sm px-4 py-3 rounded-md focus:outline-none focus:ring-1 focus:ring-primary w-full"
                                required
                            />
                            <button type="submit" className="bg-primary text-white font-montserrat text-sm uppercase tracking-wider py-3 rounded-md transition-colors hover:bg-secondary">
                                S'inscrire
                            </button>
                        </form>
                    </div>

                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs font-montserrat text-gray-500 uppercase tracking-wider">
                    <p>&copy; {currentYear} Riad ZANOUBA. Tous droits réservés.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <Link to="/privacy" className="hover:text-primary transition-colors">Confidentialité</Link>
                        <Link to="/terms" className="hover:text-primary transition-colors">Conditions Générales</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
