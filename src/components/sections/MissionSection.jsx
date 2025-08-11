import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function MissionSection({ missionCards }) {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Mission
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            To empower personal trainers with the digital marketing tools and
            strategies they need to build sustainable, profitable businesses
            while focusing on what they do best - transforming lives through
            fitness.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {missionCards.map((card) => (
            <Card
              key={card.id}
              className="group hover:shadow-2xl btn-rounded-lg transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm text-center"
            >
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <card.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900">
                  {card.title}
                </CardTitle>
                <CardDescription className="text-base text-slate-600">
                  {card.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
