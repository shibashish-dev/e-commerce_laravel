import Carousel from "@/Components/Carousel";
import React from "react";

const About = () => {
    return (
        <>
            <section className="container section-space">
                <div className="glass-surface grid items-center overflow-hidden rounded-3xl sm:grid-cols-2">
                <div className="p-6 sm:p-8 lg:p-12">
                    <div className="image object-center text-center">
                        <img className="about-illustration" src="/assets/images/about/about.png" alt="Our team working together" />
                    </div>
                </div>
                <div className="p-6 sm:p-8 lg:p-12">
                    <div className="text">
                        <span className="border-b border-primary pb-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                            About us
                        </span>
                        <h2 className="my-5 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                            About{" "}
                            <span className="text-primary">Our Company</span>
                        </h2>
                        <p className="max-w-xl text-base leading-7 text-gray-500 sm:text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Aliquid, commodi doloremque, fugiat illum
                            magni minus nisi nulla numquam obcaecati placeat
                            quia, repellat tempore voluptatum.
                        </p>
                    </div>
                </div>
                </div>
            </section>

            <section className="container section-space">
                    <div className="max-w-7xl mx-auto">
                        <div className="lg:text-center">
                            <h2 className="glass-surface mb-5 inline-flex rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary lg:mx-auto">
                                Why choose us?
                            </h2>
                            <p className="mt-2 text-3xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-4xl">
                                We know tech, we know finance. We are fintech
                                experts.
                            </p>
                            <p className="mt-4 max-w-2xl text-lg leading-7 text-gray-500 lg:mx-auto">
                                We know how to handle taxation for all the
                                countried we operate in. We care for our
                                customers and help them manage cashflows.
                            </p>
                        </div>
                        <div className="mt-10">
                            <dl className="grid gap-5 md:grid-cols-2">
                                <div className="glass-surface gold-glint relative rounded-2xl p-6 sm:p-7">
                                    <dt>
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-gray-900">
                                            <img src="https://www.svgrepo.com/show/503163/api-settings.svg" />
                                        </div>
                                        <p className="mt-5 text-lg font-semibold leading-6 text-gray-700">
                                            Powerful API
                                        </p>
                                    </dt>
                                    <dd className="mt-2 text-sm leading-6 text-gray-500">
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Maiores impedit
                                        perferendis suscipit eaque, iste dolor
                                        cupiditate blanditiis ratione.
                                    </dd>
                                </div>
                                <div className="glass-surface gold-glint relative rounded-2xl p-6 sm:p-7">
                                    <dt>
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-gray-900">
                                            <img src="https://www.svgrepo.com/show/503138/webpack.svg" />
                                        </div>
                                        <p className="mt-5 text-lg font-semibold leading-6 text-gray-700">
                                            Easy to integrate SDK
                                        </p>
                                    </dt>
                                    <dd className="mt-2 text-sm leading-6 text-gray-500">
                                        {" "}
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Maiores impedit
                                        perferendis suscipit eaque, iste dolor
                                        cupiditate blanditiis ratione.
                                    </dd>
                                </div>
                                <div className="glass-surface gold-glint relative rounded-2xl p-6 sm:p-7">
                                    <dt>
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-gray-900">
                                            <img src="https://www.svgrepo.com/show/511771/dashboard-671.svg" />
                                        </div>
                                        <p className="mt-5 text-lg font-semibold leading-6 text-gray-700">
                                            Low Transaction Cost
                                        </p>
                                    </dt>
                                    <dd className="mt-2 text-sm leading-6 text-gray-500">
                                        {" "}
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Maiores impedit
                                        perferendis suscipit eaque, iste dolor
                                        cupiditate blanditiis ratione.
                                    </dd>
                                </div>
                                <div className="glass-surface gold-glint relative rounded-2xl p-6 sm:p-7">
                                    <dt>
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-gray-900">
                                            <img src="https://www.svgrepo.com/show/76267/free-commercial-label.svg" />
                                        </div>
                                        <p className="mt-5 text-lg font-semibold leading-6 text-gray-700">
                                            Powerful Dashboard
                                        </p>
                                    </dt>
                                    <dd className="mt-2 text-sm leading-6 text-gray-500">
                                        {" "}
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Maiores impedit
                                        perferendis suscipit eaque, iste dolor
                                        cupiditate blanditiis ratione.
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
            </section>
        </>
    );
};

export default About;
