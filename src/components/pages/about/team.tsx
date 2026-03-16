"use client";
import { BlurFade } from "@/components/ui/blur-fade";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { motion } from "motion/react";
import { ArrowRight, Twitter, Linkedin } from "lucide-react";

const TEAM = [
  { name: "Arjun Mehta",   role: "CEO & Co-founder",         prev: "Ex-Atlassian · Ex-Google",   initials: "AM", bg: "from-[#7B68EE] to-[#6355d4]",    ring: "ring-[#7B68EE]/30",   card: "bg-violet-50 dark:bg-violet-950/40" },
  { name: "Sofia Reyes",   role: "CTO & Co-founder",         prev: "Ex-Stripe · Ex-OpenAI",      initials: "SR", bg: "from-[#FD71AF] to-[#e05090]",     ring: "ring-[#FD71AF]/30",   card: "bg-pink-50 dark:bg-pink-950/40" },
  { name: "James Park",    role: "VP Product",               prev: "Ex-Linear · Ex-Figma",       initials: "JP", bg: "from-[#49CCF9] to-[#2ba8d4]",     ring: "ring-[#49CCF9]/30",   card: "bg-sky-50 dark:bg-sky-950/40" },
  { name: "Priya Kapoor",  role: "VP Engineering",           prev: "Ex-Notion · Ex-Vercel",      initials: "PK", bg: "from-emerald-400 to-emerald-600",  ring: "ring-emerald-300 dark:ring-emerald-700", card: "bg-emerald-50 dark:bg-emerald-950/40" },
  { name: "Lucas Schmidt", role: "Head of AI Research",      prev: "Ex-Anthropic · Ex-DeepMind", initials: "LS", bg: "from-[#FFC800] to-[#e6a800]",     ring: "ring-[#FFC800]/30",   card: "bg-yellow-50 dark:bg-yellow-950/40" },
  { name: "Anika Osei",    role: "VP Sales",                 prev: "Ex-Salesforce · Ex-HubSpot", initials: "AO", bg: "from-rose-400 to-rose-600",        ring: "ring-rose-300 dark:ring-rose-700",    card: "bg-rose-50 dark:bg-rose-950/40" },
  { name: "Tom Nakamura",  role: "Head of Design",           prev: "Ex-Apple · Ex-Airbnb",       initials: "TN", bg: "from-[#7B68EE] to-[#FD71AF]",     ring: "ring-[#7B68EE]/30",   card: "bg-violet-50 dark:bg-violet-950/40" },
  { name: "Rachel Liu",    role: "Head of Customer Success", prev: "Ex-Zendesk · Ex-Intercom",   initials: "RL", bg: "from-teal-400 to-teal-600",        ring: "ring-teal-300 dark:ring-teal-700",    card: "bg-teal-50 dark:bg-teal-950/40" },
];

const EMOJI_MAP: Record<string, string> = {
  AM: "🧑‍💼", SR: "👩‍💻", JP: "🧑‍🎨", PK: "👩‍🔬", LS: "🧑‍🔬", AO: "👩‍💼", TN: "🧑‍🎤", RL: "👩‍🏫",
};

function TeamCard({ member, index }: { member: typeof TEAM[0]; index: number }) {
  return (
    <BlurFade delay={0.04 * index}>
      <motion.div
        whileHover={{ y: -6, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`group relative rounded-2xl border border-slate-200/70 dark:border-slate-700/50 ${member.card} p-6 flex flex-col items-center text-center overflow-hidden cursor-pointer`}
      >
        {/* Decorative blobs */}
        <div className={`absolute -top-6 -right-6 w-24 h-24 rounded-full bg-linear-to-br ${member.bg} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity duration-500`} />
        <div className={`absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-linear-to-br ${member.bg} opacity-10 blur-xl group-hover:opacity-15 transition-opacity duration-500`} />

        {/* Avatar with emoji */}
        <div className="relative mb-4">
          <div className={`w-20 h-20 rounded-full bg-linear-to-br ${member.bg} flex items-center justify-center ring-4 ${member.ring} shadow-lg`}>
            <span className="text-3xl select-none" role="img">{EMOJI_MAP[member.initials]}</span>
          </div>
          {/* Online dot */}
          <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white dark:border-slate-900 shadow-sm" />
        </div>

        {/* Info */}
        <p className="text-base font-bold text-slate-900 dark:text-white leading-tight">{member.name}</p>
        <p className="text-sm font-medium mt-0.5" style={{ color: "#7B68EE" }}>{member.role}</p>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">{member.prev}</p>

        {/* Social icons */}
        <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-200">
          <button className="w-7 h-7 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 transition-colors shadow-sm hover:text-[#7B68EE] dark:hover:text-[#7B68EE]">
            <Twitter className="h-3 w-3" />
          </button>
          <button className="w-7 h-7 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 transition-colors shadow-sm hover:text-[#7B68EE] dark:hover:text-[#7B68EE]">
            <Linkedin className="h-3 w-3" />
          </button>
        </div>
      </motion.div>
    </BlurFade>
  );
}

export function AboutTeam() {
  return (
    <section className="py-24 bg-white dark:bg-[#080d1a] overflow-hidden">
      <div className="mx-auto max-w-350 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <BlurFade>
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-950/50 px-3.5 py-1.5 mb-5">
              <span className="text-sm font-semibold" style={{ color: "#7B68EE" }}>Our team</span>
            </div>
          </BlurFade>
          <BlurFade delay={0.06}>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0f172a] dark:text-white mb-4">
              Meet the builders
            </h2>
          </BlurFade>
          <BlurFade delay={0.1}>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
              World-class engineers, designers, and operators from the best companies in tech.
            </p>
          </BlurFade>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-14">
          {TEAM.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>

        {/* CTA */}
        <BlurFade delay={0.3}>
          <div className="text-center">
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-5">
              We&apos;re hiring across engineering, design, and GTM.
            </p>
            <ShimmerButton shimmerColor="#FD71AF" background="#292D34" className="rounded-xl px-6 py-3 text-sm font-bold text-white">
              View open roles <ArrowRight className="inline h-4 w-4 ml-1.5" />
            </ShimmerButton>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
