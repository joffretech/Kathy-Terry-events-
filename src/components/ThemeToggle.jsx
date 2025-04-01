import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

// Basic icons for toggle - can be replaced with better SVGs later
const SunIcon = () => <span>☀️</span>;
const MoonIcon = () => <span>🌙</span>;

// Use the hook internally
const ThemeToggle = () => {
    // Get both theme and toggleTheme from the hook
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme} // Use toggleTheme directly from the hook
            className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
        </button>
    );
};

export default ThemeToggle;
