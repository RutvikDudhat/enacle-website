"use client";
import { useState } from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import {
  Send, Loader2, CheckCircle2, Building2, Globe2,
  Users2, DollarSign, ChevronDown,
} from "lucide-react";

const PARTNER_TYPES = ["Reseller", "Technology / ISV", "Consulting / Agency", "Referral"];
const COMPANY_SIZES = ["1–10", "11–50", "51–200", "201–1,000", "1,000+"];
const TIERS = ["Registered (Free)", "Silver ($25k ARR)", "Gold ($100k ARR)"];

const PROCESS = [
  {
    step: "01",
    title: "Apply Online",
    body: "Fill in the application form. We review every submission and respond within 3 business days.",
    color: "text-blue-600",
    bg: "bg-blue-50 dark:bg-blue-950/40",
    border: "border-blue-200 dark:border-blue-800",
  },
  {
    step: "02",
    title: "Partnership Kickoff",
    body: "A 30-min call with your dedicated Partner Success Manager to align on goals and GTM strategy.",
    color: "text-violet-600",
    bg: "bg-violet-50 dark:bg-violet-950/40",
    border: "border-violet-200 dark:border-violet-800",
  },
  {
    step: "03",
    title: "Onboard & Get Certified",
    body: "Complete Enacle Academy training, get certified, and access the full partner portal and deal tools.",
    color: "text-emerald-600",
    bg: "bg-emerald-50 dark:bg-emerald-950/40",
    border: "border-emerald-200 dark:border-emerald-800",
  },
  {
    step: "04",
    title: "Start Earning",
    body: "Register deals, co-sell with our team, and watch recurring commissions hit your dashboard every month.",
    color: "text-amber-600",
    bg: "bg-amber-50 dark:bg-amber-950/40",
    border: "border-amber-200 dark:border-amber-800",
  },
];

/* ── Spotlight partners ── */
const SPOTLIGHTS = [
  {
    name: "Nexus Digital",
    type: "Gold Reseller",
    location: "Mumbai, India",
    quote: "We've added $180k in recurring revenue in under 12 months just from Enacle referrals. The partner team is exceptional.",
    avatar: "ND",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    name: "CloudBridge Consulting",
    type: "Silver Agency",
    location: "London, UK",
    quote: "The co-marketing funds and joint campaigns helped us close 3 Enterprise deals we would never have reached alone.",
    avatar: "CB",
    gradient: "from-blue-600 to-violet-600",
  },
  {
    name: "Synapse Labs",
    type: "Technology ISV",
    location: "San Francisco, US",
    quote: "Our Enacle integration went live in 6 weeks. The marketplace listing drives inbound leads every single week.",
    avatar: "SL",
    gradient: "from-emerald-500 to-cyan-600",
  },
];

type Status = "idle" | "loading" | "success";

export function PartnersApply() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "", email: "", company: "", website: "",
    type: PARTNER_TYPES[0], size: COMPANY_SIZES[1], tier: TIERS[0], message: "",
  });

  const set = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1800));
    setStatus("success");
  };

  return (
    <section className="relative bg-white dark:bg-[#080d1a] py-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_50%,transparent_100%)] opacity-40" />

      <div className="relative z-10 mx-auto max-w-350 px-4 sm:px-6 lg:px-8">

        {/* ── How it works ── */}
        <BlurFade className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: "#7B68EE" }}>How It Works</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0f172a] dark:text-white mb-4">
            Up and earning in 4 steps
          </h2>
        </BlurFade>

        {/* Process timeline */}
        <div className="relative mb-24">
          <div className="hidden lg:block absolute top-8 left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-px bg-linear-to-r from-transparent via-blue-300 dark:via-blue-700 to-transparent" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map((p, i) => (
              <BlurFade key={p.step} delay={i * 0.08}>
                <div className="flex flex-col items-center text-center">
                  <div className={`w-16 h-16 rounded-2xl border-2 ${p.border} ${p.bg} flex items-center justify-center mb-4 shadow-sm`}>
                    <span className={`text-lg font-black ${p.color}`}>{p.step}</span>
                  </div>
                  <h3 className="text-sm font-bold text-zinc-900 dark:text-white mb-2">{p.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{p.body}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>

        {/* ── Partner Spotlights ── */}
        <BlurFade className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600 mb-3">Partner Spotlights</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0f172a] dark:text-white">
            Partners who are winning
          </h2>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-24">
          {SPOTLIGHTS.map((s, i) => (
            <BlurFade key={s.name} delay={i * 0.07}>
              <div className="rounded-2xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 relative overflow-hidden hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-md transition-all duration-200">
                <BorderBeam size={250} duration={12} colorFrom="#3b82f6" colorTo="#8b5cf6" />

                {/* Quote */}
                <div className="mb-5">
                  <span className="text-4xl text-zinc-200 dark:text-slate-700 font-black leading-none">&ldquo;</span>
                  <p className="text-sm text-zinc-700 dark:text-slate-300 leading-relaxed -mt-2">{s.quote}</p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl bg-linear-to-br ${s.gradient} flex items-center justify-center shrink-0`}>
                    <span className="text-xs font-black text-white">{s.avatar}</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-zinc-900 dark:text-white">{s.name}</p>
                    <p className="text-xs text-slate-400 dark:text-slate-500">{s.type} · {s.location}</p>
                  </div>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>

        {/* ── Apply form ── */}
        <div id="apply" className="grid grid-cols-1 lg:grid-cols-5 gap-10 xl:gap-16 items-start">

          {/* Left — info */}
          <div className="lg:col-span-2">
            <BlurFade>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600 mb-3">Apply Now</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0f172a] dark:text-white mb-4 leading-snug">
                Ready to grow with Enacle?
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8">
                Fill in the form and our partner team will review your application and reach out within 3 business days.
              </p>
            </BlurFade>

            {/* Quick stats */}
            <BlurFade delay={0.08}>
              <div className="space-y-3">
                {[
                  { icon: DollarSign, label: "Average partner earns",  value: "$7,200 / year",   color: "text-emerald-600", bg: "bg-emerald-50 dark:bg-emerald-950/30", border: "border-emerald-200 dark:border-emerald-800" },
                  { icon: Users2,     label: "Active partners globally", value: "340+",            color: "text-blue-600",    bg: "bg-blue-50 dark:bg-blue-950/30",    border: "border-blue-200 dark:border-blue-800" },
                  { icon: Globe2,     label: "Countries represented",   value: "22",              color: "text-violet-600",  bg: "bg-violet-50 dark:bg-violet-950/30",  border: "border-violet-200 dark:border-violet-800" },
                  { icon: Building2,  label: "Enterprise deals co-sold", value: "120+ in 2025",   color: "text-amber-600",   bg: "bg-amber-50 dark:bg-amber-950/30",   border: "border-amber-200 dark:border-amber-800" },
                ].map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.label} className={`flex items-center gap-4 rounded-xl border ${stat.border} ${stat.bg} px-4 py-3 relative overflow-hidden`}>
                      <div className={`w-8 h-8 rounded-lg ${stat.bg} border ${stat.border} flex items-center justify-center shrink-0`}>
                        <Icon className={`h-4 w-4 ${stat.color}`} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-slate-500 dark:text-slate-400">{stat.label}</p>
                        <p className={`text-sm font-extrabold ${stat.color}`}>{stat.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </BlurFade>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3">
            <BlurFade delay={0.1}>
              <div className="relative rounded-2xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 overflow-hidden shadow-sm">
                <BorderBeam size={400} duration={12} colorFrom="#7B68EE" colorTo="#FD71AF" />

                {status === "success" ? (
                  <div className="flex flex-col items-center justify-center py-20 px-8 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center mb-5">
                      <CheckCircle2 className="h-8 w-8 text-emerald-500" />
                    </div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Application received!</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xs">
                      We&apos;ll review your application and reach out to{" "}
                      <strong className="text-zinc-700 dark:text-slate-200">{form.email}</strong> within 3 business days.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">

                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { key: "name",  label: "Full Name",   placeholder: "Raj Patel",          type: "text" },
                        { key: "email", label: "Work Email",  placeholder: "raj@company.com",    type: "email" },
                      ].map((f) => (
                        <div key={f.key}>
                          <label className="block text-xs font-bold text-zinc-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
                            {f.label} <span style={{ color: "#7B68EE" }}>*</span>
                          </label>
                          <input
                            required type={f.type} placeholder={f.placeholder}
                            value={form[f.key as keyof typeof form]}
                            onChange={(e) => set(f.key as keyof typeof form, e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-slate-700 bg-zinc-50 dark:bg-slate-800 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#7B68EE]/30 focus:border-[#7B68EE] transition-all"
                          />
                        </div>
                      ))}
                    </div>

                    {/* Company + Website */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { key: "company", label: "Company Name", placeholder: "Acme Corp",        type: "text" },
                        { key: "website", label: "Website",      placeholder: "https://acme.com", type: "url" },
                      ].map((f) => (
                        <div key={f.key}>
                          <label className="block text-xs font-bold text-zinc-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
                            {f.label} <span style={{ color: "#7B68EE" }}>*</span>
                          </label>
                          <input
                            required type={f.type} placeholder={f.placeholder}
                            value={form[f.key as keyof typeof form]}
                            onChange={(e) => set(f.key as keyof typeof form, e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-slate-700 bg-zinc-50 dark:bg-slate-800 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#7B68EE]/30 focus:border-[#7B68EE] transition-all"
                          />
                        </div>
                      ))}
                    </div>

                    {/* Partner Type + Company Size */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { key: "type", label: "Partnership Type", options: PARTNER_TYPES },
                        { key: "size", label: "Company Size",     options: COMPANY_SIZES },
                      ].map((f) => (
                        <div key={f.key}>
                          <label className="block text-xs font-bold text-zinc-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
                            {f.label}
                          </label>
                          <div className="relative">
                            <select
                              value={form[f.key as keyof typeof form]}
                              onChange={(e) => set(f.key as keyof typeof form, e.target.value)}
                              className="w-full appearance-none px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-slate-700 bg-zinc-50 dark:bg-slate-800 text-sm text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#7B68EE]/30 focus:border-[#7B68EE] transition-all pr-9"
                            >
                              {f.options.map((o) => <option key={o}>{o}</option>)}
                            </select>
                            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Desired tier */}
                    <div>
                      <label className="block text-xs font-bold text-zinc-700 dark:text-slate-300 mb-2 uppercase tracking-wider">
                        Which tier are you aiming for?
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {TIERS.map((t) => (
                          <button
                            key={t} type="button" onClick={() => set("tier", t)}
                            className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all duration-150 ${
                              form.tier === t
                                ? "bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 border-zinc-900 dark:border-white"
                                : "bg-white dark:bg-slate-800 text-zinc-500 dark:text-slate-400 border-zinc-200 dark:border-slate-700 hover:border-zinc-400 dark:hover:border-slate-500"
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-bold text-zinc-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
                        Tell us about your business
                      </label>
                      <textarea
                        rows={4} placeholder="Describe your client base, use case, and what you hope to achieve with Enacle…"
                        value={form.message}
                        onChange={(e) => set("message", e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-slate-700 bg-zinc-50 dark:bg-slate-800 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#7B68EE]/30 focus:border-[#7B68EE] transition-all resize-none"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
                      <p className="text-xs text-slate-400 dark:text-slate-500 max-w-xs leading-relaxed">
                        By applying you agree to our{" "}
                        <a href="/partners/agreement" className="underline hover:text-zinc-600 dark:hover:text-slate-300">Partner Agreement</a>{" "}
                        and{" "}
                        <a href="/privacy" className="underline hover:text-zinc-600 dark:hover:text-slate-300">Privacy Policy</a>.
                      </p>
                      <ShimmerButton
                        background="#292D34"
                        shimmerColor="#FD71AF"
                        borderRadius="12px"
                        className="px-6 py-3 text-sm font-bold shrink-0"
                        type="submit"
                        disabled={status === "loading"}
                      >
                        {status === "loading"
                          ? <><Loader2 className="h-4 w-4 animate-spin inline mr-2" />Submitting…</>
                          : <><Send className="h-4 w-4 inline mr-2" />Submit Application</>}
                      </ShimmerButton>
                    </div>

                  </form>
                )}
              </div>
            </BlurFade>
          </div>

        </div>
      </div>
    </section>
  );
}
