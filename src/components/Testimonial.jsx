import React from 'react'
import { motion } from "framer-motion";

const Testimonial = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-8"
          >
            What Pet Parents Say 🐾
          </motion.h2>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <blockquote className="bg-teal-50 dark:bg-gray-800 p-6 rounded-2xl shadow-md max-w-sm mx-auto">
              <p className="text-gray-700 dark:text-gray-300 italic">
                “Dr. Hill is incredible! She treated my cat Bella like family and helped her recover quickly.”
              </p>
              <footer className="mt-3 font-semibold text-teal-700 dark:text-teal-400">
                — Maria Lopez
              </footer>
            </blockquote>

            <blockquote className="bg-teal-50 dark:bg-gray-800 p-6 rounded-2xl shadow-md max-w-sm mx-auto">
              <p className="text-gray-700 dark:text-gray-300 italic">
                “Her advice on pet nutrition completely changed my dog’s health. Highly recommended!”
              </p>
              <footer className="mt-3 font-semibold text-teal-700 dark:text-teal-400">
                — James Miller
              </footer>
            </blockquote>
          </div>

          <a
            href="/testimonials"
            className="mt-8 inline-block text-teal-600 font-medium hover:underline"
          >
            Read all reviews →
          </a>
        </div>
      </section>
  )
}

export default Testimonial