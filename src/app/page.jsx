import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero";
import ServicesGridSection from "@/components/sections/servicesGrid";
import QuoteFormSection from "@/components/sections/quoteForm";
import WhyChooseUsSection from "@/components/sections/whyChooseUs";
import {
  heroStats,
  popularServices,
  specializedServices,
  lifeStageServices,
  trainerPreferences,
  whyChooseUsItems,
} from "@/lib/data";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <Header />
      <HeroSection stats={heroStats} />

      <ServicesGridSection
        popular={popularServices}
        specialized={specializedServices}
        lifeStage={lifeStageServices}
        trainerPreferences={trainerPreferences}
      />
      <WhyChooseUsSection items={whyChooseUsItems.slice(0, 3)} />
      <QuoteFormSection />
      <Footer />
    </div>
  );
}
