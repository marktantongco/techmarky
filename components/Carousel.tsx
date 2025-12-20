"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const slides = [
  {
    id: 1,
    title: "Innovation at Scale",
    description: "Building the future of technology, one solution at a time",
    emoji: "🚀",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "Customer Success",
    description: "Your success is our mission. We're here to help you grow",
    emoji: "🎯",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    title: "Global Impact",
    description: "Making a difference in communities around the world",
    emoji: "🌍",
    color: "from-green-500 to-teal-500"
  },
  {
    id: 4,
    title: "Expert Team",
    description: "World-class professionals dedicated to your vision",
    emoji: "👥",
    color: "from-orange-500 to-red-500"
  }
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = slides.length - 1;
      if (nextIndex >= slides.length) nextIndex = 0;
      return nextIndex;
    });
  };

  return (
    <section className="py-20 bg-gray-900 overflow-hidden" id="carousel">
      <div className="container mx-auto px-4">
        <div className="relative h-96 flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className={`absolute w-full max-w-4xl bg-gradient-to-r ${slides[currentIndex].color} rounded-2xl p-12 text-white text-center shadow-2xl`}
            >
              <div className="text-8xl mb-6">{slides[currentIndex].emoji}</div>
              <h3 className="text-4xl font-bold mb-4">{slides[currentIndex].title}</h3>
              <p className="text-xl opacity-90">{slides[currentIndex].description}</p>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={() => paginate(-1)}
            className="absolute left-4 z-10 p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <span className="text-2xl">←</span>
          </button>
          
          <button
            onClick={() => paginate(1)}
            className="absolute right-4 z-10 p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <span className="text-2xl">→</span>
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex
                  ? "bg-white"
                  : "bg-gray-600 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
