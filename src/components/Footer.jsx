import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, MapPin, Phone, Youtube, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="relative w-full bg-[#000000] text-white z-[5] overflow-visible mt-32">

            {/* The "Royal Arch" Shape (Architectural Scalloped Top) */}
            <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none transform -translate-y-[99%]">
                <svg
                    viewBox="0 0 1440 120"
                    preserveAspectRatio="none"
                    className="w-full h-[60px] md:h-[100px]"
                >
                    <path
                        d="M0,120 L0,80 C150,80 250,0 720,0 C1190,0 1290,80 1440,80 L1440,120 Z"
                        fill="#000000"
                    />
                </svg>
            </div>

            <div className="max-w-[1440px] mx-auto relative z-10 px-6">

                {/* 1. Modern Navigation - White/Gold Monochromatic */}
                <div className="pt-8 pb-16 border-b border-white/10 text-center">
                    <ul className="flex flex-wrap justify-center items-center gap-x-6 md:gap-x-10 lg:gap-x-14">
                        {[
                            { name: 'HÉBERGEMENTS', path: '/rooms' },
                            { name: 'CHAMBRES & SUITES', path: '/rooms' },
                            { name: 'SERVICES', path: '/services' },
                            { name: 'GALERIE', path: '/gallery' },
                            { name: 'RÉSERVATION', path: '/booking' },
                            { name: 'À PROPOS', path: '/about' },
                            { name: 'CONTACT', path: '/contact' }
                        ].map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.path}
                                    className="font-['Raleway'] text-[10px] md:text-[11px] tracking-[0.3em] font-medium text-white/50 hover:text-[var(--accent)] transition-all duration-300 uppercase whitespace-nowrap"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 2. Brand & Contact Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 items-center py-20 px-4 md:px-10">

                    {/* Social Icons - Monochromatic style (Gold on Black) */}
                    <div className="flex justify-center md:justify-start space-x-6 order-2 md:order-1">
                        {[
                            { icon: <Facebook size={18} />, label: 'Facebook' },
                            { icon: <Instagram size={18} />, label: 'Instagram' },
                            { icon: <Twitter size={18} />, label: 'X' },
                            { icon: <Youtube size={18} />, label: 'Youtube' }
                        ].map((social) => (
                            <a
                                key={social.label}
                                href="#"
                                aria-label={social.label}
                                className="text-white/30 hover:text-[var(--accent)] hover:scale-125 transition-all duration-500"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>

                    {/* Branding - White/Gold Center Logo */}
                    <div className="flex flex-col items-center order-1 md:order-2">
                        <Link to="/" className="group text-center">
                            <img
                                src="/images/logo.png"
                                alt="Zanouba"
                                className="h-16 md:h-20 lg:h-24 w-auto transition-transform duration-500 group-hover:scale-105"
                            />
                            <p className="font-serif italic text-[10px] md:text-xs text-[var(--accent)] tracking-[0.4em] uppercase mt-4 font-light">Marrakech Palais</p>
                        </Link>
                    </div>

                    {/* Contact - Right Column */}
                    <div className="flex flex-col items-center md:items-end gap-3 order-3 font-['Raleway'] text-[10px] md:text-[11px] tracking-[0.2em] text-white/30 uppercase">
                        <div className="flex items-center gap-3">
                            <MapPin size={12} className="text-[var(--accent)]" />
                            <span className="text-white/50">Dar El Bacha, Marrakech, Maroc</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone size={12} className="text-[var(--accent)]" />
                            <a href="tel:+212524456789" className="hover:text-white transition-colors text-white/50">+212 5 24 45 67 89</a>
                        </div>
                        <div className="flex items-center gap-3">
                            <Mail size={12} className="text-[var(--accent)]" />
                            <a href="mailto:contact@riadzanouba.com" className="lowercase hover:text-white transition-colors text-white/50">contact@riadzanouba.com</a>
                        </div>
                    </div>
                </div>

                {/* 3. Credits & Legal Bar */}
                <div className="border-t border-white/5 pb-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="font-sans text-[8px] md:text-[9px] tracking-[0.3em] text-white/10 uppercase">
                        &copy; {new Date().getFullYear()} RIAD ZANOUBA &mdash; TOUS DROITS RÉSERVÉS
                    </p>
                    <div className="flex gap-10 font-sans text-[8px] md:text-[9px] tracking-[0.3em] text-white/10 uppercase">
                        <Link to="#" className="hover:text-[var(--accent)] transition-colors">Mentions Légales</Link>
                        <Link to="#" className="hover:text-[var(--accent)] transition-colors">Confidentialité</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
