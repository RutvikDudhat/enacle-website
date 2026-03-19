import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-95" />
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-white/10 blur-3xl" />
      <div className="container mx-auto max-w-3xl text-center relative z-10">
        <div className={`${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Start Your Solar CRM Today</h2>
          <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">Join 2,000+ solar companies already growing with SolarCRM. Free 14-day trial — no credit card required.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="w-full px-5 py-3 rounded-xl text-foreground bg-white border-0 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm" />
            <Button size="lg" className="bg-white text-solar-purple hover:bg-white/90 font-bold whitespace-nowrap px-8 rounded-xl">
              Get Started <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
          <p className="text-white/50 text-xs mt-4">Free 14-day trial · No credit card · Cancel anytime</p>
        </div>
      </div>
    </section>
  );
}
