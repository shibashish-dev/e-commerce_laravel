import Breadcrumb from "@/Components/Breadcrumb";
import React from "react";

const Article = ({ article }) => {
    return (
        <>
            <Breadcrumb />
            <div className="w-full mx-auto p-5 sm:p-10 md:p-16 relative">
                <div
                    className="bg-cover bg-center text-center overflow-hidden rounded-lg"
                    style={{
                        minHeight: 500,
                        backgroundImage: `url(${article.image})`,
                    }}
                    title="Woman holding a mug"
                ></div>
                <div className="w-3/4 mx-auto">
                    <div className="mt-3 bg-white rounded-lg flex flex-col justify-between leading-normal">
                        <div className="bg-white relative top-0 -mt-32 p-5 sm:p-10 rounded-lg">
                            <h1
                                href="#"
                                className="text-gray-900 font-bold text-3xl mb-2"
                            >
                                {article.title}
                            </h1>
                            <p className="text-gray-700 text-xs mt-2">
                                Written By:{" "}
                                <span className="text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                                    {article.user.name}
                                </span>
                            </p>
                            <p
                                className="text-base leading-8 my-5"
                                dangerouslySetInnerHTML={{
                                    __html: article.content,
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Article;
