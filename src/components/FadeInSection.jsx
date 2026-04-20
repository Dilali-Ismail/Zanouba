import React, { useEffect, useRef, useState } from 'react';

const FadeInSection = ({ children, delay = 0, className = "", aboveTheFold = false }) => {
    const [isVisible, setVisible] = useState(() => Boolean(aboveTheFold && delay === 0));
    const domRef = useRef(null);

    useEffect(() => {
        if (aboveTheFold) {
            if (delay === 0) {
                setVisible(true);
                return;
            }
            const t = setTimeout(() => setVisible(true), delay);
            return () => clearTimeout(t);
        }

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setVisible(true);
                    }, delay);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        });

        const currentRef = domRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [delay, aboveTheFold]);

    return (
        <div
            ref={domRef}
            className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                } ${className}`}
        >
            {children}
        </div>
    );
};

export default FadeInSection;
