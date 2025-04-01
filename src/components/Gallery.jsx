import React from 'react';

// List of image filenames now located in public/slideshow/
const imageFilenames = [
    'a-grand-restaurant-and-a-ballroom-in-a-luxury-hote-2025-01-10-20-31-56-utc.jpg',
    'arch-decorated-with-blue-green-grey-and-silver-2025-01-09-05-42-19-utc.jpg',
    'barn-wedding-reception-with-table-decor-2024-09-22-23-29-21-utc.jpg',
    'beautiful-wedding-set-decoration-in-the-restaurant-2025-02-11-01-35-40-utc.jpg',
    'birthday-decorations-balloons-garland-and-decor-2025-01-10-03-54-22-utc.jpg',
    'conference-hall-convention-center-with-podium-pr-2025-01-28-02-48-22-utc.jpg',
    'elegant-outdoor-wedding-table-setting-with-delicat-2025-03-13-04-45-32-utc.jpg',
    'having-party-2025-03-15-16-35-30-utc.jpg',
    'photo-of-festive-table-in-summer-outdoor-cozy-vib-2025-03-14-21-06-00-utc.jpg',
    'romantic-dinner-pink-decor-table-at-restaurant-wit-2024-12-05-14-56-11-utc.jpg',
    'rows-of-empty-chairs-in-the-large-conference-hall-2025-02-09-20-05-30-utc.jpg',
    'table-setting-at-a-luxury-wedding-reception-outdo-2024-09-13-06-29-29-utc.jpg',
    'vertical-shot-of-a-table-setting-at-the-wedding-ve-2025-02-03-11-48-51-utc.jpeg',
    'wedding-decoration-decor-floral-flowers-tents-styl-2025-02-21-05-19-20-utc.jpg',
    'wedding-decoration-decor-floral-flowers-tents-styl-2025-02-24-13-11-31-utc.jpg',
    'wedding-decoration-decor-floral-flowers-tents-styl-2025-02-24-19-34-41-utc.jpg',
    'wedding-decoration-decor-floral-flowers-tents-styl-2025-03-11-14-09-43-utc.jpg',
    'welcome-buffet-with-alcohol-and-snacks-2025-01-07-23-24-21-utc.jpg'
];

const Gallery = () => {
    // Create gallery items using the filenames
    const galleryItems = imageFilenames.map((filename, index) => {
        // Extract a basic alt text from the filename (optional: improve this logic)
        const altText = filename.split('.')[0].replace(/-/g, ' ').replace(/-\d{4}-\d{2}-\d{2}-\d{2}-\d{2}-\d{2}-utc$/, ''); // Basic cleanup

        return {
            id: index + 1, // Simple ID based on index
            src: `/slideshow/${filename}`, // Path relative to the public root
            alt: altText || `Event Image ${index + 1}`, // Use cleaned filename or a fallback
            category: 'Event Highlights' // Assign a default category or implement logic later
        };
    });

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Add category filters later */}
            <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Event Showcase</h3>
                <p className="text-gray-600 dark:text-gray-400">Explore moments from our curated events.</p>
            </div>

            {/* Placeholder for Slideshow/Grid */}
            {/* Replace this grid with an actual interactive slideshow component */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {galleryItems.map((item) => (
                    <div key={item.id} className="relative overflow-hidden rounded-lg shadow-md group cursor-pointer">
                        <img
                            src={item.src}
                            alt={item.alt}
                            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        {/* Overlay for details on hover/click (implement later) */}
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                            <p className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.category}</p>
                        </div>
                    </div>
                ))}
            </div>
            {/* Add click-to-expand functionality later */}
        </div>
    );
};

export default Gallery;
