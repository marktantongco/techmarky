"use client";

import { useState, useEffect } from "react";

interface TypingTextProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

export default function TypingText({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 2000,
}: TypingTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setDisplayText(texts[0]);
      return;
    }

    const currentText = texts[textIndex];

    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseTime);
      return () => clearTimeout(pauseTimeout);
    }

    if (!isDeleting && displayText === currentText) {
      setIsPaused(true);
      return;
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setDisplayText((prev) =>
          isDeleting
            ? currentText.substring(0, prev.length - 1)
            : currentText.substring(0, prev.length + 1)
        );
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, isPaused, textIndex, texts, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className="gradient-text inline-block">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
}
