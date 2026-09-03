import React from 'react';
import { motion } from "framer-motion";
import { Link } from '@inertiajs/react';
import PrimaryButton from './PrimaryButton';

const Banner = () => {
    return (
        <div className="relative min-h-[600px] flex items-center bg-neutral-100 overflow-hidden mx-4 md:mx-6 lg:mx-8 rounded-3xl my-6">
            {/* Background elements */}
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-neutral-100 via-neutral-100/90 to-transparent"></div>

            <motion.div
                className="absolute inset-0 z-0 bg-cover bg-right lg:bg-center"
                style={{ backgroundImage: 'url("assets/images/banner-bg.jpg")' }}
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            />

            <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent md:w-3/4 z-10"></div>

            <div className="container mx-auto px-6 relative z-20">
                <div className="max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-6 uppercase tracking-wider">
                            New Collection 2024
                        </span>
                    </motion.div>

                    <motion.h1
                        className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 leading-tight tracking-tight text-balance"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Elevate your <br className="hidden md:block"/> everyday style.
                    </motion.h1>

                    <motion.p
                        className="text-lg text-neutral-600 mb-10 max-w-lg leading-relaxed text-balance"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        Discover our curated collection of premium essentials designed for modern living. Uncompromising quality meets timeless design.
                    </motion.p>

                    <motion.div
                        className="flex flex-wrap items-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <Link href={route('shop.index')}>
                            <PrimaryButton className="px-8 py-4 text-base shadow-lg shadow-primary/20">
                                Shop Collection <i className="fa-solid fa-arrow-right ml-2 text-sm"></i>
                            </PrimaryButton>
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Decorative glass elements */}
            <div className="absolute top-1/4 right-[10%] w-32 h-32 glass-panel rounded-full blur-sm opacity-60 mix-blend-overlay z-10 hidden lg:block"></div>
            <div className="absolute bottom-1/4 right-[20%] w-48 h-48 glass-panel rounded-full blur-md opacity-40 mix-blend-overlay z-10 hidden lg:block"></div>
        </div>
    );
};

export default Banner;
