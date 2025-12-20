"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const socialIcons = [
    { name: "LinkedIn", icon: "💼", href: "#" },
    { name: "Twitter", icon: "🐦", href: "#" },
    { name: "GitHub", icon: "💻", href: "#" },
    { name: "Discord", icon: "💬", href: "#" },
  ];

  return (
    <footer className="relative bg-primary-bg text-white overflow-hidden">
      {/* Animated Wave Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-primary-secondary"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-purple-500/20"
            animate={{
              d: [
                "M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z",
                "M0,0V15.63C149.93,49,314.09,61.32,475.83,32.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,67.22,886,85.24,951.2,80c86.53-7,172.46-45.71,248.8-84.81V0Z",
                "M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z",
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-32 pb-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <motion.h3 
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-black gradient-text mb-4 cursor-pointer"
            >
              TechMarky
            </motion.h3>
            <p className="text-gray-400 leading-relaxed">
              Building the future of technology, one innovative solution at a time.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Company</h4>
            <ul className="space-y-3 text-gray-400">
              {["About Us", "Careers", "Blog"].map((item) => (
                <li key={item}>
                  <motion.a 
                    href="#"
                    whileHover={{ x: 5, color: "#22d3ee" }}
                    className="hover:text-cyan-400 transition-colors inline-block"
                  >
                    → {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Services</h4>
            <ul className="space-y-3 text-gray-400">
              {["Web Development", "Mobile Apps", "Cloud Solutions"].map((item) => (
                <li key={item}>
                  <motion.a 
                    href="#"
                    whileHover={{ x: 5, color: "#22d3ee" }}
                    className="hover:text-cyan-400 transition-colors inline-block"
                  >
                    → {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Connect</h4>
            <div className="flex gap-4">
              {socialIcons.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 360,
                    boxShadow: "0 10px 30px rgba(168, 85, 247, 0.4)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 glass-strong rounded-full flex items-center justify-center text-2xl gpu-accelerated"
                  title={social.name}
                >
                  <motion.span
                    animate={{ 
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                  >
                    {social.icon}
                  </motion.span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 text-center"
        >
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} TechMarky. All rights reserved.
            <span className="mx-2">•</span>
            <motion.span 
              whileHover={{ color: "#22d3ee" }}
              className="cursor-pointer"
            >
              Built with ❤️ and cutting-edge tech
            </motion.span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
