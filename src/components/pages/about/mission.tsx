"use client";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import { BorderBeam } from "@/components/ui/border-beam";
import { Target, Eye, Heart } from "lucide-react";

const VALUES = [
  { icon: Target, title: "Mission", body: "To replace the fragmented SaaS stack with a single AI-powered operating system — so every team can focus on what matters, not tool maintenance.", iconBg: "#7B68EE" },
  { icon: Eye,    title: "Vision",  body: "A world where every business, from 2-person startups to Fortune 500 enterprises, runs on one intelligent platform that learns, adapts, and grows with them.", iconBg: "#FFC800" },
  { icon: Heart,  title: "Values",  body: "Customer obsession, radical transparency, ship fast and iterate, hire for craft — these aren't slogans. They're how we make every decision at Enacle.", iconBg: "#FD71AF" },
];

export function AboutMission() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-[#060b18]">
      <div className="mx-auto max-w-350 px-4 sm:px-6 lg:px-8">
        <BlurFade>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0f172a] dark:text-white text-center mb-14">Why we exist</h2>
        </BlurFade>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {VALUES.map((v, i) => (
            <BlurFade key={v.title} delay={0.06 + i * 0.08}>
              <MagicCard
                className="rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-900 p-8 relative overflow-hidden h-full"
                gradientColor="#ede9fe"
                gradientOpacity={0.4}
              >
                <BorderBeam size={220} duration={12} colorFrom="#7B68EE" colorTo="#FD71AF" />
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5" style={{ background: v.iconBg }}>
                  <v.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#0f172a] dark:text-white">{v.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">{v.body}</p>
              </MagicCard>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
