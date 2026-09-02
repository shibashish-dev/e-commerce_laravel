import { Link, router } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import { useCart } from "react-use-cart";
import { useWishlist } from "react-use-wishlist";

const Navbar = ({ user, categories }) => {
    const { totalItems } = useCart();
    const { totalWishlistItems } = useWishlist();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        const search = e.target.search.value.trim();
        if (search) {
            router.get(route("search", search));
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "py-3 glass"
                    : "py-5 bg-transparent"
            }`}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between gap-6">
                    {/* Logo */}
                    <Link
                        href={route("home")}
                        className="flex items-center space-x-2 text-xl font-bold tracking-tight text-primary z-50"
                    >
                        {import.meta.env.VITE_APP_NAME || "Store"}
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8 font-medium text-sm text-neutral-600">
                        <Link href={route("home")} className="hover:text-primary transition-colors">Home</Link>
                        <div className="relative group cursor-pointer">
                            <span className="flex items-center gap-1 hover:text-primary transition-colors">
                                Shop <i className="fa-solid fa-chevron-down text-[10px]"></i>
                            </span>
                            <div className="absolute top-full -left-4 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top translate-y-2 group-hover:translate-y-0">
                                <div className="glass-panel w-64 p-2 flex flex-col gap-1">
                                    <Link href={route("shop.index")} className="px-4 py-2 rounded-lg hover:bg-neutral-100/50 transition-colors font-medium">All Products</Link>
                                    <div className="h-px bg-neutral-200/50 my-1 mx-2"></div>
                                    {categories?.map((item, index) => (
                                        <Link
                                            key={index}
                                            href={route("slug.show", item.slug)}
                                            className="px-4 py-2 rounded-lg hover:bg-neutral-100/50 transition-colors flex items-center gap-3 text-sm"
                                        >
                                            <span className="truncate">{item.name}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <Link href={route("article.view")} className="hover:text-primary transition-colors">Articles</Link>
                        <Link href={route("about")} className="hover:text-primary transition-colors">About</Link>
                    </nav>

                    {/* Desktop Search */}
                    <div className="hidden lg:block flex-1 max-w-md ml-auto">
                        <form onSubmit={handleSearch} className="relative group">
                            <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-primary transition-colors"></i>
                            <input
                                type="text"
                                name="search"
                                placeholder="Search products..."
                                className="w-full pl-11 pr-4 py-2.5 rounded-full bg-white/50 border border-white/40 focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5 transition-all outline-none shadow-sm text-sm"
                            />
                        </form>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 md:gap-4 z-50">
                        <Link
                            href={route("wishlist")}
                            className="relative p-2.5 rounded-full hover:bg-white/50 transition-colors text-neutral-600 hover:text-primary"
                        >
                            <i className="fa-regular fa-heart text-xl"></i>
                            {totalWishlistItems > 0 && (
                                <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-primary text-white text-[10px] font-bold flex items-center justify-center rounded-full ring-2 ring-white">
                                    {totalWishlistItems}
                                </span>
                            )}
                        </Link>

                        <Link
                            href={route("cart")}
                            className="relative p-2.5 rounded-full hover:bg-white/50 transition-colors text-neutral-600 hover:text-primary"
                        >
                            <i className="fa-solid fa-bag-shopping text-xl"></i>
                            {totalItems > 0 && (
                                <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-primary text-white text-[10px] font-bold flex items-center justify-center rounded-full ring-2 ring-white">
                                    {totalItems}
                                </span>
                            )}
                        </Link>

                        <div className="hidden md:block h-5 w-px bg-neutral-300 mx-1"></div>

                        {user ? (
                            <Link
                                href={route("profile.index")}
                                className="hidden md:flex items-center gap-2 p-1.5 pr-4 rounded-full hover:bg-white/50 transition-colors border border-transparent hover:border-white/40"
                            >
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <i className="fa-regular fa-user"></i>
                                </div>
                                <span className="text-sm font-medium text-neutral-700 max-w-[100px] truncate">{user.name}</span>
                            </Link>
                        ) : (
                            <Link
                                href={route("login")}
                                className="hidden md:inline-flex px-5 py-2.5 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary-light hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95"
                            >
                                Sign In
                            </Link>
                        )}

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2.5 rounded-full hover:bg-white/50 transition-colors text-neutral-600"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden absolute top-full left-0 right-0 glass border-t border-white/20 transition-all duration-300 transform origin-top ${mobileMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 h-0 overflow-hidden'}`}>
                <div className="p-4 flex flex-col gap-4">
                    <form onSubmit={handleSearch} className="relative w-full">
                        <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"></i>
                        <input
                            type="text"
                            name="search"
                            placeholder="Search..."
                            className="w-full pl-11 pr-4 py-3 rounded-xl bg-white border border-neutral-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                        />
                    </form>

                    <nav className="flex flex-col gap-2 font-medium">
                        <Link href={route("home")} className="px-4 py-3 rounded-xl hover:bg-neutral-100/50">Home</Link>
                        <Link href={route("shop.index")} className="px-4 py-3 rounded-xl hover:bg-neutral-100/50">Shop All</Link>
                        <Link href={route("article.view")} className="px-4 py-3 rounded-xl hover:bg-neutral-100/50">Articles</Link>
                        <Link href={route("about")} className="px-4 py-3 rounded-xl hover:bg-neutral-100/50">About</Link>

                        <div className="h-px bg-neutral-200 my-2"></div>

                        {user ? (
                            <>
                                <Link href={route("profile.index")} className="px-4 py-3 rounded-xl hover:bg-neutral-100/50 flex items-center gap-3">
                                    <i className="fa-regular fa-user text-neutral-400"></i> Profile
                                </Link>
                                <Link method="post" href={route("logout")} className="px-4 py-3 rounded-xl hover:bg-red-50 text-red-600 flex items-center gap-3">
                                    <i className="fa-solid fa-arrow-right-from-bracket opacity-70"></i> Logout
                                </Link>
                            </>
                        ) : (
                            <Link href={route("login")} className="px-4 py-3 rounded-xl bg-primary text-white text-center mt-2">
                                Sign In
                            </Link>
                        )}
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
