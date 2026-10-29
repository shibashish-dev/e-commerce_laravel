import React from "react";

const Ads = ({ ads }) => {
    return (
        <div className="container section-space">
            <div className="glass-surface gold-glint flex w-full flex-col overflow-hidden rounded-3xl md:flex-row">
                {/* Image Section */}
                <div className="md:w-5/12 w-full h-64 md:h-auto">
                    <a href="#" className="block h-full">
                        <img
                            className="w-full h-full object-cover"
                            src={ads.image}
                            alt="peripherals"
                        />
                    </a>
                </div>
                {/* Text Section */}
                <div className="flex flex-col justify-center p-6 sm:p-8 md:w-7/12 md:p-10 lg:p-14">
                    <h2 className="mb-3 text-2xl font-bold leading-tight tracking-tight text-white md:text-4xl">
                        {ads.title}
                    </h2>
                    <p className="mb-6 text-slate-300">{ads.description}</p>
                    <a
                        href={ads.url}
                        className="w-auto block text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition py-2 px-4"
                    >
                        {ads.btn_text}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Ads;
