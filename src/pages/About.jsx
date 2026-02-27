import React from 'react';
import { Link } from 'react-router-dom';
import FadeInSection from '../components/FadeInSection';

const HistoryTimelineItem = ({ date, title, description, image, align = 'left', delay = 0 }) => {
    const isLeft = align === 'left';

    return (
        <div className="relative w-full flex flex-col md:flex-row items-center justify-between mb-32 md:mb-48 last:mb-0">
            {/* Desktop Timeline Dot */}
            <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[var(--primary)] border-[3px] border-[var(--background)] shadow-[0_0_0_1px_var(--accent)] z-10 transition-transform duration-500 hover:scale-150"></div>

            {/* Mobile Timeline Dot */}
            <div className="md:hidden absolute left-4 top-8 -translate-x-1/2 w-3 h-3 rounded-full bg-[var(--primary)] border-[2px] border-[var(--background)] shadow-[0_0_0_1px_var(--accent)] z-10"></div>

            {/* Content Left */}
            <div className={`w-full md:w-5/12 ml-10 md:ml-0 md:px-8 flex flex-col ${isLeft ? 'md:items-end md:text-right' : 'md:items-start md:text-left'} order-2 md:order-none mt-8 md:mt-0`}>
                <FadeInSection delay={delay}>
                    <div className="mb-4">
                        <span className="font-serif text-5xl md:text-6xl text-[var(--accent)] opacity-80 mb-2 block">{date}</span>
                        <h3 className="font-serif text-2xl md:text-3xl text-[var(--primary)] mb-6">{title}</h3>
                    </div>
                    <p className="font-sans font-light text-[var(--text-secondary)] leading-relaxed text-base md:text-lg">
                        {description}
                    </p>
                </FadeInSection>
            </div>

            {/* Spacer for Center Line */}
            <div className="hidden md:block w-2/12"></div>

            {/* Image Right */}
            <div className={`w-full px-4 md:w-5/12 ml-6 md:ml-0 md:px-8 ${isLeft ? 'order-1 md:order-none' : 'order-1 md:order-none'}`}>
                <FadeInSection delay={delay + 200}>
                    <div className="group relative overflow-hidden rounded-sm shadow-xl">
                        <img
                            src={image}
                            alt={`Histoire du Riad - ${title}`}
                            className="w-full h-[300px] md:h-[450px] object-cover transition-transform duration-1000 group-hover:scale-105"
                            onError={(e) => {
                                e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none"><rect width="100" height="100" fill="%23ECE6E0"/><text x="50" y="50" font-family="serif" font-size="4" text-anchor="middle" dominant-baseline="middle" fill="%231A1A1A">Placeholder</text></svg>';
                            }}
                        />
                        {/* Elegant overlay on hover to simulate high luxury feel */}
                        <div className="absolute inset-0 border border-white/0 group-hover:border-white/30 transition-colors duration-700 m-4 pointer-events-none"></div>
                    </div>
                </FadeInSection>
            </div>
        </div>
    );
};

const About = () => {
    return (
        <div className="w-full bg-[var(--background)]">
            {/* Hero Section */}
            <section className="relative h-[80vh] md:h-[90vh] w-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/history/hero-history.webp"
                        alt="Héritage Riad ZANOUBA"
                        className="w-full h-full object-cover scale-105 animate-[zoomOut_25s_ease-out_forwards]"
                        onError={(e) => {
                            e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none"><rect width="100" height="100" fill="%23ECE6E0"/></svg>';
                        }}
                    />
                    <div className="absolute inset-0 bg-[#FAF8F4]/40 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] to-transparent opacity-90"></div>
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mt-20">
                    <FadeInSection delay={0}>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 tracking-wide drop-shadow-sm">
                            Une Oasis Légendaire
                        </h1>
                    </FadeInSection>

                    <FadeInSection delay={300}>
                        <div className="w-24 h-px bg-[var(--primary)] mx-auto mb-6"></div>
                        <p className="text-xl md:text-2xl font-serif italic text-[var(--text-primary)] font-light">
                            Depuis 1890, gardien des secrets de Marrakech
                        </p>
                    </FadeInSection>
                </div>
            </section>

            {/* Introduction Narrative */}
            <section className="py-20 md:py-32 px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <FadeInSection>
                        <p className="font-sans text-lg md:text-xl font-light text-[var(--text-secondary)] leading-loose mb-12">
                            Au cœur palpitant de la médina de Marrakech, loin des tumultes des souks, une porte en cèdre sculpté dissimule une histoire qui traverse les siècles. Fidèle à son âme originelle, le Riad ZANOUBA n'est pas simplement une demeure de prestige ; c'est un testament vivant de l'art de vivre marocain, où chaque patio ensoleillé, chaque zellige patiné murmure les légendes d'autrefois.
                        </p>
                    </FadeInSection>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="relative py-20 px-6 max-w-6xl mx-auto w-full">
                {/* Vertical Line */}
                <div className="timeline-line"></div>

                {/* Timeline Items */}
                <HistoryTimelineItem
                    date="1890"
                    title="Les Origines, Le Verger du Sultan"
                    description="Là où s'élèvent aujourd'hui nos arches majestueuses s'étendait autrefois un verger luxuriant, cadeau personnel du Sultan Moulay Hassan Ier à l'un de ses vizirs les plus loyaux. L'eau y coulait déjà en abondance, nourrissant orangers et jasmins dont les effluves embaument encore, dit-on, les nuits sans lune."
                    image="/images/history/history-1.jpg"
                    align="left"
                    delay={100}
                />

                <HistoryTimelineItem
                    date="1925"
                    title="L'Âge d'Or Architectural"
                    description="Inspiré par le faste andalou et la rigueur de l'artisanat fassi, le vizir fait ériger la demeure principale. Des maîtres-artisans (mâalems) venus de tout le royaume y consacrent des années de labeur, taillant le plâtre et agençant les mosaïques pour créer une symétrie parfaite, célébrant ainsi l'harmonie entre l'Homme et la Nature."
                    image="/images/history/history-2.jpg"
                    align="right"
                    delay={200}
                />

                <HistoryTimelineItem
                    date="1970"
                    title="Le Refuge des Écrivains"
                    description="Dans le tumulte vibrant des années 70, le Riad devient le refuge secret des poètes, des artistes et des voyageurs en quête d'inspiration. Ses alcôves ombragées ont abrité des conversations passionnées, des rêveries infinies, gravant à jamais la vocation hospitalière de cette demeure."
                    image="/images/history/history-3.jpg"
                    align="left"
                    delay={100}
                />

                <HistoryTimelineItem
                    date="2023"
                    title="La Métamorphose Subtile"
                    description="Une restauration délicate et respectueuse redonne à la demeure tout son éclat. Loin d'en effacer la patine, cette renaissance célèbre l'héritage tout en y insufflant le luxe subtil et le confort exquis du XXIe siècle. Le Riad ZANOUBA s'ouvre enfin au monde, tel un joyau restauré."
                    image="/images/history/history-4.jpg"
                    align="right"
                    delay={200}
                />
            </section>

            {/* Conclusion & CTA */}
            <section className="py-24 md:py-32 px-6 bg-[var(--light-bg)] mt-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 bg-zellige pointer-events-none"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <FadeInSection>
                        <h2 className="text-3xl md:text-5xl font-serif text-[var(--primary)] mb-10 leading-snug">
                            "Il faut que tout change <br className="hidden md:block" /> pour que rien ne change"
                        </h2>
                    </FadeInSection>

                    <FadeInSection delay={200}>
                        <p className="text-[var(--text-secondary)] font-sans text-base md:text-lg leading-relaxed font-light mb-16">
                            Aujourd'hui, le Riad ZANOUBA perpétue cette tradition millénaire de l'hospitalité marocaine. Entrer dans nos murs, c'est accepter de suspendre le cours du temps. C'est tisser votre propre histoire dans l'étoffe de notre légende.
                        </p>
                    </FadeInSection>

                    <FadeInSection delay={400}>
                        <Link
                            to="/booking"
                            className="inline-flex items-center justify-center px-10 py-4 bg-[var(--primary)] text-white font-sans text-sm tracking-widest uppercase rounded-lg border border-transparent hover:bg-transparent hover:text-[var(--primary)] hover:border-[var(--primary)] transition-all duration-400 ease-out"
                        >
                            Réserver dans cette légende
                        </Link>
                    </FadeInSection>
                </div>
            </section>
        </div>
    );
};

export default About;
