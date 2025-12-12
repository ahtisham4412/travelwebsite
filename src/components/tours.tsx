
"use client";

import React, { useRef, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Tours() {
  const tours = [
    {
      title: "Hunza Valley Escape",
      description: "5 Days • Scenic Mountains & Local Cuisine",
      price: "PKR 85,000",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80", // Mountains (Generic Reliable)
    },
    {
      title: "Fairy Meadows Adventure",
      description: "4 Nights • Trekking & Camping",
      price: "PKR 70,000",
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80", // Starry Night/Mountains
    },
    {
      title: "Skardu & Shigar Tour",
      description: "7 Days • Lakes, Forts & Valleys",
      price: "PKR 95,000",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80", // Reliable Lake View
    },
    {
      title: "Karachi City Getaway",
      description: "3 Nights • Beaches & Food Streets",
      price: "PKR 55,000",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80", // Beach (Generic Reliable)
    },
    {
      title: "Lahore Cultural Trip",
      description: "6 Days • Historical Sites & Food",
      price: "PKR 65,000",
      image: "https://images.unsplash.com/photo-1542120526-89a7039730ab?auto=format&fit=crop&w=800&q=80", // Mosque Architecture
    },
    {
      title: "Kumrat Valley Retreat",
      description: "5 Nights • Forests & Waterfalls",
      price: "PKR 80,000",
      image: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=800&q=80", // Reliable Forest
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center my-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-center my-8 flex items-center justify-center flex-wrap gap-3">
            <span className="text-primary text-2xl sm:text-3xl md:text-5xl align-middle">✦</span>
            <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">DISCOVER YOUR NEXT ADVENTURE</span>
            <span className="text-primary text-3xl sm:text-4xl md:text-6xl align-middle">✦</span>
          </h2>
          <p className="text-muted-foreground text-xl mt-2 max-w-2xl mx-auto">
            Joyful journeys and unforgettable moments, curated just for you
          </p>
        </motion.div>
      </div>
      <div className="relative w-full perspective-1000">
        <Carousel opts={{ align: "start", loop: true }} className="relative">
          <CarouselContent className="-ml-2 md:-ml-4 py-10">
            {tours.map((tour, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <div className="h-full group perspective-1000">
                  <TiltCard className="h-full transition-all duration-500 ease-out">
                    <Card className="h-full border-0 glass-panel overflow-hidden group">
                      <CardHeader>
                        <CardTitle className="text-xl font-bold flex justify-between items-start">
                          <span className="text-white drop-shadow-md">{tour.title}</span>
                          <span className="text-xs font-normal px-2 py-1 rounded-full bg-white/10 border border-white/5 flex items-center gap-1">
                            <span className="block w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                            Sunny
                          </span>
                        </CardTitle>
                        <CardDescription className="text-gray-300">{tour.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-0">
                        <div className="relative overflow-hidden h-64 w-full">
                          <Image
                            src={tour.image}
                            alt={tour.title}
                            fill
                            className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between items-center p-6 bg-white/5 border-t border-white/10">
                        <span className="text-amber-400 font-bold text-lg text-glow">
                          {tour.price}
                        </span>
                        <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-2 rounded-full font-medium hover:scale-105 active:scale-95 transition-all shadow-[0_0_15px_rgba(245,158,11,0.4)] hover:shadow-[0_0_25px_rgba(245,158,11,0.6)]">
                          Book Now
                        </button>
                      </CardFooter>
                      {/* Shine effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500 bg-gradient-to-tr from-transparent via-white/10 to-transparent skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    </Card>
                  </TiltCard>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}

export default Tours;
