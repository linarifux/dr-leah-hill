import React from 'react'
import { motion } from "framer-motion";

const AboutPreview = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Meet Dr. Leah Hill
          </motion.h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Dr. Leah Hill is a compassionate veterinarian with over a decade of experience in animal healthcare. She combines science, empathy, and education to help every pet live a happier, healthier life.
          </p>
          <a
            href="/about"
            className="text-teal-600 font-medium hover:underline"
          >
            Learn more →
          </a>
        </div>
      </section>
  )
}

export default AboutPreview