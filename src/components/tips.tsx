"use client";

import { MapPin, Compass, Camera } from "lucide-react";

const tips = [
  {
    icon: <MapPin className="w-8 h-8 text-primary" />,
    title: "Plan Your Destination",
    description: "Research your destination, book accommodations early, and know the must-visit spots."
  },
  {
    icon: <Compass className="w-8 h-8 text-emerald-500" />,
    title: "Travel Light",
    description: "Pack only essentials to make your journey easier and more enjoyable."
  },
  {
    icon: <Camera className="w-8 h-8 text-sky-500" />,
    title: "Capture Memories",
    description: "Take plenty of photos and videos to cherish your travel experiences."
  },
];

export default function Tips() {
  return (
    <section className="py-12 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide text-center my-8 flex items-center justify-center flex-wrap">
          <span className="text-primary text-2xl sm:text-3xl md:text-4xl align-middle">✦</span>
          <span className="mx-2">TRAVEL TIPS</span>
          <span className="text-primary text-3xl sm:text-4xl md:text-6xl align-middle">✦</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl shadow-md border border-border/60 p-6 flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {tip.icon}
              <h3 className="text-lg font-semibold mt-4 mb-2 text-foreground">{tip.title}</h3>
              <p className="text-muted-foreground">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
