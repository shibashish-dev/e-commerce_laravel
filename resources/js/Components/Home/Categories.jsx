import { Link } from '@inertiajs/react'
import React from 'react'

const Categories = ({ categories }) => {
    return (
        <>
            {/* categories */}
            <div className="container section-space">
                <h2 className="section-heading uppercase">shop by category</h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

                    {categories?.map((category) => {
                        return (
                            <div key={category.id} className="glass-surface gold-glint group relative aspect-[4/3] overflow-hidden rounded-2xl">
                                <img src={category.image} alt={category.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                                <Link href={route('shop.show',category.slug)} className="absolute inset-0 flex items-end bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent p-5 text-lg font-semibold text-white transition group-hover:from-slate-950/95 sm:p-7 sm:text-2xl">{category.name}</Link>
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
