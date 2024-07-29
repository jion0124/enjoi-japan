'use client';

import { useState, useEffect } from 'react';

const images = [
  "/images/first_view1.jpg",
  "/images/first_view2.jpg",
  "/images/first_view3.jpg"
];

const FirstView = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isColor, setIsColor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsColor(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 200);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsColor(true);
    }, 1000);
  }, [currentIndex]);

  useEffect(() => {
    setIsColor(false);
  }, []);

  return (
    <div className="relative h-screen bg-gray-900 flex flex-col items-center justify-center overflow-hidden">
      {images.map((image, index) => (
        <div 
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out
            ${currentIndex === index ? 'opacity-100 grayscale fade-in' : 'opacity-0 fade-out'}
            ${currentIndex === index && isColor ? 'grayscale-0' : 'grayscale'}`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}
      <div 
        id="first-view-text" 
        className="relative text-center text-white transition container mx-auto z-10 slide-in-up"
      >
        <h1 className="heading07 font-middle" data-en="Diversity">多様性が未来を創る</h1>
      </div>
    </div>
  );
};

export default FirstView;
