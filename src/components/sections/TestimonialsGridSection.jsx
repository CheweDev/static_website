"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialsCarouselSection({ testimonials }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying || !testimonials?.length) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, testimonials?.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToPrevious = () => {
    const newIndex =
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    const newIndex =
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  };

  if (!testimonials?.length) {
    return null;
  }

  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're proud of the results we deliver and the strong relationships
            we build with our clients.
          </p>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm mx-auto max-w-4xl">
                    <CardContent className="p-8 md:p-12">
                      <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                        <div className="flex-shrink-0 rounded-full">
                          <Image
                            src={testimonial.avatar || "/placeholder.png"}
                            alt={testimonial.author}
                            width={120}
                            height={120}
                            className="rounded-full border-4 border-blue-500 shadow-lg"
                          />
                        </div>

                        <div className="flex-grow text-center md:text-left">
                          <div className="flex justify-center md:justify-start items-center mb-4">
                            <Quote className="h-12 w-12 text-blue-400 opacity-70 mr-4" />
                            <div className="flex">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="h-6 w-6 text-yellow-400 fill-yellow-400"
                                />
                              ))}
                            </div>
                          </div>

                          <p className="text-xl md:text-2xl text-slate-700 italic mb-6 leading-relaxed">
                            "{testimonial.quote}"
                          </p>

                          <div>
                            <p className="font-bold text-xl text-slate-900 mb-1">
                              {testimonial.author}
                            </p>
                            <p className="text-lg text-slate-600">
                              {testimonial.title}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 rounded-full p-3 shadow-lg hover:shadow-xl group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-slate-700 group-hover:text-blue-600 transition-colors" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 rounded-full p-3 shadow-lg hover:shadow-xl group"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-slate-700 group-hover:text-blue-600 transition-colors" />
          </button>
        </div>

        <div className="flex justify-center space-x-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-blue-600 scale-125"
                  : "bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <div className="mt-6 max-w-md mx-auto bg-slate-200 rounded-full h-1 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300 ease-out"
            style={{
              width: `${((currentIndex + 1) / testimonials.length) * 100}%`,
            }}
          />
        </div>
      </div>
    </section>
  );
}
