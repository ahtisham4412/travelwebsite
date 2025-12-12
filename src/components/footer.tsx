"use client";
import type { ReactElement } from "react";
import React from "react";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="relative bg-gray-950 text-gray-300 py-20 px-6 sm:px-12 lg:px-20 overflow-hidden">
      {/* Cinematic Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-transparent to-blue-950/20 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-900/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 tracking-tighter">
            GlobeTrotter
          </h2>
          <p className="text-gray-400 max-w-sm leading-relaxed font-light">
            Curating the world's most breathtaking journeys. Designed for the modern explorer.
          </p>
          <div className="flex space-x-4">
            {/* Social Icons with Glass Effect */}
            {["#3b82f6", "#0ea5e9", "#ec4899"].map((color, i) => (
              <a key={i} href="#" className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:scale-110" style={{ color }}>
                <div className="w-5 h-5 bg-current rounded-sm opacity-80" />
              </a>
            ))}
          </div>
        </div>

        {/* Links Column */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-6 uppercase tracking-widest text-xs">Quick Links</h3>
          <ul className="space-y-3 text-gray-400">
            {["Home", "About Us", "Tours", "Blogs", "FAQ", "Contact"].map((item) => (
              <li key={item}>
                <Link href={`/${item.toLowerCase().replace(" ", "")}`} className="hover:text-amber-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-6 uppercase tracking-widest text-xs">Contact</h3>
          <ul className="space-y-4 text-gray-400 font-light">
            <li className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">✉️</span>
              support@globetrotter.com
            </li>
            <li className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">📞</span>
              +92 300 0000000
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16 border-t border-white/5 pt-8 text-center text-gray-600 text-sm font-light">
        &copy; {new Date().getFullYear()} GlobeTrotter Tours. Crafted with <span className="text-red-500">♥</span> for adventure.
      </div>
    </footer>
  );
}
