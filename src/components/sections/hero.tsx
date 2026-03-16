"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { BlurFade } from "@/components/ui/blur-fade";
import { Marquee } from "@/components/ui/marquee";
import { WordRotate } from "@/components/ui/word-rotate";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Particles } from "@/components/ui/particles";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { BorderBeam } from "@/components/ui/border-beam";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { RetroGrid } from "@/components/ui/retro-grid";
import { Globe } from "@/components/ui/globe";
import {
  ArrowRight, CheckCircle2, Play, Layers, Brain, MessageSquare,
  FileText, BarChart3, Zap, Clock, Calendar, GitBranch, Target,
  LayoutGrid, Bot, Sparkles, CheckCheck, Flag, Plus, Search,
  Home, Inbox, ChevronDown, Settings2, Circle, AlertCircle,
  ChevronRight, X,
} from "lucide-react";

// ─── Data ──────────────────────────────────────────────────────────────────

const LEFT_NAV = [
  { id: "projects",    label: "Projects",      icon: Layers },
  { id: "chat",        label: "Chat",          icon: MessageSquare },
  { id: "brain",       label: "Brain MAX",     icon: Brain },
  { id: "agents",      label: "AI Agents",     icon: Bot },
  { id: "sprints",     label: "Sprints",       icon: GitBranch },
  { id: "time",        label: "Time Tracking", icon: Clock },
  { id: "calendar",    label: "Calendar",      icon: Calendar },
  { id: "docs",        label: "Docs",          icon: FileText },
  { id: "whiteboards", label: "Whiteboards",   icon: LayoutGrid },
  { id: "automations", label: "Automations",   icon: Zap },
  { id: "dashboards",  label: "Dashboards",    icon: BarChart3 },
  { id: "scheduling",  label: "Scheduling",    icon: Target },
];

const TRUSTED = ["Amazon", "NVIDIA", "Wayfair", "Verizon", "Spotify", "Harvard", "Toyota", "Dropbox", "Atlassian", "Booking.com"];

const WORKSPACE_NAV = [
  { icon: Home,     label: "Home",     badge: null },
  { icon: Inbox,    label: "Inbox",    badge: 3 },
  { icon: Target,   label: "My Tasks", badge: null },
  { icon: Calendar, label: "Schedule", badge: null },
];

type Priority = "urgent" | "high" | "normal" | "low" | "none";
interface Row { id: number; name: string; group: "done"|"in-progress"|"todo"; assignees: string[]; priority: Priority; ai: boolean; team: string; }

const DATA: Record<string, Row[]> = {
  projects: [
    { id:1, name:"Social campaign",          group:"done",        assignees:["KD","RV"],  priority:"low",    ai:false, team:"Marketing" },
    { id:2, name:"Website assets",           group:"done",        assignees:["AM"],       priority:"urgent", ai:true,  team:"Design" },
    { id:3, name:"Landing page",             group:"done",        assignees:["SL","KD"],  priority:"normal", ai:false, team:"Design" },
    { id:4, name:"Mobile assets",            group:"done",        assignees:["AM","TJ"],  priority:"normal", ai:false, team:"Marketing" },
    { id:5, name:"Market Research Analysis", group:"in-progress", assignees:["KD"],       priority:"normal", ai:true,  team:"Strategy" },
    { id:6, name:"Campaign brief v2",        group:"in-progress", assignees:["RV","SL"],  priority:"high",   ai:false, team:"Marketing" },
    { id:7, name:"Q3 Roadmap doc",           group:"todo",        assignees:["AM"],       priority:"urgent", ai:true,  team:"Product" },
  ],
  chat: [
    { id:1, name:"Engineering standup",    group:"done",        assignees:["KD","RV","AM"], priority:"none",   ai:false, team:"Engineering" },
    { id:2, name:"Design review thread",   group:"done",        assignees:["SL"],           priority:"normal", ai:false, team:"Design" },
    { id:3, name:"Client onboarding chat", group:"in-progress", assignees:["TJ","KD"],      priority:"high",   ai:true,  team:"CS" },
    { id:4, name:"Product Q3 roadmap",     group:"in-progress", assignees:["RV"],           priority:"urgent", ai:true,  team:"Product" },
    { id:5, name:"Marketing brief",        group:"todo",        assignees:["AM","SL"],      priority:"normal", ai:false, team:"Marketing" },
  ],
  brain: [
    { id:1, name:"Q2 board meeting summary",    group:"done",        assignees:["AI"], priority:"high",   ai:true, team:"AI" },
    { id:2, name:"Sprint retro generation",     group:"in-progress", assignees:["AI"], priority:"urgent", ai:true, team:"AI" },
    { id:3, name:"Investor update email draft", group:"in-progress", assignees:["AI"], priority:"normal", ai:true, team:"AI" },
    { id:4, name:"Competitor pricing research", group:"todo",        assignees:["AI"], priority:"normal", ai:true, team:"AI" },
  ],
  agents: [
    { id:1, name:"Lead qualification agent",  group:"in-progress", assignees:["Bot"], priority:"urgent", ai:true, team:"Sales" },
    { id:2, name:"Support ticket triage bot", group:"in-progress", assignees:["Bot"], priority:"high",   ai:true, team:"Support" },
    { id:3, name:"Daily standup summariser",  group:"done",        assignees:["Bot"], priority:"normal", ai:true, team:"Eng" },
    { id:4, name:"Invoice reminder agent",    group:"todo",        assignees:["Bot"], priority:"normal", ai:true, team:"Finance" },
  ],
  sprints: [
    { id:1, name:"Sprint 5 — Feature flags",  group:"in-progress", assignees:["KD","AM"], priority:"urgent", ai:false, team:"Eng" },
    { id:2, name:"Sprint 4 — Retro complete", group:"done",        assignees:["RV"],      priority:"none",   ai:false, team:"Eng" },
    { id:3, name:"Backlog grooming session",  group:"todo",        assignees:["SL","KD"], priority:"normal", ai:false, team:"PM" },
    { id:4, name:"Sprint 6 planning",         group:"todo",        assignees:["KD"],      priority:"normal", ai:true,  team:"Eng" },
  ],
  time: [
    { id:1, name:"Backend API — 12h logged",  group:"done",        assignees:["KD"],      priority:"none",   ai:false, team:"Eng" },
    { id:2, name:"Design system — 8h logged", group:"in-progress", assignees:["RV"],      priority:"low",    ai:false, team:"Design" },
    { id:3, name:"Client calls — 3h logged",  group:"in-progress", assignees:["AM","SL"], priority:"none",   ai:false, team:"CS" },
    { id:4, name:"Documentation — 5h est",    group:"todo",        assignees:["KD"],      priority:"normal", ai:true,  team:"Eng" },
  ],
  calendar: [
    { id:1, name:"Product demo — Acme Corp",  group:"in-progress", assignees:["KD","SL"], priority:"urgent", ai:false, team:"Sales" },
    { id:2, name:"Engineering sync",          group:"done",        assignees:["AM","RV"], priority:"none",   ai:false, team:"Eng" },
    { id:3, name:"Investor call — Series A",  group:"todo",        assignees:["TJ"],      priority:"urgent", ai:false, team:"Exec" },
    { id:4, name:"All-hands meeting",         group:"todo",        assignees:["ALL"],     priority:"none",   ai:false, team:"All" },
  ],
  docs: [
    { id:1, name:"Product requirements v3",   group:"in-progress", assignees:["SL","KD"], priority:"urgent", ai:true,  team:"PM" },
    { id:2, name:"Engineering handbook",       group:"done",        assignees:["AM"],      priority:"none",   ai:false, team:"Eng" },
    { id:3, name:"Customer onboarding guide", group:"in-progress", assignees:["RV"],      priority:"normal", ai:false, team:"CS" },
    { id:4, name:"API reference docs",        group:"todo",        assignees:["KD"],      priority:"normal", ai:true,  team:"Eng" },
  ],
  whiteboards: [
    { id:1, name:"Q3 product strategy board", group:"done",        assignees:["RV","KD"], priority:"high",   ai:false, team:"PM" },
    { id:2, name:"UX user flow diagram",       group:"in-progress", assignees:["AM"],      priority:"normal", ai:false, team:"Design" },
    { id:3, name:"System architecture map",    group:"in-progress", assignees:["SL"],      priority:"urgent", ai:false, team:"Eng" },
    { id:4, name:"OKR planning canvas",        group:"todo",        assignees:["TJ","RV"], priority:"normal", ai:true,  team:"Exec" },
  ],
  automations: [
    { id:1, name:"Auto-assign incoming tickets", group:"in-progress", assignees:["Sys"],      priority:"urgent", ai:true, team:"Support" },
    { id:2, name:"Weekly digest email",          group:"done",        assignees:["Sys"],      priority:"normal", ai:true, team:"Mktg" },
    { id:3, name:"Lead to CRM sync",             group:"in-progress", assignees:["Sys","KD"], priority:"high",   ai:true, team:"Sales" },
    { id:4, name:"Overdue task pinger",          group:"todo",        assignees:["Sys"],      priority:"normal", ai:true, team:"PM" },
  ],
  dashboards: [
    { id:1, name:"Executive KPI dashboard",    group:"done",        assignees:["TJ","KD"], priority:"high",   ai:true,  team:"Exec" },
    { id:2, name:"Engineering velocity chart", group:"in-progress", assignees:["AM","RV"], priority:"normal", ai:false, team:"Eng" },
    { id:3, name:"Sales pipeline view",        group:"in-progress", assignees:["SL"],      priority:"urgent", ai:true,  team:"Sales" },
    { id:4, name:"Marketing funnel report",    group:"todo",        assignees:["KD","AM"], priority:"low",    ai:false, team:"Mktg" },
  ],
  scheduling: [
    { id:1, name:"Resource allocation Q3",   group:"in-progress", assignees:["SL","KD"], priority:"high",   ai:true,  team:"PM" },
    { id:2, name:"On-call rota June",         group:"done",        assignees:["AM","RV"], priority:"none",   ai:false, team:"Eng" },
    { id:3, name:"Contractor scheduling",     group:"in-progress", assignees:["TJ"],      priority:"normal", ai:false, team:"Ops" },
    { id:4, name:"Sprint capacity planning",  group:"todo",        assignees:["KD"],      priority:"normal", ai:true,  team:"PM" },
  ],
};

const PRIORITY_CFG: Record<Priority, { label: string; cls: string }> = {
  urgent: { label: "Urgent", cls: "bg-red-100 text-red-600" },
  high:   { label: "High",   cls: "bg-orange-100 text-orange-500" },
  normal: { label: "Normal", cls: "bg-zinc-100 text-zinc-500" },
  low:    { label: "Low",    cls: "bg-zinc-50 text-zinc-400" },
  none:   { label: "",       cls: "" },
};

const AVATAR_COLORS: Record<string, string> = {
  KD:"#1e40af", RV:"#0f172a", AM:"#0369a1", SL:"#7c3aed",
  TJ:"#047857", Bot:"#1e40af", Sys:"#0f172a", AI:"#0369a1", ALL:"#7c3aed",
};

// ─── Sub-components ─────────────────────────────────────────────────────────

function PriorityBadge({ p }: { p: Priority }) {
  if (p === "none") return <span className="text-zinc-300">—</span>;
  const cfg = PRIORITY_CFG[p];
  return (
    <span className={`inline-flex items-center gap-0.5 text-[10px] font-semibold px-1.5 py-0.5 rounded ${cfg.cls}`}>
      <Flag className="h-2.5 w-2.5" />{cfg.label}
    </span>
  );
}

function Avatars({ names }: { names: string[] }) {
  return (
    <div className="flex -space-x-1">
      {names.slice(0, 3).map((n) => (
        <div key={n} className="w-5 h-5 rounded-full border border-white flex items-center justify-center text-[8px] font-bold text-white shrink-0"
          style={{ backgroundColor: AVATAR_COLORS[n] ?? "#71717a" }}>
          {n.slice(0, 2)}
        </div>
      ))}
    </div>
  );
}

function TaskRow({ row, i }: { row: Row; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -4 }} animate={{ opacity: 1, x: 0 }}
      transition={{ delay: i * 0.04, duration: 0.15 }}
      className="grid grid-cols-[1fr_70px_72px_28px_56px] gap-1 items-center px-3 py-1.5 border-b border-zinc-100 dark:border-slate-800 hover:bg-zinc-50 dark:hover:bg-slate-800/40 cursor-pointer transition-colors"
    >
      <div className="flex items-center gap-2 min-w-0">
        {row.group === "done" ? <CheckCheck className="h-3.5 w-3.5 text-zinc-400 dark:text-slate-500 shrink-0" />
          : row.group === "in-progress" ? <div className="w-3.5 h-3.5 rounded-full border-2 border-zinc-800 dark:border-slate-400 shrink-0" />
          : <Circle className="h-3.5 w-3.5 text-zinc-300 dark:text-slate-600 shrink-0" />}
        <span className={`text-xs truncate ${row.group === "done" ? "text-zinc-400 dark:text-slate-500 line-through" : "text-zinc-800 dark:text-slate-200"}`}>{row.name}</span>
      </div>
      <Avatars names={row.assignees} />
      <PriorityBadge p={row.priority} />
      <div className="flex justify-center">{row.ai && <Sparkles className="h-3 w-3 text-zinc-700 dark:text-slate-400" />}</div>
      <span className="text-[10px] text-zinc-400 dark:text-slate-500 truncate">{row.team}</span>
    </motion.div>
  );
}

const VIEW_TABS = ["Chat", "Tasks", "Schedule", "Gantt", "Customers"];

function DashboardPanel({ tab }: { tab: string }) {
  const [viewTab, setViewTab] = useState("Tasks");
  const rows = DATA[tab] ?? DATA.projects;
  const done   = rows.filter(r => r.group === "done");
  const inProg = rows.filter(r => r.group === "in-progress");
  const todo   = rows.filter(r => r.group === "todo");

  return (
    <div className="flex h-full">
      {/* Inner sidebar */}
      <div className="hidden md:flex w-44 shrink-0 flex-col bg-[#0f172a] border-r border-slate-700/50">
        <div className="flex items-center gap-2 px-3 py-3 border-b border-slate-700/50">
          <div className="w-5 h-5 rounded bg-[#f59e0b] flex items-center justify-center shrink-0">
            <span className="text-[9px] font-black text-[#0f172a]">E</span>
          </div>
          <span className="text-xs font-bold text-white truncate">Enacle Inc.</span>
          <ChevronDown className="h-3 w-3 text-slate-500 ml-auto shrink-0" />
        </div>
        <div className="px-2 py-2 space-y-0.5 border-b border-slate-700/50">
          {WORKSPACE_NAV.map(item => (
            <div key={item.label} className="flex items-center gap-2 px-2 py-1.5 rounded text-xs text-slate-400 hover:text-white hover:bg-slate-700/50 cursor-pointer transition-colors">
              <item.icon className="h-3.5 w-3.5 shrink-0" />
              <span className="flex-1">{item.label}</span>
              {item.badge && <span className="text-[9px] bg-[#f59e0b] text-[#0f172a] rounded-full px-1.5 py-0.5 leading-none font-bold">{item.badge}</span>}
            </div>
          ))}
        </div>
        <div className="px-3 pt-2 pb-1"><span className="text-[9px] font-bold uppercase tracking-widest text-slate-600">Creative Team</span></div>
        <div className="px-2 space-y-0.5">
          {["Product Backlog", "Creative"].map(s => (
            <div key={s} className={`flex items-center gap-2 px-2 py-1.5 rounded text-xs cursor-pointer transition-colors ${s === "Creative" ? "text-white bg-slate-700/60" : "text-slate-500 hover:bg-slate-700/40"}`}>
              <div className="w-3 h-3 rounded-sm bg-slate-600 shrink-0" />
              <span>{s}</span>
            </div>
          ))}
          {[
            { name: "Dean P.",        color: "#1e40af", bot: false },
            { name: "Campaign Agent", color: "#f59e0b", bot: true  },
            { name: "Zeb E.",         color: "#047857", bot: false },
          ].map(p => (
            <div key={p.name} className="flex items-center gap-2 px-2 py-1.5 rounded text-xs text-slate-400 hover:text-slate-200 cursor-pointer transition-colors">
              <div className="w-4 h-4 rounded-full shrink-0 flex items-center justify-center text-[8px] font-bold text-white" style={{ backgroundColor: p.color }}>
                {p.bot ? <Bot className="h-2.5 w-2.5 text-[#0f172a]" /> : p.name[0]}
              </div>
              <span className="flex-1 truncate">{p.name}</span>
            </div>
          ))}
        </div>
        <div className="mt-2 px-2 border-t border-slate-700/50 pt-2">
          <div className="text-[9px] font-bold uppercase tracking-widest text-slate-600 px-2 mb-1">Spaces</div>
          <div className="flex items-center gap-2 px-2 py-1.5 rounded text-xs text-white bg-blue-600/30 cursor-pointer">
            <div className="w-3 h-3 rounded-sm bg-blue-400 shrink-0" />Marketing
          </div>
          <div className="flex items-center gap-2 px-2 py-1.5 rounded text-xs text-slate-500 cursor-pointer">
            <div className="w-3 h-3 rounded-sm bg-slate-600 shrink-0" />Campaigns
          </div>
        </div>
      </div>

      {/* Main panel */}
      <div className="flex-1 flex flex-col min-w-0 bg-white dark:bg-slate-900">
        <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-100 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-zinc-900 dark:text-white">Marketing</span>
            <ChevronDown className="h-3 w-3 text-zinc-400 dark:text-slate-500" />
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden lg:flex items-center gap-1 bg-zinc-50 dark:bg-slate-800 border border-zinc-200 dark:border-slate-700 rounded px-2 py-1">
              <Search className="h-3 w-3 text-zinc-400 dark:text-slate-500" />
            </div>
            <Settings2 className="h-4 w-4 text-zinc-400 dark:text-slate-500 cursor-pointer" />
          </div>
        </div>
        <div className="flex items-center gap-0 border-b border-zinc-100 dark:border-slate-800 px-3 overflow-x-auto [scrollbar-width:none]">
          {VIEW_TABS.map(vt => (
            <button key={vt} onClick={() => setViewTab(vt)}
              className={`px-3 py-2 text-xs font-medium whitespace-nowrap border-b-2 transition-colors ${viewTab === vt ? "border-zinc-900 dark:border-white text-zinc-900 dark:text-white" : "border-transparent text-zinc-400 dark:text-slate-500 hover:text-zinc-700 dark:hover:text-slate-300"}`}>
              {vt}
            </button>
          ))}
          <button className="ml-2 flex items-center gap-1 px-2 py-1.5 text-xs text-zinc-400 dark:text-slate-500 hover:text-zinc-600 dark:hover:text-slate-300 whitespace-nowrap">
            <Plus className="h-3 w-3" /> View
          </button>
        </div>
        <div className="grid grid-cols-[1fr_70px_72px_28px_56px] gap-1 px-3 py-1.5 text-[10px] font-bold text-zinc-400 dark:text-slate-500 uppercase tracking-wider border-b border-zinc-100 dark:border-slate-800 bg-zinc-50/80 dark:bg-slate-800/50">
          <span>Name</span><span>Assignees</span><span>Priority</span>
          <span className="text-center">AI</span><span>Team</span>
        </div>
        <div className="flex-1 overflow-y-auto overflow-x-hidden">
          <AnimatePresence mode="wait">
            <motion.div key={tab + viewTab} initial={{ opacity:0, y:5 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-5 }} transition={{ duration: 0.15 }}>
              {done.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-50 dark:bg-slate-800/60 border-b border-zinc-100 dark:border-slate-800">
                    <CheckCheck className="h-3.5 w-3.5 text-zinc-500 dark:text-slate-400" />
                    <span className="text-[11px] font-bold text-zinc-500 dark:text-slate-400 uppercase tracking-wide">Done</span>
                    <span className="text-[10px] bg-zinc-200 dark:bg-slate-700 text-zinc-600 dark:text-slate-300 rounded-full px-1.5 font-semibold">{done.length}</span>
                  </div>
                  {done.map((r, i) => <TaskRow key={r.id} row={r} i={i} />)}
                </div>
              )}
              {inProg.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-50 dark:bg-slate-800/60 border-b border-zinc-100 dark:border-slate-800">
                    <div className="w-3.5 h-3.5 rounded-full border-2 border-zinc-700 dark:border-slate-400" />
                    <span className="text-[11px] font-bold text-zinc-700 dark:text-slate-300 uppercase tracking-wide">In Progress</span>
                    <span className="text-[10px] bg-zinc-200 dark:bg-slate-700 text-zinc-700 dark:text-slate-300 rounded-full px-1.5 font-semibold">{inProg.length}</span>
                  </div>
                  {inProg.map((r, i) => <TaskRow key={r.id} row={r} i={i} />)}
                </div>
              )}
              {todo.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-50 dark:bg-slate-800/60 border-b border-zinc-100 dark:border-slate-800">
                    <Circle className="h-3.5 w-3.5 text-zinc-400 dark:text-slate-500" />
                    <span className="text-[11px] font-bold text-zinc-400 dark:text-slate-500 uppercase tracking-wide">Todo</span>
                    <span className="text-[10px] bg-zinc-100 dark:bg-slate-700/60 text-zinc-500 dark:text-slate-400 rounded-full px-1.5 font-semibold">{todo.length}</span>
                  </div>
                  {todo.map((r, i) => <TaskRow key={r.id} row={r} i={i} />)}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
          <div className="flex items-center gap-2 px-3 py-2 hover:bg-zinc-50 dark:hover:bg-slate-800/60 cursor-pointer transition-colors">
            <Plus className="h-3.5 w-3.5 text-zinc-300 dark:text-slate-600" />
            <span className="text-xs text-zinc-400 dark:text-slate-500">Add task</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Agent card floating overlay
function AgentCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.4, duration: 0.5, type: "spring", stiffness: 120 }}
      className="absolute bottom-6 right-3 lg:bottom-8 lg:-right-2 z-20 w-52 bg-white rounded-2xl border border-zinc-200 shadow-2xl overflow-hidden pointer-events-none"
    >
      <div className="bg-[#0f172a] px-3 py-2.5">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-blue-500/20 flex items-center justify-center shrink-0">
            <Bot className="h-4 w-4 text-blue-300" />
          </div>
          <div>
            <div className="text-[11px] font-bold text-white leading-tight">Project Management</div>
            <div className="text-[10px] text-slate-400">Super Agent</div>
          </div>
          <div className="ml-auto w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        </div>
      </div>
      <div className="p-3 space-y-2">
        {[
          { icon: CheckCheck,  text: "Summarised Q2 board notes",    bg: "bg-slate-50",     col: "text-slate-700" },
          { icon: AlertCircle, text: "3 tasks overdue — reassigning", bg: "bg-slate-50",     col: "text-slate-700" },
          { icon: Sparkles,    text: "Sprint plan ready to review",   bg: "bg-[#0f172a]",    col: "text-white"    },
        ].map((item, i) => (
          <div key={i} className={`flex items-start gap-2 rounded-lg p-1.5 ${item.bg}`}>
            <item.icon className={`h-3 w-3 mt-0.5 shrink-0 ${item.col}`} />
            <span className={`text-[10px] leading-tight ${item.col}`}>{item.text}</span>
          </div>
        ))}
        <div className="text-center pt-0.5">
          <span className="text-[10px] text-slate-500 font-semibold">Prioritising… Agent</span>
        </div>
      </div>
    </motion.div>
  );
}

// Video dialog
function VideoDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative w-full max-w-3xl aspect-video bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-700 shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="absolute inset-0 flex items-center justify-center flex-col gap-4">
              <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center">
                <Play className="h-8 w-8 text-white ml-1" />
              </div>
              <p className="text-zinc-400 text-sm">Platform overview · 2 min</p>
            </div>
            <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
              <X className="h-4 w-4 text-white" />
            </button>
            <BorderBeam size={300} duration={8} colorFrom="#ffffff" colorTo="#71717a" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Main Hero ───────────────────────────────────────────────────────────────
export default function Hero() {
  const [activeTab, setActiveTab] = useState("projects");
  const [videoOpen, setVideoOpen]   = useState(false);

  // Refs for AnimatedBeam
  const containerRef = useRef<HTMLDivElement>(null);
  const demoRef      = useRef<HTMLDivElement>(null);
  const pricingRef   = useRef<HTMLButtonElement>(null);

  return (
    <>
      <VideoDialog open={videoOpen} onClose={() => setVideoOpen(false)} />
      <section className="relative overflow-hidden bg-white dark:bg-[#080d1a]">
        {/* RetroGrid background — light/dark aware */}
        <RetroGrid
          angle={65}
          cellSize={60}
          opacity={0.5}
          lightLineColor="#e2e8f0"
          darkLineColor="#1e293b"
          className="z-0"
        />
        {/* Top radial fade so grid fades out towards centre */}
        <div className="pointer-events-none absolute inset-0 z-1 mask-[radial-gradient(ellipse_80%_55%_at_50%_0%,transparent_40%,#000_100%)] bg-white dark:bg-[#080d1a]" />
        {/* Particles on top of grid */}
        <Particles className="absolute inset-0 z-2" quantity={60} color="#a1a1aa" size={0.6} />

      

        <div className="relative z-10 mx-auto max-w-350 px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-0">

          {/* ── Badge ── */}
          <BlurFade delay={0.05} className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 dark:border-violet-700/60 bg-violet-50 dark:bg-violet-950/40 px-3.5 py-1.5 shadow-sm">
              <span className="flex h-2 w-2 rounded-full animate-pulse" style={{ background: "#7B68EE" }} />
              <AnimatedGradientText className="text-sm font-semibold" style={{ color: "#7B68EE" }}>
                New! AI Company Intelligence
              </AnimatedGradientText>
              <ChevronRight className="h-3.5 w-3.5 text-violet-400" />
            </div>
          </BlurFade>

          {/* ── Headline ── */}
          <BlurFade delay={0.1} className="text-center mb-5">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] font-black tracking-tight text-zinc-950 dark:text-white leading-[1.04] mb-3">
              Every app. Every team.
            </h1>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] font-black tracking-tight leading-[1.04] flex flex-wrap items-center justify-center gap-x-3">
              <span className="text-zinc-950 dark:text-white">Unlimited</span>
              <WordRotate
                words={["AI Agents.", "Automation.", "Intelligence.", "Clarity."]}
                className="text-zinc-400"
                duration={2800}
              />
            </h1>
          </BlurFade>

          {/* ── Sub-headline ── */}
          <BlurFade delay={0.18} className="text-center mb-8">
            <p className="text-base sm:text-lg text-zinc-500 leading-relaxed max-w-2xl mx-auto">
              One AI-powered platform for projects, docs, chat, CRM, support and autonomous agents —
              replacing every disconnected tool your team uses today.
            </p>
          </BlurFade>

          {/* ── CTAs + AnimatedBeam ── */}
          <BlurFade delay={0.24} className="flex justify-center mb-10">
            <div ref={containerRef} className="relative flex flex-col sm:flex-row items-center justify-center gap-3">
              {/* Primary CTA — shimmer */}
              <div ref={demoRef}>
                <Link href="/signup">
                  <ShimmerButton
                    background="linear-gradient(135deg,#7B68EE,#FD71AF)"
                    shimmerColor="#ffffff"
                    borderRadius="12px"
                    className="px-6 py-3 text-sm font-bold"
                  >
                    Get Started — It&apos;s FREE
                    <ArrowRight className="ml-2 h-4 w-4 inline" />
                  </ShimmerButton>
                </Link>
              </div>

              {/* Video CTA */}
              <button
                onClick={() => setVideoOpen(true)}
                className="flex items-center gap-2.5 px-5 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm font-semibold text-zinc-700 dark:text-slate-200 hover:border-zinc-400 dark:hover:border-slate-500 hover:bg-zinc-50 dark:hover:bg-slate-700 transition-all shadow-sm"
                ref={pricingRef}
              >
                <div className="w-6 h-6 rounded-full bg-zinc-900 flex items-center justify-center shrink-0">
                  <Play className="h-3 w-3 text-white ml-0.5" />
                </div>
                Watch 2-min Overview
              </button>

              {/* Animated beam connecting the two CTAs */}
              {containerRef.current && demoRef.current && pricingRef.current && (
                <AnimatedBeam
                  containerRef={containerRef as React.RefObject<HTMLElement>}
                  fromRef={demoRef as React.RefObject<HTMLElement>}
                  toRef={pricingRef as React.RefObject<HTMLElement>}
                  pathColor="#e4e4e7"
                  gradientStartColor="#7B68EE"
                  gradientStopColor="#FD71AF"
                  pathWidth={1.5}
                  curvature={-30}
                  startYOffset={0}
                  endYOffset={0}
                />
              )}
            </div>
          </BlurFade>

          {/* ── Trust chips ── */}
          <BlurFade delay={0.3} className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-12">
            {["No credit card required", "Free forever plan", "50,000+ teams worldwide"].map(t => (
              <div key={t} className="flex items-center gap-1.5 text-sm text-zinc-500">
                <CheckCircle2 className="h-4 w-4 shrink-0" style={{ color: "#7B68EE" }} />{t}
              </div>
            ))}
          </BlurFade>

          {/* ── Dashboard panel ── */}
          <BlurFade delay={0.38}>
            <div className="flex gap-3 items-start">

              {/* Left nav sidebar (desktop) */}
              <div className="hidden lg:flex flex-col gap-0.5 w-50 shrink-0 bg-white dark:bg-slate-900 border border-zinc-200 dark:border-slate-700 rounded-xl p-2 shadow-sm self-start">
                {LEFT_NAV.map(item => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button key={item.id} onClick={() => setActiveTab(item.id)}
                      className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-xs font-medium w-full text-left transition-all ${isActive ? "text-white shadow-sm" : "text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"}`}
                      style={isActive ? { background: "linear-gradient(135deg,#7B68EE,#FD71AF)", boxShadow: "0 4px 12px rgba(123,104,238,0.3)" } : {}}>
                      <Icon className="h-4 w-4 shrink-0" />
                      {item.label}
                      {isActive && <ChevronRight className="h-3 w-3 ml-auto shrink-0 opacity-50" />}
                    </button>
                  );
                })}
              </div>

              {/* Mobile pill tabs */}
              <div className="lg:hidden w-full mb-3">
                <div className="flex items-center gap-1 overflow-x-auto pb-1 [scrollbar-width:none]">
                  {LEFT_NAV.map(item => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.id;
                    return (
                      <button key={item.id} onClick={() => setActiveTab(item.id)}
                        className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap shrink-0 transition-all ${isActive ? "text-white" : "text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"}`}
                        style={isActive ? { background: "linear-gradient(135deg,#7B68EE,#FD71AF)" } : {}}>
                        <Icon className="h-3.5 w-3.5" />{item.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Browser chrome + dashboard */}
              <div className="flex-1 min-w-0 relative">
                <div className="relative rounded-xl overflow-hidden border border-zinc-200 dark:border-slate-700 shadow-2xl shadow-zinc-200/60 dark:shadow-slate-900/60">
                  {/* BorderBeam on the whole panel */}
                  <BorderBeam size={400} duration={10} colorFrom="#7B68EE" colorTo="#FD71AF" />

                  {/* Browser bar */}
                  <div className="flex items-center gap-2 border-b border-zinc-200 dark:border-slate-700 px-4 py-2.5 bg-zinc-50 dark:bg-slate-800">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-zinc-300 dark:bg-slate-600" />
                      <div className="w-3 h-3 rounded-full bg-zinc-300 dark:bg-slate-600" />
                      <div className="w-3 h-3 rounded-full bg-zinc-300 dark:bg-slate-600" />
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="bg-white dark:bg-slate-700 rounded border border-zinc-200 dark:border-slate-600 px-3 py-0.5 text-[11px] text-zinc-400 dark:text-slate-300 max-w-xs mx-auto text-center">
                        app.enacle.com / workspace
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[10px] text-zinc-400 hidden sm:block">Live</span>
                    </div>
                  </div>
                  <div className="h-96 sm:h-110 lg:h-125">
                    <DashboardPanel tab={activeTab} />
                  </div>
                </div>
                <AgentCard />
              </div>
            </div>
          </BlurFade>

          {/* ── Stats row ── */}
          <BlurFade delay={0.5}>
            <div className="mt-12 mb-4 grid grid-cols-3 gap-4 border-y border-zinc-100 dark:border-slate-800 py-8">
              {[
                { val: 50000, suffix: "+", label: "Teams worldwide",   color: "#7B68EE" },
                { val: 98,    suffix: "%", label: "Retention rate",    color: "#FD71AF" },
                { val: 12,    suffix: "x", label: "Faster decisions",  color: "#49CCF9" },
              ].map(s => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl sm:text-3xl font-black flex items-baseline justify-center gap-0.5" style={{ color: s.color }}>
                    <NumberTicker value={s.val} className="font-black" style={{ color: s.color }} />
                    <span>{s.suffix}</span>
                  </div>
                  <div className="text-xs text-zinc-500 dark:text-slate-400 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </BlurFade>

          {/* ── Trusted marquee ── */}
          <BlurFade delay={0.58}>
            <div className="pb-0">
              <p className="text-center text-[10px] font-bold uppercase tracking-[0.22em] text-zinc-300 mb-5">
                Trusted by the best teams
              </p>
              <div className="relative overflow-hidden">
                <Marquee pauseOnHover className="[--duration:28s] [--gap:2rem]" repeat={3}>
                  {TRUSTED.map(name => (
                    <div key={name} className="flex items-center justify-center px-8">
                      <span className="text-sm font-extrabold text-zinc-200 tracking-wider hover:text-zinc-500 transition-colors whitespace-nowrap select-none uppercase">
                        {name}
                      </span>
                    </div>
                  ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-linear-to-r from-white dark:from-[#080d1a] to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-linear-to-l from-white dark:from-[#080d1a] to-transparent" />
              </div>
            </div>
          </BlurFade>

        </div>
      </section>
    </>
  );
}
