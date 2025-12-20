"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "⚡",
    title: "Lightning Fast",
    description: "Optimized performance for the best user experience"
  },
  {
    icon: "🔒",
    title: "Secure",
    description: "Enterprise-grade security for your peace of mind"
  },
  {
    icon: "📱",
    title: "Responsive",
    description: "Perfect experience on any device or screen size"
  },
  {
    icon: "🎨",
    title: "Customizable",
    description: "Tailor every aspect to match your brand"
  },
  {
    icon: "📊",
    title: "Analytics",
    description: "Deep insights into your business metrics"
  },
  {
    icon: "🚀",
    title: "Scalable",
    description: "Grows with your business needs"
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800" id="features">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to build amazing products
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
