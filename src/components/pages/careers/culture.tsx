"use client";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import {
  Heart, Cpu, Users2, Rocket, Globe2, BookOpen,
  Coffee, Award, Bike, Music2, Shield, Star,
} from "lucide-react";

const VALUES = [
  {
    icon: Rocket,
    title: "Ship Fast, Learn Fast",
    body: "We deploy multiple times per day. Every engineer owns their work end-to-end — from idea to production, no bottlenecks.",
    color: "text-orange-500",
    bg: "bg-orange-50 dark:bg-orange-950/30",
    border: "border-orange-200 dark:border-orange-800",
  },
  {
    icon: Cpu,
    title: "AI-Native by Default",
    body: "We don't bolt AI on top — it's woven into every product decision. We're building tools we want to use every day.",
    color: "text-blue-500",
    bg: "bg-blue-50 dark:bg-blue-950/30",
    border: "border-blue-200 dark:border-blue-800",
  },
  {
    icon: Users2,
    title: "High Trust, No Micromanagement",
    body: "We hire smart people and get out of their way. Async-first culture, radical transparency, outcomes over hours.",
    color: "text-violet-500",
    bg: "bg-violet-50 dark:bg-violet-950/30",
    border: "border-violet-200 dark:border-violet-800",
  },
  {
    icon: Globe2,
    title: "Remote Without Compromise",
    body: "Top talent is everywhere. We've built rituals, tooling, and a culture that makes distributed work feel close-knit.",
    color: "text-emerald-500",
    bg: "bg-emerald-50 dark:bg-emerald-950/30",
    border: "border-emerald-200 dark:border-emerald-800",
  },
  {
    icon: BookOpen,
    title: "Deep Work Respected",
    body: "No-meeting Wednesdays. Maker schedules protected. We invest in focus because great engineering requires it.",
    color: "text-cyan-500",
    bg: "bg-cyan-50 dark:bg-cyan-950/30",
    border: "border-cyan-200 dark:border-cyan-800",
  },
  {
    icon: Heart,
    title: "People Over Process",
    body: "Mental health days, flexible hours, parental leave without caveats. We treat people like adults because they are.",
    color: "text-rose-500",
    bg: "bg-rose-50 dark:bg-rose-950/30",
    border: "border-rose-200 dark:border-rose-800",
  },
];

const PHOTOS = [
  { label: "Team Offsite · Lisbon 2025",    emoji: "🏖️", gradient: "from-blue-600 to-violet-600" },
  { label: "Hack Week · SF HQ",             emoji: "⚡", gradient: "from-amber-500 to-orange-600" },
  { label: "All-Hands · January 2026",       emoji: "🌍", gradient: "from-emerald-500 to-cyan-600" },
  { label: "Design Review · London Office", emoji: "🎨", gradient: "from-rose-500 to-pink-600" },
];

const PERKS = [
  { icon: Award,   label: "Equity for everyone",      note: "Real ownership, not token options" },
  { icon: Bike,    label: "Wellness stipend $150/mo",  note: "Gym, therapy, whatever works for you" },
  { icon: BookOpen,label: "$3,000 learning budget",    note: "Courses, books, conferences — annual" },
  { icon: Coffee,  label: "Remote setup budget $2k",   note: "Ergonomic desk, monitor, anything" },
  { icon: Globe2,  label: "Team offsites 2× a year",   note: "We pick beautiful cities together" },
  { icon: Shield,  label: "Platinum health coverage",  note: "Medical, dental, vision — 100% covered" },
  { icon: Music2,  label: "Spotify + tools covered",   note: "We pay for the tools that make you great" },
  { icon: Star,    label: "Spot bonuses + recognition", note: "Great work gets noticed & rewarded fast" },
];

export function CareersCulture() {
  return (
    <section id="culture" className="relative bg-zinc-50 dark:bg-[#060b18] py-24 overflow-hidden">
      {/* Faint grid */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:40px_40px] opacity-60" />

      <div className="relative z-10 mx-auto max-w-350 px-4 sm:px-6 lg:px-8">

        {/* ── Section label ── */}
        <BlurFade className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: "#7B68EE" }}>Our Culture</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0f172a] dark:text-white mb-4">
            How we work
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            We built the culture we always wanted to work in — high autonomy, high standards, zero politics.
          </p>
        </BlurFade>

        {/* ── Values grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {VALUES.map((v, i) => {
            const Icon = v.icon;
            return (
              <BlurFade key={v.title} delay={i * 0.06}>
                <div className={`rounded-2xl border ${v.border} ${v.bg} p-6 h-full relative overflow-hidden group hover:scale-[1.02] transition-transform duration-200`}>
                  <BorderBeam size={200} duration={12} colorFrom="#7B68EE" colorTo="#FD71AF" />
                  <div className={`w-10 h-10 rounded-xl ${v.bg} border ${v.border} flex items-center justify-center mb-4`}>
                    <Icon className={`h-5 w-5 ${v.color}`} />
                  </div>
                  <h3 className="text-base font-bold text-[#0f172a] dark:text-white mb-2">{v.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{v.body}</p>
                </div>
              </BlurFade>
            );
          })}
        </div>

        {/* ── Photo mosaic ── */}
        <BlurFade className="mb-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {PHOTOS.map((p) => (
              <div
                key={p.label}
                className={`relative rounded-2xl overflow-hidden aspect-square bg-linear-to-br ${p.gradient} flex flex-col items-center justify-center gap-2 shadow-lg`}
              >
                <span className="text-5xl">{p.emoji}</span>
                <span className="text-xs font-semibold text-white/80 text-center px-3 leading-tight">{p.label}</span>
              </div>
            ))}
          </div>
        </BlurFade>

        {/* ── Perks grid ── */}
        <BlurFade>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-center mb-4" style={{ color: "#7B68EE" }}>Benefits & Perks</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0f172a] dark:text-white text-center mb-12">
            We take care of our people
          </h2>
        </BlurFade>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PERKS.map((perk, i) => {
            const Icon = perk.icon;
            return (
              <BlurFade key={perk.label} delay={i * 0.05}>
                <div className="rounded-2xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-5 relative overflow-hidden hover:border-[#7B68EE]/40 dark:hover:border-[#7B68EE]/40 hover:shadow-md transition-all duration-200">
          <BorderBeam size={160} duration={14} colorFrom="#7B68EE" colorTo="#FD71AF" />
                  <div className="w-9 h-9 rounded-lg bg-zinc-100 dark:bg-slate-800 flex items-center justify-center mb-3">
                    <Icon className={`h-4.5 w-4.5`} style={{ color: "#7B68EE" }} />
                  </div>
                  <p className="text-sm font-bold text-zinc-900 dark:text-white mb-1">{perk.label}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-snug">{perk.note}</p>
                </div>
              </BlurFade>
            );
          })}
        </div>

      </div>
    </section>
  );
}
