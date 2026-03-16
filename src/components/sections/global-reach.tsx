"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { Globe } from "@/components/ui/globe";
import { IconCloud } from "@/components/ui/icon-cloud";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { RetroGrid } from "@/components/ui/retro-grid";
import { Globe2, Users, Zap, TrendingUp, ArrowRight, MapPin } from "lucide-react";
import type { COBEOptions } from "cobe";

/* ── Cloud icon slugs ──────────────────────────────────────── */
const CLOUD_SLUGS = [
  "slack","notion","github","figma","jira",
  "salesforce","hubspot","stripe","shopify","twilio",
  "googledrive","dropbox","zoom","microsoftteams","asana",
  "airtable","zapier","docker","postgresql","firebase",
  "amazonaws","vercel","gitlab","linear","intercom",
  "zendesk","mailchimp","trello","confluence","atlassian",
];

/* ── Orbiting icon chips ───────────────────────────────────── */
const OUTER_ORBS = [
  { abbr: "Gh", bg: "bg-slate-900 dark:bg-white", text: "text-white dark:text-slate-900" },
  { abbr: "Sl", bg: "bg-violet-600",              text: "text-white" },
  { abbr: "St", bg: "bg-indigo-600",              text: "text-white" },
  { abbr: "Fg", bg: "bg-rose-500",                text: "text-white" },
  { abbr: "Sf", bg: "bg-blue-600",                text: "text-white" },
  { abbr: "Zm", bg: "bg-sky-500",                 text: "text-white" },
];

const INNER_ORBS = [
  { abbr: "Jira", bg: "bg-blue-500",   text: "text-white" },
  { abbr: "Hub",  bg: "bg-orange-500", text: "text-white" },
  { abbr: "Zap",  bg: "bg-amber-500",  text: "text-white" },
  { abbr: "Aws",  bg: "bg-yellow-500", text: "text-slate-900" },
];

/* ── Stats ─────────────────────────────────────────────────── */
const STATS = [
  { value: "140+",   label: "Countries",      icon: Globe2,      from: "from-[#7B68EE]",  to: "to-[#FD71AF]"  },
  { value: "50k+",   label: "Teams worldwide", icon: Users,      from: "from-[#FFC800]",  to: "to-[#FD71AF]"  },
  { value: "200+",   label: "Integrations",    icon: Zap,        from: "from-[#49CCF9]",  to: "to-[#7B68EE]"  },
  { value: "99.99%", label: "Uptime SLA",      icon: TrendingUp, from: "from-[#7B68EE]",  to: "to-[#49CCF9]"  },
];

/* ── City pills ────────────────────────────────────────────── */
const CITY_PILLS = [
  { label: "New York",  sub: "850 teams",  pos: "top-6 left-4"      },
  { label: "London",    sub: "1.2k teams", pos: "top-14 right-2"    },
  { label: "Mumbai",    sub: "620 teams",  pos: "bottom-24 left-2"  },
  { label: "Singapore", sub: "490 teams",  pos: "bottom-14 right-2" },
];

/* ── Trust badges ──────────────────────────────────────────── */
const TRUST_BADGES = [
  {
    title: "Enterprise-ready",
    desc: "SOC 2 Type II · GDPR · CCPA · HIPAA-ready — built for the most regulated industries.",
    from: "from-[#7B68EE]", to: "to-[#FD71AF]",
  },
  {
    title: "99.99% Uptime SLA",
    desc: "Distributed across 12 global regions with automatic failover and zero-downtime deploys.",
    from: "from-[#49CCF9]", to: "to-[#7B68EE]",
  },
  {
    title: "24/7 Global Support",
    desc: "Around-the-clock support in 14 languages. Average first-response time under 4 minutes.",
    from: "from-[#FFC800]", to: "to-[#FD71AF]",
  },
];

/* ── Component ─────────────────────────────────────────────── */
export function GlobalReach() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  const globeConfig: COBEOptions = {
    width: 600,
    height: 600,
    onRender: () => {},
    devicePixelRatio: 2,
    phi: 0,
    theta: 0.25,
    dark: isDark ? 1 : 0,
    diffuse: isDark ? 0.4 : 0.7,
    mapSamples: 16000,
    mapBrightness: isDark ? 1.0 : 1.5,
    baseColor: isDark ? [0.08, 0.12, 0.28] : [0.88, 0.93, 1.0],
    markerColor: [0.48, 0.41, 0.93],
    glowColor: isDark ? [0.48, 0.41, 0.93] : [0.74, 0.69, 0.98],
    markers: [
      { location: [ 19.076,  72.877] as [number,number], size: 0.08 },
      { location: [ 40.712, -74.006] as [number,number], size: 0.10 },
      { location: [ 51.507,  -0.127] as [number,number], size: 0.08 },
      { location: [ 35.676, 139.650] as [number,number], size: 0.07 },
      { location: [-33.868, 151.209] as [number,number], size: 0.06 },
      { location: [ 48.856,   2.352] as [number,number], size: 0.07 },
      { location: [  1.352, 103.819] as [number,number], size: 0.06 },
      { location: [-23.550, -46.633] as [number,number], size: 0.08 },
      { location: [ 55.755,  37.617] as [number,number], size: 0.05 },
      { location: [ 31.230, 121.473] as [number,number], size: 0.09 },
    ],
  };

  const cloudImages = CLOUD_SLUGS.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${isDark ? "ffffff" : "0f172a"}`
  );

  return (
    <section className="relative bg-white dark:bg-[#080d1a] overflow-hidden py-28">

      {/* RetroGrid background */}
      <RetroGrid
        className="opacity-[0.22] dark:opacity-[0.14]"
        angle={60}
        cellSize={65}
        lightLineColor="#94a3b8"
        darkLineColor="#1e293b"
      />

      {/* Top soft glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_0%,rgba(237,233,254,0.6),transparent_70%)] dark:bg-[radial-gradient(ellipse_70%_45%_at_50%_0%,rgba(123,104,238,0.10),transparent_70%)]" />

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-44 bg-linear-to-t from-white dark:from-[#080d1a] to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* HEADLINE */}
        <div className="text-center mb-16">
          <BlurFade>
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-950/60 px-3.5 py-1.5 mb-5">
              <Globe2 className="h-3.5 w-3.5" style={{ color: "#7B68EE" }} />
              <span className="text-sm font-semibold" style={{ color: "#7B68EE" }}>Global reach</span>
            </div>
          </BlurFade>
          <BlurFade delay={0.08}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0f172a] dark:text-white mb-5 leading-[1.05]">
              Trusted by teams in{" "}
              <span style={{ background: "linear-gradient(135deg,#7B68EE,#FD71AF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                140+ countries
              </span>
            </h2>
          </BlurFade>
          <BlurFade delay={0.14}>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              From solo founders to Fortune 500 enterprises — Enacle powers the world&apos;s most productive teams, everywhere.
            </p>
          </BlurFade>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_460px] gap-8 items-start mb-14">

          {/* LEFT — Globe + OrbitingCircles */}
          <BlurFade delay={0.18}>
            <div className="relative rounded-3xl border border-slate-200 dark:border-slate-700/60 bg-white/90 dark:bg-slate-900/70 backdrop-blur-sm overflow-hidden shadow-xl shadow-blue-100/40 dark:shadow-blue-900/20">
              <BorderBeam size={600} duration={16} colorFrom="#7B68EE" colorTo="#FD71AF" />

              {/* Card header */}
              <div className="flex items-center justify-between px-6 pt-6 pb-2">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] mb-0.5" style={{ color: "#7B68EE" }}>Live map</p>
                  <h3 className="text-xl font-extrabold text-[#0f172a] dark:text-white">Teams active right now</h3>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                  <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400">Live</span>
                </div>
              </div>

              {/* Globe + Orbiting circles */}
              <div className="relative h-115 flex items-center justify-center overflow-hidden">

                {/* Outer ring */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <OrbitingCircles
                    iconSize={42}
                    radius={198}
                    duration={32}
                    path
                    className="border-2 border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-md rounded-full"
                  >
                    {OUTER_ORBS.map((o) => (
                      <div key={o.abbr} className={`w-full h-full rounded-full flex items-center justify-center ${o.bg}`}>
                        <span className={`text-[11px] font-black ${o.text}`}>{o.abbr}</span>
                      </div>
                    ))}
                  </OrbitingCircles>
                </div>

                {/* Inner reverse orbit */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <OrbitingCircles
                    iconSize={34}
                    radius={118}
                    duration={20}
                    reverse
                    path
                    className="border-2 border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-md rounded-full"
                  >
                    {INNER_ORBS.map((o) => (
                      <div key={o.abbr} className={`w-full h-full rounded-full flex items-center justify-center ${o.bg}`}>
                        <span className={`text-[9px] font-black ${o.text}`}>{o.abbr}</span>
                      </div>
                    ))}
                  </OrbitingCircles>
                </div>

                {/* Globe */}
                <div className="relative w-72 h-72">
                  <div className="absolute inset-0 rounded-full bg-blue-400/10 dark:bg-blue-500/20 blur-3xl" />
                  <Globe
                    className="static! w-72! max-w-none!"
                    config={globeConfig}
                  />
                </div>

                {/* Floating city pills */}
                {CITY_PILLS.map((pill, i) => (
                  <motion.div
                    key={pill.label}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.45 + i * 0.1 }}
                    className={`absolute ${pill.pos} flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm shadow-lg px-3 py-2`}
                  >
                    <MapPin className="h-3 w-3 shrink-0" style={{ color: "#7B68EE" }} />
                    <div>
                      <p className="text-[11px] font-bold text-[#0f172a] dark:text-white leading-tight">{pill.label}</p>
                      <p className="text-[9px] text-slate-400">{pill.sub}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </BlurFade>

          {/* RIGHT — IconCloud + Stats */}
          <div className="flex flex-col gap-5">

            {/* IconCloud card */}
            <BlurFade delay={0.24}>
              <div className="relative rounded-3xl border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-900 overflow-hidden shadow-xl shadow-slate-200/40 dark:shadow-slate-900/40">
                <BorderBeam size={400} duration={12} colorFrom="#7B68EE" colorTo="#FD71AF" />
                <div className="px-6 pt-6 pb-2">
                  <p className="text-xs font-black uppercase tracking-[0.18em] mb-0.5" style={{ color: "#7B68EE" }}>200+ Integrations</p>
                  <h3 className="text-lg font-extrabold text-[#0f172a] dark:text-white mb-1">
                    Connect every tool you love
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    One-click native integrations — no middleware, no code.
                  </p>
                </div>
                <div className="relative h-52 w-full">
                  <IconCloud images={cloudImages} />
                  <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-14 bg-linear-to-t from-white dark:from-slate-900 to-transparent" />
                </div>
              </div>
            </BlurFade>

            {/* Stats 2×2 grid */}
            <BlurFade delay={0.32}>
              <div className="grid grid-cols-2 gap-4">
                {STATS.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <motion.div
                      key={s.label}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.07 }}
                      whileHover={{ y: -4, transition: { type: "spring", stiffness: 400, damping: 20 } }}
                      className="relative rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-900 p-5 overflow-hidden shadow-sm cursor-default"
                    >
                      {i === 0 && <BorderBeam size={180} duration={8} colorFrom="#7B68EE" colorTo="#FD71AF" />}
                      <div className={`w-8 h-8 rounded-xl mb-3 flex items-center justify-center bg-linear-to-br ${s.from} ${s.to}`}>
                        <Icon className="h-4 w-4 text-white" />
                      </div>
                      <p className="text-2xl font-extrabold text-[#0f172a] dark:text-white leading-none mb-1">{s.value}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{s.label}</p>
                    </motion.div>
                  );
                })}
              </div>
            </BlurFade>

            {/* CTA link */}
            <BlurFade delay={0.38}>
              <motion.a
                href="/platform"
                whileHover={{ x: 4 }}
                className="inline-flex items-center gap-2 text-sm font-bold hover:brightness-110 transition-all"
                style={{ color: "#7B68EE" }}
              >
                Explore all integrations <ArrowRight className="h-4 w-4" />
              </motion.a>
            </BlurFade>

          </div>
        </div>

        {/* BOTTOM TRUST STRIP */}
        <BlurFade delay={0.44}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {TRUST_BADGES.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-900 p-6 overflow-hidden shadow-sm"
              >
                <div className={`w-1.5 h-9 rounded-full bg-linear-to-b ${b.from} ${b.to} mb-4`} />
                <p className="text-sm font-bold text-[#0f172a] dark:text-white mb-1">{b.title}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </BlurFade>

      </div>
    </section>
  );
}
