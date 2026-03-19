import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "/user/month",
    desc: "Perfect for small solar companies",
    features: ["Up to 500 leads", "Basic pipeline", "5 projects", "Email support", "Mobile app"],
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$99",
    period: "/user/month",
    desc: "Best for growing solar businesses",
    features: ["Unlimited leads", "Advanced pipeline", "Unlimited projects", "Automation engine", "Analytics dashboard", "Priority support", "Inventory management", "Custom reports"],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "$199",
    period: "/user/month",
    desc: "For large-scale solar operations",
    features: ["Everything in Pro", "AI-powered insights", "Custom integrations", "SSO & advanced security", "Dedicated account manager", "SLA guarantee", "API access"],
    highlighted: false,
  },
];

export default function PricingSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center max-w-2xl mx-auto mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <span className="text-sm font-semibold gradient-text uppercase tracking-widest">Pricing</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-3 mb-4">Simple, Transparent <span className="gradient-text">Pricing</span></h2>
          <p className="text-muted-foreground text-lg">Start free. Scale as you grow.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div key={plan.name} className={`relative rounded-2xl p-8 transition-all hover:-translate-y-1 ${plan.highlighted ? "gradient-bg text-white shadow-2xl shadow-solar-purple/20 scale-105 border-0" : "border border-border bg-card hover:shadow-xl hover:shadow-solar-purple/5"} ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: `${i * 0.1}s` }}>
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-solar-purple text-xs font-bold px-4 py-1 rounded-full shadow-lg">Most Popular</div>
              )}
              <div className="text-sm font-semibold mb-1">{plan.name}</div>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                <span className={`text-sm ${plan.highlighted ? "text-white/70" : "text-muted-foreground"}`}>{plan.period}</span>
              </div>
              <p className={`text-sm mb-6 ${plan.highlighted ? "text-white/80" : "text-muted-foreground"}`}>{plan.desc}</p>
              <Button className={`w-full mb-6 ${plan.highlighted ? "bg-white text-solar-purple hover:bg-white/90 font-bold" : "gradient-bg text-white border-0"}`} size="lg">
                {plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
              </Button>
              <div className="space-y-3">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm">
                    <Check className={`w-4 h-4 flex-shrink-0 ${plan.highlighted ? "text-white" : "text-solar-purple"}`} />
                    <span className={plan.highlighted ? "text-white/90" : ""}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
