import React from 'react'
import ApplicationLogo from '@/Components/ApplicationLogo';

const Footer = () => {
    return (
        <>
            <footer className="border-t border-gray-100 bg-white pt-14 pb-10">
                <div className="container grid gap-12 md:grid-cols-2">
                    <div className="max-w-md space-y-5">
                        <a href="/" aria-label="Avero home" className="inline-flex items-center">
                            <ApplicationLogo />
                        </a>
                        <p className="text-sm leading-7 text-gray-500">
                            Thoughtful finds for a home that feels like yours. Discover pieces made for everyday living.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" aria-label="Facebook" className="text-gray-400 transition hover:text-white"><i className="fa-brands fa-facebook-square" /></a>
                            <a href="#" aria-label="Instagram" className="text-gray-400 transition hover:text-white"><i className="fa-brands fa-instagram-square" /></a>
                            <a href="#" aria-label="Twitter" className="text-gray-400 transition hover:text-white"><i className="fa-brands fa-twitter-square" /></a>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:max-w-sm sm:justify-self-end">
                        <div>
                            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">Explore</h3>
                            <div className="mt-5 space-y-3">
                                <a href="/shop" className="block text-sm text-gray-500 transition hover:text-white">Shop</a>
                                <a href="/about" className="block text-sm text-gray-500 transition hover:text-white">About us</a>
                                <a href="/articles" className="block text-sm text-gray-500 transition hover:text-white">Journal</a>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">Help</h3>
                            <div className="mt-5 space-y-3">
                                <a href="/contact" className="block text-sm text-gray-500 transition hover:text-white">Contact</a>
                                <a href="/profile" className="block text-sm text-gray-500 transition hover:text-white">My account</a>
                                <a href="/cart" className="block text-sm text-gray-500 transition hover:text-white">Your cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="border-t border-white/10 bg-gray-800 py-5">
                <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
                    <p className="text-xs text-gray-400">© {import.meta.env.VITE_APP_NAME} · All rights reserved</p>
                    <img src="assets/images/methods.png" alt="Accepted payment methods" className="h-5 opacity-80" />
                </div>
            </div>
        </>
    )
}

export default Footer
