import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Shield, Lock, Cloud, Server, Eye, Key } from "lucide-react";

const features = [
  { icon: Shield, title: "SOC 2 Certified", desc: "Enterprise-grade security compliance" },
  { icon: Lock, title: "256-bit Encryption", desc: "AES encryption for data at rest & in transit" },
  { icon: Cloud, title: "Cloud-Native", desc: "99.99% uptime SLA with global CDN" },
  { icon: Server, title: "Auto Backups", desc: "Continuous backups with point-in-time recovery" },
  { icon: Eye, title: "Access Control", desc: "Role-based permissions with audit logging" },
  { icon: Key, title: "SSO & 2FA", desc: "Single sign-on and two-factor authentication" },
];

export default function SecuritySection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="section-padding bg-foreground text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-solar-purple/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-solar-pink/10 blur-3xl" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className={`text-center max-w-2xl mx-auto mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <span className="text-sm font-semibold text-solar-purple uppercase tracking-widest">Security & Cloud</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-3 mb-4">Enterprise-Grade <span className="gradient-text">Security</span></h2>
          <p className="text-white/60 text-lg">Your data is protected with bank-level security infrastructure.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div key={f.title} className={`p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all hover:-translate-y-1 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: `${i * 0.08}s` }}>
              <f.icon className="w-8 h-8 text-solar-purple mb-3" />
              <h3 className="font-bold text-base mb-1">{f.title}</h3>
              <p className="text-sm text-white/50">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
