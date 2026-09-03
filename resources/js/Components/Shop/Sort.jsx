import React from 'react';

const Sort = ({ onSortChange, onLayoutChange, layout, totalProducts }) => {
    return (
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 pb-4 border-b border-neutral-200 gap-4">
            <p className="text-neutral-500 font-medium">
                Showing <span className="text-primary font-semibold">{totalProducts}</span> products
            </p>

            <div className="flex items-center gap-4 w-full sm:w-auto">
                <div className="relative flex-grow sm:flex-grow-0">
                    <select
                        name="sort"
                        id="sort"
                        onChange={(e) => onSortChange(e.target.value)}
                        className="w-full sm:w-48 appearance-none bg-white border border-neutral-200 text-neutral-700 py-2.5 pl-4 pr-10 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm font-medium"
                    >
                        <option value="">Sort by: Featured</option>
                        <option value="price-low-to-high">Price: Low to High</option>
                        <option value="price-high-to-low">Price: High to Low</option>
                        <option value="latest">Newest Arrivals</option>
                    </select>
                    <i className="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 text-xs pointer-events-none"></i>
                </div>

                <div className="flex bg-neutral-100 p-1 rounded-lg border border-neutral-200/50">
                    <button
                        onClick={() => onLayoutChange('grid')}
                        className={`w-9 h-9 flex items-center justify-center rounded-md transition-all ${
                            layout === 'grid'
                                ? 'bg-white text-primary shadow-sm'
                                : 'text-neutral-400 hover:text-neutral-600'
                        }`}
                        title="Grid View"
                    >
                        <i className="fa-solid fa-border-all"></i>
                    </button>
                    <button
                        onClick={() => onLayoutChange('list')}
                        className={`w-9 h-9 flex items-center justify-center rounded-md transition-all ${
                            layout === 'list'
                                ? 'bg-white text-primary shadow-sm'
                                : 'text-neutral-400 hover:text-neutral-600'
                        }`}
                        title="List View"
                    >
                        <i className="fa-solid fa-list-ul"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sort;
