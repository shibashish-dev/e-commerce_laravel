import React, { useState } from "react";
import { Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ProductCard from "@/Components/Shop/Product";
import { useCart } from "react-use-cart";
import Toast from "@/Components/Toast";
import { useWishlist } from "react-use-wishlist";
import { motion } from "framer-motion";

const Product = ({ product }) => {
    const [mainImage, setMainImage] = useState(product.image);
    const [alert, setAlert] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const gallery = product?.gallery ? JSON.parse(product.gallery) : [];

    const { addItem } = useCart();
    const { addWishlistItem } = useWishlist();

    const addToCart = () => {
        addItem({ ...product }, quantity);
        setAlert(true);
        setTimeout(() => setAlert(false), 3000);
    };

    const increaseQuantity = () => setQuantity((prev) => prev + 1);
    const decreaseQuantity = () => { if (quantity > 1) setQuantity((prev) => prev - 1); };

    return (
        <div className="bg-neutral-50/30 min-h-screen py-12">
            <Toast open={alert} message={"Item added to cart"} severity="success" display={alert ? "block" : "none"} />

            <div className="container mx-auto px-4">
                <div className="glass-panel p-6 md:p-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">

                        {/* Image Gallery */}
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="aspect-[4/5] bg-neutral-100 rounded-3xl overflow-hidden relative flex items-center justify-center border border-neutral-200/50"
                            >
                                <img
                                    src={mainImage}
                                    alt={product.title}
                                    className="w-full h-full object-cover mix-blend-multiply"
                                />
                            </motion.div>

                            {gallery.length > 0 && (
                                <div className="grid grid-cols-4 gap-4">
                                    <button
                                        onClick={() => setMainImage(product.image)}
                                        className={`aspect-square rounded-2xl overflow-hidden bg-neutral-100 border-2 transition-all ${mainImage === product.image ? 'border-primary' : 'border-transparent hover:border-neutral-300'}`}
                                    >
                                        <img src={product.image} className="w-full h-full object-cover mix-blend-multiply" />
                                    </button>
                                    {gallery.map((img, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setMainImage(img)}
                                            className={`aspect-square rounded-2xl overflow-hidden bg-neutral-100 border-2 transition-all ${mainImage === img ? 'border-primary' : 'border-transparent hover:border-neutral-300'}`}
                                        >
                                            <img src={img} className="w-full h-full object-cover mix-blend-multiply" />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Product Details */}
                        <div className="flex flex-col">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">In Stock</span>
                                </div>
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 leading-tight">
                                    {product.title}
                                </h1>

                                <div className="flex items-center gap-4 mb-6">
                                    <div className="flex text-yellow-400">
                                        <Rating value={4.5} readOnly precision={0.5} size="small" emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />} />
                                    </div>
                                    <span className="text-sm text-neutral-500 font-medium">(150 Reviews)</span>
                                </div>

                                <div className="flex items-end gap-4 mb-8">
                                    <span className="text-4xl font-bold text-primary">${parseFloat(product.price).toFixed(2)}</span>
                                    <span className="text-xl text-neutral-400 line-through decoration-neutral-300 mb-1">${(parseFloat(product.price) * 1.2).toFixed(2)}</span>
                                </div>

                                <p className="text-neutral-600 leading-relaxed mb-8 max-w-lg">
                                    {product.description || "Experience premium quality with this meticulously crafted item. Designed for both style and durability, it's the perfect addition to your collection."}
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="mt-auto border-t border-neutral-100 pt-8"
                            >
                                <div className="flex items-center gap-6 mb-8">
                                    <div className="font-semibold text-primary">Quantity</div>
                                    <div className="flex items-center bg-neutral-100 rounded-xl p-1 border border-neutral-200">
                                        <button onClick={decreaseQuantity} className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-neutral-600 hover:text-primary hover:shadow-sm transition-all shadow-sm">
                                            <i className="fa-solid fa-minus text-xs"></i>
                                        </button>
                                        <div className="w-12 text-center font-semibold text-primary">{quantity}</div>
                                        <button onClick={increaseQuantity} className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-neutral-600 hover:text-primary hover:shadow-sm transition-all shadow-sm">
                                            <i className="fa-solid fa-plus text-xs"></i>
                                        </button>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <button
                                        onClick={addToCart}
                                        className="flex-1 bg-primary text-white py-4 rounded-xl font-semibold hover:bg-primary-light hover:shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
                                    >
                                        <i className="fa-solid fa-cart-shopping"></i> Add to Cart
                                    </button>
                                    <button
                                        onClick={() => addWishlistItem(product)}
                                        className="w-14 h-14 bg-white border border-neutral-200 rounded-xl flex items-center justify-center text-neutral-600 hover:text-red-500 hover:border-red-500 hover:bg-red-50 transition-all duration-300"
                                        title="Add to Wishlist"
                                    >
                                        <i className="fa-regular fa-heart text-xl"></i>
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Additional Info Tabs */}
                <div className="mt-16 glass-panel p-8">
                     <h3 className="text-xl font-bold text-primary mb-6 border-b border-neutral-100 pb-4">Product Description</h3>
                     <div className="prose prose-neutral max-w-none text-neutral-600">
                         <p>
                             Discover the perfect blend of functionality and modern design. This product is engineered using top-grade materials to ensure longevity and superior performance. Whether you're upgrading your daily essentials or looking for that standout piece, this delivers on all fronts.
                         </p>
                         <ul>
                             <li>Premium material construction</li>
                             <li>Ergonomic and modern design</li>
                             <li>Built for everyday durability</li>
                             <li>Easy maintenance and care</li>
                         </ul>
                     </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
