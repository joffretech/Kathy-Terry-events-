import React from 'react';
import Header from './components/Header'; // Import the Header component
import Footer from './components/Footer'; // Import the Footer component
import HomePage from './pages/HomePage'; // Import the HomePage component
import FloatingContactButton from './components/FloatingContactButton'; // Import the floating button

function App() {
    // Basic structure - will add routing, theme provider, etc. later
    return (
        // Use flex column layout to push footer down
        <div className="min-h-screen flex flex-col bg-brand-white dark:bg-brand-black text-black dark:text-white transition-colors duration-300">
            <Header />
            {/* Make main content area grow to fill available space */}
            <main className="flex-grow">
                <HomePage /> {/* Render the HomePage component */}
            </main>
            <Footer /> {/* Add Footer component */}
            <FloatingContactButton /> {/* Add floating contact button */}
        </div>
    );
}

export default App;
