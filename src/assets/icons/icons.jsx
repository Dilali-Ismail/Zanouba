import React from 'react';

// Mockup Custom SVG Icon - User can replace paths
export const LanterneIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
        <path d="M12 2L9 8h6l-3-6z" />
        <path d="M7 8h10v10H7z" />
        <path d="M12 18l-3 4h6l-3-4z" />
        <circle cx="12" cy="13" r="2" />
    </svg>
);

export const HammamIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
        <path d="M4 14v4a2 2 0 002 2h12a2 2 0 002-2v-4" />
        <path d="M8 10a4 4 0 018 0" />
        <path d="M10 6v2" />
        <path d="M14 6v2" />
        <path d="M12 4v2" />
    </svg>
);

export const TagineIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
        <path d="M2 18h20v4H2z" />
        <path d="M12 4l-8 14h16L12 4z" />
        <circle cx="12" cy="7" r="1" />
    </svg>
);
