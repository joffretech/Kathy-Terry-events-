import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' // Restore App import
import './index.css' // Import Tailwind CSS styles
import { ThemeProvider } from './contexts/ThemeContext.jsx'; // Restore ThemeProvider import

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider> {/* Restore ThemeProvider wrapper */}
            <App /> {/* Restore App component */}
        </ThemeProvider>
    </React.StrictMode>,
)
