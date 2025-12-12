"use client";
import { FC } from "react";
export default function Booking() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Modern Mesh Gradient Background */}
      <div className="absolute inset-0 bg-gray-950 -z-20" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-900/20 blur-[120px] rounded-full mix-blend-screen -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/20 blur-[100px] rounded-full mix-blend-screen -z-10" />

      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        <h2 className="text-5xl font-extrabold text-center text-white tracking-tight drop-shadow-lg">
          Booking <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-500">Information</span>
        </h2>
        <p className="text-center text-gray-300 max-w-2xl mx-auto text-lg font-light leading-relaxed">
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
            <div key={index} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-8 hover:bg-white/10 transition-all duration-300 shadow-xl group">
              <h3 className="text-2xl font-bold text-amber-400 mb-4 group-hover:text-amber-300 transition-colors">{item.title}</h3>
              <p className="text-gray-200 leading-relaxed mb-4 font-light">
                {item.text}
              </p>
              {item.list && (
                <ul className="list-disc list-inside text-gray-400 space-y-2 ml-2">
                  {item.list.map((li, i) => <li key={i}>{li}</li>)}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

