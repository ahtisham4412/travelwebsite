"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

type Phase = "day" | "rain" | "night";

export default function DynamicHero() {
    const [phase, setPhase] = useState<Phase>("day");
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();

    // Parallax for landscape layers - Adjusted for subtle cinematic depth
    const yBack = useTransform(scrollY, [0, 500], [0, 100]);
    const yMid = useTransform(scrollY, [0, 500], [0, 50]);
    const yFore = useTransform(scrollY, [0, 500], [0, 25]);

    // Phase Cycle Logic - Slower, more majestic transitions
    useEffect(() => {
        const cycle = async () => {
            // Day (Sun) - 10 seconds
            setPhase("day");
            await new Promise((r) => setTimeout(r, 10000));

            // Rain (Gloom) - 8 seconds
            setPhase("rain");
            await new Promise((r) => setTimeout(r, 8000));

            // Night (Moon) - 10 seconds
            setPhase("night");
            await new Promise((r) => setTimeout(r, 10000));

            cycle(); // Loop
        };
        cycle();
    }, []);

    // Canvas Animation Loop (Rain & Stars)
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let particles: any[] = [];

        const resize = () => {
            if (containerRef.current && canvas) {
                canvas.width = containerRef.current.clientWidth;
                canvas.height = containerRef.current.clientHeight;
            }
        };
        window.addEventListener("resize", resize);
        resize();

        // Initialize particles
        const initParticles = () => {
            particles = [];
            const count = phase === "rain" ? 150 : phase === "night" ? 100 : 0;
            for (let i = 0; i < count; i++) {
                // Rain is faster, vertical
                // Stars are static but twinkle
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    speed: Math.random() * 5 + 4,
                    length: Math.random() * 20 + 10,
                    opacity: Math.random(),
                    size: Math.random() * 2,
                    twinkle: Math.random() * 0.05
                });
            }
        };

        initParticles();

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            if (phase === "rain") {
                ctx.strokeStyle = "rgba(174, 194, 224, 0.4)";
                ctx.lineWidth = 1;
                particles.forEach((p) => {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p.x - 1, p.y + p.length); // Slight angle for wind
                    ctx.stroke();
                    p.y += p.speed * 2;
                    p.x -= 0.5; // Slight wind
                    if (p.y > canvas.height) {
                        p.y = -p.length;
                        p.x = Math.random() * canvas.width;
                    }
                });
            }

            if (phase === "night") {
                particles.forEach((p) => {
                    ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                    ctx.fill();

                    // Smooth twinkle logic
                    p.opacity += p.twinkle;
                    if (p.opacity > 1 || p.opacity < 0.2) p.twinkle *= -1;
                });
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render(); // Start loop

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [phase]);

    // Background Gradients - MOODY PALETTE
    const backgrounds = {
        day: "linear-gradient(to bottom, #d69e2e 0%, #ed8936 50%, #f6ad55 100%)", // Golden Hour (Amber/Orange)
        rain: "linear-gradient(to bottom, #2d3748 0%, #4a5568 100%)", // Stormy Slate (Blue-Gray)
        night: "linear-gradient(to bottom, #1a202c 0%, #2d3748 100%)", // Midnight (Deep Navy)
    };

    return (
        <motion.div
            ref={containerRef}
            className="absolute inset-0 w-full h-full overflow-hidden z-0"
            animate={{ background: backgrounds[phase] }}
            transition={{ duration: 3, ease: "easeInOut" }}
        >
            {/* --- NOISE / GRAIN OVERLAY --- */}
            <div className="absolute inset-0 opacity-20 pointer-events-none z-50 mix-blend-overlay"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            />

            {/* --- CELESTIAL BODIES --- */}
            <AnimatePresence mode="wait">
                {phase === "day" && (
                    <motion.div
                        key="sun"
                        initial={{ y: 200, opacity: 0 }}
                        animate={{ y: -50, opacity: 1 }}
                        exit={{ y: 200, opacity: 0 }}
                        transition={{ duration: 3, ease: "easeInOut" }}
                        className="absolute top-20 right-1/4 w-48 h-48 rounded-full bg-orange-300 blur-2xl opacity-60 mix-blend-screen"
                    />
                )}
                {phase === "night" && (
                    <motion.div
                        key="moon"
                        initial={{ y: 200, opacity: 0 }}
                        animate={{ y: 40, opacity: 1 }}
                        exit={{ y: 200, opacity: 0 }}
                        transition={{ duration: 3, ease: "easeInOut" }}
                        className="absolute top-20 left-1/4 w-32 h-32 rounded-full bg-indigo-100 blur-lg opacity-80 mix-blend-screen shadow-[0_0_80px_rgba(255,255,255,0.3)]"
                    />
                )}
            </AnimatePresence>

            {/* --- BIRDS (Day Only) - Subtle & High --- */}
            <AnimatePresence>
                {phase === "day" && (
                    <motion.div
                        key="birds"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: "120vw", opacity: 0.8 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute top-[15%] left-0 flex space-x-6 opacity-60 mix-blend-overlay"
                    >
                        {[1, 2, 3, 4, 5].map((i) => (
                            <svg key={i} width="30" height="20" viewBox="0 0 50 40" className="fill-current text-white/50">
                                <path d="M0 20 Q 15 0 25 20 Q 35 0 50 20 L 25 25 Z" />
                            </svg>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* --- CANVAS WEATHER OVERLAY --- */}
            <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0 mix-blend-screen" />

            {/* --- MOUNTAIN LAYERS (SVG with GRADIENTS) --- */}

            {/* Gradient Definitions */}
            <svg width="0" height="0">
                <defs>
                    <linearGradient id="gradBack" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor={phase === "night" ? "#0f172a" : phase === "rain" ? "#2d3748" : "#c05621"} className="transition-colors duration-[3000ms]" />
                        <stop offset="100%" stopColor={phase === "night" ? "#1e293b" : phase === "rain" ? "#4a5568" : "#dd6b20"} className="transition-colors duration-[3000ms]" />
                    </linearGradient>
                    <linearGradient id="gradMid" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor={phase === "night" ? "#020617" : phase === "rain" ? "#1a202c" : "#9c4221"} className="transition-colors duration-[3000ms]" />
                        <stop offset="100%" stopColor={phase === "night" ? "#0f172a" : phase === "rain" ? "#2d3748" : "#c05621"} className="transition-colors duration-[3000ms]" />
                    </linearGradient>
                    <linearGradient id="gradFore" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor={phase === "night" ? "#000000" : phase === "rain" ? "#111827" : "#7b341e"} className="transition-colors duration-[3000ms]" />
                        <stop offset="100%" stopColor={phase === "night" ? "#020617" : phase === "rain" ? "#1a202c" : "#9c4221"} className="transition-colors duration-[3000ms]" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Background Mountains (Distant) */}
            <motion.div style={{ y: yBack }} className="absolute bottom-0 left-0 w-full h-[65%] z-10 opacity-80">
                <svg viewBox="0 0 1440 320" className="w-full h-full" preserveAspectRatio="none">
                    <path fill="url(#gradBack)"
                        d="M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,122.7C672,128,768,192,864,197.3C960,203,1056,149,1152,144C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    />
                </svg>
            </motion.div>

            {/* Middle Mountains */}
            <motion.div style={{ y: yMid }} className="absolute bottom-0 left-0 w-full h-[50%] z-20">
                <svg viewBox="0 0 1440 320" className="w-full h-full" preserveAspectRatio="none">
                    <path fill="url(#gradMid)"
                        d="M0,256L48,245.3C96,235,192,213,288,218.7C384,224,480,256,576,250.7C672,245,768,203,864,208C960,213,1056,267,1152,266.7C1248,267,1344,213,1392,186.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    />
                </svg>
            </motion.div>

            {/* Foreground Hills */}
            <motion.div style={{ y: yFore }} className="absolute bottom-0 left-0 w-full h-[35%] z-30">
                <svg viewBox="0 0 1440 320" className="w-full h-full" preserveAspectRatio="none">
                    <path fill="url(#gradFore)"
                        d="M0,288L48,272C96,256,192,224,288,218.7C384,213,480,235,576,240C672,245,768,235,864,213.3C960,192,1056,160,1152,165.3C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    />
                </svg>
            </motion.div>

        </motion.div>
    );
}
