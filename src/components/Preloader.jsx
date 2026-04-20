import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onComplete }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [shouldRender, setShouldRender] = useState(true);
    const onCompleteRef = useRef(onComplete);
    onCompleteRef.current = onComplete;

    useEffect(() => {
        // Court délai pour une frame de logo, puis ouverture — les longs timeouts
        // artificiels pénalisent fortement le LCP (rideau plein écran au-dessus du hero).
        const startOpen = setTimeout(() => setIsLoaded(true), 180);

        return () => clearTimeout(startOpen);
    }, []);

    useEffect(() => {
        if (!isLoaded) return;
        const delayMs = 150 + 900 + 80; // delay rideau + durée transition + marge
        const done = setTimeout(() => {
            onCompleteRef.current?.();
            setShouldRender(false);
        }, delayMs);
        return () => clearTimeout(done);
    }, [isLoaded]);

    if (!shouldRender) return null;

    return (
        <div className="fixed inset-0 z-[9999] overflow-hidden pointer-events-none">
            {/* Left Curtain */}
            <motion.div
                initial={{ x: 0 }}
                animate={isLoaded ? { x: '-100%' } : { x: 0 }}
                transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
                className="absolute inset-y-0 left-0 w-1/2 bg-[#FAF8F4] z-10 pointer-events-auto"
            />

            {/* Right Curtain */}
            <motion.div
                initial={{ x: 0 }}
                animate={isLoaded ? { x: '100%' } : { x: 0 }}
                transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
                className="absolute inset-y-0 right-0 w-1/2 bg-[#FAF8F4] z-10 pointer-events-auto"
            />

            {/* Central Content (Logo + Spinner) */}
            <AnimatePresence>
                {!isLoaded && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1, transition: { duration: 0.8 } }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
                    >
                        <div className="relative flex items-center justify-center">
                            {/* Royal Red Spinner */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                className="absolute w-40 h-40 border-2 border-[#781924] border-t-transparent border-b-transparent rounded-full opacity-60"
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                                className="absolute w-32 h-32 border-2 border-[#781924] border-r-transparent border-l-transparent rounded-full opacity-40"
                            />

                            {/* Centered Logo */}
                            <div className="relative z-30 flex flex-col items-center">
                                <motion.img
                                    src="/images/logo.webp"
                                    alt="Riad ZANOUBA"
                                    className="h-24 md:h-32 w-auto"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5, duration: 1 }}
                                />
                                <motion.p
                                    className="text-[#C9A96E] font-sans mt-4 tracking-[0.4em] uppercase text-[10px] md:text-xs"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8, duration: 0.8 }}
                                >
                                    Marrakech Palais
                                </motion.p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Preloader;
