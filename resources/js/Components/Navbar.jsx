import { Link, router } from "@inertiajs/react";
import React from "react";
import { useCart } from "react-use-cart";
import { useWishlist } from "react-use-wishlist";

const Navbar = ({ user, categories }) => {
    const { totalItems } = useCart();
    const { totalWishlistItems } = useWishlist();

    const handleSearch = (e) => {
        e.preventDefault();

        const search = e.target.search.value.trim();
        if (search) {
            router.get(route('search',search)); // Redirect user to search page with query
        }

    }
    return (
        <>
            {/* header */}
            <header className="py-4 shadow-sm bg-white">
                <div className="container flex items-center justify-between">
                    <Link
                        href={route("home")}
                        className="flex items-center space-x-2"
                    >
                        {/* <img src="assets/images/logo.svg" alt="Logo" className="w-32" /> */}{" "}
                        {import.meta.env.VITE_APP_NAME}
                    </Link>
                    <form onSubmit={handleSearch}  className="w-1/2">
                        <div className="w-full  relative flex">
                            <span className="absolute left-4 top-3 text-lg text-gray-400">
                                <i className="fa-solid fa-magnifying-glass" />
                            </span>
                            <input
                                type="text"
                                name="search"
                                id="search"
                                className="w-full border border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none active:outline-none hidden md:flex"
                                placeholder="search"
                            />
                            <button type="submit" className="items-center bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition hidden md:flex">
                                Search
                            </button>
                        </div>
                    </form>
                    <div className="flex items-center space-x-4">
                        <Link
                            href={route("wishlist")}
                            className="text-center text-gray-700 hover:text-primary transition relative"
                        >
                            <div className="text-2xl">
                                <i className="fa-regular fa-heart" />
                            </div>
                            <div className="text-xs leading-3">Wishlist</div>
                            <div className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                                {totalWishlistItems}
                            </div>
                        </Link>
                        <Link
                            href={route("cart")}
                            className="text-center text-gray-700 hover:text-primary transition relative"
                        >
                            <div className="text-2xl">
                                <i className="fa-solid fa-bag-shopping" />
                            </div>
                            <div className="text-xs leading-3">Cart</div>
                            <div className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                                {totalItems}
                            </div>
                        </Link>
                        <Link
                            href={route("profile.index")}
                            className="text-center text-gray-700 hover:text-primary transition relative"
                        >
                            <div className="text-2xl">
                                <i className="fa-regular fa-user" />
                            </div>
                            <div className="text-xs leading-3">Account</div>
                        </Link>
                    </div>
                </div>
            </header>
            {/* ./header */}
            {/* navbar */}

            <nav className="bg-gray-900 w-full shadow-md">
                <div className="container mx-auto flex items-center">
                    <div className="px-8 py-5 bg-primary md:flex items-center cursor-pointer relative group hidden">
                        <span className="text-white">
                            <i className="fa-solid fa-bars" />
                        </span>
                        {/* Dropdown */}
                        <div className="absolute w-60 left-0 top-full bg-white shadow-lg py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible z-50">
                            {categories.map((item, index) => (
                                <Link
                                    key={index}
                                    href={route("slug.show", item.slug)}
                                    className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-5 h-5 object-contain"
                                    />
                                    <span className="ml-6 text-gray-600 text-sm">
                                        {item.name}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Main Navigation */}
                    <div className="flex items-center justify-between flex-grow md:pl-12 py-5">
                        <div className="flex items-center space-x-6 capitalize">
                            <Link
                                href={route("home")}
                                className="text-gray-300 hover:text-white transition"
                            >
                                Home
                            </Link>
                            <Link
                                href={route("shop.index")}
                                className="text-gray-300 hover:text-white transition"
                            >
                                Shop
                            </Link>
                            <Link
                                href={route("article.view")}
                                className="text-gray-300 hover:text-white transition"
                            >
                                Articles
                            </Link>
                            <Link
                                href={route("about")}
                                className="text-gray-300 hover:text-white transition"
                            >
                                About us
                            </Link>
                            <Link
                                href={route('contact.view')}
                                className="text-gray-300 hover:text-white transition"
                            >
                                Contact us
                            </Link>
                        </div>
                        <div className="flex gap-3">
                            {!user ? (
                                <Link
                                    href={route("login")}
                                    className="text-gray-300 hover:text-white transition"
                                >
                                    Login
                                </Link>
                            ) : (
                                <Link
                                    method="post"
                                    href={route("logout")}
                                    className="text-red-300 hover:text-white transition"
                                >
                                    Logout
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            {/* ./navbar */}
        </>
    );
};

export default Navbar;
