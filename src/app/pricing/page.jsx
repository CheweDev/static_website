import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import PricingTiers from "@/components/sections/pricingTiers";
import Cta from "@/components/sections/cta";
import { pricingTiers } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

const Pricing = () => {
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
              Transparent Pricing
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-8">
              Flexible Marketing Plans
            </h1>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Choose the perfect marketing package that fits your budget and
              business goals. No hidden fees, just clear results.
            </p>
          </div>
        </div>
      </section>

      <PricingTiers tiers={pricingTiers} />
      <Cta
        title="Need a Custom Solution?"
        description="If our standard packages don't quite fit your unique needs, let's discuss a tailored marketing strategy just for your personal training business."
        primaryLink="/contact"
        primaryText="Request Custom Quote"
      />
      <Footer />
    </div>
  );
};

export default Pricing;
