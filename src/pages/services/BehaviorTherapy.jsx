import React from "react";
import { motion } from "framer-motion";
import { Brain, Heart, Smile, PawPrint } from "lucide-react";
import behaviorImage from "../../assets/images/services/behavior.png";

const BehaviorTherapy = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <section className="pt-32 pb-20 bg-linear-to-b from-indigo-50 to-white dark:from-gray-950 dark:to-gray-900 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Behavior Therapy 🐕
        </motion.h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
          Helping your pets feel calmer, safer, and happier with compassionate, positive-reinforcement therapy.
        </p>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-indigo-700 dark:text-indigo-400">
            What We Help With
          </h2>
          <ul className="space-y-3 text-gray-600 dark:text-gray-300">
            <li className="flex items-start gap-2">
              <Brain className="text-indigo-600 mt-1" size={18} /> Anxiety and fear-based behaviors
            </li>
            <li className="flex items-start gap-2">
              <Smile className="text-indigo-600 mt-1" size={18} /> Socialization and aggression issues
            </li>
            <li className="flex items-start gap-2">
              <Heart className="text-indigo-600 mt-1" size={18} /> Separation anxiety and loneliness
            </li>
            <li className="flex items-start gap-2">
              <PawPrint className="text-indigo-600 mt-1" size={18} /> Positive reinforcement training
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden shadow-xl border-4 border-indigo-100 dark:border-gray-800"
        >
          <img
            src={behaviorImage}
            alt="Pet Behavior Therapy"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      <section className="py-20 bg-linear-to-r from-indigo-600 to-indigo-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Build Stronger Bonds 💙</h2>
        <p className="mb-8 text-indigo-100">
          Let’s help your pet overcome fear and stress — with love, patience, and science.
        </p>
        <a
          href="/appointments"
          className="bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-indigo-100 transition"
        >
          Schedule Therapy
        </a>
      </section>
    </div>
  );
};

export default BehaviorTherapy;
