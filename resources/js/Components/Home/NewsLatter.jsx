import React from "react";
import PrimaryButton from "../PrimaryButton";
import TextInput from "../TextInput";
import { motion } from "framer-motion";

const NewsLatter = () => {
    return (
        <>
            <motion.section
                className="body-font rounded-lg  mx-auto container"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <div className="container px-5 py-24 mx-auto flex flex-wrap flex-col items-center">
                    <img
                        className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 mb-10 object-cover object-center rounded shadow-lg"
                        alt="hero"
                        src="https://dummyimage.com/720x600"
                    />
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="text-3xl font-medium title-font mb-4 text-gray-900">
                            Get Subscribed to our Newsletter
                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-700">
                            Stay updated with the latest news, offers, and
                            exclusive content. Subscribe now and never miss out
                            on our exciting updates and promotions!
                        </p>
                    </div>
                    <form className="w-full max-w-md">
                        <div className="flex items-center border-b-2 border-primary py-2">
                            <TextInput
                                type="email"
                                placeholder="Enter your email"
                                aria-label="Email"
                                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                            />
                            <PrimaryButton className="flex-shrink-0 bg-primary hover:bg-primary-dark border-primary hover:border-primary-dark text-sm border-4 text-white py-1 px-2 rounded">
                                Subscribe
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </motion.section>
        </>
    );
};

export default NewsLatter;
