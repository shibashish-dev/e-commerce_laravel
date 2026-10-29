import { Link, router } from "@inertiajs/react";
import { useCart } from "react-use-cart";
import { useWishlist } from "react-use-wishlist";
import ApplicationLogo from "@/Components/ApplicationLogo";

const Navbar = ({ user, categories = [] }) => {
    const { totalItems } = useCart();
    const { totalWishlistItems } = useWishlist();
    const currentRoute = route().current();

    // Main navigation items
    const menuRoutes = [
        { name: "Home", route: "home" },
        { name: "Shop", route: "shop.index", active: "shop.*" },
        { name: "Articles", route: "article.view", active: "article.*" },
        { name: "About us", route: "about" },
        { name: "Contact us", route: "contact.view" },
    ];

    const isActiveRoute = (routeName, activePattern) => currentRoute === routeName || (activePattern && route().current(activePattern));
    const menuLinkClass = (routeName, activePattern) => `menu-liquid nav-main-link text-gray-300 transition ${isActiveRoute(routeName, activePattern) ? "is-active" : "" }`;

    // Search handler
    const handleSearch = (e) => {
        e.preventDefault();

        const search = e.currentTarget.search.value.trim();

        if (search) {
            router.get(route("search", { search }));
        }
    };

    return (
        <>
            {/* Header */}
            <header className="sticky top-0 z-40 border-b border-white/10 bg-white py-4 shadow-sm">
                <div className="container flex items-center justify-between gap-3">
                    {/* Logo */}
                    <Link
                        href={route("home")}
                        aria-label="Avero home"
                        className="inline-flex shrink-0 items-center"
                    >
                        <ApplicationLogo />
                    </Link>

                    {/* Search */}
                    <form
                        onSubmit={handleSearch}
                        className="hidden w-1/2 md:block"
                    >
                        <div className="relative flex w-full">
                            <span className="absolute left-4 top-3 text-lg text-gray-400">
                                <i className="fa-solid fa-magnifying-glass" />
                            </span>

                            <input
                                type="text"
                                name="search"
                                id="search"
                                placeholder="Search products..."
                                className="w-full rounded-l-md border border-r-0 py-3 pl-12 pr-3 focus:outline-none"
                            />

                            <button
                                type="submit"
                                className="hidden items-center rounded-r-md border border-primary bg-primary px-8 text-white transition hover:bg-transparent hover:text-primary md:flex"
                            >
                                Search
                            </button>
                        </div>
                    </form>

                    {/* User Actions */}
                    <div className="flex items-center space-x-4">
                        {/* Wishlist */}
                        <Link
                            href={route("wishlist")}
                            className="relative text-center text-gray-700 transition hover:text-primary"
                        >
                            <div className="text-xl sm:text-2xl">
                                <i className="fa-regular fa-heart" />
                            </div>

                            <div className="hidden text-xs leading-3 sm:block">
                                Wishlist
                            </div>

                            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-white">
                                {totalWishlistItems}
                            </span>
                        </Link>

                        {/* Cart */}
                        <Link
                            href={route("cart")}
                            className="relative text-center text-gray-700 transition hover:text-primary"
                        >
                            <div className="text-xl sm:text-2xl">
                                <i className="fa-solid fa-bag-shopping" />
                            </div>

                            <div className="hidden text-xs leading-3 sm:block">
                                Cart
                            </div>

                            <span className="absolute -right-3 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-white">
                                {totalItems}
                            </span>
                        </Link>

                        {/* Account */}
                        <Link
                            href={route("profile.index")}
                            className="text-center text-gray-700 transition hover:text-primary"
                        >
                            <div className="text-xl sm:text-2xl">
                                <i className="fa-regular fa-user" />
                            </div>

                            <div className="hidden text-xs leading-3 sm:block">
                                Account
                            </div>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Navigation */}
            <nav className="w-full bg-gray-900 shadow-md">
                <div className="container mx-auto flex min-w-0 items-center">
                    {/* Categories Dropdown */}
                    <div className="group relative hidden cursor-pointer bg-primary px-8 py-5 md:flex md:items-center">
                        <span className="text-white">
                            <i className="fa-solid fa-bars" />
                        </span>

                        <div className="glass-surface invisible absolute left-0 top-full z-50 w-60 rounded-b-2xl rounded-tr-2xl py-3 opacity-0 shadow-xl transition duration-300 group-hover:visible group-hover:opacity-100">
                            {categories.map((item) => {
                                const active =
                                    currentRoute === "slug.show" &&
                                    String(route().params.slug) ===
                                    String(item.slug);

                                return (
                                    <Link
                                        key={item.id}
                                        href={route("slug.show", item.slug)}
                                        aria-current={
                                            active ? "page" : undefined
                                        }
                                        className={`menu-liquid flex items-center px-6 py-3 transition ${active ? "is-active" : ""
                                            }`}
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="h-5 w-5 object-contain"
                                        />

                                        <span className="ml-6 text-sm text-gray-600">
                                            {item.name}
                                        </span>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* Main Links */}
                    <div className="flex min-w-0 flex-grow items-center justify-between gap-3 py-3 md:py-5 md:pl-12">
                        <div className="nav-menu flex min-w-0 flex-1 items-center gap-4 overflow-x-auto whitespace-nowrap capitalize md:gap-6">
                            {menuRoutes.map((item) => {
                                const active = isActiveRoute(
                                    item.route,
                                    item.active
                                );

                                return (
                                    <Link
                                        key={item.route}
                                        href={route(item.route)}
                                        aria-current={ active ? "page" : undefined }
                                        className={menuLinkClass(item.route, item.active)}
                                    >
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Authentication */}
                        <div className="flex shrink-0 gap-3">
                            {!user ? (
                                <Link
                                    href={route("login")}
                                    className="menu-liquid text-gray-300 transition"
                                >
                                    Login
                                </Link>
                            ) : (
                                <Link
                                    href={route("logout")}
                                    method="post"
                                    as="button"
                                    className="menu-liquid text-red-300 transition"
                                >
                                    Logout
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;