import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import DarkModeToggle from '../ui/DarkModeToggle';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    // Handling scroll effect: transparent on top, solid background when scrolled
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location.pathname]);

    const navLinks = [
        { name: 'Accueil', path: '/' },
        { name: 'À Propos', path: '/about' },
        { name: 'Chambres', path: '/rooms' },
        { name: 'Galerie', path: '/gallery' },
        { name: 'Services', path: '/services' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <>
            <header
                className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
                        ? 'bg-white/95 dark:bg-[#121212]/95 backdrop-blur-sm shadow-sm py-4'
                        : `py-6 ${isHome ? 'bg-transparent' : 'bg-white dark:bg-[#121212]'}`
                    }`}
                style={{
                    borderBottom: isScrolled ? '1px solid rgba(0,0,0,0.05)' : 'none',
                }}
            >
                <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">

                    {/* Logo */}
                    <Link to="/" className="relative z-50">
                        <h1 className={`font-playfair text-2xl md:text-3xl font-bold tracking-widest ${isHome && !isScrolled && !mobileMenuOpen ? 'text-white' : 'text-secondary dark:text-white'
                            }`}>
                            ZANOUBA
                        </h1>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        <ul className="flex space-x-8">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <NavLink
                                        to={link.path}
                                        className={({ isActive }) => `
                      font-montserrat text-sm uppercase tracking-widest font-medium transition-colors hover:text-primary relative group
                      ${isActive
                                                ? 'text-primary'
                                                : isHome && !isScrolled ? 'text-white/90' : 'text-text-primary dark:text-gray-300'
                                            }
                    `}
                                    >
                                        {link.name}
                                        <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                                    </NavLink>
                                </li>
                            ))}
                        </ul>

                        <div className="flex items-center space-x-4 border-l border-gray-300 dark:border-gray-700 pl-4">
                            <DarkModeToggle />
                            <Link to="/booking" className="btn btn-primary text-sm py-2 px-6">
                                Réserver
                            </Link>
                        </div>
                    </nav>

                    {/* Mobile UI Buttons */}
                    <div className="flex items-center space-x-4 lg:hidden relative z-50">
                        <DarkModeToggle />
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className={`p-2 focus:outline-none ${isHome && !isScrolled && !mobileMenuOpen ? 'text-white' : 'text-text-primary dark:text-white'
                                }`}
                        >
                            {mobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-40 bg-white dark:bg-[#121212] pt-24 px-6 flex flex-col"
                    >
                        <nav className="flex-1 flex flex-col justify-center items-center space-y-8">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    className={({ isActive }) => `
                    font-playfair text-3xl font-bold transition-colors
                    ${isActive ? 'text-primary' : 'text-text-primary dark:text-white'}
                  `}
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                            <Link
                                to="/booking"
                                className="btn btn-primary mt-8 w-full max-w-xs py-4 text-center rounded-lg text-lg"
                            >
                                Réserver Séjour
                            </Link>
                        </nav>

                        <div className="py-8 border-t border-gray-100 dark:border-gray-800 text-center font-montserrat text-sm text-text-secondary">
                            <p>📍 Médina, Marrakech, Maroc</p>
                            <p className="mt-2 text-primary font-medium">+212 5 00 00 00 00</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
