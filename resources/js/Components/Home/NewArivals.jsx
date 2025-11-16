import React from 'react'
import Product from '../Shop/Product';
const NewArivals = ({ products }) => {
    return (
        <>
            {/* new arrival */}
            <div className="container pb-16">
                <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">top new arrival</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                    {products?.map((product) => {
                        return (
                            <Product product={product} key={product.id} />
                        )
                    })}
                </div>
            </div>
            {/* ./new arrival */}
        </>
    )
}

export default NewArivals
