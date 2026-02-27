import React from 'react';
import { Link } from 'react-router-dom';
import FadeInSection from '../components/FadeInSection';
import { Sparkles, UtensilsCrossed, Compass, Key } from 'lucide-react';

const servicesData = [
    {
        id: 'bien-etre',
        title: 'Bien-être & Spa',
        subtitle: 'Un sanctuaire de sérénité absolue',
        description: 'Plongez dans l\'obscurité bienveillante de notre hammam traditionnel. Laissez la chaleur envelopper votre corps pendant que les effluves d\'eucalyptus et de savon noir purifient votre esprit. Nos rituels de massages exclusifs à l\'huile d\'argan prolongent cette évasion hors du temps.',
        image: '/images/services/spa-content.jpeg',
        icon: <Sparkles size={32} className="text-[var(--accent)] mb-4" />,
        features: ['Hammam Traditionnel', 'Massages Orientaux', 'Rituels à l\'Argan', 'Bassin intérieur chauffé'],
        reverse: false
    },
    {
        id: 'gastronomie',
        title: 'Gastronomie',
        subtitle: 'Les saveurs authentiques du Maroc',
        description: 'Notre table célèbre la richesse du terroir local. Du petit-déjeuner royal servi sur le patio baigné de la lumière matinale aux dîners aux chandelles dégustant des tagines mijotés lentement avec des épices ancestrales, chaque repas est une fête pour les sens.',
        image: '/images/services/dining-content.jpg',
        icon: <UtensilsCrossed size={32} className="text-[var(--accent)] mb-4" />,
        features: ['Petit-déjeuner Royal', 'Dîners aux chandelles', 'Cours de cuisine marocaine', 'Pâtisseries fines et thé à la menthe'],
        reverse: true
    },
    {
        id: 'experiences',
        title: 'Expériences Authentiques',
        subtitle: 'Découvrez l\'âme secrète de Marrakech',
        description: 'Au-delà de nos murs, l\'effervescence de la médina vous appelle. Nous organisons pour vous des parenthèses immersives : balades guidées hors des sentiers battus, rencontres avec les maîtres artisans locaux, ou bien salutations au soleil lors d\'une session de yoga sur notre toit-terrasse.',
        image: '/images/services/culture-content.png',
        icon: <Compass size={32} className="text-[var(--accent)] mb-4" />,
        features: ['Yoga sur le Rooftop', 'Excursions Médina sur-mesure', 'Visites d\'ateliers d\'artisans', 'Escapades dans l\'Atlas'],
        reverse: false
    },
    {
        id: 'exclusivites',
        title: 'Moments Privés',
        subtitle: 'L\'art de sublimer chaque instant',
        description: 'Parce que votre séjour doit être mémorable, notre conciergerie dévouée orchestre les attentions les plus délicates. Célébrations intimes, dîners romantiques privatisés avec vue sur la Koutoubia ou transferts discrets en berline luxueuse, tout est conçu pour votre tranquillité.',
        image: '/images/services/spa-hero.jpg',
        icon: <Key size={32} className="text-[var(--accent)] mb-4" />,
        features: ['Transferts VIP', 'Dîners privés panoramiques', 'Organisations d\'anniversaires', 'Conciergerie personnalisée 24/7'],
        reverse: true
    }
];

const ServiceSection = ({ service }) => {
    return (
        <section className={`py-20 md:py-32 px-4 md:px-8 bg-[var(${service.reverse ? '--light-bg' : '--background'})] border-b border-[var(--accent)]/10`}>
            <div className="max-w-[1400px] mx-auto">
                <div className={`flex flex-col ${service.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-stretch gap-12 lg:gap-24`}>

                    {/* Text Column */}
                    <div className="flex-1 flex flex-col justify-center">
                        <FadeInSection delay={0}>
                            {service.icon}
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[var(--primary)] mb-4">
                                {service.title}
                            </h2>
                            <h3 className="text-xl md:text-2xl font-serif italic text-[var(--text-secondary)] font-light mb-8">
                                {service.subtitle}
                            </h3>

                            <p className="font-sans text-base leading-relaxed text-[var(--text-primary)] font-light mb-10 max-w-xl">
                                {service.description}
                            </p>

                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3 font-sans text-sm tracking-wide text-[var(--text-secondary)]">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Link
                                to="/booking"
                                className="inline-flex w-full sm:w-auto items-center justify-center px-8 py-4 bg-[var(--primary)] text-white font-sans text-sm tracking-widest uppercase rounded-sm border border-transparent hover:bg-white hover:text-[var(--primary)] hover:border-[var(--accent)] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                            >
                                Ajouter à mon séjour
                            </Link>
                        </FadeInSection>
                    </div>

                    {/* Image Column */}
                    <div className="flex-1 w-full lg:w-1/2">
                        <FadeInSection delay={200} className="h-full">
                            <div className="relative h-[60vh] md:h-[70vh] lg:h-[85vh] w-full overflow-hidden group rounded-sm shadow-xl">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110"
                                    onError={(e) => {
                                        e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none"><rect width="100" height="100" fill="%23ECE6E0"/><text x="50" y="50" font-family="serif" font-size="2" text-anchor="middle" dominant-baseline="middle" fill="%23C9A96E">Image Expérience</text></svg>';
                                    }}
                                />
                                {/* Elegant subtle frame overlay over image */}
                                <div className="absolute inset-4 border border-white/30 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            </div>
                        </FadeInSection>
                    </div>

                </div>
            </div>
        </section>
    );
};

const Services = () => {
    return (
        <div className="w-full bg-[var(--background)]">
            {/* Hero Section */}
            <section className="relative h-[70vh] md:h-[80vh] w-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/services/spa-hero.jpg"
                        alt="Services Riad ZANOUBA"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none"><rect width="100" height="100" fill="%23ECE6E0"/></svg>';
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-[#FAF8F4]/80 mix-blend-multiply"></div>
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mt-24">
                    <FadeInSection delay={0}>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 drop-shadow-md tracking-wide">
                            Nos Services <span className="font-light italic">&</span> Expériences
                        </h1>
                    </FadeInSection>

                    <FadeInSection delay={300}>
                        <div className="w-20 h-px bg-[var(--accent)] mx-auto mb-6"></div>
                        <p className="text-xl md:text-2xl font-serif italic text-white/90 drop-shadow-md font-light leading-relaxed">
                            Plongez dans l'art de vivre marocain – bien-être, saveurs, découvertes exclusives.
                        </p>
                    </FadeInSection>
                </div>
            </section>

            {/* Introduction Narrative */}
            <section className="py-24 bg-[var(--background)] text-center px-4">
                <FadeInSection>
                    <div className="max-w-3xl mx-auto">
                        <Sparkles size={24} className="mx-auto text-[var(--accent)] mb-8 opacity-50" />
                        <p className="font-serif italic text-xl md:text-2xl text-[var(--text-secondary)] font-light leading-relaxed mb-6">
                            "Au Riad ZANOUBA, chaque service est une invitation à l'émerveillement. Nous ne vous proposons pas simplement un hébergement, mais un recueil de moments précieux cousus main pour éveiller vos sens et suspendre le temps."
                        </p>
                    </div>
                </FadeInSection>
            </section>

            {/* Main Services Categories Loop */}
            {servicesData.map((service) => (
                <ServiceSection key={service.id} service={service} />
            ))}

            {/* Final CTA Strip */}
            <section className="py-32 bg-[var(--primary)] text-center px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] bg-zellige pointer-events-none"></div>
                <FadeInSection>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white mb-8">
                        Composez votre Séjour Idéal
                    </h2>
                    <p className="text-white/80 font-sans font-light max-w-2xl mx-auto mb-12 text-lg">
                        Lors de votre demande de réservation, vous pourrez nous indiquer les expériences qui feront chavirer votre cœur.
                    </p>
                    <Link
                        to="/booking"
                        className="inline-flex items-center justify-center px-10 py-5 bg-transparent text-white font-sans text-sm tracking-[0.2em] uppercase rounded-sm border border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition-all duration-500"
                    >
                        Réserver votre évasion
                    </Link>
                </FadeInSection>
            </section>
        </div>
    );
};

export default Services;
