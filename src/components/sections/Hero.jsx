import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { FiCalendar, FiUsers, FiChevronDown } from 'react-icons/fi';
import GoldParticles from '../ui/GoldParticles';

const Hero = () => {
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date(new Date().setDate(new Date().getDate() + 2)));
    const [guests, setGuests] = useState(2);

    // Staggered letters animation
    const titleText = "RIAD ZANOUBA";
    const sentence = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.2,
                staggerChildren: 0.08,
            },
        },
    };
    const letter = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    const handleBookingSubmit = (e) => {
        e.preventDefault();
        // In a real app, pass state via navigate state or context
        navigate('/booking');
    };

    const scrollToContent = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };

    return (
        <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0 bg-secondary">
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 10, ease: "easeOut" }}
                    className="w-full h-full"
                >
                    <img
                        src="/images/hero/hero-patio.jpg"
                        alt="Riad Zanouba Patio"
                        className="w-full h-full object-cover opacity-60 mix-blend-overlay"
                        // Since we don't have the image yet, provide a fallback background color
                        style={{ backgroundColor: '#002244' }}
                    />
                </motion.div>
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60 z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/30 mix-blend-multiply z-10"></div>
            </div>

            {/* Main Content */}
            <div className="container relative z-20 flex flex-col items-center justify-center px-4 text-center mt-16 lg:mt-0">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-montserrat text-accent uppercase tracking-[0.3em] text-sm md:text-base mb-4 block"
                >
                    Marrakech Medina
                </motion.span>

                <motion.h1
                    variants={sentence}
                    initial="hidden"
                    animate="visible"
                    className="font-playfair text-5xl md:text-7xl lg:text-8xl text-white font-bold tracking-wider mb-8 drop-shadow-lg"
                >
                    {titleText.split("").map((char, index) => (
                        <motion.span key={char + "-" + index} variants={letter} className="inline-block">
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="font-montserrat text-gray-200 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-12 hidden md:block"
                >
                    L'élégance intemporelle rencontre l'hospitalité légendaire dans notre sanctuaire au cœur de la ville rouge.
                </motion.p>

                {/* Availability Form Overlay */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2 }}
                    className="w-full max-w-4xl bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 p-4 md:p-6 rounded-xl shadow-2xl"
                >
                    <form onSubmit={handleBookingSubmit} className="flex flex-col md:flex-row gap-4 lg:gap-6 items-center">

                        {/* Dates */}
                        <div className="flex-1 w-full bg-white dark:bg-[#1E1E1E] rounded-lg p-3 flex items-center shadow-inner">
                            <FiCalendar className="text-primary mr-3 text-xl" />
                            <div className="flex-1">
                                <label className="block text-xs uppercase tracking-wider text-gray-500 font-semibold mb-1">Arrivée - Départ</label>
                                <DatePicker
                                    selectsRange={true}
                                    startDate={startDate}
                                    endDate={endDate}
                                    onChange={(update) => {
                                        setStartDate(update[0]);
                                        setEndDate(update[1]);
                                    }}
                                    className="bg-transparent text-sm font-medium w-full focus:outline-none dark:text-white"
                                    dateFormat="dd MMM yyyy"
                                    minDate={new Date()}
                                />
                            </div>
                        </div>

                        {/* Guests */}
                        <div className="w-full md:w-48 bg-white dark:bg-[#1E1E1E] rounded-lg p-3 flex items-center shadow-inner">
                            <FiUsers className="text-primary mr-3 text-xl" />
                            <div className="flex-1">
                                <label className="block text-xs uppercase tracking-wider text-gray-500 font-semibold mb-1">Personnes</label>
                                <select
                                    value={guests}
                                    onChange={(e) => setGuests(Number(e.target.value))}
                                    className="bg-transparent text-sm font-medium w-full focus:outline-none dark:text-white appearance-none cursor-pointer"
                                >
                                    <option value={1} className="dark:bg-[#1E1E1E]">1 Adulte</option>
                                    <option value={2} className="dark:bg-[#1E1E1E]">2 Adultes</option>
                                    <option value={3} className="dark:bg-[#1E1E1E]">3 Adultes</option>
                                    <option value={4} className="dark:bg-[#1E1E1E]">4 Adultes</option>
                                </select>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="w-full md:w-auto h-full">
                            <GoldParticles className="w-full h-full">
                                <button type="submit" className="w-full h-full py-4 md:py-0 px-8 bg-primary hover:bg-[#B85C19] text-white font-montserrat uppercase tracking-wider text-sm font-semibold rounded-lg transition-colors shadow-lg shadow-primary/30 min-h-[64px]">
                                    Vérifier
                                </button>
                            </GoldParticles>
                        </div>
                    </form>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 cursor-pointer flex flex-col items-center text-white/70 hover:text-white transition-colors"
                onClick={scrollToContent}
            >
                <span className="font-montserrat text-xs tracking-widest uppercase mb-2">Découvrir</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                    <FiChevronDown size={24} />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Hero;
