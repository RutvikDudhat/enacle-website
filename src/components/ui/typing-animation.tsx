"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TypingAnimationProps {
  words: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseMs?: number;
  loop?: boolean;
}

export function TypingAnimation({
  words,
  className,
  typingSpeed = 80,
  deletingSpeed = 45,
  pauseMs = 1600,
  loop = true,
}: TypingAnimationProps) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");

  useEffect(() => {
    const current = words[wordIndex] ?? "";

    if (phase === "typing") {
      if (displayed.length < current.length) {
        const t = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          typingSpeed
        );
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase("pausing"), pauseMs);
        return () => clearTimeout(t);
      }
    }

    if (phase === "pausing") {
      setPhase("deleting");
    }

    if (phase === "deleting") {
      if (displayed.length > 0) {
        const t = setTimeout(
          () => setDisplayed(displayed.slice(0, -1)),
          deletingSpeed
        );
        return () => clearTimeout(t);
      } else {
        const next = (wordIndex + 1) % words.length;
        if (!loop && next === 0) return;
        setWordIndex(next);
        setPhase("typing");
      }
    }
  }, [displayed, phase, wordIndex, words, typingSpeed, deletingSpeed, pauseMs, loop]);

  return (
    <span className={cn("inline-block", className)}>
      {displayed}
      <span className="ml-0.5 inline-block w-0.5 h-[1em] align-middle bg-current animate-blink" />
    </span>
  );
}
