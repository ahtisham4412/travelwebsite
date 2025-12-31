"use client";

import { MapPin, Compass, Camera } from "lucide-react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

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
            <CardContainer key={index} className="inter-var w-full">
              <CardBody className="bg-gradient-to-br from-amber-100 to-orange-100 dark:from-stone-800 dark:to-stone-900 border-amber-200 dark:border-amber-700/30 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] w-full h-auto rounded-xl p-6 border flex flex-col items-center text-center">
                <CardItem translateZ="40">
                  {tip.icon}
                </CardItem>
                <CardItem translateZ="50" className="w-full">
                  <h3 className="text-lg font-bold mt-4 mb-2 text-black dark:text-white">{tip.title}</h3>
                </CardItem>
                <CardItem translateZ="30" className="w-full">
                  <p className="text-gray-700 dark:text-gray-300">{tip.description}</p>
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  );
}
