import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Zap, Mail, Bell, Brain, ArrowDown } from "lucide-react";

const automations = [
  { icon: Zap, label: "New Lead Captured", detail: "Website form submitted", color: "bg-solar-yellow" },
  { icon: Brain, label: "AI Lead Scoring", detail: "Score: 92/100 — Hot Lead", color: "bg-solar-orange" },
  { icon: Mail, label: "Auto Email Sent", detail: "Welcome + proposal template", color: "bg-solar-blue" },
  { icon: Bell, label: "Team Notified", detail: "Sales rep assigned automatically", color: "bg-solar-green" },
];

export default function AutomationSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-solar-orange/5 blur-3xl" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`${isVisible ? "animate-fade-up" : "opacity-0"}`}>
            <span className="text-sm font-semibold gradient-text uppercase tracking-widest">Automation</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-3 mb-4">Smart Automation That <span className="gradient-text">Works 24/7</span></h2>
            <p className="text-muted-foreground text-lg mb-8">Set up powerful workflows that automate lead nurturing, task assignment, notifications, and more.</p>
            <div className="space-y-4">
              {[
                { title: "AI Lead Scoring", desc: "Automatically score and prioritize leads based on behavior and demographics." },
                { title: "Smart Workflows", desc: "Trigger actions when deals move stages, tasks are completed, or payments arrive." },
                { title: "Predictive Insights", desc: "AI suggests the best time to follow up and predicts deal outcomes." },
              ].map((f) => (
                <div key={f.title} className="flex gap-3">
                  <div className="w-2 h-2 rounded-full gradient-bg mt-2 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-sm">{f.title}</div>
                    <div className="text-sm text-muted-foreground">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Automation flow */}
          <div className={`${isVisible ? "animate-slide-left" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
            <div className="glass-card p-6 space-y-1">
              <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4">Automation Flow</div>
              {automations.map((step, i) => (
                <div key={step.label}>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-border hover:shadow-md transition-shadow">
                    <div className={`w-10 h-10 rounded-xl ${step.color} flex items-center justify-center`}>
                      <step.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-bold">{step.label}</div>
                      <div className="text-[10px] text-muted-foreground">{step.detail}</div>
                    </div>
                    <div className="text-[9px] text-muted-foreground px-2 py-1 bg-muted rounded-full">Auto</div>
                  </div>
                  {i < automations.length - 1 && (
                    <div className="flex justify-center py-1">
                      <ArrowDown className="w-4 h-4 text-solar-orange/40" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
