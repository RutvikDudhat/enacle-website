"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
}

export function VideoModal({ isOpen, onClose, videoUrl = "https://www.youtube.com/embed/7kIVfVY8r3A" }: VideoModalProps) {
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Video container */}
            <div className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src={videoUrl}
                title="Product Demo Video"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
