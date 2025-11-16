import React, { useState } from "react";
import { Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ProductCard from "@/Components/Shop/Product";
import Breadcrumb from "@/Components/Breadcrumb";
import { useCart } from "react-use-cart";
import Toast from "@/Components/Toast";
import { useWishlist } from "react-use-wishlist";

const Product = ({ product }) => {
    const [mainImage, setMainImage] = useState(product.image);
    const [alert, setAlert] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const gallery = JSON.parse(product?.gallery);
    const { addItem } = useCart();
    const { addWishlistItem } = useWishlist();
    const addToCart = () => {
        addItem({ ...product }, quantity);
        setAlert(true);

        setTimeout(() => {
            setAlert(false);
        }, 3000);
    };

    const increaseQuantity = () => {
        setQuantity((prev) => prev + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
    };
    console.log(product);
    return (
        <>
            {/* breadcrumb */}
            <Breadcrumb />
            <Toast
                open={alert}
                message={"Item added to cart"}
                severity="success"
                display={alert ? "block" : "none"}
            />
            {/* ./breadcrumb */}
            {/* product-detail */}
            <div className="container grid grid-cols-2 gap-6">
                <div>
                    <img
                        src={mainImage}
                        alt={product.title}
                        className="w-full"
                    />
                    <div className="grid grid-cols-5 gap-4 mt-4">
                        {gallery?.map((image, index) => {
                            return (
                                <img
                                    key={index}
                                    src={image}
                                    alt={product.title}
                                    className={`w-full cursor-pointer border ${
                                        mainImage === image
                                            ? "border-blue-500"
                                            : ""
                                    }`}
                                    onClick={() => setMainImage(image)}
                                />
                            );
                        })}
                    </div>
                </div>
                <div>
                    <h2 className="text-3xl font-medium uppercase mb-2">
                        {product.title}
                    </h2>
                    <div className="flex items-center mb-4">
                        <div className="flex gap-1 text-sm text-yellow-400">
                            <Rating
                                name="text-feedback"
                                value={4.5}
                                readOnly
                                precision={0.5}
                                emptyIcon={
                                    <StarIcon
                                        style={{ opacity: 0.55 }}
                                        fontSize="inherit"
                                    />
                                }
                            />
                        </div>
                        <div className="text-xs text-gray-500 ml-3">
                            (150 Reviews)
                        </div>
                    </div>
                    <div className="space-y-2">
                        <p className="text-gray-800 font-semibold space-x-2">
                            <span>Availability: </span>
                            {product.stock > 0 ? (
                                <span className="text-green-600">In Stock</span>
                            ) : (
                                <span className="text-red-600">
                                    Out of Stock
                                </span>
                            )}
                        </p>
                        <p className="space-x-2">
                            <span className="text-gray-800 font-semibold">
                                Brand:{" "}
                            </span>
                            <span className="text-gray-600">Apex</span>
                        </p>
                        <p className="space-x-2">
                            <span className="text-gray-800 font-semibold">
                                Category:{" "}
                            </span>
                            <span className="text-gray-600">
                                {product.category.name}
                            </span>
                        </p>
                        <p className="space-x-2">
                            <span className="text-gray-800 font-semibold">
                                SKU:{" "}
                            </span>
                            <span className="text-gray-600 uppercase">
                                {product.sku}
                            </span>
                        </p>
                    </div>
                    <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
                        <p className="text-xl text-primary font-semibold">
                            {parseFloat(product.price).toFixed(2)}
                        </p>
                        <p className="text-base text-gray-400 line-through">
                            {parseFloat(product.price).toFixed(2)}
                        </p>
                    </div>
                    <p className="mt-4 text-gray-600">{product.description}</p>

                    <div className="pt-4">
                        <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                            Color
                        </h3>
                        <div className="flex items-center gap-2">
                            <div className="color-selector">
                                <input
                                    type="radio"
                                    name="color"
                                    id="red"
                                    className="hidden"
                                />
                                <label
                                    htmlFor="red"
                                    className="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
                                    style={{ backgroundColor: "#fc3d57" }}
                                />
                            </div>
                            <div className="color-selector">
                                <input
                                    type="radio"
                                    name="color"
                                    id="black"
                                    className="hidden"
                                />
                                <label
                                    htmlFor="black"
                                    className="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
                                    style={{ backgroundColor: "#000" }}
                                />
                            </div>
                            <div className="color-selector">
                                <input
                                    type="radio"
                                    name="color"
                                    id="white"
                                    className="hidden"
                                />
                                <label
                                    htmlFor="white"
                                    className="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
                                    style={{ backgroundColor: "#fff" }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <h3 className="text-sm text-gray-800 uppercase mb-1">
                            Quantity
                        </h3>
                        <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
                            <button
                                onClick={decreaseQuantity}
                                className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
                            >
                                -
                            </button>
                            <div className="h-8 w-8 text-base flex items-center justify-center">
                                {quantity}
                            </div>
                            <button
                                onClick={increaseQuantity}
                                className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
                            >
                                +
                            </button>
                        </div>
                    </div>
                    <div className="mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5">
                        <button
                            onClick={() => addToCart(product)}
                            className="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition"
                        >
                            <i className="fa-solid fa-bag-shopping" /> Add to
                            cart
                        </button>
                        <button
                            onClick={() => addWishlistItem(product)}
                            className="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition"
                        >
                            <i className="fa-solid fa-heart" /> Wishlist
                        </button>
                    </div>
                    <div className="flex gap-3 mt-4">
                        <a
                            href="#"
                            className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
                        >
                            <i className="fa-brands fa-facebook-f" />
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
                        >
                            <i className="fa-brands fa-twitter" />
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
                        >
                            <i className="fa-brands fa-instagram" />
                        </a>
                    </div>
                </div>
            </div>
            {/* ./product-detail */}

            {/* description */}
            <div className="container pb-16">
                <h3 className="border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium">
                    Product details
                </h3>
                <div className="w-3/5 pt-6">
                    <div className="text-gray-600">
                        <p
                            dangerouslySetInnerHTML={{
                                __html: product.description,
                            }}
                        />
                    </div>
                    <table className="table-auto border-collapse w-full text-left text-gray-600 text-sm mt-6">
                        <tbody>
                            <tr>
                                <th className="py-2 px-4 border border-gray-300 w-40 font-medium">
                                    Weight
                                </th>
                                <th className="py-2 px-4 border border-gray-300 ">
                                    {product.weight}kg
                                </th>
                            </tr>
                            <tr>
                                <th className="py-2 px-4 border border-gray-300 w-40 font-medium">
                                    Height
                                </th>
                                <th className="py-2 px-4 border border-gray-300 ">
                                    {product.height}cm
                                </th>
                            </tr>
                            <tr>
                                <th className="py-2 px-4 border border-gray-300 w-40 font-medium">
                                    Width
                                </th>
                                <th className="py-2 px-4 border border-gray-300 ">
                                    {product.width}cm
                                </th>
                            </tr>
                            <tr>
                                <th className="py-2 px-4 border border-gray-300 w-40 font-medium">
                                    Length
                                </th>
                                <th className="py-2 px-4 border border-gray-300 ">
                                    {product.length}cm
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {/* ./description */}

            {/* related product */}
            <div className="container pb-16">
                <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
                    Related products
                </h2>

                <div className="grid grid-cols-4 gap-6">
                    {product?.related_products.map((item) => {
                        return (
                            <ProductCard
                                product={item}
                                layout={"grid"}
                                key={item.id}
                            />
                        );
                    })}
                </div>
            </div>
            {/* ./related product */}
        </>
    );
};

export default Product;
