import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const PreventiveCare = lazy(() => import("./pages/services/PreventiveCare"));
const SurgeryRecovery = lazy(() => import("./pages/services/SurgeryRecovery"));
const NutritionDiet = lazy(() => import("./pages/services/NutritionDiet"));
const BehaviorTherapy = lazy(() => import("./pages/services/BehaviorTherapy"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const Contact = lazy(() => import("./pages/Contact"));
const Book = lazy(() => import("./pages/Book"));

// Optional 404 Page
const NotFound = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center text-center text-gray-700 dark:text-gray-200">
    <h1 className="text-4xl font-bold mb-2">404 - Page Not Found 🐾</h1>
    <p className="mb-6 text-gray-500 dark:text-gray-400">
      The page you’re looking for doesn’t exist.
    </p>
    <a
      href="/"
      className="bg-teal-600 text-white px-5 py-2 rounded-full shadow-md hover:bg-teal-700 transition"
    >
      Go Home
    </a>
  </div>
);

// Page transition animation variants
const pageTransition = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, y: -30, transition: { duration: 0.3, ease: "easeIn" } },
};

// Wrapper component for transitions
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageTransition}
        initial="initial"
        animate="animate"
        exit="exit"
        className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300"
      >
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-[60vh] text-teal-600 text-lg font-semibold">
              Loading...
            </div>
          }
        >
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services/preventive" element={<PreventiveCare />} />
            <Route path="/services/surgery" element={<SurgeryRecovery />} />
            <Route path="/services/nutrition" element={<NutritionDiet />} />
            <Route path="/services/behavior" element={<BehaviorTherapy />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/book" element={<Book />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <Navbar />
      <main className="pt-24">
        <AnimatedRoutes />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
