import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Syringe, CalendarCheck, Heart } from "lucide-react";
import preventiveCareImage from "../../assets/images/services/preventive-care.png";


const PreventiveCare = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-linear-to-b from-teal-50 to-white dark:from-gray-950 dark:to-gray-900 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Preventive Care 🩺
        </motion.h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
          Regular wellness exams and proactive health checks keep your pets
          happy, healthy, and thriving year-round.
        </p>
      </section>

      {/* Content */}
      <section className="py-16 max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-teal-700 dark:text-teal-400">
            What’s Included
          </h2>
          <ul className="space-y-3 text-gray-600 dark:text-gray-300">
            <li className="flex items-start gap-2">
              <ShieldCheck className="text-teal-600 mt-1" size={18} />{" "}
              Comprehensive wellness exams
            </li>
            <li className="flex items-start gap-2">
              <Syringe className="text-teal-600 mt-1" size={18} /> Vaccinations
              & parasite prevention
            </li>
            <li className="flex items-start gap-2">
              <CalendarCheck className="text-teal-600 mt-1" size={18} /> Early
              disease detection
            </li>
            <li className="flex items-start gap-2">
              <Heart className="text-teal-600 mt-1" size={18} /> Personalized
              health plans
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden shadow-xl border-4 border-teal-100 dark:border-gray-800"
        >
          <img
            src={preventiveCareImage}
            alt="Preventive Care for Pets"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-linear-to-r from-teal-600 to-teal-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Keep Your Pet Healthy for Life 🐾
        </h2>
        <p className="mb-8 text-teal-100">
          Schedule a wellness visit today and give your pet the best preventive
          care.
        </p>
        <a
          href="/appointments"
          className="bg-white text-teal-700 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-teal-100 transition"
        >
          Book Appointment
        </a>
      </section>
    </div>
  );
};

export default PreventiveCare;
