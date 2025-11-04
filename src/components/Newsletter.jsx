import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, MailCheck } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // In production, connect your API endpoint or Mailchimp here
    if (email.trim() !== "") {
      setSubmitted(true);
      setTimeout(() => {
        setEmail("");
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section className="relative bg-linear-to-b from-teal-50 to-white dark:from-gray-950 dark:to-gray-900 py-20 overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute -top-32 -right-32 w-80 h-80 bg-teal-200/40 dark:bg-teal-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -left-20 w-72 h-72 bg-amber-100/50 dark:bg-amber-400/10 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative max-w-3xl mx-auto px-6 text-center"
      >
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Join Our Newsletter 🐾
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Get expert pet care tips, updates from Dr. Leah Hill, and exclusive
          book releases — delivered straight to your inbox.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full sm:w-auto flex-1 px-5 py-3 rounded-full border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-800 dark:text-white transition"
          />
          <button
            type="submit"
            disabled={submitted}
            className={`flex items-center gap-2 px-6 py-3 rounded-full shadow-md font-medium transition-all ${
              submitted
                ? "bg-green-600 text-white cursor-not-allowed"
                : "bg-teal-600 hover:bg-teal-700 text-white"
            }`}
          >
            {submitted ? (
              <>
                <MailCheck size={18} />
                Subscribed!
              </>
            ) : (
              <>
                <Send size={18} />
                Subscribe
              </>
            )}
          </button>
        </form>

        <motion.p
          initial={{ opacity: 0 }}
          animate={submitted ? { opacity: 1 } : { opacity: 0 }}
          className="text-green-600 dark:text-green-400 mt-4 font-medium"
        >
          🎉 Thank you for subscribing!
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Newsletter;
