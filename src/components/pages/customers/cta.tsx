"use client";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { Particles } from "@/components/ui/particles";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { ArrowRight, CheckCircle2, Linkedin, Twitter, Github } from "lucide-react";
import Link from "next/link";

const BULLETS = [
  "Free 14-day trial, no credit card required",
  "Onboarding call with a product specialist",
  "Cancel or downgrade at any time",
  "SOC 2 Type II & GDPR compliant",
];

const SOCIAL = [
  { label: "Twitter / X",  href: "https://twitter.com/enacle",   Icon: Twitter  },
  { label: "LinkedIn",     href: "https://linkedin.com/company/enacle", Icon: Linkedin },
  { label: "GitHub",       href: "https://github.com/enacle",    Icon: Github   },
];

export function CustomersCTA() {
  return (
    <section className="relative bg-zinc-50 dark:bg-[#060b18] py-24 overflow-hidden">
      {/* Dot grid */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
      <Particles className="absolute inset-0 opacity-25" quantity={50} color="#94a3b8" />

      <div className="relative z-10 mx-auto max-w-350 px-4 sm:px-6 lg:px-8">

        {/* ── Main CTA banner ── */}
        <BlurFade>
          <div className="relative rounded-3xl overflow-hidden bg-linear-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a] border border-white/10 p-12 sm:p-16 text-center shadow-2xl">
            {/* Glow blobs */}
            <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-250 h-64 rounded-full blur-3xl" style={{ background: "rgba(123,104,238,0.2)" }} />
            <div className="pointer-events-none absolute bottom-0 left-0 w-150 h-48 rounded-full blur-3xl" style={{ background: "rgba(253,113,175,0.2)" }} />
            <div className="pointer-events-none absolute bottom-0 right-0 w-125 h-40 rounded-full blur-3xl" style={{ background: "rgba(123,104,238,0.15)" }} />

            <BorderBeam size={600} duration={14} colorFrom="#7B68EE" colorTo="#FD71AF" />

            {/* Content */}
            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 mb-6" style={{ background: "rgba(123,104,238,0.15)", borderColor: "rgba(123,104,238,0.3)" }}>
                <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ background: "#7B68EE" }} />
                <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "#b8b0f5" }}>Start for free today</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-5 leading-[1.05]">
                Join 50,000+ teams <br className="hidden sm:block" />
                <span className="bg-linear-to-r from-[#7B68EE] via-[#FD71AF] to-[#7B68EE] bg-clip-text text-transparent">
                  moving faster with Enacle
                </span>
              </h2>

              <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">
                Start free, invite your team, and see why the world's best teams choose Enacle to work smarter.
              </p>

              {/* Bullets */}
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-10">
                {BULLETS.map((b) => (
                  <div key={b} className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                    {b}
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <ShimmerButton
                  background="linear-gradient(135deg, #7B68EE, #FD71AF)"
                  className="px-8 py-3.5 rounded-xl font-bold text-sm shadow-xl shadow-violet-900/40"
                >
                  <span className="flex items-center gap-2">
                    Get started free
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </ShimmerButton>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm border border-white/20 text-white/80 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all duration-200"
                >
                  Talk to sales
                  <ArrowRight className="h-4 w-4 opacity-60" />
                </Link>
              </div>
            </div>
          </div>
        </BlurFade>

        {/* ── Social + tagline ── */}
        <BlurFade delay={0.15} className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 px-2">
          <p className="text-sm text-slate-500 dark:text-slate-400 text-center sm:text-left">
            Questions? Reach us at{" "}
            <a href="mailto:hello@enacle.io" className="font-semibold hover:underline" style={{ color: "#7B68EE" }}>
              hello@enacle.io
            </a>
          </p>

          <div className="flex items-center gap-4">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-300 dark:text-slate-600">Follow us</span>
            {SOCIAL.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 flex items-center justify-center text-zinc-400 dark:text-slate-500 hover:border-violet-300 dark:hover:border-violet-700 transition-all duration-200 hover:shadow-sm"
                style={{ "--hover-color": "#7B68EE" } as React.CSSProperties}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </BlurFade>

      </div>
    </section>
  );
}
