import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { trainerSpecialties } from "@/lib/data";

export default function TrainerSpecialtiesSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-center mb-16">
        <Badge className="bg-blue-100 text-blue-700 mb-4">Our Expertise</Badge>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          We Help 35+ Types of Personal Trainers Get Found Online
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          From boxing trainers to prenatal specialists, we understand the unique
          search landscape each fitness professional needs to dominate. Here are
          the trainer specialties we help rank #1 in their local markets.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {trainerSpecialties.map((category, index) => (
          <Card
            key={index}
            className="group hover:shadow-2xl btn-rounded-lg transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-2"
          >
            <CardHeader className="pb-4">
              <Image
                src="/placeholder.png"
                alt="FitPro Trainers team meeting"
                width={60}
                height={60}
                className="btn-rounded-lg shadow-xl"
              />
              <CardTitle className="text-xl font-bold text-slate-900 mb-2">
                {category.category}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-4">
                {category.specialties.map((specialty, idx) => (
                  <Badge key={idx} variant="secondary" className="mr-2 mb-2">
                    {specialty}
                  </Badge>
                ))}
              </div>
              <div className="text-sm text-slate-600 bg-slate-50 p-3 rounded-lg">
                <strong>Search Example:</strong>
                <br />"{category.searchExample}"
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* SEO Stats Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
        <h3 className="text-2xl font-bold mb-6">
          Why Local SEO Matters for Personal Trainers
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-3xl font-bold mb-2">97%</div>
            <div className="text-blue-100">
              of people search online for local services
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">75%</div>
            <div className="text-blue-100">
              never scroll past the first page of results
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">3x</div>
            <div className="text-blue-100">
              more likely to visit businesses that rank #1
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
