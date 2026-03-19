"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface LaptopMockupProps {
  imageSrc: string;
  alt: string;
  className?: string;
}

export function LaptopMockup({ imageSrc, alt, className = "" }: LaptopMockupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`relative ${className}`}
    >
      {/* Laptop Frame */}
      <div className="relative mx-auto border-gray-800 bg-gray-900 border-8 rounded-t-xl h-72 max-w-2xl md:h-96 md:max-w-3xl shadow-2xl">
        {/* Screen */}
        <div className="h-full w-full bg-gray-900 rounded-lg overflow-hidden relative">
          <Image
            src={imageSrc}
            alt={alt}
            fill
            className="object-cover object-top"
            priority
          />
        </div>
      </div>
      
      {/* Laptop Base */}
      <div className="relative mx-auto bg-gray-800 rounded-b-xl h-5 max-w-3xl md:h-6 md:max-w-4xl">
        {/* Trackpad area */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-24 h-3 bg-gray-700 rounded-b-lg md:w-28" />
      </div>
      
      {/* Shadow */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[90%] h-8 bg-black/20 blur-xl rounded-full" />
    </motion.div>
  );
}

interface PhoneMockupProps {
  imageSrc: string;
  alt: string;
  className?: string;
}

export function PhoneMockup({ imageSrc, alt, className = "" }: PhoneMockupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: -5 }}
      whileInView={{ opacity: 1, y: 0, rotate: -5 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className={`relative ${className}`}
    >
      {/* Phone Frame */}
      <div className="relative w-48 h-96 bg-gray-900 rounded-[40px] p-2 shadow-2xl border-4 border-gray-800">
        {/* Notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-6 bg-gray-900 rounded-full z-10" />
        
        {/* Screen */}
        <div className="w-full h-full bg-white rounded-4xl overflow-hidden relative">
          <Image
            src={imageSrc}
            alt={alt}
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-gray-700 rounded-full" />
      </div>
      
      {/* Shadow */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-8 bg-black/20 blur-xl rounded-full" />
    </motion.div>
  );
}

interface FloatingCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function FloatingCard({ children, className = "", delay = 0 }: FloatingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.02 }}
      className={`absolute backdrop-blur-xl bg-white/80 border border-white/20 rounded-2xl shadow-xl p-4 ${className}`}
    >
      {children}
    </motion.div>
  );
}
