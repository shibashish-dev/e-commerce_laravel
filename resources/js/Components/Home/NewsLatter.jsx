import React from "react";
import PrimaryButton from "../PrimaryButton";
import TextInput from "../TextInput";
import { motion } from "framer-motion";

const NewsLatter = () => {
    return (
        <section className="py-20 md:py-32 px-4 md:px-6">
            <motion.div
                className="container mx-auto max-w-5xl glass-panel relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl translate-x-1/3 -translate-y-1/3"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl -translate-x-1/3 translate-y-1/3"></div>

                <div className="relative z-10 px-6 py-16 md:py-20 md:px-16 flex flex-col md:flex-row items-center gap-12">

                    <div className="md:w-1/2 flex flex-col text-center md:text-left">
                        <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-2 block">
                            Join Our Community
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold title-font mb-4 text-primary tracking-tight">
                            Subscribe to our Newsletter
                        </h2>
                        <p className="leading-relaxed text-neutral-500 mb-8 max-w-md mx-auto md:mx-0">
                            Stay updated with the latest news, exclusive offers, and early access to new collections. No spam, just good style.
                        </p>
                    </div>

                    <div className="md:w-1/2 w-full max-w-md mx-auto relative">
                        <form className="relative bg-white p-2 rounded-2xl shadow-sm border border-neutral-100 flex items-center">
                            <i className="fa-regular fa-envelope text-neutral-400 ml-4 absolute z-10"></i>
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                aria-label="Email"
                                className="w-full pl-12 pr-4 py-3 bg-transparent border-none text-neutral-700 focus:ring-0 outline-none placeholder-neutral-400 z-0 relative"
                            />
                            <PrimaryButton className="shrink-0 rounded-xl px-6 py-3 ml-2 z-10 relative">
                                Subscribe
                            </PrimaryButton>
                        </form>
                        <p className="text-xs text-neutral-400 mt-4 text-center md:text-left ml-2">
                            By subscribing, you agree to our Privacy Policy and Terms of Service.
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default NewsLatter;
