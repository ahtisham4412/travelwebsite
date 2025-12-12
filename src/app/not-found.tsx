import type { ReactElement } from "react";
import Link from "next/link";

export default function NotFound(): ReactElement {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center text-center gap-4 p-8">
      <h1 className="text-5xl font-extrabold">404</h1>
      <p className="text-lg text-muted-foreground">We couldn’t find that page.</p>
      <Link href="/" className="mt-4 rounded-md bg-primary px-4 py-2 text-white hover:bg-primary/90">Go home</Link>
    </section>
  );
}


