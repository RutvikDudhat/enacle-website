"use client";
import { BlurFade } from "@/components/ui/blur-fade";
import { RetroGrid } from "@/components/ui/retro-grid";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { ArrowRight, Package, Sparkles } from "lucide-react";

export function ProductsHero() {
  return (
    <section className="relative bg-white dark:bg-[#080d1a] pt-24 pb-12 overflow-hidden border-b border-slate-100 dark:border-slate-800">
      <RetroGrid angle={65} cellSize={55} opacity={0.25} lightLineColor="#e2e8f0" darkLineColor="#1e293b" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(123,104,238,0.12),transparent_70%)] dark:bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(123,104,238,0.1),transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left — text */}
          <div className="text-center lg:text-left">
            <BlurFade>
              <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 mb-5" style={{ border: "1px solid rgba(123,104,238,0.3)", background: "rgba(123,104,238,0.08)" }}>
                <Package className="h-3.5 w-3.5" style={{ color: "#7B68EE" }} />
                <span className="text-sm font-semibold" style={{ color: "#7B68EE" }}>25 products · 1 subscription</span>
              </div>
            </BlurFade>
            <BlurFade delay={0.07}>
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-[#0f172a] dark:text-white mb-4 leading-[1.06]">
                Every tool your team<br />
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg,#7B68EE,#FD71AF)" }}>will ever need</span>
              </h1>
            </BlurFade>
            <BlurFade delay={0.13}>
              <p className="text-base text-slate-500 dark:text-slate-400 max-w-lg mb-7 leading-relaxed">
                Projects, Chat, AI Agents, Docs, CRM, Dashboards, Automations — bundled into one flat-rate subscription.
              </p>
            </BlurFade>
            <BlurFade delay={0.18}>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <ShimmerButton shimmerColor="#FD71AF" background="#7B68EE" className="rounded-xl px-6 py-3 text-sm font-bold text-white">
                  Start free — no credit card <ArrowRight className="inline h-4 w-4 ml-1.5" />
                </ShimmerButton>
                <button className="flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:border-violet-300 hover:text-accent-enacle dark:hover:text-[#9d8ff5] transition-colors">
                  <Sparkles className="h-4 w-4" /> See what&apos;s new
                </button>
              </div>
            </BlurFade>
          </div>

          {/* Right — stats */}
          <BlurFade delay={0.22}>
            <div className="grid grid-cols-3 gap-4 shrink-0">
              {[
                { v: "25+",  l: "Products",     c: "#7B68EE" },
                { v: "200+", l: "Integrations", c: "#FD71AF" },
                { v: "50k+", l: "Teams",        c: "#49CCF9" },
              ].map((s) => (
                <div key={s.l} className="text-center rounded-2xl border border-slate-100 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 px-5 py-4 shadow-sm">
                  <p className="text-2xl font-black" style={{ color: s.c }}>{s.v}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{s.l}</p>
                </div>
              ))}
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
