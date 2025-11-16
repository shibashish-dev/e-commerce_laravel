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
            <div className="container py-16">
                <div className="w-10/12 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto justify-center">
                    {features.map((feature) => {
                        return (
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                custom={feature.id} // Pass index to control stagger
                                viewport={{ once: false, amount: 0.2 }}
                                variants={featureVariants}
                                key={feature.id}
                                className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5"
                            >
                                <img
                                    src={feature.image}
                                    alt={feature.name}
                                    className="w-12 h-12 object-contain"
                                />
                                <div>
                                    <h4 className="font-medium capitalize text-lg">
                                        {feature.name}
                                    </h4>
                                    <p className="text-gray-500 text-sm">
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
