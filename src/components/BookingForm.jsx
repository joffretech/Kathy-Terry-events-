import React, { useState } from 'react';

const BookingForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        eventType: '',
        preferredDate: '',
        package: '', // Add consultation packages later
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Implement form submission logic (e.g., send data to backend, API)
        console.log('Form Data Submitted:', formData);
        alert('Consultation request submitted! We will be in touch soon.');
        // Reset form (optional)
        // setFormData({ name: '', email: '', eventType: '', preferredDate: '', package: '', message: '' });
    };

    return (
        <div className="container mx-auto px-4 py-8 max-w-2xl">
            <h3 className="text-2xl font-semibold text-center mb-6 text-gray-900 dark:text-white">Request a Consultation</h3>
            <form onSubmit={handleSubmit} className="space-y-6 bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-md">
                {/* Name Input */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-brand-gold focus:border-brand-gold dark:bg-gray-700 dark:text-white"
                    />
                </div>

                {/* Email Input */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-brand-gold focus:border-brand-gold dark:bg-gray-700 dark:text-white"
                    />
                </div>

                {/* Event Type Select */}
                <div>
                    <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Type of Event</label>
                    <select
                        name="eventType"
                        id="eventType"
                        required
                        value={formData.eventType}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-brand-gold focus:border-brand-gold dark:bg-gray-700 dark:text-white"
                    >
                        <option value="">Select an event type...</option>
                        <option value="wedding">Wedding</option>
                        <option value="corporate">Corporate Event</option>
                        <option value="social">Social Gathering (Birthday, Anniversary, etc.)</option>
                        <option value="private">Private Celebration</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                {/* Preferred Date Input (Placeholder - use a date picker component later) */}
                <div>
                    <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Preferred Date (Approximate)</label>
                    <input
                        type="date" // Basic date input, replace with a better picker
                        name="preferredDate"
                        id="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-brand-gold focus:border-brand-gold dark:bg-gray-700 dark:text-white"
                    />
                </div>

                {/* Consultation Package (Placeholder) */}
                <div>
                    <label htmlFor="package" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Consultation Package (Optional)</label>
                    <select
                        name="package"
                        id="package"
                        value={formData.package}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-brand-gold focus:border-brand-gold dark:bg-gray-700 dark:text-white"
                    >
                        <option value="">Select a package (optional)...</option>
                        {/* Add actual package options here later */}
                        <option value="basic">Basic Consultation</option>
                        <option value="premium">Premium Planning Package</option>
                    </select>
                </div>

                {/* Message Textarea */}
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Additional Details (Optional)</label>
                    <textarea
                        name="message"
                        id="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-brand-gold focus:border-brand-gold dark:bg-gray-700 dark:text-white"
                    ></textarea>
                </div>

                {/* Submit Button */}
                <div>
                    <button
                        type="submit"
                        className="w-full bg-brand-gold text-black font-bold py-3 px-6 rounded-md hover:bg-opacity-80 transition duration-300"
                    >
                        Request Consultation
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BookingForm;
