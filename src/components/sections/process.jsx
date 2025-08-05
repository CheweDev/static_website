import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Process = ({ steps }) => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Proven Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We follow a systematic approach to ensure your marketing campaigns
            deliver real results for your personal training business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card
              key={step.id}
              className="text-center border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
            >
              <CardHeader>
                <div className="text-6xl mb-4">{step.icon}</div>
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4">
                  {step.id}
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">
                  {step.title}
                </CardTitle>
                <CardDescription className="text-slate-600">
                  {step.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
