"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  "/slider1.jpg",
  "/slider2.jpg",
  "/slider3.jpg",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(slider);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative w-full h-[85vh] overflow-hidden">
      {/* Image */}
      <Image
        src={slides[current]}
        alt="hero"
        fill
        priority
        className="object-cover duration-700"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 z-20 text-white"
      >
        <ChevronLeft size={40} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 z-20 text-white"
      >
        <ChevronRight size={40} />
      </button>

      {/* Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="text-center px-6 max-w-4xl">
          <h1 className="text-white font-bold text-4xl md:text-7xl leading-tight">
            Get Started Digital
            <br />
            Learning
          </h1>

          <p className="text-gray-200 mt-6 text-sm md:text-lg">
            It is a long established fact that a reader
            will be distracted by the readable content
            of a page when looking at its layout.
          </p>

          <button className="mt-8 bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-md font-semibold">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}