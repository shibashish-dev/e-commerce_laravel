import Breadcrumb from "@/Components/Breadcrumb";
import React from "react";
import { useCart } from "react-use-cart";
import { Link } from "@inertiajs/react";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import Checkbox from "@/Components/Checkbox";

const Checkout = () => {
    const { cartTotal, items, totalUniqueItems } = useCart();

    // Placeholder values based on original total calculations
    const shipping = 0;
    const finalTotal = cartTotal + shipping;

    return (
        <div className="bg-neutral-50/30 min-h-screen pb-24">
            <Breadcrumb />

            <div className="container mx-auto px-4 mt-8">
                <div className="flex flex-col lg:flex-row gap-8 items-start">

                    {/* Checkout Form */}
                    <div className="w-full lg:w-2/3 glass-panel p-6 md:p-10">
                        <div className="mb-8 pb-6 border-b border-neutral-100 flex items-center justify-between">
                            <h2 className="text-2xl md:text-3xl font-bold text-primary">Checkout</h2>
                            <span className="text-sm text-neutral-500">Secure Payment <i className="fa-solid fa-lock ml-1"></i></span>
                        </div>

                        <div className="space-y-8">
                            {/* Contact Info */}
                            <div>
                                <h3 className="text-lg font-bold text-primary mb-4">Contact Information</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <InputLabel htmlFor="first-name">First Name <span className="text-red-500">*</span></InputLabel>
                                        <TextInput id="first-name" className="w-full" />
                                    </div>
                                    <div>
                                        <InputLabel htmlFor="last-name">Last Name <span className="text-red-500">*</span></InputLabel>
                                        <TextInput id="last-name" className="w-full" />
                                    </div>
                                    <div className="md:col-span-2">
                                        <InputLabel htmlFor="email">Email Address <span className="text-red-500">*</span></InputLabel>
                                        <TextInput id="email" type="email" className="w-full" />
                                    </div>
                                    <div className="md:col-span-2">
                                        <InputLabel htmlFor="phone">Phone Number</InputLabel>
                                        <TextInput id="phone" type="tel" className="w-full" />
                                    </div>
                                </div>
                            </div>

                            {/* Shipping Address */}
                            <div>
                                <h3 className="text-lg font-bold text-primary mb-4 border-t border-neutral-100 pt-8">Shipping Address</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="md:col-span-2">
                                        <InputLabel htmlFor="company">Company (Optional)</InputLabel>
                                        <TextInput id="company" className="w-full" />
                                    </div>
                                    <div className="md:col-span-2">
                                        <InputLabel htmlFor="address">Street Address <span className="text-red-500">*</span></InputLabel>
                                        <TextInput id="address" className="w-full" placeholder="House number and street name" />
                                    </div>
                                    <div>
                                        <InputLabel htmlFor="city">City <span className="text-red-500">*</span></InputLabel>
                                        <TextInput id="city" className="w-full" />
                                    </div>
                                    <div>
                                        <InputLabel htmlFor="region">Country / Region <span className="text-red-500">*</span></InputLabel>
                                        <TextInput id="region" className="w-full" />
                                    </div>
                                </div>
                            </div>

                            {/* Payment Section (Mock) */}
                            <div>
                                <h3 className="text-lg font-bold text-primary mb-4 border-t border-neutral-100 pt-8">Payment Method</h3>
                                <div className="bg-neutral-50 rounded-xl p-4 border border-neutral-200">
                                    <p className="text-sm text-neutral-500 text-center"><i className="fa-solid fa-credit-card mr-2"></i> Payment gateway integration would go here.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="w-full lg:w-1/3 glass-panel p-6 md:p-8 sticky top-28">
                        <h3 className="text-xl font-bold text-primary mb-6 border-b border-neutral-100 pb-4">
                            Order Summary
                        </h3>

                        <div className="space-y-4 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar mb-6">
                            {items.map((item) => (
                                <div className="flex gap-4" key={item.id}>
                                    <div className="w-16 h-16 bg-neutral-100 rounded-lg overflow-hidden shrink-0 border border-neutral-200/50">
                                        <img src={item.image} alt={item.title} className="w-full h-full object-cover mix-blend-multiply" />
                                    </div>
                                    <div className="flex flex-col flex-grow justify-center">
                                        <h5 className="text-sm font-bold text-primary line-clamp-1">{item.title}</h5>
                                        <p className="text-xs text-neutral-500 mb-1">{item.category?.name || 'Category'}</p>
                                        <div className="flex justify-between items-center w-full">
                                            <span className="text-xs font-medium text-neutral-500">Qty: {item.quantity}</span>
                                            <span className="text-sm font-bold text-primary">${parseFloat(item.price * item.quantity).toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-3 border-t border-neutral-100 pt-4 text-sm">
                            <div className="flex justify-between text-neutral-600">
                                <span>Subtotal</span>
                                <span className="font-semibold text-primary">${cartTotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-neutral-600">
                                <span>Shipping</span>
                                <span className="font-semibold text-primary">{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                            </div>
                        </div>

                        <div className="flex justify-between border-t border-neutral-100 mt-4 pt-4 mb-6">
                            <span className="font-bold text-lg text-primary">Total</span>
                            <span className="font-bold text-xl text-primary">${finalTotal.toFixed(2)}</span>
                        </div>

                        <div className="flex items-start gap-3 mb-6">
                            <div className="pt-0.5">
                                <Checkbox id="aggrement" />
                            </div>
                            <label htmlFor="aggrement" className="text-sm text-neutral-600 cursor-pointer leading-tight">
                                I agree to the <a href="#" className="text-accent hover:underline">terms & conditions</a> and <a href="#" className="text-accent hover:underline">privacy policy</a>.
                            </label>
                        </div>

                        <PrimaryButton className="w-full py-4 text-lg shadow-xl shadow-primary/20">
                            Place Order <i className="fa-solid fa-lock ml-2 text-sm"></i>
                        </PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
