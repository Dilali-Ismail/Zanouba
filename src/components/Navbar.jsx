import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Le Riad', path: '/about' },
        { name: 'Suites & Chambres', path: '/rooms' },
        { name: 'Services', path: '/services' },
        { name: 'Galerie', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
    ];

    const bgColor = (isScrolled || !isHome) ? 'bg-[var(--background)] shadow-sm' : 'bg-transparent';
    const textColor = (isScrolled || !isHome) ? 'text-[var(--text-primary)]' : 'text-white';
    const logoColor = (isScrolled || !isHome) ? 'text-[var(--primary)]' : 'text-white';

    return (
        <nav className={`fixed w-full z-40 transition-all duration-500 ease-in-out ${bgColor}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-24">

                    {/* Mobile Menu Button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={`${textColor} hover:text-[var(--accent)] transition-colors`}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>

                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center justify-center md:justify-start flex-1 md:flex-none">
                        <Link to="/" className={`text-4xl text-serif tracking-widest uppercase font-bold transition-colors duration-500 ${logoColor} hover:text-[var(--accent)]`}>
                            Zanouba
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8 items-center flex-1 justify-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm tracking-widest uppercase hover:text-[var(--accent)] transition-colors duration-300 ${textColor} ${location.pathname === link.path ? 'border-b border-[var(--accent)]' : ''
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Booking CTA */}
                    <div className="hidden md:flex flex-shrink-0">
                        <Link
                            to="/booking"
                            className={`px-6 py-2 border uppercase tracking-widest text-xs font-semibold transition-all duration-300 ${isScrolled || !isHome
                                    ? 'border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white'
                                    : 'border-white text-white hover:bg-white hover:text-[var(--primary)]'
                                }`}
                        >
                            Réserver
                        </Link>
                    </div>

                    {/* Mobile spacer for centering logo */}
                    <div className="w-7 md:hidden"></div>

                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-[var(--background)] z-50 transition-transform duration-500 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    } md:hidden`}
            >
                <div className="flex flex-col h-full p-8">
                    <div className="flex justify-between items-center mb-12">
                        <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl text-serif text-[var(--primary)] tracking-widest uppercase">
                            Zanouba
                        </Link>
                        <button onClick={() => setIsMobileMenuOpen(false)} className="text-[var(--text-primary)] hover:text-[var(--primary)]">
                            <X size={32} />
                        </button>
                    </div>

                    <div className="flex flex-col space-y-6 text-center mt-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-xl text-serif text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/booking"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="mt-8 mx-auto btn-primary w-full max-w-xs"
                        >
                            Réserver votre séjour
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
