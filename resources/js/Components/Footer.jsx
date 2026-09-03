import React from 'react';
import { Link } from '@inertiajs/react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-neutral-200 mt-auto relative z-10">
            <div className="container mx-auto px-4 md:px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">

                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-1 lg:col-span-1 flex flex-col items-start">
                        <Link href="/" className="text-2xl font-bold tracking-tight text-primary mb-4">
                            {import.meta.env.VITE_APP_NAME || "Store"}
                        </Link>
                        <p className="text-neutral-500 text-sm leading-relaxed mb-6 max-w-xs text-balance">
                            Elevating your shopping experience with premium products and seamless design.
                        </p>
                        <div className="flex items-center gap-4 text-neutral-400">
                            <a href="#" className="hover:text-primary transition-colors hover:-translate-y-1 transform duration-300">
                                <i className="fa-brands fa-twitter text-xl"></i>
                            </a>
                            <a href="#" className="hover:text-primary transition-colors hover:-translate-y-1 transform duration-300">
                                <i className="fa-brands fa-instagram text-xl"></i>
                            </a>
                            <a href="#" className="hover:text-primary transition-colors hover:-translate-y-1 transform duration-300">
                                <i className="fa-brands fa-facebook text-xl"></i>
                            </a>
                        </div>
                    </div>

                    {/* Links Group 1 */}
                    <div>
                        <h4 className="font-semibold text-primary mb-6">Shop</h4>
                        <ul className="flex flex-col gap-4 text-sm text-neutral-500">
                            <li><Link href="#" className="hover:text-primary transition-colors">All Products</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">New Arrivals</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Best Sellers</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Sale</Link></li>
                        </ul>
                    </div>

                    {/* Links Group 2 */}
                    <div>
                        <h4 className="font-semibold text-primary mb-6">Support</h4>
                        <ul className="flex flex-col gap-4 text-sm text-neutral-500">
                            <li><Link href="#" className="hover:text-primary transition-colors">Contact Us</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">FAQ</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Shipping Returns</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Track Order</Link></li>
                        </ul>
                    </div>

                    {/* Links Group 3 */}
                    <div>
                        <h4 className="font-semibold text-primary mb-6">Legal</h4>
                        <ul className="flex flex-col gap-4 text-sm text-neutral-500">
                            <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-neutral-100 bg-neutral-50/50">
                <div className="container mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-neutral-400 text-sm">
                        &copy; {new Date().getFullYear()} {import.meta.env.VITE_APP_NAME || "Store"}. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        {/* Example Payment Icons - replace with actual assets if available */}
                        <div className="h-6 w-10 bg-neutral-200 rounded-sm"></div>
                        <div className="h-6 w-10 bg-neutral-200 rounded-sm"></div>
                        <div className="h-6 w-10 bg-neutral-200 rounded-sm"></div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
