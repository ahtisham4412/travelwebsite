"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
    
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600 text-lg">
          Here are some of the most common questions travelers ask about{" "}
          <span className="font-semibold text-yellow-600">Travel with Aina</span>.  
          If you still have queries, feel free to reach out!
        </p>
      </div>

      
      <Accordion type="single" collapsible className="space-y-4">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg font-medium">What destinations do you cover?</AccordionTrigger>
          <AccordionContent className="text-gray-600">
            We organize tours across popular destinations worldwide including Turkey, Dubai, Maldives, Europe,
            and breathtaking local adventures across Pakistan.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg font-medium">Do you provide customizable packages?</AccordionTrigger>
          <AccordionContent className="text-gray-600">
            Absolutely! We offer fully customizable travel packages. You can select destinations, activities, 
            accommodation type, and duration according to your preferences and budget.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-lg font-medium">Is there a refund or cancellation policy?</AccordionTrigger>
          <AccordionContent className="text-gray-600">
            Yes, we have a flexible cancellation and refund policy. The amount refunded depends on how many 
            days before departure the cancellation is made. Detailed policies will be shared during booking.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className="text-lg font-medium">How can I book a tour?</AccordionTrigger>
          <AccordionContent className="text-gray-600">
            You can book a tour directly from our website by filling in the booking form, or you can contact 
            our travel advisors for personal guidance and assistance.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger className="text-lg font-medium">Do you offer group discounts?</AccordionTrigger>
          <AccordionContent className="text-gray-600">
            Yes, we provide special discounts for families, students, and corporate groups. The larger the 
            group, the better the discount!
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
