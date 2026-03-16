"use client";

import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight, Star, CheckCircle2, Zap, Play, ChevronRight,
  TrendingUp, Users, Shield, Sparkles, ArrowUpRight,
  BarChart3, Clock, Globe2, Lock,
} from "lucide-react";
import type { ProductData } from "@/lib/products-data";

/* ═══════════════════════════════════════════════════════════════════
   VISUAL MOCKUPS
═══════════════════════════════════════════════════════════════════ */

function BrowserFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 ${className}`}>
      <div className="flex items-center gap-1.5 px-4 py-3 bg-[#1a2234] border-b border-white/5">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        <div className="ml-4 flex-1 h-5 rounded-md bg-white/8 flex items-center px-3 gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span className="text-[9px] text-white/35 font-mono">app.enacle.io</span>
        </div>
        <div className="flex gap-1">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-4 h-3 rounded-sm bg-white/8" />
          ))}
        </div>
      </div>
      {children}
    </div>
  );
}

function KanbanMockup({ accent }: { accent: string }) {
  const cols = [
    { title: "Backlog",     cards: ["User auth flow", "Payment gateway", "Email templates"] },
    { title: "In Progress", cards: ["Dashboard v2", "API integration"] },
    { title: "Review",      cards: ["Sprint planning"] },
    { title: "Done",        cards: ["Onboarding", "Analytics"] },
  ];
  return (
    <BrowserFrame>
      <div className="bg-[#0f1729] p-4 min-h-80">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-md" style={{ background: accent }} />
            <span className="text-[11px] font-bold text-white/70">Sprint 24 · Q1 2026</span>
          </div>
          <div className="flex gap-1.5">
            {["Board", "List", "Gantt"].map((v, i) => (
              <span key={v} className={`text-[9px] px-2 py-0.5 rounded-full font-bold ${i === 0 ? "text-white" : "text-white/35"}`}
                style={i === 0 ? { background: accent } : {}}>
                {v}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-2.5 overflow-hidden">
          {cols.map((col, ci) => (
            <div key={col.title} className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[9px] font-black text-white/50 uppercase tracking-widest">{col.title}</span>
                <span className="text-[8px] bg-white/10 text-white/50 rounded-full px-1.5 py-0.5">{col.cards.length}</span>
              </div>
              <div className="space-y-1.5">
                {col.cards.map((card, cdi) => (
                  <motion.div
                    key={card}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: ci * 0.1 + cdi * 0.06 }}
                    className="rounded-lg p-2.5 border border-white/6"
                    style={{ background: `${accent}${["25","18","12","08"][ci] ?? "08"}` }}
                  >
                    <p className="text-[9px] font-semibold text-white/80 leading-tight">{card}</p>
                    <div className="flex items-center gap-1 mt-1.5">
                      <div className="w-3.5 h-3.5 rounded-full flex items-center justify-center text-[7px] font-black text-white"
                        style={{ background: accent }}>
                        {["K","M","A","R"][ci % 4]}
                      </div>
                      <div className="flex-1 h-0.5 rounded-full bg-white/8" />
                      <span className="text-[7px] text-white/25">Due Mon</span>
                    </div>
                  </motion.div>
                ))}
                <div className="rounded-lg p-2 border border-dashed border-white/10 flex items-center justify-center">
                  <span className="text-[8px] text-white/20">+ Add task</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

function DashboardMockup({ accent }: { accent: string }) {
  const bars = [45, 72, 58, 90, 67, 83, 76, 94];
  const metrics = [
    { label: "Total Tasks", value: "1,284", delta: "+12%" },
    { label: "Completed",   value: "987",   delta: "+8%"  },
    { label: "On Track",    value: "94%",   delta: "+3%"  },
  ];
  return (
    <BrowserFrame>
      <div className="bg-[#0f1729] p-4 min-h-80">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[11px] font-bold text-white/70">Analytics Overview</span>
          <div className="flex items-center gap-1.5">
            <span className="text-[8px] text-white/30 bg-white/5 border border-white/8 rounded-md px-2 py-0.5">Last 30 days</span>
            <div className="w-5 h-5 rounded-md bg-white/5 flex items-center justify-center">
              <BarChart3 className="h-2.5 w-2.5 text-white/40" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 mb-4">
          {metrics.map((m) => (
            <div key={m.label} className="rounded-xl p-2.5 border border-white/6" style={{ background: `${accent}15` }}>
              <p className="text-sm font-black text-white">{m.value}</p>
              <p className="text-[8px] text-white/40 mt-0.5">{m.label}</p>
              <span className="text-[7px] font-bold text-emerald-400">{m.delta}</span>
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-white/6 p-3" style={{ background: `${accent}08` }}>
          <p className="text-[8px] text-white/40 font-semibold mb-2 uppercase tracking-wider">Weekly velocity</p>
          <div className="flex items-end gap-1.5 h-14">
            {bars.map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-t-sm"
                style={{ background: `${accent}${i === 7 ? "ff" : "60"}` }}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: 0.3 + i * 0.06, duration: 0.5, ease: "easeOut" }}
              />
            ))}
          </div>
          <div className="flex gap-1.5 mt-1">
            {["M","T","W","T","F","S","S","M"].map((d, i) => (
              <span key={i} className="flex-1 text-center text-[7px] text-white/20">{d}</span>
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

function PipelineMockup({ accent }: { accent: string }) {
  const deals = [
    { name: "Acme Corporation", stage: "Negotiation", value: "$142k", prob: 85, avatar: "AC" },
    { name: "TechStart Inc",    stage: "Proposal",    value: "$87k",  prob: 65, avatar: "TS" },
    { name: "GlobalOps Ltd",    stage: "Qualified",   value: "$54k",  prob: 45, avatar: "GO" },
    { name: "Nova Dynamics",    stage: "Closed Won",  value: "$228k", prob: 100, avatar: "ND" },
  ];
  return (
    <BrowserFrame>
      <div className="bg-[#0f1729] p-4 min-h-80">
        <div className="flex gap-1 mb-4 overflow-hidden">
          {["Lead","Qualified","Proposal","Negotiation","Closed"].map((s, i) => (
            <div key={s} className="flex-1 text-center py-1 rounded-md"
              style={{ background: i <= 3 ? `${accent}${30 - i * 5}` : `${accent}15` }}>
              <span className="text-[7px] font-bold text-white/60 uppercase tracking-wide">{s}</span>
            </div>
          ))}
        </div>
        <div className="space-y-2">
          {deals.map((d, i) => (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.08 }}
              className="rounded-xl px-3 py-2.5 flex items-center gap-3 border border-white/6"
              style={{ background: `${accent}12` }}
            >
              <div className="w-7 h-7 rounded-lg flex items-center justify-center text-[9px] font-black text-white shrink-0"
                style={{ background: accent }}>
                {d.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-bold text-white/80 truncate">{d.name}</p>
                <div className="flex items-center gap-1.5 mt-1">
                  <div className="flex-1 h-1 rounded-full bg-white/8 overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${d.prob}%`, background: accent }} />
                  </div>
                  <span className="text-[7px] text-white/30">{d.prob}%</span>
                </div>
              </div>
              <span className="text-[11px] font-black text-white shrink-0">{d.value}</span>
            </motion.div>
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between px-1">
          <span className="text-[8px] text-white/25">4 active deals</span>
          <span className="text-[8px] font-bold" style={{ color: accent }}>$511k pipeline</span>
        </div>
      </div>
    </BrowserFrame>
  );
}

function ChartMockup({ accent }: { accent: string }) {
  const points = [20, 35, 28, 55, 42, 68, 58, 82, 74, 95];
  const maxV = 95;
  const w = 200, h = 80;
  const pts = points.map((v, i) => `${(i / (points.length - 1)) * w},${h - (v / maxV) * h}`).join(" ");
  return (
    <BrowserFrame>
      <div className="bg-[#0f1729] p-4 min-h-80">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-[9px] text-white/40 uppercase tracking-widest mb-1">Revenue MTD</p>
            <p className="text-2xl font-black text-white">$284,920</p>
            <div className="flex items-center gap-1 mt-0.5">
              <TrendingUp className="h-2.5 w-2.5 text-emerald-400" />
              <span className="text-[9px] font-bold text-emerald-400">+18.4% vs last month</span>
            </div>
          </div>
          <div className="rounded-xl px-3 py-2 text-center" style={{ background: `${accent}20` }}>
            <p className="text-lg font-black" style={{ color: accent }}>94%</p>
            <p className="text-[7px] text-white/40">Quota</p>
          </div>
        </div>
        <div className="rounded-xl border border-white/6 p-3 mb-3" style={{ background: `${accent}08` }}>
          <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-16" preserveAspectRatio="none">
            <defs>
              <linearGradient id={`fill-${accent.replace("#","")}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={accent} stopOpacity="0.3" />
                <stop offset="100%" stopColor={accent} stopOpacity="0" />
              </linearGradient>
            </defs>
            <polygon points={`0,${h} ${pts} ${w},${h}`} fill={`url(#fill-${accent.replace("#","")})`} />
            <polyline points={pts} fill="none" stroke={accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        {[["Sarah K.", "42 deals", 90], ["Marcus L.", "38 deals", 78], ["Priya N.", "31 deals", 63]].map(([name, deals, pct]) => (
          <div key={String(name)} className="flex items-center gap-2 mb-1.5">
            <div className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center text-[7px] font-bold text-white/50">
              {String(name).charAt(0)}
            </div>
            <span className="text-[9px] text-white/60 w-16 truncate">{name}</span>
            <div className="flex-1 h-1 rounded-full bg-white/8 overflow-hidden">
              <div className="h-full rounded-full" style={{ width: `${pct}%`, background: accent }} />
            </div>
            <span className="text-[8px] text-white/35 w-12 text-right">{deals}</span>
          </div>
        ))}
      </div>
    </BrowserFrame>
  );
}

function VisualMockup({ type, accent }: { type: string; accent: string }) {
  switch (type) {
    case "kanban":   return <KanbanMockup   accent={accent} />;
    case "pipeline": return <PipelineMockup accent={accent} />;
    case "chart":    return <ChartMockup    accent={accent} />;
    default:         return <DashboardMockup accent={accent} />;
  }
}

/* ═══════════════════════════════════════════════════════════════════
   HELPERS
═══════════════════════════════════════════════════════════════════ */
function GlowOrb({ color, className }: { color: string; className: string }) {
  return (
    <div className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
      style={{ background: color }} />
  );
}

function FloatingBadge({ children, delay = 0, className = "" }: {
  children: React.ReactNode; delay?: number; className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute z-20 ${className}`}
    >
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   FEATURE SECTION
═══════════════════════════════════════════════════════════════════ */
function FeatureSection({ section, accentColor, isLast }: {
  section: ProductData["sections"][0];
  accentColor: string;
  isLast: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section ref={ref} className={`relative py-24 overflow-hidden ${isLast ? "bg-[#060b18]" : "bg-[#080d1a]"}`}>
      <GlowOrb color={`${accentColor}08`}
        className={`w-150 h-150 -top-40 ${section.flip ? "-right-40" : "-left-40"}`} />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 mb-4">
            <span className="text-[9px] font-black uppercase tracking-[0.25em] text-white/40">{section.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.08] whitespace-pre-line">
            {section.heading}
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-base">{section.sub}</p>
        </motion.div>
        {/* Content */}
        <div className={`flex flex-col ${section.flip ? "lg:flex-row-reverse" : "lg:flex-row"} gap-16 items-center`}>
          <motion.div
            initial={{ opacity: 0, x: section.flip ? 50 : -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-[58%] shrink-0"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl blur-2xl scale-95 -z-10"
                style={{ background: `${accentColor}25` }} />
              <VisualMockup type={section.visual} accent={accentColor} />
            </div>
          </motion.div>
          <div className="flex-1 space-y-4">
            {section.features.map((f, fi) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: section.flip ? -24 : 24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.2 + fi * 0.08 }}
                className="group flex gap-4 p-4 rounded-2xl border border-white/5 hover:border-white/12 bg-white/3 hover:bg-white/5 transition-all duration-200"
              >
                <div className="mt-0.5 w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: `${accentColor}25` }}>
                  <CheckCircle2 className="h-4 w-4" style={{ color: accentColor }} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    {f.title}
                    {f.badge && (
                      <span className="ml-2 text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full"
                        style={{ background: `${accentColor}30`, color: accentColor }}>
                        {f.badge}
                      </span>
                    )}
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   MAIN EXPORT
═══════════════════════════════════════════════════════════════════ */
export function ProductDetail({ product }: { product: ProductData }) {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.06], [0, 1]);
  const [activeTab, setActiveTab] = useState(0);
  const DEMO_TABS = ["Overview", "Project Mgmt", "Agile", "Views"];

  return (
    <div className="overflow-x-hidden bg-[#080d1a]">

      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 z-50 origin-left"
        style={{ scaleX: scrollYProgress, background: `linear-gradient(90deg, ${product.accentColor}, ${product.accentColor}88)` }}
      />

      {/* Floating nav hint */}
      <motion.div
        style={{ opacity: headerOpacity }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-40 hidden lg:flex items-center gap-2 rounded-full bg-[#0f1729]/90 border border-white/10 px-4 py-2 backdrop-blur-xl shadow-xl"
      >
        <div className="w-4 h-4 rounded-md" style={{ background: product.accentColor }} />
        <span className="text-xs font-bold text-white/80">{product.sub} {product.name}</span>
        <span className="text-white/20 mx-1">·</span>
        <Link href="/signup" className="text-xs font-bold px-3 py-1 rounded-full text-white"
          style={{ background: product.accentColor }}>
          Try free →
        </Link>
      </motion.div>

      {/* ══ HERO ══════════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-0">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-size-[32px_32px] opacity-30" />
        <GlowOrb color={`${product.accentColor}20`} className="w-200 h-200 -top-60 left-1/2 -translate-x-1/2" />
        <GlowOrb color={`${product.accentColor}10`} className="w-100 h-100 bottom-0 left-0" />
        <GlowOrb color="#8b5cf620" className="w-75 h-75 top-1/2 right-0" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-1.5 text-xs text-white/30 mb-10"
          >
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/products" className="hover:text-white/70 transition-colors">Products</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white/60 font-semibold">{product.name}</span>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Left text */}
            <div className="lg:w-[52%] shrink-0">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 12, scale: 0.9 }}
                animate={heroInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="mb-6"
              >
                <span
                  className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-[0.18em] border"
                  style={{ color: product.accentColor, borderColor: `${product.accentColor}40`, background: `${product.accentColor}12` }}
                >
                  <Zap className="h-3 w-3" fill="currentColor" />
                  {product.sub} · {product.category}
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.04] mb-5"
              >
                {product.heroHeading.split("\n").map((line, i) => (
                  i === 2
                    ? <span key={i} className="block bg-clip-text text-transparent"
                        style={{ backgroundImage: `linear-gradient(135deg, ${product.accentColor}, ${product.accentColor}99)` }}>
                        {line}
                      </span>
                    : <span key={i} className="block">{line}</span>
                ))}
              </motion.h1>

              {/* Paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="text-lg text-slate-400 leading-relaxed mb-9 max-w-lg"
              >
                {product.heroParagraph}
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.22 }}
                className="flex flex-wrap gap-3 mb-9"
              >
                <Link
                  href="/signup"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-xl transition-all duration-200 hover:scale-105"
                  style={{
                    background: `linear-gradient(135deg, ${product.accentColor} 0%, ${product.accentColor}cc 100%)`,
                    boxShadow: `0 12px 32px ${product.accentColor}45`,
                  }}
                >
                  Get Started Free
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <button className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white/70 border border-white/12 hover:border-white/25 hover:text-white hover:bg-white/5 transition-all duration-200">
                  <Play className="h-4 w-4" fill="currentColor" /> Watch demo
                </button>
              </motion.div>

              {/* Social proof */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={heroInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="flex flex-wrap items-center gap-4"
              >
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-white/50">
                    <strong className="text-white/80 font-bold">4.8</strong>/5 · 2,000+ reviews
                  </span>
                </div>
                <div className="w-px h-4 bg-white/10" />
                <div className="flex items-center gap-1.5">
                  <Shield className="h-3.5 w-3.5 text-emerald-400" />
                  <span className="text-xs text-white/50">SOC 2 · GDPR</span>
                </div>
                <div className="w-px h-4 bg-white/10" />
                <div className="flex items-center gap-1.5">
                  <Lock className="h-3.5 w-3.5 text-white/30" />
                  <span className="text-xs text-white/50">No card required</span>
                </div>
              </motion.div>
            </div>

            {/* Right: mockup + floating badges */}
            <div className="lg:flex-1 w-full relative">
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={heroInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="absolute inset-0 rounded-3xl blur-3xl scale-90 -z-10"
                  style={{ background: `${product.accentColor}30` }} />
                <VisualMockup type={product.sections[0]?.visual ?? "dashboard"} accent={product.accentColor} />
              </motion.div>

              {/* Floating badge — top left */}
              <FloatingBadge delay={0.55} className="-top-4 -left-4">
                <div className="flex items-center gap-2 rounded-xl bg-[#0f1729]/90 border border-white/10 px-3.5 py-2.5 shadow-2xl backdrop-blur-xl">
                  <div className="w-6 h-6 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                    <TrendingUp className="h-3.5 w-3.5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-[9px] text-white/40 leading-none">This week</p>
                    <p className="text-xs font-black text-white">{product.stats[0]?.value}</p>
                  </div>
                </div>
              </FloatingBadge>

              {/* Floating badge — bottom right */}
              <FloatingBadge delay={0.7} className="-bottom-4 -right-4">
                <div className="flex items-center gap-2 rounded-xl bg-[#0f1729]/90 border border-white/10 px-3.5 py-2.5 shadow-2xl backdrop-blur-xl">
                  <div className="flex -space-x-1.5">
                    {["K","M","A"].map((l, i) => (
                      <div key={i} className="w-6 h-6 rounded-full border-2 border-[#0f1729] flex items-center justify-center text-[8px] font-black text-white"
                        style={{ background: product.accentColor, opacity: 1 - i * 0.2 }}>
                        {l}
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-[9px] text-white/40 leading-none">Teams using it</p>
                    <p className="text-xs font-black text-white">{product.stats[2]?.value}</p>
                  </div>
                </div>
              </FloatingBadge>

              {/* Floating badge — mid right */}
              <FloatingBadge delay={0.62} className="top-1/2 -translate-y-1/2 -right-6 hidden xl:block">
                <div className="rounded-xl bg-[#0f1729]/90 border border-white/10 px-3.5 py-2.5 shadow-2xl backdrop-blur-xl">
                  <div className="flex items-center gap-1.5 mb-1">
                    <Sparkles className="h-3 w-3" style={{ color: product.accentColor }} />
                    <span className="text-[9px] font-bold text-white/60">AI powered</span>
                  </div>
                  <p className="text-xs font-black text-white">Auto-assigned</p>
                  <p className="text-[8px] text-white/30 mt-0.5">3 tasks · just now</p>
                </div>
              </FloatingBadge>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-32 bg-linear-to-b from-transparent to-[#080d1a] pointer-events-none" />
      </section>

      {/* ══ STATS STRIP ═══════════════════════════════════════════════ */}
      <div className="relative bg-[#080d1a] border-y border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/5">
          {product.stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center py-6 sm:py-0 px-8"
            >
              <p className="text-4xl font-extrabold mb-1" style={{ color: product.accentColor }}>{s.value}</p>
              <p className="text-sm text-slate-500">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ══ WHY ENACLE ════════════════════════════════════════════════ */}
      <section className="relative py-24 bg-[#080d1a] overflow-hidden">
        <GlowOrb color={`${product.accentColor}06`} className="w-125 h-125 top-0 right-0" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs font-black uppercase tracking-[0.25em] mb-3" style={{ color: product.accentColor }}>
              Why teams choose {product.name}
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.08]">
              Disconnected apps are<br />
              <span className="text-white/40">killing productivity</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Pain */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="rounded-3xl border border-red-500/15 bg-red-500/5 p-8"
            >
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-xl bg-red-500/15 flex items-center justify-center">
                  <span className="text-lg">😩</span>
                </div>
                <p className="text-sm font-black text-red-400 uppercase tracking-widest">Before Enacle</p>
              </div>
              <ul className="space-y-3">
                {[
                  "You lose 2+ hours daily switching between 6 tools",
                  "There's no single source of truth across your team",
                  "Manual data entry kills every automation you build",
                  "You've spent 3× more on tools than on people",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-400">
                    <span className="text-red-400 mt-0.5 shrink-0 font-bold">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            {/* Gain */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="rounded-3xl border p-8"
              style={{ borderColor: `${product.accentColor}30`, background: `${product.accentColor}08` }}
            >
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: `${product.accentColor}25` }}>
                  <span className="text-lg">🚀</span>
                </div>
                <p className="text-sm font-black uppercase tracking-widest" style={{ color: product.accentColor }}>After Enacle</p>
              </div>
              <ul className="space-y-3">
                {product.valueProps.flatMap((vp) => [vp.title, vp.desc]).slice(0, 4).map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" style={{ color: product.accentColor }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ FEATURE SECTIONS ══════════════════════════════════════════ */}
      {product.sections.map((section, i) => (
        <FeatureSection
          key={section.heading}
          section={section}
          accentColor={product.accentColor}
          isLast={i === product.sections.length - 1}
        />
      ))}

      {/* ══ LIVE DEMO ═════════════════════════════════════════════════ */}
      <section className="relative py-24 bg-[#060b18] overflow-hidden">
        <GlowOrb color={`${product.accentColor}10`} className="w-175 h-100 top-0 left-1/2 -translate-x-1/2" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[9px] font-black uppercase tracking-[0.25em] text-white/40">Live Demo</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              See <span style={{ color: product.accentColor }}>{product.name}</span> in action
            </h2>
          </motion.div>
          {/* Tabs */}
          <div className="flex items-center justify-center gap-2 mb-8 flex-wrap">
            {DEMO_TABS.map((tab, i) => (
              <motion.button
                key={tab}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                onClick={() => setActiveTab(i)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
                  activeTab === i
                    ? "text-white shadow-lg"
                    : "bg-white/5 border border-white/8 text-white/40 hover:text-white/60 hover:border-white/15"
                }`}
                style={activeTab === i ? {
                  background: `linear-gradient(135deg, ${product.accentColor}, ${product.accentColor}bb)`,
                  boxShadow: `0 8px 24px ${product.accentColor}40`,
                } : {}}
              >
                {tab}
              </motion.button>
            ))}
          </div>
          {/* Bordered mockup */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="p-px rounded-3xl"
              style={{ background: `linear-gradient(135deg, ${product.accentColor}60, ${product.accentColor}15, transparent)` }}>
              <div className="rounded-3xl overflow-hidden bg-[#0f1729]">
                <VisualMockup
                  type={product.sections[activeTab % product.sections.length]?.visual ?? "dashboard"}
                  accent={product.accentColor}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ INTEGRATIONS ══════════════════════════════════════════════ */}
      <section className="relative py-24 bg-[#080d1a] overflow-hidden">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-xs font-black uppercase tracking-[0.25em] text-slate-500 mb-3">Integrations</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              Works with every tool<br />
              <span style={{ color: product.accentColor }}>your team already uses</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {product.connectsTo.map((app, i) => (
              <motion.div
                key={app.name}
                initial={{ opacity: 0, scale: 0.88, y: 12 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.38, delay: i * 0.05 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group flex items-center gap-3 p-4 rounded-2xl border border-white/6 bg-white/3 hover:bg-white/6 hover:border-white/12 transition-all duration-200 cursor-default"
              >
                <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 text-white font-black text-sm shadow-lg"
                  style={{ backgroundColor: app.color }}>
                  {app.name.charAt(0)}
                </div>
                <span className="text-sm font-semibold text-white/70 group-hover:text-white transition-colors">{app.name}</span>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-8"
          >
            <Link href="/integrations" className="inline-flex items-center gap-1.5 text-sm font-bold text-white/40 hover:text-white/70 transition-colors">
              View all 100+ integrations <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ══ TEMPLATES ═════════════════════════════════════════════════ */}
      <section className="relative py-24 bg-[#060b18] overflow-hidden">
        <GlowOrb color="#8b5cf610" className="w-125 h-75 bottom-0 right-0" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-xs font-black uppercase tracking-[0.25em] text-slate-500 mb-3">Quick Start</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              There&apos;s a template for that
            </h2>
            <p className="text-slate-500 max-w-md mx-auto">
              Launch in minutes with production-ready templates — fully customizable for your workflow.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {product.templates.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl border border-white/6 bg-white/3 overflow-hidden cursor-pointer hover:border-white/15 hover:bg-white/5 transition-all duration-300"
              >
                <div className="h-40 p-5 relative overflow-hidden" style={{ background: `${t.color}12` }}>
                  <div className="absolute inset-0 opacity-20"
                    style={{ background: `radial-gradient(circle at 30% 40%, ${t.color} 0%, transparent 60%)` }} />
                  <div className="relative space-y-2">
                    {[70, 50, 85, 40].map((w, wi) => (
                      <div key={wi} className="h-2 rounded-full"
                        style={{ width: `${w}%`, background: `${t.color}${wi === 0 ? "ff" : wi === 2 ? "99" : "55"}` }} />
                    ))}
                    <div className="flex gap-2 mt-3">
                      {[t.color, `${t.color}99`, `${t.color}55`].map((c, ci) => (
                        <div key={ci} className="h-8 flex-1 rounded-xl" style={{ background: c }} />
                      ))}
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 w-7 h-7 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ background: t.color }}>
                    <ArrowUpRight className="h-3.5 w-3.5 text-white" />
                  </div>
                </div>
                <div className="p-4 border-t border-white/5">
                  <h4 className="text-sm font-bold text-white mb-1">{t.name}</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TRUST BADGES ══════════════════════════════════════════════ */}
      <section className="py-12 bg-[#080d1a] border-y border-white/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {([
              { Icon: Shield, label: "SOC 2 Type II",  sub: "Enterprise security" },
              { Icon: Globe2, label: "130+ countries",  sub: "Global availability" },
              { Icon: Clock,  label: "99.98% uptime",   sub: "SLA guaranteed"      },
              { Icon: Users,  label: "50,000+ teams",   sub: "World-class customers" },
            ] as const).map(({ Icon, label, sub }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex flex-col items-center text-center p-4 rounded-2xl border border-white/5 bg-white/2"
              >
                <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-2"
                  style={{ background: `${product.accentColor}20` }}>
                  <Icon className="h-4 w-4" style={{ color: product.accentColor }} />
                </div>
                <p className="text-sm font-bold text-white">{label}</p>
                <p className="text-[10px] text-slate-500 mt-0.5">{sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA BANNER ════════════════════════════════════════════════ */}
      <section className="relative py-24 overflow-hidden bg-[#060b18]">
        <GlowOrb color={`${product.accentColor}18`} className="w-225 h-125 -top-20 left-1/2 -translate-x-1/2" />
        <GlowOrb color="#8b5cf615" className="w-100 h-100 bottom-0 right-0" />
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-size-[32px_32px] opacity-20" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-px rounded-3xl"
              style={{ background: `linear-gradient(135deg, ${product.accentColor}70, ${product.accentColor}20, #8b5cf640)` }}>
              <div className="relative rounded-3xl overflow-hidden bg-[#0a0f1e] p-10 sm:p-14 lg:p-16">
                <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-48 rounded-full blur-3xl -translate-y-1/2"
                  style={{ background: `${product.accentColor}25` }} />
                <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
                  {/* Text */}
                  <div className="flex-1 text-white">
                    <div className="flex items-center gap-2.5 mb-7">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center shadow-lg"
                        style={{ background: product.accentColor }}>
                        <Zap className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-base font-extrabold text-white">{product.sub}</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-extrabold leading-[1.06] mb-5 whitespace-pre-line">
                      {product.cta.heading}
                    </h2>
                    <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-sm">{product.cta.sub}</p>
                    <div className="flex flex-wrap gap-3 mb-8">
                      <Link
                        href="/signup"
                        className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-2xl transition-all duration-200 hover:scale-105"
                        style={{
                          background: `linear-gradient(135deg, ${product.accentColor}, ${product.accentColor}bb)`,
                          boxShadow: `0 12px 40px ${product.accentColor}50`,
                        }}
                      >
                        Start for Free
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                      <Link href="/pricing"
                        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white/70 border border-white/12 hover:border-white/25 hover:text-white hover:bg-white/5 transition-all duration-200">
                        View Pricing
                      </Link>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      {["No credit card", "Free 14-day trial", "Cancel anytime"].map((t) => (
                        <div key={t} className="flex items-center gap-1.5">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                          <span className="text-xs text-white/40">{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Mockup */}
                  <div className="w-full lg:w-[42%] shrink-0 relative">
                    <div className="absolute inset-0 rounded-2xl blur-2xl scale-90 -z-10"
                      style={{ background: `${product.accentColor}20` }} />
                    <VisualMockup type={product.sections[0]?.visual ?? "dashboard"} accent={product.accentColor} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back to products */}
      <div className="py-8 bg-[#060b18] border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <p className="text-sm text-slate-600">Looking for another product?</p>
          <Link href="/products" className="flex items-center gap-2 text-sm font-bold transition-colors hover:opacity-80"
            style={{ color: product.accentColor }}>
            Browse all products <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

    </div>
  );
}
