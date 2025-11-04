import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock,
  Phone,
  Mail,
  PawPrint,
  Heart,
  Send,
} from "lucide-react";

const Book = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      {/* === HERO SECTION === */}
      <section className="relative pt-32 pb-20 bg-linear-to-b from-teal-50 to-white dark:from-gray-950 dark:to-gray-900 text-center overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Book an Appointment 🗓️
        </motion.h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
          Your pet’s health journey starts here.  
          Schedule a visit with Dr. Leah Hill today — compassionate care made simple.
        </p>
      </section>

      {/* === BOOKING FORM === */}
      <section className="py-20 bg-teal-50 dark:bg-gray-950">
        <div className="max-w-5xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE INFO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Caring for Pets, One Paw at a Time 🐾
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              From preventive exams to personalized treatment —  
              every appointment is an opportunity to make your furry friend feel better, healthier, and happier.
            </p>

            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-teal-600" />
                <span>Mon–Fri : 9 AM – 6 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarDays size={18} className="text-teal-600" />
                <span>Saturday : 10 AM – 3 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <PawPrint size={18} className="text-teal-600" />
                <span>Sunday : Closed</span>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-3">Contact Options</h3>
              <div className="flex flex-col gap-2 text-sm text-gray-600 dark:text-gray-300">
                <div className="flex items-center gap-2">
                  <Phone size={18} className="text-teal-600" /> +1 (202) 555-0123
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={18} className="text-teal-600" /> hello@drleahhill.com
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 space-y-5"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              Appointment Request Form
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Fill in your details and we’ll confirm your appointment shortly.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-teal-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-teal-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Phone Number</label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-teal-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Preferred Date</label>
                <input
                  type="date"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-teal-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-1">Pet’s Name</label>
              <input
                type="text"
                placeholder="e.g., Bella"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-teal-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Reason for Visit</label>
              <textarea
                rows="4"
                placeholder="Describe your pet’s issue or service needed"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-teal-500 focus:outline-none"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              whileTap={{ scale: 0.97 }}
              className={`w-full flex justify-center items-center gap-2 px-6 py-3 rounded-full font-semibold shadow-md transition ${
                submitted
                  ? "bg-green-600 cursor-not-allowed"
                  : "bg-teal-600 hover:bg-teal-700"
              } text-white`}
            >
              {submitted ? (
                "Request Sent ✅"
              ) : (
                <>
                  Submit Request <Send size={18} />
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* === CLOSING BANNER === */}
      <section className="py-20 bg-linear-to-r from-teal-600 to-teal-700 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-4">
            Compassionate Care Starts with a Click ❤️
          </h2>
          <p className="text-teal-100 mb-8">
            Book your appointment online and let us take care of the rest.  
            Your pet’s wellness journey begins with Dr. Leah Hill.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-teal-700 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-teal-100 transition"
          >
            Contact Our Team
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default Book;
