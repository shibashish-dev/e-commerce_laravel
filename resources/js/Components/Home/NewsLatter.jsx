import React from "react";
import PrimaryButton from "../PrimaryButton";
import TextInput from "../TextInput";

const NewsLatter = () => {
    return (
        <>
            <section
                className="glass-surface gold-glint body-font mx-auto my-8 w-[min(100%-2rem,80rem)] rounded-3xl sm:my-12"
            >
                <div className="mx-auto flex max-w-6xl flex-col flex-wrap items-center px-5 py-12 sm:px-8 sm:py-16 lg:py-20">
                    <img
                        className="mb-10 w-2/3 rounded-2xl border border-white/10 object-cover object-center shadow-2xl shadow-black/30 md:w-1/2 lg:w-1/3 xl:w-1/4"
                        alt="hero"
                        src="https://dummyimage.com/720x600"
                    />
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="title-font mb-4 text-3xl font-semibold text-white">
                            Get Subscribed to our Newsletter
                        </h1>
                        <p className="mx-auto text-base leading-relaxed text-slate-300 lg:w-2/3">
                            Stay updated with the latest news, offers, and
                            exclusive content. Subscribe now and never miss out
                            on our exciting updates and promotions!
                        </p>
                    </div>
                    <form className="w-full max-w-md">
                        <div className="flex items-center rounded-2xl border border-white/10 bg-slate-950/50 p-2">
                            <TextInput
                                type="email"
                                placeholder="Enter your email"
                                aria-label="Email"
                                className="mr-3 w-full appearance-none border-none bg-transparent px-2 py-1 leading-tight text-white placeholder:text-slate-500 focus:outline-none"
                            />
                            <PrimaryButton className="flex-shrink-0 bg-primary hover:bg-primary-dark border-primary hover:border-primary-dark text-sm border-4 text-white py-1 px-2 rounded">
                                Subscribe
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default NewsLatter;
