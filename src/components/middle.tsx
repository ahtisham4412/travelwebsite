"use client";

import React from "react";
import { MoveDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import DynamicHero from "./DynamicHero";

export default function Middle() {
  const { scrollY } = useScroll();
  const yCombined = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-gray-900">
      {/* New Dynamic Background - z-0 in DOM order (first child) */}
      <DynamicHero />

      {/* Overlay for better text contrast - z-10 */}
      <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none" />

      {/* Hero Content - z-20 */}
      <motion.div
        style={{ y: yCombined, opacity }}
        className="relative z-20 text-center px-4 max-w-4xl mx-auto space-y-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold font-serif text-white tracking-tight drop-shadow-lg"
        >
          Discover the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500">
            Extraordinary
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="text-lg md:text-2xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed drop-shadow-md"
        >
          Embark on a journey through Pakistan's breathtaking landscapes,
          from the peaks of Hunza to the shores of Karachi.
        </motion.p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 z-40 text-white/80 animate-bounce"
      >
        <MoveDown className="w-8 h-8 md:w-10 md:h-10 opacity-80" />
      </motion.div>

      {/* Bottom Gradient Fade for Section Transition */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-40" />
    </div>
  );
}
