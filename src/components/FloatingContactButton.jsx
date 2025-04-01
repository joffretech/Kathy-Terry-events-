import React from 'react';

// Placeholder icon - replace with a better chat/mail icon later
const ContactIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
    </svg>
);

const FloatingContactButton = () => {
    return (
        <a
            href="#contact" // Link to the contact section (or a dedicated contact page later)
            className="fixed bottom-6 right-6 bg-brand-gold text-black p-4 rounded-full shadow-lg hover:bg-opacity-80 transition duration-300 z-50 flex items-center justify-center"
            aria-label="Contact Us"
            title="Contact Us" // Tooltip for accessibility
        >
            <ContactIcon />
        </a>
    );
};

export default FloatingContactButton;
