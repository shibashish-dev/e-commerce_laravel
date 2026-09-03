import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "@inertiajs/react";
import { hasRole } from "@/Helpers/helper";

const Sidebar = ({ user, active, setActive }) => {
    const [preview, setPreview] = useState(user?.info?.profile || "");

    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);

            const formData = new FormData();
            formData.append("profile", file);

            try {
                const response = await axios.post(
                    route("profile.upload", user.id),
                    formData,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );

                Swal.fire({
                    icon: "success",
                    title: "Updated!",
                    text: response.data.message,
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                });
            } catch (error) {
                console.error("Error uploading image:", error);
                Swal.fire({
                    icon: "error",
                    title: "Upload Failed",
                    text: "An error occurred while uploading the image",
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                });
            }
        }
    };

    return (
        <div className="flex flex-col gap-6 sticky top-28">
            {/* User Info Card */}
            <div className="glass-panel p-6 flex flex-col items-center text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-primary/5 to-transparent"></div>

                <div className="relative mb-4 mt-2">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md bg-neutral-100 flex items-center justify-center text-neutral-400">
                        {preview ? (
                            <img src={preview} alt="Profile" className="w-full h-full object-cover" />
                        ) : (
                            <i className="fa-solid fa-user text-3xl"></i>
                        )}
                    </div>

                    <label
                        htmlFor="avatar-upload"
                        className="absolute bottom-0 right-0 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center cursor-pointer shadow-md hover:bg-primary-light transition-colors border-2 border-white group"
                        title="Upload Photo"
                    >
                        <i className="fa-solid fa-camera text-[10px] group-hover:scale-110 transition-transform"></i>
                    </label>
                    <input
                        type="file"
                        id="avatar-upload"
                        className="hidden"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                </div>

                <h3 className="text-xl font-bold text-primary mb-1">{user?.name || 'User'}</h3>
                <p className="text-sm text-neutral-500">{user?.email}</p>

                {hasRole(user, "admin") && (
                    <span className="mt-3 bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                        Administrator
                    </span>
                )}
            </div>

            {/* Navigation Menu */}
            <div className="glass-panel p-4">
                <nav className="flex flex-col space-y-1">
                    <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2 px-4 mt-2">Account Settings</div>

                    <button
                        onClick={() => setActive("account")}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium ${
                            active === "account" ? "bg-primary/5 text-primary" : "text-neutral-600 hover:bg-neutral-50 hover:text-primary"
                        }`}
                    >
                        <i className={`fa-regular fa-user ${active === "account" ? "text-primary" : "text-neutral-400"}`}></i>
                        Profile Information
                    </button>

                    <button
                        onClick={() => setActive("addresses")}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium ${
                            active === "addresses" ? "bg-primary/5 text-primary" : "text-neutral-600 hover:bg-neutral-50 hover:text-primary"
                        }`}
                    >
                        <i className={`fa-solid fa-location-dot ${active === "addresses" ? "text-primary" : "text-neutral-400"}`}></i>
                        Manage Addresses
                    </button>

                    <button
                        onClick={() => setActive("password")}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium ${
                            active === "password" ? "bg-primary/5 text-primary" : "text-neutral-600 hover:bg-neutral-50 hover:text-primary"
                        }`}
                    >
                        <i className={`fa-solid fa-lock ${active === "password" ? "text-primary" : "text-neutral-400"}`}></i>
                        Change Password
                    </button>

                    <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2 px-4 mt-4 pt-4 border-t border-neutral-100">Order History</div>

                    <button
                        onClick={() => setActive("orders")}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium ${
                            active === "orders" ? "bg-primary/5 text-primary" : "text-neutral-600 hover:bg-neutral-50 hover:text-primary"
                        }`}
                    >
                        <i className={`fa-solid fa-box-open ${active === "orders" ? "text-primary" : "text-neutral-400"}`}></i>
                        My Orders
                    </button>

                    <button
                        onClick={() => setActive("returns")}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium ${
                            active === "returns" ? "bg-primary/5 text-primary" : "text-neutral-600 hover:bg-neutral-50 hover:text-primary"
                        }`}
                    >
                        <i className={`fa-solid fa-arrow-rotate-left ${active === "returns" ? "text-primary" : "text-neutral-400"}`}></i>
                        My Returns
                    </button>

                    <div className="mt-4 pt-4 border-t border-neutral-100">
                        {hasRole(user, "admin") && (
                            <a
                                href={route("admin.index")}
                                target="_blank"
                                className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium text-neutral-600 hover:bg-neutral-50 hover:text-primary"
                            >
                                <i className="fa-solid fa-user-tie text-neutral-400"></i>
                                Admin Dashboard
                                <i className="fa-solid fa-arrow-up-right-from-square ml-auto text-[10px]"></i>
                            </a>
                        )}
                        <Link
                            href={route("logout")}
                            method="post"
                            as="button"
                            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium text-red-500 hover:bg-red-50"
                        >
                            <i className="fa-solid fa-arrow-right-from-bracket"></i>
                            Sign Out
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
