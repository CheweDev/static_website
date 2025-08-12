"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, SquarePen } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/data";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="fixed top-2 left-1/2 -translate-x-1/2 z-50 bg-black/40 border-0 backdrop-blur-md rounded-full px-6 py-3 max-w-7xl w-[90%]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center w-full">
          <div className="hidden md:flex items-center justify-between w-full">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/placeholder.png"
                width={40}
                height={40}
                alt="app logo"
                className="h-10 w-10 rounded-full"
              />
              <span
                className="text-lg font-semibold bg-gradient-to-r text-white bg-clip-text"
                style={{ fontFamily: "Debata" }}
              >
                LeadLift
              </span>
            </Link>
            <nav className="flex space-x-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`font-medium transition-colors text-white ${
                      isActive
                        ? "text-yellow-400 font-semibold"
                        : "text-slate-600"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
            <Link href="/#quote">
              <Button className="rounded-full cursor-pointer bg-gray-300 hover:bg-white tracking-widest shadow-lg hover:shadow-xl transition-all duration-300 group">
                <SquarePen className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                Free Consultation
              </Button>
            </Link>
          </div>
          <div className="flex md:hidden items-center justify-between w-full">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/placeholder.png"
                width={40}
                height={40}
                alt="app logo"
                className="h-10 w-10 rounded-full"
              />
              <span
                className="text-lg font-semibold bg-gradient-to-r text-white bg-clip-text"
                style={{ fontFamily: "Debata" }}
              >
                LeadLift
              </span>
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[250px] sm:w-[300px] bg-white/70 backdrop-blur-md p-4"
              >
                <SheetHeader>
                  <SheetTitle>
                    <Link href="/" className="flex items-center space-x-3">
                      <Image
                        src="/placeholder.png"
                        width={40}
                        height={40}
                        alt="app logo"
                        className="h-10 w-10 rounded-full"
                      />
                      <span
                        className="text-lg font-semibold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent"
                        style={{ fontFamily: "Debata" }}
                      >
                        LeadLift
                      </span>
                    </Link>
                  </SheetTitle>
                  <SheetDescription className="sr-only">
                    Navigation menu for NextEdge website.
                  </SheetDescription>
                </SheetHeader>
                <nav className="flex flex-col gap-6 mt-8">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        className={`font-medium transition-colors hover:text-blue-600 ${
                          isActive
                            ? "text-blue-600 font-semibold"
                            : "text-slate-600"
                        }`}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
