import React, { use, useState } from 'react'
import ReorderIcon from '@mui/icons-material/Reorder';
import { useSelector } from 'react-redux';

const Sidebar = ({ categories,handleCategoryFilter }) => {
    console.log(categories)
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };


    return (
        <>
            {/* sidebar */}
            {/* drawer init and toggle */}
            <div className="text-center md:hidden">
                <button
                    className="text-white bg-primary hover:bg-primary focus:ring-4 focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary dark:hover:bg-primary focus:outline-none dark:focus:ring-primary block md:hidden"
                    type="button"
                    onClick={toggleDrawer}
                >
                    <ReorderIcon />
                </button>
            </div>
            {/* drawer component */}
            <div
                id="drawer-example"
                className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'} bg-white w-80`}
                tabIndex={-1}
                aria-labelledby="drawer-label"
            >
                <h5
                    id="drawer-label"
                    className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
                >
                    <svg
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clipRule="evenodd"
                        />
                    </svg>
                    Filter
                </h5>
                <button
                    type="button"
                    onClick={toggleDrawer}
                    aria-controls="drawer-example"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                    <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <span className="sr-only">Close menu</span>
                </button>
                <div className="divide-y divide-gray-200 space-y-5">
                    <div>
                        <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                            Categories
                        </h3>

                        <div className="space-y-2">
                            {categories.map((category) => (
                                <div key={category.id} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        name="category"
                                        id={`category-${category.id}`}
                                        className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                                    />
                                    <label
                                        htmlFor={`category-${category.id}`}
                                        className="text-gray-600 ml-3 cursor-pointer"
                                    >
                                        {category.name}
                                    </label>
                                    <div className="ml-auto text-gray-600 text-sm">({category.products.length})</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="pt-4">
                        <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                            Brands
                        </h3>
                        <div className="space-y-2">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="brand-1"
                                    id="brand-1"
                                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                                />
                                <label
                                    htmlFor="brand-1"
                                    className="text-gray-600 ml-3 cusror-pointer"
                                >
                                    Cooking Color
                                </label>
                                <div className="ml-auto text-gray-600 text-sm">(15)</div>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="brand-2"
                                    id="brand-2"
                                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                                />
                                <label
                                    htmlFor="brand-2"
                                    className="text-gray-600 ml-3 cusror-pointer"
                                >
                                    Magniflex
                                </label>
                                <div className="ml-auto text-gray-600 text-sm">(9)</div>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="brand-3"
                                    id="brand-3"
                                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                                />
                                <label
                                    htmlFor="brand-3"
                                    className="text-gray-600 ml-3 cusror-pointer"
                                >
                                    Ashley
                                </label>
                                <div className="ml-auto text-gray-600 text-sm">(21)</div>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="brand-4"
                                    id="brand-4"
                                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                                />
                                <label
                                    htmlFor="brand-4"
                                    className="text-gray-600 ml-3 cusror-pointer"
                                >
                                    M&amp;D
                                </label>
                                <div className="ml-auto text-gray-600 text-sm">(10)</div>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="brand-5"
                                    id="brand-5"
                                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                                />
                                <label
                                    htmlFor="brand-5"
                                    className="text-gray-600 ml-3 cusror-pointer"
                                >
                                    Olympic
                                </label>
                                <div className="ml-auto text-gray-600 text-sm">(10)</div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-4">
                        <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                            Price
                        </h3>
                        <div className="mt-4 flex items-center">
                            <input
                                type="text"
                                name="min"
                                id="min"
                                className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
                                placeholder="min"
                            />
                            <span className="mx-3 text-gray-500">-</span>
                            <input
                                type="text"
                                name="max"
                                id="max"
                                className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
                                placeholder="max"
                            />
                        </div>
                    </div>
                </div>

            </div>
            {/* ./sidebar */}
            <div className="col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hiddenb hidden md:block">
                <div className="divide-y divide-gray-200 space-y-5">
                    <div>
                        <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                            Categories
                        </h3>
                        <div className="space-y-2">
                            {categories.map((category) => {
                                return (
                                    <div key={category.id} className="flex items-center">
                                        <input
                                            type="checkbox"
                                            name="category"
                                            id={`category-${category.id}`}
                                            onChange={() => handleCategoryFilter(category.id)}
                                            className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                                        />
                                        <label
                                            htmlFor={`category-${category.id}`}
                                            className="text-gray-600 ml-3 cusror-pointer"
                                        >
                                            {category.name}
                                        </label>
                                        <div className="ml-auto text-gray-600 text-sm">({category.products.length})</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="pt-4">
                        <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                            Brands
                        </h3>
                        <div className="space-y-2">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="brand-1"
                                    id="brand-1"
                                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                                />
                                <label
                                    htmlFor="brand-1"
                                    className="text-gray-600 ml-3 cusror-pointer"
                                >
                                    Cooking Color
                                </label>
                                <div className="ml-auto text-gray-600 text-sm">(15)</div>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="brand-2"
                                    id="brand-2"
                                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                                />
                                <label
                                    htmlFor="brand-2"
                                    className="text-gray-600 ml-3 cusror-pointer"
                                >
                                    Magniflex
                                </label>
                                <div className="ml-auto text-gray-600 text-sm">(9)</div>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="brand-3"
                                    id="brand-3"
                                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                                />
                                <label
                                    htmlFor="brand-3"
                                    className="text-gray-600 ml-3 cusror-pointer"
                                >
                                    Ashley
                                </label>
                                <div className="ml-auto text-gray-600 text-sm">(21)</div>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="brand-4"
                                    id="brand-4"
                                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                                />
                                <label
                                    htmlFor="brand-4"
                                    className="text-gray-600 ml-3 cusror-pointer"
                                >
                                    M&amp;D
                                </label>
                                <div className="ml-auto text-gray-600 text-sm">(10)</div>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="brand-5"
                                    id="brand-5"
                                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                                />
                                <label
                                    htmlFor="brand-5"
                                    className="text-gray-600 ml-3 cusror-pointer"
                                >
                                    Olympic
                                </label>
                                <div className="ml-auto text-gray-600 text-sm">(10)</div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-4">
                        <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                            Price
                        </h3>
                        <div className="mt-4 flex items-center">
                            <input
                                type="text"
                                name="min"
                                id="min"
                                className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
                                placeholder="min"
                            />
                            <span className="mx-3 text-gray-500">-</span>
                            <input
                                type="text"
                                name="max"
                                id="max"
                                className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
                                placeholder="max"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Sidebar
