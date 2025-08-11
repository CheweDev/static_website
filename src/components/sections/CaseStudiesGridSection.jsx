import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function CaseStudiesGridSection({ studies }) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Case Studies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dive deep into our strategies and the measurable impact we've had on
            our clients' businesses.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {studies.map((study) => (
            <Card
              key={study.id}
              className="group btn-rounded-lg hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm overflow-hidden"
            >
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={study.image || "/placeholder.png"}
                  alt={study.title}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-500"
                />
                <Badge className="absolute top-4 left-4 bg-blue-600 text-white">
                  {study.category}
                </Badge>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-slate-900 mb-2">
                  {study.title}
                </CardTitle>
                <CardDescription className="text-slate-600 leading-relaxed">
                  {study.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">
                  Key Results:
                </h3>
                <ul className="space-y-2 mb-6">
                  {study.results.map((result, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-slate-600">{result}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-slate-700 font-semibold mb-6">
                  - {study.client}
                </p>
                <Button className="w-full rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white group">
                  Read Full Case Study
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
