"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ShinyButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function ShinyButton({ children, className, onClick }: ShinyButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className={cn(
        "relative overflow-hidden rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600",
        "px-8 py-4 font-semibold text-white shadow-lg",
        "transition-all duration-300 ease-out",
        "hover:shadow-xl hover:scale-105",
        "focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2",
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Shiny overlay */}
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      {/* Gradient background animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient-x bg-[length:200%_auto]" />
      
      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </motion.button>
  );
}
