import React from "react";
import { motion } from "framer-motion";
import { Utensils, Apple, Scale, Leaf } from "lucide-react";
import nutritionImage from "../../assets/images/services/nutrition.png";

const NutritionDiet = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <section className="pt-32 pb-20 bg-linear-to-b from-lime-50 to-white dark:from-gray-950 dark:to-gray-900 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Nutrition & Diet 🥗
        </motion.h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
          Personalized diet plans and nutrition guidance to boost your pet’s vitality, energy, and longevity.
        </p>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-lime-700 dark:text-lime-400">
            Services Include:
          </h2>
          <ul className="space-y-3 text-gray-600 dark:text-gray-300">
            <li className="flex items-start gap-2">
              <Apple className="text-lime-600 mt-1" size={18} /> Personalized meal planning
            </li>
            <li className="flex items-start gap-2">
              <Scale className="text-lime-600 mt-1" size={18} /> Weight management programs
            </li>
            <li className="flex items-start gap-2">
              <Utensils className="text-lime-600 mt-1" size={18} /> Dietary consultations for chronic illnesses
            </li>
            <li className="flex items-start gap-2">
              <Leaf className="text-lime-600 mt-1" size={18} /> Holistic nutrition & supplements
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden shadow-xl border-4 border-lime-100 dark:border-gray-800"
        >
          <img
            src={nutritionImage}
            alt="Pet Nutrition and Diet"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      <section className="py-20 bg-linear-to-r from-lime-600 to-lime-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Healthy Food, Happier Pets 🌿</h2>
        <p className="mb-8 text-lime-100">
          Discover how balanced nutrition can change your pet’s life.
        </p>
        <a
          href="/appointments"
          className="bg-white text-lime-700 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-lime-100 transition"
        >
          Book Consultation
        </a>
      </section>
    </div>
  );
};

export default NutritionDiet;
