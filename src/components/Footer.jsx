import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 p-8 mt-16 transition-colors duration-300">
            <div className="container mx-auto text-center">
                {/* Social Media Links Placeholder */}
                <div className="mb-4">
                    <a href="#" className="mx-2 hover:text-brand-gold">Facebook</a>
                    <a href="#" className="mx-2 hover:text-brand-gold">Instagram</a>
                    <a href="#" className="mx-2 hover:text-brand-gold">LinkedIn</a>
                    {/* Add other relevant social links */}
                </div>

                {/* Copyright */}
                <p className="text-sm">
                    &copy; {currentYear} Kathy Terry Events. All Rights Reserved.
                </p>
                {/* Optional: Add links to Privacy Policy, Terms of Service */}
            </div>
        </footer>
    );
};

export default Footer;
