import React from 'react'
import { Heart, Stethoscope, Dog, Cat } from "lucide-react";
import { motion } from "framer-motion";

const ServicePreview = () => {

    const services = [
    {
      icon: <Stethoscope className="text-teal-600" size={28} />,
      title: "Preventive Care",
      desc: "Comprehensive health exams, vaccinations, and early detection of diseases.",
    },
    {
      icon: <Heart className="text-teal-600" size={28} />,
      title: "Nutrition & Diet",
      desc: "Customized diet plans for your pets to maintain their ideal weight and vitality.",
    },
    {
      icon: <Dog className="text-teal-600" size={28} />,
      title: "Behavior Therapy",
      desc: "Helping pets overcome anxiety, fear, and behavioral issues.",
    },
    {
      icon: <Cat className="text-teal-600" size={28} />,
      title: "Surgery & Recovery",
      desc: "Safe surgical procedures and careful post-op recovery monitoring.",
    },
  ];


  return (
    <section className="py-20 bg-teal-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
          >
            Our Veterinary Services
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
              >
                <div className="mb-4">{s.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {s.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default ServicePreview