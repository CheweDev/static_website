import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Hero = ({ stats }) => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-14">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="text-white text-center lg:text-left">
            <Badge className="bg-white/20 text-white border-white/30 mb-4 md:mb-6 hover:bg-white/30 transition-colors text-sm md:text-base">
              <Star className="h-4 w-4 mr-1" />
              #1 Rated Personal Training Platform
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 leading-tight">
              Transform Your
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Fitness Journey
              </span>
            </h1>
            <p className="text-lg sm:text-xl mb-8 md:mb-10 text-blue-100 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Connect with elite certified trainers who create personalized
              programs tailored to your unique goals, lifestyle, and fitness
              level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/#quote">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-white text-slate-900 font-bold hover:bg-slate-100 shadow-xl hover:shadow-2xl transition-all duration-300 group btn-rounded-md cursor-pointer"
                >
                  Start Your Journey
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 bg-transparent btn-rounded-md cursor-pointer"
                >
                  Explore Services
                </Button>
              </Link>
            </div>
            <div className="flex items-center space-x-4 sm:space-x-8 mt-8 md:mt-12 justify-center lg:justify-start">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold">
                    {stat.value}
                  </div>

                  <div className="text-blue-200 text-xs sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <div className="absolute -inset-4 sm:-inset-6 md:-inset-8 bg-gradient-to-br from-white/15 to-transparent rounded-3xl backdrop-blur-sm z-0"></div>
            <div className="relative z-10">
              <Image
                src="https://placehold.co/600x400"
                alt="Professional personal trainer working with client"
                width={500}
                height={600}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="w-full h-auto rounded-3xl shadow-2xl"
                unoptimized
              />
            </div>
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-4 shadow-2xl z-20">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm sm:text-base">
                    Results Guaranteed
                  </div>
                  <div className="text-slate-600 text-xs sm:text-sm">
                    30-day money back
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
