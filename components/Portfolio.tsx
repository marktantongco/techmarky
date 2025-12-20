"use client";

import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Modern shopping experience with seamless checkout",
    image: "🛒",
    tags: ["React", "Node.js", "Stripe"]
  },
  {
    id: 2,
    title: "Analytics Dashboard",
    description: "Real-time data visualization and insights",
    image: "📊",
    tags: ["Next.js", "D3.js", "PostgreSQL"]
  },
  {
    id: 3,
    title: "Mobile App",
    description: "Cross-platform mobile solution",
    image: "📱",
    tags: ["React Native", "Firebase", "Redux"]
  },
  {
    id: 4,
    title: "SaaS Product",
    description: "Subscription-based business solution",
    image: "💼",
    tags: ["TypeScript", "AWS", "GraphQL"]
  }
];

export default function Portfolio() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900" id="portfolio">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Showcasing our latest projects and successful deliveries
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-xl transition-shadow cursor-pointer"
            >
              <div className="text-6xl mb-4">{project.image}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
