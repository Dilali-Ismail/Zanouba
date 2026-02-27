import { useEffect, useState } from 'react';

// Custom CSS for the cursor is injected via this component
const cursorStyles = `
  .custom-cursor {
    position: fixed;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    border: 2px solid var(--primary);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transform: translate(-50%, -50%);
    transition: width 0.2s, height 0.2s, background-color 0.2s;
    mix-blend-mode: difference;
  }
  .custom-cursor.hovering {
    width: 40px;
    height: 40px;
    background-color: rgba(210, 105, 30, 0.2); /* Terracotta transparent */
  }
  .custom-cursor-dot {
    position: fixed;
    top: 0;
    left: 0;
    width: 6px;
    height: 6px;
    background-color: var(--accent);
    border-radius: 50%;
    pointer-events: none;
    z-index: 10000;
    transform: translate(-50%, -50%);
  }
`;

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        // Only run on non-touch devices
        if (window.matchMedia('(pointer: coarse)').matches) return;

        const addStyles = () => {
            const style = document.createElement('style');
            style.innerHTML = cursorStyles;
            document.head.appendChild(style);
            return () => document.head.removeChild(style);
        };

        const removeStyles = addStyles();

        const onMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            // Check if hovering over clickable elements
            if (
                e.target.tagName.toLowerCase() === 'a' ||
                e.target.tagName.toLowerCase() === 'button' ||
                e.target.closest('a') ||
                e.target.closest('button') ||
                e.target.classList.contains('interactive')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseover', handleMouseOver);

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseover', handleMouseOver);
            removeStyles();
        };
    }, []);

    // Don't render if it's a touch device
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
        return null;
    }

    return (
        <>
            <div
                className={`custom-cursor ${isHovering ? 'hovering' : ''}`}
                style={{ left: `${position.x}px`, top: `${position.y}px` }}
            />
            <div
                className="custom-cursor-dot"
                style={{ left: `${position.x}px`, top: `${position.y}px` }}
            />
        </>
    );
};

export default CustomCursor;
