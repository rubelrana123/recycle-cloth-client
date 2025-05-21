import React from "react";

import { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Leaf,
  Recycle,
  ShoppingBag,
} from "lucide-react";
import img1 from "../../../asserts/bannerImage/Banner1.jpg";
import img2 from "../../../asserts/bannerImage/banner2.jpg";
import img3 from "../../../asserts/bannerImage/banner3.jpg";

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef(null);

  const slides = [
    {
      id: 1,
      image: img2,
      title: "Sustainable Fashion",
      subtitle: "Buy and Sell Pre-loved Clothing",
      cta: "Shop Now",
      icon: <ShoppingBag className="mr-2" size={20} />,
    },
    {
      id: 2,
      image: img1,
      title: "Reduce Textile Waste",
      subtitle: "Join Our Eco-friendly Mission",
      cta: "Learn More",
      icon: <Recycle className="mr-2" size={20} />,
    },
    {
      id: 3,
      image: img3,
      title: "Quality Guaranteed",
      subtitle: "Carefully Inspected Second-hand Clothing",
      cta: "See Products",
      icon: <Leaf className="mr-2" size={20} />,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = setInterval(nextSlide, 5000);
    }
  };

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(nextSlide, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying]);

  const pauseAutoPlay = () => setIsAutoPlaying(false);
  const resumeAutoPlay = () => setIsAutoPlaying(true);

  return (
    <div
      className="relative h-[calc(100vh-80px)]  overflow-hidden bg-teal-900 mt-12"
      onMouseEnter={pauseAutoPlay}
      onMouseLeave={resumeAutoPlay}
    >
      {/* Slides */}
      <div className="h-full relative">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 to-transparent z-10"></div>
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center z-20 px-8 md:px-16">
              <div className="max-w-lg">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8">
                  {slide.subtitle}
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-emerald-500 hover:bg-emerald-600 text-white py-3 px-6 rounded-md flex items-center transition duration-300 transform hover:scale-105">
                    {slide.icon}
                    {slide.cta}
                  </button>
                  <button className="bg-transparent border-2 border-white text-white py-3 px-6 rounded-md hover:bg-white/10 transition duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-30 transition duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-30 transition duration-300"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-emerald-500 w-8"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
