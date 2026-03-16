"use client";
import { useState } from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Bell, CheckCircle2, Mail, Slack, Webhook, ArrowRight, Linkedin, Twitter, Github } from "lucide-react";
import Link from "next/link";

const CHANNELS = [
  { icon: Mail,    label: "Email alerts",          desc: "Instant email on incident open & close" },
  { icon: Slack,   label: "Slack notifications",   desc: "Post to any channel via our Slack app" },
  { icon: Webhook, label: "Webhook / PagerDuty",   desc: "Push events to any endpoint or on-call tool" },
  { icon: Bell,    label: "RSS / Atom feed",       desc: "Subscribe with any RSS reader" },
];

const SOCIAL = [
  { label: "Twitter / X",  href: "https://twitter.com/enacle",              Icon: Twitter  },
  { label: "LinkedIn",     href: "https://linkedin.com/company/enacle",      Icon: Linkedin },
  { label: "GitHub",       href: "https://github.com/enacle",               Icon: Github   },
];

export function StatusSubscribe() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <section className="relative bg-zinc-50 dark:bg-[#060b18] py-20 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

        {/* ── Subscribe card ── */}
        <BlurFade>
          <div className="relative rounded-2xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-8 sm:p-10 mb-14 overflow-hidden">
            <BorderBeam size={500} duration={12} colorFrom="#3b82f6" colorTo="#8b5cf6" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

              {/* Left — copy */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 px-3 py-1.5 mb-5">
                  <Bell className="h-3.5 w-3.5 text-blue-500" />
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">Stay Informed</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0f172a] dark:text-white mb-3">
                  Subscribe to status updates
                </h2>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  Get notified the moment an incident is opened or resolved. Choose email, Slack, webhook, or RSS — zero noise, only signal.
                </p>

                {/* Channel icons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {CHANNELS.map((c) => {
                    const CIcon = c.icon;
                    return (
                      <div key={c.label} className="flex items-start gap-3 p-3.5 rounded-xl border border-zinc-200 dark:border-slate-700 bg-zinc-50 dark:bg-slate-800/60">
                        <div className="w-7 h-7 rounded-lg bg-blue-100 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 flex items-center justify-center shrink-0">
                          <CIcon className="h-3.5 w-3.5 text-blue-500" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-zinc-900 dark:text-white">{c.label}</p>
                          <p className="text-[11px] text-slate-400 dark:text-slate-500 leading-snug">{c.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right — email form */}
              <div className="flex flex-col justify-center">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center h-full gap-4 text-center py-10">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center">
                      <CheckCircle2 className="h-7 w-7 text-emerald-500" />
                    </div>
                    <div>
                      <p className="text-lg font-extrabold text-zinc-900 dark:text-white mb-1">You're subscribed!</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">We'll email <strong className="text-zinc-700 dark:text-slate-300">{email}</strong> on any status change.</p>
                    </div>
                    <button
                      onClick={() => { setSubmitted(false); setEmail(""); }}
                      className="text-xs text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                    >
                      Subscribe another address
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-zinc-600 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                        Email address
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        className="w-full rounded-xl border border-zinc-200 dark:border-slate-700 bg-zinc-50 dark:bg-slate-800 text-zinc-900 dark:text-white placeholder:text-slate-400 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      />
                    </div>
                    <ShimmerButton
                      type="submit"
                      background="linear-gradient(135deg, #3b82f6, #8b5cf6)"
                      className="w-full py-3 rounded-xl font-bold text-sm shadow-lg shadow-blue-900/20"
                    >
                      <span className="flex items-center justify-center gap-2">
                        <Bell className="h-4 w-4" />
                        Subscribe to alerts
                      </span>
                    </ShimmerButton>
                    <p className="text-[11px] text-slate-400 dark:text-slate-500 text-center">
                      Unsubscribe any time. We only send status-related emails.
                    </p>
                  </form>
                )}
              </div>

            </div>
          </div>
        </BlurFade>

        {/* ── Final CTA banner ── */}
        <BlurFade delay={0.1}>
          <div className="relative rounded-3xl overflow-hidden bg-linear-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a] border border-white/10 px-8 sm:px-12 py-10 text-center">
            <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-200 h-52 rounded-full bg-blue-600/20 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 right-0 w-100 h-40 rounded-full bg-violet-600/20 blur-3xl" />
            <BorderBeam size={500} duration={14} colorFrom="#3b82f6" colorTo="#8b5cf6" />

            <div className="relative z-10">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-400 mb-3">Questions?</p>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                Need help or have an SLA question?
              </h3>
              <p className="text-slate-400 text-sm mb-7 max-w-lg mx-auto">
                Contact our support team for enterprise SLA details, incident post-mortems, or anything else.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact">
                  <ShimmerButton
                    background="linear-gradient(135deg, #3b82f6, #8b5cf6)"
                    className="px-7 py-3 rounded-xl font-bold text-sm shadow-xl shadow-blue-900/40"
                  >
                    <span className="flex items-center gap-2">
                      Contact support
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </ShimmerButton>
                </Link>
                <a
                  href="https://twitter.com/enacle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-bold text-sm border border-white/20 text-white/80 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all duration-200"
                >
                  <Twitter className="h-4 w-4" />
                  Follow @enacle
                </a>
              </div>
            </div>
          </div>
        </BlurFade>

        {/* Social strip */}
        <BlurFade delay={0.16} className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 px-1">
          <p className="text-xs text-slate-400 dark:text-slate-500 text-center sm:text-left">
            Incident emails: <a href="mailto:status@enacle.io" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">status@enacle.io</a>
          </p>
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-300 dark:text-slate-600">Follow us</span>
            {SOCIAL.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 flex items-center justify-center text-zinc-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-200"
              >
                <Icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </BlurFade>

      </div>
    </section>
  );
}
