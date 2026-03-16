"use client";

import { motion } from "motion/react";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import { BorderBeam } from "@/components/ui/border-beam";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Puzzle, AlertTriangle, RefreshCw, DollarSign } from "lucide-react";

const PAIN_POINTS = [
  {
    icon: Puzzle,
    title: "Tools don't talk to each other",
    description: "Your team jumps between Slack, Jira, Notion, HubSpot, and five more apps every day — context lost at every hop.",
    stat: { val: 9, suffix: "+", label: "apps switched / day" },
    iconBg: "#7B68EE",
  },
  {
    icon: AlertTriangle,
    title: "Nothing stays in sync",
    description: "Updates in one tool don't reflect elsewhere. Teams work on stale data, miss deadlines, and duplicate effort.",
    stat: { val: 3, suffix: "h", label: "wasted daily per person" },
    iconBg: "#FFC800",
  },
  {
    icon: RefreshCw,
    title: "Endless context switching",
    description: "The average knowledge worker switches between apps dozens of times per day. Deep work is impossible.",
    stat: { val: 23, suffix: "min", label: "to regain focus" },
    iconBg: "#FD71AF",
  },
  {
    icon: DollarSign,
    title: "SaaS bloat is costing you",
    description: "Mid-size teams spend $30k–$200k/year on overlapping tools. Half those subscriptions go under-used.",
    stat: { val: 2400, suffix: "+", label: "wasted / month ($)" },
    iconBg: "#49CCF9",
  },
];

const SCATTERED_APPS = [
  "Slack", "Jira", "Notion", "HubSpot", "Zoom",
  "Google Drive", "Asana", "Figma", "Salesforce", "Monday.com",
];

export function ContextProblem() {
  return (
    <section className="py-28 bg-slate-50 dark:bg-[#060b18] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <BlurFade>
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-950/50 px-3.5 py-1.5 mb-5">
              <AlertTriangle className="h-3.5 w-3.5" style={{ color: "#7B68EE" }} />
              <span className="text-sm font-semibold" style={{ color: "#7B68EE" }}>The Problem</span>
            </div>
          </BlurFade>
          <BlurFade delay={0.08}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0f172a] dark:text-white mb-5">
              Your tools are{" "}
              <span style={{ background: "linear-gradient(135deg,#7B68EE,#FD71AF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>working against you</span>
            </h2>
          </BlurFade>
          <BlurFade delay={0.14}>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Modern teams are buried under a pile of disconnected SaaS tools. The result?
              Fragmented context, missed deadlines, and a team that spends more time managing
              tools than doing actual work.
            </p>
          </BlurFade>
        </div>

        {/* Scattered apps cloud */}
        <BlurFade delay={0.2}>
          <div className="relative max-w-3xl mx-auto mb-20 py-4">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {SCATTERED_APPS.map((app, i) => (
                <motion.div
                  key={app}
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.35, type: "spring" }}
                  style={{ rotate: `${(i % 2 === 0 ? 1 : -1) * (i % 4) * 1.5}deg` }}
                  className="flex items-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 py-2 shadow-sm hover:shadow-md hover:border-violet-200 dark:hover:border-violet-700 transition-all"
                >
                  <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-500" />
                  <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">{app}</span>
                </motion.div>
              ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-[#292D34] text-[11px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-2xl border" style={{ color: "#FD71AF", borderColor: "rgba(253,113,175,0.3)" }}>
                Context Hell
              </div>
            </div>
          </div>
        </BlurFade>

        {/* Pain point cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PAIN_POINTS.map((p, i) => {
            const Icon = p.icon;
            return (
              <BlurFade key={p.title} delay={0.1 + i * 0.08}>
                <MagicCard
                  className="h-full rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-900 shadow-sm"
                  gradientColor="#ede9fe"
                  gradientOpacity={0.5}
                >
                  <div className="relative p-6 h-full flex flex-col">
                    <BorderBeam size={160} duration={14} delay={i * 2.5} colorFrom="#7B68EE" colorTo="#FD71AF" />
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 shrink-0" style={{ background: p.iconBg }}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-bold text-[#0f172a] dark:text-white text-sm mb-2">{p.title}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-5 flex-1">{p.description}</p>
                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                      <div className="flex items-baseline gap-0.5">
                        <span className="text-2xl font-black text-[#0f172a] dark:text-white">
                          <NumberTicker value={p.stat.val} className="text-[#0f172a] dark:text-white" />
                        </span>
                        <span className="text-xl font-black" style={{ color: "#FFC800" }}>{p.stat.suffix}</span>
                      </div>
                      <div className="text-[11px] text-slate-400 dark:text-slate-500 mt-0.5">{p.stat.label}</div>
                    </div>
                  </div>
                </MagicCard>
              </BlurFade>
            );
          })}
        </div>

        {/* Arrow to solution */}
        <BlurFade delay={0.5}>
          <div className="flex flex-col items-center gap-3 mt-16">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">Enacle solves all of this</span>
            <div className="w-px h-12 bg-linear-to-b from-slate-300 dark:from-slate-600 to-transparent" />
          </div>
        </BlurFade>

      </div>
    </section>
  );
}
