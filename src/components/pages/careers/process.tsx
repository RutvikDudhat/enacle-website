"use client";
import { BlurFade } from "@/components/ui/blur-fade";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { BorderBeam } from "@/components/ui/border-beam";
import { ArrowRight, Linkedin, Twitter, Github } from "lucide-react";
import Link from "next/link";

const PROCESS = [
  { step: "01", title: "Apply Online",       body: "Submit your application. No cover letter required — we look at work, not words." },
  { step: "02", title: "Intro Call",          body: "30-min chat with your recruiter. We'll tell you everything, you ask us anything." },
  { step: "03", title: "Technical / Work Sample", body: "A realistic, paid work sample — no trick LeetCode puzzles, just real problems." },
  { step: "04", title: "Team Interviews",    body: "3–4 focused conversations with your future colleagues, async-friendly scheduling." },
  { step: "05", title: "Offer & Onboard",    body: "Fast decisions — we won't ghost you. Offer within 48h of final interview." },
];

export function CareersProcess() {
  return (
    <section className="relative bg-zinc-50 dark:bg-[#060b18] py-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:40px_40px] opacity-50" />
      {/* Blue glow top-right */}
      <div className="pointer-events-none absolute top-0 right-0 w-150 h-100 rounded-full blur-3xl" style={{ background: "rgba(123,104,238,0.08)" }} />
      {/* Violet glow bottom-left */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-125 h-75 rounded-full blur-3xl" style={{ background: "rgba(253,113,175,0.08)" }} />

      <div className="relative z-10 mx-auto max-w-350 px-4 sm:px-6 lg:px-8">

        {/* ── Hiring process ── */}
        <BlurFade className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: "#7B68EE" }}>How We Hire</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0f172a] dark:text-white mb-4">
            A process that respects your time
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Transparent, fast, human. From application to offer in under 3 weeks.
          </p>
        </BlurFade>

        <div className="relative mb-24">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-8 left-[calc(10%+40px)] right-[calc(10%+40px)] h-px" style={{ background: "linear-gradient(to right, transparent, #7B68EE, transparent)" }} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {PROCESS.map((p, i) => (
              <BlurFade key={p.step} delay={i * 0.08}>
                <div className="flex flex-col items-center text-center group">
                  {/* Step circle */}
                  <div className="relative w-16 h-16 rounded-2xl bg-white dark:bg-slate-900 border-2 border-violet-200 dark:border-violet-800 flex items-center justify-center mb-4 shadow-sm group-hover:border-[#7B68EE] dark:group-hover:border-[#7B68EE] transition-colors duration-200">
                    <span className="text-lg font-black" style={{ color: "#7B68EE" }}>{p.step}</span>
                  </div>
                  <h3 className="text-sm font-bold text-zinc-900 dark:text-white mb-2 leading-snug">{p.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{p.body}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>

        {/* ── Final CTA banner ── */}
        <BlurFade delay={0.1}>
          <div className="relative rounded-3xl overflow-hidden bg-linear-to-br from-[#0f172a] via-[#1a1040] to-[#0f172a] border border-slate-700 p-10 sm:p-14 text-center shadow-2xl">
            <BorderBeam size={500} duration={12} colorFrom="#7B68EE" colorTo="#FD71AF" />

            {/* Glow blobs */}
            <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-150 h-50 rounded-full blur-3xl" style={{ background: "rgba(123,104,238,0.2)" }} />
            <div className="pointer-events-none absolute bottom-0 left-1/4 w-75 h-37.5 rounded-full blur-3xl" style={{ background: "rgba(253,113,175,0.2)" }} />

            <div className="relative z-10">
              <p className="text-xs font-bold uppercase tracking-[0.25em] mb-4" style={{ color: "#7B68EE" }}>Ready to Apply?</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5 leading-[1.1]">
                Come build something<br className="hidden sm:block" /> that matters
              </h2>
              <p className="text-slate-400 text-lg max-w-lg mx-auto mb-8 leading-relaxed">
                Join a team that ships fast, cares deeply, and is building the software every company will run on.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="#openings">
                  <ShimmerButton
                    background="#7B68EE"
                    shimmerColor="#FD71AF"
                    borderRadius="12px"
                    className="px-7 py-3.5 text-sm font-bold"
                  >
                    See All Open Roles
                    <ArrowRight className="ml-2 h-4 w-4 inline" />
                  </ShimmerButton>
                </Link>
                <a
                  href="mailto:careers@enacle.com"
                  className="text-sm font-semibold text-slate-300 hover:text-white transition-colors underline underline-offset-4"
                >
                  Or reach out directly →
                </a>
              </div>

              {/* Social links */}
              <div className="flex items-center justify-center gap-4 mt-10 pt-8 border-t border-slate-700/60">
                <span className="text-xs text-slate-500 mr-1">Follow us</span>
                {[
                  { icon: Linkedin, href: "https://linkedin.com/company/enacle", label: "LinkedIn" },
                  { icon: Twitter,  href: "https://twitter.com/enacle",          label: "Twitter" },
                  { icon: Github,   href: "https://github.com/enacle",           label: "GitHub" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 flex items-center justify-center transition-all"
                  >
                    <s.icon className="h-4 w-4 text-slate-400 hover:text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </BlurFade>

      </div>
    </section>
  );
}
