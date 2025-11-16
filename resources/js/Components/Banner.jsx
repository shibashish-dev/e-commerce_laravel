import React from 'react';
import { motion } from "framer-motion";

const Banner = () => {
    return (
        <>
            {/* banner */}
            <motion.div
                className="bg-cover bg-no-repeat bg-center py-36"
                style={{ backgroundImage: 'url("assets/images/banner-bg.jpg")' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: false, amount: 0.2 }} // Ensures animation triggers on scroll
            >
                <div className="container">
                    <motion.h1
                        className="text-6xl text-gray-800 font-medium mb-4 capitalize"
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        best collection for <br /> home decoration
                    </motion.h1>
                    <motion.p
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam <br />
                        accusantium perspiciatis, sapiente magni eos dolorum ex quos dolores odio
                    </motion.p>
                    <motion.div
                        className="mt-12"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <a href="#" className="bg-primary border border-primary text-white px-8 py-3 font-medium
              rounded-md hover:bg-transparent hover:text-primary">Shop Now</a>
                    </motion.div>
                </div>
            </motion.div>
            {/* ./banner */}
        </>
    );
};

export default Banner;
