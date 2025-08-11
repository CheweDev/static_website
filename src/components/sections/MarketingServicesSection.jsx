import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Search,
  Globe,
  Target,
  Users,
  BarChart3,
  CheckCircle,
} from "lucide-react";

// Create a mapping from string names to actual icon components
const iconMap = {
  Search,
  Globe,
  Target,
  Users,
  BarChart3,
};

export default function MarketingServicesSection({ services }) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Marketing Solutions for Trainers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive suite of digital marketing services
            designed to help personal trainers attract more clients, build their
            brand, and grow their business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon.name || service.icon];
            return (
              <Card
                key={service.id}
                className="group hover:shadow-2xl btn-rounded-lg transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-2"
              >
                <CardHeader className="pb-4">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    {IconComponent && (
                      <IconComponent className="h-8 w-8 text-white" />
                    )}
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 mb-2 text-center">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 leading-relaxed mb-4 text-center">
                    {service.description}
                  </CardDescription>
                  {/* Removed the price display */}
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
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
