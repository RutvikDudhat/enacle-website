"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageSliderProps {
  images: {
    src: string;
    alt: string;
    label?: string;
  }[];
  beforeLabel?: string;
  afterLabel?: string;
}

export function ImageSlider({ images, beforeLabel = "Before", afterLabel = "After" }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Main Slider Container */}
      <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
        {/* Before/After Comparison */}
        <div
          ref={containerRef}
          className="relative aspect-[16/10] cursor-ew-resize select-none"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onTouchStart={handleMouseDown}
          onTouchEnd={handleMouseUp}
        >
          {/* Before Image (Background) */}
          <div className="absolute inset-0">
            <Image
              src={images[currentIndex]?.src || "/placeholder.png"}
              alt={beforeLabel}
              fill
              className="object-cover object-left"
              priority
            />
            <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
              {beforeLabel}
            </div>
          </div>

          {/* After Image (Clipped) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <div className="relative w-full h-full">
              <Image
                src={images[(currentIndex + 1) % images.length]?.src || "/placeholder.png"}
                alt={afterLabel}
                fill
                className="object-cover object-left"
                priority
              />
            </div>
            <div className="absolute top-4 right-4 bg-gradient-to-r from-violet-600 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              {afterLabel}
            </div>
          </div>

          {/* Slider Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
            style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-violet-500">
              <div className="flex gap-0.5">
                <ChevronLeft className="w-4 h-4 text-violet-600" />
                <ChevronRight className="w-4 h-4 text-violet-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between p-4 bg-gray-50 border-t border-gray-200">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all border border-gray-200"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          
          <div className="flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-violet-600 w-6"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all border border-gray-200"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Labels */}
      <div className="flex justify-between mt-4 text-sm text-gray-500">
        <span>Drag slider to compare</span>
        <span>
          {currentIndex + 1} / {images.length}
        </span>
      </div>
    </div>
  );
}
