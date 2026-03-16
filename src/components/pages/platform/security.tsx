"use client";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import { BorderBeam } from "@/components/ui/border-beam";
import { Shield, Lock, Eye, CheckCircle2 } from "lucide-react";

const CERTS = [
  { icon: Shield,       title: "SOC 2 Type II",        desc: "Annual third-party audit covering security, availability, and confidentiality.", iconBg: "rgba(123,104,238,0.1)", iconColor: "#7B68EE" },
  { icon: Lock,         title: "End-to-End Encryption", desc: "AES-256 at rest, TLS 1.3 in transit. Your data is never readable by Enacle staff.", iconBg: "rgba(255,200,0,0.12)", iconColor: "#FFC800" },
  { icon: Eye,          title: "Audit Logs",            desc: "Immutable logs for every action. Export to your SIEM or review in-app.", iconBg: "rgba(16,185,129,0.1)", iconColor: "#10b981" },
  { icon: CheckCircle2, title: "GDPR & CCPA",           desc: "Full data subject rights, DPA available, EU data residency option.", iconBg: "rgba(253,113,175,0.12)", iconColor: "#FD71AF" },
];

export function PlatformSecurity() {
  return (
    <section className="py-28 bg-slate-50 dark:bg-[#060b18]">
      <div className="mx-auto max-w-350 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <BlurFade><h2 className="text-4xl sm:text-5xl font-extrabold text-[#0f172a] dark:text-white mb-4">Enterprise-grade security</h2></BlurFade>
          <BlurFade delay={0.08}><p className="text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto">Built for the most demanding compliance requirements from day one.</p></BlurFade>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {CERTS.map((c, i) => (
            <BlurFade key={c.title} delay={0.06 + i * 0.06}>
              <MagicCard className="rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-900 p-7 relative overflow-hidden h-full" gradientColor="#ede9fe" gradientOpacity={0.5}>
                {i === 0 && <BorderBeam size={200} duration={10} colorFrom="#7B68EE" colorTo="#FD71AF" />}
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: c.iconBg }}>
                  <c.icon className="h-5 w-5" style={{ color: c.iconColor }} />
                </div>
                <h3 className="text-base font-bold text-[#0f172a] dark:text-white mb-2">{c.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{c.desc}</p>
              </MagicCard>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
