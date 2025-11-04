import React from "react";
import { motion } from "framer-motion";
import { PawPrint, Award, BookOpen, Heart, Stethoscope, Leaf } from "lucide-react";
import heroImage from "../assets/images/hero/dr.webp";

const About = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      {/* === HERO SECTION === */}
      <section className="relative overflow-hidden pt-32 pb-20 bg-linear-to-b from-teal-50 to-white dark:from-gray-950 dark:to-gray-900">
        <div className="absolute -top-32 -left-20 w-96 h-96 bg-teal-200/40 dark:bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute top-10 right-0 w-96 h-96 bg-amber-100/50 dark:bg-amber-400/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Meet <span className="text-teal-600">Dr. Leah Hill</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              A compassionate veterinarian, educator, and animal advocate — Dr. Leah Hill
              combines science and empathy to empower pet parents and create healthier, happier lives for animals.
            </p>
            <div className="flex gap-3">
              <a
                href="/appointments"
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full shadow-md transition"
              >
                Book Appointment
              </a>
              <a
                href="/book"
                className="border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-6 py-3 rounded-full transition"
              >
                Read Her Book
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex justify-center relative"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-teal-100 dark:border-gray-800">
              <img
                src={heroImage}
                alt="Dr. Leah Hill"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-white dark:bg-gray-800 px-4 py-2 rounded-xl shadow-lg flex items-center gap-2">
              <PawPrint className="text-teal-600" size={20} />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                10+ Years of Excellence
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* === PHILOSOPHY SECTION === */}
      <section className="py-20 bg-teal-50 dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Her Philosophy 🐾
          </motion.h2>
          <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            “Every pet deserves respect, empathy, and the highest quality of care. My mission
            is to educate owners so that compassion and science walk paw-in-paw.”  
          </p>
        </div>

        <div className="mt-12 max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {[
            {
              icon: <Heart className="text-teal-600" size={30} />,
              title: "Empathy First",
              desc: "Understanding pets’ emotions builds the foundation for effective treatment.",
            },
            {
              icon: <Stethoscope className="text-teal-600" size={30} />,
              title: "Science-Backed Care",
              desc: "Using evidence-based practices for prevention, diagnostics, and treatment.",
            },
            {
              icon: <Leaf className="text-teal-600" size={30} />,
              title: "Holistic Wellness",
              desc: "Balancing nutrition, behavior, and environment for full-spectrum health.",
            },
          ].map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* === TIMELINE / JOURNEY === */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-10"
          >
            Her Journey
          </motion.h2>

          <div className="relative border-l-4 border-teal-500 dark:border-teal-400 max-w-3xl mx-auto">
            {[
              {
                year: "2012",
                title: "Graduated from Cornell University",
                desc: "Completed Doctor of Veterinary Medicine (DVM) with honors.",
              },
              {
                year: "2014",
                title: "Opened First Clinic",
                desc: "Started her practice focusing on preventive care and community outreach.",
              },
              {
                year: "2018",
                title: "Published Her First Book",
                desc: "Authored ‘Heartbeats & Pawprints,’ inspiring thousands of pet lovers.",
              },
              {
                year: "2022",
                title: "Expanded to Teaching & Speaking",
                desc: "Began mentoring young veterinarians and speaking at global conferences.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className="mb-10 ml-6 relative"
              >
                <div className="absolute -left-[35px] top-2 w-6 h-6 bg-teal-600 rounded-full border-4 border-white dark:border-gray-900" />
                <h4 className="text-xl font-semibold">{item.year}</h4>
                <h5 className="text-lg text-teal-600 dark:text-teal-400 font-medium">
                  {item.title}
                </h5>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === AWARDS & RECOGNITION === */}
      <section className="py-20 bg-teal-50 dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-10"
          >
            Awards & Recognition 🏆
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="text-amber-400" size={30} />,
                title: "National Veterinary Leadership Award",
                desc: "Honored for her contribution to advancing humane veterinary practices.",
              },
              {
                icon: <BookOpen className="text-amber-400" size={30} />,
                title: "Best Veterinary Author 2020",
                desc: "Her book became a bestseller for educating families about pet care.",
              },
              {
                icon: <Heart className="text-amber-400" size={30} />,
                title: "Community Compassion Award",
                desc: "Recognized for organizing free pet wellness camps across states.",
              },
            ].map((award, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-xl transition"
              >
                <div className="mb-4">{award.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{award.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{award.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === CLOSING MESSAGE === */}
      <section className="py-20 bg-linear-to-r from-teal-600 to-teal-700 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto px-6"
        >
          <h2 className="text-4xl font-bold mb-4">“Healing hearts, one paw at a time.”</h2>
          <p className="text-lg text-teal-100 mb-8">
            Dr. Leah Hill continues to spread awareness and inspire compassion through her
            work, writings, and community initiatives.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-teal-700 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-teal-100 transition"
          >
            Get In Touch
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
