"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Typewriter } from "react-simple-typewriter";

export default function HeroSection({ stats }) {
  return (
    <section className="relative overflow-hidden h-full min-h-[90vh] flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg1.jpg"
          alt="Gym background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-xs" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-28 text-white text-center">
        <Badge className="bg-white/20 text-white border-white/30 mb-6 hover:bg-white/30 transition-colors text-sm md:text-base inline-flex items-center">
          <Star className="h-4 w-4 mr-1" />
          #1 Marketing Agency for Personal Trainers
        </Badge>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Grow and Elevate your <br />
          <span className="inline-block text-yellow-400">
            Personal Training Business
          </span>
          <br />
          <span className="inline-block text-yellow-400">
            <Typewriter
              words={[
                "to New Heights",
                "with Proven Marketing",
                "with Scalable Results",
              ]}
              loop={true}
              cursor={false}
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
            <span className="blinking-cursor">_</span>
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl mb-10 text-blue-100 leading-relaxed max-w-2xl mx-auto">
          We craft cutting-edge digital marketing strategies — from SEO to
          social media — tailored to help personal trainers attract more clients
          and grow their business.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/#quote">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-white text-slate-900 font-bold hover:bg-slate-100 shadow-xl hover:shadow-2xl transition-all duration-300 group btn-rounded-lg"
            >
              Get a Free Consultation
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>

          <Link href="/case-studies">
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 bg-transparent btn-rounded-lg"
            >
              View Our Case Studies
            </Button>
          </Link>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-4 sm:gap-x-8 mt-8 justify-center">
          {stats.map((stat, index) => (
            <div key={index} className="text-center min-w-[100px]">
              <div className="text-2xl sm:text-3xl font-bold">{stat.value}</div>
              <div className="text-blue-200 text-xs sm:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
