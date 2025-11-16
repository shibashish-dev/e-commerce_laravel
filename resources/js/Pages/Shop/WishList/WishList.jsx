import Breadcrumb from "@/Components/Breadcrumb";
import React from "react";
import { useWishlist } from "react-use-wishlist";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Button } from "@mui/material";
import { useCart } from "react-use-cart";
import { Link } from "@inertiajs/react";
const WishList = () => {
    const { totalWishlistItems, items, removeWishlistItem } = useWishlist();
    const { addItem } = useCart();

    const addToCart = (product) => {
        addItem(product);
        removeWishlistItem(product.id);
    };

    if (totalWishlistItems === 0) {
        return (
            <>
                <Breadcrumb />
                <div className="container">
                    <div className="w-full relative z-10">
                        <div className="grid grid-cols-12">
                            <div className="col-span-12 pt-14 pb-8 lg:py-24 w-full">
                                <div className="flex items-center justify-between pb-8 border-b border-gray-300">
                                    <h2 className="font-manrope font-bold text-3xl leading-10 text-black">
                                        My Wishlists
                                    </h2>
                                    <h2 className="font-manrope font-bold text-xl leading-8 text-gray-600">
                                        {totalWishlistItems} Items
                                    </h2>
                                </div>
                                <p className="my-20 text-center">
                                    Your wishlist is empty
                                </p>
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
    return (
        <>
            <Breadcrumb />

            <div className="container">
                <div className="w-full relative z-10">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12 pt-14 pb-8 lg:py-24 w-full">
                            <div className="flex items-center justify-between pb-8 border-b border-gray-300">
                                <h2 className="font-manrope font-bold text-3xl leading-10 text-black">
                                    My Wishlists
                                </h2>
                                <h2 className="font-manrope font-bold text-xl leading-8 text-gray-600">
                                    {totalWishlistItems} Items
                                </h2>
                            </div>
                            <div className="flex flex-col gap-6 w-full">
                                {items.map((product) => (
                                    <div
                                        key={product.id}
                                        className="flex items-center border-b border-gray-300 hover:bg-gray-50 p-4"
                                    >
                                        <div className="w-1/6 flex justify-center items-center">
                                            <img
                                                src={product.image}
                                                alt={product.title}
                                                className="h-16 w-16 object-cover rounded-full"
                                            />
                                        </div>
                                        <div className="w-1/6 flex justify-center items-center text-center truncate">
                                            {product.title}
                                        </div>
                                        <div className="w-1/6 flex justify-center items-center text-center">
                                            ${product.price}
                                        </div>
                                        <div className="w-1/6 flex justify-center items-center text-center">
                                            In Stock
                                        </div>
                                        <div className="w-1/6 flex justify-center items-center">
                                            <Link
                                                href={route('product.show', product.slug)}
                                                className="text-blue-500 rounded-full"
                                                color="success"
                                            >
                                                <VisibilityIcon className="text-black" />
                                            </Link>
                                        </div>
                                        <div className="w-1/6 flex justify-center items-center">
                                            <Button
                                                className="text-blue-500 rounded-full"
                                                color="success"
                                                onClick={() =>
                                                    addToCart(product)
                                                }
                                            >
                                                <AddShoppingCartIcon className="text-green-600" />
                                            </Button>
                                        </div>
                                        <div className="w-1/6 flex justify-center items-center">
                                            <Button
                                                className="text-red-500 rounded-full"
                                                color="error"
                                                onClick={() =>
                                                    removeWishlistItem(
                                                        product.id
                                                    )
                                                }
                                            >
                                                <DeleteOutlineIcon className="text-red-600" />
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WishList;
