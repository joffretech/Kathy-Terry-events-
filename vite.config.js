import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// import path from 'path'; // Import path module - Removed

// https://vitejs.dev/config/
export default defineConfig({
    // root: '.', // Explicitly set the project root - Removed
    plugins: [react()],
    server: {
        host: true, // Equivalent to --host CLI flag, ensures it listens on all interfaces
        allowedHosts: [
            '.ngrok-free.app' // Allow any ngrok-free.app subdomain
        ],
    },
})
