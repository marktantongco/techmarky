"use client";

import { motion } from "framer-motion";

const partners = [
  { name: "TechCorp", logo: "🏢" },
  { name: "Innovate", logo: "💡" },
  { name: "Digital Pro", logo: "🚀" },
  { name: "CloudSys", logo: "☁️" },
  { name: "DataFlow", logo: "📈" },
  { name: "SecureNet", logo: "🔒" }
];

export default function Logos() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg"
        >
          Trusted by leading companies
        </motion.h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center p-4 hover:scale-110 transition-transform"
            >
              <div className="text-5xl mb-2">{partner.logo}</div>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                {partner.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
