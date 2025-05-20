import { motion } from "motion/react";
import { FaTools, FaHammer, FaExclamationTriangle, FaRocket } from "react-icons/fa";

const UnavailablePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center px-4 py-12"
    >
      <div className="max-w-4xl w-full relative overflow-hidden">
        {/* Animated construction elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -right-20 opacity-10"
        >
          <FaTools className="text-amber-400 w-40 h-40" />
        </motion.div>

        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-1/4 left-10 opacity-15"
        >
          <FaHammer className="text-red-500 w-24 h-24 -rotate-45" />
        </motion.div>

        {/* Main Content */}
        <div className="relative z-10 bg-gray-900/80 backdrop-blur-lg rounded-2xl p-8 sm:p-12 lg:p-16 border border-gray-700/50 shadow-2xl">
          <div className="flex flex-col items-center text-center">
            {/* Pulsing Warning Icon */}
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mb-8 text-red-500"
            >
              <FaExclamationTriangle className="w-20 h-20" />
            </motion.div>

            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-red-500 bg-clip-text text-transparent"
            >
              Under Construction
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-300 text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Whoops! It seems you've discovered our digital construction zone. 
              Our team is working hard to build something amazing here. 
              Please check back soon while we hammer out the final details!
            </motion.p>

            {/* Progress Indicator */}
            <div className="w-full max-w-xs sm:max-w-sm mb-12">
              <div className="h-3 bg-gray-700 rounded-full mb-2 overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "65%" }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="h-full bg-gradient-to-r from-amber-400 to-red-500"
                />
              </div>
              <span className="text-sm text-amber-400">Construction Progress: 65%</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/"
                className="flex-1 max-w-xs sm:max-w-none flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-400 hover:to-red-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 text-lg"
              >
                <FaRocket className="flex-shrink-0" />
                Back to Safety
              </motion.a>
            </div>

            {/* Status Message */}
            <div className="mt-8 p-4 bg-gray-800/50 rounded-lg border border-amber-400/20">
              <p className="text-sm text-amber-300 flex items-center gap-2">
                <FaExclamationTriangle className="flex-shrink-0" />
                Expected completion: September 2024
              </p>
            </div>
          </div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[size:40px_40px] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]" />
      </div>
    </motion.div>
  );
};

export default UnavailablePage;