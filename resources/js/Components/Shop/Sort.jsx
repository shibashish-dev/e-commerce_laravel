import React from 'react';

const Sort = ({ onSortChange, onLayoutChange, layout }) => {
    const handleSortChange = (event) => {
        onSortChange(event.target.value);
    };

    return (
        <div className="glass-surface mb-5 flex items-center rounded-2xl p-3 sm:p-4">
            <select
                name="sort"
                id="sort"
                onChange={handleSortChange}
                className="w-44 text-sm text-gray-600 py-3 px-4 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary"
            >
                <option value="">Default sorting</option>
                <option value="price-low-to-high">Price low to high</option>
                <option value="price-high-to-low">Price high to low</option>
                <option value="latest">Latest product</option>
            </select>
            <div className="flex gap-2 ml-auto">
                {/* Grid View Button */}
                <div
                    onClick={() => onLayoutChange('grid')}
                    role="button"
                    aria-label="Grid view"
                    className={`border w-10 h-9 flex items-center justify-center rounded-lg cursor-pointer transition ${
                        layout === 'grid' ? 'bg-primary text-white border-primary' : 'border-gray-300 text-gray-600'
                    }`}
                >
                    <i className="fa-solid fa-grip-vertical" />
                </div>
                {/* List View Button */}
                <div
                    onClick={() => onLayoutChange('list')}
                    role="button"
                    aria-label="List view"
                    className={`border w-10 h-9 flex items-center justify-center rounded-lg cursor-pointer transition ${
                        layout === 'list' ? 'bg-primary text-white border-primary' : 'border-gray-300 text-gray-600'
                    }`}
                >
                    <i className="fa-solid fa-list" />
                </div>
            </div>
        </div>
    );
};

export default Sort;
