"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import { BorderBeam } from "@/components/ui/border-beam";
import { CheckCircle2, ArrowRight, Code2, Megaphone, TrendingUp, Headphones, Users, Briefcase } from "lucide-react";

const SOLUTIONS = [
  {
    icon: Code2, label: "Engineering", headline: "Ship better software, faster",
    desc: "Sprint planning, backlog, CI/CD visibility, incident tracking, and AI code reviews — all in one place. No more context switching between Jira, Confluence, and GitHub.",
    benefits: ["AI-powered sprint auto-balancing", "GitHub & GitLab integration", "One-click standup summaries", "Real-time burndown charts", "Incident management & on-call"],
    stat: "42% faster releases",
  },
  {
    icon: Megaphone, label: "Marketing", headline: "Run campaigns at AI speed",
    desc: "Plan campaigns, manage assets, track performance, and let AI draft copy and analyse results. Your entire marketing workflow, converged.",
    benefits: ["Campaign calendar with dependencies", "AI content drafting & editing", "Asset library & version control", "UTM tracking & attribution", "Approval workflows in-tool"],
    stat: "3× more campaigns shipped",
  },
  {
    icon: TrendingUp, label: "Sales", headline: "Close more deals with less admin",
    desc: "Track your pipeline, get AI lead scoring, auto-generate proposals, and let agents follow up on cold leads while your reps focus on closing.",
    benefits: ["Visual CRM pipeline board", "AI lead qualification & scoring", "Auto-generated proposals", "Deal health monitoring", "Commission & quota tracking"],
    stat: "28% higher win rate",
  },
  {
    icon: Headphones, label: "Support", headline: "Delight customers at scale",
    desc: "Triage tickets, draft resolutions, monitor SLAs, and deploy support agents that resolve Tier-1 issues autonomously.",
    benefits: ["AI ticket triage & routing", "Auto-drafted resolutions", "SLA monitoring & alerts", "Customer health scoring", "Self-service AI chatbot"],
    stat: "60% fewer escalations",
  },
  {
    icon: Users, label: "HR & People", headline: "Build a high-performance culture",
    desc: "Onboard new hires, run performance reviews, manage OKRs, schedule 1:1s, and use AI to identify burnout risk.",
    benefits: ["Onboarding checklists & workflows", "OKR tracking & alignment", "1:1 meeting templates", "AI sentiment & burnout detection", "Headcount planning"],
    stat: "89% employee satisfaction",
  },
  {
    icon: Briefcase, label: "Executives", headline: "Company-wide clarity in one view",
    desc: "Real-time pulse on every team, project, and KPI. AI surfaces risks early, auto-generates board packs, and keeps you ahead of every decision.",
    benefits: ["Live cross-team dashboards", "AI-generated board reports", "Risk & blocker surfacing", "Budget & headcount tracking", "Strategic OKR alignment"],
    stat: "12× faster board reporting",
  },
];

export function SolutionsGrid() {
  const [active, setActive] = useState(0);
  const sol = SOLUTIONS[active];

  return (
    <section className="py-24 bg-white dark:bg-[#080d1a]">
      <div className="mx-auto max-w-350 px-4 sm:px-6 lg:px-8">

        {/* Tab strip */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {SOLUTIONS.map((s, i) => {
            const Icon = s.icon;
            return (
              <button
                key={s.label}
                onClick={() => setActive(i)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  active === i
                    ? "bg-[#0f172a] dark:bg-white text-white dark:text-[#0f172a]"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-[#0f172a] dark:hover:text-white"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                {s.label}
              </button>
            );
          })}
        </div>

        {/* Detail panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {/* Left */}
            <MagicCard
              className="rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-900 p-8 relative overflow-hidden shadow-sm"
              gradientColor="#ede9fe" gradientOpacity={0.5}
            >
              <BorderBeam size={300} duration={10} colorFrom="#7B68EE" colorTo="#FD71AF" />
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(123,104,238,0.12)" }}>
                  <sol.icon className="h-5 w-5" style={{ color: "#7B68EE" }} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold">{sol.label}</p>
                  <h2 className="text-xl font-bold text-[#0f172a] dark:text-white">{sol.headline}</h2>
                </div>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">{sol.desc}</p>
              <div className="rounded-xl border border-violet-100 dark:border-violet-800 bg-violet-50 dark:bg-violet-950/40 px-5 py-4 mb-6">
                <p className="text-2xl font-extrabold text-[#0f172a] dark:text-white">{sol.stat}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Average improvement across Enacle customers</p>
              </div>
              <button className="inline-flex items-center gap-1.5 text-sm font-semibold hover:gap-3 transition-all" style={{ color: "#7B68EE" }}>
                View {sol.label} case study <ArrowRight className="h-4 w-4" />
              </button>
            </MagicCard>

            {/* Right */}
            <MagicCard
              className="rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-slate-50 dark:bg-slate-800/60 p-8 relative overflow-hidden"
              gradientColor="#f8fafc" gradientOpacity={0.7}
            >
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-5">Key capabilities</p>
              <ul className="space-y-4">
                {sol.benefits.map((b, i) => (
                  <motion.li
                    key={b}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" style={{ color: "#7B68EE" }} />
                    <span className="text-sm text-slate-700 dark:text-slate-300">{b}</span>
                  </motion.li>
                ))}
              </ul>
            </MagicCard>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
