import { Head, Link } from "@inertiajs/react";
import React, { useState } from "react";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";

import Sidebar from "@/Components/Profile/Sidebar";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import AddressForm from "./Partials/AddressForm";

const Profile = ({ user, mustVerifyEmail, status }) => {
    const [active, setActive] = useState("account");

    const renderComponent = () => {
        switch (active) {
            case "account":
                return (
                    <UpdateProfileInformationForm
                        mustVerifyEmail={mustVerifyEmail}
                        status={status}
                        className="w-full"
                    />
                );
            case "addresses":
                return  <AddressForm />;
            case "password":
                return <UpdatePasswordForm className="w-full" />;
            case "orders":
                return <div className="p-6">Order History Content</div>;
            case "returns":
                return <div className="p-6">Returns Content</div>;
            default:
                return (
                    <UpdateProfileInformationForm
                        mustVerifyEmail={mustVerifyEmail}
                        status={status}
                    />
                );
        }
    };

    return (
        <>
            <Head title="Profile" />
            <div className="py-6">
                {/* breadcrumb */}
                <div className="container py-4 flex items-center gap-3">
                    <Link
                        href={route("home")}
                        className="text-primary text-base"
                    >
                        <i className="fa-solid fa-house" />
                    </Link>
                    <span className="text-sm text-gray-400">
                        <i className="fa-solid fa-chevron-right" />
                    </span>
                    <p className="text-gray-600 font-medium">Profile</p>
                </div>
                {/* ./breadcrumb */}
                {/* wrapper */}
                <div className="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">
                    {/* sidebar */}
                    <Sidebar user={user} setActive={setActive} active={active}/>
                    {/* ./sidebar */}
                    {/* info */}
                    <div className="col-span-9 shadow rounded px-6 pt-5 pb-7">
                        {/* <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="w-full"
                        /> */}

                        {renderComponent()}
                    </div>
                    {/* ./info */}
                </div>
                {/* ./wrapper */}
            </div>
        </>
    );
};

export default Profile;
