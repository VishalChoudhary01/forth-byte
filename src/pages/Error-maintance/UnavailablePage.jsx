import { motion } from "motion/react";
import { FaTools, FaHammer, FaExclamationTriangle, FaRocket } from "react-icons/fa";

const UnavailablePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background dark:bg-dark-background flex items-center justify-center px-4 py-8"
    >
      <div className="max-w-2xl w-full relative">
        {/* Animated elements (subtle on mobile) */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -top-16 -right-16 opacity-10 md:opacity-20 hidden sm:block"
        >
          <FaTools className="text-brand w-28 h-28 dark:text-dark-brand" />
        </motion.div>

        {/* Main Content */}
        <div className="relative z-10 bg-glass-bg dark:bg-dark-glass-bg backdrop-blur-lg rounded-xl p-6 md:p-8 border border-border dark:border-dark-border shadow-md">
          <div className="flex flex-col items-center text-center space-y-5">
            {/* Warning Icon */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="text-brand dark:text-dark-brand mb-3"
            >
              <FaExclamationTriangle className="w-12 h-12 md:w-14 md:h-14" />
            </motion.div>

            <h1 className="text-3xl md:text-4xl font-semibold text-heading1 dark:text-dark-heading1 mb-3">
              <span className="bg-gradient-to-r from-brand to-brand-hover bg-clip-text text-transparent">
                Under Construction
              </span>
            </h1>

            <p className="text-paragraph dark:text-dark-paragraph text-sm md:text-base leading-relaxed max-w-md mx-auto mb-5">
              Our team is currently working on this section. Please check back soon 
              while we finalize the experience. Thank you for your patience.
            </p>

            {/* Progress Indicator */}
            <div className="w-full max-w-xs mb-6">
              <div className="h-2 bg-surface dark:bg-dark-surface rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "65%" }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  className="h-full bg-gradient-to-r from-brand to-brand-hover"
                />
              </div>
              <div className="flex justify-between text-xs mt-1.5">
                <span className="text-brand dark:text-dark-brand">65% Complete</span>
                <span className="text-paragraph3 dark:text-dark-paragraph3">Est. Sept 2025</span>
              </div>
            </div>

            {/* Action Button */}
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="/"
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-hover text-brand-contrast px-5 py-2.5 rounded-lg transition-colors duration-200 text-sm md:text-base"
            >
              <FaRocket className="shrink-0" />
              Return to Homepage
            </motion.a>
          </div>
        </div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5 bg-[length:30px_30px] bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)]" />
      </div>
    </motion.div>
  );
};

export default UnavailablePage;