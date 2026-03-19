import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Sarah Mitchell", role: "CEO, SunVolt Energy", quote: "SolarCRM transformed our operations. We've seen a 40% increase in close rates and our team manages twice the projects.", rating: 5 },
  { name: "James Park", role: "Operations Director, GreenTech Solar", quote: "The automation engine alone saves us 20 hours per week. Best investment we've made for our solar business.", rating: 5 },
  { name: "Maria Garcia", role: "Sales Manager, Apex Solar", quote: "The analytics dashboard gives us insights we never had before. We can predict revenue with 95% accuracy now.", rating: 5 },
  { name: "David Chen", role: "Founder, PowerSun Inc", quote: "Installation tracking is a game-changer. Our project completion time dropped by 35% in the first month.", rating: 5 },
  { name: "Lisa Thompson", role: "CFO, BrightPath Solar", quote: "Billing automation has eliminated errors and reduced payment collection time by 60%. Absolutely worth it.", rating: 5 },
  { name: "Robert Kim", role: "VP Sales, SolarMax", quote: "The mobile app keeps our field team connected. They close deals on-site now — something we never could before.", rating: 5 },
];

export default function TestimonialsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="section-padding">
      <div className="container mx-auto max-w-7xl">
        <div className={`text-center max-w-2xl mx-auto mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <span className="text-sm font-semibold gradient-text uppercase tracking-widest">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-3 mb-4">Loved by <span className="gradient-text">Solar Leaders</span></h2>
          <p className="text-muted-foreground text-lg">See what industry leaders say about SolarCRM.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div key={t.name} className={`glass-card p-6 hover:shadow-xl hover:shadow-solar-orange/10 transition-all hover:-translate-y-1 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="flex gap-0.5 mb-3">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white text-sm font-bold">{t.name.split(" ").map((n) => n[0]).join("")}</div>
                <div>
                  <div className="text-sm font-bold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
