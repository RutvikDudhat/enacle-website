import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { TrendingUp, Clock, Target, Smile } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "40%", label: "Faster Sales Cycles", desc: "Close deals in half the time" },
  { icon: Target, value: "60%", label: "Better Lead Tracking", desc: "Never lose a prospect again" },
  { icon: Clock, value: "35%", label: "Less Admin Time", desc: "Automate repetitive tasks" },
  { icon: Smile, value: "98%", label: "Customer Satisfaction", desc: "Industry-leading support" },
];

export default function GrowthSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="section-padding bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center max-w-2xl mx-auto mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <span className="text-sm font-semibold gradient-text uppercase tracking-widest">Results</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-3 mb-4">Real Results. <span className="gradient-text">Real Growth.</span></h2>
          <p className="text-muted-foreground text-lg">Numbers that speak for themselves.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={s.label} className={`relative text-center p-8 rounded-2xl border border-border bg-card hover:shadow-xl hover:shadow-solar-orange/10 transition-all hover:-translate-y-1 ${isVisible ? "animate-count-up" : "opacity-0"}`} style={{ animationDelay: `${i * 0.15}s` }}>
              <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-4">
                <s.icon className="w-7 h-7 text-white" />
              </div>
              <div className="text-4xl font-extrabold gradient-text mb-1">{s.value}</div>
              <div className="font-bold text-sm mb-1">{s.label}</div>
              <div className="text-xs text-muted-foreground">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
