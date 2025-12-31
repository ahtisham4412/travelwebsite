"use client";

import { useMemo, useState } from "react";
import { Sparkles, Send, Mountain, Umbrella, Castle, Trees, Camera, Tent } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { cn } from "@/lib/utils";

type Message = {
  role: "user" | "assistant";
  content: string;
};

// --- Pakistan-only destinations array with real image URLs ---
const destinations = [
  {
    id: 1,
    title: "Skardu Adventure",
    location: "Skardu, Gilgit-Baltistan",
    image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=80",
    price: "PKR 145,000",
    description: "Mountain trekking and lake exploration in Shangrila"
  },
  {
    id: 2,
    title: "Hunza Valley Retreat",
    location: "Hunza Valley, Gilgit-Baltistan",
    image: "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=800&q=80",
    price: "PKR 125,000",
    description: "Apricot orchards and Rakaposhi mountain views"
  },
  {
    id: 3,
    title: "Swat Paradise",
    location: "Swat Valley, Khyber Pakhtunkhwa",
    image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=800&q=80",
    price: "PKR 85,000",
    description: "Mingora lakes and Malam Jabba skiing"
  },
  {
    id: 4,
    title: "Murree Hills Escape",
    location: "Murree, Punjab",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    price: "PKR 65,000",
    description: "Pine forests and colonial-era architecture"
  },
  {
    id: 5,
    title: "Neelum Valley Trek",
    location: "Neelum Valley, Azad Kashmir",
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80",
    price: "PKR 95,000",
    description: "Waterfalls and pristine rivers in Kashmir"
  },
  {
    id: 6,
    title: "Chitral Exploration",
    location: "Chitral, Khyber Pakhtunkhwa",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80",
    price: "PKR 110,000",
    description: "Kalash valleys and Tirich Mir views"
  },
  {
    id: 7,
    title: "Lahore Heritage Tour",
    location: "Lahore, Punjab",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
    price: "PKR 55,000",
    description: "Mughal architecture and food streets"
  },
  {
    id: 8,
    title: "Fairy Meadows Camp",
    location: "Fairy Meadows, Gilgit-Baltistan",
    image: "https://images.unsplash.com/photo-1534430480872-349838824524?auto=format&fit=crop&w=800&q=80",
    price: "PKR 135,000",
    description: "Nanga Parbat base camp camping"
  },
  {
    id: 9,
    title: "Moenjodaro Discovery",
    location: "Moenjodaro, Sindh",
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=800&q=80",
    price: "PKR 75,000",
    description: "Ancient Indus Valley civilization ruins"
  },
  {
    id: 10,
    title: "Karachi Coastal Trip",
    location: "Karachi, Sindh",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    price: "PKR 60,000",
    description: "Beaches, seafood, and city lights"
  }
];

const starterPrompt = "Design me a 5-day Pakistan trip with mountains, culture, and local food.";

export function AIShowcase() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Salam traveler! I can design your perfect Pakistan trip. Tell me your preferences for mountains, culture, or beaches." },
  ]);
  const [input, setInput] = useState(starterPrompt);
  const [isTyping, setIsTyping] = useState(false);

  const displayedMessages = useMemo(
    () => (isTyping ? [...messages, { role: "assistant", content: "Planning your Pakistan adventure..." }] : messages),
    [isTyping, messages],
  );

  function sendMessage() {
    if (!input.trim()) return;
    const nextUser: Message = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, nextUser]);
    setInput("");
    setIsTyping(true);

    const reply: Message = {
      role: "assistant",
      content: "Here's your Pakistan trip: Day 1 Lahore Heritage (Badshahi Mosque, Food Street), Day 2 Fly to Skardu, Day 3 Shangrila Lake & Kachura, Day 4 Deosai Plains, Day 5 Hunza Valley with Rakaposhi views. All stays under PKR 15,000/night.",
    };

    setTimeout(() => {
      setMessages((prev) => [...prev, reply]);
      setIsTyping(false);
    }, 850);
  }

  return (
    <section className="relative isolate overflow-hidden rounded-3xl border bg-gradient-to-br from-green-50 via-blue-50 to-white p-6 shadow-lg sm:p-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,102,0,0.1),transparent_35%),radial-gradient(circle_at-80%_0%,rgba(0,51,153,0.1),transparent_30%)]" />
      <div className="relative grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm font-medium text-green-700">
            <Sparkles className="h-4 w-4" />
            <span>🇵🇰 Pakistan AI Trip Designer · Local & Smart</span>
          </div>
          <h2 className="text-balance text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            Design your perfect Pakistan adventure with AI
          </h2>
          <p className="text-gray-600 text-base leading-relaxed sm:text-lg">
            Describe what you want to experience in Pakistan. Our AI creates complete itineraries with local stays, transport, and authentic experiences.
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { icon: Mountain, label: "Northern Areas" },
              { icon: Castle, label: "Mughal Heritage" },
              { icon: Umbrella, label: "Valley Retreats" },
              { icon: Trees, label: "Forest & Lakes" },
              { icon: Camera, label: "Photography Tours" },
              { icon: Tent, label: "Adventure Camping" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 rounded-xl border border-green-200 bg-white/80 px-3 py-2 text-sm shadow-sm backdrop-blur"
              >
                <item.icon className="h-4 w-4 text-green-600" />
                <span className="text-gray-700">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-green-200 bg-white/90 shadow-inner backdrop-blur">
            <div className="flex items-center justify-between border-b border-green-100 px-4 py-3">
              <div className="flex items-center gap-2 text-sm text-green-700">
                <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                <span>🇵🇰 Pakistan Travel Assistant</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span>All prices in Pakistani Rupees</span>
              </div>
            </div>
            <div className="space-y-3 px-4 py-4 max-h-[340px] overflow-y-auto">
              {displayedMessages.map((msg, idx) => (
                <div
                  key={`${msg.role}-${idx}`}
                  className={cn(
                    "flex w-full",
                    msg.role === "user" ? "justify-end" : "justify-start",
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[85%] rounded-2xl px-3 py-2 text-sm shadow-sm",
                      msg.role === "user"
                        ? "bg-green-600 text-white"
                        : "bg-green-50 text-gray-800 border border-green-100",
                    )}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 border-t border-green-100 bg-green-50/80 px-3 py-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    sendMessage();
                  }
                }}
                className="flex-1 rounded-lg border border-green-300 bg-white px-3 py-2 text-sm shadow-sm outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Ask for northern areas, cultural heritage, budget in PKR..."
              />
              <Button size="icon" onClick={sendMessage} className="h-10 w-10 bg-green-600 hover:bg-green-700">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between gap-2">
            <p className="text-sm font-semibold uppercase tracking-wide text-green-700">
              🇵🇰 Pakistan Destinations
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <div className="flex h-6 items-center gap-1 rounded-full bg-white/80 px-2 shadow-sm backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                <span>All in PKR</span>
              </div>
              <div className="flex h-6 items-center gap-1 rounded-full bg-white/80 px-2 shadow-sm backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-blue-500" />
                <span>Pakistan Only</span>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {destinations.slice(0, 4).map((idea) => (
              <CardContainer key={idea.id} className="inter-var">
                <CardBody className="bg-gradient-to-br from-amber-100 to-orange-100 dark:from-stone-800 dark:to-stone-900 border-amber-200 dark:border-amber-700/30 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] w-full h-auto rounded-xl p-4 border overflow-hidden">
                  <CardItem translateZ="50" className="w-full mt-2">
                    <div className="relative h-36 w-full rounded-xl overflow-hidden group-hover/card:shadow-xl">
                      <Image
                        src={idea.image}
                        alt={idea.title}
                        fill
                        className="object-cover group-hover/card:scale-110 transition-transform duration-500"
                        sizes="(min-width: 1024px) 300px, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                  </CardItem>
                  <CardItem translateZ="60" className="mt-4">
                    <h3 className="text-base font-bold text-black dark:text-white">{idea.title}</h3>
                    <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">{idea.description}</p>
                  </CardItem>
                  <div className="flex items-center justify-between mt-4">
                    <CardItem translateZ="40" className="bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded text-sm font-bold text-black dark:text-white">
                      {idea.price}
                    </CardItem>
                    <CardItem translateZ="40" className="text-xs text-gray-600 dark:text-gray-400">
                      {idea.location}
                    </CardItem>
                  </div>
                  <CardItem translateZ="30" className="w-full mt-4">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                      Book Pakistan Tour
                    </Button>
                  </CardItem>
                </CardBody>
              </CardContainer>
            ))}
          </div>

          <div className="rounded-xl border border-green-200 bg-green-50/50 p-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-lg">🇵🇰</span>
              </div>
              <div>
                <p className="font-semibold text-green-800">Why Pakistan?</p>
                <p className="text-xs text-gray-600">Home to 5 of the 14 highest peaks, ancient civilizations, and warm hospitality.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AIShowcase;
