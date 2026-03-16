"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BlurFade } from "@/components/ui/blur-fade";
import { ChevronDown } from "lucide-react";

const FAQS = [
  { q: "Can I really get all 12 products in one plan?", a: "Yes. Every Enacle plan includes all 12 products — Projects, Chat, Brain MAX, AI Agents, Sprints, Time Tracking, Calendar, Docs, Whiteboards, Automations, Dashboards, and Scheduling. No add-ons, no surprises." },
  { q: "How does the free plan compare to paid?", a: "The free plan supports up to 5 members with unlimited tasks. Paid plans unlock unlimited members, full AI features, more automation runs, and priority support. You can upgrade at any time." },
  { q: "What happens to my data if I downgrade or cancel?", a: "Your data is always yours. If you downgrade, you retain read access for 90 days. If you cancel, you can export everything in standard formats (CSV, JSON, Markdown) before your account closes." },
  { q: "Do you offer discounts for startups or nonprofits?", a: "Yes. We offer 50% off for qualifying early-stage startups and 75% off for registered nonprofits. Contact our sales team with proof of eligibility." },
  { q: "Can I bring my own AI model?", a: "On Business and Enterprise plans, you can connect your own OpenAI, Anthropic, or Azure OpenAI keys. Enterprise customers can fine-tune custom models on their workspace data." },
  { q: "Is there a minimum contract length?", a: "Monthly plans have no minimum commitment. Annual plans are billed once a year at a 25% discount. Enterprise contracts are flexible — contact sales for details." },
];

export function PricingFaq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 bg-slate-50 dark:bg-[#060b18]">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <BlurFade>
          <h2 className="text-4xl font-extrabold text-[#0f172a] dark:text-white text-center mb-14">Frequently asked questions</h2>
        </BlurFade>
        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <BlurFade key={i} delay={0.04 + i * 0.05}>
              <div
                className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 overflow-hidden cursor-pointer shadow-sm hover:border-slate-300 dark:hover:border-slate-600 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <div className="flex items-center justify-between px-5 py-4 gap-4">
                  <span className="text-sm font-semibold text-[#0f172a] dark:text-white">{faq.q}</span>
                  <ChevronDown className={`h-4 w-4 text-slate-400 shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
                </div>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
