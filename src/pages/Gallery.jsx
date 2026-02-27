import React, { useState, useEffect } from 'react';
import FadeInSection from '../components/FadeInSection';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const galleryItems = [
    { id: 1, src: '/images/gallery/gal-1.avif', category: 'Intérieur', caption: 'Atmosphère sereine du patio' },
    { id: 2, src: '/images/gallery/gal-2.webp', category: 'Extérieur / Jardins', caption: 'Jardin suspendu au cœur de la Médina' },
    { id: 3, src: '/images/gallery/gal-3.webp', category: 'Détails & Artisanat', caption: 'Finesse des sculptures en cèdre' },
    { id: 4, src: '/images/gallery/gal-4.jpg', category: 'Suites & Chambres', caption: 'Confort et élégance de nos suites' },
    { id: 5, src: '/images/gallery/gal-5.jfif', category: 'Expériences', caption: 'Rituels bien-être ancestraux' },
    { id: 6, src: '/images/gallery/gal-6.jpg', category: 'Extérieur / Jardins', caption: 'Terrasse ensoleillée sur le toit' },
    { id: 7, src: '/images/gallery/gal-7.avif', category: 'Détails & Artisanat', caption: 'Mosaïques et zelliges traditionnels' },
    { id: 8, src: '/images/gallery/gal-8.webp', category: 'Suites & Chambres', caption: 'Détails raffinés de votre chambre' },
    { id: 9, src: '/images/gallery/gal-9.webp', category: 'Expériences', caption: 'Saveurs de l\'hospitalité marocaine' },
    { id: 10, src: '/images/gallery/gal-10.jpg', category: 'Intérieur', caption: 'Salon de réception traditionnel' },
    { id: 11, src: '/images/gallery/gal-11.webp', category: 'Détails & Artisanat', caption: 'Art de la table et argenterie' },
    { id: 12, src: '/images/gallery/gal-12.webp', category: 'Intérieur', caption: 'Jeux de lumière dans les couloirs' },
];

const categories = ['Tous', 'Intérieur', 'Extérieur / Jardins', 'Suites & Chambres', 'Détails & Artisanat', 'Expériences'];

const Gallery = () => {
    const [filter, setFilter] = useState('Tous');
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const filteredItems = filter === 'Tous'
        ? galleryItems
        : galleryItems.filter(item => item.category === filter);

    // Lightbox Controls
    const openLightbox = (index) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
        document.body.style.overflow = 'hidden'; // Prevent scroll behind lightbox
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        document.body.style.overflow = 'auto';
    };

    const nextImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % filteredItems.length);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? filteredItems.length - 1 : prevIndex - 1));
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!lightboxOpen) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') nextImage(e);
            if (e.key === 'ArrowLeft') prevImage(e);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxOpen, filteredItems.length]);

    return (
        <div className="w-full bg-[var(--background)] min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[66vh] md:h-[75vh] w-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/gallery/hero-galerie.jpg"
                        alt="Galerie Riad ZANOUBA"
                        className="w-full h-full object-cover scale-100" // Optional custom zoom animation class could go here
                        onError={(e) => {
                            e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none"><rect width="100" height="100" fill="%23ECE6E0"/></svg>';
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#FAF8F4] mix-blend-multiply opacity-80"></div>
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mt-24">
                    <FadeInSection delay={0}>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 drop-shadow-sm">
                            Galerie
                        </h1>
                    </FadeInSection>

                    <FadeInSection delay={300}>
                        <p className="text-xl md:text-3xl font-serif italic text-white drop-shadow-md font-light tracking-wide">
                            Découvrez l’âme de notre oasis en images
                        </p>
                    </FadeInSection>
                </div>
            </section>

            {/* Intro Text & Filters */}
            <section className="py-16 md:py-24 bg-[var(--background)] relative z-10">
                <FadeInSection>
                    <div className="text-center mb-16 px-6 max-w-3xl mx-auto">
                        <p className="font-serif italic text-lg md:text-xl text-[var(--text-secondary)] font-light leading-relaxed">
                            "Chaque photo raconte une partie de notre histoire. Imprégnez-vous de la lumière de Marrakech, admirez les détails fastueux de l'artisanat marocain et laissez-vous transporter par la poésie de nos espaces."
                        </p>
                    </div>
                </FadeInSection>

                {/* Filters - Sticky on desktop for easier navigation */}
                <div className="container mx-auto px-6 mb-12 sticky top-24 z-30 bg-[var(--background)]/90 backdrop-blur-md py-4 transition-all duration-300">
                    <div className="flex flex-nowrap md:flex-wrap items-center justify-start md:justify-center overflow-x-auto pb-4 md:pb-0 gap-6 md:gap-10 scrollbar-hide">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`whitespace-nowrap font-serif text-sm tracking-widest uppercase transition-all duration-500 border-b border-transparent pb-1
                                    ${filter === cat
                                        ? 'text-[var(--primary)] border-[var(--primary)] font-medium'
                                        : 'text-[var(--text-secondary)] hover:text-[var(--primary)]'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Masonry Grid */}
                <div className="container mx-auto px-4 md:px-8 pb-32">
                    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                        {filteredItems.map((item, index) => (
                            <div key={item.id} className="break-inside-avoid">
                                <FadeInSection delay={(index % 4) * 150}>
                                    <div
                                        className="group relative cursor-pointer overflow-hidden rounded-sm bg-[var(--light-bg)]"
                                        onClick={() => openLightbox(index)}
                                    >
                                        <img
                                            src={item.src}
                                            alt={item.caption}
                                            loading="lazy"
                                            className="w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                            onError={(e) => {
                                                e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="800" viewBox="0 0 100 100" preserveAspectRatio="none"><rect width="100" height="100" fill="%23ECE6E0"/><text x="50" y="50" font-family="serif" font-size="4" text-anchor="middle" dominant-baseline="middle" fill="%23781924">Luxe</text></svg>';
                                            }}
                                        />

                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-transparent group-hover:border-[var(--accent)]/30 flex flex-col justify-end p-6 md:p-8">
                                            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                                <div className="w-8 h-8 rounded-full border border-[var(--accent)] flex items-center justify-center mb-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                                                    <ZoomIn size={14} className="text-[var(--accent)]" />
                                                </div>
                                                <span className="block font-sans text-xs uppercase tracking-widest text-[var(--accent)] mb-2">
                                                    {item.category}
                                                </span>
                                                <p className="font-serif italic text-white text-lg">
                                                    {item.caption}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </FadeInSection>
                            </div>
                        ))}
                    </div>

                    {filteredItems.length === 0 && (
                        <div className="text-center py-20 font-serif italic text-[var(--text-secondary)]">
                            Aucune image ne correspond à cette catégorie actuellement.
                        </div>
                    )}
                </div>
            </section>

            {/* Social Hash Section */}
            <section className="py-24 bg-[var(--light-bg)] text-center">
                <FadeInSection>
                    <h2 className="text-3xl font-serif text-[var(--text-primary)] mb-6">Partagez votre Légende</h2>
                    <p className="font-sans font-light text-[var(--text-secondary)] mb-8">Mentionnez-nous sur Instagram pour figurer dans notre galerie éternelle.</p>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" className="font-serif text-2xl md:text-4xl text-[var(--accent)] hover:text-[var(--primary)] transition-colors">
                        #RiadZanouba
                    </a>
                </FadeInSection>
            </section>

            {/* LIGHTBOX COMPONENT */}
            {lightboxOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a09]/95 backdrop-blur-sm animate-fade-in">
                    {/* Header bar */}
                    <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-start z-[101]">
                        <div className="text-[var(--accent)] font-sans text-xs uppercase tracking-widest hidden md:block">
                            {currentImageIndex + 1} / {filteredItems.length} &nbsp;&mdash;&nbsp; {filteredItems[currentImageIndex].category}
                        </div>
                        <button
                            onClick={closeLightbox}
                            className="text-white hover:text-[var(--primary)] transition-colors bg-white/5 hover:bg-white/10 p-3 rounded-full"
                        >
                            <X size={28} />
                        </button>
                    </div>

                    {/* Left Navigation */}
                    <button
                        onClick={prevImage}
                        className="absolute left-4 md:left-10 z-[101] text-white/50 hover:text-[var(--accent)] transition-colors p-4"
                    >
                        <ChevronLeft size={48} strokeWidth={1} />
                    </button>

                    {/* Main Image */}
                    <div className="relative w-full h-full max-w-6xl max-h-[85vh] mx-auto flex flex-col items-center justify-center p-4">
                        <img
                            src={filteredItems[currentImageIndex].src}
                            alt={filteredItems[currentImageIndex].caption}
                            className="max-w-full max-h-full object-contain mb-8 shadow-2xl"
                            onError={(e) => {
                                e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none"><rect width="100" height="100" fill="%231a1a1a"/><text x="50" y="50" font-family="serif" font-size="4" text-anchor="middle" dominant-baseline="middle" fill="%23C9A96E">Image Non Disponible</text></svg>';
                            }}
                        />
                        <div className="absolute bottom-6 md:bottom-12 w-full text-center px-4">
                            <p className="font-serif text-2xl md:text-3xl italic text-white font-light drop-shadow-md">
                                {filteredItems[currentImageIndex].caption}
                            </p>
                        </div>
                    </div>

                    {/* Right Navigation */}
                    <button
                        onClick={nextImage}
                        className="absolute right-4 md:right-10 z-[101] text-white/50 hover:text-[var(--accent)] transition-colors p-4"
                    >
                        <ChevronRight size={48} strokeWidth={1} />
                    </button>
                </div>
            )}
        </div>
    );
};

export default Gallery;
