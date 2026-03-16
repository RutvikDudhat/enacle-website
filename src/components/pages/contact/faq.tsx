"use client";
import { useState } from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQS = [
  {
    q: "How quickly will someone reply to my message?",
    a: "Our team responds to every message within 24 hours on business days. Enterprise and Sales enquiries are typically answered within 2 hours during business hours (IST / PST).",
  },
  {
    q: "I need a live demo — how do I book one?",
    a: "Select 'Enterprise Demo' as your topic in the contact form and include your company size. Our sales team will reach out within a few hours to schedule a personalised walkthrough.",
  },
  {
    q: "Can I call Yash or Meet directly?",
    a: "Yes — their direct numbers are listed on this page. They're available Mon–Fri 9 AM–7 PM IST for Enterprise discussions, technical questions, and partnership conversations.",
  },
  {
    q: "I'm having a technical issue — where should I go?",
    a: "For urgent technical issues, email support@enacle.com or use the in-app chat (bottom-right corner). For API and integration questions, reach Meet directly at meet@enacle.com.",
  },
  {
    q: "Do you offer custom Enterprise contracts?",
    a: "Absolutely. We offer custom pricing, SLAs, data residency options, SSO, and dedicated account management for Enterprise customers. Use the contact form with topic 'Enterprise Demo' to get started.",
  },
  {
    q: "I want to integrate my product with Enacle — who do I talk to?",
    a: "Email partners@enacle.com with a brief description of your product and the integration you have in mind. Our partnerships team reviews every submission and responds within 3 business days.",
  },
  {
    q: "Where is Enacle headquartered?",
    a: "Our headquarters is in Surat, Gujarat, India. We also have remote teams in San Francisco and London, and team members distributed across 22+ countries.",
  },
  {
    q: "Is Enacle hiring?",
    a: "Yes! We're actively hiring across Engineering, Product, Design, and Sales. Visit our Careers page to see all open roles and apply directly.",
  },
];

export function ContactFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative bg-white dark:bg-[#080d1a] py-24 overflow-hidden">
      {/* Subtle dot grid */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_40%,transparent_100%)] opacity-40" />

      <div className="relative z-10 mx-auto max-w-350 px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 xl:gap-20 items-start">

          {/* Left — label + heading */}
          <div className="lg:col-span-2">
            <BlurFade>
              <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: "#7B68EE" }}>FAQ</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0f172a] dark:text-white mb-4 leading-snug">
                Common questions, answered
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                Can&apos;t find what you&apos;re looking for? Reach out via the form above or email us at{" "}
                <a href="mailto:hello@enacle.com" className="font-semibold hover:underline" style={{ color: "#7B68EE" }}>
                  hello@enacle.com
                </a>
              </p>

              {/* Response promise card */}
              <div className="rounded-2xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/30 p-5 relative overflow-hidden">
                <BorderBeam size={200} duration={12} colorFrom="#10b981" colorTo="#7B68EE" />
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">Our Promise</span>
                </div>
                <p className="text-sm font-bold text-zinc-900 dark:text-white mb-1">We reply within 24 hours</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-snug">
                  Every message gets a real, thoughtful response from our team — not a bot, not a template.
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
                  <div className={`rounded-2xl border overflow-hidden transition-all duration-200 ${isOpen ? "border-[#7B68EE]/40 dark:border-[#7B68EE]/40 shadow-sm shadow-violet-100/50 dark:shadow-violet-950/30" : "border-zinc-200 dark:border-slate-700"} bg-white dark:bg-slate-900 relative`}>
                    {isOpen && <BorderBeam size={300} duration={10} colorFrom="#7B68EE" colorTo="#FD71AF" />}

                    <button
                      className="w-full flex items-start justify-between gap-4 px-5 py-4 text-left"
                      onClick={() => setOpen(isOpen ? null : i)}
                    >
                      <span className={`text-sm font-bold leading-snug transition-colors ${isOpen ? "text-[#7B68EE]" : "text-zinc-900 dark:text-white"}`}>
                        {faq.q}
                      </span>
                      <span className={`shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-colors mt-0.5 ${isOpen ? "bg-violet-100 dark:bg-violet-950/60" : "bg-zinc-100 dark:bg-slate-800"}`}>
                        {isOpen
                          ? <ChevronUp className="h-4 w-4" style={{ color: "#7B68EE" }} />
                          : <ChevronDown className="h-4 w-4 text-zinc-400 dark:text-slate-500" />}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 border-t border-zinc-100 dark:border-slate-800">
                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed pt-4">
                          {faq.a}
                        </p>
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
  );
}
