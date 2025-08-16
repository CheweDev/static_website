import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Target,
  TrendingUp,
  Users,
  Search,
  Globe,
  BarChart3,
} from "lucide-react";

const marketingApproaches = [
  {
    title: "Local Market Focus",
    description:
      "We help you dominate your specific geographic area and target audience",
    icon: Target,
    features: [
      "Location-based keyword targeting",
      "Google My Business optimization",
      "Local competitor analysis",
    ],
  },
  {
    title: "Niche Specialization",
    description:
      "Whether you're a boxing trainer or yoga instructor, we tailor strategies to your specialty",
    icon: Users,
    features: [
      "Specialty-specific content",
      "Targeted audience research",
      "Niche keyword optimization",
    ],
  },
  {
    title: "Data-Driven Results",
    description: "Every strategy is backed by research and measurable outcomes",
    icon: TrendingUp,
    features: [
      "Performance tracking",
      "ROI measurement",
      "Continuous optimization",
    ],
  },
];

const marketingChannels = [
  {
    name: "Search Engine Optimization",
    icon: Search,
    description: "Get found when people search for trainers",
  },
  {
    name: "Website Development",
    icon: Globe,
    description: "Professional sites that convert visitors to clients",
  },
  {
    name: "Digital Advertising",
    icon: BarChart3,
    description: "Targeted ads that bring qualified leads",
  },
];

export default function MarketingApproachSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-green-100 text-green-700 mb-4">
            Our Approach
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How We Help You Succeed
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We understand that every personal trainer's business is unique. Our
            approach is tailored to your specific goals, location, and target
            audience.
          </p>
        </div>

        {/* Marketing Approaches */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {marketingApproaches.map((approach, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl btn-rounded-lg transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-2"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <approach.icon className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {approach.title}
                </CardTitle>
                <p className="text-gray-600">{approach.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {approach.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Marketing Channels */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Multi-Channel Marketing Strategy
            </h3>
            <p className="text-blue-100">
              We use proven digital marketing channels to maximize your reach
              and results
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {marketingChannels.map((channel, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <channel.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold text-lg mb-2">{channel.name}</h4>
                <p className="text-blue-100 text-sm">{channel.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
