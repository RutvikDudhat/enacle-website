"use client";
import { BlurFade } from "@/components/ui/blur-fade";
import { Particles } from "@/components/ui/particles";
import { BorderBeam } from "@/components/ui/border-beam";
import { Marquee } from "@/components/ui/marquee";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Star, TrendingUp, Users2, Globe2, Zap } from "lucide-react";

const STATS = [
  { val: 50000, suffix: "+", label: "Teams worldwide",   color: "#7B68EE", bg: "rgba(123,104,238,0.08)",  border: "border-violet-200 dark:border-violet-800" },
  { val: 98,    suffix: "%", label: "Retention rate",    color: "#10b981", bg: "rgba(16,185,129,0.08)",   border: "border-emerald-200 dark:border-emerald-800" },
  { val: 12,    suffix: "×", label: "Faster decisions",  color: "#FD71AF", bg: "rgba(253,113,175,0.08)",  border: "border-pink-200 dark:border-pink-800" },
  { val: 4.9,   suffix: "★", label: "Avg. rating",       color: "#FFC800", bg: "rgba(255,200,0,0.08)",    border: "border-yellow-200 dark:border-yellow-800", isFloat: true },
];

/* Two rows of logos for the marquee */
const LOGOS_ROW1 = [
  { name: "Amazon",    emoji: "🛒", color: "from-orange-500 to-yellow-500" },
  { name: "NVIDIA",    emoji: "🎮", color: "from-green-600 to-emerald-500" },
  { name: "Spotify",   emoji: "🎵", color: "from-green-500 to-teal-500" },
  { name: "Shopify",   emoji: "🛍️", color: "from-emerald-600 to-green-500" },
  { name: "Dropbox",   emoji: "📦", color: "from-blue-500 to-indigo-500" },
  { name: "Atlassian", emoji: "⚡", color: "from-blue-600 to-blue-400" },
  { name: "Harvard",   emoji: "🎓", color: "from-red-600 to-rose-500" },
  { name: "Toyota",    emoji: "🚗", color: "from-red-500 to-orange-500" },
];
const LOGOS_ROW2 = [
  { name: "Wayfair",       emoji: "🏠", color: "from-violet-500 to-purple-600" },
  { name: "Verizon",       emoji: "📡", color: "from-red-600 to-red-400" },
  { name: "Booking.com",   emoji: "🏨", color: "from-blue-600 to-blue-400" },
  { name: "Razorpay",      emoji: "💳", color: "from-indigo-600 to-violet-500" },
  { name: "Freshworks",    emoji: "🌿", color: "from-green-500 to-emerald-400" },
  { name: "Wipro",         emoji: "🏢", color: "from-slate-600 to-slate-400" },
  { name: "Zoom",          emoji: "🎥", color: "from-blue-500 to-sky-400" },
  { name: "Intercom",      emoji: "💬", color: "from-indigo-600 to-blue-500" },
];

const PILLS = [
  { icon: Users2,    text: "50,000+ happy teams" },
  { icon: Globe2,    text: "130+ countries" },
  { icon: TrendingUp,text: "4.9★ on G2 & Capterra" },
  { icon: Zap,       text: "Named #1 AI workspace 2025" },
];

function LogoChip({ name, emoji, color }: { name: string; emoji: string; color: string }) {
  return (
    <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md hover:border-zinc-300 dark:hover:border-slate-600 transition-all duration-200 shrink-0">
      <div className={`w-7 h-7 rounded-lg bg-linear-to-br ${color} flex items-center justify-center shrink-0`}>
        <span className="text-sm">{emoji}</span>
      </div>
      <span className="text-sm font-extrabold text-zinc-700 dark:text-slate-300 uppercase tracking-wide whitespace-nowrap">{name}</span>
    </div>
  );
}

export function CustomersHero() {
  return (
    <section className="relative bg-white dark:bg-[#080d1a] pt-28 pb-24 overflow-hidden">
      {/* Dot grid */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_60%,transparent_110%)]" />
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-225 h-85 rounded-full blur-3xl" style={{ background: "rgba(123,104,238,0.1)" }} />
      <Particles className="absolute inset-0 opacity-20" quantity={60} color="#94a3b8" />

      <div className="relative z-10 mx-auto max-w-350 px-4 sm:px-6 lg:px-8">

        {/* Badge */}
        <BlurFade className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-violet-50 dark:bg-violet-950/40 border border-violet-200 dark:border-violet-800 px-3.5 py-1.5">
            <Star className="h-3.5 w-3.5 fill-[#FFC800]" style={{ color: "#FFC800" }} />
            <span className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: "#7B68EE" }}>Customer Stories</span>
          </div>
        </BlurFade>

        {/* Headline */}
        <BlurFade delay={0.07} className="text-center mb-5">
          <h1 className="text-5xl sm:text-6xl lg:text-[68px] font-extrabold tracking-tight text-[#0f172a] dark:text-white leading-[1.04] mb-4">
            Loved by{" "}
            <span className="bg-linear-to-r from-[#7B68EE] via-[#FD71AF] to-[#7B68EE] bg-clip-text text-transparent">
              50,000+ teams
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            From early-stage startups to Fortune 500 enterprises — see how teams around the world use Enacle to move faster and work smarter.
          </p>
        </BlurFade>

        {/* Benefit pills */}
        <BlurFade delay={0.13} className="flex flex-wrap items-center justify-center gap-3 mb-14">
          {PILLS.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.text} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-slate-300 bg-zinc-50 dark:bg-slate-800/60 border border-zinc-200 dark:border-slate-700 rounded-full px-3.5 py-1.5">
                <Icon className="h-3.5 w-3.5 shrink-0" style={{ color: "#7B68EE" }} />
                {p.text}
              </div>
            );
          })}
        </BlurFade>

        {/* Stats grid */}
        <BlurFade delay={0.17}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {STATS.map((s) => (
              <div key={s.label} className={`rounded-2xl border ${s.border} p-6 relative overflow-hidden text-center hover:scale-[1.02] transition-transform duration-200`} style={{ background: s.bg }}>
                <BorderBeam size={160} duration={10} colorFrom="#7B68EE" colorTo="#FD71AF" />
                <div className="text-3xl sm:text-4xl font-black flex items-baseline justify-center gap-0.5 mb-1" style={{ color: s.color }}>
                  {s.isFloat
                    ? <span>{s.val}</span>
                    : <NumberTicker value={s.val} className="" style={{ color: s.color }} />}
                  <span>{s.suffix}</span>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400">{s.label}</p>
              </div>
            ))}
          </div>
        </BlurFade>

        {/* Logo marquee — 2 rows */}
        <BlurFade delay={0.22}>
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.22em] text-zinc-300 dark:text-slate-600 mb-5">
            Trusted by teams at
          </p>
          <div className="space-y-3 overflow-hidden">
            <Marquee pauseOnHover className="[--duration:30s] [--gap:0.75rem]" repeat={3}>
              {LOGOS_ROW1.map((l) => <LogoChip key={l.name} {...l} />)}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:28s] [--gap:0.75rem]" repeat={3}>
              {LOGOS_ROW2.map((l) => <LogoChip key={l.name} {...l} />)}
            </Marquee>
          </div>
          {/* Edge fades */}
          <div className="relative -mt-26 h-26 pointer-events-none">
            <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-white dark:from-[#080d1a] to-transparent" />
            <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-white dark:from-[#080d1a] to-transparent" />
          </div>
        </BlurFade>

      </div>
    </section>
  );
}
