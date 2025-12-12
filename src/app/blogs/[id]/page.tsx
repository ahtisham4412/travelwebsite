import type { Metadata } from "next";
import type { ReactElement } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogs } from "../data";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const blog = blogs.find((b) => String(b.id) === id);
  if (!blog) return { title: "Blog not found" };
  return {
    title: blog.title,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      images: [{ url: blog.image }],
    },
  };
}

export default async function BlogDetail({ params }: { params: Promise<{ id: string }> }): Promise<ReactElement> {
  const { id } = await params;
  const blog = blogs.find((b) => String(b.id) === id);
  if (!blog) return notFound();
  return (
    <article className="mx-auto max-w-3xl px-6 py-12 space-y-6">
      <h1 className="text-3xl font-extrabold">{blog.title}</h1>
      <p className="text-sm text-muted-foreground">{blog.date}</p>
      <div className="overflow-hidden rounded-xl">
        <Image src={blog.image} alt={blog.title} width={1200} height={600} className="h-72 w-full object-cover" />
      </div>
      <p className="leading-7 text-gray-700">
        {blog.content || blog.excerpt}
      </p>
    </article>
  );
}


