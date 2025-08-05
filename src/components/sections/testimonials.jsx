import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = ({ testimonials }) => {
  return (
    <section className="py-24 bg-white">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm flex flex-col h-full"
            >
              <CardContent className="flex flex-col justify-between h-full p-6">
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <Quote className="h-10 w-10 text-blue-400 opacity-70" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-lg text-slate-700 italic mb-6 leading-relaxed line-clamp-4">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-15 h-15 rounded-full overflow-hidden border-2 border-blue-500 flex-shrink-0">
                    <Image
                      src={testimonial.avatar || "https://placehold.co/400"}
                      alt={testimonial.author}
                      width={60}
                      height={60}
                      unoptimized
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-slate-600">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
