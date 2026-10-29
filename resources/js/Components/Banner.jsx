import React from 'react';

const Banner = () => {
    return (
        <>
            {/* banner */}
            <section
                className="relative isolate overflow-x-clip bg-cover bg-no-repeat bg-center py-20 sm:py-28 lg:py-36 before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-r before:from-[#211d1a]/95 before:via-[#211d1a]/75 before:to-[#211d1a]/30"
                style={{ backgroundImage: 'url("assets/images/banner-bg.jpg")' }}
            >
                <div className="container relative z-10">
                    <span className="mb-5 inline-flex rounded-full border border-amber-100/25 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-black/10 backdrop-blur-xl">
                        Thoughtful pieces for every room
                    </span>
                    <h1
                        className="mb-5 max-w-3xl text-4xl font-semibold capitalize leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl"
                    >
                        best collection for <br className="hidden sm:block" /> home decoration
                    </h1>
                    <p
                        className="max-w-xl text-base leading-7 text-slate-200 sm:text-lg"
                    >
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam <br />
                        accusantium perspiciatis, sapiente magni eos dolorum ex quos dolores odio
                    </p>
                    <div className="mt-12">
                        <a href={route("shop.index")} className="gold-glint inline-flex items-center gap-3 rounded-full border border-amber-100/30 bg-primary px-7 py-3 font-semibold text-[#211d1a] shadow-lg shadow-black/30 transition hover:-translate-y-0.5 hover:shadow-xl">
                            Explore the collection <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </section>
            {/* ./banner */}
        </>
    );
};

export default Banner;
