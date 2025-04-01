import React, { useState, useEffect, useRef } from 'react';
// import { useTheme } from '../contexts/ThemeContext'; // Removed useTheme import
import ThemeToggle from './ThemeToggle'; // Keep toggle accessible
import LoginPanel from './LoginPanel'; // Import the LoginPanel component
import { motion } from 'framer-motion'; // Import motion

const Header = () => {
    // const { toggleTheme } = useTheme(); // Removed toggleTheme retrieval
    const [isLoginPanelOpen, setIsLoginPanelOpen] = useState(false);
    const loginPanelRef = useRef(null); // Ref for the login panel area

    // Close panel if clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (loginPanelRef.current && !loginPanelRef.current.contains(event.target)) {
                setIsLoginPanelOpen(false);
            }
        };

        if (isLoginPanelOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isLoginPanelOpen]);

    const toggleLoginPanel = (e) => {
        e.preventDefault(); // Prevent default link behavior
        setIsLoginPanelOpen(!isLoginPanelOpen);
    };

    return (
        <header className="relative p-4 bg-white dark:bg-black shadow-md sticky top-0 z-50 transition-colors duration-300 overflow-hidden"> {/* Added relative and overflow-hidden */}
            {/* Animated Golden Circle Background */}
            <motion.div
                className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-brand-gold rounded-full -translate-x-1/2 -translate-y-1/2 opacity-10 dark:opacity-5 pointer-events-none" // Large circle, centered, low opacity
                style={{ filter: 'blur(100px)' }} // Soft blur effect
                animate={{
                    scale: [1, 1.1, 1], // Pulse effect
                    opacity: [0.1, 0.15, 0.1], // Slight opacity pulse
                }}
                transition={{
                    duration: 5, // Slow animation duration
                    repeat: Infinity, // Repeat forever
                    ease: "easeInOut", // Smooth easing
                }}
            />

            {/* Header Content - ensure it's above the circle */}
            <div className="relative container mx-auto flex justify-between items-center z-10"> {/* Added relative and z-10 */}
                {/* Logo Placeholder */}
                <div className="text-2xl font-bold text-brand-gold">
                    Kathy Terry Events
                </div>

                {/* Navigation Placeholder */}
                <nav className="hidden md:flex space-x-6 text-gray-900 dark:text-white"> {/* Adjusted text color for visibility */}
                    <a href="#home" className="hover:text-brand-gold transition-colors">Home</a>
                    <a href="#services" className="hover:text-brand-gold transition-colors">Services</a>
                    <a href="#gallery-preview" className="hover:text-brand-gold transition-colors">Gallery</a> {/* Corrected href */}
                    <a href="#booking" className="hover:text-brand-gold transition-colors">Book Now</a>
                    <a href="#contact" className="hover:text-brand-gold transition-colors">Contact</a>
                </nav>

                {/* Right side elements */}
                <div className="flex items-center space-x-4" ref={loginPanelRef}> {/* Attach ref here */}
                    {/* Client Portal Button */}
                    <button
                        onClick={toggleLoginPanel}
                        className="text-sm hover:text-brand-gold transition-colors text-gray-900 dark:text-white"
                    >
                        Client Portal
                    </button>
                    {/* Render Login Panel */}
                    <LoginPanel isOpen={isLoginPanelOpen} onClose={() => setIsLoginPanelOpen(false)} />
                    <ThemeToggle /> {/* Removed onToggle prop */}
                    {/* Mobile Menu Button Placeholder */}
                    <button className="md:hidden p-2 text-gray-900 dark:text-white"> {/* Adjusted text color */}
                        {/* Icon for mobile menu */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
