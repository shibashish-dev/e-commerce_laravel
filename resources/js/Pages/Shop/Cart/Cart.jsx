import React from 'react';
import { useCart } from 'react-use-cart';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';

import Breadcrumb from '@/Components/Breadcrumb';
import CartItem from '@/Components/Shop/Cart/CartItem';
import Summery from '@/Components/Shop/Cart/Summery';

const Cart = ({ auth }) => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
        cartTotal,
    } = useCart();

    if (isEmpty) {
        return (
            <div className="bg-neutral-50/30 min-h-screen pb-24">
                <Breadcrumb />
                <div className="container mx-auto px-4 mt-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="glass-panel p-12 max-w-2xl mx-auto text-center flex flex-col items-center justify-center min-h-[400px]"
                    >
                        <div className="w-24 h-24 bg-neutral-100 rounded-full flex items-center justify-center mb-6 text-neutral-300">
                            <i className="fa-solid fa-cart-shopping text-4xl"></i>
                        </div>
                        <h2 className="text-3xl font-bold text-primary mb-4">Your cart is empty</h2>
                        <p className="text-neutral-500 mb-8 max-w-sm">Looks like you haven't added anything to your cart yet. Discover our latest collections.</p>
                        <Link
                            href={route('shop.index')}
                            className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary-light hover:shadow-lg active:scale-95"
                        >
                            Start Shopping <i className="fa-solid fa-arrow-right ml-2 text-xs"></i>
                        </Link>
                    </motion.div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-neutral-50/30 min-h-screen pb-24">
            <Breadcrumb />

            <div className="container mx-auto px-4 mt-8 relative z-10">
                <div className="flex flex-col lg:flex-row gap-8 items-start">

                    {/* Cart Items List */}
                    <div className="w-full lg:w-2/3 xl:w-3/4">
                        <div className="glass-panel p-6 md:p-8">
                            <div className="flex items-center justify-between pb-6 border-b border-neutral-100 mb-6">
                                <h1 className="text-2xl md:text-3xl font-bold text-primary">
                                    Shopping Cart
                                </h1>
                                <span className="bg-neutral-100 text-neutral-600 px-4 py-1.5 rounded-full text-sm font-semibold">
                                    {totalUniqueItems} {totalUniqueItems === 1 ? 'Item' : 'Items'}
                                </span>
                            </div>

                            {/* Desktop Header */}
                            <div className="hidden md:grid grid-cols-12 pb-4 text-sm font-medium text-neutral-400">
                                <div className="col-span-6 uppercase tracking-wider">Product</div>
                                <div className="col-span-3 text-center uppercase tracking-wider">Quantity</div>
                                <div className="col-span-3 text-right uppercase tracking-wider">Total</div>
                            </div>

                            <motion.div
                                className="flex flex-col gap-2"
                                initial="hidden"
                                animate="visible"
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
                                }}
                            >
                                {items.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        variants={{
                                            hidden: { opacity: 0, y: 20 },
                                            visible: { opacity: 1, y: 0 }
                                        }}
                                    >
                                        <CartItem item={item} updateItemQuantity={updateItemQuantity} removeItem={removeItem} />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="w-full lg:w-1/3 xl:w-1/4 sticky top-28">
                        <Summery cartTotal={cartTotal} totalUniqueItems={totalUniqueItems} user={auth?.user}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
