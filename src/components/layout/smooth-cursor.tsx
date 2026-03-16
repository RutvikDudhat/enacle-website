"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function SmoothCursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [isFine, setIsFine] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 400, damping: 32, mass: 0.4 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    setIsFine(window.matchMedia("(pointer: fine)").matches);
  }, []);

  useEffect(() => {
    if (!isFine) return;

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);
    };

    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setHovering(!!target.closest("a, button, [role='button'], input, textarea, select, label, [tabindex]"));
    };

    const hide = () => setVisible(false);

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    window.addEventListener("mouseleave", hide, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mouseleave", hide);
    };
  }, [mouseX, mouseY, isFine]);

  if (!isFine) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999]"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.div
          animate={{ scale: hovering ? 1.8 : 1, opacity: visible ? 0.8 : 0 }}
          transition={{ duration: 0.15 }}
          style={{ borderColor: hovering ? "#f59e0b" : "#0f172a" }}
          className="w-7 h-7 rounded-full border-2"
        />
      </motion.div>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999]"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.div
          animate={{ scale: hovering ? 0 : 1, opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.12 }}
          className="w-1.5 h-1.5 rounded-full bg-slate-900"
        />
      </motion.div>
    </>
  );
}
