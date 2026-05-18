import React, { useState } from "react";
import { motion } from "framer-motion";
import LoginModal from "../components/LoginModel";

const Home = () => {
  const highlights = [
    "AI Generated Code",
    "Fully Responsive Layouts",
    "Production Ready Output",
  ];

  const [openLogin, setOpenLogin] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#040404] text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-600/20 blur-[180px] rounded-full" />
      <div className="absolute bottom-[-120px] right-[-100px] w-[400px] h-[400px] bg-blue-500/20 blur-[150px] rounded-full" />

      {/* Header */}
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-black/30 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-wide">
            GenWeb<span className="text-purple-400">.ai</span>
          </h1>

          <div className="flex items-center gap-4 md:gap-6">
            <button className="hidden sm:block text-sm text-zinc-400 hover:text-white transition">
              Pricing
            </button>

            <button
              onClick={() => setOpenLogin(true)}
              className="px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-sm font-medium hover:scale-105 transition duration-300 shadow-lg shadow-purple-500/20"
            >
              Get Started
            </button>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-23 pb-28">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-sm text-zinc-300 mb-8"
        >
          🚀 AI Powered Website Builder
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-tight max-w-5xl"
        >
          Build Stunning Websites <br />

          {/* Typing Animation */}
          <motion.span
            className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent inline-block"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            style={{
              overflow: "hidden",
              whiteSpace: "nowrap",
            }}
          >
            Instantly with AI
          </motion.span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="mt-8 max-w-2xl text-zinc-400 text-base sm:text-lg leading-relaxed"
        >
          Describe your idea and let AI generate beautiful, responsive and
          production-ready websites in seconds. No coding required.
        </motion.p>

        {/* Hero Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-12 flex items-center justify-center"
        >
          <button
            onClick={() => setOpenLogin(true)}
            className="px-10 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition duration-300 shadow-xl"
          >
            Get Started
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6"
        >
          {[
            ["10K+", "Websites Generated"],
            ["99%", "Customer Satisfaction"],
            ["24/7", "AI Availability"],
          ].map(([num, text], i) => (
            <div
              key={i}
              className="px-6 py-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <h2 className="text-2xl md:text-3xl font-bold">{num}</h2>
              <p className="text-zinc-400 text-sm mt-1">{text}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Highlight Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-24">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold">
            Why Choose <span className="text-purple-400">GenWeb.ai</span>
          </h2>

          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
            Everything you need to launch modern websites faster using the power
            of AI.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-8 hover:border-purple-500/40 transition duration-300"
            >
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-2xl mb-6 shadow-lg shadow-purple-500/20">
                  ✨
                </div>

                <h3 className="text-2xl font-semibold mb-4">{h}</h3>

                <p className="text-zinc-400 leading-relaxed">
                  GenWeb.ai builds real-world websites with modern animations,
                  responsive layouts, clean code structure and scalable
                  performance.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h1 className="text-lg font-bold">
              GenWeb<span className="text-purple-400">.ai</span>
            </h1>
            <p className="text-sm text-zinc-400 mt-1">
              Build websites faster with AI.
            </p>
          </div>

          <div className="flex gap-6 text-sm text-zinc-400">
            <a className="hover:text-white transition cursor-pointer">
              Privacy
            </a>
            <a className="hover:text-white transition cursor-pointer">
              Terms
            </a>
            <a className="hover:text-white transition cursor-pointer">
              Contact
            </a>
          </div>

          <div className="text-xs text-zinc-500">
            © {new Date().getFullYear()} GenWeb.ai. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Modal */}
      <LoginModal
        open={openLogin}
        onClose={() => setOpenLogin(false)}
      />
    </div>
  );
};

export default Home;