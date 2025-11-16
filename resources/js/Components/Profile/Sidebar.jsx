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

            // Upload the image to the server
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
                    title: "Success",
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
                    title: "Error",
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
        <>
            <div className="col-span-3">
                <div className="px-4 py-3 shadow flex items-center gap-4">
                    <div className="relative w-16 h-16">
                        {/* Profile Image */}
                        <img
                            src={preview}
                            alt="profile"
                            className="rounded-full w-16 h-16 border border-gray-200 p-1 object-cover"
                        />
                        {/* Upload Button */}
                        <label
                            htmlFor="avatar-upload"
                            className="absolute bottom-0 right-0 bg-primary text-white rounded-full p-2 cursor-pointer shadow-md hover:bg-blue-600 transition"
                            style={{
                                width: "32px",
                                height: "32px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <i className="fa-solid fa-camera text-xs" />
                        </label>
                        <input
                            type="file"
                            id="avatar-upload"
                            className="hidden"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                    </div>
                    <div className="flex-grow">
                        <p className="text-gray-600">Hello,</p>
                        <h4 className="text-gray-800 font-medium">
                            {user?.name}
                        </h4>
                    </div>
                </div>
                <div className="mt-6 bg-white shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600">
                    <div className="space-y-1 pl-8">
                        <span
                            className={`relative ${
                                ["account", "addresses", "password"].includes(
                                    active
                                )
                                    ? "text-primary"
                                    : ""
                            } block font-medium capitalize transition`}
                        >
                            <span className="absolute -left-8 top-0 text-base">
                                <i className="fa-regular fa-address-card" />
                            </span>
                            Manage account
                        </span>
                        <button
                            onClick={() => setActive("account")}
                            className={`relative ${
                                active === "account" ? "text-primary" : ""
                            } hover:text-primary block capitalize transition`}
                        >
                            Profile information
                        </button>
                        <button
                            onClick={() => setActive("addresses")}
                            className={`relative ${
                                active === "addresses" ? "text-primary" : ""
                            } hover:text-primary block capitalize transition`}
                        >
                            Manage addresses
                        </button>
                        <button
                            onClick={() => setActive("password")}
                            className={`relative ${
                                active === "password" ? "text-primary" : ""
                            } hover:text-primary block capitalize transition`}
                        >
                            Change password
                        </button>
                    </div>

                    <div className="space-y-1 pl-8 pt-4">
                        <span
                            className={`relative ${
                                ["orders", "returns"].includes(active)
                                    ? "text-primary"
                                    : ""
                            } block font-medium capitalize transition`}
                        >
                            <span className="absolute -left-8 top-0 text-base">
                                <i className="fa-solid fa-box-archive" />
                            </span>
                            Order history
                        </span>
                        <button
                            onClick={() => setActive("orders")}
                            className={`relative ${
                                active === "orders" ? "text-primary" : ""
                            } hover:text-primary block capitalize transition`}
                        >
                            My Orders
                        </button>
                        <button
                            onClick={() => setActive("returns")}
                            className={`relative ${
                                active === "returns" ? "text-primary" : ""
                            } hover:text-primary block capitalize transition`}
                        >
                            My returns
                        </button>
                    </div>

                    <div className="space-y-1 pl-8 pt-4">
                        {hasRole(user, "admin") && (
                            <a
                                href={route("admin.index")}
                                target="_blank"
                                className="relative hover:text-primary block font-medium capitalize transition"
                            >
                                <span className="absolute -left-8 top-0 text-base">
                                    <i className="fa-solid fa-user-tie"></i>
                                </span>
                                Admin
                            </a>
                        )}
                        <Link
                            href={route("logout")}
                            method="post"
                            className="text-red-600 relative hover:text-red-800 block font-medium capitalize transition"
                        >
                            <span className="absolute -left-8 top-0 text-base">
                                <i className="fa-solid fa-right-from-bracket" />
                            </span>
                            Logout
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
