"use client";

import React from "react";
import { motion } from "framer-motion";
import { Plane } from "lucide-react";

export default function TravelLoader() {
    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gray-950 flex-col gap-4">
            <motion.div
                animate={{
                    rotate: [0, 360],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="relative w-24 h-24 rounded-full border-4 border-white/10 border-t-amber-500"
            >
                <div className="absolute inset-0 flex items-center justify-center">
                    <Plane className="w-8 h-8 text-amber-500 rotate-45" />
                </div>
            </motion.div>
            <motion.p
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-amber-500 font-serif tracking-widest text-sm uppercase"
            >
                Preparing for Takeoff...
            </motion.p>
        </div>
    );
}
