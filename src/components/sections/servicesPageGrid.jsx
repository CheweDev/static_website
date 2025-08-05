import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ServicesPageGrid = ({ services }) => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Marketing Solution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you need one service or a complete marketing makeover, we
            have the right solution for your personal training business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              className="group border-none hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm hover:-translate-y-2"
            >
              <CardHeader className="pb-4">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900 mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-slate-600 leading-relaxed mb-4">
                  {service.description}
                </CardDescription>
                <div className="text-2xl font-bold text-blue-600 mb-4">
                  {service.price}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full btn-rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white group">
                  Get Started
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPageGrid;
