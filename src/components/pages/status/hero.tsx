"use client";
import { BlurFade } from "@/components/ui/blur-fade";
import { Particles } from "@/components/ui/particles";
import { BorderBeam } from "@/components/ui/border-beam";
import { CheckCircle2, AlertTriangle, XCircle, RefreshCw, Clock, Activity } from "lucide-react";

// ── Uptime numbers ──────────────────────────────────────────────
const UPTIME_STATS = [
  { label: "API Uptime (90d)",      value: "99.98%", color: "text-emerald-600", bg: "bg-emerald-50 dark:bg-emerald-950/40", border: "border-emerald-200 dark:border-emerald-800" },
  { label: "Web App Uptime (90d)",  value: "99.97%", color: "text-emerald-600", bg: "bg-emerald-50 dark:bg-emerald-950/40", border: "border-emerald-200 dark:border-emerald-800" },
  { label: "Avg. Response Time",    value: "82 ms",   color: "text-blue-600",    bg: "bg-blue-50 dark:bg-blue-950/40",       border: "border-blue-200 dark:border-blue-800" },
  { label: "Incidents (30d)",       value: "0",       color: "text-violet-600",  bg: "bg-violet-50 dark:bg-violet-950/40",   border: "border-violet-200 dark:border-violet-800" },
];

// ── Overall status banner ────────────────────────────────────────
// Change to "degraded" or "outage" to flip the banner automatically
const SYSTEM_STATUS: "operational" | "degraded" | "outage" = "operational";

const STATUS_CONFIG = {
  operational: {
    icon: CheckCircle2,
    label: "All Systems Operational",
    sub: "Every Enacle service is running normally.",
    pulse: "bg-emerald-500",
    ring: "ring-emerald-400/40",
    card: "border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/30",
    text: "text-emerald-600 dark:text-emerald-400",
  },
  degraded: {
    icon: AlertTriangle,
    label: "Partial Service Degradation",
    sub: "Some services are experiencing issues. We're actively investigating.",
    pulse: "bg-amber-500",
    ring: "ring-amber-400/40",
    card: "border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30",
    text: "text-amber-600 dark:text-amber-400",
  },
  outage: {
    icon: XCircle,
    label: "Service Outage",
    sub: "A critical service is currently down. Our team is on it.",
    pulse: "bg-red-500",
    ring: "ring-red-400/40",
    card: "border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/30",
    text: "text-red-600 dark:text-red-400",
  },
};

export function StatusHero() {
  const cfg = STATUS_CONFIG[SYSTEM_STATUS];
  const Icon = cfg.icon;

  return (
    <section className="relative bg-white dark:bg-[#080d1a] pt-28 pb-20 overflow-hidden">
      {/* Dot grid */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_60%,transparent_110%)]" />
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-200 h-72 rounded-full bg-blue-500/8 blur-3xl" />
      <Particles className="absolute inset-0 opacity-15" quantity={50} color="#94a3b8" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

        {/* Badge */}
        <BlurFade className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-zinc-100 dark:bg-slate-800 border border-zinc-200 dark:border-slate-700 px-3.5 py-1.5">
            <Activity className="h-3.5 w-3.5 text-blue-500" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-600 dark:text-slate-400">System Status</span>
          </div>
        </BlurFade>

        {/* Headline */}
        <BlurFade delay={0.07} className="text-center mb-10">
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-[#0f172a] dark:text-white leading-[1.05] mb-4">
            Enacle{" "}
            <span className="bg-linear-to-r from-blue-600 via-violet-500 to-blue-600 bg-clip-text text-transparent">
              Status
            </span>
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Real-time health and uptime for every Enacle service, infrastructure layer, and integration endpoint.
          </p>
        </BlurFade>

        {/* Main status banner */}
        <BlurFade delay={0.12}>
          <div className={`relative rounded-2xl border ${cfg.card} p-6 flex items-center gap-5 mb-10 overflow-hidden`}>
            <BorderBeam size={400} duration={10} colorFrom="#3b82f6" colorTo="#8b5cf6" />
            <div className={`relative shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center border ${cfg.card}`}>
              <span className={`absolute inset-0 rounded-2xl ring-4 ${cfg.ring} animate-ping opacity-30`} />
              <span className={`absolute w-3 h-3 rounded-full ${cfg.pulse} top-1 right-1 ring-2 ring-white dark:ring-[#080d1a]`} />
              <Icon className={`h-7 w-7 ${cfg.text}`} />
            </div>
            <div className="flex-1 min-w-0">
              <p className={`text-xl font-extrabold ${cfg.text} mb-0.5`}>{cfg.label}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">{cfg.sub}</p>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500 shrink-0">
              <RefreshCw className="h-3.5 w-3.5" />
              <span>Updated just now</span>
            </div>
          </div>
        </BlurFade>

        {/* Stat cards */}
        <BlurFade delay={0.18}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {UPTIME_STATS.map((s) => (
              <div key={s.label} className={`relative rounded-xl border ${s.border} ${s.bg} p-5 text-center overflow-hidden hover:scale-[1.02] transition-transform duration-200`}>
                <p className={`text-2xl font-black ${s.color} mb-1`}>{s.value}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-tight">{s.label}</p>
              </div>
            ))}
          </div>
        </BlurFade>

        {/* Last-checked strip */}
        <BlurFade delay={0.24} className="flex items-center justify-center gap-2 mt-6 text-xs text-slate-400 dark:text-slate-500">
          <Clock className="h-3.5 w-3.5" />
          <span>Last checked: <strong className="font-semibold text-slate-500 dark:text-slate-400">15 Mar 2026, 10:42 AM UTC</strong></span>
          <span className="hidden sm:inline">·</span>
          <span className="hidden sm:inline">Auto-refreshes every 60 seconds</span>
        </BlurFade>

      </div>
    </section>
  );
}
