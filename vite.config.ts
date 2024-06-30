import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Import React plugin

export default defineConfig({
    plugins: [react()], // Use the React plugin
    server: {
        host: '0.0.0.0', // Listen on all network interfaces
        port: 3000, // Optional, specify a custom port
    },
});
