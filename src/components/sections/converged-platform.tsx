"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import { BorderBeam } from "@/components/ui/border-beam";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import {
  Layers, MessageSquare, Brain, Bot, GitBranch,
  Clock, Calendar, FileText, LayoutGrid, Zap, BarChart3, Target,
  CheckCircle2, ArrowRight, Sparkles, Terminal,
} from "lucide-react";

const MODULES = [
  {
    id: "projects", icon: Layers, label: "Projects",
    headline: "Plan, track & ship",
    description: "Kanban boards, sprints, Gantt timelines, and real-time burndowns — all connected to your AI copilot. No more switching between Jira and Confluence.",
    features: ["Kanban, List, Gantt & Timeline views", "Sprint planning & velocity tracking", "Milestones, dependencies & roadmaps", "AI-powered backlog prioritisation"],
    terminal: ["$ enacle project create --template=sprint", "✓ Sprint board created (8 tasks)", "✓ AI auto-assigned based on capacity", "✓ Gantt chart synced with calendar", "→ Team notified via Chat"],
    accent: "#7B68EE",
  },
  {
    id: "chat", icon: MessageSquare, label: "Chat",
    headline: "Context-aware team messaging",
    description: "Every conversation lives inside the relevant task, doc, or project. No more copy-pasting context between Slack and your PM tool.",
    features: ["Project-linked channels & threads", "AI meeting summaries & action items", "Video clips & async voice messages", "Smart @mentions with context"],
    terminal: ["$ enacle chat summarise --meeting=all-hands", "✓ Transcribed 47 min recording", "✓ Extracted 12 action items", "✓ Assigned owners automatically", "→ Summary posted to #general"],
    accent: "#FD71AF",
  },
  {
    id: "brain", icon: Brain, label: "Brain MAX",
    headline: "Your AI second brain",
    description: "Brain MAX reads across all your docs, tasks, and chat to generate summaries, answer questions, and surface what your team needs — before they ask.",
    features: ["Workspace-wide Q&A in natural language", "Doc & meeting summarisation at scale", "AI content drafting & editing assistant", "Proactive knowledge surfacing"],
    terminal: ['$ enacle brain ask "What did we decide about pricing?"', "✓ Scanning 2,847 docs & messages...", "✓ Found 3 relevant decisions", "→ Pricing locked at $49/seat (Mar 2)", "→ Source: Q1 Board Meeting Notes"],
    accent: "#7B68EE",
  },
  {
    id: "agents", icon: Bot, label: "AI Agents",
    headline: "Autonomous agents for every team",
    description: "Deploy AI agents that work 24/7 — triaging support tickets, qualifying leads, summarising standups, and executing complex multi-step workflows.",
    features: ["Visual no-code agent builder", "200+ trigger & action integrations", "Multi-step reasoning & task chains", "Human-in-the-loop approval gates"],
    terminal: ["$ enacle agent deploy --template=support-triage", "✓ Agent connected to Zendesk", "✓ Trained on 1,200 past tickets", "✓ Auto-resolving Tier-1 tickets: 62%", "→ Agent is live and running"],
    accent: "#FFC800",
  },
  {
    id: "automations", icon: Zap, label: "Automations",
    headline: "No-code workflow automation",
    description: "Build powerful workflows with a drag-and-drop editor. Connect 200+ apps, trigger on any event, and automate the repetitive work your team hates.",
    features: ["Visual drag-and-drop workflow builder", "200+ app integrations built-in", "Conditional logic & branching rules", "Scheduled & event-triggered automations"],
    terminal: ["$ enacle automate create --trigger=task.overdue", "✓ Condition: overdue > 2 days", "✓ Action: notify assignee + manager", "✓ Action: escalate priority to Urgent", "→ Automation live — 0 missed deadlines"],
    accent: "#FD71AF",
  },
  {
    id: "dashboards", icon: BarChart3, label: "Dashboards",
    headline: "Real-time intelligence at a glance",
    description: "Build live KPI dashboards with drag-and-drop widgets. Connect any data source. Share with stakeholders or embed in docs and presentations.",
    features: ["Drag-and-drop widget builder", "Live data from tasks, docs & integrations", "Shareable dashboards with access control", "AI-generated weekly digest reports"],
    terminal: ["$ enacle dashboard create --type=executive", "✓ Pulling data from 6 sources...", "✓ Revenue: $2.4M (+18% MoM)", "✓ Velocity: 94pts (+12 vs last sprint)", "→ Dashboard shared with leadership"],
    accent: "#49CCF9",
  },
];

const ORBIT_ICONS = [Layers, MessageSquare, Brain, Bot, Zap, BarChart3, Clock, Calendar, FileText, LayoutGrid, GitBranch, Target];

export function ConvergedPlatform() {
  const [active, setActive] = useState(0);
  const mod = MODULES[active];
  const Icon = mod.icon;

  return (
    <section className="py-28 bg-slate-50 dark:bg-[#060b18] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <BlurFade>
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-950/50 px-3.5 py-1.5 mb-5">
              <Sparkles className="h-3.5 w-3.5" style={{ color: "#7B68EE" }} />
              <span className="text-sm font-semibold" style={{ color: "#7B68EE" }}>One converged platform</span>
            </div>
          </BlurFade>
          <BlurFade delay={0.08}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0f172a] dark:text-white mb-5">
              Every tool your team needs.{" "}
              <span style={{ color: "#FFC800" }}>One platform.</span>
            </h2>
          </BlurFade>
          <BlurFade delay={0.14}>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Stop stitching together 10 different SaaS tools. Enacle converges projects, chat, docs,
              AI agents, and automations into a single OS for your business.
            </p>
          </BlurFade>
        </div>

        {/* Module tabs */}
        <BlurFade delay={0.18}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {MODULES.map((m, i) => {
              const MIcon = m.icon;
              return (
                <button
                  key={m.id}
                  onClick={() => setActive(i)}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    active === i
                      ? "text-white shadow-lg"
                      : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-violet-50 dark:hover:bg-violet-950/40 hover:text-accent-enacle dark:hover:text-violet-400 border border-slate-200 dark:border-slate-700"
                  }`}
                  style={active === i ? { background: "linear-gradient(135deg,#7B68EE,#FD71AF)", boxShadow: "0 4px 15px rgba(123,104,238,0.3)" } : {}}
                >
                  <MIcon className="h-3.5 w-3.5" />
                  {m.label}
                </button>
              );
            })}
          </div>
        </BlurFade>

        {/* Main panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={mod.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch"
          >
            {/* Left: Info card */}
            <MagicCard
              className="rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-900 p-8 relative overflow-hidden shadow-sm"
              gradientColor="#ede9fe"
              gradientOpacity={0.5}
            >
              <BorderBeam size={300} duration={10} colorFrom="#7B68EE" colorTo="#FD71AF" />
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shadow-sm" style={{ background: mod.accent }}>
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-widest font-semibold">{mod.label}</p>
                  <h3 className="text-lg font-bold text-[#0f172a] dark:text-white">{mod.headline}</h3>
                </div>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">{mod.description}</p>
              <ul className="space-y-2.5 mb-8">
                {mod.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" style={{ color: "#7B68EE" }} />
                    {f}
                  </li>
                ))}
              </ul>
              <button className="inline-flex items-center gap-1.5 text-sm font-semibold hover:gap-3 transition-all duration-200" style={{ color: "#7B68EE" }}>
                Explore {mod.label} <ArrowRight className="h-4 w-4" />
              </button>
            </MagicCard>

            {/* Right: Orbit + terminal */}
            <div className="flex flex-col gap-5">
              <MagicCard              className="rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-900 relative overflow-hidden flex items-center justify-center min-h-56 shadow-sm"
              gradientColor="#ede9fe"
                gradientOpacity={0.6}
              >
                <BorderBeam size={250} duration={14} colorFrom="#FD71AF" colorTo="#7B68EE" />                  <div className="relative w-52 h-52 flex items-center justify-center my-4">
                  <div className="absolute z-10 w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl" style={{ background: mod.accent }}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <OrbitingCircles radius={55} duration={10} iconSize={28}>
                    {ORBIT_ICONS.slice(0, 4).map((OIcon, i) => (
                      <div key={i} className="w-7 h-7 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-center">
                        <OIcon className="h-3.5 w-3.5 text-slate-600 dark:text-slate-300" />
                      </div>
                    ))}
                  </OrbitingCircles>
                  <OrbitingCircles radius={92} duration={18} reverse iconSize={28}>
                    {ORBIT_ICONS.slice(4, 8).map((OIcon, i) => (
                      <div key={i} className="w-7 h-7 rounded-full border flex items-center justify-center" style={{ background: "rgba(123,104,238,0.08)", borderColor: "rgba(123,104,238,0.3)" }}>
                        <OIcon className="h-3.5 w-3.5" style={{ color: "#7B68EE" }} />
                      </div>
                    ))}
                  </OrbitingCircles>
                </div>
              </MagicCard>

              {/* Terminal — navy dark */}
              <MagicCard
                className="rounded-2xl border border-slate-200 bg-[#0f172a] relative overflow-hidden flex-1 shadow-sm"
                gradientColor="#1e3a5f"
                gradientOpacity={0.4}
              >
                <div className="flex items-center gap-1.5 px-4 pt-4 pb-3 border-b border-white/5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <div className="ml-3 flex items-center gap-1.5 text-slate-400 text-xs">
                    <Terminal className="h-3 w-3" />
                    <span>enacle-cli — zsh</span>
                  </div>
                </div>
                <div className="p-4 font-mono text-xs space-y-1.5">
                  {mod.terminal.map((line, i) => (
                    <motion.p
                      key={`${mod.id}-${i}`}
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.12, duration: 0.2 }}
                      className={
                        line.startsWith("$")
                          ? "text-amber-300"
                          : line.startsWith("✓")
                          ? "text-emerald-400"
                          : line.startsWith("→")
                          ? "text-[#49CCF9]"
                          : "text-slate-400"
                      }
                    >
                      {line}
                    </motion.p>
                  ))}
                </div>
              </MagicCard>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom stat strip */}
        <BlurFade delay={0.3}>
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { v: "12", label: "Products in one platform" },
              { v: "200+", label: "Native integrations" },
              { v: "50k+", label: "Teams using Enacle" },
              { v: "99.99%", label: "Uptime SLA" },
            ].map((s) => (
              <div key={s.label} className="rounded-xl border border-violet-100 dark:border-violet-900/50 bg-violet-50 dark:bg-violet-950/30 px-5 py-4 text-center">
                <p className="text-2xl font-extrabold text-[#0f172a] dark:text-white">{s.v}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </BlurFade>

      </div>
    </section>
  );
}
