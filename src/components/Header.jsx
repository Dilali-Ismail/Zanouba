import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        // Check initial scroll position
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setMobileMenuOpen(false);
        // In mobile overlay, body scroll should be locked.
        if (mobileMenuOpen) {
            document.body.style.overflow = '';
        }
    }, [location]);

    // Handle body scroll locking when mobile menu opens/closes
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [mobileMenuOpen]);


    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const navLinks = [
        { name: "Accueil", path: "/" },
        { name: "À propos", path: "/about" },
        { name: "Chambres", path: "/rooms" },
        { name: "Réservation", path: "/booking" },
        { name: "Galerie", path: "/gallery" },
        { name: "Services", path: "/services" },
        { name: "Contact", path: "/contact" }
    ];

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-400 ease-in-out h-20 md:h-24 flex items-center ${scrolled || mobileMenuOpen
                    ? "bg-black shadow-[0_4px_20px_rgba(0,0,0,0.3)] text-white"
                    : "bg-[var(--nav-bg-top)] text-[var(--nav-text-top)] shadow-none"
                    }`}
            >
                <div className="container mx-auto px-6 h-full flex items-center justify-between">

                    {/* Logo Section */}
                    <div className="flex-shrink-0 z-50">
                        <Link to="/" className="block">
                            <img
                                src="/images/logo.png"
                                alt="Riad ZANOUBA"
                                className="h-10 md:h-14 lg:h-16 w-auto transition-all duration-500 hover:scale-105"
                                style={{
                                    filter: !scrolled && !mobileMenuOpen ? 'drop-shadow(0 0 2px rgba(0,0,0,0.5))' : 'none'
                                }}
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation - Centered */}
                    <nav className="hidden lg:flex items-center justify-center space-x-8 flex-1 px-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`font-sans font-medium text-[13px] tracking-[0.2em] uppercase relative group transition-all duration-300 ${location.pathname === link.path ? 'text-[var(--accent)]' : 'hover:text-[var(--accent)]'}`}
                            >
                                {link.name}
                                {/* Hover Underline Effect - Gold */}
                                <span className={`absolute -bottom-2 left-0 h-[1px] bg-[var(--accent)] transition-all duration-500 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                            </Link>
                        ))}
                    </nav>

                    {/* Right Section: CTA & Language (Desktop) & Hamburger (Mobile) */}
                    <div className="flex items-center space-x-4 md:space-x-6 z-50">
                        {/* Language Selector (Discreet) */}
                        <div className="hidden md:flex items-center space-x-2 font-sans text-xs tracking-[0.2em] font-medium cursor-pointer hover:text-[var(--accent)] transition-colors opacity-80">
                            <span>FR</span>
                        </div>

                        {/* CTA Button (Desktop) */}
                        <div className="hidden md:block">
                            <Link
                                to="/booking"
                                className="inline-flex items-center justify-center px-6 py-3 bg-[var(--primary)] text-white font-sans text-sm tracking-widest uppercase rounded-lg border border-transparent hover:bg-white hover:text-[var(--primary)] hover:border-[var(--accent)] transition-all duration-300"
                            >
                                Réserver
                            </Link>
                        </div>

                        {/* Mobile Hamburger Icon */}
                        <button
                            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 focus:outline-none"
                            onClick={toggleMobileMenu}
                            aria-label="Toggle Navigation"
                        >
                            <span className={`block w-6 h-[2px] rounded-full transition-all duration-300 ease-out ${mobileMenuOpen ? 'rotate-45 translate-y-[6px] bg-[var(--primary)]' : scrolled ? 'bg-[var(--nav-text-scrolled)]' : 'bg-white'}`} />
                            <span className={`block w-6 h-[2px] rounded-full mt-[4px] transition-all duration-300 ease-out ${mobileMenuOpen ? 'opacity-0' : scrolled ? 'bg-[var(--nav-text-scrolled)]' : 'bg-white'}`} />
                            <span className={`block w-6 h-[2px] rounded-full mt-[4px] transition-all duration-300 ease-out ${mobileMenuOpen ? '-rotate-45 -translate-y-[6px] bg-[var(--primary)]' : scrolled ? 'bg-[var(--nav-text-scrolled)]' : 'bg-white'}`} />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Overlay Menu */}
            <div
                className={`fixed inset-0 bg-black z-40 flex flex-col items-center justify-center transition-all duration-700 ease-in-out lg:hidden ${mobileMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-[-100%]"
                    }`}
            >
                <div className="absolute top-0 left-0 w-full h-20 md:h-24 bg-black border-b border-white/5" />
                <nav className="flex flex-col items-center space-y-8 w-full px-6 mt-12 overflow-y-auto max-h-screen py-8">
                    {navLinks.map((link, index) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`font-sans text-2xl tracking-[0.3em] uppercase transition-all duration-500 text-center w-full ${location.pathname === link.path ? 'text-[var(--accent)]' : 'text-white/70 hover:text-white'}`}
                            style={{ transitionDelay: `${index * 50}ms` }}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <div className="pt-8 w-full max-w-xs border-t border-[var(--accent)]/30 flex flex-col items-center space-y-6">
                        <Link
                            to="/booking"
                            className="w-full text-center px-8 py-4 bg-[var(--primary)] text-white font-sans text-sm tracking-widest uppercase rounded-lg border border-transparent hover:bg-white hover:text-[var(--primary)] hover:border-[var(--accent)] transition-all duration-300"
                        >
                            Réserver maintenant
                        </Link>

                        <div className="flex space-x-6 text-[var(--text-primary)] font-sans text-sm tracking-widest uppercase pb-12">
                            <span className="font-bold underline cursor-pointer hover:text-[var(--primary)] text-[var(--primary)]">FR</span>
                            <span className="cursor-pointer hover:text-[var(--primary)] transition-colors">EN</span>
                            <span className="cursor-pointer hover:text-[var(--primary)] transition-colors">AR</span>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Header;
