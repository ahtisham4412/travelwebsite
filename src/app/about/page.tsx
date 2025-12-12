"use client";

import Image from "next/image";
import { Globe2, Users, Plane, Map } from "lucide-react";

export default function AboutPage() {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-muted/40 to-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl opacity-30 -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-primary via-amber-500 to-emerald-500 bg-clip-text text-transparent drop-shadow-sm">
            ✦ About Us ✦
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Your trusted partner for unforgettable journeys across Pakistan.
            We bring you closer to Pakistan&apos;s most beautiful destinations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-[420px] rounded-3xl overflow-hidden shadow-xl group transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
            <Image
              src="https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=1600&q=80"
              alt="Shangrila Resort Skardu, Pakistan"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">
              Explore. Experience. Enjoy.
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              At <strong className="text-primary">Travel with Aina</strong>, we are a Pakistan-based tour
              company with a passion for creating exceptional travel experiences.
              From breathtaking mountains to vibrant city adventures, our
              dedicated team ensures your journey is safe, seamless, and
              unforgettable.
            </p>

          
            <div className="grid grid-cols-2 gap-6 pt-4">
              {[
                { icon: Globe2, text: "Pakistan Destinations" },
                { icon: Users, text: "Expert Local Guides" },
                { icon: Plane, text: "Hassle-Free Travel" },
                { icon: Map, text: "Tailored Itineraries" },
              ].map(({ icon: Icon, text }, idx) => (
                <div
                  key={idx}
                  className="flex items-center space-x-3 p-3 rounded-xl bg-card shadow-sm border border-border/60 hover:shadow-md transition"
                >
                  <Icon className="w-8 h-8 text-primary" />
                  <span className="text-foreground font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 space-y-16">
          {[
            {
              title: "Our Mission – Inspiring the Traveler in You",
              content1:
                "Our mission is simple yet deeply meaningful — to inspire and enable travelers from all walks of life to explore Pakistan&apos;s incredible landscapes, embrace diverse cultures, and create memories that last a lifetime. We believe that every journey has the power to open minds, spark curiosity, and foster connections.",
              content2:
                "With Travel with Aina, every journey immerses you in the heart of each destination — meeting the people, tasting the flavors, hearing the stories, and truly understanding the culture of Pakistan.",
            },
            {
              title: "Our Success Story – From Local Beginnings to National Excellence",
              content1:
                "What started as a small, passionate team of travelers has now grown into a renowned tour company recognized for excellence, trust, and unmatched hospitality across Pakistan. Over the years, we have proudly served thousands of travelers, helping them discover Pakistan in ways they never imagined.",
              content2:
                "Our growth has been fueled by word-of-mouth recommendations, returning clients, and partnerships with trusted travel networks across Pakistan. We consistently raise the bar with quality, safety, and innovative travel experiences.",
            },
            {
              title: "Why Choose Travel with Aina?",
              list: [
                "🏔️ Pakistan&apos;s Northern Areas Expertise",
                "🛠 Tailored Experiences for Every Traveler",
                "🛡 Safety & Comfort First",
                "📸 Memorable Moments Guaranteed",
              ],
            },
            {
              title: "Our Promise for the Future",
              content1:
                "As Travel with Aina continues to grow, our commitment remains unwavering — to provide the highest standard of travel experiences while respecting the cultures, environments, and communities we visit across Pakistan. We are constantly innovating and introducing sustainable travel practices.",
              content2:
                "For us, the greatest success is not measured by miles, but by the smiles we see, the friendships we help create, and the stories our travelers take home. With Travel with Aina, Pakistan is not just a place to visit — it&apos;s a place to belong.",
            },
          ].map((section, idx) => (
            <div
              key={idx}
              className="bg-card/90 backdrop-blur-sm rounded-3xl shadow-md hover:shadow-lg p-10 border border-border/60 transition-all duration-300"
            >
              <h4 className="text-2xl font-bold bg-gradient-to-r from-primary to-amber-500 bg-clip-text text-transparent mb-4">
                {section.title}
              </h4>
              {section.list ? (
                <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                <>
                  <p className="text-foreground/90 leading-relaxed">{section.content1}</p>
                  {section.content2 && (
                    <p className="mt-4 text-foreground/90 leading-relaxed">{section.content2}</p>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
