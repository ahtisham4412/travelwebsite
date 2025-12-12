"use client";
import * as React from "react";
import { Carousel,CarouselContent,CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
interface Review {
  name: string;
  location: string;
  review: string;
  avatar: string;
}
const reviews: Review[] = [
  {
    name: "Ali Khan",
    location: "Hunza Valley",
    review:"The trip to Hunza was a dream come true! The mountains, culture, and food were unforgettable.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sara Ahmed",
    location: "Skardu",
    review:
      "Skardu’s serene lakes and snow-capped peaks made this the most peaceful vacation ever.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Usman Raza",
    location: "Fairy Meadows",
    review:
      "Fairy Meadows felt like paradise on earth. The view of Nanga Parbat is simply breathtaking!",
    avatar: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    name: "Hina Malik",
    location: "Naran & Kaghan",
    review:
      "The lush green valleys of Naran & Kaghan were mesmerizing. Highly recommend visiting in summer.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Bilal Hussain",
    location: "Malam Jabba",
    review:
      "The skiing experience at Malam Jabba was thrilling! Perfect spot for winter sports lovers.",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    name: "Ayesha Khan",
    location: "Neelum Valley",
    review:
      "Crystal clear rivers and stunning landscapes — Neelum Valley stole my heart.",
    avatar: "https://randomuser.me/api/portraits/women/19.jpg",
  },
];
export default function Reviews() {
  return (
    <section className="py-16 bg-gradient-to-b from-background via-muted/40 to-background">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide text-center my-8 flex items-center justify-center flex-wrap">
          <span className="text-primary text-2xl sm:text-3xl md:text-4xl align-middle">✦</span>
          <span className="mx-2">WHAT OUR TRAVELERS SAY</span>
          <span className="text-primary text-3xl sm:text-4xl md:text-6xl align-middle">✦</span>
        </h2>
        <Carousel opts={{ align: "start", loop: true }} className="relative rounded-2xl overflow-hidden">
          <CarouselContent className="-ml-2 md:-ml-4">
            {reviews.map((review, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <Card className="backdrop-blur-md bg-card/80 shadow-xl border border-border/60 hover:scale-105 hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Image
                        src={review.avatar}
                        alt={review.name}
                        width={50}
                        height={50}
                        className="rounded-full border-2 border-primary/40"
                      />
                      <div className="text-left">
                        <h3 className="text-lg font-semibold text-primary">
                          {review.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">{review.location}</p>
                      </div>
                    </div>
                    <p className="text-foreground/90 italic leading-relaxed">
                      &quot;{review.review}&quot;
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}