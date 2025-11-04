import React from "react";
import { motion } from "framer-motion";
import { Stethoscope, Bandage, HeartPulse, Hospital } from "lucide-react";
import surgeryImage from "../../assets/images/services/surgery.png";

const SurgeryRecovery = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <section className="pt-32 pb-20 bg-linear-to-b from-rose-50 to-white dark:from-gray-950 dark:to-gray-900 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Surgery & Recovery ❤️‍🩹
        </motion.h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
          Safe, compassionate, and expert surgical care — with close attention to your pet’s comfort during recovery.
        </p>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-rose-600 dark:text-rose-400">
            Our Surgical Care Includes:
          </h2>
          <ul className="space-y-3 text-gray-600 dark:text-gray-300">
            <li className="flex items-start gap-2">
              <Stethoscope className="text-rose-600 mt-1" size={18} /> Pre-surgical exams and diagnostics
            </li>
            <li className="flex items-start gap-2">
              <Bandage className="text-rose-600 mt-1" size={18} /> Modern anesthesia monitoring
            </li>
            <li className="flex items-start gap-2">
              <HeartPulse className="text-rose-600 mt-1" size={18} /> Pain management & recovery planning
            </li>
            <li className="flex items-start gap-2">
              <Hospital className="text-rose-600 mt-1" size={18} /> Post-surgery follow-ups and care
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden shadow-xl border-4 border-rose-100 dark:border-gray-800"
        >
          <img
            src={surgeryImage}
            alt="Surgery and Recovery"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      <section className="py-20 bg-linear-to-r from-rose-600 to-rose-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Expert Surgical Care, Gentle Recovery 💕</h2>
        <p className="mb-8 text-rose-100">
          Trust your pet’s surgery to caring hands — book a consultation today.
        </p>
        <a
          href="/appointments"
          className="bg-white text-rose-700 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-rose-100 transition"
        >
          Book Now
        </a>
      </section>
    </div>
  );
};

export default SurgeryRecovery;
