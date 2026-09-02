import { Head, Link } from "@inertiajs/react";
import React, { useState } from "react";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import Sidebar from "@/Components/Profile/Sidebar";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import AddressForm from "./Partials/AddressForm";
import Breadcrumb from "@/Components/Breadcrumb";
import { motion } from "framer-motion";

const Profile = ({ user, mustVerifyEmail, status }) => {
    const [active, setActive] = useState("account");

    const renderComponent = () => {
        switch (active) {
            case "account":
                return <UpdateProfileInformationForm mustVerifyEmail={mustVerifyEmail} status={status} className="w-full" />;
            case "addresses":
                return <AddressForm />;
            case "password":
                return <UpdatePasswordForm className="w-full" />;
            case "orders":
                return (
                    <div className="flex flex-col items-center justify-center min-h-[300px] text-center">
                        <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mb-4 text-neutral-400">
                            <i className="fa-solid fa-box-open text-2xl"></i>
                        </div>
                        <h3 className="text-lg font-semibold text-primary mb-2">No orders yet</h3>
                        <p className="text-neutral-500 max-w-sm mb-6">When you place an order, it will show up here.</p>
                        <Link href={route('shop.index')} className="text-accent hover:text-accent-hover font-medium">Start shopping <i className="fa-solid fa-arrow-right ml-1 text-xs"></i></Link>
                    </div>
                );
            case "returns":
                return (
                    <div className="flex flex-col items-center justify-center min-h-[300px] text-center">
                        <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mb-4 text-neutral-400">
                            <i className="fa-solid fa-arrow-rotate-left text-2xl"></i>
                        </div>
                        <h3 className="text-lg font-semibold text-primary mb-2">No returns</h3>
                        <p className="text-neutral-500 max-w-sm">You don't have any active return requests.</p>
                    </div>
                );
            default:
                return <UpdateProfileInformationForm mustVerifyEmail={mustVerifyEmail} status={status} />;
        }
    };

    const getTitle = () => {
        const titles = {
            'account': 'Profile Information',
            'addresses': 'Manage Addresses',
            'password': 'Change Password',
            'orders': 'Order History',
            'returns': 'Returns & Cancellations'
        };
        return titles[active] || 'Profile';
    };

    return (
        <div className="bg-neutral-50/30 min-h-screen pb-24">
            <Head title={getTitle()} />
            <Breadcrumb />

            <div className="container mx-auto px-4 mt-8">
                <div className="flex flex-col md:flex-row gap-8 items-start">

                    {/* Sidebar */}
                    <div className="w-full md:w-1/3 lg:w-1/4">
                        <Sidebar user={user} setActive={setActive} active={active}/>
                    </div>

                    {/* Content Area */}
                    <div className="w-full md:w-2/3 lg:w-3/4">
                        <div className="glass-panel p-6 md:p-10 min-h-[500px]">
                            <div className="mb-8 pb-4 border-b border-neutral-100">
                                <h2 className="text-2xl font-bold text-primary">{getTitle()}</h2>
                                <p className="text-neutral-500 text-sm mt-1">Manage your account settings and preferences.</p>
                            </div>

                            <motion.div
                                key={active}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {renderComponent()}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
