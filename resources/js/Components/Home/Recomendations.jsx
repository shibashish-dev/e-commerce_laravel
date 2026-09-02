import React from "react";
import Product from "../Shop/Product";
import { motion } from "framer-motion";

const Recomendations = ({ recomended }) => {
    return (
        <section className="py-16 md:py-24 bg-neutral-50/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12 md:mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-4"
                    >
                        Recommended For You
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-neutral-500 max-w-2xl mx-auto"
                    >
                        Handpicked selections based on the latest trends and your personal style.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {recomended?.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                             <Product product={product} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Recomendations;
