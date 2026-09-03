import React, { useState } from 'react';
import { Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { Link } from '@inertiajs/react';
import { useCart } from "react-use-cart";
import Toast from '../Toast';
import { useWishlist } from 'react-use-wishlist';

const Product = ({ product, layout }) => {
    const { addItem } = useCart();
    const { addWishlistItem } = useWishlist();
    const [alert, setAlert] = useState(false);

    const addToCart = () => {
        addItem(product);
        setAlert(true);
        setTimeout(() => {
            setAlert(false);
        }, 3000);
    };

    return (
        <>
            <div className={`glass-panel overflow-hidden group hover:-translate-y-1 transition-all duration-300 relative ${layout === 'list' ? 'flex flex-col sm:flex-row items-center p-4 gap-6' : 'flex flex-col'}`}>
                <Toast message={"Item added to cart"} open={alert} severity='success' display={alert ? 'block' : 'none'} />

                {/* Product Image Container */}
                <div className={`relative bg-neutral-100 overflow-hidden rounded-xl ${layout === 'list' ? 'w-full sm:w-48 h-48 flex-shrink-0' : 'w-full aspect-[4/5]'} flex items-center justify-center m-2`}>
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500 ease-out"
                    />

                    {/* Quick Actions overlay */}
                    <div className="absolute top-3 right-3 flex flex-col gap-2 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                         <button
                            onClick={() => addWishlistItem(product)}
                            className="w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-neutral-600 hover:text-red-500 hover:bg-white shadow-sm transition-all"
                            title="Add to wishlist"
                        >
                            <i className="fa-regular fa-heart text-sm"></i>
                        </button>
                         <Link
                            href={route('product.show', product.slug)}
                            className="w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-neutral-600 hover:text-primary hover:bg-white shadow-sm transition-all"
                            title="View details"
                        >
                            <i className="fa-regular fa-eye text-sm"></i>
                        </Link>
                    </div>
                </div>

                {/* Product Details */}
                <div className={`p-4 flex flex-col flex-grow ${layout === 'list' ? 'justify-center w-full' : ''}`}>
                    <Link href={route('product.show', product.slug)}>
                        <h4 className="font-medium text-lg leading-tight mb-2 text-neutral-800 hover:text-primary transition-colors line-clamp-2">
                            {product.title}
                        </h4>
                    </Link>

                    <div className="flex items-center gap-2 mb-3">
                        <div className="flex text-yellow-400">
                             <Rating
                                name="read-only"
                                value={4.5}
                                readOnly
                                precision={0.5}
                                size="small"
                                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                            />
                        </div>
                        <span className="text-xs text-neutral-400 font-medium">(150)</span>
                    </div>

                    <div className="mt-auto">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-xl font-bold text-primary">${parseFloat(product.price).toFixed(2)}</span>
                            <span className="text-sm text-neutral-400 line-through decoration-neutral-300">${(parseFloat(product.price) * 1.2).toFixed(2)}</span>
                        </div>

                        {/* Add to Cart Button */}
                        <button
                            onClick={() => addToCart(product)}
                            className={`w-full py-2.5 rounded-lg font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                                layout === 'list'
                                    ? 'bg-primary text-white hover:bg-primary-light shadow-md hover:shadow-lg hover:-translate-y-0.5 sm:w-auto sm:px-8'
                                    : 'bg-white border border-neutral-200 text-neutral-700 hover:border-primary hover:bg-primary hover:text-white shadow-sm'
                            }`}
                        >
                            <i className="fa-solid fa-cart-shopping text-[12px]"></i>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;
