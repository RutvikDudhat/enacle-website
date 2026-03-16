"use client";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import {
  Star, Gem,               <BlurFade key={t.title} delay={i * 0.07}>
                <div className={`rounded-2xl border ${t.border} p-6 h-full relative overflow-hidden hover:scale-[1.02] hover:shadow-md transition-all duration-200`} style={{ background: t.cardBg }}>
                  <BorderBeam size={200} duration={12} colorFrom="#7B68EE" colorTo="#FD71AF" />
                  <div className={`w-10 h-10 rounded-xl border ${t.border} flex items-center justify-center mb-4`} style={{ background: t.iconBg }}>
                    <Icon className="h-5 w-5" style={{ color: t.iconColor }} />
                  </div>
  Check, DollarSign, Megaphone, BookOpen,
  Headphones, BarChart3, Users2, Zap, Globe2,
  Code2, Briefcase, Building2,
} from "lucide-react";

/* ─── Partner tiers ──────────────────────────────────────── */
const TIERS = [
  {
    id: "registered",
    icon: Star,
    label: "Registered",
    tagline: "Start earning from day one",
    revenue: "20%",
    revNote: "recurring commission",
    color: "text-zinc-600 dark:text-slate-300",
    iconBg: "bg-zinc-100 dark:bg-slate-800",
    iconBorder: "border-zinc-200 dark:border-slate-700",
    cardBg: "bg-white dark:bg-slate-900",
    cardBorder: "border-zinc-200 dark:border-slate-700",
    highlight: false,
    perks: [
      "Partner portal access",
      "Reseller discount 20%",
      "Partner badge & listing",
      "Self-serve training library",
      "Community Slack access",
      "Deal registration",
    ],
    requirements: "No minimum revenue. Free to join.",
  },
  {
    id: "silver",
    icon: Gem,
    label: "Silver",
    tagline: "Accelerate with co-selling",
    revenue: "30%",
    revNote: "recurring commission",
    color: "text-blue-600 dark:text-blue-400",
    iconBg: "bg-blue-50 dark:bg-blue-950/40",
    iconBorder: "border-blue-200 dark:border-blue-800",
    cardBg: "bg-blue-50/40 dark:bg-blue-950/20",
    cardBorder: "border-blue-200 dark:border-blue-800",
    highlight: false,
    perks: [
      "Everything in Registered",
      "Reseller discount 30%",
      "Co-marketing MDF budget",
      "Quarterly business reviews",
      "Priority support SLA",
      "Co-branded sales collateral",
      "Joint case study opportunity",
    ],
    requirements: "$25k ARR sourced annually.",
  },
  {
    id: "gold",
    icon: Crown,
    label: "Gold",
    tagline: "The full partner experience",
    revenue: "40%",
    revNote: "recurring commission",
    color: "text-amber-500",
    iconBg: "bg-amber-50 dark:bg-amber-950/40",
    iconBorder: "border-amber-200 dark:border-amber-800",
    cardBg: "bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/25 dark:to-orange-950/20",
    cardBorder: "border-amber-300 dark:border-amber-700",
    highlight: true,
    perks: [
      "Everything in Silver",
      "Reseller discount 40%",
      "Dedicated Partner Success Manager",
      "Roadmap input & early access",
      "Enacle-funded co-sell support",
      "Joint press release & PR",
      "Annual Partner Summit invite",
      "Custom integration support",
    ],
    requirements: "$100k ARR sourced annually.",
  },
];

/* ─── Partner types ──────────────────────────────────────── */
const TYPES = [
  {
    icon: Briefcase,
    title: "Reseller",
    body: "Sell Enacle licences to your clients and earn recurring commission on every seat — month after month.",
    iconColor: "#7B68EE", iconBg: "rgba(123,104,238,0.1)", border: "border-violet-200 dark:border-violet-800", cardBg: "rgba(123,104,238,0.05)",
  },
  {
    icon: Code2,
    title: "Technology / ISV",
    body: "Build a native integration, list on the Enacle marketplace, and co-market to our 50k+ customer base.",
    iconColor: "#FD71AF", iconBg: "rgba(253,113,175,0.1)", border: "border-pink-200 dark:border-pink-800", cardBg: "rgba(253,113,175,0.05)",
  },
  {
    icon: Building2,
    title: "Consulting / Agency",
    body: "Deliver implementation, migration, and managed services. Get certified and unlock exclusive deal flow.",
    iconColor: "#10b981", iconBg: "rgba(16,185,129,0.1)", border: "border-emerald-200 dark:border-emerald-800", cardBg: "rgba(16,185,129,0.05)",
  },
  {
    icon: Globe2,
    title: "Referral",
    body: "No selling required — just refer leads via your unique link and earn a one-time referral bonus per closed deal.",
    iconColor: "#FFC800", iconBg: "rgba(255,200,0,0.1)", border: "border-yellow-200 dark:border-yellow-800", cardBg: "rgba(255,200,0,0.05)",
  },
];

/* ─── Benefits ───────────────────────────────────────────── */
const BENEFITS = [
  { icon: DollarSign, title: "Recurring Revenue",      body: "Earn commission every month your client stays — not just at initial sale." },
  { icon: Megaphone,  title: "Co-Marketing Funds",      body: "MDF budgets, joint webinars, and co-branded campaigns to fill your pipeline." },
  { icon: BookOpen,   title: "Full Training & Certs",   body: "Free access to Enacle Academy, certifications, and live enablement sessions." },
  { icon: Headphones, title: "Priority Partner Support",body: "Dedicated Slack channel, fast SLAs, and escalation paths for your client issues." },
  { icon: BarChart3,  title: "Real-Time Dashboard",     body: "Track your pipeline, commissions, certifications, and MDF usage in one portal." },
  { icon: Users2,     title: "Deal Registration",       body: "Register opportunities and get protected pricing + support to close them." },
];

export function PartnersTiers() {
  return (
    <section id="tiers" className="relative bg-zinc-50 dark:bg-[#060b18] py-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:40px_40px] opacity-50" />
      <div className="pointer-events-none absolute top-0 right-0 w-150 h-100 rounded-full blur-3xl" style={{ background: "rgba(123,104,238,0.08)" }} />
      <div className="pointer-events-none absolute bottom-0 left-0 w-125 h-75 rounded-full blur-3xl" style={{ background: "rgba(253,113,175,0.08)" }} />

      <div className="relative z-10 mx-auto max-w-350 px-4 sm:px-6 lg:px-8">

        {/* ── Partner types ── */}
        <BlurFade className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: "#7B68EE" }}>Partnership Types</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0f172a] dark:text-white mb-4">
            Find your partnership model
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Whether you sell, build, consult, or simply refer — there&apos;s a structured program built for you.
          </p>
        </BlurFade>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-24">
          {TYPES.map((t, i) => {
            const Icon = t.icon;
            return (
              <BlurFade key={t.title} delay={i * 0.07}>
                <div className={`rounded-2xl border ${t.border} ${t.bg} p-6 h-full relative overflow-hidden hover:scale-[1.02] hover:shadow-md transition-all duration-200`}>
                  <BorderBeam size={200} duration={12} colorFrom="#7B68EE" colorTo="#FD71AF" />
                  <div className={`w-10 h-10 rounded-xl border ${t.border} ${t.bg} flex items-center justify-center mb-4`}>
                    <Icon className={`h-5 w-5 ${t.color}`} />
                  </div>
                  <h3 className="text-base font-bold text-zinc-900 dark:text-white mb-2">{t.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{t.body}</p>
                </div>
              </BlurFade>
            );
          })}
        </div>

        {/* ── Tier cards ── */}
        <BlurFade className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: "#7B68EE" }}>Partner Tiers</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0f172a] dark:text-white mb-4">
            Choose your tier
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Start free and grow into higher commissions and deeper support as you scale with us.
          </p>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {TIERS.map((tier, i) => {
            const Icon = tier.icon;
            return (
              <BlurFade key={tier.id} delay={i * 0.08}>
                <div className={`relative rounded-2xl border ${tier.cardBorder} ${tier.cardBg} p-7 h-full overflow-hidden flex flex-col ${tier.highlight ? "shadow-2xl shadow-amber-100/60 dark:shadow-amber-950/30 scale-[1.02]" : "shadow-sm"}`}>
                  {tier.highlight && (
                    <div className="absolute top-4 right-4 bg-amber-400 text-amber-900 text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full">
                      Most Popular
                    </div>
                  )}
                  <BorderBeam
                    size={300}
                    duration={tier.highlight ? 8 : 14}
                    colorFrom={tier.highlight ? "#FFC800" : "#7B68EE"}
                    colorTo={tier.highlight ? "#FD71AF" : "#FD71AF"}
                  />

                  {/* Tier header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-11 h-11 rounded-xl border ${tier.iconBorder} ${tier.iconBg} flex items-center justify-center shrink-0`}>
                      <Icon className={`h-5 w-5 ${tier.color}`} />
                    </div>
                    <div>
                      <p className={`text-xs font-bold uppercase tracking-widest ${tier.color}`}>{tier.label}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{tier.tagline}</p>
                    </div>
                  </div>

                  {/* Commission */}
                  <div className="mb-6 pb-6 border-b border-zinc-100 dark:border-slate-800">
                    <span className={`text-4xl font-black ${tier.color}`}>{tier.revenue}</span>
                    <span className="text-sm text-slate-500 dark:text-slate-400 ml-2">{tier.revNote}</span>
                    <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">{tier.requirements}</p>
                  </div>

                  {/* Perks */}
                  <ul className="space-y-2.5 flex-1">
                    {tier.perks.map((perk) => (
                      <li key={perk} className="flex items-start gap-2.5 text-sm text-zinc-700 dark:text-slate-300">
                        <Check className={`h-4 w-4 mt-0.5 shrink-0 ${tier.color}`} />
                        {perk}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="#apply"
                    className={`mt-7 w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all duration-200 ${
                      tier.highlight
                        ? "bg-amber-400 hover:bg-amber-300 text-amber-900 shadow-md"
                        : "bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:opacity-90"
                    }`}
                  >
                    Apply as {tier.label}
                  </a>
                </div>
              </BlurFade>
            );
          })}
        </div>

        {/* ── Benefits grid ── */}
        <BlurFade className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: "#7B68EE" }}>What You Get</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0f172a] dark:text-white">
            Everything you need to succeed
          </h2>
        </BlurFade>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {BENEFITS.map((b, i) => {
            const Icon = b.icon;
            return (
              <BlurFade key={b.title} delay={i * 0.06}>
                <div className="rounded-2xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 relative overflow-hidden hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-md transition-all duration-200">
                  <BorderBeam size={200} duration={14} colorFrom="#7B68EE" colorTo="#FD71AF" />
                  <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-slate-800 flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5" style={{ color: "#7B68EE" }} />
                  </div>
                  <h3 className="text-sm font-bold text-zinc-900 dark:text-white mb-2">{b.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{b.body}</p>
                </div>
              </BlurFade>
            );
          })}
        </div>

      </div>
    </section>
  );
}
