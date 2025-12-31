"use client";
import { FC } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
export default function Booking() {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-background">
      {/* Modern Mesh Gradient Background */}
      <div className="absolute inset-0 bg-background -z-20" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 blur-[120px] rounded-full mix-blend-screen -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 blur-[100px] rounded-full mix-blend-screen -z-10" />

      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        <h2 className="text-5xl font-extrabold text-center text-foreground tracking-tight drop-shadow-lg">
          Booking <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Information</span>
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto text-lg font-light leading-relaxed">
          Planning your trip is seamless. Here’s everything you need to know about booking with GlobeTrotter Tours.
        </p>

        <div className="grid gap-8">
          {[
            { title: "1. How to Book", text: "Choose your dream destination from our tours, check availability, and contact us via phone or email. You can also use our online inquiry form to reserve your spot." },
            { title: "2. Payment Options", text: "We offer flexible payment options to make your booking convenient:", list: ["Credit/Debit Card (Visa, MasterCard, American Express)", "Bank Transfer", "PayPal", "Cash on arrival (for selected tours)"] },
            { title: "3. Confirmation", text: "Once your booking and payment are received, you’ll get a confirmation email with all trip details, itinerary, and emergency contacts." },
            { title: "4. Cancellation & Refund Policy", text: "We understand that plans can change. Here’s our policy:", list: ["Full refund if cancelled 30 days before departure.", "50% refund if cancelled 15–29 days before departure.", "No refund if cancelled less than 15 days before departure."] },
            { title: "5. Customer Support", text: "Our team is available 24/7 to answer your questions and assist with your booking. You can reach us via:", list: ["Email: support@travelwithaina.com", "Phone: +92 300 0000000", "Live Chat on our website"] }
          ].map((item, index) => (

            <CardContainer key={index} className="inter-var w-full">
              <CardBody className="bg-gradient-to-br from-amber-100 to-orange-100 dark:from-stone-800 dark:to-stone-900 border-amber-200 dark:border-amber-700/30 relative group/card dark:hover:shadow-2xl dark:hover:shadow-primary/[0.3] w-full h-auto rounded-xl p-8 hover:bg-card/80 transition-all duration-300 shadow-xl">
                <CardItem translateZ="50" className="text-2xl font-bold text-black dark:text-white mb-4 group-hover:text-black/80 dark:group-hover:text-white/80 transition-colors">
                  {item.title}
                </CardItem>
                <CardItem translateZ="60" as="p" className="text-gray-800 dark:text-gray-200 leading-relaxed mb-4 font-light">
                  {item.text}
                </CardItem>
                {item.list && (
                  <CardItem translateZ="40" className="w-full">
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-2">
                      {item.list.map((li, i) => <li key={i}>{li}</li>)}
                    </ul>
                  </CardItem>
                )}
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  );
}

