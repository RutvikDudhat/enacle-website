"use client";
import { BlurFade } from "@/components/ui/blur-fade";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { motion } from "motion/react";
import { ArrowRight, Linkedin, Twitter } from "lucide-react";

const TEAM = [
  { name: "Arjun Mehta",   role: "CEO & Co-founder",         prev: "Ex-Atlassian · Ex-Google",   initials: "AM", from: "#EF9449", to: "#f59e0b" },
  { name: "Sofia Reyes",   role: "CTO & Co-founder",         prev: "Ex-Stripe · Ex-OpenAI",      initials: "SR", from: "#a855f7", to: "#7c3aed" },
  { name: "James Park",    role: "VP Product",               prev: "Ex-Linear · Ex-Figma",       initials: "JP", from: "#3b82f6", to: "#0ea5e9" },
  { name: "Priya Kapoor",  role: "VP Engineering",           prev: "Ex-Notion · Ex-Vercel",      initials: "PK", from: "#10b981", to: "#059669" },
  { name: "Lucas Schmidt", role: "Head of AI Research",      prev: "Ex-Anthropic · Ex-DeepMind", initials: "LS", from: "#f59e0b", to: "#d97706" },
  { name: "Anika Osei",    role: "VP Sales",                 prev: "Ex-Salesforce · Ex-HubSpot", initials: "AO", from: "#f43f5e", to: "#e11d48" },
  { name: "Tom Nakamura",  role: "Head of Design",           prev: "Ex-Apple · Ex-Airbnb",       initials: "TN", from: "#EF9449", to: "#a855f7" },
  { name: "Rachel Liu",    role: "Head of Customer Success", prev: "Ex-Zendesk · Ex-Intercom",   initials: "RL", from: "#14b8a6", to: "#0d9488" },
];

function TeamCard({ member, index }: { member: typeof TEAM[0]; index: number }) {
  return (
    <BlurFade delay={0.04 * index} inView>
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        className="group relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 flex flex-col items-center text-center overflow-hidden cursor-pointer"
      >
        {/* Hover glow */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(ellipse at 50% 0%, ${member.from}18 0%, transparent 70%)`,
          }}
        />
        {/* Top accent line */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover:w-full rounded-full transition-all duration-500"
          style={{ background: `linear-gradient(to right, ${member.from}, ${member.to})` }}
        />

        {/* Avatar */}
        <div className="relative mb-4">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg ring-4 ring-white dark:ring-slate-900"
            style={{ background: `linear-gradient(135deg, ${member.from}, ${member.to})` }}
          >
            {member.initials}
          </div>
          {/* Online indicator */}
          <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white dark:border-slate-900 shadow-sm" />
        </div>

        {/* Info */}
        <p className="text-base font-bold text-gray-900 dark:text-white leading-tight">{member.name}</p>
        <p className="text-sm font-semibold mt-0.5" style={{ color: member.from }}>{member.role}</p>
        <p className="text-xs text-slate-400 dark:text-slate-500 mt-1.5 leading-relaxed">{member.prev}</p>

        {/* Social links */}
        <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-200">
          <button className="w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400 hover:text-[#EF9449] dark:hover:text-[#EF9449] transition-colors shadow-sm">
            <Twitter className="h-3 w-3" />
          </button>
          <button className="w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400 hover:text-[#EF9449] dark:hover:text-[#EF9449] transition-colors shadow-sm">
            <Linkedin className="h-3 w-3" />
          </button>
        </div>
      </motion.div>
    </BlurFade>
  );
}

export function AboutTeam() {
  return (
    <>
      {/* ── Team Section ── */}
      <section className="relative py-24 bg-white dark:bg-slate-950 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(circle, #64748b 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-[100rem] px-6 sm:px-10 lg:px-16 xl:px-20">
          {/* Header */}
          <div className="text-center mb-14">
            <BlurFade delay={0.04} inView>
              <div className="mb-4 flex items-center justify-center gap-2">
                <div className="h-px w-8 bg-[#EF9449]" />
                <AnimatedShinyText
                  shimmerWidth={100}
                  className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#EF9449]"
                >
                  Our Team
                </AnimatedShinyText>
                <div className="h-px w-8 bg-[#EF9449]" />
              </div>
            </BlurFade>

            <BlurFade delay={0.08} inView>
              <h2 className="mx-auto mb-3 max-w-2xl text-center text-4xl font-semibold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                Meet the{" "}
                <span className="relative inline-block">
                  <span style={{ color: "#EF9449" }}>builders</span>
                  <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 200 6" preserveAspectRatio="none">
                    <path d="M0 5 Q50 1 100 5 Q150 9 200 5" stroke="#EF9449" strokeWidth="1.8" fill="none" opacity="0.5" />
                  </svg>
                </span>
              </h2>
            </BlurFade>

            <BlurFade delay={0.12} inView>
              <p className="mx-auto max-w-lg text-center text-sm leading-relaxed text-gray-500 dark:text-slate-400">
                World-class engineers, designers, and operators from the best companies in tech.
              </p>
            </BlurFade>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {TEAM.map((member, i) => (
              <TeamCard key={member.name} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Hiring CTA ── */}
      <section className="relative py-20 bg-slate-50 dark:bg-slate-900 overflow-hidden">
        {/* Orange glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-[600px] rounded-full bg-[#EF9449]/[0.06] blur-3xl"
        />
        <div className="relative z-10 mx-auto max-w-[100rem] px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className="mx-auto max-w-xl text-center">
            <BlurFade delay={0.04} inView>
              <div className="mb-4 flex items-center justify-center gap-2">
                <div className="h-px w-8 bg-[#EF9449]" />
                <AnimatedShinyText
                  shimmerWidth={100}
                  className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#EF9449]"
                >
                  We&apos;re Hiring
                </AnimatedShinyText>
                <div className="h-px w-8 bg-[#EF9449]" />
              </div>
            </BlurFade>

            <BlurFade delay={0.08} inView>
              <h2 className="mb-3 text-3xl font-semibold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Join us and build{" "}
                <span className="relative inline-block">
                  <span style={{ color: "#EF9449" }}>something big</span>
                  <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 200 6" preserveAspectRatio="none">
                    <path d="M0 5 Q50 1 100 5 Q150 9 200 5" stroke="#EF9449" strokeWidth="1.8" fill="none" opacity="0.5" />
                  </svg>
                </span>
              </h2>
            </BlurFade>

            <BlurFade delay={0.12} inView>
              <p className="mb-8 text-sm leading-relaxed text-gray-500 dark:text-slate-400">
                We&apos;re hiring across engineering, design, and GTM.
                Fully remote. Competitive compensation. Backed by top investors.
              </p>
            </BlurFade>

            <BlurFade delay={0.16} inView>
              <button
                className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #EF9449 0%, #f59e0b 100%)",
                  boxShadow: "0 4px 24px #EF944940",
                }}
              >
                View open roles
                <ArrowRight className="h-4 w-4" />
              </button>
            </BlurFade>
          </div>
        </div>
      </section>
    </>
  );
}
