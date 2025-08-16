import Nav from "@/components/layout/Nav";
import FootNote from "@/components/layout/FootNote";
import CaseStudiesGridSection from "@/components/sections/CaseStudiesGridSection";
import CtaSection from "@/components/sections/CtaSection";
import { caseStudiesData } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

// SEO metadata for Case Studies page
export const metadata = {
  title:
    "Personal Trainer Marketing Case Studies | Proven Results & Success Stories",
  description:
    "See real results from our personal trainer marketing campaigns. Case studies showing 300%+ lead increases, #1 Google rankings, and business growth for boxing trainers, yoga instructors, and fitness professionals.",
  keywords:
    "personal trainer marketing case studies, fitness SEO results, personal trainer success stories, boxing trainer marketing results",
  openGraph: {
    title: "Personal Trainer Marketing Case Studies - Real Results",
    description:
      "See how we've helped personal trainers achieve 300%+ lead increases and dominate their local markets.",
    url: "https://fitprotrainers.com/case-studies",
    type: "website",
  },
  alternates: {
    canonical: "https://fitprotrainers.com/case-studies",
  },
};

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <Nav />
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
              Our Success Stories
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-8">
              Real Results for Real Trainers
            </h1>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              See how we've helped personal trainers like you achieve massive
              growth and dominate their local markets.
            </p>
          </div>
        </div>
      </section>

      <CaseStudiesGridSection studies={caseStudiesData} />
      <CtaSection
        title="Ready to Be Our Next Success Story?"
        description="Let's discuss how our proven marketing strategies can transform your personal training business."
        primaryLink="/contact"
        primaryText="Get Your Free Consultation"
      />
      <FootNote />
    </div>
  );
}
