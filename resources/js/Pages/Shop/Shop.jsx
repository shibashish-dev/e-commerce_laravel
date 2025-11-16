import Sidebar from '@/Components/Shop/Sidebar'

import React, { useEffect, useState } from 'react'
import Product from '@/Components/Shop/Product';
import Breadcrumb from '@/Components/Breadcrumb';
import Sort from '@/Components/Shop/Sort';
const Shop = ({ categories, products }) => {

    const [sortedProducts, setSortedProducts] = useState(products);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [layout, setLayout] = useState('grid');
    const handleSortChange = (sortType) => {
        let sortedArray = [...products];

        switch (sortType) {
            case 'price-low-to-high':
                sortedArray.sort((a, b) => a.price - b.price);
                break;
            case 'price-high-to-low':
                sortedArray.sort((a, b) => b.price - a.price);
                break;
            case 'latest':
                sortedArray.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
                break;
            default:
                sortedArray = [...products]; // Reset to default order
        }

        setSortedProducts(sortedArray);
    };

    const handleCategoryFilter = (categoryId) => {
        setSelectedCategories((prev) => {
            if (prev.includes(categoryId)) {
                return prev.filter((id) => id !== categoryId);
            } else {
                return [...prev, categoryId];
            }
        });
    };

    useEffect(() => {
        if (selectedCategories.length === 0) {
            setSortedProducts(products);
        } else {
            setSortedProducts(products.filter((item) => selectedCategories.includes(item.category_id)));
        }
    }, [selectedCategories, products]);
    return (
        <>
            {/* breadcrumb */}
            <Breadcrumb />
            {/* ./breadcrumb */}
            {/* shop wrapper */}
            <div className="container grid md:grid-cols-4 grid-cols-2 gap-6 pt-4 pb-16 items-start">

                {/* ShopSidebar */}
                <Sidebar categories={categories} handleCategoryFilter={handleCategoryFilter} />
                {/* /ShopSidebar */}

                {/* products */}
                <div className="col-span-3">
                    {/* Sorting */}
                    <Sort onSortChange={handleSortChange} onLayoutChange={setLayout} layout={layout} />
                    {/* /Sorting */}
                    <div className={`${layout === 'list' ? 'flex flex-col gap-6' : 'grid md:grid-cols-3 grid-cols-2 gap-6'}`}>
                        {sortedProducts.map((product, index) => {
                            return (
                                <Product key={index} product={product} layout={layout} />
                            )
                        })}

                    </div>
                </div>
                {/* ./products */}
            </div>
            {/* ./shop wrapper */}
        </>
    )
}

export default Shop
