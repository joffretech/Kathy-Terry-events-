import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoginPanel = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Implement actual login logic (authentication)
        console.log('Login attempt:', { email, password });
        // Close panel after attempt (or on success)
        onClose();
    };

    const panelVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    variants={panelVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="absolute top-full right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 z-50 border border-gray-200 dark:border-gray-700"
                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside panel
                >
                    <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Client Login</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-brand-gold focus:border-brand-gold dark:bg-gray-700 dark:text-white"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-brand-gold focus:border-brand-gold dark:bg-gray-700 dark:text-white"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-brand-gold text-black font-bold py-2 px-4 rounded-md hover:bg-opacity-80 transition duration-300"
                        >
                            Login
                        </button>
                    </form>
                    <button
                        onClick={onClose}
                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                        aria-label="Close login panel"
                    >
                        &times; {/* Simple close icon */}
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LoginPanel;
