import React from 'react';

const Sidebar = ({ categories, handleCategoryFilter }) => {
    return (
        <div className="glass-panel p-6 sticky top-28">
            <div className="space-y-8">
                {/* Categories */}
                <div>
                    <h3 className="text-lg font-bold text-primary mb-4 pb-2 border-b border-neutral-100">
                        Categories
                    </h3>
                    <div className="space-y-3 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                        {categories?.map((category) => (
                            <label key={category.id} className="flex items-center group cursor-pointer">
                                <div className="relative flex items-center justify-center">
                                    <input
                                        type="checkbox"
                                        id={`category-${category.id}`}
                                        onChange={() => handleCategoryFilter(category.id)}
                                        className="peer appearance-none w-5 h-5 border border-neutral-300 rounded bg-white checked:bg-primary checked:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all cursor-pointer"
                                    />
                                    <i className="fa-solid fa-check absolute text-white text-[10px] opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity"></i>
                                </div>
                                <span className="ml-3 text-neutral-600 group-hover:text-primary transition-colors flex-grow select-none">
                                    {category.name}
                                </span>
                                <span className="text-xs bg-neutral-100 text-neutral-500 py-0.5 px-2 rounded-full">
                                    {category.products?.length || 0}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Price Range */}
                <div>
                    <h3 className="text-lg font-bold text-primary mb-4 pb-2 border-b border-neutral-100">
                        Price Range
                    </h3>
                    <div className="flex items-center gap-3">
                        <div className="relative flex-1">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">$</span>
                            <input
                                type="number"
                                placeholder="Min"
                                className="w-full pl-7 pr-3 py-2 bg-white border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm"
                            />
                        </div>
                        <span className="text-neutral-400">-</span>
                        <div className="relative flex-1">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">$</span>
                            <input
                                type="number"
                                placeholder="Max"
                                className="w-full pl-7 pr-3 py-2 bg-white border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm"
                            />
                        </div>
                    </div>
                </div>

                 {/* Brands Mock - Optional but keeps structure */}
                 <div>
                    <h3 className="text-lg font-bold text-primary mb-4 pb-2 border-b border-neutral-100">
                        Brands
                    </h3>
                    <div className="space-y-3">
                        {['Premium Co.', 'Essentials', 'Luxe', 'Modern Minimal'].map((brand, idx) => (
                             <label key={idx} className="flex items-center group cursor-pointer">
                                <div className="relative flex items-center justify-center">
                                    <input
                                        type="checkbox"
                                        className="peer appearance-none w-5 h-5 border border-neutral-300 rounded bg-white checked:bg-primary checked:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all cursor-pointer"
                                    />
                                    <i className="fa-solid fa-check absolute text-white text-[10px] opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity"></i>
                                </div>
                                <span className="ml-3 text-neutral-600 group-hover:text-primary transition-colors flex-grow select-none">
                                    {brand}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
