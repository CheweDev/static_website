import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Cta = ({
  title,
  description,
  primaryLink,
  primaryText,
  secondaryLink,
  secondaryText,
}) => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {title}
        </h2>
        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {primaryLink && (
            <Link href={primaryLink}>
              <Button
                size="lg"
                className="bg-white text-slate-900 btn-rounded-lg hover:bg-slate-100 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                {primaryText}
                {primaryLink === "/contact" && (
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                )}
              </Button>
            </Link>
          )}
          {secondaryLink && (
            <Link href={secondaryLink}>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 btn-rounded-lg text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 bg-transparent"
              >
                {secondaryText}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default Cta;
