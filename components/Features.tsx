"use client";

import { motion } from "framer-motion";
import Card3D from "./Card3D";

const features = [
  {
    icon: "⚡",
    title: "Lightning Fast",
    description: "Optimized performance for the best user experience",
    details: "Built with Next.js 15 for blazing-fast load times. GPU-accelerated animations ensure smooth 60fps interactions across all devices."
  },
  {
    icon: "🔒",
    title: "Secure",
    description: "Enterprise-grade security for your peace of mind",
    details: "Industry-standard encryption, secure authentication, and regular security audits keep your data protected 24/7."
  },
  {
    icon: "📱",
    title: "Responsive",
    description: "Perfect experience on any device or screen size",
    details: "Mobile-first design approach ensures pixel-perfect layouts from smartphones to 4K displays with fluid transitions."
  },
  {
    icon: "🎨",
    title: "Customizable",
    description: "Tailor every aspect to match your brand",
    details: "Extensive theming options, custom components, and flexible APIs let you create truly unique experiences."
  },
  {
    icon: "📊",
    title: "Analytics",
    description: "Deep insights into your business metrics",
    details: "Real-time data visualization, conversion tracking, and AI-powered insights help you make data-driven decisions."
  },
  {
    icon: "🚀",
    title: "Scalable",
    description: "Grows with your business needs",
    details: "Cloud-native architecture with auto-scaling capabilities handles everything from startups to enterprises."
  }
];

export default function Features() {
  return (
    <section className="relative py-32 overflow-hidden" id="features">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 glass rounded-full text-sm font-medium text-cyan-400 mb-6"
          >
            ⚡ FEATURES
          </motion.span>
          
          <h2 className="text-5xl md:text-7xl font-black mb-6 text-white">
            Powerful <span className="gradient-text">Capabilities</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Everything you need to build amazing products. 
            <span className="text-cyan-400"> Click any card to explore more.</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card3D
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              details={feature.details}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
