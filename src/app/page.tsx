import React from "react";
import Middle from "@/components/middle";
import dynamic from "next/dynamic";

const Counting = dynamic(() => import("@/components/counting"), {
  loading: () => <div className="h-40 bg-secondary/20 animate-pulse rounded-lg container mx-auto" />
});
const Tours = dynamic(() => import("@/components/tours"), {
  loading: () => <div className="h-[500px] bg-secondary/10 animate-pulse rounded-lg container mx-auto my-16" />
});
const Tips = dynamic(() => import("@/components/tips"));
const Reviews = dynamic(() => import("@/components/Reviews"), {
  loading: () => <div className="h-64 bg-secondary/10 animate-pulse rounded-lg container mx-auto my-16" />
});
const Booking = dynamic(() => import("@/components/booking"));

function Page() {
  return (
    <div className="space-y-0 pb-20">
      <Middle />
      <Counting />
      <div className="space-y-24">
        <Tours />
        <Tips />
        <Reviews />
        <Booking />
      </div>
    </div>
  );
}

export default Page;