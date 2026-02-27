import React from 'react';
import { motion } from 'framer-motion';

// ScrollReveal component wrapper using Framer Motion
const ScrollReveal = ({
    children,
    direction = 'up', // 'up', 'down', 'left', 'right', or 'none' for just fade
    delay = 0,
    duration = 0.6,
    className = '',
    amount = 0.2 // amount of element visible before triggering
}) => {
    const directionOffset = 50;

    const variants = {
        hidden: {
            opacity: 0,
            y: direction === 'up' ? directionOffset : direction === 'down' ? -directionOffset : 0,
            x: direction === 'left' ? directionOffset : direction === 'right' ? -directionOffset : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration,
                delay,
                ease: [0.25, 0.1, 0.25, 1], // Custom easing for premium feel
            }
        }
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount }}
            variants={variants}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
