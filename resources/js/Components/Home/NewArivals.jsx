import React from 'react';
import Product from '../Shop/Product';
import { motion } from 'framer-motion';

const NewArivals = ({ products }) => {
    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-4">
                    <div>
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-accent font-semibold text-sm uppercase tracking-wider mb-2 block"
                        >
                            Fresh Drops
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-4xl font-bold tracking-tight text-primary"
                        >
                            New Arrivals
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                         <a href="#" className="inline-flex items-center text-sm font-medium text-neutral-600 hover:text-primary transition-colors group">
                            View All Products
                            <i className="fa-solid fa-arrow-right ml-2 text-[10px] transform group-hover:translate-x-1 transition-transform"></i>
                         </a>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {products?.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
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

export default NewArivals;
