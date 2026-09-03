import React from 'react';
import { Link } from '@inertiajs/react';

const CartItem = ({ item, updateItemQuantity, removeItem }) => {
    return (
        <div className="group flex flex-col md:flex-row items-center gap-6 py-6 border-b border-neutral-100 last:border-0 relative">

            {/* Mobile Remove Button (Absolute) */}
            <button
                onClick={() => removeItem(item.id)}
                className="md:hidden absolute top-4 right-0 w-8 h-8 flex items-center justify-center text-neutral-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
            >
                <i className="fa-solid fa-xmark"></i>
            </button>

            {/* Product Image & Details */}
            <div className="flex w-full md:w-1/2 items-center gap-4">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-neutral-100 rounded-2xl flex-shrink-0 overflow-hidden border border-neutral-200/50">
                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                    />
                </div>

                <div className="flex flex-col pr-8 md:pr-0">
                    <Link href={route('product.show', item.slug || '#')} className="text-lg font-bold text-primary hover:text-accent transition-colors line-clamp-2 leading-tight mb-1">
                        {item.title}
                    </Link>
                    <span className="text-sm text-neutral-500 mb-2">{item.category?.name || 'Category'}</span>
                    <span className="font-semibold text-neutral-700 md:hidden">${parseFloat(item.price).toFixed(2)}</span>
                </div>
            </div>

            <div className="flex w-full md:w-1/2 items-center justify-between md:justify-end gap-6">

                {/* Mobile Price Label (hidden on desktop) */}
                <div className="md:hidden flex flex-col items-start w-1/3">
                     <span className="text-xs text-neutral-400 uppercase tracking-wider mb-1 font-semibold">Price</span>
                     <span className="font-semibold text-neutral-700">${parseFloat(item.price).toFixed(2)}</span>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center bg-white border border-neutral-200 rounded-xl p-1 shadow-sm w-auto md:w-32 justify-between shrink-0">
                    <button
                        onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-neutral-500 hover:bg-neutral-100 hover:text-primary transition-all"
                    >
                        <i className="fa-solid fa-minus text-[10px]"></i>
                    </button>
                    <span className="font-semibold text-primary w-8 text-center">{item.quantity}</span>
                    <button
                        onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-neutral-500 hover:bg-neutral-100 hover:text-primary transition-all"
                    >
                        <i className="fa-solid fa-plus text-[10px]"></i>
                    </button>
                </div>

                {/* Total Price */}
                <div className="text-right shrink-0 w-24">
                    <span className="text-xs text-neutral-400 uppercase tracking-wider mb-1 font-semibold block md:hidden">Total</span>
                    <span className="text-lg font-bold text-primary">
                        ${(item.price * item.quantity).toFixed(2)}
                    </span>
                </div>

                {/* Desktop Remove Button */}
                <button
                    onClick={() => removeItem(item.id)}
                    className="hidden md:flex w-10 h-10 items-center justify-center text-neutral-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all ml-4 shrink-0"
                    title="Remove item"
                >
                    <i className="fa-solid fa-trash-can"></i>
                </button>
            </div>
        </div>
    );
};

export default CartItem;
