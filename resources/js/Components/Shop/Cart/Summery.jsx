import { Link, useForm, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

const Summery = ({ cartTotal, totalUniqueItems, user }) => {
    const { data, setData, post, processing, reset } = useForm({
        code: "",
        user_id: user?.id,
    });

    const [couponMessage, setCouponMessage] = useState("");
    const [couponValid, setCouponValid] = useState(false);
    const [couponData, setCouponData] = useState(null);
    const [total, setTotal] = useState(0);
    const [applied, setApplied] = useState(false);

    const handleSubmitCoupon = async (e) => {
        e.preventDefault();

        if (!data.user_id) {
            setCouponMessage("Please Login First !");
            return;
        }

        try {
            const response = await window.axios.post(
                route("coupon.reedem"),
                data
            );

            if (response.data.success) {
                setCouponValid(true);
                setCouponMessage("Coupon Code Applied!");
                setCouponData(response.data.data);
                setApplied(true);

                // Show success alert using SweetAlert
                window.Swal.fire({
                    icon: "success",
                    title: "Coupon Applied!",
                    text: "Your discount has been applied successfully.",
                });
            } else {
                setCouponMessage(
                    response.data.message || "Invalid coupon code."
                );
                setApplied(false);

                // Show error alert
                window.Swal.fire({
                    icon: "error",
                    title: "Coupon Error",
                    text: response.data.message || "Invalid coupon code.",
                });
            }
        } catch (error) {
            setCouponMessage(
                error.response.data.message || "Invalid coupon code."
            );
            setApplied(false);
            console.log(error);

            window.Swal.fire({
                icon: "error",
                title: "Oops...",
                text:
                    error.response.data.message ||
                    "Something went wrong! Please try again.",
            });
        }
    };

    console.log(couponData);
    useEffect(() => {
        if (couponData) {
            let discount = 0;

            if (couponData.type === "fixed") {
                discount = couponData.value;
            } else if (couponData.type === "percent") {
                discount = (couponData.value / 100) * cartTotal;
            }

            let total = Math.max(cartTotal - discount, 0); // Ensure total doesn't go negative
            setTotal(total);
        } else {
            setTotal(cartTotal);
        }
    }, [couponData, cartTotal]);

    return (
        <>
            <div className="col-span-12 xl:col-span-4 bg-gray-50 w-full max-w-3xl xl:max-w-lg mx-auto lg:pl-8 px-6 py-16">
                <h2 className="font-manrope font-bold text-3xl leading-10 text-black pb-6 border-b border-gray-300">
                    Order Summary
                </h2>

                <div className="mt-6">
                    {/* Order Info */}
                    <div className="flex items-center justify-between pb-4">
                        <p className="text-lg text-black">
                            {totalUniqueItems} Items
                        </p>
                        <p className="font-medium text-lg text-black">
                            ₹{cartTotal.toFixed(2)}
                        </p>
                    </div>

                    {/* Shipping */}
                    <label className="block text-gray-600 text-sm font-medium mb-2">
                        Shipping
                    </label>
                    <div className="space-y-3 pb-4">
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="shippingOption"
                                value="standard"
                                className="mr-2"
                            />
                            Standard Shipping (₹5.99)
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="shippingOption"
                                value="express"
                                className="mr-2"
                            />
                            Express Shipping (₹9.99)
                        </label>
                    </div>
                    <form onSubmit={handleSubmitCoupon}>
                        {/* Coupon Code */}
                        <label className="block text-gray-600 text-sm font-medium mb-2">
                            Coupon Code
                        </label>
                        <div className="flex items-center gap-3 pb-4">
                            <input
                                type="text"
                                name="code"
                                onChange={(e) =>
                                    setData("code", e.target.value)
                                }
                                className="w-full h-11 px-4 py-2 text-base text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="Enter a coupon code..."
                            />
                            <button
                                type="submit"
                                disabled={processing}
                                className="bg-primary text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-500 hover:bg-transparent hover:text-primary border border-primary"
                            >
                                Apply
                            </button>
                        </div>
                    </form>
                    {couponMessage && (
                        <p
                            className={`text-sm ${
                                applied ? "text-green-500" : "text-red-500"
                            }`}
                        >
                            {couponMessage}
                        </p>
                    )}
                    {/* Order Total */}
                    <div className="flex items-center justify-between py-6">
                        <p className="font-medium text-xl text-black">Total</p>
                        <p className="font-semibold text-xl text-indigo-600">
                            ₹{total.toFixed(2)}
                        </p>
                    </div>

                    {/* Checkout Button */}
                    <Link href={route('checkout.index')}  className="w-full bg-primary text-white py-3 text-lg font-semibold rounded-lg transition-all duration-500 hover:bg-transparent hover:text-primary border border-primary text-center block">
                        Checkout
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Summery;
