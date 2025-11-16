import React, { useState } from 'react';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
    const images = [
        'https://picsum.photos/id/237/200/300',
        'https://picsum.photos/200/300',
        'https://picsum.photos/seed/picsum/200/300',
    ];
    return (
        <div className="relative w-full max-w-lg mx-auto">
            <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none"
            >
                Previous
            </button>
            <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex}`}
                className="w-full h-auto"
            />
            <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none"
            >
                Next
            </button>
        </div>
    );
};

export default Carousel;
