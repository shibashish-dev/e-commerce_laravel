import { Link, useForm } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";

const Summery = ({ cartTotal, totalUniqueItems, user }) => {
    const { data, setData, post, processing } = useForm({
        code: "",
        user_id: user?.id,
    });

    const [couponMessage, setCouponMessage] = useState("");
    const [couponValid, setCouponValid] = useState(false);
    const [couponData, setCouponData] = useState(null);
    const [total, setTotal] = useState(0);
    const [applied, setApplied] = useState(false);
    const [shippingCost, setShippingCost] = useState(5.99);

    const handleSubmitCoupon = async (e) => {
        e.preventDefault();

        if (!data.user_id) {
            setCouponMessage("Please Login First !");
            return;
        }

        try {
            const response = await window.axios.post(route("coupon.reedem"), data);

            if (response.data.success) {
                setCouponValid(true);
                setCouponMessage("Coupon applied successfully!");
                setCouponData(response.data.data);
                setApplied(true);
                window.Swal?.fire({ icon: "success", title: "Coupon Applied!", text: "Your discount has been applied." });
            } else {
                setCouponMessage(response.data.message || "Invalid coupon code.");
                setApplied(false);
            }
        } catch (error) {
            setCouponMessage(error?.response?.data?.message || "Invalid coupon code.");
            setApplied(false);
        }
    };

    useEffect(() => {
        let currentTotal = cartTotal;
        if (couponData) {
            let discount = couponData.type === "fixed" ? couponData.value : (couponData.value / 100) * cartTotal;
            currentTotal = Math.max(cartTotal - discount, 0);
        }
        setTotal(currentTotal + shippingCost);
    }, [couponData, cartTotal, shippingCost]);

    return (
        <div className="glass-panel p-6 md:p-8 sticky top-28 flex flex-col gap-6">
            <h2 className="text-xl font-bold text-primary border-b border-neutral-100 pb-4">
                Order Summary
            </h2>

            <div className="space-y-4">
                <div className="flex items-center justify-between text-neutral-600">
                    <span>Subtotal ({totalUniqueItems} items)</span>
                    <span className="font-semibold text-primary">${cartTotal.toFixed(2)}</span>
                </div>

                {applied && couponData && (
                    <div className="flex items-center justify-between text-emerald-600 bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                        <span className="flex items-center gap-2"><i className="fa-solid fa-tag text-xs"></i> Discount applied</span>
                        <span className="font-semibold">
                            -${couponData.type === 'fixed' ? couponData.value.toFixed(2) : ((couponData.value / 100) * cartTotal).toFixed(2)}
                        </span>
                    </div>
                )}
            </div>

            {/* Shipping Options */}
            <div className="border-t border-neutral-100 pt-6">
                <label className="block text-sm font-semibold text-primary mb-3">Shipping Method</label>
                <div className="space-y-3">
                    <label className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${shippingCost === 5.99 ? 'border-primary bg-primary/5 ring-1 ring-primary/20' : 'border-neutral-200 hover:border-neutral-300 bg-white'}`}>
                        <div className="flex items-center gap-3">
                            <input
                                type="radio"
                                name="shipping"
                                value="5.99"
                                checked={shippingCost === 5.99}
                                onChange={() => setShippingCost(5.99)}
                                className="text-primary focus:ring-primary w-4 h-4"
                            />
                            <div className="flex flex-col">
                                <span className="font-medium text-neutral-800 text-sm">Standard Shipping</span>
                                <span className="text-xs text-neutral-500">3-5 business days</span>
                            </div>
                        </div>
                        <span className="font-semibold text-neutral-700 text-sm">$5.99</span>
                    </label>

                    <label className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${shippingCost === 9.99 ? 'border-primary bg-primary/5 ring-1 ring-primary/20' : 'border-neutral-200 hover:border-neutral-300 bg-white'}`}>
                        <div className="flex items-center gap-3">
                            <input
                                type="radio"
                                name="shipping"
                                value="9.99"
                                checked={shippingCost === 9.99}
                                onChange={() => setShippingCost(9.99)}
                                className="text-primary focus:ring-primary w-4 h-4"
                            />
                            <div className="flex flex-col">
                                <span className="font-medium text-neutral-800 text-sm">Express Shipping</span>
                                <span className="text-xs text-neutral-500">1-2 business days</span>
                            </div>
                        </div>
                        <span className="font-semibold text-neutral-700 text-sm">$9.99</span>
                    </label>
                </div>
            </div>

            {/* Coupon Code */}
            <div className="border-t border-neutral-100 pt-6">
                <label className="block text-sm font-semibold text-primary mb-3">Promo Code</label>
                <form onSubmit={handleSubmitCoupon} className="flex gap-2 relative">
                    <input
                        type="text"
                        name="code"
                        onChange={(e) => setData("code", e.target.value)}
                        className="w-full bg-white border-neutral-200 focus:border-primary focus:ring-primary/20 rounded-xl px-4 py-2.5 outline-none transition-all shadow-sm text-sm"
                        placeholder="Enter discount code"
                        disabled={applied}
                    />
                    <PrimaryButton
                        disabled={processing || applied || !data.code}
                        className={`shrink-0 px-4 py-2.5 rounded-xl ${applied ? 'bg-emerald-500 hover:bg-emerald-600 shadow-emerald-500/20' : ''}`}
                    >
                        {applied ? <i className="fa-solid fa-check"></i> : 'Apply'}
                    </PrimaryButton>
                </form>
                {couponMessage && (
                    <p className={`text-xs mt-2 font-medium ${applied ? "text-emerald-600" : "text-red-500"}`}>
                        <i className={`fa-solid ${applied ? 'fa-circle-check' : 'fa-circle-exclamation'} mr-1`}></i>
                        {couponMessage}
                    </p>
                )}
            </div>

            {/* Total & Checkout */}
            <div className="border-t border-neutral-100 pt-6 mt-2">
                <div className="flex items-end justify-between mb-6">
                    <span className="text-lg font-bold text-primary">Total</span>
                    <div className="text-right">
                        <p className="text-xs text-neutral-400 mb-1">Including shipping & taxes</p>
                        <span className="text-3xl font-bold text-primary leading-none">${total.toFixed(2)}</span>
                    </div>
                </div>

                <Link
                    href={route('checkout.index')}
                    className="w-full inline-flex items-center justify-center bg-primary text-white py-4 px-6 font-bold text-lg rounded-xl shadow-xl shadow-primary/20 hover:bg-primary-light hover:-translate-y-1 transition-all duration-300 active:scale-95 group"
                >
                    Proceed to Checkout
                    <i className="fa-solid fa-arrow-right ml-3 transform group-hover:translate-x-1 transition-transform"></i>
                </Link>

                <div className="mt-4 flex items-center justify-center gap-4 text-neutral-300">
                    <i className="fa-brands fa-cc-visa text-2xl hover:text-neutral-400 transition-colors"></i>
                    <i className="fa-brands fa-cc-mastercard text-2xl hover:text-neutral-400 transition-colors"></i>
                    <i className="fa-brands fa-cc-amex text-2xl hover:text-neutral-400 transition-colors"></i>
                    <i className="fa-brands fa-cc-paypal text-2xl hover:text-neutral-400 transition-colors"></i>
                </div>
            </div>
        </div>
    );
};

export default Summery;
