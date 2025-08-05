import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ServicesPageGrid from "@/components/sections/servicesPageGrid";
import Process from "@/components/sections/process";
import Cta from "@/components/sections/cta";
import { mainServices, processSteps } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <Header />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center text-white">
            <Badge className="bg-white/20 text-white border-white/30 mb-6">
              Our Services
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-8">
              Marketing Services for Personal Trainers
            </h1>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              We help personal trainers get more clients through proven digital
              marketing strategies. From SEO to social media, we handle
              everything so you can focus on training.
            </p>
          </div>
        </div>
      </section>

      <ServicesPageGrid services={mainServices} />
      <Process steps={processSteps} />
      <Cta
        title="Ready to Grow Your Training Business?"
        description="Join hundreds of successful personal trainers who trust us to handle their marketing while they focus on changing lives."
        primaryLink="/#quote"
        primaryText="Get Your Free Quote"
        secondaryLink="/contact"
        secondaryText="Contact Us Today"
      />
      <Footer />
    </div>
  );
};

export default Services;
