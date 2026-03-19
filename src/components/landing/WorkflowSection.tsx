import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { UserPlus, Handshake, Wrench, CreditCard, ArrowRight } from "lucide-react";

const steps = [
  { icon: UserPlus, title: "Capture Leads", desc: "Automatically capture leads from website, referrals, and campaigns.", color: "from-solar-purple to-solar-purple/80" },
  { icon: Handshake, title: "Close Deals", desc: "Track proposals, quotes, and negotiations through your pipeline.", color: "from-solar-purple/80 to-solar-pink/80" },
  { icon: Wrench, title: "Manage Install", desc: "Schedule, track, and manage every installation with precision.", color: "from-solar-pink/80 to-solar-pink" },
  { icon: CreditCard, title: "Collect Payment", desc: "Automated invoicing and payment collection for every project.", color: "from-solar-pink to-solar-pink/60" },
];

export default function WorkflowSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="section-padding bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center max-w-2xl mx-auto mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <span className="text-sm font-semibold gradient-text uppercase tracking-widest">Workflow</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-3 mb-4">From Lead to <span className="gradient-text">Revenue</span> — Simplified</h2>
          <p className="text-muted-foreground text-lg">A streamlined 4-step process that drives results.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <div key={step.title} className={`relative ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: `${i * 0.15}s` }}>
              <div className="group text-center p-6 rounded-2xl border border-border bg-card hover:shadow-xl hover:shadow-solar-purple/5 transition-all duration-300 hover:-translate-y-1">
                <div className="relative inline-flex mb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full gradient-bg text-white text-xs font-bold flex items-center justify-center">{i + 1}</div>
                </div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
              {i < 3 && (
                <div className="hidden md:flex absolute top-1/2 -right-4 -translate-y-1/2 z-10 text-solar-purple/40">
                  <ArrowRight className="w-6 h-6" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
