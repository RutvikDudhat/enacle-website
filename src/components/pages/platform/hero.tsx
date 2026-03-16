"use client";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { Particles } from "@/components/ui/particles";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { ArrowRight, Cpu, Globe, Lock, Zap } from "lucide-react";

export function PlatformHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-white dark:bg-[#080d1a] overflow-hidden pt-24 pb-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_60%,transparent_110%)]" />
      <Particles className="absolute inset-0 opacity-30" quantity={80} color="#94a3b8" />
      <div className="relative z-10 mx-auto max-w-350 px-4 sm:px-6 lg:px-8 text-center">
        <BlurFade>
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-950/50 px-3.5 py-1.5 mb-6">
            <Cpu className="h-3.5 w-3.5" style={{ color: "#7B68EE" }} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#7B68EE" }}>Platform Overview</span>
          </div>
        </BlurFade>
        <BlurFade delay={0.1}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0f172a] dark:text-white mb-6 leading-[1.05]">
            Built for scale.<br />
            <span style={{ color: "#FFC800" }}>Designed for speed.</span>
          </h1>
        </BlurFade>
        <BlurFade delay={0.18}>
          <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
            Enacle&apos;s platform is a converged operating system for businesses — connecting AI, data, workflows, and teams on a single, enterprise-grade infrastructure.
          </p>
        </BlurFade>
        <BlurFade delay={0.24}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <ShimmerButton shimmerColor="#FD71AF" background="#292D34" className="rounded-xl px-7 py-3.5 text-base font-bold text-white">
              Start free trial <ArrowRight className="inline h-4 w-4 ml-1.5" />
            </ShimmerButton>
            <a href="#architecture" className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-[#0f172a] dark:hover:text-white transition-colors">
              Explore architecture ↓
            </a>
          </div>
        </BlurFade>
        <BlurFade delay={0.3}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { icon: Cpu,   label: "AI-native infrastructure" },
              { icon: Globe, label: "Global edge network" },
              { icon: Lock,  label: "SOC 2 Type II certified" },
              { icon: Zap,   label: "99.99% uptime SLA" },
            ].map((f) => (
              <div key={f.label} className="rounded-xl border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-900 px-4 py-4 relative overflow-hidden shadow-sm">
                <BorderBeam size={120} duration={8} colorFrom="#7B68EE" colorTo="#FD71AF" />
                <f.icon className="h-5 w-5 mx-auto mb-2" style={{ color: "#7B68EE" }} />
                <p className="text-xs text-slate-600 dark:text-slate-400 text-center leading-snug">{f.label}</p>
              </div>
            ))}
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
