"use client";
import { BlurFade } from "@/components/ui/blur-fade";
import { Particles } from "@/components/ui/particles";
import { BorderBeam } from "@/components/ui/border-beam";
import { MessageSquare, Mail, Phone, MapPin, Clock, Zap } from "lucide-react";

const QUICK_LINKS = [
  {
    icon: MessageSquare,
    title: "Sales",
    desc: "Talk to our sales team about plans & pricing",
    color: "text-blue-500",
    bg: "bg-blue-50 dark:bg-blue-950/40",
    border: "border-blue-200 dark:border-blue-800",
    href: "#form",
  },
  {
    icon: Zap,
    title: "Support",
    desc: "Get help with your account or technical issue",
    color: "text-amber-500",
    bg: "bg-amber-50 dark:bg-amber-950/40",
    border: "border-amber-200 dark:border-amber-800",
    href: "#form",
  },
  {
    icon: Mail,
    title: "Partnerships",
    desc: "Integrations, resellers & co-marketing",
    color: "text-violet-500",
    bg: "bg-violet-50 dark:bg-violet-950/40",
    border: "border-violet-200 dark:border-violet-800",
    href: "#form",
  },
  {
    icon: MapPin,
    title: "Press & Media",
    desc: "Interviews, press kits and brand assets",
    color: "text-emerald-500",
    bg: "bg-emerald-50 dark:bg-emerald-950/40",
    border: "border-emerald-200 dark:border-emerald-800",
    href: "#form",
  },
];

export function ContactHero() {
  return (
    <section className="relative bg-white dark:bg-[#080d1a] pt-28 pb-20 overflow-hidden">
      {/* Dot grid */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_60%,transparent_110%)]" />
      {/* Glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-225 h-72 rounded-full blur-3xl" style={{ background: "rgba(123,104,238,0.1)" }} />
      <Particles className="absolute inset-0 opacity-20" quantity={60} color="#94a3b8" />

      <div className="relative z-10 mx-auto max-w-350 px-4 sm:px-6 lg:px-8">

        {/* Badge + headline */}
        <BlurFade className="text-center mb-5">
          <div className="inline-flex items-center gap-2 rounded-full bg-violet-50 dark:bg-violet-950/40 border border-violet-200 dark:border-violet-800 px-3.5 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#7B68EE" }} />
            <span className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: "#7B68EE" }}>Get in touch</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-[#0f172a] dark:text-white mb-4 leading-[1.05]">
            We&apos;d love to<br className="hidden sm:block" />{" "}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #7B68EE, #FD71AF)" }}>
              hear from you
            </span>
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
            Whether you&apos;re evaluating Enacle, need support, or want to partner — our team replies within 24 hours.
          </p>
        </BlurFade>

        {/* Quick-link cards */}
        <BlurFade delay={0.12}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {QUICK_LINKS.map((q) => {
              const Icon = q.icon;
              return (
                <a
                  key={q.title}
                  href={q.href}
                  className={`group rounded-2xl border ${q.border} ${q.bg} p-5 relative overflow-hidden hover:scale-[1.03] hover:shadow-lg transition-all duration-200`}
                >
                  <BorderBeam size={180} duration={12} colorFrom="#7B68EE" colorTo="#FD71AF" />
                  <div className={`w-10 h-10 rounded-xl ${q.bg} border ${q.border} flex items-center justify-center mb-3`}>
                    <Icon className={`h-5 w-5 ${q.color}`} />
                  </div>
                  <p className="text-sm font-bold text-zinc-900 dark:text-white mb-1">{q.title}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-snug">{q.desc}</p>
                </a>
              );
            })}
          </div>
        </BlurFade>

        {/* Response time strip */}
        <BlurFade delay={0.18}>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-sm text-slate-400 dark:text-slate-500">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-emerald-500" />
              <span>Average reply time: <strong className="text-zinc-700 dark:text-slate-300">under 2 hours</strong></span>
            </div>
            <span className="hidden sm:block w-px h-4 bg-zinc-200 dark:bg-slate-700" />
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-blue-500" />
              <span>Enterprise calls available <strong className="text-zinc-700 dark:text-slate-300">same day</strong></span>
            </div>
            <span className="hidden sm:block w-px h-4 bg-zinc-200 dark:bg-slate-700" />
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Support team is <strong className="text-zinc-700 dark:text-slate-300">online now</strong></span>
            </div>
          </div>
        </BlurFade>

      </div>
    </section>
  );
}
