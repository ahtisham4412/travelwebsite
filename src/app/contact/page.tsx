"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
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
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10">
        <Card className="shadow-lg border border-border/60 bg-card">
          <CardContent className="p-8 space-y-6">
            <h2 className="text-3xl font-bold text-foreground text-center">Get in Touch</h2>
            
            <form className="space-y-5">
              <div>
                <Label htmlFor="name">Your Name</Label>
                <Input id="name" type="text" placeholder="Enter your name" className="mt-1"/>
              </div>
              <div>
                <Label htmlFor="email">Your Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" className="mt-1"/>
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Write your message..." className="mt-1"/>
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>

            <p className="text-muted-foreground text-sm text-center">
              Or reach us directly at{" "}
              <Link href="mailto:contact@travelwithaina.com" className="font-semibold text-primary">
                contact@travelwithaina.com
              </Link>
            </p>
          </CardContent>
        </Card>

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
