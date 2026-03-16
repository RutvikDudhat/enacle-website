"use client";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import { BorderBeam } from "@/components/ui/border-beam";
import { Marquee } from "@/components/ui/marquee";
import { ArrowRight, BookOpen, Video, FileText, Code2, Star, Zap } from "lucide-react";

const ICON_COLORS = [
  "text-blue-600 bg-blue-50",
  "text-violet-600 bg-violet-50",
  "text-emerald-600 bg-emerald-50",
  "text-amber-600 bg-amber-50",
  "text-rose-600 bg-rose-50",
  "text-indigo-600 bg-indigo-50",
];

const CATEGORIES = [
  { icon: BookOpen, label: "Guides",         count: 48  },
  { icon: Video,    label: "Video tutorials", count: 32  },
  { icon: FileText, label: "Templates",       count: 120 },
  { icon: Code2,    label: "API docs",        count: 200 },
  { icon: Star,     label: "Case studies",    count: 24  },
  { icon: Zap,      label: "Changelog",       count: 0   },
];

const FEATURED = [
  { tag: "Guide",       title: "How to replace Jira and Notion in one afternoon",          read: "8 min" },
  { tag: "Case study",  title: "How Apexflow automated 62% of support tickets with Enacle", read: "5 min" },
  { tag: "Template",    title: "The ultimate sprint planning template for remote teams",    read: "Template" },
  { tag: "Tutorial",    title: "Building your first AI agent: a step-by-step walkthrough",  read: "12 min" },
  { tag: "Guide",       title: "Enacle Brain MAX: everything your team needs to know",      read: "10 min" },
  { tag: "Case study",  title: "How Nomad 10x'd their marketing output with AI agents",     read: "6 min" },
];

export function ResourcesGrid() {
  return (
    <section className="py-24 bg-white dark:bg-[#080d1a]">
      <div className="mx-auto max-w-350 px-4 sm:px-6 lg:px-8">

        {/* Category cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {CATEGORIES.map((cat, i) => (
            <BlurFade key={cat.label} delay={0.04 + i * 0.05}>
              <MagicCard
                className="rounded-xl border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-900 p-5 text-center cursor-pointer relative overflow-hidden h-full hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-sm transition-all"
                gradientColor="#dbeafe"
                gradientOpacity={0.4}
              >
                {i === 1 && <BorderBeam size={150} duration={8} colorFrom="#3b82f6" colorTo="#f59e0b" />}
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3 ${ICON_COLORS[i]}`}>
                  <cat.icon className="h-5 w-5" />
                </div>
                <p className="text-sm font-bold mb-1 text-[#0f172a] dark:text-white">{cat.label}</p>
                {cat.count > 0 && <p className="text-xs text-slate-400">{cat.count} resources</p>}
              </MagicCard>
            </BlurFade>
          ))}
        </div>

        {/* Featured articles */}
        <BlurFade delay={0.3}>
          <h2 className="text-2xl font-extrabold text-zinc-900 dark:text-white mb-8">Featured resources</h2>
        </BlurFade>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {FEATURED.map((item, i) => (
            <BlurFade key={item.title} delay={0.08 + i * 0.06}>
              <div className="rounded-xl border border-zinc-100 dark:border-slate-700 bg-white dark:bg-slate-900 p-5 hover:border-zinc-200 dark:hover:border-slate-600 hover:shadow-sm transition-all cursor-pointer group h-full flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 bg-zinc-100 dark:bg-slate-800 dark:text-slate-400 px-2 py-1 rounded-md">{item.tag}</span>
                  <span className="text-[10px] text-zinc-400">{item.read}</span>
                </div>
                <p className="text-sm font-semibold text-zinc-900 dark:text-white leading-snug flex-1">{item.title}</p>
                <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                  Read more <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            </BlurFade>
          ))}
        </div>

        {/* Marquee quick-links */}
        <BlurFade delay={0.4}>
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">Popular searches</p>
          <Marquee pauseOnHover className="[--duration:28s] [--gap:0.75rem]" repeat={4}>
            {["Sprint planning", "AI agents setup", "Slack integration", "Gantt view", "Time tracking", "API webhooks", "SSO configuration", "Brain MAX prompts", "Dashboard widgets", "Automations 101"].map((tag) => (
              <span key={tag} className="shrink-0 text-xs font-medium px-3 py-1.5 rounded-full border border-zinc-200 dark:border-slate-700 text-zinc-600 dark:text-slate-400 hover:bg-zinc-50 dark:hover:bg-slate-800 cursor-pointer transition-colors">
                {tag}
              </span>
            ))}
          </Marquee>
        </BlurFade>

      </div>
    </section>
  );
}
