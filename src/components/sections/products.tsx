"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { BlurFade } from "@/components/ui/blur-fade";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import {
  Brain, Bot, GitBranch, Clock, Calendar, FileText,
  LayoutGrid, Zap, BarChart3, Target, MessageSquare, Layers,
  ArrowRight, Sparkles, Users, HeadphonesIcon,
  Database, Code2, Mail, CheckSquare, Map, Inbox, List,
  PenTool, BookOpen, Search, Bell, Tag, Timer, Award,
  Flag, ChevronRight,
} from "lucide-react";

const FEATURED = [
  { slug: "projects", name: "Projects", color: "from-violet-500/15 via-purple-500/8 to-transparent", border: "border-violet-200/70 dark:border-violet-800/40", accent: "#7B68EE", icon: Layers, iconBg: "#7B68EE", mockupId: "projects" },
  { slug: "docs",     name: "Docs",     color: "from-[#49CCF9]/15 via-sky-500/8 to-transparent", border: "border-sky-200/70 dark:border-sky-800/40", accent: "#49CCF9", icon: FileText, iconBg: "#49CCF9", mockupId: "docs" },
  { slug: "brain",    name: "Brain",    color: "from-[#FD71AF]/15 via-pink-500/8 to-transparent", border: "border-pink-200/70 dark:border-pink-800/40", accent: "#FD71AF", icon: Brain, iconBg: "#FD71AF", mockupId: "brain" },
  { slug: "chat",     name: "Chat",     color: "from-[#FFC800]/15 via-yellow-500/8 to-transparent", border: "border-yellow-200/70 dark:border-yellow-800/40", accent: "#FFC800", icon: MessageSquare, iconBg: "#FFC800", mockupId: "chat" },
];

function ProductsMockup({ id }: { id: string }) {
  if (id === "projects") return (
    <div className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-lg overflow-hidden text-[10px]">
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60">
        <span className="w-2 h-2 rounded-full bg-red-400" /><span className="w-2 h-2 rounded-full bg-amber-400" /><span className="w-2 h-2 rounded-full bg-green-400" />
        <span className="ml-2 font-bold text-slate-500 dark:text-slate-400">Sprint Board</span>
      </div>
      <div className="p-3 space-y-1.5">
        {[
          { label: "Design system update", tag: "In Progress", tc: "bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300", av: "SC", ag: "from-blue-500 to-indigo-600" },
          { label: "API rate limiting",    tag: "Review",      tc: "bg-amber-100 text-amber-700 dark:bg-amber-900/60 dark:text-amber-300", av: "MK", ag: "from-amber-500 to-orange-500" },
          { label: "Mobile push notifs",   tag: "Done",        tc: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300", av: "JL", ag: "from-emerald-500 to-teal-600" },
        ].map((row) => (
          <div key={row.label} className="flex items-center justify-between gap-2 p-1.5 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors">
            <div className="flex items-center gap-2 min-w-0">
              <span className="w-3.5 h-3.5 rounded border-2 border-slate-300 dark:border-slate-600 shrink-0" />
              <span className="truncate text-slate-700 dark:text-slate-300 font-medium">{row.label}</span>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              <span className={`px-1.5 py-0.5 rounded-full font-bold ${row.tc}`}>{row.tag}</span>
              <span className={`w-5 h-5 rounded-full bg-linear-to-br ${row.ag} flex items-center justify-center text-[8px] font-black text-white`}>{row.av}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  if (id === "docs") return (
    <div className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-lg overflow-hidden text-[10px]">
      <div className="flex items-center justify-between px-3 py-2 border-b border-slate-100 dark:border-slate-800">
        <span className="font-bold text-slate-700 dark:text-slate-200">Convergence Brief</span>
        <span className="px-1.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 font-bold">Live</span>
      </div>
      <div className="p-3 space-y-2">
        <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-700 w-full" />
        <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-700 w-4/5" />
        <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-700 w-3/5" />
        <div className="flex gap-2 mt-2.5">
          <span className="px-2 py-1 rounded-lg bg-teal-50 dark:bg-teal-900/40 border border-teal-200 dark:border-teal-700 text-teal-700 dark:text-teal-300 font-bold">✦ AI Draft</span>
          <span className="px-2 py-1 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 font-semibold">Share</span>
        </div>
      </div>
    </div>
  );
  if (id === "brain") return (
    <div className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-lg overflow-hidden text-[10px]">
      <div className="px-3 py-2 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 font-bold text-slate-500 dark:text-slate-400">
        What did I miss last week?
      </div>
      <div className="p-3 space-y-2">
        <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <Search className="h-3 w-3 text-slate-400" />
          <span className="text-slate-400 dark:text-slate-500">Search workspace...</span>
        </div>
        <div className="flex items-center gap-2 p-1.5 rounded-lg bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800">
          <span className="w-4 h-4 rounded bg-violet-600 flex items-center justify-center text-white font-black text-[8px]">✦</span>
          <span className="text-violet-700 dark:text-violet-300 font-semibold">3 sprint items need review</span>
        </div>
        <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
          <span className="text-amber-600">⚡</span>
          <span className="text-amber-700 dark:text-amber-300 font-semibold text-[9px]">OOH Campaign — IN PROGRESS</span>
        </div>
      </div>
    </div>
  );
  return (
    <div className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-lg overflow-hidden text-[10px]">
      <div className="p-3 space-y-2.5">
        <div className="flex items-end gap-2">
          <span className="w-5 h-5 rounded-full bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-[7px] font-black text-white shrink-0">SK</span>
          <div className="px-2.5 py-1.5 rounded-xl rounded-bl-none font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200">Sprint review moved to 3pm</div>
        </div>
        <div className="flex items-end gap-2 flex-row-reverse">
          <span className="w-5 h-5 rounded-full bg-linear-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-[7px] font-black text-white shrink-0">YU</span>
          <div className="px-2.5 py-1.5 rounded-xl rounded-br-none font-medium bg-sky-500 text-white">On it — updating the board 👍</div>
        </div>
        <div className="flex items-center gap-1.5 mt-1">
          {["🚀", "💬", "👀"].map((e) => (
            <span key={e} className="px-1.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-[10px]">{e}</span>
          ))}
          <span className="text-[9px] text-slate-400 ml-1">16 · 5 · 2</span>
        </div>
      </div>
    </div>
  );
}

const GRID_ITEMS = [
  { icon: CheckSquare,    name: "Tasks"            },
  { icon: Search,         name: "Connected Search" },
  { icon: GitBranch,      name: "Sprints"          },
  { icon: BookOpen,       name: "Mind Maps"        },
  { icon: FileText,       name: "Wikis"            },
  { icon: Brain,          name: "AI Notetaker"     },
  { icon: Calendar,       name: "Calendar"         },
  { icon: PenTool,        name: "Proofing"         },
  { icon: Award,          name: "Portfolios"       },
  { icon: LayoutGrid,     name: "Templates"        },
  { icon: Bell,           name: "Reminders"        },
  { icon: BarChart3,      name: "Reporting"        },
  { icon: Flag,           name: "Goals"            },
  { icon: Target,         name: "Custom Status"    },
  { icon: Bot,            name: "AI Writer"        },
  { icon: Code2,          name: "API Calls"        },
  { icon: Map,            name: "Milestones"       },
  { icon: List,           name: "Forms"            },
  { icon: Zap,            name: "Automations"      },
  { icon: Database,       name: "Custom Fields"    },
  { icon: Timer,          name: "Timesheets"       },
  { icon: Brain,          name: "AI Q&A"           },
  { icon: Target,         name: "Priorities"       },
  { icon: Clock,          name: "Time Estimates"   },
  { icon: Mail,           name: "Emails"           },
  { icon: BarChart3,      name: "Dashboards"       },
  { icon: Timer,          name: "Time Tracking"    },
  { icon: Tag,            name: "Tags"             },
  { icon: HeadphonesIcon, name: "24/7 Support"     },
  { icon: CheckSquare,    name: "Checklists"       },
  { icon: Calendar,       name: "Scheduling"       },
  { icon: LayoutGrid,     name: "Spreadsheets"     },
  { icon: LayoutGrid,     name: "Whiteboards"      },
  { icon: Map,            name: "Gantt Charts"     },
  { icon: Map,            name: "Roadmaps"         },
  { icon: Inbox,          name: "Inbox"            },
  { icon: Users,          name: "Teams"            },
  { icon: CheckSquare,    name: "Checklists"       },
];

function GridItem({ item, index }: { item: (typeof GRID_ITEMS)[0]; index: number }) {
  const Icon = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.2, delay: Math.min(index * 0.015, 0.36) }}
      whileHover={{ y: -3, scale: 1.07, transition: { type: "spring", stiffness: 360, damping: 20 } }}
      className="flex flex-col items-center justify-center gap-2 p-3 sm:p-4 border-r border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-[#080d1a] hover:bg-violet-50/60 dark:hover:bg-violet-950/20 hover:border-violet-100 dark:hover:border-violet-900/50 transition-all duration-150 cursor-pointer group aspect-square min-h-[72px]"
    >
      <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-slate-300 dark:text-slate-600 group-hover:text-accent-enacle dark:group-hover:text-accent-enacle transition-colors duration-150" strokeWidth={1.5} />
      <span className="text-[10px] sm:text-[11px] font-semibold text-slate-400 dark:text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-200 text-center leading-tight transition-colors duration-150 px-1">
        {item.name}
      </span>
    </motion.div>
  );
}

export function Products() {
  return (
    <section className="py-28 bg-white dark:bg-[#080d1a] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <BlurFade>
            <div className="mb-4 flex items-center justify-center gap-2">
              <div className="h-px w-8 bg-[#EF9449]" />
              <AnimatedShinyText shimmerWidth={100} className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#EF9449]">
                All Products
              </AnimatedShinyText>
              <div className="h-px w-8 bg-[#EF9449]" />
            </div>
          </BlurFade>
          <BlurFade delay={0.08}>
            <h2 className="mx-auto mb-3 max-w-2xl text-center text-4xl font-semibold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              Every tool your team needs.{" "}
              <span className="relative inline-block">
                <span style={{ color: "#EF9449" }}>One subscription.</span>
                <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 200 6" preserveAspectRatio="none">
                  <path d="M0 5 Q50 1 100 5 Q150 9 200 5" stroke="#EF9449" strokeWidth="1.8" fill="none" opacity="0.5" />
                </svg>
              </span>
            </h2>
          </BlurFade>
          <BlurFade delay={0.14}>
            <p className="mx-auto mb-4 max-w-2xl text-center text-sm leading-relaxed text-gray-500 dark:text-slate-400">
              25+ fully integrated products sharing one AI brain — from project management and CRM to dashboards, docs, and beyond.
            </p>
          </BlurFade>
        </div>

      

        {/* ── Full ClickUp-style feature icon grid ── */}
        <BlurFade delay={0.26}>
          <div className=" dark:border-slate-800 ">


            {/* Icon grid — border-t + border-l on wrapper; each cell adds border-r + border-b */}
            <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9  dark:border-slate-800">
              {GRID_ITEMS.map((item, i) => (
                <GridItem key={`${item.name}-${i}`} item={item} index={i} />
              ))}

              
            </div>

          </div>
        </BlurFade>

      </div>
    </section>
  );
}
