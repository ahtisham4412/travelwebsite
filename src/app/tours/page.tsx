"use client";

import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
          <Card
            key={index}
            className="shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden"
          >
            <CardHeader>
              <CardTitle className="text-xl">{tour.title}</CardTitle>
              <CardDescription>{tour.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src={tour.image}
                alt={tour.title}
                width={600}
                height={400}
                className="rounded-lg w-full h-52 object-cover"
              />
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <span className="text-yellow-600 font-bold text-lg">
                {tour.price}
              </span>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition">
                Book Now
              </button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Tours;
