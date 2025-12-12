
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import ThemeToggle from "@/components/theme-toggle";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

function Header() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const headerHeight = useTransform(scrollY, [0, 100], ["5rem", "4rem"]);
  // const logoSize = useTransform(scrollY, [0, 100], [52, 40]); // Can't animate Image props easily with motion value, using state/class approach better for simple switch or just CSS scale

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "AI Trip Designer", href: "/ai" },
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blogs" },
    { name: "Tours", href: "/tours" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.header
      style={{ height: headerHeight }}
      className={cn(
        "fixed top-0 z-50 w-full border-b transition-colors duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-background/50 backdrop-blur-sm border-transparent"
      )}
    >
      <div className="container mx-auto flex h-full items-center px-4 text-foreground transition-all">
        <Link href="/" className="flex items-center gap-2 rounded-xs group">
          <motion.div
            animate={{ scale: isScrolled ? 0.8 : 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Image
              src="/logo.png"
              alt="TravelWithAina logo"
              width={52}
              height={52}
              className="rounded-full shadow-sm ring-2 ring-primary/40 group-hover:ring-primary transition-all duration-300"
            />
          </motion.div>
          <span className={cn(
            "font-semibold tracking-wide bg-gradient-to-r from-primary to-emerald-500 bg-clip-text text-transparent transition-all duration-300",
            isScrolled ? "text-sm" : "text-base"
          )}>
            TravelWithAina
          </span>
        </Link>

        <div className="ml-auto hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-2 p-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10">
            {navLinks.map((link) => {
              const isActive = link.href === "/"; // Simplified active state logic for now
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium transition-colors hover:text-white"
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-white/10 rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                  <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-amber-400 to-transparent scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              );
            })}
          </nav>
          <div className="pl-4 border-l border-white/10">
            <ThemeToggle />
          </div>
        </div>

        <div className="ml-auto md:hidden flex items-center gap-4">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition shadow-md">
                <Menu size={22} />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[80%] sm:w-[300px] p-6 bg-background/95 backdrop-blur border-l border-border">
              <SheetHeader className="text-left border-b pb-4 mb-4">
                <SheetTitle className="text-xl font-bold bg-gradient-to-r from-primary to-emerald-500 bg-clip-text text-transparent">
                  TravelWithAina
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="px-4 py-3 text-lg font-medium hover:bg-primary/10 hover:text-primary rounded-lg transition-all">
                    {link.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
export default Header;

