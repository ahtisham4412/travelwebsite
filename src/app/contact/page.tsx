"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "450px",
};

const center = {
  lat: 33.7215,
  lng: 73.0595,
};

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-background flex flex-col items-center justify-center py-16 px-6 mt-7">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Contact Us</h1>
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10">
        <CardContainer className="inter-var w-full">
          <CardBody className="bg-gradient-to-br from-amber-100 to-orange-100 dark:from-stone-800 dark:to-stone-900 border-amber-200 dark:border-amber-700/30 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] w-full h-auto rounded-xl p-8 border">
            <CardItem translateZ="50" className="w-full">
              <h2 className="text-3xl font-bold text-black dark:text-white text-center mb-6">Get in Touch</h2>
            </CardItem>

            <form className="space-y-5">
              <CardItem translateZ="60" className="w-full">
                <Label htmlFor="name">Your Name</Label>
                <Input id="name" type="text" placeholder="Enter your name" className="mt-1" />
              </CardItem>
              <CardItem translateZ="70" className="w-full">
                <Label htmlFor="email">Your Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" className="mt-1" />
              </CardItem>
              <CardItem translateZ="80" className="w-full">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Write your message..." className="mt-1" />
              </CardItem>
              <CardItem translateZ="50" className="w-full pt-4">
                <Button type="submit" className="w-full">Send Message</Button>
              </CardItem>
            </form>

            <CardItem translateZ="40" className="text-muted-foreground text-sm text-center mt-6 w-full">
              Or reach us directly at{" "}
              <Link href="mailto:contact@travelwithaina.com" className="font-semibold text-primary">
                contact@travelwithaina.com
              </Link>
            </CardItem>
          </CardBody>
        </CardContainer>

        <div className="rounded-2xl overflow-hidden shadow-lg border border-border/60 bg-card">
          <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}>
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </section>
  );
}
