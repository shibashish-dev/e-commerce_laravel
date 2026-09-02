import React from "react";
import { motion } from "framer-motion";

const Features = ({ features }) => {
    return (
        <section className="py-12 md:py-16 bg-neutral-100/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features?.map((feature, index) => (
                        <motion.div
                            key={feature.id || index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-panel p-6 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300 group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
                                <img
                                    src={feature.image}
                                    alt={feature.name}
                                    className="w-8 h-8 object-contain opacity-80"
                                />
                            </div>
                            <h4 className="font-semibold text-primary text-lg mb-2 capitalize">
                                {feature.name}
                            </h4>
                            <p className="text-neutral-500 text-sm leading-relaxed max-w-[250px]">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
