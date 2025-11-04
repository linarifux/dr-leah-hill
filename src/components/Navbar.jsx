import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Sun,
  Moon,
  PawPrint,
  BookOpen,
  Phone,
  Stethoscope,
  Home,
  Info,
  FileText,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [scrollY, setScrollY] = useState(0);

  // Track scroll position for fade/blur effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Theme toggle logic
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const scrolled = scrollY > 50;
  const opacity = Math.min(scrollY / 150, 1); // 0–1 smooth transition

  // Scroll progress (Framer Motion magic)
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const navItems = [
    { name: "Home", href: "/", icon: <Home size={16} /> },
    { name: "About", href: "/about", icon: <Info size={16} /> },
    {
      name: "Services",
      dropdown: [
        { title: "Preventive Care", href: "/services/preventive" },
        { title: "Surgery & Recovery", href: "/services/surgery" },
        { title: "Nutrition & Diet", href: "/services/nutrition" },
        { title: "Behavior Therapy", href: "/services/behavior" },
      ],
      icon: <Stethoscope size={16} />,
    },
    {
      name: "Resources",
      dropdown: [
        { title: "Pet Guides", href: "/resources/guides" },
        { title: "Downloadables", href: "/resources/downloads" },
        { title: "Articles", href: "/blog" },
      ],
      icon: <FileText size={16} />,
    },
    { name: "Contact", href: "/contact", icon: <Phone size={16} /> },
  ];

  return (
    <motion.nav
      style={{
        backgroundColor: `rgba(255,255,255,${opacity})`,
        backdropFilter: `blur(${opacity * 12}px)`,
      }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg dark:shadow-md" : ""
      } dark:bg-gray-900/70`}
    >
      {/* 🟩 Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-[3px] bg-teal-600 origin-left z-60"
        style={{ scaleX }}
      />

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 transition-all duration-300">
        {/* Logo */}
        <a
          href="/"
          className={`flex items-center gap-2 text-2xl font-semibold transition-colors duration-300 ${
            scrolled || opacity > 0.5
              ? "text-teal-700 dark:text-teal-400"
              : "text-white dark:text-teal-400"
          }`}
        >
          <PawPrint
            className={`transition-colors duration-300 ${
              scrolled || opacity > 0.5
                ? "text-teal-600"
                : "text-white dark:text-teal-400"
            }`}
            size={26}
          />
          Dr. Leah Hill
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.name} className="relative group">
                <button
                  className={`flex items-center gap-1 font-medium transition-colors duration-300 ${
                    scrolled || opacity > 0.5
                      ? "text-gray-700 hover:text-teal-600 dark:text-black"
                      : "text-white hover:text-teal-200 dark:text-black"
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                  <ChevronDown size={14} />
                </button>

                {/* Dropdown */}
                <div className="absolute left-0 top-full bg-white dark:bg-gray-800 shadow-lg rounded-lg mt-2 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all p-3 w-52">
                  {item.dropdown.map((sub, idx) => (
                    <a
                      key={idx}
                      href={sub.href}
                      className="block px-3 py-2 rounded-md hover:bg-teal-50 dark:hover:bg-gray-700 text-sm text-gray-700 dark:text-gray-200"
                    >
                      {sub.title}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className={`flex items-center gap-1 font-medium transition-colors duration-300 ${
                  scrolled || opacity > 0.5
                    ? "text-gray-700 hover:text-teal-600 dark:text-black"
                    : "text-white hover:text-teal-200 dark:text-black"
                }`}
              >
                {item.icon}
                {item.name}
              </a>
            )
          )}

          {/* Book Now Button */}
          <a
            href="/book"
            className={`ml-4 px-4 py-2 rounded-full shadow-md transition ${
              scrolled || opacity > 0.5
                ? "bg-teal-600 hover:bg-teal-700 text-white"
                : "bg-white text-teal-600 hover:bg-teal-100"
            }`}
          >
            Book Now
          </a>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`ml-3 p-2 rounded-full transition ${
              scrolled || opacity > 0.5
                ? "hover:bg-gray-100 dark:hover:bg-gray-700"
                : "hover:bg-white/20"
            }`}
          >
            {theme === "light" ? (
              <Moon
                size={18}
                className={scrolled || opacity > 0.5 ? "text-gray-700" : "text-black"}
              />
            ) : (
              <Sun
                size={18}
                className={scrolled || opacity > 0.5 ? "text-yellow-400" : "text-black"}
              />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 rounded-lg transition ${
            scrolled || opacity > 0.5
              ? "hover:bg-gray-100 dark:hover:bg-gray-800"
              : "hover:bg-white/20"
          }`}
        >
          {isOpen ? (
            <X
              className={
                scrolled || opacity > 0.5 ? "text-gray-700" : "text-white"
              }
            />
          ) : (
            <Menu
              className={
                scrolled || opacity > 0.5 ? "text-gray-700" : "text-white"
              }
            />
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
          >
            {navItems.map((item) =>
              item.dropdown ? (
                <details
                  key={item.name}
                  className="border-b border-gray-200 dark:border-gray-800"
                >
                  <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800">
                    <div className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
                      {item.icon}
                      {item.name}
                    </div>
                    <ChevronDown size={16} />
                  </summary>
                  <div className="pl-8 pb-2">
                    {item.dropdown.map((sub, idx) => (
                      <a
                        key={idx}
                        href={sub.href}
                        className="block py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-teal-600"
                      >
                        {sub.title}
                      </a>
                    ))}
                  </div>
                </details>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-2 px-4 py-3 border-b border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  {item.icon}
                  {item.name}
                </a>
              )
            )}

            <div className="p-4 flex justify-between items-center">
              <a
                href="/appointments"
                className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-full shadow-md transition"
              >
                Book Now
              </a>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
