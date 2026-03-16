"use client";
import { useState } from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { ChevronDown, ChevronUp, ArrowRight, Linkedin, Twitter, Github } from "lucide-react";
import Link from "next/link";

const FAQS = [
  {
    q: "Is there a cost to join the partner program?",
    a: "No — the Registered tier is completely free to join. Silver and Gold tiers are unlocked based on ARR sourced, not by paying a fee.",
  },
  {
    q: "How and when do I get paid my commissions?",
    a: "Commissions are calculated monthly and paid out within the first 10 business days of the following month via bank transfer or Stripe. You can track everything in real-time in your partner dashboard.",
  },
  {
    q: "Can I partner with Enacle if I'm based outside India or the US?",
    a: "Yes — our partner network spans 22+ countries. We accept applications from any country and support payouts in most major currencies.",
  },
  {
    q: "What is deal registration and why does it matter?",
    a: "Deal registration lets you formally claim a prospect you're working. Once registered, we'll protect your pricing and provide co-sell support. It prevents internal conflicts and ensures you get full credit when the deal closes.",
  },
  {
    q: "Do you offer certifications?",
    a: "Yes. Enacle Academy has four certification tracks: Sales, Implementation, Technical, and AI Specialist. Certifications are free for all partners and unlock higher support tiers and deal priority.",
  },
  {
    q: "Can a Technology partner also resell Enacle licences?",
    a: "Absolutely. Many of our ISV partners hold both a Technology and Reseller agreement. You can apply for multiple partnership types under a single account.",
  },
  {
    q: "How long does the application review take?",
    a: "We review every application within 3 business days. If approved, you'll receive your partner portal credentials, onboarding materials, and a kickoff call invite by email.",
  },
];

export function PartnersFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      {/* ── FAQ ── */}
      <section className="relative bg-zinc-50 dark:bg-[#060b18] py-24 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:40px_40px] opacity-50" />

        <div className="relative z-10 mx-auto max-w-350 px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 xl:gap-20 items-start">

            {/* Left */}
            <div className="lg:col-span-2">
              <BlurFade>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600 mb-3">FAQ</p>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0f172a] dark:text-white mb-4 leading-snug">
                  Partner program questions
                </h2>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  Still have questions? Email us at{" "}
                  <a href="mailto:partners@enacle.com" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                    partners@enacle.com
                  </a>
                </p>

                {/* Highlight card */}
                <div className="rounded-2xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/30 p-5 relative overflow-hidden">
                  <BorderBeam size={200} duration={12} colorFrom="#3b82f6" colorTo="#8b5cf6" />
                  <p className="text-xs font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wider mb-2">Quick answer</p>
                  <p className="text-sm font-bold text-zinc-900 dark:text-white mb-1">Free to join. Paid to stay.</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-snug">
                    No upfront fees, no lock-in. Start at the Registered tier and grow into Silver and Gold as your referred revenue grows.
                  </p>
                </div>
              </BlurFade>
            </div>

            {/* Right — accordion */}
            <div className="lg:col-span-3 space-y-3">
              {FAQS.map((faq, i) => {
                const isOpen = open === i;
                return (
                  <BlurFade key={i} delay={i * 0.04}>
                    <div className={`rounded-2xl border overflow-hidden transition-all duration-200 ${isOpen ? "border-blue-300 dark:border-blue-700 shadow-sm" : "border-zinc-200 dark:border-slate-700"} bg-white dark:bg-slate-900 relative`}>
                      {isOpen && <BorderBeam size={300} duration={10} colorFrom="#3b82f6" colorTo="#8b5cf6" />}
                      <button
                        className="w-full flex items-start justify-between gap-4 px-5 py-4 text-left"
                        onClick={() => setOpen(isOpen ? null : i)}
                      >
                        <span className={`text-sm font-bold leading-snug transition-colors ${isOpen ? "text-blue-600 dark:text-blue-400" : "text-zinc-900 dark:text-white"}`}>
                          {faq.q}
                        </span>
                        <span className={`shrink-0 w-7 h-7 rounded-lg flex items-center justify-center mt-0.5 transition-colors ${isOpen ? "bg-blue-100 dark:bg-blue-950/60" : "bg-zinc-100 dark:bg-slate-800"}`}>
                          {isOpen
                            ? <ChevronUp className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                            : <ChevronDown className="h-4 w-4 text-zinc-400 dark:text-slate-500" />}
                        </span>
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5 border-t border-zinc-100 dark:border-slate-800">
                          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed pt-4">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  </BlurFade>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ── Final CTA banner ── */}

      <section className="relative bg-white dark:bg-[#080d1a] py-16 overflow-hidden">
        <div className="relative z-10 mx-auto max-w-350 px-4 sm:px-6 lg:px-8">
          <BlurFade>
            <div className="relative rounded-3xl overflow-hidden bg-linear-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a] border border-slate-700 p-10 sm:p-16 text-center shadow-2xl">
              <BorderBeam size={600} duration={10} colorFrom="#3b82f6" colorTo="#f59e0b" />
              <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-150 h-50 bg-blue-600/20 rounded-full blur-3xl" />
              <div className="pointer-events-none absolute bottom-0 left-1/4 w-75 h-37.5 bg-violet-600/20 rounded-full blur-3xl" />

              <div className="relative z-10">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400 mb-4">Ready to Partner?</p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5 leading-[1.1]">
                  Start growing with Enacle today
                </h2>
                <p className="text-slate-400 text-lg max-w-lg mx-auto mb-8 leading-relaxed">
                  Join 340+ partners earning recurring revenue while helping their clients run smarter businesses.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                  <Link href="#apply">
                    <ShimmerButton
                      background="rgb(59,130,246)"
                      shimmerColor="#ffffff"
                      borderRadius="12px"
                      className="px-7 py-3.5 text-sm font-bold"
                    >
                      Apply Now — It&apos;s Free
                      <ArrowRight className="ml-2 h-4 w-4 inline" />
                    </ShimmerButton>
                  </Link>
                  <a
                    href="mailto:partners@enacle.com"
                    className="text-sm font-semibold text-slate-300 hover:text-white transition-colors underline underline-offset-4"
                  >
                    Or email partners@enacle.com →
                  </a>
                </div>

                <div className="flex items-center justify-center gap-4 pt-8 border-t border-slate-700/60">
                  <span className="text-xs text-slate-500">Follow us</span>
                  {[
                    { icon: Linkedin, href: "https://linkedin.com/company/enacle", label: "LinkedIn" },
                    { icon: Twitter,  href: "https://twitter.com/enacle",          label: "Twitter" },
                    { icon: Github,   href: "https://github.com/enacle",           label: "GitHub" },
                  ].map((s) => (
                    <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer"
                      className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 flex items-center justify-center transition-all">
                      <s.icon className="h-4 w-4 text-slate-400 hover:text-white" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
    </>
  );
}
