"use client";

import React from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

function Tours() {
  const tours = [
    {
      title: "Hunza Valley Escape",
      description: "5 Days • Scenic Mountains & Local Cuisine",
      price: "PKR 85,000",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Fairy Meadows Adventure",
      description: "4 Nights • Trekking & Camping",
      price: "PKR 70,000",
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Skardu & Shigar Tour",
      description: "7 Days • Lakes, Forts & Valleys",
      price: "PKR 95,000",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Karachi City Getaway",
      description: "3 Nights • Beaches & Food Streets",
      price: "PKR 55,000",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Lahore Cultural Trip",
      description: "6 Days • Historical Sites & Food",
      price: "PKR 65,000",
      image: "https://images.unsplash.com/photo-1542120526-89a7039730ab?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Kumrat Valley Retreat",
      description: "5 Nights • Forests & Waterfalls",
      price: "PKR 80,000",
      image: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16">

      <div className="text-center my-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide text-center my-8 flex items-center justify-center flex-wrap">
          <span className="text-yellow-500 text-2xl sm:text-3xl md:text-4xl align-middle">
            ✦
          </span>
          <span className="mx-2">DISCOVER YOUR NEXT ADVENTURE</span>
          <span className="text-yellow-500 text-3xl sm:text-4xl md:text-6xl align-middle">
            ✦
          </span>
        </h2>
        <p className="text-muted-foreground text-lg mt-2">
          Joyful journeys and unforgettable moments, just for you
        </p>
      </div>


      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {tours.map((tour, index) => (
          <CardContainer key={index} className="inter-var">
            <CardBody className="bg-gradient-to-br from-amber-100 to-orange-100 dark:from-stone-800 dark:to-stone-900 border-amber-200 dark:border-amber-700/30 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-gray-900 dark:text-white"
              >
                {tour.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-gray-700 dark:text-gray-300 text-sm max-w-sm mt-2"
              >
                {tour.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={tour.image}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={tour.title}
                />
              </CardItem>
              <div className="flex justify-between items-center mt-10">
                <CardItem
                  translateZ={20}
                  as="div"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  <span className="text-black dark:text-white font-bold text-lg">{tour.price}</span>
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-bold hover:bg-primary/90"
                >
                  Book Now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  );
}

export default Tours;
