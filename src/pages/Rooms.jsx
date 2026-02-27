import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FadeInSection from '../components/FadeInSection';
import { BedDouble, Bath, Wifi, Wind, Coffee, Maximize, User } from 'lucide-react';

const roomsData = [
    {
        id: 'suite-royale',
        title: 'Suite Royale ZANOUBA',
        type: 'Suite',
        view: 'Patio & Atlas',
        capacity: 4,
        size: 120,
        price: 850,
        description: 'Le summum du raffinement marrakchi. De vastes espaces couronnés de plafonds en cèdre sculpté, une terrasse privée surplombant le patio luxuriant, et un lit king-size drapé de soieries.',
        image: '/images/rooms/douiria.jpg',
        amenities: [<BedDouble key="bed" size={16} />, <Bath key="bath" size={16} />, <Wifi key="wifi" size={16} />, <Wind key="wind" size={16} />, <Coffee key="coffee" size={16} />]
    },
    {
        id: 'suite-prestige',
        title: 'Suite Prestige',
        type: 'Suite',
        view: 'Patio Central',
        capacity: 2,
        size: 75,
        price: 550,
        description: 'Une retraite intime où les zelliges anciens répondent au confort contemporain. La salle de bain en tadelakt traditionnel invite à une détente absolue après l\'effervescence des souks.',
        image: '/images/rooms/bahia.jpg',
        amenities: [<BedDouble key="bed" size={16} />, <Bath key="bath" size={16} />, <Wifi key="wifi" size={16} />, <Wind key="wind" size={16} />]
    },
    {
        id: 'suite-zen',
        title: 'Suite Zen Andalouse',
        type: 'Suite',
        view: 'Jardin Intérieur',
        capacity: 2,
        size: 65,
        price: 450,
        description: 'Baignée par la douce lumière filtrant à travers le moucharabieh, cette suite aux tons crèmes est un sanctuaire de paix, célébrant l\'épure et l\'artisanat local.',
        image: '/images/rooms/menzeh.jpg',
        amenities: [<BedDouble key="bed" size={16} />, <Bath key="bath" size={16} />, <Wifi key="wifi" size={16} />, <Wind key="wind" size={16} />]
    },
    {
        id: 'chambre-patio-1',
        title: 'Chambre Supérieure Patio',
        type: 'Chambre',
        view: 'Patio',
        capacity: 2,
        size: 40,
        price: 250,
        description: 'Lovée au rez-de-chaussée, elle s\'ouvre directement sur le murmure de la fontaine d\'eau. Un cocon chaleureux habillé de stucs délicats et de tapis berbères.',
        image: '/images/rooms/amber.jpg',
        amenities: [<BedDouble key="bed" size={16} />, <Bath key="bath" size={16} />, <Wifi key="wifi" size={16} />, <Wind key="wind" size={16} />]
    },
    {
        id: 'chambre-patio-2',
        title: 'Chambre Classique',
        type: 'Chambre',
        view: 'Ruelle Médina',
        capacity: 2,
        size: 35,
        price: 180,
        description: 'L\'expérience authentique du riad dans un format intime. Idéale pour les voyageurs recherchant le charme de l\'essentiel et l\'hospitalité légendaire du ZANOUBA.',
        image: '/images/rooms/atlas.avif',
        amenities: [<BedDouble key="bed" size={16} />, <Bath key="bath" size={16} />, <Wifi key="wifi" size={16} />]
    }
];

const FilterButton = ({ label, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`font-sans text-sm tracking-widest uppercase pb-2 transition-all duration-300 border-b-2 ${isActive
            ? 'border-[var(--primary)] text-[var(--primary)] font-medium'
            : 'border-transparent text-[var(--text-secondary)] hover:text-[var(--primary)]'
            }`}
    >
        {label}
    </button>
);

const RoomCard = ({ room, index }) => {
    return (
        <FadeInSection delay={index % 2 === 0 ? 0 : 200}>
            <div className="group flex flex-col bg-white shadow-sm hover:shadow-2xl transition-all duration-500 rounded-sm overflow-hidden border border-transparent hover:border-[var(--accent)]/30 mx-auto w-full max-w-lg">
                {/* Image Section */}
                <div className="relative h-64 sm:h-72 md:h-80 w-full overflow-hidden inline-block cursor-pointer">
                    <img
                        src={room.image}
                        alt={room.title}
                        className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                        onError={(e) => {
                            e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none"><rect width="100" height="100" fill="%23ECE6E0"/><text x="50" y="50" font-family="serif" font-size="4" text-anchor="middle" dominant-baseline="middle" fill="%23781924">Placeholder Luxe</text></svg>';
                        }}
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <span className="text-white font-sans uppercase tracking-[0.2em] text-sm border border-white px-6 py-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            Voir les détails
                        </span>
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8 flex flex-col flex-grow bg-[var(--background)]">
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="font-serif text-2xl md:text-2xl text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors duration-300">
                            {room.title}
                        </h3>
                    </div>

                    <p className="font-serif italic text-base text-[var(--text-secondary)] line-clamp-3 mb-6 leading-relaxed font-light">
                        {room.description}
                    </p>

                    <div className="mt-auto">
                        {/* Key Info row */}
                        <div className="flex flex-wrap items-center gap-4 mb-6 border-t border-b border-[var(--accent)]/20 py-4">
                            <div className="flex items-center gap-2 text-[var(--text-secondary)] font-sans text-sm">
                                <User size={16} className="text-[var(--accent)]" />
                                <span>{room.capacity} pers.</span>
                            </div>
                            <div className="flex items-center gap-2 text-[var(--text-secondary)] font-sans text-sm">
                                <Maximize size={16} className="text-[var(--accent)]" />
                                <span>{room.size} m²</span>
                            </div>
                            <div className="flex items-center gap-3 text-[var(--accent)] ml-auto">
                                {room.amenities}
                            </div>
                        </div>

                        {/* CTA */}
                        <Link
                            to="/booking"
                            className="inline-flex w-full items-center justify-center px-6 py-3 bg-[var(--primary)] text-white font-sans text-sm tracking-widest uppercase rounded-sm border border-transparent hover:bg-white hover:text-[var(--primary)] hover:border-[var(--accent)] transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1"
                        >
                            Réserver
                        </Link>
                    </div>
                </div>
            </div>
        </FadeInSection>
    );
};

const Rooms = () => {
    const [filter, setFilter] = useState('All');

    const filteredRooms = filter === 'All'
        ? roomsData
        : roomsData.filter(room => room.type === filter);

    return (
        <div className="w-full bg-[var(--background)]">
            {/* Hero Section */}
            <section className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/rooms/hero-chambres.jpg"
                        alt="Chambres et Suites Riad ZANOUBA"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none"><rect width="100" height="100" fill="%23ECE6E0"/></svg>';
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-[#FAF8F4]/90 mix-blend-multiply"></div>
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mt-20">
                    <FadeInSection delay={0}>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 tracking-wide drop-shadow-sm">
                            Nos Chambres <span className="font-light italic">&</span> Suites
                        </h1>
                    </FadeInSection>

                    <FadeInSection delay={300}>
                        <div className="w-16 h-px bg-[var(--accent)] mx-auto mb-6"></div>
                        <p className="text-xl md:text-2xl font-serif italic text-[var(--text-primary)] font-light">
                            L'harmonie parfaite entre tradition marocaine et raffinement absolu
                        </p>
                    </FadeInSection>
                </div>
            </section>

            {/* Filter Section */}
            <section className="py-12 bg-[var(--background)] sticky top-20 md:top-24 z-30 shadow-sm border-b border-[var(--accent)]/10">
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-center space-x-8 md:space-x-16">
                        <FilterButton
                            label="Toutes nos clés"
                            isActive={filter === 'All'}
                            onClick={() => setFilter('All')}
                        />
                        <FilterButton
                            label="Suites"
                            isActive={filter === 'Suite'}
                            onClick={() => setFilter('Suite')}
                        />
                        <FilterButton
                            label="Chambres"
                            isActive={filter === 'Chambre'}
                            onClick={() => setFilter('Chambre')}
                        />
                    </div>
                </div>
            </section>

            {/* Grid Collection Section */}
            <section className="py-20 md:py-32 px-4 md:px-8 bg-[var(--background)] relative">
                <div className="absolute top-0 right-0 w-full h-full opacity-[0.02] bg-zellige pointer-events-none"></div>
                <div className="max-w-[1400px] mx-auto relative z-10">
                    {/* CSS Grid (Responsive) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                        {filteredRooms.map((room, index) => (
                            <RoomCard key={room.id} room={room} index={index} />
                        ))}
                    </div>

                    {filteredRooms.length === 0 && (
                        <div className="text-center py-20 text-[var(--text-secondary)] font-sans">
                            Aucune chambre disponible pour le moment.
                        </div>
                    )}
                </div>
            </section>

            {/* Final CTA Strip */}
            <section className="py-24 bg-[var(--primary)] text-center px-4">
                <FadeInSection>
                    <h2 className="text-3xl md:text-5xl font-serif text-white mb-8">
                        Vivez la légende marocaine
                    </h2>
                    <p className="text-white/80 font-sans font-light max-w-2xl mx-auto mb-10">
                        Notre équipe d'exception se tient à votre entière disposition pour personnaliser votre séjour et exaucer vos moindres désirs avant même votre arrivée.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center justify-center px-10 py-4 bg-transparent text-white font-sans text-sm tracking-widest uppercase rounded-sm border border-white hover:bg-white hover:text-[var(--primary)] hover:border-white transition-all duration-300"
                    >
                        Nous contacter
                    </Link>
                </FadeInSection>
            </section>
        </div>
    );
};

export default Rooms;
