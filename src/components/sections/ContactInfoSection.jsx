import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ContactInfoSection({ methods }) {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to help you grow your personal training business. Choose
            the best way to reach us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {methods.map((method) => (
            <Card
              key={method.id}
              className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm text-center"
            >
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <method.icon className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">{method.title}</CardTitle>
                <CardDescription className="text-base">
                  {method.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-blue-600 mb-2">
                  {method.details}
                </p>
                <p className="text-gray-600 mb-4">{method.hours}</p>
                {method.buttonText && (
                  <Button className="bg-purple-600 hover:bg-purple-700 mb-2">
                    {method.buttonText}
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
