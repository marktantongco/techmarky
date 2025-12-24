"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Tilt from "react-parallax-tilt";

interface Card3DProps {
  icon: string;
  title: string;
  description: string;
  details: string;
  delay?: number;
}

export default function Card3D({ icon, title, description, details, delay = 0 }: Card3DProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="h-80"
    >
      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        perspective={1000}
        scale={1.02}
        transitionSpeed={1500}
        gyroscope={true}
        glareEnable={true}
        glareMaxOpacity={0.2}
        glareColor="#a855f7"
        glarePosition="all"
        className="h-full"
      >
        <div 
          className="relative w-full h-full cursor-pointer preserve-3d"
          onClick={() => setIsFlipped(!isFlipped)}
        >
          {/* Front of Card */}
          <motion.div
            className={`absolute inset-0 glass-strong rounded-2xl p-8 flex flex-col items-center justify-center text-center backface-hidden ${
              isFlipped ? "rotate-y-180" : ""
            }`}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            style={{ backfaceVisibility: "hidden" }}
          >
            <motion.div 
              className="text-7xl mb-6"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              {icon}
            </motion.div>
            <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
            <p className="text-gray-300 leading-relaxed">{description}</p>
            
            <motion.div 
              className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <span className="text-cyan-400 text-sm">Click to flip</span>
            </motion.div>
          </motion.div>

          {/* Back of Card */}
          <motion.div
            className={`absolute inset-0 glass-strong rounded-2xl p-8 flex flex-col items-center justify-center text-center bg-gradient-to-br from-purple-500/20 to-cyan-500/20 ${
              isFlipped ? "" : "rotate-y-180"
            }`}
            animate={{ rotateY: isFlipped ? 0 : -180 }}
            transition={{ duration: 0.6, type: "spring" }}
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          >
            <h3 className="text-2xl font-bold mb-4 gradient-text">{title}</h3>
            <p className="text-gray-200 leading-relaxed mb-6">{details}</p>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-6 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-full font-semibold"
            >
              Learn More →
            </motion.button>
            
            <motion.div 
              className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <span className="text-cyan-400 text-sm">Click to flip back</span>
            </motion.div>
          </motion.div>
        </div>
      </Tilt>
    </motion.div>
  );
}
