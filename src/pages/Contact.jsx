import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Send,
  PawPrint,
} from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      {/* === HERO === */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-teal-50 to-white dark:from-gray-950 dark:to-gray-900 text-center overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Let’s Connect 🐾
        </motion.h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
          Have a question, need an appointment, or just want to say hi?  
          Dr. Leah Hill and her team would love to hear from you.
        </p>
      </section>

      {/* === CONTACT INFO GRID === */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 mb-20">
        {[
          {
            icon: <Mail size={28} className="text-teal-600" />,
            title: "Email Us",
            desc: "hello@drleahhill.com",
            href: "mailto:hello@drleahhill.com",
          },
          {
            icon: <Phone size={28} className="text-teal-600" />,
            title: "Call Us",
            desc: "+1 (202) 555-0123",
            href: "tel:+12025550123",
          },
          {
            icon: <MapPin size={28} className="text-teal-600" />,
            title: "Visit",
            desc: "120 Pet Care Ave, Washington DC",
            href: "https://goo.gl/maps/",
          },
        ].map((item, i) => (
          <motion.a
            key={i}
            href={item.href}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-md hover:shadow-xl p-8 flex flex-col items-center text-center transition"
          >
            {item.icon}
            <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
              {item.desc}
            </p>
          </motion.a>
        ))}
      </section>

      {/* === CONTACT FORM === */}
      <section className="bg-teal-50 dark:bg-gray-950 py-20">
        <div className="max-w-5xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Send a Message 💌
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Fill out the form and we’ll get back to you as soon as possible.  
              We can’t wait to help you and your furry friend!
            </p>
            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 mb-2">
              <Clock size={18} className="text-teal-600" />
              <span>Mon–Fri : 9 AM – 6 PM</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <PawPrint size={18} className="text-teal-600" />
              <span>Sat : 10 AM – 3 PM  •  Sun : Closed</span>
            </div>

            {/* Socials */}
            <div className="flex gap-4 mt-8">
              {[Facebook, Instagram, Linkedin].map((Icon, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  whileHover={{ scale: 1.15 }}
                  className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:bg-teal-600 hover:text-white transition"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 space-y-4"
          >
            <div>
              <label className="block text-sm mb-1">Name</label>
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
            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea
                required
                rows="4"
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
              {submitted ? "Message Sent ✅" : <>Send Message <Send size={18} /></>}
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* === MAP SECTION === */}
      <section className="relative h-[400px] w-full overflow-hidden">
        <iframe
          title="Dr Leah Hill Clinic Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.0017776379026!2d-77.03687068465153!3d38.90719217957086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7b7b7b7b7b7%3A0x123456789abcdef!2sWashington%20DC!5e0!3m2!1sen!2sus!4v1689000000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
