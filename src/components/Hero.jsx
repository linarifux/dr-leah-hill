import React from "react";
import { motion } from "framer-motion";
import { PawPrint, BookOpen, Calendar } from "lucide-react";
import heroImage from "../assets/images/hero/dr.webp";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-teal-50 to-white dark:from-gray-950 dark:to-gray-900 pt-32 pb-20">
      {/* Decorative Background Blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-teal-200/40 dark:bg-teal-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-100/50 dark:bg-amber-400/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 text-center lg:text-left"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
            Compassionate <span className="text-teal-600">Veterinary Care</span>
            <br />
            by Dr. Leah Hill 🐾
          </h1>

          <p className="mt-5 text-gray-600 dark:text-gray-300 text-lg max-w-xl mx-auto lg:mx-0">
            Dedicated to improving the health, happiness, and lifelong wellness of your pets — and sharing that passion through her bestselling book.
          </p>

          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
            <a
              href="/appointments"
              className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full shadow-md transition"
            >
              <Calendar size={18} />
              Book Appointment
            </a>

            <a
              href="/book"
              className="flex items-center gap-2 border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-6 py-3 rounded-full transition"
            >
              <BookOpen size={18} />
              Explore Her Book
            </a>
          </div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative w-full lg:w-1/2 flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-teal-100 dark:border-gray-800">
            <img
              src={heroImage}
              alt="Dr. Leah Hill"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 px-4 py-2 rounded-xl shadow-md flex items-center gap-2">
            <PawPrint className="text-teal-600" size={20} />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              10+ Years of Pet Care
            </span>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
