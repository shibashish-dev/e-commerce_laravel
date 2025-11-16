import { Link } from '@inertiajs/react'
import React from 'react'

const Categories = ({ categories }) => {
    return (
        <>
            {/* categories */}
            <div className="container py-16">
                <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">shop by category</h2>
                <div className="grid grid-cols-3 gap-3">

                    {categories?.map((category) => {
                        return (
                            <div key={category.id} className="relative rounded-sm overflow-hidden group object-cover">
                                <img src={category.image} alt={category.title} className="w-full h-full" />
                                <Link href={route('shop.show',category.slug)} className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">{category.name}</Link>
                            </div>
                        )
                    })}

                </div>
            </div>
            {/* ./categories */}
        </>
    )
}

export default Categories
