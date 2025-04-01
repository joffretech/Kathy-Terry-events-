import React from 'react';
import { motion } from 'framer-motion'; // Import motion
import Gallery from '../components/Gallery'; // Import the Gallery component
import BookingForm from '../components/BookingForm'; // Import the BookingForm component

const HomePage = () => {
    return (
        <div>
            {/* Hero Section */}
            {/* TODO: Replace bg-gray-200/800 with actual background image/video */}
            <section
                id="home"
                className="h-screen flex items-center justify-center relative overflow-hidden transition-colors duration-300"
                // Use a local wedding image from the public/slideshow directory
                style={{ backgroundImage: 'url(/slideshow/barn-wedding-reception-with-table-decor-2024-09-22-23-29-21-utc.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                {/* Optional: Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black opacity-50"></div>

                <motion.div
                    className="z-10 text-center text-white px-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                        Where Dreams Become <br className="hidden md:block" /> Unforgettable Moments.
                    </h1>
                    <p className="text-lg md:text-xl mb-8" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
                        Premier event planning for luxury weddings, corporate galas, and exclusive celebrations.
                    </p>
                    <a
                        href="#booking"
                        className="bg-brand-gold text-black dark:text-black font-bold py-3 px-8 rounded-md hover:bg-opacity-80 transition duration-300 text-lg"
                    >
                        Plan Your Event
                    </a>
                </motion.div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-16 bg-white dark:bg-black transition-colors duration-300">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">Our Premier Services</h2>

                    {/* Grid for Service Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Service Card 1: Weddings */}
                        <a href="#weddings-details" className="block group"> {/* Added anchor tag */}
                            <motion.div
                                className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300 h-full" // Added group-hover and h-full
                                whileHover={{ scale: 1.05 }}
                            >
                                {/* Icon Placeholder */}
                                <div className="text-4xl mb-4 text-brand-gold">💍</div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Luxury Weddings</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">Crafting breathtaking ceremonies and receptions tailored to your unique love story.</p>
                            </motion.div>
                        </a>

                        {/* Service Card 2: Corporate Events */}
                        <a href="#corporate-details" className="block group"> {/* Added anchor tag */}
                            <motion.div
                                className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300 h-full" // Added group-hover and h-full
                                whileHover={{ scale: 1.05 }}
                            >
                                {/* Icon Placeholder */}
                                <div className="text-4xl mb-4 text-brand-gold">💼</div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Corporate Events</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">Executing flawless galas, conferences, and brand launches with sophistication.</p>
                            </motion.div>
                        </a>

                        {/* Service Card 3: Social Gatherings */}
                        <a href="#social-details" className="block group"> {/* Added anchor tag */}
                            <motion.div
                                className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300 h-full" // Added group-hover and h-full
                                whileHover={{ scale: 1.05 }}
                            >
                                {/* Icon Placeholder */}
                                <div className="text-4xl mb-4 text-brand-gold">🎉</div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Social Gatherings</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">Designing memorable birthday parties, anniversaries, and chic celebrations.</p>
                            </motion.div>
                        </a>

                        {/* Service Card 4: Private Celebrations */}
                        <a href="#private-details" className="block group"> {/* Added anchor tag */}
                            <motion.div
                                className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300 h-full" // Added group-hover and h-full
                                whileHover={{ scale: 1.05 }}
                            >
                                {/* Icon Placeholder */}
                                <div className="text-4xl mb-4 text-brand-gold">🥂</div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Private Celebrations</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">Curating exclusive dinners, engagement parties, and intimate luxury events.</p>
                            </motion.div>
                        </a>
                    </div>
                </div>
            </section>

            {/* Gallery Preview Section */}
            <section id="gallery-preview" className="py-16 transition-colors duration-300">
                {/* Container removed here as Gallery component likely has its own */}
                <Gallery />
            </section>

            {/* Booking Section */}
            <section id="booking" className="py-16 bg-white dark:bg-black transition-colors duration-300">
                {/* Container removed here as BookingForm component likely has its own */}
                <BookingForm />
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-16 bg-gray-200 dark:bg-gray-800 transition-colors duration-300">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">Get In Touch</h2>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-12">
                        {/* Contact Details */}
                        <div className="text-left">
                            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Contact Information</h3>
                            <p className="mb-2 text-gray-700 dark:text-gray-300">
                                <strong className="text-brand-gold">Email:</strong> <a href="mailto:info@kathyterryevents.com" className="hover:underline">info@kathyterryevents.com</a>
                            </p>
                            <p className="mb-2 text-gray-700 dark:text-gray-300">
                                <strong className="text-brand-gold">Phone:</strong> <a href="tel:+1234567890" className="hover:underline">+1 (234) 567-890</a>
                            </p>
                            <p className="text-gray-700 dark:text-gray-300">
                                {/* Add Address if applicable */}
                                123 Luxury Lane, Suite 456<br />
                                Beverly Hills, CA 90210
                            </p>
                            {/* Add social links icons here if desired */}
                        </div>

                        {/* QR Code Placeholder */}
                        <div className="text-center">
                            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Scan for Details</h3>
                            {/* Replace with actual QR code image generated based on user preference (vCard, link, etc.) */}
                            <div className="w-40 h-40 bg-white dark:bg-gray-300 p-2 rounded-lg shadow-md inline-block">
                                <img src="https://qrcode.tec-it.com/API/QRCode?data=BEGIN%3AVCARD%0AVERSION%3A3.0%0AN%3ATerry%3BKathy%3B%3B%3B%0AFN%3AKathy%20Terry%0AORG%3AKathy%20Terry%20Events%0AEMAIL%3Ainfo%40kathyterryevents.com%0ATEL%3A%2B1234567890%0AADR%3A123%20Luxury%20Lane%2C%20Suite%20456%3BBeverly%20Hills%3BCA%3B90210%3BUSA%0AEND%3AVCARD&backcolor=%23ffffff" alt="QR Code for Contact Details" className="w-full h-full object-contain" />
                            </div>
                            <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">Scan to add contact or visit link.</p>
                        </div>
                    </div>

                    {/* Optional: Add a simple contact form component here later */}

                </div>
            </section>

            {/* Add other sections as needed */}
        </div>
    );
};

export default HomePage;
