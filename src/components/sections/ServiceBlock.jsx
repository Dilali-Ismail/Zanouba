import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ScrollReveal from '../ui/ScrollReveal';

const ServiceBlock = ({ service, reverse = false }) => {
    return (
        <div className={`flex flex-col md:flex-row items-center w-full min-h-[500px] overflow-hidden ${reverse ? 'md:flex-row-reverse' : ''}`}>

            {/* Image Side */}
            <div className="w-full md:w-1/2 h-[300px] md:h-[500px] lg:h-[600px] relative overflow-hidden group">
                <motion.div
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="w-full h-full"
                >
                    <img
                        src={service.imagePath}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        style={{ backgroundColor: '#F0F0F0' }} // Fallback
                    />
                </motion.div>
            </div>

            {/* Content Side */}
            <div className="w-full md:w-1/2 p-8 md:p-16 lg:p-24 bg-white dark:bg-[#121212] flex flex-col justify-center">
                <ScrollReveal direction={reverse ? 'right' : 'left'}>
                    <div className="mb-6 text-primary flex items-center shadow-lg w-16 h-16 rounded-full border border-gray-100 dark:border-gray-800 justify-center">
                        {/* Mocking SVG icon - replace with valid SVG component in real usage */}
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                    </div>

                    <h3 className="font-playfair text-3xl md:text-4xl text-secondary dark:text-white font-bold mb-4">
                        {service.title}
                    </h3>

                    <div className="w-12 h-1 bg-accent mb-6"></div>

                    <p className="font-montserrat text-text-secondary text-base lg:text-lg leading-relaxed mb-8">
                        {service.description}
                    </p>

                    {service.features && (
                        <ul className="mb-8 space-y-3 font-montserrat text-sm text-gray-600 dark:text-gray-400">
                            {service.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center">
                                    <span className="w-2 h-2 rounded-full bg-accent mr-3"></span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    )}

                    <Link href={service.link || "/booking"} className="btn btn-secondary inline-block max-w-max text-sm relative overflow-hidden group">
                        <span className="relative z-10 font-bold tracking-wider">{service.ctaText || "Ajouter au séjour"}</span>
                    </Link>
                </ScrollReveal>
            </div>

        </div>
    );
};

export default ServiceBlock;
