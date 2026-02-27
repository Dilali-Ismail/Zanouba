import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addDays, format } from 'date-fns';
import { fr } from 'date-fns/locale';
import FadeInSection from '../components/FadeInSection';
import { ChevronRight, Calendar, Users, Coffee, Car, ShieldCheck, CheckCircle2 } from 'lucide-react';

const steps = [
    { id: 1, title: 'Votre Séjour' },
    { id: 2, title: 'L\'Expérience' },
    { id: 3, title: 'Vos Coordonnées' },
    { id: 4, title: 'Confirmation' },
];

const roomsOptions = [
    { id: 'suite-royale', name: 'Suite Royale ZANOUBA', price: 850 },
    { id: 'suite-prestige', name: 'Suite Prestige', price: 550 },
    { id: 'suite-zen', name: 'Suite Zen Andalouse', price: 450 },
    { id: 'chambre-patio-1', name: 'Chambre Supérieure Patio', price: 250 },
    { id: 'chambre-patio-2', name: 'Chambre Classique', price: 180 },
];

const Booking = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const { register, handleSubmit, watch, formState: { errors, isValid }, trigger, getValues, setValue } = useForm({
        mode: 'onChange',
        defaultValues: {
            roomType: 'suite-royale',
            adults: '2',
            children: '0',
            options: {
                transfer: false,
                hammam: false,
                dinner: false
            }
        }
    });

    const formData = watch();

    const nextStep = async () => {
        let isStepValid = false;
        if (currentStep === 1) {
            if (!checkInDate || !checkOutDate) {
                alert("Veuillez sélectionner vos dates d'arrivée et de départ.");
                return;
            }
            isStepValid = await trigger(['roomType', 'adults', 'children']);
        } else if (currentStep === 2) {
            isStepValid = true;
        } else if (currentStep === 3) {
            isStepValid = await trigger(['firstName', 'lastName', 'email', 'phone']);
        }

        if (isStepValid) {
            setCurrentStep(prev => Math.min(prev + 1, 4));
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const prevStep = () => {
        setCurrentStep(prev => Math.max(prev - 1, 1));
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const onSubmit = (data) => {
        console.log("Demande de réservation envoyée :", { ...data, dates: { checkInDate, checkOutDate } });
        // Simuler un envoi
        setIsSubmitted(true);
        setCurrentStep(4);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const renderStepper = () => (
        <div className="w-full max-w-4xl mx-auto mb-16 hidden md:block">
            <div className="flex justify-between relative">
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[var(--accent)] opacity-30 -z-10 -translate-y-1/2"></div>
                {steps.map((step) => {
                    const isActive = currentStep === step.id;
                    const isCompleted = currentStep > step.id || isSubmitted;
                    return (
                        <div key={step.id} className={`step-item flex flex-col items-center bg-[var(--background)] px-4 ${isActive ? 'active' : isCompleted ? 'completed' : ''}`}>
                            <div className="step-number w-10 h-10 rounded-full flex items-center justify-center border-2 border-[var(--accent)] text-[var(--text-secondary)] bg-[var(--background)] font-serif mb-3">
                                {isCompleted && !isActive ? <CheckCircle2 size={20} /> : step.id}
                            </div>
                            <span className={`font-sans text-xs uppercase tracking-widest ${isActive ? 'text-[var(--primary)] font-bold' : 'text-[var(--text-secondary)]'}`}>
                                {step.title}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );

    const renderMobileStepper = () => (
        <div className="w-full flex items-center justify-between mb-8 md:hidden px-4">
            <span className="font-serif text-lg text-[var(--primary)]">Étape {currentStep} / {steps.length}</span>
            <span className="font-sans text-xs uppercase tracking-widest text-[var(--text-secondary)]">{steps[currentStep - 1].title}</span>
        </div>
    );

    return (
        <div className="w-full bg-[var(--background)] pb-32">
            {/* Hero Section */}
            <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/booking/hero-reservation.webp"
                        alt="Réserver au Riad ZANOUBA"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none"><rect width="100" height="100" fill="%23ECE6E0"/></svg>';
                        }}
                    />
                    <div className="absolute inset-0 bg-[#FAF8F4]/60 mix-blend-multiply"></div>
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mt-20">
                    <FadeInSection delay={0}>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 tracking-wide">
                            Demande de Réservation
                        </h1>
                    </FadeInSection>

                    <FadeInSection delay={300}>
                        <div className="w-16 h-px bg-[var(--accent)] mx-auto mb-6"></div>
                        <p className="text-xl md:text-2xl font-serif italic text-[var(--text-primary)] font-light drop-shadow-sm">
                            Laissez-nous composer une parenthèse d'exception dans votre vie
                        </p>
                    </FadeInSection>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-12 md:py-20 px-6 max-w-5xl mx-auto">

                {!isSubmitted && (
                    <div className="text-center mb-16">
                        <p className="font-serif italic text-lg text-[var(--text-secondary)] font-light max-w-2xl mx-auto">
                            "Au Riad ZANOUBA, chaque séjour est une histoire unique. Remplissez ce formulaire et notre conciergerie vous contactera personnellement pour parfaire votre expérience."
                        </p>
                    </div>
                )}

                {renderStepper()}
                {renderMobileStepper()}

                <div className="bg-white shadow-xl p-6 md:p-12 relative">
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-5 bg-zellige pointer-events-none"></div>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/* STEP 1: DATES & ROOM */}
                        <div className={`transition-opacity duration-500 ${currentStep === 1 ? 'block opacity-100' : 'hidden opacity-0'}`}>
                            <h2 className="text-3xl font-serif text-[var(--primary)] mb-8 border-b border-[var(--accent)]/30 pb-4">1. Dates et Choix de la Suite</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                <div className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="relative group">
                                            <label className="block font-sans text-[10px] uppercase tracking-[0.2em] text-[var(--accent)] mb-2 font-bold">Arrivée</label>
                                            <div className="relative border-b border-[var(--light-bg)] transition-colors group-focus-within:border-[var(--primary)] pb-2 flex items-center">
                                                <DatePicker
                                                    selected={checkInDate}
                                                    onChange={(date) => {
                                                        setCheckInDate(date);
                                                        if (checkOutDate && date >= checkOutDate) {
                                                            setCheckOutDate(null);
                                                        }
                                                    }}
                                                    selectsStart
                                                    startDate={checkInDate}
                                                    endDate={checkOutDate}
                                                    minDate={new Date()}
                                                    locale={fr}
                                                    dateFormat="dd MMMM yyyy"
                                                    placeholderText="Choisir une date"
                                                    className="w-full text-base font-serif bg-transparent focus:outline-none"
                                                />
                                                <Calendar className="text-[var(--accent)] opacity-40" size={18} />
                                            </div>
                                        </div>

                                        <div className="relative group">
                                            <label className="block font-sans text-[10px] uppercase tracking-[0.2em] text-[var(--accent)] mb-2 font-bold">Départ</label>
                                            <div className="relative border-b border-[var(--light-bg)] transition-colors group-focus-within:border-[var(--primary)] pb-2 flex items-center">
                                                <DatePicker
                                                    selected={checkOutDate}
                                                    onChange={(date) => setCheckOutDate(date)}
                                                    selectsEnd
                                                    startDate={checkInDate}
                                                    endDate={checkOutDate}
                                                    minDate={checkInDate ? addDays(checkInDate, 1) : new Date()}
                                                    locale={fr}
                                                    dateFormat="dd MMMM yyyy"
                                                    placeholderText="Choisir une date"
                                                    className="w-full text-base font-serif bg-transparent focus:outline-none"
                                                    disabled={!checkInDate}
                                                />
                                                <Calendar className="text-[var(--accent)] opacity-40" size={18} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="block font-sans text-[10px] uppercase tracking-[0.2em] text-[var(--accent)] mb-2 font-bold">Expérience choisie</label>
                                    <div className="relative border-b border-[var(--light-bg)] pb-2">
                                        <select
                                            {...register('roomType')}
                                            className="w-full text-base font-serif focus:outline-none bg-transparent appearance-none cursor-pointer"
                                        >
                                            {roomsOptions.map(room => (
                                                <option key={room.id} value={room.id}>{room.name}</option>
                                            ))}
                                        </select>
                                        <ChevronRight className="absolute right-0 top-1 text-[var(--accent)] rotate-90 opacity-40 pointer-events-none" size={16} />
                                    </div>
                                </div>

                                <div>
                                    <label className="block font-sans text-xs uppercase tracking-widest text-[var(--text-secondary)] mb-3">Adultes *</label>
                                    <select
                                        {...register('adults')}
                                        className="w-full border-b border-[var(--light-bg)] pb-3 px-2 text-base font-serif focus:outline-none focus:border-[var(--accent)] bg-transparent appearance-none cursor-pointer"
                                    >
                                        <option value="1">1 Adulte</option>
                                        <option value="2">2 Adultes</option>
                                        <option value="3">3 Adultes</option>
                                        <option value="4">4 Adultes</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block font-sans text-xs uppercase tracking-widest text-[var(--text-secondary)] mb-3">Enfants</label>
                                    <select
                                        {...register('children')}
                                        className="w-full border-b border-[var(--light-bg)] pb-3 px-2 text-base font-serif focus:outline-none focus:border-[var(--accent)] bg-transparent appearance-none cursor-pointer"
                                    >
                                        <option value="0">0 Enfant</option>
                                        <option value="1">1 Enfant</option>
                                        <option value="2">2 Enfants</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* STEP 2: OPTIONS */}
                        <div className={`transition-opacity duration-500 ${currentStep === 2 ? 'block opacity-100' : 'hidden opacity-0'}`}>
                            <h2 className="text-3xl font-serif text-[var(--primary)] mb-8 border-b border-[var(--accent)]/30 pb-4">2. Personnalisez votre Expérience</h2>
                            <p className="font-sans text-sm text-[var(--text-secondary)] mb-8">Agrémentez votre séjour avec nos services exclusifs. (Facultatif)</p>

                            <div className="grid grid-cols-1 gap-6 mb-8">
                                <label className="flex items-start md:items-center justify-between p-6 border border-[var(--light-bg)] hover:border-[var(--accent)] transition-colors cursor-pointer group">
                                    <div className="flex items-center gap-6">
                                        <div className="w-12 h-12 bg-[var(--background)] rounded-full flex items-center justify-center text-[var(--accent)] group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
                                            <Car size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-serif text-lg text-[var(--text-primary)]">Transfert VIP Aéroport</h4>
                                            <p className="font-sans text-xs text-[var(--text-secondary)] mt-1">Accueil personnalisé et transfert privé en véhicule de luxe.</p>
                                        </div>
                                    </div>
                                    <div className="relative flex items-center mt-4 md:mt-0">
                                        <input type="checkbox" {...register('options.transfer')} className="w-6 h-6 accent-[var(--primary)]" />
                                    </div>
                                </label>

                                <label className="flex items-start md:items-center justify-between p-6 border border-[var(--light-bg)] hover:border-[var(--accent)] transition-colors cursor-pointer group">
                                    <div className="flex items-center gap-6">
                                        <div className="w-12 h-12 bg-[var(--background)] rounded-full flex items-center justify-center text-[var(--accent)] group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
                                            <Coffee size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-serif text-lg text-[var(--text-primary)]">Dîner Romantique sur le Toit</h4>
                                            <p className="font-sans text-xs text-[var(--text-secondary)] mt-1">Dîner aux chandelles exclusif avec vue sur la Koutoubia.</p>
                                        </div>
                                    </div>
                                    <div className="relative flex items-center mt-4 md:mt-0">
                                        <input type="checkbox" {...register('options.dinner')} className="w-6 h-6 accent-[var(--primary)]" />
                                    </div>
                                </label>

                                <label className="flex items-start md:items-center justify-between p-6 border border-[var(--light-bg)] hover:border-[var(--accent)] transition-colors cursor-pointer group">
                                    <div className="flex items-center gap-6">
                                        <div className="w-12 h-12 bg-[var(--background)] rounded-full flex items-center justify-center text-[var(--accent)] group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                        </div>
                                        <div>
                                            <h4 className="font-serif text-lg text-[var(--text-primary)]">Rituel Hammam Traditionnel</h4>
                                            <p className="font-sans text-xs text-[var(--text-secondary)] mt-1">Soin purifiant au savon noir et massage relaxant aux huiles essentielles.</p>
                                        </div>
                                    </div>
                                    <div className="relative flex items-center mt-4 md:mt-0">
                                        <input type="checkbox" {...register('options.hammam')} className="w-6 h-6 accent-[var(--primary)]" />
                                    </div>
                                </label>
                            </div>
                        </div>

                        {/* STEP 3: CONTACT DETAILS */}
                        <div className={`transition-opacity duration-500 ${currentStep === 3 ? 'block opacity-100' : 'hidden opacity-0'}`}>
                            <h2 className="text-3xl font-serif text-[var(--primary)] mb-8 border-b border-[var(--accent)]/30 pb-4">3. Vos Coordonnées</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                <div>
                                    <label className="block font-sans text-xs uppercase tracking-widest text-[var(--text-secondary)] mb-3">Prénom *</label>
                                    <input
                                        type="text"
                                        {...register('firstName', { required: "Ce champ est requis" })}
                                        className="w-full border-b border-[var(--light-bg)] pb-3 px-2 text-base font-serif focus:outline-none focus:border-[var(--accent)] bg-transparent"
                                    />
                                    {errors.firstName && <span className="text-red-500 text-xs mt-1 block">{errors.firstName.message}</span>}
                                </div>

                                <div>
                                    <label className="block font-sans text-xs uppercase tracking-widest text-[var(--text-secondary)] mb-3">Nom *</label>
                                    <input
                                        type="text"
                                        {...register('lastName', { required: "Ce champ est requis" })}
                                        className="w-full border-b border-[var(--light-bg)] pb-3 px-2 text-base font-serif focus:outline-none focus:border-[var(--accent)] bg-transparent"
                                    />
                                    {errors.lastName && <span className="text-red-500 text-xs mt-1 block">{errors.lastName.message}</span>}
                                </div>

                                <div>
                                    <label className="block font-sans text-xs uppercase tracking-widest text-[var(--text-secondary)] mb-3">Email *</label>
                                    <input
                                        type="email"
                                        {...register('email', {
                                            required: "Ce champ est requis",
                                            pattern: { value: /^\S+@\S+$/i, message: "Email invalide" }
                                        })}
                                        className="w-full border-b border-[var(--light-bg)] pb-3 px-2 text-base font-serif focus:outline-none focus:border-[var(--accent)] bg-transparent"
                                    />
                                    {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email.message}</span>}
                                </div>

                                <div>
                                    <label className="block font-sans text-xs uppercase tracking-widest text-[var(--text-secondary)] mb-3">Téléphone *</label>
                                    <input
                                        type="tel"
                                        {...register('phone', { required: "Ce champ est requis" })}
                                        className="w-full border-b border-[var(--light-bg)] pb-3 px-2 text-base font-serif focus:outline-none focus:border-[var(--accent)] bg-transparent"
                                    />
                                    {errors.phone && <span className="text-red-500 text-xs mt-1 block">{errors.phone.message}</span>}
                                </div>

                                <div className="md:col-span-2">
                                    <label className="block font-sans text-xs uppercase tracking-widest text-[var(--text-secondary)] mb-3">Demandes Particulières, Attentes</label>
                                    <textarea
                                        {...register('message')}
                                        rows="4"
                                        placeholder="Anniversaire, régime alimentaire, question..."
                                        className="w-full border border-[var(--light-bg)] p-4 text-base font-serif focus:outline-none focus:border-[var(--accent)] bg-transparent resize-none"
                                    ></textarea>
                                </div>
                            </div>
                        </div>

                        {/* STEP 4: CONFIRMATION / SUBMIT */}
                        {currentStep === 4 && !isSubmitted && (
                            <div className="transition-opacity duration-500 block opacity-100 text-center">
                                <h2 className="text-3xl font-serif text-[var(--primary)] mb-8">Récapitulatif de votre demande</h2>

                                <div className="bg-[var(--background)] p-8 mb-8 text-left max-w-2xl mx-auto border border-[var(--accent)]/20 shadow-inner">
                                    <div className="grid grid-cols-2 gap-y-4 mb-6 pb-6 border-b border-[var(--accent)]/30">
                                        <div className="font-sans text-xs text-[var(--text-secondary)] uppercase tracking-widest">Client</div>
                                        <div className="font-serif text-[var(--text-primary)]">{getValues('firstName')} {getValues('lastName')}</div>

                                        <div className="font-sans text-xs text-[var(--text-secondary)] uppercase tracking-widest">Dates</div>
                                        <div className="font-serif text-[var(--text-primary)]">
                                            {checkInDate && format(checkInDate, 'dd MMM yyyy', { locale: fr })} - {checkOutDate && format(checkOutDate, 'dd MMM yyyy', { locale: fr })}
                                        </div>

                                        <div className="font-sans text-xs text-[var(--text-secondary)] uppercase tracking-widest">Suite</div>
                                        <div className="font-serif text-[var(--text-primary)] text-[var(--primary)] font-bold">
                                            {roomsOptions.find(r => r.id === getValues('roomType'))?.name}
                                        </div>

                                        <div className="font-sans text-xs text-[var(--text-secondary)] uppercase tracking-widest">Hôtes</div>
                                        <div className="font-serif text-[var(--text-primary)]">{getValues('adults')} Adultes, {getValues('children')} Enfants</div>
                                    </div>

                                    <div className="text-center font-serif text-sm italic text-[var(--text-secondary)] mt-4">
                                        * Cette demande ne constitue pas une réservation confirmée. Notre équipe vous contactera sous 24h avec une offre personnalisée.
                                    </div>
                                </div>

                                <div className="flex items-center justify-center gap-2 text-xs text-green-700 mb-8 font-sans">
                                    <ShieldCheck size={16} /> Mode de transmission sécurisé et confidentiel.
                                </div>
                            </div>
                        )}

                        {/* SUCCESS MESSAGE */}
                        {isSubmitted && (
                            <div className="text-center py-16 animate-fade-in">
                                <div className="w-20 h-20 bg-[var(--background)] rounded-full mx-auto flex items-center justify-center text-[var(--primary)] border hover:bg-[var(--primary)] hover:text-white transition-colors duration-500 mb-8 border-[var(--accent)]">
                                    <CheckCircle2 size={40} />
                                </div>
                                <h2 className="text-4xl font-serif text-[var(--primary)] mb-6">Demande Envoyée</h2>
                                <p className="font-sans text-base font-light text-[var(--text-secondary)] leading-relaxed max-w-lg mx-auto mb-10">
                                    Merci {getValues('firstName')}, nous avons bien reçu votre requête. Notre équipe vous répondra dans les plus brefs délais pour organiser cette parenthèse d'exception.
                                </p>
                                <button
                                    onClick={() => window.location.href = "/"}
                                    className="inline-flex px-8 py-3 outline outline-1 outline-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white tracking-widest uppercase text-xs font-sans transition-all duration-300"
                                >
                                    Retour à l'accueil
                                </button>
                            </div>
                        )}


                        {/* Form Navigation Buttons */}
                        {!isSubmitted && (
                            <div className="flex justify-between items-center mt-12 pt-8 border-t border-[var(--light-bg)]">
                                {currentStep > 1 ? (
                                    <button type="button" onClick={prevStep} className="font-sans text-sm tracking-widest uppercase text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors">
                                        Retour
                                    </button>
                                ) : <div></div>}

                                {currentStep < 4 ? (
                                    <button
                                        type="button"
                                        onClick={nextStep}
                                        className="inline-flex items-center justify-center px-10 py-4 bg-[var(--primary)] text-white font-sans text-sm tracking-widest uppercase rounded-sm hover:bg-white hover:text-[var(--primary)] outline outline-1 outline-transparent hover:outline-[var(--accent)] transition-all duration-300 group"
                                    >
                                        Suivant <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                                    </button>
                                ) : (
                                    <button
                                        type="submit"
                                        className="inline-flex items-center justify-center px-10 py-4 bg-[var(--primary)] text-white font-sans text-sm tracking-widest uppercase rounded-sm hover:bg-[var(--accent)] transition-all duration-300 w-full md:w-auto"
                                    >
                                        Envoyer ma demande
                                    </button>
                                )}
                            </div>
                        )}
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Booking;
