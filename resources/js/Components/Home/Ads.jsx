import React from "react";
import { motion } from "framer-motion";
import PrimaryButton from "../PrimaryButton";
import { Link } from "@inertiajs/react";

const Ads = ({ ads }) => {
    if (!ads) return null;

    return (
        <section className="py-12 md:py-20 px-4 md:px-6">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="relative overflow-hidden rounded-3xl bg-neutral-900 flex flex-col md:flex-row items-stretch shadow-2xl"
                >
                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full mix-blend-screen filter blur-[100px] translate-x-1/3 -translate-y-1/3"></div>

                    {/* Text Section */}
                    <div className="p-10 md:p-16 lg:p-24 md:w-1/2 flex flex-col justify-center relative z-10 order-2 md:order-1">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-accent-hover font-semibold text-sm uppercase tracking-wider mb-4 block"
                        >
                            Special Offer
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="mb-6 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white tracking-tight"
                        >
                            {ads.title}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="mb-10 text-neutral-300 text-lg leading-relaxed max-w-md text-balance"
                        >
                            {ads.description}
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                        >
                             <Link href={ads.url || '#'}>
                                <button className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-sm font-semibold text-neutral-900 transition-all duration-300 hover:bg-neutral-100 hover:shadow-lg hover:shadow-white/20 hover:-translate-y-0.5 active:scale-95">
                                    {ads.btn_text || 'Shop Now'} <i className="fa-solid fa-arrow-right ml-2 text-[10px]"></i>
                                </button>
                             </Link>
                        </motion.div>
                    </div>

                    {/* Image Section */}
                    <div className="md:w-1/2 h-64 md:h-auto relative order-1 md:order-2 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/50 to-transparent z-10 hidden md:block"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent z-10 md:hidden block"></div>
                        <img
                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
                            src={ads.image}
                            alt="Promotion"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Ads;
