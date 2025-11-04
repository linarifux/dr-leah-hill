import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, PawPrint, Quote, Play, MessageSquare, Heart } from "lucide-react";

const Testimonials = () => {
  const categories = ["All", "Dogs", "Cats", "Others"];
  const [activeCategory, setActiveCategory] = useState("All");

  const testimonials = [
    {
      id: 1,
      name: "Emily Parker",
      pet: "Golden Retriever – Bella",
      text: "Dr. Hill’s care has been life-changing for Bella. She explained every step and even followed up after surgery. Truly a blessing!",
      category: "Dogs",
      rating: 5,
      image: "/images/testimonials/dog1.jpg",
    },
    {
      id: 2,
      name: "Marcus Allen",
      pet: "Tabby Cat – Whiskers",
      text: "My cat used to hide for hours after vet visits. With Dr. Hill, Whiskers actually purrs! Such a gentle, calm approach.",
      category: "Cats",
      rating: 5,
      image: "/images/testimonials/cat1.jpg",
    },
    {
      id: 3,
      name: "Sarah Johnson",
      pet: "Beagle – Toby",
      text: "She’s the only vet Toby trusts. You can feel her love for animals the moment she walks into the room.",
      category: "Dogs",
      rating: 5,
      image: "/images/testimonials/dog2.jpg",
    },
    {
      id: 4,
      name: "Kevin Lee",
      pet: "Parrot – Rio",
      text: "Dr. Hill gave us nutrition advice for Rio that completely improved his feathers and mood. Incredible results!",
      category: "Others",
      rating: 4,
      image: "/images/testimonials/other1.jpg",
    },
    {
      id: 5,
      name: "Sophie Brown",
      pet: "Siamese Cat – Luna",
      text: "Her behavior therapy tips transformed Luna’s anxiety. We have a much happier cat now!",
      category: "Cats",
      rating: 5,
      image: "/images/testimonials/cat2.jpg",
    },
  ];

  const filteredTestimonials =
    activeCategory === "All"
      ? testimonials
      : testimonials.filter((t) => t.category === activeCategory);

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      {/* === HERO === */}
      <section className="relative pt-32 pb-20 bg-linear-to-b from-teal-50 to-white dark:from-gray-950 dark:to-gray-900 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-gray-900 dark:text-white mb-4"
        >
          What Our Clients Say 🐾
        </motion.h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
          Heartfelt stories from pet parents who’ve experienced the care and compassion of Dr. Leah Hill.
        </p>
      </section>

      {/* === FILTER TABS === */}
      <div className="flex justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full border text-sm font-medium transition-all ${
              activeCategory === cat
                ? "bg-teal-600 text-white shadow-md"
                : "border-gray-300 dark:border-gray-700 hover:bg-teal-50 dark:hover:bg-gray-800"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* === TESTIMONIAL GRID === */}
      <section className="max-w-7xl mx-auto px-6 pb-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredTestimonials.map((t) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col"
            >
              <img
                src={t.image}
                alt={t.pet}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 flex flex-col justify-between grow">
                <div>
                  <Quote className="text-teal-600 mb-2" size={24} />
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                    “{t.text}”
                  </p>
                </div>
                <div>
                  <div className="flex justify-center mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={18} className="text-amber-400" />
                    ))}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {t.name}
                  </h4>
                  <p className="text-sm text-gray-500">{t.pet}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </section>

      {/* === VIDEO TESTIMONIAL === */}
      <section className="py-20 bg-teal-50 dark:bg-gray-950 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-8 text-gray-900 dark:text-white"
        >
          Watch a Heartwarming Story 💚
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-xl border-4 border-teal-100 dark:border-gray-800"
        >
          <div className="relative w-full aspect-video bg-gray-200 dark:bg-gray-800">
            <a
              href="https://www.youtube.com/watch?v=abcd1234"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="bg-white/80 dark:bg-gray-700/80 backdrop-blur-md p-5 rounded-full shadow-lg"
              >
                <Play className="text-teal-600" size={40} />
              </motion.div>
            </a>
          </div>
        </motion.div>
      </section>

      {/* === SHARE YOUR STORY CTA === */}
      <section className="py-20 bg-linear-to-r from-teal-600 to-teal-700 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-4">Share Your Story 🐾</h2>
          <p className="text-teal-100 mb-8">
            Have a positive experience with Dr. Leah Hill? We’d love to hear your story and inspire others to care for their pets better.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-teal-700 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-teal-100 transition"
          >
            <MessageSquare size={18} /> Submit a Testimonial
          </a>
        </motion.div>
      </section>

      {/* === LOVE BAR === */}
      <div className="py-6 text-center bg-teal-700 text-white text-sm flex items-center justify-center gap-2">
        <Heart size={16} className="text-amber-300" />{" "}
        Loved by thousands of pet parents across the country ❤️
      </div>
    </div>
  );
};

export default Testimonials;
