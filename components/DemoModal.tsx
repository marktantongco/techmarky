"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Product Demo
                  </h2>
                  <button
                    onClick={onClose}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl"
                  >
                    ✕
                  </button>
                </div>
                
                <div className="aspect-video bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl mb-6 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-6xl mb-4">🎬</div>
                    <p className="text-xl font-semibold">Demo Video Placeholder</p>
                    <p className="text-sm opacity-80 mt-2">Interactive demo content goes here</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="text-3xl mb-2">✨</div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Feature 1</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Amazing functionality</p>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="text-3xl mb-2">🎯</div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Feature 2</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Precision targeting</p>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="text-3xl mb-2">⚡</div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Feature 3</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Lightning speed</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <button className="flex-1 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                    Get Started
                  </button>
                  <button
                    onClick={onClose}
                    className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
