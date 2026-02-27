import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import FadeInSection from '../components/FadeInSection';
import { Phone, Mail, MapPin, Instagram, Facebook, Share2 } from 'lucide-react';

const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        console.log("Formulaire de contact soumis:", data);
        setIsSubmitted(true);
        reset();

        // Optionnel : faire disparaître le message de succès après 5 secondes
        setTimeout(() => setIsSubmitted(false), 8000);
    };

    return (
        <div className="w-full bg-[var(--background)]">
            {/* Hero Section */}
            <section className="relative h-[65vh] md:h-[75vh] w-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/contact/hero-contact.webp"
                        alt="Contactez le Riad ZANOUBA"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none"><rect width="100" height="100" fill="%23ECE6E0"/></svg>';
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#FAF8F4]/90 mix-blend-multiply opacity-80"></div>
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mt-24">
                    <FadeInSection delay={0}>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 tracking-wide drop-shadow-md">
                            Contactez-nous
                        </h1>
                    </FadeInSection>

                    <FadeInSection delay={300}>
                        <div className="w-16 h-px bg-[var(--accent)] mx-auto mb-6"></div>
                        <p className="text-xl md:text-2xl font-serif italic text-white drop-shadow-md font-light">
                            Notre équipe est à votre écoute pour composer votre séjour sur mesure.
                        </p>
                    </FadeInSection>
                </div>
            </section>

            {/* Introduction Narrative */}
            <section className="py-20 md:py-24 bg-[var(--background)] text-center px-6">
                <FadeInSection>
                    <div className="max-w-3xl mx-auto">
                        <p className="font-serif italic text-xl md:text-2xl text-[var(--text-secondary)] font-light leading-relaxed">
                            "Au Riad ZANOUBA, chaque échange est une invitation personnelle. Que vous prépariez votre arrivée, souhaitiez privatiser nos espaces ou simplement obtenir une information, nous nous faisons une joie de vous répondre avec le plus grand soin."
                        </p>
                    </div>
                </FadeInSection>
            </section>

            {/* Main Content Grid: Contacts & Form */}
            <section className="py-12 md:py-20 px-6 max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                    {/* Left Column: Contact Directory */}
                    <div className="flex-1 lg:w-5/12">
                        <FadeInSection delay={100}>
                            <h2 className="text-3xl md:text-4xl font-serif text-[var(--primary)] mb-12 pb-4 border-b border-[var(--accent)]/30">
                                Annuaire des Services
                            </h2>

                            <div className="space-y-12">
                                {/* Service Block */}
                                <div className="group">
                                    <h3 className="font-sans text-sm tracking-widest uppercase text-[var(--accent)] mb-4">
                                        Réservation Séjour
                                    </h3>
                                    <div className="space-y-2 font-serif text-[var(--text-primary)]">
                                        <div className="flex items-center gap-3">
                                            <Phone size={16} className="text-[var(--text-secondary)]" />
                                            <a href="tel:+212524456789" className="hover:text-[var(--primary)] transition-colors">+212 5 24 45 67 89</a>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Mail size={16} className="text-[var(--text-secondary)]" />
                                            <a href="mailto:reservations@riadzanouba.com" className="hover:text-[var(--primary)] transition-colors underline decoration-[var(--accent)]/30 underline-offset-4 hover:decoration-[var(--primary)]">reservations@riadzanouba.com</a>
                                        </div>
                                    </div>
                                </div>

                                {/* Service Block */}
                                <div className="group">
                                    <h3 className="font-sans text-sm tracking-widest uppercase text-[var(--accent)] mb-4">
                                        Conciergerie & Transferts
                                    </h3>
                                    <div className="space-y-2 font-serif text-[var(--text-primary)]">
                                        <div className="flex items-center gap-3">
                                            <Phone size={16} className="text-[var(--text-secondary)]" />
                                            <a href="tel:+212524456790" className="hover:text-[var(--primary)] transition-colors">+212 5 24 45 67 90</a>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Mail size={16} className="text-[var(--text-secondary)]" />
                                            <a href="mailto:concierge@riadzanouba.com" className="hover:text-[var(--primary)] transition-colors underline decoration-[var(--accent)]/30 underline-offset-4 hover:decoration-[var(--primary)]">concierge@riadzanouba.com</a>
                                        </div>
                                    </div>
                                </div>

                                {/* Service Block */}
                                <div className="group">
                                    <h3 className="font-sans text-sm tracking-widest uppercase text-[var(--accent)] mb-4">
                                        Spa & Bien-être
                                    </h3>
                                    <div className="space-y-2 font-serif text-[var(--text-primary)]">
                                        <div className="flex items-center gap-3">
                                            <Phone size={16} className="text-[var(--text-secondary)]" />
                                            <a href="tel:+212524456791" className="hover:text-[var(--primary)] transition-colors">+212 5 24 45 67 91</a>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Mail size={16} className="text-[var(--text-secondary)]" />
                                            <a href="mailto:spa@riadzanouba.com" className="hover:text-[var(--primary)] transition-colors underline decoration-[var(--accent)]/30 underline-offset-4 hover:decoration-[var(--primary)]">spa@riadzanouba.com</a>
                                        </div>
                                    </div>
                                </div>

                                {/* Service Block */}
                                <div className="group">
                                    <h3 className="font-sans text-sm tracking-widest uppercase text-[var(--accent)] mb-4">
                                        Événements & Presse
                                    </h3>
                                    <div className="space-y-2 font-serif text-[var(--text-primary)]">
                                        <div className="flex items-center gap-3">
                                            <Mail size={16} className="text-[var(--text-secondary)]" />
                                            <a href="mailto:evenements@riadzanouba.com" className="hover:text-[var(--primary)] transition-colors underline decoration-[var(--accent)]/30 underline-offset-4 hover:decoration-[var(--primary)]">evenements@riadzanouba.com</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeInSection>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="flex-1 lg:w-7/12">
                        <FadeInSection delay={300}>
                            <div className="bg-white p-8 md:p-12 shadow-sm border border-[var(--accent)]/20 relative">
                                <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.03] bg-zellige pointer-events-none"></div>

                                <h2 className="text-3xl font-serif text-[var(--primary)] mb-8">
                                    Écrivez-nous
                                </h2>

                                {isSubmitted ? (
                                    <div className="text-center py-12 animate-fade-in">
                                        <p className="font-serif text-xl italic text-[var(--text-secondary)] mb-6">
                                            Votre message a été transmis à nos équipes avec succès. Nous reviendrons vers vous dans les plus brefs délais.
                                        </p>
                                        <div className="w-16 h-px bg-[var(--accent)] mx-auto"></div>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 relative z-10">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div>
                                                <label className="block font-sans text-xs uppercase tracking-widest text-[var(--text-secondary)] mb-3">Nom complet *</label>
                                                <input
                                                    type="text"
                                                    {...register('fullName', { required: "Ce champ est requis" })}
                                                    className="w-full border-b border-[var(--light-bg)] pb-3 px-2 text-base font-serif focus:outline-none focus:border-[var(--accent)] bg-transparent transition-colors"
                                                />
                                                {errors.fullName && <span className="text-red-500 text-xs mt-1 block">{errors.fullName.message}</span>}
                                            </div>

                                            <div>
                                                <label className="block font-sans text-xs uppercase tracking-widest text-[var(--text-secondary)] mb-3">Téléphone</label>
                                                <input
                                                    type="tel"
                                                    {...register('phone')}
                                                    className="w-full border-b border-[var(--light-bg)] pb-3 px-2 text-base font-serif focus:outline-none focus:border-[var(--accent)] bg-transparent transition-colors"
                                                />
                                            </div>

                                            <div className="md:col-span-2">
                                                <label className="block font-sans text-xs uppercase tracking-widest text-[var(--text-secondary)] mb-3">Email *</label>
                                                <input
                                                    type="email"
                                                    {...register('email', {
                                                        required: "Ce champ est requis",
                                                        pattern: { value: /^\S+@\S+$/i, message: "Email invalide" }
                                                    })}
                                                    className="w-full border-b border-[var(--light-bg)] pb-3 px-2 text-base font-serif focus:outline-none focus:border-[var(--accent)] bg-transparent transition-colors"
                                                />
                                                {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email.message}</span>}
                                            </div>

                                            <div className="md:col-span-2">
                                                <label className="block font-sans text-xs uppercase tracking-widest text-[var(--text-secondary)] mb-3">Sujet *</label>
                                                <select
                                                    {...register('subject', { required: "Ce champ est requis" })}
                                                    className="w-full border-b border-[var(--light-bg)] pb-3 px-2 text-base font-serif focus:outline-none focus:border-[var(--accent)] bg-transparent appearance-none cursor-pointer text-[var(--text-primary)]"
                                                >
                                                    <option value="Information">Demande d'information</option>
                                                    <option value="Reservation">Réservation & Disponibilité</option>
                                                    <option value="Concierge">Conciergerie</option>
                                                    <option value="Event">Organiser un événement</option>
                                                    <option value="Other">Autre sujet</option>
                                                </select>
                                            </div>

                                            <div className="md:col-span-2">
                                                <label className="block font-sans text-xs uppercase tracking-widest text-[var(--text-secondary)] mb-3">Votre Message *</label>
                                                <textarea
                                                    {...register('message', { required: "Ce champ est requis" })}
                                                    rows="5"
                                                    className="w-full border border-[var(--light-bg)] p-4 text-base font-serif focus:outline-none focus:border-[var(--accent)] bg-transparent resize-none transition-colors"
                                                ></textarea>
                                                {errors.message && <span className="text-red-500 text-xs mt-1 block">{errors.message.message}</span>}
                                            </div>
                                        </div>

                                        <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-6">
                                            <p className="font-sans text-[10px] uppercase tracking-wider text-[var(--text-secondary)] max-w-sm">
                                                En soumettant ce formulaire, j'accepte la politique de confidentialité.
                                            </p>
                                            <button
                                                type="submit"
                                                className="inline-flex w-full md:w-auto items-center justify-center px-10 py-4 bg-[var(--primary)] text-white font-sans text-sm tracking-widest uppercase rounded-sm border border-transparent hover:bg-white hover:text-[var(--primary)] hover:border-[var(--accent)] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                                            >
                                                Envoyer
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </FadeInSection>
                    </div>

                </div>
            </section>

            {/* Access & Location (Map) */}
            <section className="py-20 bg-[var(--light-bg)]">
                <div className="max-w-7xl mx-auto px-6">
                    <FadeInSection>
                        <div className="flex flex-col lg:flex-row gap-16 items-center">

                            <div className="flex-1 lg:w-1/3">
                                <h2 className="text-3xl md:text-4xl font-serif text-[var(--primary)] mb-8">
                                    Accès & Localisation
                                </h2>
                                <p className="font-sans text-sm leading-relaxed text-[var(--text-primary)] mb-8 font-light">
                                    Dissimulé au cœur de l'effervescence de la médina, notre oasis demeure étonnamment accessible. Nos chauffeurs privés vous attendent à l'aéroport Marrakech-Ménara pour un transfert fluide et élégant jusqu'aux portes du Riad.
                                </p>

                                <div className="space-y-4 font-serif text-[var(--text-secondary)] mb-8">
                                    <div className="flex items-start gap-4">
                                        <MapPin className="text-[var(--accent)] mt-1 flex-shrink-0" size={20} />
                                        <span className="leading-snug">
                                            Riad ZANOUBA<br />
                                            Quartier Dar El Bacha, Médina<br />
                                            40000 Marrakech, Maroc
                                        </span>
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-[var(--accent)]/20">
                                    <h4 className="font-sans text-xs uppercase tracking-widest text-[var(--text-primary)] mb-4">Distances</h4>
                                    <ul className="space-y-2 font-serif text-sm text-[var(--text-secondary)] italic">
                                        <li>• Aéroport Marrakech-Ménara : 15 min</li>
                                        <li>• Place Jemaa el-Fna : 10 min à pied</li>
                                        <li>• Jardin Majorelle : 10 min en voiture</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex-1 lg:w-2/3 w-full h-[400px] md:h-[500px] shadow-lg rounded-sm overflow-hidden border border-white">
                                {/* Google Maps iframe placeholder - For production, replace src with real map embed URL */}
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13587.218557993427!2d-8.006206004928373!3d31.63158066555198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee8d961f0343%3A0x633dcb29d2f2d9f3!2sMedina%2C%20Marrakesh%2040000!5e0!3m2!1sen!2sma!4v1700000000000!5m2!1sen!2sma"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, filter: 'grayscale(0.3) contrast(1.1) opacity(0.9)' }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Localisation Riad ZANOUBA"
                                ></iframe>
                            </div>

                        </div>
                    </FadeInSection>
                </div>
            </section>

            {/* Privacy Section (CNDP / RGPD style) */}
            <section className="py-24 bg-[var(--background)] px-6 text-center">
                <FadeInSection>
                    <div className="max-w-3xl mx-auto">
                        <Share2 size={24} className="mx-auto text-[var(--accent)] mb-6 opacity-50" />
                        <h3 className="font-serif text-2xl text-[var(--primary)] mb-6">Respect de votre vie privée</h3>
                        <p className="font-sans text-xs leading-relaxed text-[var(--text-secondary)] font-light text-justify md:text-center">
                            Conformément à la loi 09-08 relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel, les informations recueillies sur ce site font l'objet d'un traitement exclusif par le Riad ZANOUBA pour la gestion de vos demandes et réservations. Vous bénéficiez d'un droit d'accès, de rectification et d'opposition que vous pouvez exercer en vous adressant à <a href="mailto:privacy@riadzanouba.com" className="text-[var(--primary)] hover:underline decoration-[var(--accent)] underline-offset-2">privacy@riadzanouba.com</a>. Vos données demeurent strictement confidentielles et ne sont jamais partagées à des tiers.
                        </p>
                    </div>
                </FadeInSection>
            </section>

        </div>
    );
};

export default Contact;
