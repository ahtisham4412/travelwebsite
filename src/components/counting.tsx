"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Counting() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    { number: 1500, label: "Happy Customers", color: "text-amber-400" },
    { number: 250, label: "Tours Completed", color: "text-orange-400" },
    { number: 120, label: "Destinations", color: "text-yellow-200" },
  ];

  return (
    <section ref={ref} className="relative mt-20 py-24 px-6 overflow-hidden">
      {/* Aurora Background */}
      <div className="absolute inset-0 bg-gray-950 -z-20" />
      <div className="absolute -top-[50%] -left-[20%] w-[150%] h-[200%] bg-gradient-to-r from-indigo-900/30 via-purple-900/30 to-amber-900/20 blur-3xl rounded-full animate-slower-pulse -z-10" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-center relative z-10">
        {stats.map((stat, i) => (
          <CardContainer key={i} className="inter-var w-full">
            <CardBody className="bg-gradient-to-br from-amber-100 to-orange-100 dark:from-stone-800 dark:to-stone-900 border-amber-200 dark:border-amber-700/30 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] w-full h-auto rounded-xl p-8 border hover:scale-105 transition-transform duration-500">
              <CardItem translateZ="50" className="w-full">
                <h2 className={`text-6xl font-black ${stat.color} mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]`}>
                  {inView ? <CountUp end={stat.number} duration={4} /> : 0}+
                </h2>
              </CardItem>
              <CardItem translateZ="30" className="w-full">
                <p className="text-xl font-medium text-gray-800 dark:text-gray-200 group-hover:text-black dark:group-hover:text-white transition-colors">
                  {stat.label}
                </p>
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  );
}
