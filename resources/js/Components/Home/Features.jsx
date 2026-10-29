import React from "react";
import { motion } from "framer-motion";

const Features = ({ features }) => {
    const featureVariants = {
        hidden: { opacity: 0, x: 50 }, // Start from right
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                delay: i * 0.10, // Stagger effect
            },
        }),
    };
    return (
        <>
            {/* features */}
            <div className="container section-space overflow-x-clip">
                <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-4 px-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
                    {features.map((feature) => {
                        return (
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                custom={feature.id} // Pass index to control stagger
                                viewport={{ once: false, amount: 0.2 }}
                                variants={featureVariants}
                                key={feature.id}
                                className="glass-surface gold-glint min-w-0 rounded-2xl px-5 py-6 text-slate-100 transition duration-500 hover:-translate-y-1 hover:border-amber-100/30 sm:px-6 sm:py-7"
                            >
                                <img
                                    src={feature.image}
                                    alt={feature.name}
                                    className="h-12 w-12 shrink-0 object-contain"
                                />
                                <div className="min-w-0">
                                    <h4 className="font-medium capitalize text-lg">
                                        {feature.name}
                                    </h4>
                                    <p className="text-slate-400 text-sm">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
            {/* ./features */}
        </>
    );
};

export default Features;
