import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import { usePage } from '@inertiajs/react';

export default function AuthenticatedLayout({ children }) {
    const { props } = usePage()
    const { auth, categories } = props

    return (
        <div className="min-h-screen flex flex-col font-sans antialiased text-neutral-900 selection:bg-accent selection:text-white">
            <Navbar user={auth?.user} categories={categories}/>

            <main className="flex-grow pt-28 pb-12 relative z-10">
                {children}
            </main>

            <Footer />
        </div>
    );
}
