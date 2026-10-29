import React, { useState } from 'react';
import { Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { Link } from '@inertiajs/react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useCart } from "react-use-cart";
import Toast from '../Toast';
import { useWishlist } from 'react-use-wishlist';
const Product = ({ product, layout }) => {

    const { addItem } = useCart();
    const { addWishlistItem } = useWishlist();
    const [alert, setAlert] = useState(false)
    const addToCart = () => {
        addItem(product);
        setAlert(true);

        setTimeout(() => {
            setAlert(false);
        }, 3000);
    };

    return (
        <>
            <div className={`glass-surface group overflow-hidden rounded-2xl transition duration-500 hover:-translate-y-1 hover:border-amber-100/30 hover:shadow-xl ${layout === 'list' ? 'flex items-center gap-5 p-5 sm:p-6' : ''}`}>
                <Toast message={"Item added to cart"} open={alert} severity='success' display={alert ? 'block' : 'none'} />
                {/* Product Image */}
                <div className={`relative bg-slate-900/80 ${layout === 'list' ? 'w-40 h-40' : 'w-full h-64'} flex items-center justify-center`}>
                    <img src={product.image} alt={product.title} className="w-full h-full object-cover" />

                    {/* Hover Effects */}
                    <div
                        className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
                    >
                        <Link
                            href={route('product.show', product.slug)}
                            className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                            title="View product"
                        >
                            <VisibilityIcon />
                        </Link>
                        <button
                            onClick={() => addWishlistItem(product)}
                            className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                            title="Add to wishlist"
                        >
                            <FavoriteIcon />
                        </button>
                    </div>
                </div>

                {/* Product Details */}
                <div className={`flex flex-col gap-3 p-5 sm:p-6 ${layout === 'list' ? 'min-h-full flex-1 justify-center' : ''}`}>
                    <Link href={route('product.show', product.slug)}>
                        <h4 className="mb-2 text-xl font-medium uppercase text-slate-100 transition hover:text-primary">
                            {product.title}
                        </h4>
                    </Link>
                    <div className="flex items-baseline mb-1 space-x-2">
                        <p className="text-xl text-primary font-semibold">{parseFloat(product.price).toFixed(2)}</p>
                        <p className="text-sm text-gray-400 line-through">{parseFloat(product.price).toFixed(2)}</p>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center">
                        <div className="flex gap-1 text-sm text-yellow-400">
                            <Rating
                                name="text-feedback"
                                value={4.5}
                                readOnly
                                precision={0.5}
                                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                            />
                        </div>
                        <div className="text-xs text-gray-500 ml-3">(150)</div>
                    </div>

                    {/* Add to Cart Button */}
                    <button
                        onClick={() => addToCart(product)}

                        className={`w-auto block  text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition ${layout === 'list' ? 'mt-4 py-2 w-40' : 'py-1'
                            }`}
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </>
    );
};

export default Product;
