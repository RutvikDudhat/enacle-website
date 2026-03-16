"use client";

import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import { Marquee } from "@/components/ui/marquee";
import { BorderBeam } from "@/components/ui/border-beam";
import { ArrowRight, CheckCircle2, Star, Zap, Shield, Clock } from "lucide-react";

const TESTIMONIALS = [
  { name: "Sarah Chen",    role: "CTO, Meridian Labs",    quote: "We replaced Jira, Notion, Slack and Zapier with Enacle. Our team is 40% more productive and we saved $4k/month.", avatar: "SC", color: "#0f172a" },
  { name: "Marcus Rivera", role: "VP Eng, Apexflow",      quote: "The AI agents are insane. Our support triage bot resolves 60% of Tier-1 tickets without any human involvement.", avatar: "MR", color: "#1a2d6b" },
  { name: "Priya Nair",    role: "Head of Growth, Nomad", quote: "Brain MAX is the first AI that actually understands our company context. It's like having a senior analyst on demand.", avatar: "PN", color: "#2563eb" },
  { name: "Tom Whitfield", role: "CEO, Carve Digital",    quote: "Onboarded our 80-person company in one afternoon. The migration from our old stack was painless. Couldn't believe it.", avatar: "TW", color: "#d97706" },
  { name: "Aisha Okonkwo", role: "PM, Stratus Health",    quote: "Sprint planning used to take half a day. Now the AI does it in 30 seconds and we just tweak it. Game changer.", avatar: "AO", color: "#059669" },
  { name: "Lukas Bauer",   role: "Founder, Gridline",     quote: "We're a 12-person startup competing against companies 10x our size — Enacle is our secret weapon.", avatar: "LB", color: "#7c3aed" },
];

const TRUST = [
  { icon: Shield,       text: "SOC 2 Type II certified" },
  { icon: Clock,        text: "99.99% uptime SLA" },
  { icon: CheckCircle2, text: "GDPR & CCPA compliant" },
  { icon: Zap,          text: "Setup in under 5 minutes" },
];

const AVATARS = [
  { initials: "SC", color: "#0f172a" },
  { initials: "MR", color: "#1a2d6b" },
  { initials: "PN", color: "#2563eb" },
  { initials: "TW", color: "#d97706" },
  { initials: "AO", color: "#059669" },
];

export function CTA() {
  return (
    <section className="py-28 bg-white dark:bg-[#080d1a] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <BlurFade>
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-6">
            What teams are saying
          </p>
        </BlurFade>

        <BlurFade delay={0.08}>
          <div className="relative mb-24 space-y-4">
            <Marquee pauseOnHover className="[--duration:40s] [--gap:1rem]" repeat={2}>
              {TESTIMONIALS.map((t) => (
                <div key={t.name} className="w-72 shrink-0 rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-900 p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">&quot;{t.quote}&quot;</p>
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0" style={{ backgroundColor: t.color }}>
                      {t.avatar}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#0f172a] dark:text-white">{t.name}</div>
                      <div className="text-[11px] text-slate-400 dark:text-slate-500">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </Marquee>
            <Marquee pauseOnHover reverse className="[--duration:50s] [--gap:1rem]" repeat={2}>
              {[...TESTIMONIALS].reverse().map((t) => (
                <div key={t.name + "-rev"} className="w-72 shrink-0 rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-900 p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">&quot;{t.quote}&quot;</p>
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0" style={{ backgroundColor: t.color }}>
                      {t.avatar}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#0f172a] dark:text-white">{t.name}</div>
                      <div className="text-[11px] text-slate-400 dark:text-slate-500">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-white dark:from-[#080d1a] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-white dark:from-[#080d1a] to-transparent" />
          </div>
        </BlurFade>

        {/* CTA block */}
        <BlurFade delay={0.18}>
          <div className="relative overflow-hidden rounded-3xl px-8 py-20 text-center" style={{ background: "linear-gradient(135deg,#292D34 0%,#1a1d24 100%)" }}>
            <BorderBeam size={500} duration={16} colorFrom="#7B68EE" colorTo="#FD71AF" />
            {/* Decorative rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-96 h-96 rounded-full border border-white/5" />
              <div className="absolute w-64 h-64 rounded-full border border-white/5" />
              <div className="absolute w-32 h-32 rounded-full border border-white/5" />
            </div>
            {/* Glow blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full blur-3xl pointer-events-none" style={{ background: "rgba(123,104,238,0.12)" }} />
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-48 h-48 rounded-full blur-3xl pointer-events-none" style={{ background: "rgba(253,113,175,0.10)" }} />
            <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full blur-3xl pointer-events-none" style={{ background: "rgba(73,204,249,0.08)" }} />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 mb-6" style={{ border: "1px solid rgba(253,113,175,0.4)", background: "rgba(253,113,175,0.1)" }}>
                <Zap className="h-3.5 w-3.5" style={{ color: "#FD71AF" }} />
                <span className="text-sm font-semibold" style={{ color: "#FD71AF" }}>Start for free today</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-5 leading-tight">
                Your team deserves{" "}
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg,#7B68EE,#FD71AF)" }}>better than this</span>
              </h2>

              <p className="text-lg text-slate-400 max-w-xl mx-auto leading-relaxed mb-8">
                Join 50,000+ teams who replaced their entire SaaS stack with Enacle.
                Set up your workspace in under 5 minutes — no credit card needed.
              </p>

              <div className="flex items-center justify-center gap-3 mb-10">
                <div className="flex -space-x-2">
                  {AVATARS.map((a) => (
                    <div key={a.initials} className="w-8 h-8 rounded-full border-2 border-[#292D34] flex items-center justify-center text-[9px] font-bold text-white shrink-0" style={{ backgroundColor: a.color }}>
                      {a.initials}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-slate-400">50,000+ teams trust Enacle</span>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                <Link
                  href="/signup"
                  className="inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-base font-bold text-white transition-opacity hover:opacity-90 shadow-lg"
                  style={{ background: "linear-gradient(135deg,#7B68EE,#FD71AF)", boxShadow: "0 8px 24px rgba(123,104,238,0.35)" }}
                >
                  Get Started — It&apos;s FREE
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/pricing" className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-medium px-6 py-3.5 rounded-xl text-base transition-colors">
                  View Pricing
                </Link>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
                {TRUST.map((t) => (
                  <div key={t.text} className="flex items-center gap-2 text-sm text-slate-400">
                    <t.icon className="h-4 w-4 shrink-0" style={{ color: "#49CCF9" }} />
                    {t.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </BlurFade>

      </div>
    </section>
  );
}
