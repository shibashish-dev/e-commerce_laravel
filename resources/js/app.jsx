import '../css/app.css';
import './bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "react-country-state-city/dist/react-country-state-city.css";

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import AuthenticatedLayout from './Layouts/AuthenticatedLayout';
import { store } from './Providers/store';
import { Provider } from 'react-redux';
import { CartProvider } from 'react-use-cart';
import { WishlistProvider } from "react-use-wishlist";
const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: async (name) => {

        const page = await resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx')
        );
        // Ensure layout is assigned to the page (using GlobalLayout as default)
        page.default.layout = page.default.layout || (page => <AuthenticatedLayout>{page}</AuthenticatedLayout>);

        return page;

    },

    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<Provider store={store}>  <WishlistProvider> <CartProvider> <App {...props} /> </CartProvider> </WishlistProvider> </Provider>);
    },
    progress: {
        color: '#4B5563',
        height: '4px',
    },
});

