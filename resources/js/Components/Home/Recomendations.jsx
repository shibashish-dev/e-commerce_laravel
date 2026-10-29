import React from "react";
import Product from "../Shop/Product";

const Recomendations = ({ recomended }) => {
    return (
        <>
            {/* product */}
            <div className="container section-space">
                <h2 className="section-heading uppercase">
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
