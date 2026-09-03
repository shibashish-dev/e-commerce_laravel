import Sidebar from '@/Components/Shop/Sidebar';
import React, { useEffect, useState } from 'react';
import Product from '@/Components/Shop/Product';
import Sort from '@/Components/Shop/Sort';
import { motion } from 'framer-motion';

const Shop = ({ categories, products }) => {
    const [sortedProducts, setSortedProducts] = useState(products);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [layout, setLayout] = useState('grid');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
                sortedArray = [...products];
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
        <div className="bg-neutral-50/30 min-h-screen">
            {/* Page Header */}
            <div className="bg-white border-b border-neutral-200">
                <div className="container mx-auto px-4 py-8 md:py-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">Shop All</h1>
                    <p className="text-neutral-500">Discover our complete collection of premium products.</p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row gap-8 items-start">

                    {/* Mobile Filter Toggle */}
                    <button
                        className="lg:hidden w-full flex items-center justify-between glass-panel p-4 text-primary font-medium"
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    >
                        <span><i className="fa-solid fa-filter mr-2"></i> Filters</span>
                        <i className={`fa-solid fa-chevron-${isSidebarOpen ? 'up' : 'down'}`}></i>
                    </button>

                    {/* Sidebar */}
                    <div className={`w-full lg:w-1/4 ${isSidebarOpen ? 'block' : 'hidden'} lg:block transition-all duration-300`}>
                        <Sidebar categories={categories} handleCategoryFilter={handleCategoryFilter} />
                    </div>

                    {/* Main Content */}
                    <div className="w-full lg:w-3/4">
                        <Sort onSortChange={handleSortChange} onLayoutChange={setLayout} layout={layout} totalProducts={sortedProducts.length} />

                        {sortedProducts.length > 0 ? (
                            <motion.div
                                layout
                                className={`${layout === 'list' ? 'flex flex-col gap-6' : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'}`}
                            >
                                {sortedProducts.map((product, index) => (
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3 }}
                                        key={product.id || index}
                                    >
                                        <Product product={product} layout={layout} />
                                    </motion.div>
                                ))}
                            </motion.div>
                        ) : (
                            <div className="glass-panel p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
                                <div className="w-20 h-20 bg-neutral-100 rounded-full flex items-center justify-center mb-6">
                                    <i className="fa-solid fa-magnifying-glass text-2xl text-neutral-400"></i>
                                </div>
                                <h3 className="text-xl font-semibold text-primary mb-2">No products found</h3>
                                <p className="text-neutral-500 max-w-md">We couldn't find any products matching your current filters. Try adjusting them to see more results.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
