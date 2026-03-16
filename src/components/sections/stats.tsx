"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { NumberTicker } from "@/components/ui/number-ticker";
import { MagicCard } from "@/components/ui/magic-card";
import { BorderBeam } from "@/components/ui/border-beam";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { RetroGrid } from "@/components/ui/retro-grid";
import { motion } from "motion/react";
import {
  TrendingUp, Zap, Users, Clock, BarChart3, DollarSign,
} from "lucide-react";

/* ── Stat data ─────────────────────────────────────────────────────── */
const S = {
  tasks:     { value: 3,     suffix: "B+", label: "Tasks Completed",    sub: "Every quarter on Enacle",      icon: BarChart3,  iconBg: "from-[#7B68EE] to-[#FD71AF]",   numColor: "text-accent-enacle dark:text-[#9d8ff5]",    beam: { from: "#7B68EE", to: "#FD71AF" }, glow: "rgba(123,104,238,0.10)" },
  teams:     { value: 50000, suffix: "+",  label: "Teams Worldwide",     sub: "Startups to Fortune 500s",     icon: Users,      iconBg: "from-[#49CCF9] to-[#7B68EE]",   numColor: "text-[#49CCF9] dark:text-[#49CCF9]",        beam: { from: "#49CCF9", to: "#7B68EE" }, glow: "rgba(73,204,249,0.10)" },
  retention: { value: 98,    suffix: "%",  label: "Customer Retention",  sub: "Best-in-class NPS of 72",      icon: TrendingUp, iconBg: "from-emerald-500 to-teal-600",   numColor: "text-emerald-600 dark:text-emerald-400",    beam: { from: "#10b981", to: "#14b8a6" }, glow: "rgba(16,185,129,0.10)" },
  faster:    { value: 12,    suffix: "x",  label: "Faster Decisions",    sub: "With AI-powered insights",     icon: Zap,        iconBg: "from-[#FFC800] to-[#FD71AF]",   numColor: "text-[#FFC800] dark:text-[#FFC800]",        beam: { from: "#FFC800", to: "#FD71AF" }, glow: "rgba(255,200,0,0.10)"  },
  meetings:  { value: 40,    suffix: "%",  label: "Less Meeting Time",   sub: "With async-first workflows",   icon: Clock,      iconBg: "from-[#FD71AF] to-[#7B68EE]",   numColor: "text-[#FD71AF] dark:text-[#FD71AF]",        beam: { from: "#FD71AF", to: "#7B68EE" }, glow: "rgba(253,113,175,0.10)"},
  savings:   { value: 2400,  suffix: "+",  label: "Monthly Savings ($)", sub: "Average per 50-person team",   icon: DollarSign, iconBg: "from-[#7B68EE] to-[#49CCF9]",   numColor: "text-accent-enacle dark:text-[#9d8ff5]",    beam: { from: "#7B68EE", to: "#49CCF9" }, glow: "rgba(123,104,238,0.10)" },
};

type StatDef = (typeof S)[keyof typeof S];

/* ── StatCard ──────────────────────────────────────────────────────── */
function StatCard({ stat, delay = 0 }: { stat: StatDef; delay?: number }) {
  const Icon = stat.icon;
  return (
    <BlurFade delay={delay}>
      <motion.div
        whileHover={{ y: -4, scale: 1.025 }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
        className="h-full"
      >
        <MagicCard
          className="relative rounded-2xl border border-slate-200/80 dark:border-slate-700/50 bg-white dark:bg-slate-900/80 backdrop-blur-sm overflow-hidden h-full shadow-sm hover:shadow-lg hover:shadow-slate-200/50 dark:hover:shadow-black/30 transition-shadow duration-300"
          gradientColor={stat.glow}
          gradientOpacity={0.9}
        >
          <BorderBeam size={220} duration={14} colorFrom={stat.beam.from} colorTo={stat.beam.to} />

          <div className="p-5">
            {/* Icon row */}
            <div className="flex items-center justify-between mb-4">
              <div className={`w-9 h-9 rounded-xl bg-linear-to-br ${stat.iconBg} flex items-center justify-center shadow-md shrink-0`}>
                <Icon className="h-4.5 w-4.5 text-white" style={{ width: 18, height: 18 }} />
              </div>
              <div className="flex-1 ml-3 space-y-1">
                <div className="h-px w-full bg-linear-to-r from-slate-200 dark:from-slate-700 to-transparent" />
                <div className="h-px w-1/2 opacity-40" style={{ background: `linear-gradient(to right, ${stat.beam.from}, transparent)` }} />
              </div>
            </div>

            {/* Number */}
            <div className="flex items-baseline gap-1 mb-1.5">
              <span className={`text-4xl font-black tracking-tight leading-none ${stat.numColor}`}>
                <NumberTicker value={stat.value} className={stat.numColor} />
              </span>
              <span className="text-xl font-bold text-slate-300 dark:text-slate-600">{stat.suffix}</span>
            </div>

            <p className="text-sm font-bold text-[#0f172a] dark:text-white mb-0.5">{stat.label}</p>
            <p className="text-[11px] text-slate-400 dark:text-slate-500 leading-snug">{stat.sub}</p>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-40"
            style={{ background: `linear-gradient(to right, transparent, ${stat.beam.from}, ${stat.beam.to}, transparent)` }} />
        </MagicCard>
      </motion.div>
    </BlurFade>
  );
}

/* ── Centre Logo Badge ─────────────────────────────────────────────── */
function LogoBadge() {
  return (
    <BlurFade delay={0.25}>
      <div className="flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute w-20 h-20 rounded-full border border-dashed border-violet-200 dark:border-violet-900 opacity-60"
        />
        <motion.div
          whileHover={{ scale: 1.08 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl"
          style={{ background: "linear-gradient(135deg,#7B68EE,#FD71AF)", boxShadow: "0 8px 24px rgba(123,104,238,0.4)" }}
        >
          <span className="text-2xl font-black text-white tracking-tight">E</span>
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-2xl animate-ping" style={{ background: "rgba(123,104,238,0.2)", animationDuration: "2.5s" }} />
        </motion.div>
      </div>
    </BlurFade>
  );
}

/* ── Main Section ──────────────────────────────────────────────────── */
export function Stats() {
  return (
    <section className="relative py-20 bg-white dark:bg-[#080d1a] overflow-hidden">

      <RetroGrid angle={65} cellSize={55} opacity={0.28} lightLineColor="#e2e8f0" darkLineColor="#1e293b" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_50%,rgba(219,234,254,0.5),transparent_70%)] dark:bg-[radial-gradient(ellipse_70%_55%_at_50%_50%,rgba(30,41,59,0.5),transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

        {/* ── HEADLINE ── */}
        <div className="text-center mb-12">
          <BlurFade>
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 dark:border-violet-800/60 bg-violet-50 dark:bg-violet-950/40 px-3 py-1 mb-4">
              <TrendingUp className="h-3 w-3" style={{ color: "#7B68EE" }} />
              <span className="text-xs font-semibold" style={{ color: "#7B68EE" }}>By the numbers</span>
            </div>
          </BlurFade>

          <BlurFade delay={0.07}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0f172a] dark:text-white leading-[1.06] mb-3">
              Trusted by the world&apos;s{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg,#FFC800,#FD71AF)" }}>best teams</span>
                <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full opacity-50" style={{ backgroundImage: "linear-gradient(to right,#FFC800,#FD71AF)" }} />
              </span>
            </h2>
          </BlurFade>

          <BlurFade delay={0.13}>
            <p className="text-base text-slate-500 dark:text-slate-400 max-w-lg mx-auto min-h-7">
              The numbers speak for themselves.{" "}
              <span style={{ color: "#7B68EE" }}>
                <TypingAnimation
                  words={["Growing every day.", "Real results. Real teams.", "Join 50k+ teams.", "Impact at scale."]}
                  className="font-semibold"
                  typingSpeed={65} deletingSpeed={40} pauseMs={1800} loop
                />
              </span>
            </p>
          </BlurFade>
        </div>

        {/* ══════════════════════════════════════
            X / DIAMOND LAYOUT
            Row A  :        [3B+]
            Row B  : [50K+] [LOGO] [98%]
            Row C  : [12x]  [   ] [40%]   — no center card
            Row D  :        [$2400]
        ══════════════════════════════════════ */}

        {/* Row A — 3B+ Tasks (centred) */}
        <div className="flex justify-center mb-4">
          <div className="w-full max-w-60">
            <StatCard stat={S.tasks} delay={0.14} />
          </div>
        </div>

        {/* Row B — 50K+ · Logo · 98% */}
        <div className="grid grid-cols-[1fr_80px_1fr] items-center gap-4 mb-4">
          <StatCard stat={S.teams} delay={0.18} />
          <LogoBadge />
          <StatCard stat={S.retention} delay={0.21} />
        </div>

        {/* Row C — 12x · (gap) · 40% */}
        <div className="grid grid-cols-[1fr_80px_1fr] items-center gap-4 mb-4">
          <StatCard stat={S.faster} delay={0.25} />
          {/* empty spacer to keep columns aligned */}
          <div />
          <StatCard stat={S.meetings} delay={0.28} />
        </div>

        {/* Row D — $2400 (centred) */}
        <div className="flex justify-center mb-10">
          <div className="w-full max-w-60">
            <StatCard stat={S.savings} delay={0.32} />
          </div>
        </div>

        {/* ── TRUST STRIP ── */}
        <BlurFade delay={0.38}>
          <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2.5">
            {[
              { dot: "bg-accent-enacle",  text: "No credit card required" },
              { dot: "bg-emerald-500",    text: "Free forever plan available" },
              { dot: "bg-[#FFC800]",      text: "Cancel anytime, no lock-in" },
              { dot: "bg-[#FD71AF]",      text: "SOC 2 Type II certified" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                <span className={`w-1.5 h-1.5 rounded-full ${item.dot} shrink-0`} />
                {item.text}
              </div>
            ))}
          </div>
        </BlurFade>

      </div>
    </section>
  );
}
