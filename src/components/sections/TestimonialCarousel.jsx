import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import { testimonialsData } from '../../data/testimonials';

const TestimonialsCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-advance
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
        }, 5000); // 5 seconds interval
        return () => clearInterval(timer);
    }, []);

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    const variants = {
        enter: { opacity: 0, x: 50 },
        center: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -50 }
    };

    return (
        <div className="relative w-full max-w-4xl mx-auto py-12 px-4 shadow-xl bg-white dark:bg-[#1A1A1A] rounded-2xl border border-gray-100 dark:border-gray-800">
            <div className="text-center mb-8">
                <h2 className="font-playfair text-3xl text-secondary dark:text-white mb-2">Livre d'Or</h2>
                <div className="w-16 h-1 bg-accent mx-auto"></div>
            </div>

            <div className="h-64 sm:h-48 relative overflow-hidden">
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={currentIndex}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="absolute inset-0 flex flex-col items-center text-center px-4 md:px-12"
                    >
                        {/* Stars */}
                        <div className="flex text-accent space-x-1 mb-6">
                            {[...Array(testimonialsData[currentIndex].rating)].map((_, i) => (
                                <FaStar key={i} size={18} />
                            ))}
                        </div>

                        {/* Quote */}
                        <blockquote className="font-playfair text-lg md:text-xl text-gray-700 dark:text-gray-300 italic mb-8 relative">
                            <span className="text-4xl text-gray-200 dark:text-gray-700 absolute -top-4 -left-6 font-serif opacity-50">"</span>
                            {testimonialsData[currentIndex].text}
                            <span className="text-4xl text-gray-200 dark:text-gray-700 absolute -bottom-6 -right-4 font-serif opacity-50">"</span>
                        </blockquote>

                        {/* Author */}
                        <div className="mt-auto">
                            <p className="font-montserrat font-semibold text-primary uppercase tracking-widest text-sm">
                                {testimonialsData[currentIndex].name}
                            </p>
                            <p className="font-montserrat text-xs text-gray-400 mt-1">
                                {testimonialsData[currentIndex].date}
                            </p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center space-x-3 mt-10">
                {testimonialsData.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentIndex === index
                                ? 'bg-primary w-8'
                                : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
                            }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default TestimonialsCarousel;
