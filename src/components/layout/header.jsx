"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Dumbbell, ArrowRight, Menu } from "lucide-react";
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

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-200/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 w-full">
          <div className="hidden md:flex items-center justify-between w-full">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="https://placehold.co/400"
                alt="FitPro Trainers Logo"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full object-cover"
                unoptimized
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                FitPro Trainers
              </span>
            </Link>

            <nav className="flex space-x-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`font-medium transition-colors ${
                      isActive
                        ? "text-blue-600 font-semibold"
                        : "text-slate-600 hover:text-blue-600"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
            <Link href="/#quote">
              <Button className="bg-gradient-to-r btn-rounded-md from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group">
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                Get Free Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile Header */}
          <div className="flex md:hidden items-center justify-between w-full">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-slate-600">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] sm:w-[400px] bg-white/95 backdrop-blur-md"
              >
                <SheetHeader>
                  <SheetTitle>
                    <Link href="/" className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                        <Dumbbell className="h-6 w-6 text-white" />
                      </div>
                      <span className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                        FitPro Trainers
                      </span>
                    </Link>
                  </SheetTitle>
                  <SheetDescription className="sr-only">
                    Navigation menu for FitPro Trainers website.
                  </SheetDescription>
                </SheetHeader>
                <nav className="flex flex-col gap-6 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-slate-700 hover:text-blue-600 text-lg font-medium transition-colors py-2"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>

            <Link href="/#quote">
              <Button
                size="sm"
                className="bg-gradient-to-r btn-rounded-md from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg"
              >
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                Get Free Consulation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
