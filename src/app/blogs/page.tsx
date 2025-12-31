"use client";

import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Button } from "@/components/ui/button";
import { blogs } from "./data";
import Image from "next/image";
export default function BlogsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <CardContainer key={blog.id} className="inter-var">
            <CardBody className="bg-gradient-to-br from-amber-100 to-orange-100 dark:from-stone-800 dark:to-stone-900 border-amber-200 dark:border-amber-700/30 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] w-full h-auto rounded-xl p-6 border">
              <CardItem translateZ="50" className="w-full">
                <div className="w-full h-56 rounded-xl overflow-hidden group-hover/card:shadow-xl relative">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover/card:scale-110 transition-transform duration-500"
                  />
                </div>
              </CardItem>
              <CardItem translateZ="60" className="mt-4">
                <h3 className="text-xl font-bold text-black dark:text-white">{blog.title}</h3>
              </CardItem>
              <CardItem translateZ="50" className="w-full mt-4">
                <p className="text-gray-700 dark:text-gray-300 mb-4">{blog.excerpt}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{blog.date}</p>
                <Link href={`/blogs/${blog.id}`}>
                  <Button className="w-full">Read More</Button>
                </Link>
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}
