"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import { BorderBeam } from "@/components/ui/border-beam";
import {
  Code2, Megaphone, TrendingUp, Headphones, Users, Briefcase,
  CheckCircle2, ArrowRight,
} from "lucide-react";

const USE_CASES = [
  {
    id: "engineering",
    icon: Code2,
    label: "Engineering",
    color: "from-blue-500 to-cyan-600",
    headline: "Ship better software, faster",
    description: "Enacle gives engineering teams sprint planning, backlog management, CI/CD visibility, incident tracking, and AI code reviews — all in one place. No more context switching between Jira, Confluence, and GitHub.",
    benefits: [
      "AI-powered sprint auto-balancing",
      "Integrated GitHub & GitLab activity",
      "One-click standup summaries",
      "Real-time burndown charts",
      "Incident management & on-call rota",
    ],
    stat: { value: "42%", label: "faster release cycles" },
  },
  {
    id: "marketing",
    icon: Megaphone,
    label: "Marketing",
    color: "from-pink-500 to-rose-600",
    headline: "Run campaigns at AI speed",
    description: "Plan campaigns, manage creative assets, track performance, and let AI draft copy, analyse results, and suggest optimisations. Your entire marketing workflow, converged.",
    benefits: [
      "Campaign calendar with dependencies",
      "AI content drafting & editing",
      "Asset library & version control",
      "UTM tracking & attribution reports",
      "Approval workflows in-tool",
    ],
    stat: { value: "3x", label: "more campaigns launched" },
  },
  {
    id: "sales",
    icon: TrendingUp,
    label: "Sales",
    color: "from-emerald-500 to-teal-600",
    headline: "Close more deals with less admin",
    description: "Track your pipeline, get AI lead scoring, auto-generate proposals, and have your AI agent follow up with cold leads — while your reps focus on closing.",
    benefits: [
      "Visual CRM pipeline board",
      "AI lead qualification & scoring",
      "Auto-generated proposals & quotes",
      "Deal health monitoring",
      "Commission & quota tracking",
    ],
    stat: { value: "28%", label: "increase in win rate" },
  },
  {
    id: "support",
    icon: Headphones,
    label: "Support",
    color: "from-violet-500 to-purple-600",
    headline: "Delight customers at scale",
    description: "Triage tickets, draft resolutions, monitor SLAs, and deploy support agents that resolve Tier-1 issues autonomously — so your team handles only what matters.",
    benefits: [
      "AI ticket triage & routing",
      "Auto-drafted resolutions",
      "SLA monitoring & alerts",
      "Customer health scoring",
      "Self-service AI chatbot",
    ],
    stat: { value: "60%", label: "fewer tickets escalated" },
  },
  {
    id: "hr",
    icon: Users,
    label: "HR & People",
    color: "from-amber-500 to-orange-600",
    headline: "Build a high-performance culture",
    description: "Onboard new hires, run performance reviews, manage OKRs, schedule 1:1s, and use AI to identify burnout risk — all from your Enacle workspace.",
    benefits: [
      "Onboarding checklists & workflows",
      "OKR tracking & alignment",
      "1:1 meeting templates",
      "AI sentiment & burnout detection",
      "Headcount planning",
    ],
    stat: { value: "89%", label: "employee satisfaction" },
  },
  {
    id: "executive",
    icon: Briefcase,
    label: "Executives",
    color: "from-slate-600 to-slate-800",
    headline: "Company-wide clarity in one view",
    description: "Get a real-time pulse on every team, project, and KPI across the organisation. AI surfaces risks early, auto-generates board packs, and keeps you ahead of every decision.",
    benefits: [
      "Live cross-team dashboards",
      "AI-generated board reports",
      "Risk & blocker surfacing",
      "Budget & headcount tracking",
      "Strategic OKR alignment",
    ],
    stat: { value: "12x", label: "faster board reporting" },
  },
];

export function UseCases() {
  const [active, setActive] = useState(USE_CASES[0]);

  return (
    <section className="py-28 bg-white dark:bg-[#080d1a] overflow-hidden">
      <div className="mx-auto max-w-350 px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <BlurFade>
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-950/50 px-3.5 py-1.5 mb-5">
              <Users className="h-3.5 w-3.5" style={{ color: "#7B68EE" }} />
              <span className="text-sm font-medium" style={{ color: "#7B68EE" }}>Built for every team</span>
            </div>
          </BlurFade>
          <BlurFade delay={0.08}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0f172a] dark:text-white mb-5">
              One platform,{" "}
              <span style={{ color: "#FFC800" }}>every team</span>
            </h2>
          </BlurFade>
          <BlurFade delay={0.14}>
            <p className="text-lg text-zinc-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Whether you&apos;re in engineering, marketing, sales, or the C-suite — Enacle adapts to how your team works.
            </p>
          </BlurFade>
        </div>

        {/* Use-case cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {USE_CASES.map((uc, i) => {
            const Icon = uc.icon;
            const isActive = active.id === uc.id;
            return (
              <BlurFade key={uc.id} delay={0.06 + i * 0.06}>
                <div onClick={() => setActive(uc)} className="h-full">
                <div style={isActive ? { background: "linear-gradient(135deg,#7B68EE,#5b4fd4)", borderRadius: "1rem" } : {}}>
                <MagicCard
                  className={`rounded-2xl border p-6 relative overflow-hidden cursor-pointer transition-all duration-200 h-full ${
                    isActive
                      ? "border-accent-enacle text-white"
                      : "border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-sm"
                  }`}
                  gradientColor={isActive ? "#3d2e8a" : "#ede9fe"}
                  gradientOpacity={0.6}
                >
                  {isActive && <BorderBeam size={240} duration={8} colorFrom="#7B68EE" colorTo="#FD71AF" />}
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4`}
                    style={isActive ? { background: "rgba(255,255,255,0.15)" } : { background: "rgba(123,104,238,0.1)" }}>
                    <Icon className="h-5 w-5" style={isActive ? { color: "#fff" } : { color: "#7B68EE" }} />
                  </div>
                  <h3 className={`text-base font-bold mb-2 ${isActive ? "text-white" : "text-[#0f172a] dark:text-white"}`}>{uc.label}</h3>
                  <p className={`text-sm leading-relaxed mb-4 ${isActive ? "text-slate-400" : "text-slate-500 dark:text-slate-400"}`}>{uc.headline}</p>
                  <div className={`text-2xl font-extrabold ${isActive ? "text-white" : "text-[#0f172a] dark:text-white"}`}>
                    {uc.stat.value}
                    <span className={`text-sm font-medium ml-1.5 ${isActive ? "text-slate-400" : "text-slate-400 dark:text-slate-500"}`}>{uc.stat.label}</span>
                  </div>
                </MagicCard>
                </div>
                </div>
              </BlurFade>
            );
          })}
        </div>

        {/* Expanded detail panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            className="rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-900 overflow-hidden relative shadow-sm"
          >
            <BorderBeam size={400} duration={14} colorFrom="#7B68EE" colorTo="#FD71AF" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left */}
              <div className="p-8 lg:border-r border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(123,104,238,0.1)" }}>
                    <active.icon className="h-5 w-5" style={{ color: "#7B68EE" }} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-widest font-semibold">{active.label}</p>
                    <h3 className="text-lg font-bold text-[#0f172a] dark:text-white">{active.headline}</h3>
                  </div>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{active.description}</p>
                <button className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold hover:gap-3 transition-all duration-200" style={{ color: "#7B68EE" }}>
                  See {active.label} use case <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              {/* Right: benefits */}
              <div className="p-8 bg-slate-50 dark:bg-slate-800/50">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-5">Key capabilities</p>
                <ul className="space-y-3">
                  {active.benefits.map((b, i) => (
                    <motion.li
                      key={b}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06, duration: 0.2 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" style={{ color: "#7B68EE" }} />
                      <span className="text-sm text-slate-700 dark:text-slate-300">{b}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
