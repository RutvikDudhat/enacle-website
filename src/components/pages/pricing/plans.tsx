"use client";
import { useState } from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import { BorderBeam } from "@/components/ui/border-beam";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { CheckCircle2, Sparkles } from "lucide-react";

const PLANS = [
  {
    name: "Free",
    price: { monthly: 0, annual: 0 },
    desc: "Perfect for individuals and small teams getting started.",
    cta: "Start for free",
    features: [
      "Up to 5 members", "Unlimited tasks & projects", "5 AI agent runs/month",
      "1 GB storage", "100 automations/month", "Community support",
    ],
    highlight: false,
  },
  {
    name: "Pro",
    price: { monthly: 12, annual: 9 },
    desc: "For growing teams that need the full Enacle platform.",
    cta: "Start Pro trial",
    features: [
      "Unlimited members", "All 12 products", "500 AI agent runs/month",
      "Unlimited storage", "10,000 automations/month", "Brain MAX AI included",
      "Priority email support", "Custom workflows",
    ],
    highlight: true,
    badge: "Most popular",
  },
  {
    name: "Business",
    price: { monthly: 19, annual: 15 },
    desc: "Advanced controls and AI for scaling businesses.",
    cta: "Start Business trial",
    features: [
      "Everything in Pro", "Unlimited AI agent runs", "Advanced permissions & RBAC",
      "SSO & SCIM provisioning", "Custom AI model fine-tuning", "Dedicated CSM",
      "99.99% uptime SLA", "Data residency options",
    ],
    highlight: false,
  },
  {
    name: "Enterprise",
    price: { monthly: null, annual: null },
    desc: "Custom contracts, compliance, and dedicated infrastructure.",
    cta: "Contact sales",
    features: [
      "Everything in Business", "Custom AI models & deployment", "On-premise option",
      "Advanced audit logs", "Custom integrations", "24/7 phone support",
      "Dedicated success team", "Custom SLA",
    ],
    highlight: false,
  },
];

export function PricingPlans() {
  const [annual, setAnnual] = useState(true);

  return (
    <section className="py-20 bg-white dark:bg-[#080d1a]">
      <div className="mx-auto max-w-350 px-4 sm:px-6 lg:px-8">

        {/* Toggle */}
        <BlurFade>
          <div className="flex items-center justify-center gap-3 mb-14">
            <span className={`text-sm font-medium ${!annual ? "text-[#0f172a] dark:text-white" : "text-slate-400"}`}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative w-12 h-6 rounded-full transition-colors ${annual ? "bg-[#0f172a] dark:bg-white" : "bg-slate-200 dark:bg-slate-700"}`}
            >
              <div className={`absolute top-1 w-4 h-4 rounded-full transition-all ${annual ? "left-7 bg-white dark:bg-[#0f172a]" : "left-1 bg-white dark:bg-slate-400"}`} />
            </button>
            <span className={`text-sm font-medium ${annual ? "text-[#0f172a] dark:text-white" : "text-slate-400"}`}>
              Annual <span className="ml-1.5 text-[10px] font-bold uppercase tracking-wide bg-[#0f172a] dark:bg-white text-white dark:text-[#0f172a] px-1.5 py-0.5 rounded">Save 25%</span>
            </span>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PLANS.map((plan, i) => (
            <BlurFade key={plan.name} delay={0.06 + i * 0.07}>
              <MagicCard
                className={`rounded-2xl border p-7 relative overflow-hidden h-full flex flex-col ${
                  plan.highlight
                    ? "border-[#0f172a] bg-[#0f172a]"
                    : "border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-900"
                }`}
                gradientColor={plan.highlight ? "#1e3a5f" : "#f8fafc"}
                gradientOpacity={0.6}
              >
                {plan.highlight && <BorderBeam size={300} duration={10} colorFrom="#7B68EE" colorTo="#FD71AF" />}

                {plan.badge && (
                  <div className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest rounded-full px-2.5 py-1 mb-4 w-fit text-white" style={{ background: "linear-gradient(135deg,#7B68EE,#FD71AF)" }}>
                    <Sparkles className="h-3 w-3" /> {plan.badge}
                  </div>
                )}

                <h3 className={`text-lg font-bold mb-1 ${plan.highlight ? "text-white" : "text-[#0f172a] dark:text-white"}`}>{plan.name}</h3>
                <p className={`text-xs leading-relaxed mb-5 ${plan.highlight ? "text-slate-400" : "text-slate-500 dark:text-slate-400"}`}>{plan.desc}</p>

                <div className="mb-6">
                  {plan.price.monthly === null ? (
                    <p className={`text-3xl font-extrabold ${plan.highlight ? "text-white" : "text-[#0f172a] dark:text-white"}`}>Custom</p>
                  ) : plan.price.monthly === 0 ? (
                    <p className={`text-3xl font-extrabold ${plan.highlight ? "text-white" : "text-[#0f172a] dark:text-white"}`}>Free</p>
                  ) : (
                    <div>
                      <span className={`text-3xl font-extrabold ${plan.highlight ? "text-white" : "text-[#0f172a] dark:text-white"}`}>
                        ${annual ? plan.price.annual : plan.price.monthly}
                      </span>
                      <span className="text-sm ml-1 text-slate-400">/seat/mo</span>
                    </div>
                  )}
                </div>

                {plan.highlight ? (
                  <ShimmerButton shimmerColor="#FD71AF" background="#7B68EE" className="rounded-xl w-full py-2.5 text-sm font-bold text-white mb-6">
                    {plan.cta}
                  </ShimmerButton>
                ) : (
                  <button className={`w-full py-2.5 rounded-xl text-sm font-bold border transition-all mb-6 ${
                    plan.name === "Enterprise"
                      ? "border-slate-200 dark:border-slate-700 text-[#0f172a] dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800"
                      : "border-[#0f172a] dark:border-white bg-[#0f172a] dark:bg-white text-white dark:text-[#0f172a] hover:bg-slate-800 dark:hover:bg-slate-100"
                  }`}>
                    {plan.cta}
                  </button>
                )}

                <ul className="space-y-2.5 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className={`h-4 w-4 shrink-0 mt-0.5 ${plan.highlight ? "text-[#FD71AF]" : "text-accent-enacle"}`} />
                      <span className={plan.highlight ? "text-slate-300" : "text-slate-600 dark:text-slate-400"}>{f}</span>
                    </li>
                  ))}
                </ul>
              </MagicCard>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
