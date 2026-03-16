"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { BlurFade } from "@/components/ui/blur-fade";
import {
  Zap, HardDrive, MessageSquare, FileText,
  ShoppingCart, Mail, CreditCard, Truck, Database,
  BarChart3, Users, Layers, Code2, Bot, Globe,
} from "lucide-react";

/* ─────────────────────────────────────────────────────────────────────
   TYPES
───────────────────────────────────────────────────────────────────── */
type CardItem = {
  label: string;
  icon: React.ReactNode;
  bg: string;
  color: string;
};

/* ─────────────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────────────── */
const LEFT_ITEMS: CardItem[] = [
  { label: "Google Drive",  icon: <HardDrive   size={18} />, bg: "#EAF3FF", color: "#1A73E8" },
  { label: "Notion",        icon: <FileText    size={18} />, bg: "#F5F5F5", color: "#111111" },
  { label: "WhatsApp",      icon: <MessageSquare size={18}/>,bg: "#E8F5E9", color: "#25D366" },
  { label: "Google Docs",   icon: <FileText    size={18} />, bg: "#E8F0FE", color: "#4285F4" },
  { label: "Payments",      icon: <CreditCard  size={18} />, bg: "#FFF3E0", color: "#F57C00" },
  { label: "Analytics",     icon: <BarChart3   size={18} />, bg: "#F3E5F5", color: "#9C27B0" },
];

const RIGHT_ITEMS: CardItem[] = [
  { label: "Shopify",        icon: <ShoppingCart size={18}/>, bg: "#ECFDF5", color: "#5E8E3E" },
  { label: "WooCommerce",    icon: <ShoppingCart size={18}/>, bg: "#F3E8FF", color: "#7F54B3" },
  { label: "Slack",          icon: <MessageSquare size={18}/>,bg: "#FEF9EE", color: "#E8A616" },
  { label: "Email / SMTP",   icon: <Mail        size={18} />, bg: "#EFF6FF", color: "#2563EB" },
  { label: "Shipping API",   icon: <Truck       size={18} />, bg: "#FFF1F2", color: "#E11D48" },
  { label: "Data Warehouse", icon: <Database    size={18} />, bg: "#ECFEFF", color: "#0891B2" },
];

const STATS = [
  { value: "200+",    label: "Integrations" },
  { value: "10+",     label: "Categories"   },
  { value: "1-click", label: "Setup"        },
];

const FEATURES = [
  { icon: <Bot       size={15} />, label: "AI-powered routing"  },
  { icon: <Layers    size={15} />, label: "Unified data layer"   },
  { icon: <Globe     size={15} />, label: "Global-ready APIs"    },
  { icon: <Code2     size={15} />, label: "No-code setup"        },
  { icon: <Users     size={15} />, label: "Role-based access"    },
  { icon: <BarChart3 size={15} />, label: "Real-time analytics"  },
];

/* ─────────────────────────────────────────────────────────────────────
   ICON CARD
───────────────────────────────────────────────────────────────────── */
function IconCard({ item, delay = 0 }: { item: CardItem; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, scale: 1.06, transition: { type: "spring", stiffness: 300, damping: 20 } }}
      className="flex flex-col items-center gap-1.5 cursor-default select-none"
    >
      <div
        className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm border border-white ring-1 ring-slate-200/70"
        style={{ backgroundColor: item.bg }}
      >
        <span style={{ color: item.color }}>{item.icon}</span>
      </div>
      <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 whitespace-nowrap tracking-tight">
        {item.label}
      </span>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   CENTER HUB
───────────────────────────────────────────────────────────────────── */
function CenterHub() {
  return (
    <div className="relative flex flex-col items-center justify-center gap-3 z-10 shrink-0">
      <div className="relative flex items-center justify-center">
        {/* Outer pulse rings */}
        <motion.div
          animate={{ scale: [1, 1.65, 1], opacity: [0.28, 0, 0.28] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-28 h-28 rounded-full border"
          style={{ borderColor: "rgba(123,104,238,0.35)" }}
        />
        <motion.div
          animate={{ scale: [1, 1.95, 1], opacity: [0.14, 0, 0.14] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: 0.45 }}
          className="absolute w-28 h-28 rounded-full border"
          style={{ borderColor: "rgba(123,104,238,0.2)" }}
        />
        {/* Hub button */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center cursor-pointer"
          style={{ background: "linear-gradient(135deg,#7B68EE,#FD71AF)", boxShadow: "0 8px 32px rgba(123,104,238,0.45)" }}
        >
          <Zap className="w-7 h-7 text-white" fill="white" />
        </motion.div>
      </div>
      <div className="text-center">
        <p className="text-sm font-black text-slate-800 dark:text-white tracking-tight leading-none">Enacle</p>
        <p className="text-[9px] uppercase tracking-[0.2em] text-slate-400 mt-0.5">Platform</p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   SVG CONNECTOR LINES
───────────────────────────────────────────────────────────────────── */
function ConnectorSVG({ side }: { side: "left" | "right" }) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true });

  const W = 110;
  const H = 300;
  const MID = H / 2;
  const n = 6;
  const spacing = H / n;
  const YS = Array.from({ length: n }, (_, i) => spacing / 2 + i * spacing);

  const paths = YS.map((y) =>
    side === "left"
      ? `M 0 ${y} C ${W * 0.4} ${y} ${W * 0.6} ${MID} ${W} ${MID}`
      : `M ${W} ${y} C ${W * 0.6} ${y} ${W * 0.4} ${MID} 0 ${MID}`
  );

  return (
    <svg
      ref={ref}
      width={W}
      height={H}
      viewBox={`0 0 ${W} ${H}`}
      fill="none"
      className="shrink-0 hidden md:block overflow-visible"
      aria-hidden
    >
      <defs>
        {paths.map((_, i) => (
          <linearGradient
            key={i}
            id={`g-${side}-${i}`}
            x1={side === "left" ? "0%" : "100%"} y1="0%"
            x2={side === "left" ? "100%" : "0%"} y2="0%"
          >
            <stop offset="0%"   stopColor="#e2e8f0" stopOpacity="0.7" />
            <stop offset="55%"  stopColor="#b197fc" />
            <stop offset="100%" stopColor="#7B68EE" />
          </linearGradient>
        ))}
      </defs>

      {/* Base track */}
      {paths.map((d, i) => (
        <path key={`base-${i}`} d={d} stroke="#e2e8f0" strokeWidth="1.2" />
      ))}

      {/* Animated colour fill */}
      {inView && paths.map((d, i) => (
        <motion.path
          key={`anim-${i}`}
          d={d}
          stroke={`url(#g-${side}-${i})`}
          strokeWidth="1.8"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ delay: 0.25 + i * 0.1, duration: 0.65, ease: "easeOut" }}
        />
      ))}

      {/* Endpoint dots */}
      {inView && YS.map((y, i) => (
        <motion.circle
          key={`dot-${i}`}
          cx={side === "left" ? 0 : W}
          cy={y}
          r="3.5"
          fill="#7B68EE"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7 + i * 0.08, duration: 0.25 }}
        />
      ))}

      {/* Centre convergence dot */}
      {inView && (
        <motion.circle
          cx={side === "left" ? W : 0}
          cy={MID}
          r="5"
          fill="#7B68EE"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.05, duration: 0.3, type: "spring" }}
        />
      )}
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   CARD GRID PANEL
───────────────────────────────────────────────────────────────────── */
function CardGrid({ items }: { items: CardItem[] }) {
  return (
    <div className="grid grid-cols-3 gap-x-5 gap-y-6">
      {items.map((item, i) => (
        <IconCard key={item.label} item={item} delay={0.04 + i * 0.07} />
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   MAIN EXPORT
───────────────────────────────────────────────────────────────────── */
export function Ecosystem() {
  return (
    <section className="relative py-24 bg-white dark:bg-[#080d1a] overflow-hidden">

      {/* ── Global dot-grid ─────────────────────────────────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          opacity: 0.22,
        }}
      />
      {/* Radial fade — light */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 dark:hidden"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 20%, white 85%)",
        }}
      />
      {/* Radial fade — dark */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden dark:block"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 20%, #080d1a 85%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ── Header ──────────────────────────────────────────────── */}
        <div className="text-center mb-14">
          <BlurFade>
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 dark:border-violet-800/60 bg-violet-50 dark:bg-violet-950/50 px-3.5 py-1.5 mb-5">
              <Zap className="h-3.5 w-3.5" style={{ color: "#7B68EE" }} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#7B68EE" }}>
                Ecosystem
              </span>
            </div>
          </BlurFade>

          <BlurFade delay={0.07}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
              Everything your business{" "}
              <span className="relative inline-block">
                <span style={{ background: "linear-gradient(135deg,#7B68EE,#FD71AF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  connects through
                </span>
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full"
                  style={{ background: "linear-gradient(135deg,#7B68EE,#FD71AF)" }}
                  initial={{ scaleX: 0, originX: "left" }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.55 }}
                />
              </span>
            </h2>
          </BlurFade>

          <BlurFade delay={0.13}>
            <p className="mt-5 text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              200+ native integrations across payments, banking, e-commerce, shipping,
              communications, and more — all wired through one unified platform.
            </p>
          </BlurFade>
        </div>

        {/* ── Diagram card ────────────────────────────────────────── */}
        <BlurFade delay={0.19}>
          <div className="relative rounded-3xl border border-slate-200/80 dark:border-slate-700/40 bg-white/70 dark:bg-[#0d1526]/80 backdrop-blur-sm shadow-xl shadow-slate-200/40 dark:shadow-black/30 overflow-hidden">

            {/* Inner dot-grid */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage: "radial-gradient(circle, #e2e8f0 1px, transparent 1px)",
                backgroundSize: "24px 24px",
                opacity: 0.55,
              }}
            />

            <div className="relative z-10 px-6 sm:px-10 py-14">

              {/* ── Desktop: side-cards + lines + hub ──────────── */}
              <div className="hidden md:flex items-center justify-center gap-2">
                <CardGrid items={LEFT_ITEMS} />
                <ConnectorSVG side="left" />
                <CenterHub />
                <ConnectorSVG side="right" />
                <CardGrid items={RIGHT_ITEMS} />
              </div>

              {/* ── Mobile: stacked ─────────────────────────────── */}
              <div className="md:hidden flex flex-col items-center gap-8">
                <CenterHub />

                {/* vertical connector */}
                <div className="w-px h-8 bg-linear-to-b from-accent-enacle to-transparent" />

                <div className="grid grid-cols-2 gap-8 w-full max-w-xs">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-4 text-center">
                      Clients
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {LEFT_ITEMS.map((item, i) => (
                        <IconCard key={item.label} item={item} delay={0.04 + i * 0.06} />
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-4 text-center">
                      Products
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {RIGHT_ITEMS.map((item, i) => (
                        <IconCard key={item.label} item={item} delay={0.04 + i * 0.06} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Stats strip ──────────────────────────────────── */}
              <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-700/50">
                <div className="grid grid-cols-3 divide-x divide-slate-100 dark:divide-slate-700/50 text-center">
                  {STATS.map((s, i) => (
                    <motion.div
                      key={s.label}
                      className="px-4"
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.08 * i, duration: 0.38 }}
                    >
                      <p className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                        {s.value}
                      </p>
                      <p className="text-xs text-slate-400 mt-0.5 tracking-wide">{s.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </BlurFade>

        {/* ── Features strip ──────────────────────────────────────── */}
        <BlurFade delay={0.27}>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.06 * i, duration: 0.32 }}
                whileHover={{ y: -2 }}
                className="flex items-center gap-2.5 rounded-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-[#0d1526] px-4 py-3 shadow-sm cursor-default"
              >
                <span className="shrink-0" style={{ color: "#7B68EE" }}>{f.icon}</span>
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 leading-snug">
                  {f.label}
                </span>
              </motion.div>
            ))}
          </div>
        </BlurFade>

      </div>
    </section>
  );
}
