import Link from "next/link";
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

const PricingTiers = ({ tiers }) => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Marketing Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Invest in your business growth with our tailored marketing solutions
            for personal trainers.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={`group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm flex flex-col ${
                tier.highlight
                  ? "border-2 border-blue-600 shadow-xl scale-105 bg-gradient-to-br from-blue-50 to-white"
                  : ""
              }`}
            >
              <CardHeader className="text-center pb-6">
                <CardTitle
                  className={`text-3xl font-bold mb-2 ${
                    tier.highlight ? "text-blue-700" : "text-slate-900"
                  }`}
                >
                  {tier.name}
                </CardTitle>
                <CardDescription className="text-slate-600 mb-4">
                  {tier.description}
                </CardDescription>
                <div className="text-5xl font-bold text-slate-900 mb-2">
                  {tier.price}
                  <span className="text-xl text-slate-600"> {tier.period}</span>
                </div>
                {tier.highlight && (
                  <Badge className="bg-blue-600 text-white mx-auto mt-2">
                    Most Popular
                  </Badge>
                )}
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button
                    className={`w-full btn-rounded-lg text-lg py-6 shadow-lg hover:shadow-xl transition-all duration-300 group ${
                      tier.highlight
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                        : "bg-slate-100 text-slate-800 hover:bg-slate-200"
                    }`}
                  >
                    {tier.buttonText}
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingTiers;
