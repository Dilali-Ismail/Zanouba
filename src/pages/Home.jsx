import React from 'react';
import { Link } from 'react-router-dom';
import FadeInSection from '../components/FadeInSection';

const Home = () => {
    return (
        <div className="w-full bg-[var(--background)]">
            {/* Hero Section */}
            <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/hero/hero-patio.jpg"
                        alt="Riad Zanouba Architecture"
                        className="w-full h-full object-cover scale-105 animate-[zoomOut_20s_ease-out_forwards]"
                        onError={(e) => {
                            e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none"><rect width="100" height="100" fill="%23ECE6E0"/></svg>';
                        }}
                    />
                    {/* Subtle warm overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-[#FAF8F4]/80 mix-blend-multiply"></div>
                </div>

                <div className="relative z-10 text-center text-white px-6 w-full max-w-5xl mt-20">
                    <FadeInSection delay={0}>
                        <h2 className="text-sm md:text-base font-sans font-light tracking-[0.3em] uppercase mb-4 drop-shadow-md">
                            Bienvenue au cœur du
                        </h2>
                    </FadeInSection>

                    <FadeInSection delay={300}>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 drop-shadow-xl font-normal tracking-wide">
                            Riad ZANOUBA
                        </h1>
                    </FadeInSection>

                    <FadeInSection delay={600}>
                        <p className="text-xl md:text-2xl font-serif italic text-white/90 font-light mb-12 drop-shadow-md">
                            Une oasis d'authenticité et de sérénité à Marrakech
                        </p>
                    </FadeInSection>

                    <FadeInSection delay={900}>
                        <Link
                            to="/booking"
                            className="inline-flex items-center justify-center px-10 py-4 bg-[var(--primary)] text-white font-sans text-sm tracking-widest uppercase rounded-lg border-2 border-[var(--primary)] hover:bg-transparent hover:text-white hover:border-[var(--accent)] transition-all duration-400 ease-out hover:scale-105"
                        >
                            Réserver votre séjour
                        </Link>
                    </FadeInSection>
                </div>
            </section>

            {/* Introduction / Venir, Revenir */}
            <section className="py-24 md:py-32 px-6 bg-[var(--background)]">
                <div className="max-w-4xl mx-auto text-center">
                    <FadeInSection>
                        <h2 className="text-3xl md:text-5xl font-serif text-[var(--primary)] mb-10 leading-snug">
                            Venir, revenir <br className="hidden md:block" /> au Riad ZANOUBA
                        </h2>
                    </FadeInSection>

                    <FadeInSection delay={200}>
                        <div className="flex flex-col gap-6 text-[var(--text-secondary)] font-sans text-base md:text-lg leading-relaxed font-light mb-12">
                            <p>
                                Pousser les portes du Riad ZANOUBA, c'est pénètrer dans un monde où le temps suspend son vol. Ici, l'effervescence de Marrakech s'efface pour laisser place au murmure discret de l'eau, au parfum subtil de la fleur d'oranger et à une lumière qui caresse la pierre avec une douceur indicible.
                            </p>
                            <p>
                                Nos hôtes ne font pas qu'y séjourner ; ils y vivent une expérience intime, un retour aux sources. La fidélité de ceux qui franchissent notre seuil témoigne d'une promesse tenue : celle d'une hospitalité sincère, discrète et profondément marocaine.
                            </p>
                        </div>
                    </FadeInSection>

                    <FadeInSection delay={400}>
                        <Link
                            to="/booking"
                            className="inline-flex items-center justify-center px-8 py-3 bg-transparent text-[var(--primary)] font-sans text-sm tracking-widest uppercase border border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-colors duration-300"
                        >
                            Vivre l'expérience
                        </Link>
                    </FadeInSection>
                </div>
            </section>

            {/* Ce qui rend unique */}
            <section className="py-24 md:py-32 px-6 bg-[var(--light-bg)] relative">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-64 h-64 opacity-5 bg-zellige pointer-events-none"></div>

                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
                    <div className="flex-1 w-full order-2 md:order-1">
                        <FadeInSection>
                            <img
                                src="/images/hero/detail-1.jfif"
                                alt="L'authenticité marocaine"
                                className="w-full h-[70vh] object-cover shadow-2xl"
                                onError={(e) => {
                                    e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none"><rect width="100" height="100" fill="%23FAF8F4"/></svg>';
                                }}
                            />
                        </FadeInSection>
                    </div>

                    <div className="flex-1 w-full order-1 md:order-2">
                        <FadeInSection>
                            <h2 className="text-3xl md:text-5xl font-serif text-[var(--primary)] mb-12 leading-snug">
                                Ce qui rend le Riad ZANOUBA <br className="hidden md:block" /> si unique à leurs yeux ?
                            </h2>
                        </FadeInSection>

                        <div className="space-y-10">
                            <FadeInSection delay={150}>
                                <div>
                                    <h3 className="text-xl font-serif text-[var(--text-primary)] mb-2 italic">L'Hospitalité Sincère</h3>
                                    <p className="text-[var(--text-secondary)] font-sans font-light leading-relaxed">
                                        Un service attentif qui anticipe vos désirs sans jamais s'imposer. Cultiver l'art de recevoir n'est pas une simple phrase, c'est notre héritage.
                                    </p>
                                </div>
                            </FadeInSection>

                            <FadeInSection delay={300}>
                                <div>
                                    <h3 className="text-xl font-serif text-[var(--text-primary)] mb-2 italic">L'Harmonie du Zellige</h3>
                                    <p className="text-[var(--text-secondary)] font-sans font-light leading-relaxed">
                                        Chaque mosaïque raconte une histoire, chaque alcôve sculptée est une déclaration d'amour à l'artisanat ancestral marocain, préservé avec passion.
                                    </p>
                                </div>
                            </FadeInSection>

                            <FadeInSection delay={450}>
                                <div>
                                    <h3 className="text-xl font-serif text-[var(--text-primary)] mb-2 italic">La Sérénité des Patios</h3>
                                    <p className="text-[var(--text-secondary)] font-sans font-light leading-relaxed">
                                        Au centre de la frénésie de la médina, nos espaces offrent un sanctuaire où seul le chant des oiseaux et l'écho de la fontaine rythment vos journées.
                                    </p>
                                </div>
                            </FadeInSection>
                        </div>
                    </div>
                </div>
            </section>

            {/* Metamorphosis / Tout change */}
            <section className="py-24 md:py-32 px-6 bg-[var(--background)]">
                <div className="max-w-4xl mx-auto text-center">
                    <FadeInSection>
                        <h2 className="text-base font-sans tracking-[0.2em] text-[var(--accent)] uppercase mb-6">
                            L'essence intemporelle
                        </h2>
                    </FadeInSection>

                    <FadeInSection delay={200}>
                        <h3 className="text-3xl md:text-5xl font-serif text-[var(--primary)] mb-10 leading-snug">
                            "Tout change pour que <br /> rien ne change"
                        </h3>
                    </FadeInSection>

                    <FadeInSection delay={400}>
                        <p className="text-[var(--text-secondary)] font-sans text-base md:text-lg leading-relaxed font-light mb-12">
                            Le Riad ZANOUBA a su évoluer avec son temps sans jamais renier son âme. Les récentes rénovations ont sublimé l'existant : les toits-terrasses offrent désormais un panorama encore plus majestueux sur l'Atlas, tandis que les lanternes d'époque continuent de diffuser leur lueur chaleureuse, gardiennes des secrets de nos hôtes. C'est dans ce délicat équilibre entre mémoire et modernité que réside notre magie.
                        </p>
                    </FadeInSection>
                </div>
            </section>

            {/* Social Gallery */}
            <section className="py-20 bg-[var(--light-bg)] overflow-hidden">
                <FadeInSection>
                    <div className="text-center mb-12 px-6">
                        <h2 className="text-3xl md:text-4xl font-serif text-[var(--text-primary)] mb-4">
                            Inspiré par vous
                        </h2>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] font-sans tracking-widest uppercase hover:text-[var(--primary)] transition-colors">
                            #RiadZanoubaLife
                        </a>
                    </div>
                </FadeInSection>

                <div className="max-w-full overflow-x-auto pb-8 hide-scrollbar">
                    <div className="flex gap-4 px-4 min-w-max">
                        {['gal-1.avif', 'gal-2.webp', 'gal-3.webp', 'gal-4.jpg', 'gal-5.jfif'].map((imgName, index) => (
                            <FadeInSection key={index} delay={index * 150} className="w-[280px] md:w-[350px] aspect-square">
                                <img
                                    src={`/images/gallery/${imgName}`}
                                    alt={`Moment au Riad Zanouba ${index + 1}`}
                                    className="w-full h-full object-cover rounded-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
                                    onError={(e) => {
                                        e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none"><rect width="100" height="100" fill="%23ECE6E0"/><text x="50" y="50" font-family="sans-serif" font-size="5" text-anchor="middle" dominant-baseline="middle" fill="%23C9A96E">#RiadZanoubaLife</text></svg>';
                                    }}
                                />
                            </FadeInSection>
                        ))}
                    </div>
                </div>

                <div className="text-center mt-12 w-full flex justify-center space-x-4">
                    <Link
                        to="/gallery"
                        className="inline-flex items-center justify-center px-8 py-3 bg-[var(--primary)] text-white font-sans text-sm tracking-widest uppercase rounded-lg hover:bg-white hover:text-[var(--primary)] transition-colors duration-300"
                    >
                        Voir la galerie
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
