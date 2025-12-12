"use client";

import { useState } from "react";
import { Calendar, Users, MapPin, CreditCard, CheckCircle, Plane, Shield, Clock } from "lucide-react";

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [bookingDetails, setBookingDetails] = useState({
    destination: "Hunza Valley Escape",
    travelers: 2,
    date: "",
    duration: "5 Days",
    price: "PKR 85,000",
    name: "",
    email: "",
    phone: "",
    paymentMethod: "credit-card"
  });

  const destinations = [
    { id: 1, name: "Hunza Valley Escape", price: "PKR 85,000", duration: "5 Days" },
    { id: 2, name: "Fairy Meadows Adventure", price: "PKR 70,000", duration: "4 Nights" },
    { id: 3, name: "Skardu & Shigar Tour", price: "PKR 95,000", duration: "7 Days" },
    { id: 4, name: "Karachi City Getaway", price: "PKR 55,000", duration: "3 Nights" },
    { id: 5, name: "Lahore Cultural Trip", price: "PKR 65,000", duration: "6 Days" },
    { id: 6, name: "Kumrat Valley Retreat", price: "PKR 80,000", duration: "5 Nights" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 4) {
      setStep(step + 1);
    } else {
      // Handle final submission
      alert("Booking confirmed! We&apos;ll contact you shortly.");
      setStep(1);
      // Reset form
      setBookingDetails({
        destination: "Hunza Valley Escape",
        travelers: 2,
        date: "",
        duration: "5 Days",
        price: "PKR 85,000",
        name: "",
        email: "",
        phone: "",
        paymentMethod: "credit-card"
      });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-8 md:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-500 via-green-500 to-blue-500 bg-clip-text text-transparent mb-3 md:mb-4">
            ✦ Book Your Adventure ✦
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg max-w-2xl mx-auto px-2">
            Secure your spot for an unforgettable journey across Pakistan&apos;s most breathtaking destinations.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {/* Left Column - Booking Form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl shadow-lg md:shadow-xl overflow-hidden border-0 dark:border dark:border-gray-700">
              <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-gray-700 dark:to-gray-700 border-b dark:border-gray-700 p-4 md:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">Booking Details</h2>
                  <div className="flex items-center justify-center sm:justify-end space-x-2 sm:space-x-4">
                    {[1, 2, 3, 4].map((s) => (
                      <div key={s} className="flex items-center">
                        <div className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center text-sm md:text-base ${step >= s ? "bg-green-500 text-white" : "bg-gray-200 dark:bg-gray-600 text-gray-500 dark:text-gray-300"}`}>
                          {step > s ? <CheckCircle className="w-4 h-4 md:w-5 md:h-5" /> : s}
                        </div>
                        {s < 4 && <div className={`w-6 md:w-8 lg:w-12 h-1 ${step > s ? "bg-green-500" : "bg-gray-200 dark:bg-gray-600"}`} />}
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm md:text-base">
                  {step === 1 && "Choose your destination and dates"}
                  {step === 2 && "Enter your personal information"}
                  {step === 3 && "Select payment method"}
                  {step === 4 && "Confirm your booking"}
                </p>
              </div>

              <div className="p-4 md:p-6">
                <form onSubmit={handleSubmit}>
                  {/* Step 1: Destination Selection */}
                  {step === 1 && (
                    <div className="space-y-4 md:space-y-6">
                      <div>
                        <label className="block text-sm md:text-base font-medium text-gray-700 dark:text-gray-300 mb-2">
                          <MapPin className="inline w-4 h-4 mr-2" />
                          Select Destination
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                          {destinations.map((dest) => (
                            <div
                              key={dest.id}
                              onClick={() => setBookingDetails({...bookingDetails, destination: dest.name, price: dest.price, duration: dest.duration})}
                              className={`p-3 md:p-4 rounded-lg md:rounded-xl border-2 cursor-pointer transition-all ${bookingDetails.destination === dest.name ? "border-green-500 bg-green-50 dark:bg-green-900/20 dark:border-green-600" : "border-gray-200 dark:border-gray-600 hover:border-green-300 dark:hover:border-green-500 bg-white dark:bg-gray-700"}`}
                            >
                              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                                <div className="flex-1">
                                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">{dest.name}</h3>
                                  <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 mt-1">{dest.duration}</p>
                                </div>
                                <span className="font-bold text-green-600 dark:text-green-400 text-sm md:text-base mt-1 sm:mt-0">{dest.price}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                        <div>
                          <label className="block text-sm md:text-base font-medium text-gray-700 dark:text-gray-300 mb-2">
                            <Calendar className="inline w-4 h-4 mr-2" />
                            Travel Date
                          </label>
                          <input
                            type="date"
                            required
                            value={bookingDetails.date}
                            onChange={(e) => setBookingDetails({...bookingDetails, date: e.target.value})}
                            className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition text-sm md:text-base"
                          />
                        </div>

                        <div>
                          <label className="block text-sm md:text-base font-medium text-gray-700 dark:text-gray-300 mb-2">
                            <Users className="inline w-4 h-4 mr-2" />
                            Number of Travelers
                          </label>
                          <div className="flex items-center space-x-3 md:space-x-4">
                            <button
                              type="button"
                              onClick={() => setBookingDetails({...bookingDetails, travelers: Math.max(1, bookingDetails.travelers - 1)})}
                              className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-600 text-lg md:text-xl"
                            >
                              -
                            </button>
                            <span className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">{bookingDetails.travelers}</span>
                            <button
                              type="button"
                              onClick={() => setBookingDetails({...bookingDetails, travelers: bookingDetails.travelers + 1})}
                              className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-600 text-lg md:text-xl"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Personal Information */}
                  {step === 2 && (
                    <div className="space-y-4 md:space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                        <div className="sm:col-span-2">
                          <label className="block text-sm md:text-base font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
                          <input
                            type="text"
                            required
                            value={bookingDetails.name}
                            onChange={(e) => setBookingDetails({...bookingDetails, name: e.target.value})}
                            className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition text-sm md:text-base"
                            placeholder="Enter your full name"
                          />
                        </div>

                        <div>
                          <label className="block text-sm md:text-base font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                          <input
                            type="email"
                            required
                            value={bookingDetails.email}
                            onChange={(e) => setBookingDetails({...bookingDetails, email: e.target.value})}
                            className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition text-sm md:text-base"
                            placeholder="you@example.com"
                          />
                        </div>

                        <div>
                          <label className="block text-sm md:text-base font-medium text-gray-700 dark:text-gray-300 mb-2">Phone Number</label>
                          <input
                            type="tel"
                            required
                            value={bookingDetails.phone}
                            onChange={(e) => setBookingDetails({...bookingDetails, phone: e.target.value})}
                            className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition text-sm md:text-base"
                            placeholder="+92 300 1234567"
                          />
                        </div>

                        <div className="sm:col-span-2">
                          <label className="block text-sm md:text-base font-medium text-gray-700 dark:text-gray-300 mb-2">Special Requirements</label>
                          <textarea
                            rows={3}
                            className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition text-sm md:text-base"
                            placeholder="Any dietary restrictions, accessibility needs, etc."
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Payment */}
                  {step === 3 && (
                    <div className="space-y-4 md:space-y-6">
                      <div>
                        <label className="block text-sm md:text-base font-medium text-gray-700 dark:text-gray-300 mb-3 md:mb-4">
                          <CreditCard className="inline w-4 h-4 mr-2" />
                          Payment Method
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                          {["credit-card", "jazzcash", "easypaisa", "bank-transfer"].map((method) => (
                            <div
                              key={method}
                              onClick={() => setBookingDetails({...bookingDetails, paymentMethod: method})}
                              className={`p-3 md:p-4 rounded-lg md:rounded-xl border-2 cursor-pointer transition-all ${bookingDetails.paymentMethod === method ? "border-green-500 bg-green-50 dark:bg-green-900/20 dark:border-green-600" : "border-gray-200 dark:border-gray-600 hover:border-green-300 dark:hover:border-green-500 bg-white dark:bg-gray-700"}`}
                            >
                              <div className="flex items-center">
                                <div className={`w-5 h-5 md:w-6 md:h-6 rounded-full border-2 flex items-center justify-center mr-3 ${bookingDetails.paymentMethod === method ? "border-green-500" : "border-gray-300 dark:border-gray-500"}`}>
                                  {bookingDetails.paymentMethod === method && (
                                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500" />
                                  )}
                                </div>
                                <span className="font-medium text-gray-900 dark:text-white capitalize text-sm md:text-base">{method.replace("-", " ")}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {bookingDetails.paymentMethod === "credit-card" && (
                        <div className="space-y-3 md:space-y-4 p-4 md:p-6 bg-gray-50 dark:bg-gray-700 rounded-lg md:rounded-xl">
                          <div>
                            <label className="block text-sm md:text-base font-medium text-gray-700 dark:text-gray-300 mb-2">Card Number</label>
                            <input
                              type="text"
                              className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition text-sm md:text-base"
                              placeholder="1234 5678 9012 3456"
                            />
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                            <div>
                              <label className="block text-sm md:text-base font-medium text-gray-700 dark:text-gray-300 mb-2">Expiry Date</label>
                              <input
                                type="text"
                                className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition text-sm md:text-base"
                                placeholder="MM/YY"
                              />
                            </div>
                            <div>
                              <label className="block text-sm md:text-base font-medium text-gray-700 dark:text-gray-300 mb-2">CVV</label>
                              <input
                                type="text"
                                className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition text-sm md:text-base"
                                placeholder="123"
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Step 4: Confirmation */}
                  {step === 4 && (
                    <div className="space-y-4 md:space-y-6">
                      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg md:rounded-xl p-4 md:p-6">
                        <div className="flex items-center justify-center mb-3 md:mb-4">
                          <div className="w-12 h-12 md:w-16 md:h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                            <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-green-600 dark:text-green-400" />
                          </div>
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-center text-gray-900 dark:text-white mb-1 md:mb-2">Ready to Confirm!</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-center text-sm md:text-base">
                          Please review your booking details before confirmation.
                        </p>
                      </div>

                      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg md:rounded-xl p-4 md:p-6">
                        <h4 className="font-bold text-gray-900 dark:text-white mb-3 md:mb-4 text-base md:text-lg">Booking Summary</h4>
                        <div className="space-y-2 md:space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600 dark:text-gray-300 text-sm md:text-base">Destination:</span>
                            <span className="font-semibold text-gray-900 dark:text-white text-sm md:text-base text-right">{bookingDetails.destination}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600 dark:text-gray-300 text-sm md:text-base">Duration:</span>
                            <span className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">{bookingDetails.duration}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600 dark:text-gray-300 text-sm md:text-base">Travelers:</span>
                            <span className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">{bookingDetails.travelers} Person(s)</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600 dark:text-gray-300 text-sm md:text-base">Date:</span>
                            <span className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">{bookingDetails.date || "To be selected"}</span>
                          </div>
                          <div className="flex justify-between items-center pt-2 md:pt-3 border-t border-gray-200 dark:border-gray-600">
                            <span className="text-gray-600 dark:text-gray-300 text-base md:text-lg">Total Amount:</span>
                            <span className="text-xl md:text-2xl font-bold text-green-600 dark:text-green-400">{bookingDetails.price}</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg md:rounded-xl p-4 md:p-6">
                        <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-base md:text-lg">Important Information</h4>
                        <ul className="text-xs md:text-sm text-gray-600 dark:text-gray-300 space-y-1 md:space-y-2">
                          <li className="flex items-start">
                            <Shield className="w-3 h-3 md:w-4 md:h-4 mr-2 mt-0.5 text-blue-500 dark:text-blue-400 flex-shrink-0" />
                            <span>Full refund available up to 7 days before travel</span>
                          </li>
                          <li className="flex items-start">
                            <Plane className="w-3 h-3 md:w-4 md:h-4 mr-2 mt-0.5 text-blue-500 dark:text-blue-400 flex-shrink-0" />
                            <span>Flight details will be shared 48 hours before departure</span>
                          </li>
                          <li className="flex items-start">
                            <Clock className="w-3 h-3 md:w-4 md:h-4 mr-2 mt-0.5 text-blue-500 dark:text-blue-400 flex-shrink-0" />
                            <span>Booking confirmation sent within 2 hours</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 pt-6 md:pt-8 border-t border-gray-200 dark:border-gray-700">
                    {step > 1 ? (
                      <button
                        type="button"
                        onClick={() => setStep(step - 1)}
                        className="px-4 md:px-8 py-2 md:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-600 transition text-sm md:text-base order-2 sm:order-1"
                      >
                        Back
                      </button>
                    ) : (
                      <div className="order-2 sm:order-1" />
                    )}
                    
                    <button
                      type="submit"
                      className="px-4 md:px-8 py-2 md:py-3 rounded-lg bg-gradient-to-r from-green-500 to-blue-500 text-white font-medium hover:from-green-600 hover:to-blue-600 transition text-sm md:text-base order-1 sm:order-2"
                    >
                      {step < 4 ? "Continue" : "Confirm Booking"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Right Column - Summary & Features */}
          <div className="space-y-4 md:space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl shadow-lg md:shadow-xl overflow-hidden border-0 dark:border dark:border-gray-700">
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-gray-700 dark:to-gray-700 p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">Price Summary</h3>
              </div>
              <div className="p-4 md:p-6">
                <div className="space-y-2 md:space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300 text-sm md:text-base">Tour Package</span>
                    <span className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">{bookingDetails.price}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300 text-sm md:text-base">Travelers</span>
                    <span className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">× {bookingDetails.travelers}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs md:text-sm text-gray-500 dark:text-gray-400">
                    <span>Taxes & Fees</span>
                    <span>Included</span>
                  </div>
                  <div className="flex justify-between items-center text-xs md:text-sm text-gray-500 dark:text-gray-400">
                    <span>Travel Insurance</span>
                    <span>Optional</span>
                  </div>
                  <div className="pt-3 md:pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex justify-between items-center">
                      <span className="text-base md:text-lg font-bold text-gray-900 dark:text-white">Total</span>
                      <span className="text-xl md:text-2xl font-bold text-green-600 dark:text-green-400">{bookingDetails.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl shadow-lg md:shadow-xl overflow-hidden border-0 dark:border dark:border-gray-700">
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white flex items-center mb-3 md:mb-4">
                  <Shield className="w-4 h-4 md:w-5 md:h-5 mr-2 text-green-500 dark:text-green-400" />
                  Why Book With Us
                </h3>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-start space-x-2 md:space-x-3">
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">Best Price Guarantee</h4>
                      <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 mt-0.5">Found a lower price? We&apos;ll match it.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2 md:space-x-3">
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-3 h-3 md:w-4 md:h-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">Flexible Cancellation</h4>
                      <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 mt-0.5">Free cancellation up to 7 days before.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2 md:space-x-3">
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-3 h-3 md:w-4 md:h-4 text-yellow-600 dark:text-yellow-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">24/7 Support</h4>
                      <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 mt-0.5">Our team is always here to help.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-xl p-4 md:p-6 text-white">
              <h3 className="font-bold text-lg md:text-xl mb-1 md:mb-2">Need Help?</h3>
              <p className="mb-3 md:mb-4 text-sm md:text-base">Our travel experts are ready to assist you.</p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/20 flex items-center justify-center mr-2 md:mr-3">
                    <span className="text-xs md:text-sm">📞</span>
                  </div>
                  <div>
                    <p className="text-xs md:text-sm opacity-90">Call us</p>
                    <p className="font-bold text-sm md:text-base">+92 300 123 4567</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/20 flex items-center justify-center mr-2 md:mr-3">
                    <span className="text-xs md:text-sm">✉️</span>
                  </div>
                  <div>
                    <p className="text-xs md:text-sm opacity-90">Email</p>
                    <p className="font-bold text-sm md:text-base">support@travelwithaina.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
