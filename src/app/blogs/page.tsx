"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { blogs } from "./data";
import Image from "next/image";
export default function BlogsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <Card
            key={blog.id}
            className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <Image
              src={blog.image}
              alt={blog.title}
              width={800}
              height={500}
              className="w-full h-56 object-cover"
            />
            <CardHeader>
              <CardTitle className="text-xl font-bold">{blog.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{blog.excerpt}</p>
              <p className="text-sm text-gray-400 mb-4">{blog.date}</p>
              <Link href={`/blogs/${blog.id}`}>
                <Button className="w-full">Read More</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
