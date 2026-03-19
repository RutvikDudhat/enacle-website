import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Users, BarChart3, FolderKanban, Package, FileText, Settings, Shield, Zap } from "lucide-react";

const features = [
  { icon: Users, title: "Lead Management", desc: "Capture, score, and nurture solar leads with AI-powered insights and automated follow-ups." },
  { icon: BarChart3, title: "Sales Pipeline", desc: "Visual pipeline tracking from first contact to closed deal with drag-and-drop stages." },
  { icon: FolderKanban, title: "Project Management", desc: "Track every solar installation from site survey to commissioning with Kanban boards." },
  { icon: Package, title: "Inventory Control", desc: "Real-time inventory tracking for panels, inverters, batteries, and mounting hardware." },
  { icon: FileText, title: "Billing & Invoicing", desc: "Automated invoicing, payment tracking, and financial reporting in one place." },
  { icon: Settings, title: "Automation Engine", desc: "Smart workflows that automate repetitive tasks and trigger actions based on events." },
  { icon: Shield, title: "Enterprise Security", desc: "Bank-grade encryption, role-based access, and SOC 2 compliance built-in." },
  { icon: Zap, title: "AI Analytics", desc: "Predictive analytics and AI recommendations to optimize your solar business." },
];

export default function FeaturesGrid() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="section-padding">
      <div className="container mx-auto max-w-7xl">
        <div className={`text-center max-w-2xl mx-auto mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <span className="text-sm font-semibold gradient-text uppercase tracking-widest">Features</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-3 mb-4">Everything You Need to <span className="gradient-text">Scale Solar</span></h2>
          <p className="text-muted-foreground text-lg">A comprehensive suite of tools designed for modern solar businesses.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <div key={f.title} className={`group relative p-6 rounded-2xl border border-border bg-card hover:shadow-xl hover:shadow-solar-purple/5 hover:-translate-y-1 transition-all duration-300 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <f.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
