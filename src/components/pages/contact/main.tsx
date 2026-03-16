"use client";
import { useState } from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import {
  Send, Phone, Mail, MapPin, Linkedin, Twitter, Github,
  CheckCircle2, Loader2, Building2, Globe2, MessageSquare,
} from "lucide-react";

/* ── Team contacts ─────────────────────────────────── */
const TEAM = [
  {
    name: "Yash Umretiya",
    role: "Co-Founder & CEO",
    phone: "+91 99781 71823",
    email: "yash@enacle.com",
    avatar: "YU",
    color: "#1e40af",
    gradient: "from-blue-600 to-indigo-600",
    linkedin: "https://linkedin.com",
    note: "For Enterprise deals, partnerships & press",
  },
  {
    name: "Meet Dhameliiya",
    role: "Co-Founder & CTO",
    phone: "+91 79840 73378",
    email: "meet@enacle.com",
    avatar: "MD",
    color: "#0f172a",
    gradient: "from-slate-700 to-slate-900",
    linkedin: "https://linkedin.com",
    note: "For technical integrations & platform questions",
  },
];

/* ── Offices ────────────────────────────────────────── */
const OFFICES = [
  {
    city: "Surat, India",
    flag: "🇮🇳",
    address: "HQ — Surat, Gujarat, India",
    type: "Headquarters",
    color: "text-blue-600",
    bg: "bg-blue-50 dark:bg-blue-950/30",
    border: "border-blue-200 dark:border-blue-800",
    hours: "Mon–Fri · 9 AM–7 PM IST",
  },
  {
    city: "San Francisco, US",
    flag: "🇺🇸",
    address: "Remote · San Francisco Bay Area",
    type: "US Office",
    color: "text-violet-600",
    bg: "bg-violet-50 dark:bg-violet-950/30",
    border: "border-violet-200 dark:border-violet-800",
    hours: "Mon–Fri · 9 AM–6 PM PST",
  },
  {
    city: "London, UK",
    flag: "🇬🇧",
    address: "Remote · London, United Kingdom",
    type: "EU Office",
    color: "text-emerald-600",
    bg: "bg-emerald-50 dark:bg-emerald-950/30",
    border: "border-emerald-200 dark:border-emerald-800",
    hours: "Mon–Fri · 9 AM–6 PM GMT",
  },
];

/* ── Topic options ──────────────────────────────────── */
const TOPICS = [
  "Sales & Pricing",
  "Technical Support",
  "Partnership / Integration",
  "Press & Media",
  "Enterprise Demo",
  "General Enquiry",
];

/* ── Form ───────────────────────────────────────────── */
type FormState = "idle" | "loading" | "success" | "error";

export function ContactMain() {
  const [topic, setTopic] = useState(TOPICS[0]);
  const [form, setForm] = useState({ name: "", email: "", company: "", phone: "", message: "" });
  const [status, setStatus] = useState<FormState>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate async submission
    await new Promise((r) => setTimeout(r, 1800));
    setStatus("success");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  return (
    <section id="form" className="relative bg-zinc-50 dark:bg-[#060b18] py-24 overflow-hidden">
      {/* Faint dot grid */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:40px_40px] opacity-50" />
      {/* Glow accents */}
      <div className="pointer-events-none absolute top-0 right-0 w-150 h-100 rounded-full blur-3xl" style={{ background: "rgba(123,104,238,0.08)" }} />
      <div className="pointer-events-none absolute bottom-0 left-0 w-125 h-75 rounded-full blur-3xl" style={{ background: "rgba(253,113,175,0.08)" }} />

      <div className="relative z-10 mx-auto max-w-350 px-4 sm:px-6 lg:px-8">

        {/* ── Grid: form (left) + sidebar (right) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 xl:gap-16 items-start">

          {/* ── Contact Form ── */}
          <div className="lg:col-span-3">
            <BlurFade>
              <p className="text-xs font-bold uppercase tracking-[0.25em] mb-2" style={{ color: "#7B68EE" }}>Send a message</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0f172a] dark:text-white mb-2">
                Let&apos;s start a conversation
              </h2>
              <p className="text-slate-500 dark:text-slate-400 mb-8 text-sm leading-relaxed">
                Fill in the form and the right person on our team will get back to you within 24 hours.
              </p>
            </BlurFade>

            <BlurFade delay={0.08}>
              <div className="relative rounded-2xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 overflow-hidden shadow-sm">
                <BorderBeam size={400} duration={12} colorFrom="#7B68EE" colorTo="#FD71AF" />

                {status === "success" ? (
                  /* ── Success state ── */
                  <div className="flex flex-col items-center justify-center py-20 px-8 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center mb-5">
                      <CheckCircle2 className="h-8 w-8 text-emerald-500" />
                    </div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Message sent!</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xs">
                      We&apos;ve received your message and will reply to <strong className="text-zinc-700 dark:text-slate-200">{form.email}</strong> within 24 hours.
                    </p>
                    <button
                      onClick={() => { setStatus("idle"); setForm({ name: "", email: "", company: "", phone: "", message: "" }); }}
                      className="mt-6 text-xs font-semibold hover:underline underline-offset-4" style={{ color: "#7B68EE" }}
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">

                    {/* Topic selector */}
                    <div>
                        <label className="block text-xs font-bold text-zinc-700 dark:text-slate-300 mb-2 uppercase tracking-wider">
                          What can we help with?
                        </label>
                      <div className="flex flex-wrap gap-2">
                        {TOPICS.map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setTopic(t)}
                            className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all duration-150 ${
                              topic === t
                                ? "bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 border-zinc-900 dark:border-white"
                                : "bg-white dark:bg-slate-800 text-zinc-500 dark:text-slate-400 border-zinc-200 dark:border-slate-700 hover:border-zinc-400 dark:hover:border-slate-500"
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-zinc-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
                          Full Name <span style={{ color: "#7B68EE" }}>*</span>
                        </label>
                        <input
                          required name="name" type="text" placeholder="Raj Patel"
                          value={form.name} onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-slate-700 bg-zinc-50 dark:bg-slate-800 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#7B68EE]/30 focus:border-[#7B68EE] dark:focus:border-[#7B68EE] transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-zinc-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
                          Work Email <span style={{ color: "#7B68EE" }}>*</span>
                        </label>
                        <input
                          required name="email" type="email" placeholder="raj@company.com"
                          value={form.email} onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-slate-700 bg-zinc-50 dark:bg-slate-800 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#7B68EE]/30 focus:border-[#7B68EE] dark:focus:border-[#7B68EE] transition-all"
                        />
                      </div>
                    </div>

                    {/* Company + Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-zinc-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
                          Company
                        </label>
                        <input
                          name="company" type="text" placeholder="Acme Corp"
                          value={form.company} onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-slate-700 bg-zinc-50 dark:bg-slate-800 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#7B68EE]/30 focus:border-[#7B68EE] dark:focus:border-[#7B68EE] transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-zinc-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
                          Phone Number
                        </label>
                        <input
                          name="phone" type="tel" placeholder="+91 98765 43210"
                          value={form.phone} onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-slate-700 bg-zinc-50 dark:bg-slate-800 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#7B68EE]/30 focus:border-[#7B68EE] dark:focus:border-[#7B68EE] transition-all"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-bold text-zinc-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
                        Message <span style={{ color: "#7B68EE" }}>*</span>
                      </label>
                      <textarea
                        required name="message" rows={5}
                        placeholder="Tell us about your team, use case, or question…"
                        value={form.message} onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-slate-700 bg-zinc-50 dark:bg-slate-800 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#7B68EE]/30 focus:border-[#7B68EE] dark:focus:border-[#7B68EE] transition-all resize-none"
                      />
                    </div>

                    {/* Privacy note + submit */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
                      <p className="text-xs text-slate-400 dark:text-slate-500 leading-relaxed max-w-xs">
                        We&apos;ll never share your info. By submitting you agree to our{" "}
                        <a href="/privacy" className="underline hover:text-zinc-600 dark:hover:text-slate-300">Privacy Policy</a>.
                      </p>
                      <ShimmerButton
                        background="rgb(9,9,11)"
                        shimmerColor="#ffffff"
                        borderRadius="12px"
                        className="px-6 py-3 text-sm font-bold shrink-0 disabled:opacity-60"
                        type="submit"
                        disabled={status === "loading"}
                      >
                        {status === "loading" ? (
                          <><Loader2 className="h-4 w-4 animate-spin inline mr-2" />Sending…</>
                        ) : (
                          <><Send className="h-4 w-4 inline mr-2" />Send Message</>
                        )}
                      </ShimmerButton>
                    </div>

                  </form>
                )}
              </div>
            </BlurFade>
          </div>

          {/* ── Sidebar: team + offices ── */}
          <div className="lg:col-span-2 space-y-8">

            {/* Direct contacts */}
            <BlurFade delay={0.1}>
              <p className="text-xs font-bold uppercase tracking-[0.25em] mb-4" style={{ color: "#7B68EE" }}>Direct Contacts</p>
              <div className="space-y-4">
                {TEAM.map((person) => (
                  <div
                    key={person.name}
                    className="rounded-2xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-5 relative overflow-hidden hover:border-[#7B68EE]/40 dark:hover:border-[#7B68EE]/40 hover:shadow-md transition-all duration-200"
                  >
                    <BorderBeam size={200} duration={14} colorFrom="#7B68EE" colorTo="#FD71AF" />
                    <div className="flex items-start gap-4">
                      {/* Avatar */}
                      <div className={`shrink-0 w-12 h-12 rounded-xl bg-linear-to-br ${person.gradient} flex items-center justify-center shadow-sm`}>
                        <span className="text-sm font-black text-white">{person.avatar}</span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-bold text-zinc-900 dark:text-white leading-tight">{person.name}</p>
                        <p className="text-xs font-semibold mb-1" style={{ color: "#7B68EE" }}>{person.role}</p>
                        <p className="text-xs text-slate-400 dark:text-slate-500 leading-snug mb-3">{person.note}</p>

                        {/* Contact actions */}
                        <div className="flex flex-col gap-1.5">
                          <a
                            href={`tel:${person.phone.replace(/\s/g, "")}`}
                            className="flex items-center gap-2 text-xs font-semibold text-zinc-700 dark:text-slate-300 hover:text-[#7B68EE] dark:hover:text-[#7B68EE] transition-colors group"
                          >
                            <span className="w-6 h-6 rounded-lg bg-zinc-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-violet-50 dark:group-hover:bg-violet-950/40 transition-colors">
                              <Phone className="h-3 w-3" />
                            </span>
                            {person.phone}
                          </a>
                          <a
                            href={`mailto:${person.email}`}
                            className="flex items-center gap-2 text-xs font-semibold text-zinc-700 dark:text-slate-300 hover:text-[#7B68EE] dark:hover:text-[#7B68EE] transition-colors group"
                          >
                            <span className="w-6 h-6 rounded-lg bg-zinc-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-violet-50 dark:group-hover:bg-violet-950/40 transition-colors">
                              <Mail className="h-3 w-3" />
                            </span>
                            {person.email}
                          </a>
                          <a
                            href={person.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-xs font-semibold text-zinc-700 dark:text-slate-300 hover:text-[#7B68EE] dark:hover:text-[#7B68EE] transition-colors group"
                          >
                            <span className="w-6 h-6 rounded-lg bg-zinc-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-violet-50 dark:group-hover:bg-violet-950/40 transition-colors">
                              <Linkedin className="h-3 w-3" />
                            </span>
                            LinkedIn Profile
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </BlurFade>

            {/* Email channels */}
            <BlurFade delay={0.15}>
              <p className="text-xs font-bold uppercase tracking-[0.25em] mb-4" style={{ color: "#7B68EE" }}>Email Channels</p>
              <div className="rounded-2xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 divide-y divide-zinc-100 dark:divide-slate-800 overflow-hidden relative">
                <BorderBeam size={250} duration={14} colorFrom="#7B68EE" colorTo="#FD71AF" />
                {[
                  { icon: MessageSquare, label: "General",      email: "hello@enacle.com",        color: "text-blue-500",   bg: "bg-blue-50 dark:bg-blue-950/40" },
                  { icon: Building2,     label: "Sales",         email: "sales@enacle.com",        color: "text-violet-500", bg: "bg-violet-50 dark:bg-violet-950/40" },
                  { icon: Globe2,        label: "Partnerships",  email: "partners@enacle.com",     color: "text-emerald-500",bg: "bg-emerald-50 dark:bg-emerald-950/40" },
                  { icon: Mail,          label: "Press",         email: "press@enacle.com",        color: "text-amber-500",  bg: "bg-amber-50 dark:bg-amber-950/40" },
                ].map((ch) => {
                  const Icon = ch.icon;
                  return (
                    <a
                      key={ch.label}
                      href={`mailto:${ch.email}`}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-zinc-50 dark:hover:bg-slate-800/60 transition-colors"
                    >
                      <span className={`w-7 h-7 rounded-lg ${ch.bg} flex items-center justify-center shrink-0`}>
                        <Icon className={`h-3.5 w-3.5 ${ch.color}`} />
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-zinc-700 dark:text-slate-300">{ch.label}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 truncate">{ch.email}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </BlurFade>

            {/* Social */}
            <BlurFade delay={0.2}>
              <p className="text-xs font-bold uppercase tracking-[0.25em] mb-4" style={{ color: "#7B68EE" }}>Follow Us</p>
              <div className="flex gap-3">
                {[
                  { icon: Linkedin, href: "https://linkedin.com/company/enacle", label: "LinkedIn", color: "hover:bg-blue-600" },
                  { icon: Twitter,  href: "https://twitter.com/enacle",          label: "Twitter",  color: "hover:bg-sky-500" },
                  { icon: Github,   href: "https://github.com/enacle",           label: "GitHub",   color: "hover:bg-zinc-700 dark:hover:bg-zinc-600" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-semibold text-zinc-600 dark:text-slate-400 ${s.color} hover:text-white hover:border-transparent transition-all duration-200`}
                  >
                    <s.icon className="h-3.5 w-3.5" />
                    {s.label}
                  </a>
                ))}
              </div>
            </BlurFade>

          </div>
        </div>

        {/* ── Offices ── */}
        <div className="mt-20">
          <BlurFade className="mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-2" style={{ color: "#7B68EE" }}>Our Offices</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0f172a] dark:text-white">
              Find us around the world
            </h2>
          </BlurFade>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {OFFICES.map((o, i) => (
              <BlurFade key={o.city} delay={i * 0.07}>
                <div className={`rounded-2xl border ${o.border} ${o.bg} p-6 relative overflow-hidden hover:shadow-md hover:scale-[1.02] transition-all duration-200`}>
                  <BorderBeam size={200} duration={12} colorFrom="#7B68EE" colorTo="#FD71AF" />
                  <div className="flex items-start gap-3 mb-4">
                    <span className="text-3xl">{o.flag}</span>
                    <div>
                      <p className={`text-xs font-bold uppercase tracking-wider ${o.color} mb-0.5`}>{o.type}</p>
                      <p className="text-base font-extrabold text-zinc-900 dark:text-white">{o.city}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <MapPin className="h-3.5 w-3.5 mt-0.5 shrink-0 text-slate-400" />
                      <span>{o.address}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>{o.hours}</span>
                    </div>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
