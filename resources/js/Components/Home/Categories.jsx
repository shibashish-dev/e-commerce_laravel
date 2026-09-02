import { Link } from '@inertiajs/react';
import React from 'react';
import { motion } from 'framer-motion';

const Categories = ({ categories }) => {
    return (
        <section className="py-16 md:py-24 relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-end justify-between mb-10 md:mb-16">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-3">
                            Shop by Category
                        </h2>
                        <p className="text-neutral-500 text-lg max-w-2xl">
                            Explore our curated collections for every aspect of your life.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {categories?.map((category, index) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Link
                                href={route('slug.show', category.slug)}
                                className="group relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden block shadow-sm hover:shadow-xl transition-shadow duration-500"
                            >
                                {/* Background Image */}
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

                                {/* Content */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{category.name}</h3>
                                        <div className="inline-flex items-center text-white/90 font-medium text-sm group/btn">
                                            Explore Collection
                                            <i className="fa-solid fa-arrow-right ml-2 text-[10px] transform group-hover/btn:translate-x-1 transition-transform"></i>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
