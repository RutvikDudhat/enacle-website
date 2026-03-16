"use client";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { ArrowUpRight, TrendingUp, Users2, Zap, BarChart3 } from "lucide-react";
import Link from "next/link";

interface CaseStudy {
  company: string;
  emoji: string;
  gradient: string;
  industry: string;
  tag: string;
  tagColor: string;
  tagBg: string;
  tagBorder: string;
  headline: string;
  metrics: { icon: React.ElementType; value: string; label: string }[];
  excerpt: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    company: "Atlassian",
    emoji: "⚡",
    gradient: "from-blue-600 to-indigo-600",
    industry: "Engineering",
    tag: "Engineering",
    tagColor: "text-blue-600",
    tagBg: "bg-blue-50 dark:bg-blue-950/40",
    tagBorder: "border-blue-200 dark:border-blue-800",
    headline: "40% faster shipping, 11 tools replaced",
    metrics: [
      { icon: Zap, value: "40%", label: "Faster shipping" },
      { icon: Users2, value: "11", label: "Tools replaced" },
      { icon: TrendingUp, value: "3→1", label: "Standups/week" },
    ],
    excerpt:
      "Atlassian's engineering org moved their entire dev workflow — sprints, docs, incident reviews — onto Enacle and cut standups by 66% while shipping 40% faster.",
  },
  {
    company: "Razorpay",
    emoji: "💳",
    gradient: "from-violet-600 to-purple-600",
    industry: "Sales",
    tag: "Sales",
    tagColor: "text-violet-600",
    tagBg: "bg-violet-50 dark:bg-violet-950/40",
    tagBorder: "border-violet-200 dark:border-violet-800",
    headline: "Pipeline conversion jumped from 18% to 31%",
    metrics: [
      { icon: TrendingUp, value: "31%", label: "Pipeline conv." },
      { icon: Zap, value: "100%", label: "Auto follow-ups" },
      { icon: BarChart3, value: "2,500+", label: "Reps onboarded" },
    ],
    excerpt:
      "Razorpay's revenue ops team used Enacle AI agents to automate lead qualification, follow-up emails, and task assignment — nearly doubling conversion in under six months.",
  },
  {
    company: "Spotify",
    emoji: "🎵",
    gradient: "from-green-500 to-emerald-600",
    industry: "Marketing",
    tag: "Marketing",
    tagColor: "text-emerald-600",
    tagBg: "bg-emerald-50 dark:bg-emerald-950/40",
    tagBorder: "border-emerald-200 dark:border-emerald-800",
    headline: "65% faster content, double the output",
    metrics: [
      { icon: TrendingUp, value: "65%", label: "Faster content" },
      { icon: Zap, value: "2×", label: "Output volume" },
      { icon: Users2, value: "6,000+", label: "Team members" },
    ],
    excerpt:
      "Spotify's marketing team automated competitor research, campaign briefs, and performance summaries with Brain MAX — halving production time while shipping twice the campaigns.",
  },
];

const LOGO_WALL = [
  { name: "Amazon",       emoji: "🛒", color: "from-orange-500 to-yellow-500" },
  { name: "NVIDIA",       emoji: "🎮", color: "from-green-600 to-emerald-500" },
  { name: "Spotify",      emoji: "🎵", color: "from-green-500 to-teal-500" },
  { name: "Shopify",      emoji: "🛍️", color: "from-emerald-600 to-green-500" },
  { name: "Dropbox",      emoji: "📦", color: "from-blue-500 to-indigo-500" },
  { name: "Atlassian",    emoji: "⚡", color: "from-blue-600 to-blue-400" },
  { name: "Harvard",      emoji: "🎓", color: "from-red-600 to-rose-500" },
  { name: "Toyota",       emoji: "🚗", color: "from-red-500 to-orange-500" },
  { name: "Wayfair",      emoji: "🏠", color: "from-violet-500 to-purple-600" },
  { name: "Verizon",      emoji: "📡", color: "from-red-600 to-red-400" },
  { name: "Booking.com",  emoji: "🏨", color: "from-blue-600 to-blue-400" },
  { name: "Razorpay",     emoji: "💳", color: "from-indigo-600 to-violet-500" },
  { name: "Freshworks",   emoji: "🌿", color: "from-green-500 to-emerald-400" },
  { name: "Wipro",        emoji: "🏢", color: "from-slate-600 to-slate-400" },
  { name: "Zoom",         emoji: "🎥", color: "from-blue-500 to-sky-400" },
  { name: "Intercom",     emoji: "💬", color: "from-indigo-600 to-blue-500" },
  { name: "Stripe",       emoji: "💸", color: "from-violet-600 to-indigo-500" },
  { name: "Notion",       emoji: "📝", color: "from-zinc-700 to-zinc-500" },
  { name: "Linear",       emoji: "⚙️", color: "from-blue-700 to-indigo-600" },
  { name: "Figma",        emoji: "🎨", color: "from-pink-500 to-red-500" },
];

function LogoTile({ name, emoji, color }: { name: string; emoji: string; color: string }) {
  return (
    <div className="flex flex-col items-center gap-2.5 p-4 rounded-2xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:shadow-md hover:border-zinc-300 dark:hover:border-slate-600 transition-all duration-200 group">
      <div className={`w-10 h-10 rounded-xl bg-linear-to-br ${color} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-200`}>
        <span className="text-lg">{emoji}</span>
      </div>
      <span className="text-xs font-bold text-zinc-500 dark:text-slate-400 uppercase tracking-wide">{name}</span>
    </div>
  );
}

export function CustomersLogos() {
  return (
    <section className="relative bg-white dark:bg-[#080d1a] py-24 overflow-hidden">
      {/* Dot grid */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:36px_36px] [mask-image:radial-gradient(ellipse_90%_70%_at_50%_50%,#000_50%,transparent_100%)]" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-250 h-80 rounded-full bg-violet-500/6 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-350 px-4 sm:px-6 lg:px-8">

        {/* ── Section header ── */}
        <BlurFade className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: "#7B68EE" }}>Case Studies</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0f172a] dark:text-white mb-4">
            Success stories in depth
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            A closer look at the measurable impact Enacle delivers across industries.
          </p>
        </BlurFade>

        {/* ── Case study cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {CASE_STUDIES.map((cs, i) => (
            <BlurFade key={cs.company} delay={i * 0.08}>
              <div className="relative rounded-2xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-7 flex flex-col h-full overflow-hidden hover:shadow-xl hover:border-violet-300 dark:hover:border-violet-700 transition-all duration-200 group">
                <BorderBeam size={280} duration={11 + i * 2} colorFrom="#7B68EE" colorTo="#FD71AF" />

                {/* Header */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className={`w-11 h-11 rounded-xl bg-linear-to-br ${cs.gradient} flex items-center justify-center shrink-0 shadow-sm`}>
                      <span className="text-xl">{cs.emoji}</span>
                    </div>
                    <div>
                      <p className="font-extrabold text-zinc-900 dark:text-white text-sm">{cs.company}</p>
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${cs.tagBorder} ${cs.tagBg} ${cs.tagColor}`}>
                        {cs.industry}
                      </span>
                    </div>
                  </div>
                  <div className="w-7 h-7 rounded-lg border border-zinc-200 dark:border-slate-700 flex items-center justify-center text-zinc-300 dark:text-slate-600 group-hover:border-violet-300 transition-colors duration-200" style={{ "--tw-text-opacity": "1" } as React.CSSProperties}>
                    <ArrowUpRight className="h-3.5 w-3.5 group-hover:text-[#7B68EE]" />
                  </div>
                </div>

                {/* Headline */}
                <h3 className="text-base font-extrabold text-zinc-900 dark:text-white mb-3 leading-snug">{cs.headline}</h3>

                {/* Metrics row */}
                <div className="grid grid-cols-3 gap-2 mb-5">
                  {cs.metrics.map((m) => {
                    const MIcon = m.icon;
                    return (
                      <div key={m.label} className={`rounded-xl border ${cs.tagBorder} ${cs.tagBg} p-2.5 text-center`}>
                        <MIcon className={`h-3.5 w-3.5 ${cs.tagColor} mx-auto mb-1`} />
                        <p className={`text-sm font-black ${cs.tagColor}`}>{m.value}</p>
                        <p className="text-[10px] text-slate-400 dark:text-slate-500 leading-tight">{m.label}</p>
                      </div>
                    );
                  })}
                </div>

                {/* Excerpt */}
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed flex-1">{cs.excerpt}</p>

                {/* Read more */}
                <div className={`mt-5 text-xs font-bold ${cs.tagColor} flex items-center gap-1 group-hover:gap-2 transition-all duration-200`}>
                  Read full case study
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </BlurFade>
          ))}
        </div>

        {/* ── Logo wall ── */}
        <BlurFade className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-zinc-400 dark:text-slate-500 mb-2">
            Trusted by world-class teams
          </p>
          <p className="text-2xl font-extrabold text-zinc-900 dark:text-white">
            Join <span style={{ color: "#7B68EE" }}>50,000+</span> teams already using Enacle
          </p>
        </BlurFade>

        <BlurFade delay={0.1}>
          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-3">
            {LOGO_WALL.map((l, i) => (
              <BlurFade key={l.name} delay={0.12 + i * 0.025}>
                <LogoTile {...l} />
              </BlurFade>
            ))}
          </div>
        </BlurFade>

      </div>
    </section>
  );
}
