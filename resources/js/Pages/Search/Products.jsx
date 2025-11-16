import Breadcrumb from "@/Components/Breadcrumb";
import Product from "@/Components/Shop/Product";
import React from "react";

const Products = ({ products, query }) => {
    return (
        <>
            <Breadcrumb />

            <div className="container mx-auto p-4">
                <h2 className="text-xl font-bold mb-4">
                    Search results for "{query}"
                </h2>

                {products.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {products.map((product) => (
                            <Product key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <p>No Results found !</p>
                )}
            </div>
        </>
    );
};

export default Products;
