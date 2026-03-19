"use client";
import { BlurFade } from "@/components/ui/blur-fade";
import { Particles } from "@/components/ui/particles";
import { BorderBeam } from "@/components/ui/border-beam";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { ArrowRight, Handshake, TrendingUp, Globe2, Zap, Users2, DollarSign } from "lucide-react";
import Link from "next/link";

const STATS = [
  { value: "340+",  label: "Active Partners",     color: "#7B68EE", bg: "rgba(123,104,238,0.08)",  border: "border-violet-200 dark:border-violet-800" },
  { value: "22",    label: "Countries",            color: "#FD71AF", bg: "rgba(253,113,175,0.08)",  border: "border-pink-200 dark:border-pink-800" },
  { value: "40%",   label: "Revenue Share",        color: "#10b981", bg: "rgba(16,185,129,0.08)",   border: "border-emerald-200 dark:border-emerald-800" },
  { value: "$2.4M", label: "Partner Earnings '25", color: "#FFC800", bg: "rgba(255,200,0,0.08)",    border: "border-yellow-200 dark:border-yellow-800" },
];

const PILLS = [
  { icon: TrendingUp, text: "Up to 40% recurring revenue" },
  { icon: Globe2,     text: "Global partner network" },
  { icon: Zap,        text: "Co-marketing & joint GTM" },
  { icon: Users2,     text: "Dedicated partner success manager" },
];

export function PartnersHero() {
  return (
    <section className="relative bg-white dark:bg-[#080d1a] pt-28 pb-24 overflow-hidden">
      {/* Dot grid */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_60%,transparent_110%)]" />
      {/* Top glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-225 h-85 rounded-full blur-3xl" style={{ background: "rgba(123,104,238,0.1)" }} />
      <Particles className="absolute inset-0 opacity-20" quantity={60} color="#94a3b8" />

      <div className="relative z-10 mx-auto max-w-350 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left copy ── */}
          <div>
            <BlurFade>
              <div className="inline-flex items-center gap-2 rounded-full bg-violet-50 dark:bg-violet-950/40 border border-violet-200 dark:border-violet-800 px-3.5 py-1.5 mb-6">
                <Handshake className="h-3.5 w-3.5" style={{ color: "#7B68EE" }} />
                <span className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: "#7B68EE" }}>Partner Program</span>
              </div>
            </BlurFade>

            <BlurFade delay={0.07}>
              <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-[#0f172a] dark:text-white mb-5 leading-[1.05]">
                Grow your business{" "}
                <span className="bg-linear-to-r from-[#7B68EE] via-[#FD71AF] to-[#7B68EE] bg-clip-text text-transparent">
                  with Enacle
                </span>
              </h1>
            </BlurFade>

            <BlurFade delay={0.13}>
              <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
                Join 340+ agencies, consultants, and technology companies that earn recurring revenue — and help their clients run smarter — by partnering with Enacle.
              </p>
            </BlurFade>

            {/* Benefit pills */}
            <BlurFade delay={0.17}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {PILLS.map((p) => {
                  const Icon = p.icon;
                  return (
                    <div key={p.text} className="flex items-center gap-2.5 text-sm text-zinc-600 dark:text-slate-300">
                      <span className="w-7 h-7 rounded-lg border border-violet-200 dark:border-violet-800 flex items-center justify-center shrink-0" style={{ background: "rgba(123,104,238,0.1)" }}>
                        <Icon className="h-3.5 w-3.5" style={{ color: "#7B68EE" }} />
                      </span>
                      {p.text}
                    </div>
                  );
                })}
              </div>
            </BlurFade>

            <BlurFade delay={0.21}>
              <div className="flex flex-wrap gap-3">
                <Link href="#apply">
                  <ShimmerButton
                    background="#292D34"
                    shimmerColor="#FD71AF"
                    borderRadius="12px"
                    className="px-6 py-3 text-sm font-bold"
                  >
                    Become a Partner
                    <ArrowRight className="ml-2 h-4 w-4 inline" />
                  </ShimmerButton>
                </Link>
                <Link
                  href="#tiers"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm font-semibold text-zinc-700 dark:text-slate-200 hover:border-zinc-400 dark:hover:border-slate-500 transition-all shadow-sm"
                >
                  View Partner Tiers
                </Link>
              </div>
            </BlurFade>
          </div>

          {/* ── Right stats ── */}
          <BlurFade delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((s) => (
                <div key={s.label} className={`rounded-2xl border ${s.border} p-6 relative overflow-hidden hover:scale-[1.02] transition-transform duration-200`} style={{ background: s.bg }}>
                  <BorderBeam size={160} duration={10} colorFrom="#7B68EE" colorTo="#FD71AF" />
                  <p className="text-3xl font-extrabold mb-1" style={{ color: s.color }}>{s.value}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Trust logos strip */}
            <div className="mt-6 rounded-2xl border border-zinc-100 dark:border-slate-800 bg-zinc-50 dark:bg-slate-900 px-5 py-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-slate-500 mb-3">Trusted by agencies & ISVs worldwide</p>
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {["Accenture", "Deloitte", "Wipro", "Razorpay", "Freshworks"].map((name) => (
                  <span key={name} className="text-xs font-extrabold text-zinc-300 dark:text-slate-600 uppercase tracking-wider">{name}</span>
                ))}
              </div>
            </div>
          </BlurFade>

        </div>
      </div>
    </section>
  );
}
