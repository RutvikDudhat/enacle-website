"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { motion } from "motion/react";
import {
  Brain, Bot, Zap, BarChart3,
  Shield, GitBranch, CheckCircle2, MessageSquare,
  FileText, LayoutGrid, Clock, Users,
  Layers, Sparkles, ArrowRight,
} from "lucide-react";

/* ─────────────────────────────────────────
   TOP 3 CARDS
───────────────────────────────────────── */
const TOP_CARDS = [
  {
    tag: "TASK MANAGEMENT",
    headline: "Never lose track of work again.",
    desc: "AI-powered boards that auto-prioritise, track blockers, and move tasks forward without manual overhead.",
    icon: LayoutGrid,
    accent: "text-[#49CCF9]",
    iconBg: "bg-[#49CCF9]",
    preview: (
      <div className="mt-5 rounded-2xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-lg">
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          <div className="ml-2 h-3 flex-1 bg-slate-200 dark:bg-slate-700 rounded-sm" />
        </div>
        <div className="flex gap-2 p-3">
          {[
            { col: "Todo", color: "bg-slate-400", tasks: ["Auth redesign", "API docs"] },
            { col: "In Progress", color: "bg-blue-500", tasks: ["Sprint planning"] },
            { col: "Done", color: "bg-emerald-500", tasks: ["Onboarding", "DB schema"] },
          ].map((col) => (
            <div key={col.col} className="flex-1 min-w-0">
              <div className="flex items-center gap-1 mb-1.5">
                <span className={`w-2 h-2 rounded-full ${col.color}`} />
                <span className="text-[9px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider truncate">{col.col}</span>
              </div>
              {col.tasks.map((t) => (
                <div key={t} className="mb-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 px-2 py-1.5">
                  <span className="text-[9px] font-medium text-slate-700 dark:text-slate-200">{t}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    tag: "AMBIENT AI",
    headline: "AI answers live inside your context.",
    desc: "Brain MAX reads your workspace — tasks, docs, threads — and surfaces answers before you finish typing.",
    icon: Brain,
    accent: "text-[#7B68EE]",
    iconBg: "bg-[#7B68EE]",
    preview: (
      <div className="mt-5 rounded-2xl bg-slate-900 dark:bg-[#0f172a] border border-slate-700 overflow-hidden shadow-lg font-mono text-[10px]">
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-slate-700 dark:border-slate-800">
          <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#7B68EE" }} />
          <span className="text-slate-400 text-[9px] uppercase tracking-widest">Brain MAX</span>
        </div>
        <div className="p-3 space-y-2.5">
          <div className="flex gap-2"><span className="text-slate-500 shrink-0">You</span><span className="text-slate-200">What&apos;s blocking the API sprint?</span></div>
          <div className="flex gap-2"><span className="font-bold shrink-0" style={{ color: "#7B68EE" }}>AI</span><span className="text-slate-400">2 blockers: rate-limit (KD, due Fri) and design review awaiting AM sign-off.</span></div>
          <div className="flex gap-2"><span className="text-slate-500 shrink-0">You</span><span className="text-slate-200">Draft a standup update</span></div>
          <div className="flex gap-2"><span className="font-bold shrink-0" style={{ color: "#7B68EE" }}>AI</span><span className="text-slate-400">✅ Schema done. 🔄 API endpoints in progress. ⚠️ Rate-limit fix needed.</span></div>
        </div>
      </div>
    ),
  },
  {
    tag: "AUTO-ASSIGN",
    headline: "Tasks assign themselves — intelligently.",
    desc: "Describe work in plain language. Enacle parses intent, creates tasks, assigns owners, and syncs deadlines.",
    icon: Bot,
    accent: "text-[#FD71AF]",
    iconBg: "bg-[#FD71AF]",
    preview: (
      <div className="mt-5 rounded-2xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-lg">
        {[
          { label: "Fix checkout bug", priority: "High", user: "KD", color: "bg-rose-500" },
          { label: "Update onboarding docs", priority: "Med", user: "AM", color: "bg-amber-500" },
          { label: "Deploy to staging", priority: "High", user: "SR", color: "bg-emerald-500" },
        ].map((task, i) => (
          <div key={task.label} className={`flex items-center gap-3 px-3 py-2.5 ${i < 2 ? "border-b border-slate-100 dark:border-slate-800" : ""}`}>
            <div className={`w-5 h-5 rounded-full ${task.color} flex items-center justify-center text-[8px] font-bold text-white shrink-0`}>{task.user}</div>
            <span className="text-[10px] font-medium text-slate-700 dark:text-slate-200 flex-1 truncate">{task.label}</span>
            <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded ${task.priority === "High" ? "bg-rose-50 dark:bg-rose-950 text-rose-600 dark:text-rose-400" : "bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400"}`}>{task.priority}</span>
          </div>
        ))}
        <div className="px-3 py-2 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2">
          <Bot className="h-3 w-3 text-emerald-500 shrink-0" />
          <div className="flex gap-0.5">
            {[0, 1, 2].map(i => (
              <motion.div key={i} className="w-1 h-1 bg-slate-400 rounded-full"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.2, delay: i * 0.2, repeat: Infinity }} />
            ))}
          </div>
          <span className="text-[9px] text-slate-400">Agent assigning tasks…</span>
        </div>
      </div>
    ),
  },
];

/* ─────────────────────────────────────────
   WIDE BOTTOM CARD
───────────────────────────────────────── */
const WIDE_FEATURES = [
  { icon: MessageSquare, label: "Threaded chat inside tasks" },
  { icon: FileText,       label: "Docs woven into projects" },
  { icon: BarChart3,      label: "Live dashboards from real data" },
  { icon: Zap,            label: "Automations across all tools" },
];

const WIDE_PREVIEW = (
  <div className="h-full rounded-2xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xl flex flex-col">
    <div className="flex items-center gap-2 px-4 py-2.5 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80">
      <div className="flex gap-1">
        <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
      </div>
      <div className="flex gap-3 ml-3">
        {["Tasks", "Docs", "Chat", "Dashboard"].map((tab, i) => (
          <span key={tab} className={`text-[9px] font-semibold pb-0.5 ${i === 0 ? "border-b-2" : "text-slate-400"}`}
            style={i === 0 ? { color: "#7B68EE", borderColor: "#7B68EE" } : {}}>{tab}</span>
        ))}
      </div>
    </div>
    <div className="flex flex-1 overflow-hidden">
      <div className="w-28 border-r border-slate-100 dark:border-slate-800 p-2 space-y-1 shrink-0">
        {[
          { icon: LayoutGrid, label: "Projects", active: true },
          { icon: MessageSquare, label: "Chat", active: false },
          { icon: FileText, label: "Docs", active: false },
          { icon: BarChart3, label: "Dashboards", active: false },
          { icon: Bot, label: "AI Agents", active: false },
          { icon: Clock, label: "Time Track", active: false },
        ].map((item) => (
          <div key={item.label} className={`flex items-center gap-1.5 px-1.5 py-1 rounded-lg ${item.active ? "bg-violet-50 dark:bg-violet-950/50" : ""}`}>
            <item.icon className={`h-2.5 w-2.5`} style={item.active ? { color: "#7B68EE" } : { color: "#94a3b8" }} />
            <span className={`text-[8px] font-medium`} style={item.active ? { color: "#7B68EE" } : { color: "#64748b" }}>{item.label}</span>
          </div>
        ))}
      </div>
      <div className="flex-1 p-3 space-y-2 overflow-hidden">
        <div className="grid grid-cols-3 gap-1.5 mb-2">
          {[{ v: "24", l: "Active", c: "#7B68EE" }, { v: "8", l: "Done", c: "#10b981" }, { v: "3", l: "Blocked", c: "#f43f5e" }].map(s => (
            <div key={s.l} className="bg-slate-50 dark:bg-slate-800 rounded-lg p-1.5 text-center">
              <p className="text-xs font-extrabold" style={{ color: s.c }}>{s.v}</p>
              <p className="text-[7px] text-slate-400">{s.l}</p>
            </div>
          ))}
        </div>
        {[
          { t: "API rate-limit fix", s: "In Progress", sc: "bg-blue-500" },
          { t: "Design review", s: "Review", sc: "bg-violet-500" },
          { t: "Deploy staging", s: "Done", sc: "bg-emerald-500" },
          { t: "Write API docs", s: "Todo", sc: "bg-amber-500" },
        ].map(task => (
          <div key={task.t} className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${task.sc} shrink-0`} />
            <span className="text-[8px] font-medium text-slate-700 dark:text-slate-200 flex-1 truncate">{task.t}</span>
            <span className={`text-[7px] font-semibold px-1 py-0.5 rounded ${
              task.s === "Done" ? "bg-emerald-50 dark:bg-emerald-950 text-emerald-600" :
              task.s === "In Progress" ? "bg-violet-50 dark:bg-violet-950 text-accent-enacle" :
              task.s === "Review" ? "bg-pink-50 dark:bg-pink-950 text-[#FD71AF]" :
              "bg-slate-100 dark:bg-slate-800 text-slate-500"
            }`}>{task.s}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ─────────────────────────────────────────
   BOTTOM 3
───────────────────────────────────────── */
const BOTTOM_THREE = [
  { icon: Users,     label: "Your company's AI",     desc: "A superhuman brain built for your team — trained on your data, docs, and decisions." },
  { icon: GitBranch, label: "Connected to 200+ apps", desc: "Superpowers to complete 500+ human tasks. One click to connect every tool you use." },
  { icon: Layers,    label: "Every AI model",         desc: "GPT-4o, Claude 3.5, Gemini — all accessible through one unified interface, unlimited." },
];

/* ─────────────────────────────────────────
   EXPORT
───────────────────────────────────────── */
export function Features() {
  return (
    <section className="py-28 bg-slate-50 dark:bg-[#060a14] overflow-hidden relative">

      {/* Radial glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-225 h-100 bg-[radial-gradient(ellipse_at_center,rgba(123,104,238,0.08)_0%,transparent_70%)]" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* ── HEADLINE ─────────────────────────────── */}
        <div className="text-center mb-16">
          <BlurFade>
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 dark:border-white/10 bg-violet-50 dark:bg-white/5 px-3.5 py-1.5 mb-5">
              <Sparkles className="h-3.5 w-3.5" style={{ color: "#7B68EE" }} />
              <span className="text-sm font-semibold tracking-wide" style={{ color: "#7B68EE" }}>Platform capabilities</span>
            </div>
          </BlurFade>
          <BlurFade delay={0.08}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0f172a] dark:text-white mb-5 leading-[1.05]">
              Every tool your team<br />
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg,#7B68EE,#FD71AF)" }}>
                will ever need
              </span>
            </h2>
          </BlurFade>
          <BlurFade delay={0.14}>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
              Replace every disconnected tool with one AI-powered workspace.
            </p>
          </BlurFade>
        </div>

        {/* ── TOP 3 CARDS ──────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {TOP_CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.tag}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                whileHover={{ y: -5, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                className="relative rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/4 backdrop-blur-sm p-6 overflow-hidden group cursor-pointer shadow-sm dark:shadow-none"
              >
                <BorderBeam size={250} duration={12} colorFrom="#7B68EE" colorTo="#FD71AF" />
                <div className={`absolute top-5 right-5 w-9 h-9 rounded-xl ${card.iconBg} flex items-center justify-center opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-200`}>
                  <Icon className="h-4 w-4 text-white" />
                </div>
                <p className={`text-[10px] font-black uppercase tracking-[0.18em] mb-3 ${card.accent}`}>{card.tag}</p>
                <h3 className="text-xl font-extrabold text-[#0f172a] dark:text-white leading-snug mb-2 pr-10">{card.headline}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{card.desc}</p>
                {card.preview}
              </motion.div>
            );
          })}
        </div>

        {/* ── WIDE CARD ────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/4 backdrop-blur-sm overflow-hidden shadow-sm dark:shadow-none"
        >
          <BorderBeam size={600} duration={18} colorFrom="#7B68EE" colorTo="#FFC800" />
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left */}
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] mb-4" style={{ color: "#7B68EE" }}>CONNECTED WORKSPACE</p>
              <h3 className="text-2xl lg:text-3xl font-extrabold text-[#0f172a] dark:text-white leading-snug mb-3">
                Every tool. One workspace.<br />Zero switching.
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                Chat threads live inside tasks. Docs link to projects. Dashboards pull from live data. Everything is connected — no copy-pasting, no tab-switching.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                {WIDE_FEATURES.map((f) => (
                  <div key={f.label} className="flex items-center gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                    <div className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(123,104,238,0.12)", border: "1px solid rgba(123,104,238,0.25)" }}>
                      <f.icon className="h-3.5 w-3.5" style={{ color: "#7B68EE" }} />
                    </div>
                    {f.label}
                  </div>
                ))}
              </div>
              <div className="inline-flex items-center gap-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-4 py-2.5 w-fit mb-6">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                <span className="text-sm font-semibold text-[#0f172a] dark:text-white">Save 2+ hours every day, guaranteed.</span>
              </div>
              <button className="inline-flex items-center gap-2 text-sm font-bold hover:opacity-80 hover:gap-3 transition-all" style={{ color: "#7B68EE" }}>
                Explore the platform <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            {/* Right — App mockup */}
            <div className="p-6 lg:p-8 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-white/10">
              <div className="h-72 lg:h-80">{WIDE_PREVIEW}</div>
            </div>
          </div>
        </motion.div>

        {/* ── BOTTOM 3 ─────────────────────────────── */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          {BOTTOM_THREE.map((item, i) => {
            const Icon = item.icon;
            return (
              <BlurFade key={item.label} delay={0.4 + i * 0.08}>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.09 }}
                  className="flex flex-col items-center gap-3"
                >
                  <div className="relative w-16 h-16">
                    <div className="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-white/8 border border-slate-200 dark:border-white/10 flex items-center justify-center">
                      <Icon className="h-7 w-7 text-slate-500 dark:text-slate-300" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center" style={{ background: "#7B68EE" }}>
                      <Sparkles className="h-2 w-2 text-white" />
                    </div>
                  </div>
                  <p className="text-sm font-bold text-[#0f172a] dark:text-white">{item.label}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-52">{item.desc}</p>
                </motion.div>
              </BlurFade>
            );
          })}
        </div>

        {/* ── SECURITY STRIP ───────────────────────── */}
        <BlurFade delay={0.5}>
          <div className="mt-14 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 px-6 py-5 flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0" style={{ background: "#7B68EE" }}>
                <Shield className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#0f172a] dark:text-white">Enterprise-Grade Security</p>
                <p className="text-xs text-slate-500">SOC 2 Type II · GDPR · CCPA · HIPAA-ready</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {["SOC 2 Type II", "GDPR & CCPA", "SSO & SCIM", "99.99% Uptime", "Audit Logs", "Data Residency"].map((b) => (
                <div key={b} className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 bg-white dark:bg-white/5 rounded-lg px-2.5 py-1.5 border border-slate-200 dark:border-white/10">
                  <CheckCircle2 className="h-3 w-3 text-amber-500 dark:text-amber-400 shrink-0" />{b}
                </div>
              ))}
            </div>
          </div>
        </BlurFade>

      </div>
    </section>
  );
}
