import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function AuthenticatedLayout({ header, children}) {
    const { props } = usePage()
    const { auth, categories } = props
    console.log(auth)
    return (
        <>

            {/* navbar */} <Navbar user={auth?.user} categories={categories}/> {/* ./navbar */}

            {/* content */} <main>{children}</main> {/* ./content */}

            {/* footer */} <Footer /> {/* ./footer */}

        </>
    );
}
