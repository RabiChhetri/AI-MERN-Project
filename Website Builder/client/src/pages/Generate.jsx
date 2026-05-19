import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Generate() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-[#040404] text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-600/20 blur-[180px] rounded-full" />
      <div className="absolute bottom-[-120px] right-[-100px] w-[400px] h-[400px] bg-blue-500/20 blur-[150px] rounded-full" />

      {/* NAVBAR (FIXED) */}
      <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center gap-4">

          <button
            onClick={() => navigate("/dashboard")}
            className="p-2 rounded-lg hover:bg-white/10 transition"
          >
            <ArrowLeft size={16} />
          </button>

          <div className="text-lg sm:text-xl font-bold tracking-wide flex items-center">
            GenWeb<span className="text-purple-400">.ai</span>
          </div>

        </div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-20 pb-14">

        {/* Heading */}
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight leading-tight max-w-5xl"
        >
          Build Websites with <br />

          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Real AI Power
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="mt-5 max-w-2xl text-zinc-400 text-sm sm:text-base leading-relaxed"
        >
          Describe your idea and let AI generate production-ready websites instantly.
          No coding required — just creativity.
        </motion.p>

        {/* INPUT SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full max-w-3xl mt-10 text-left"
        >
          <h2 className="text-lg font-semibold mb-3">
            Describe your website
          </h2>

          <textarea
            placeholder="Example: Create a modern portfolio website for a developer with dark theme, animations, and contact form..."
            className="w-full h-56 p-6 rounded-3xl bg-black/60 border border-white/10 outline-none resize-none text-sm leading-relaxed focus:ring-2 focus:ring-purple-500/30 backdrop-blur-xl"
          />
        </motion.div>

        {/* BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="px-12 py-4 rounded-2xl bg-white text-black font-semibold text-lg hover:shadow-xl transition"
          >
            Generate Website
          </motion.button>
        </motion.div>

      </div>
    </div>
  );
}

export default Generate;