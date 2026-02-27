import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Reusable component that wraps elements to emit golden particles on hover
const GoldParticles = ({ children, className = '' }) => {
    const [isHovering, setIsHovering] = useState(false);
    const particleCount = 8;

    // Generate random particles
    const particles = Array.from({ length: particleCount }).map((_, i) => ({
        id: i,
        x: (Math.random() - 0.5) * 100, // random x between -50px and 50px
        y: (Math.random() - 1) * 60, // random y moving upwards
        size: Math.random() * 4 + 2, // size between 2px and 6px
        duration: Math.random() * 0.8 + 0.6, // duration between 0.6s and 1.4s
    }));

    return (
        <div
            className={`relative inline-block ${className}`}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            {children}

            <AnimatePresence>
                {isHovering && (
                    <div className="absolute inset-0 pointer-events-none z-10 overflow-visible" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
                        {particles.map((p) => (
                            <motion.div
                                key={p.id}
                                initial={{
                                    opacity: 1,
                                    scale: 0,
                                    x: '50%',
                                    y: '50%'
                                }}
                                animate={{
                                    opacity: 0,
                                    scale: 1,
                                    x: `calc(50% + ${p.x}px)`,
                                    y: `calc(50% + ${p.y}px)`
                                }}
                                exit={{ opacity: 0 }}
                                transition={{
                                    duration: p.duration,
                                    ease: "easeOut",
                                    repeat: Infinity,
                                    repeatType: "loop"
                                }}
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    width: p.size,
                                    height: p.size,
                                    backgroundColor: 'var(--accent)',
                                    borderRadius: '50%',
                                    boxShadow: '0 0 4px var(--accent)'
                                }}
                            />
                        ))}
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default GoldParticles;
