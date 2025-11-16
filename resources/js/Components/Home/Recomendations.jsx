import React from "react";
import Product from "../Shop/Product";

const Recomendations = ({ recomended }) => {
    return (
        <>
            {/* product */}
            <div className="container pb-16">
                <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
                    recomended for you
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {recomended.map((product) => {
                        return <Product key={product.id} product={product} />;
                    })}
                </div>
            </div>
            {/* ./product */}
        </>
    );
};

export default Recomendations;
