import React from "react";
import { motion } from "framer-motion";
import {
  PawPrint,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Facebook size={20} />, href: "https://facebook.com" },
    { icon: <Instagram size={20} />, href: "https://instagram.com" },
    { icon: <Linkedin size={20} />, href: "https://linkedin.com" },
    { icon: <Youtube size={20} />, href: "https://youtube.com" },
  ];

  const quickLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Book", href: "/book" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="relative bg-teal-700 dark:bg-gray-950 text-white dark:text-gray-200 pt-20 pb-10 overflow-hidden">
      {/* Decorative background blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 relative z-10"
      >
        {/* Brand */}
        <div>
          <a href="/" className="flex items-center gap-2 mb-4">
            <PawPrint className="text-amber-300" size={26} />
            <h3 className="text-2xl font-semibold">Dr. Leah Hill</h3>
          </a>
          <p className="text-gray-100/90 dark:text-gray-300 text-sm leading-relaxed">
            Compassionate veterinary care and educational resources to help pet
            parents provide the best life for their furry friends. 🐾
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  className="hover:text-amber-300 transition-colors duration-200 text-sm"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Get in Touch</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={18} className="text-amber-300" />{" "}
              <a
                href="mailto:hello@drleahhill.com"
                className="hover:underline"
              >
                hello@drleahhill.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} className="text-amber-300" />{" "}
              <a href="tel:+12025550123" className="hover:underline">
                +1 (202) 555-0123
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={18} className="text-amber-300" />{" "}
              <span>Washington, D.C. & Maryland</span>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5">
            {socialLinks.map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="p-2 rounded-full bg-white/10 hover:bg-amber-300/20 transition"
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Divider */}
      <div className="border-t border-white/20 mt-12 mb-6"></div>

      {/* Copyright */}
      <p className="text-center text-xs text-gray-100/70 dark:text-gray-400">
        © {currentYear} Dr. Leah Hill. All rights reserved. <br />
        Designed with ❤️ by Naimul Islam.
      </p>
    </footer>
  );
};

export default Footer;
