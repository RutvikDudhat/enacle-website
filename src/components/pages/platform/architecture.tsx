"use client";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import { BorderBeam } from "@/components/ui/border-beam";
import { Database, Brain, Zap, GitBranch, BarChart3, Shield } from "lucide-react";

const ICON_COLORS = [
  "bg-violet-50 text-[#7B68EE]",
  "bg-[#49CCF9]/10 text-[#49CCF9]",
  "bg-yellow-50 text-[#FFC800]",
  "bg-emerald-50 text-emerald-600",
  "bg-pink-50 text-[#FD71AF]",
  "bg-rose-50 text-rose-600",
];

const LAYERS = [
  { icon: Brain,     title: "AI Engine",           desc: "Multi-model AI layer with Brain MAX, Agents, and auto-routing between GPT-4o, Claude 3.5, Gemini, and custom fine-tuned models." },
  { icon: Database,  title: "Unified Data Graph",   desc: "Every task, doc, message, and event is indexed in a real-time graph. Query anything across your workspace in milliseconds." },
  { icon: Zap,       title: "Automation Runtime",   desc: "Event-driven workflow engine with sub-100ms trigger latency. Handles millions of automations per day across 200+ integrations." },
  { icon: GitBranch, title: "Collaboration Layer",  desc: "CRDT-based real-time sync for docs, boards, and chat. Works offline-first and reconciles on reconnect without conflicts." },
  { icon: BarChart3, title: "Analytics & Insights", desc: "In-platform BI with streaming aggregations. Build dashboards on live data without exports or ETL pipelines." },
  { icon: Shield,    title: "Trust & Security",     desc: "Zero-trust architecture, end-to-end encryption at rest and in transit, fine-grained RBAC, and enterprise SSO/SCIM." },
];

export function PlatformArchitecture() {
  return (
    <section id="architecture" className="py-28 bg-white dark:bg-[#080d1a]">
      <div className="mx-auto max-w-350 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <BlurFade>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0f172a] dark:text-white mb-4">The architecture behind Enacle</h2>
          </BlurFade>
          <BlurFade delay={0.08}>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">Six converged layers that replace your entire SaaS stack — from AI inference to real-time collaboration.</p>
          </BlurFade>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {LAYERS.map((l, i) => (
            <BlurFade key={l.title} delay={0.05 + i * 0.06}>
              <MagicCard
                className="rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-900 p-7 h-full relative overflow-hidden"
                gradientColor="#ede9fe"
                gradientOpacity={0.5}
              >
                {i % 2 === 0 && <BorderBeam size={220} duration={10} colorFrom="#7B68EE" colorTo="#FD71AF" />}
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${ICON_COLORS[i]}`}>
                  <l.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold mb-2 text-[#0f172a] dark:text-white">{l.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">{l.desc}</p>
              </MagicCard>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
