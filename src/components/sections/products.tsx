"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { BlurFade } from "@/components/ui/blur-fade";
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
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-950/50 px-3.5 py-1.5 mb-5">
              <Sparkles className="h-3.5 w-3.5" style={{ color: "#7B68EE" }} />
              <span className="text-sm font-semibold" style={{ color: "#7B68EE" }}>All Products</span>
            </div>
          </BlurFade>
          <BlurFade delay={0.08}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0f172a] dark:text-white mb-5">
              Every tool your team needs.{" "}
              <span style={{ color: "#FFC800" }}>One subscription.</span>
            </h2>
          </BlurFade>
          <BlurFade delay={0.14}>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              25+ fully integrated products sharing one AI brain — from project management and CRM to dashboards, docs, and beyond.
            </p>
          </BlurFade>
        </div>

        {/* ── Featured 4-up cards with app mockups ── */}
        <BlurFade delay={0.18}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-3">
            {FEATURED.map((f, i) => {
              const FIcon = f.icon;
              return (
                <motion.div
                  key={f.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.07 }}
                  whileHover={{ y: -5, transition: { type: "spring", stiffness: 300, damping: 18 } }}
                  className={`relative rounded-2xl border ${f.border} bg-linear-to-br ${f.color} p-4 sm:p-5 overflow-hidden cursor-pointer group hover:shadow-2xl transition-all duration-300`}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" style={{ background: `radial-gradient(ellipse at 50% -10%, ${f.accent}22 0%, transparent 65%)` }} />
                  <div className="flex items-center gap-2.5 mb-3.5 relative z-10">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center shadow-md shrink-0" style={{ background: f.iconBg }}>
                      <FIcon className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">{f.name}</span>
                  </div>
                  <div className="relative z-10 transform group-hover:-translate-y-1 transition-transform duration-300">
                    <ProductsMockup id={f.mockupId} />
                  </div>
                  <Link
                    href="/products"
                    className="relative z-10 mt-3 flex items-center gap-1 text-[11px] font-bold transition-all duration-200 w-fit"
                    style={{ color: f.accent }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    Learn more
                    <ChevronRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </BlurFade>

        {/* ── Full ClickUp-style feature icon grid ── */}
        <BlurFade delay={0.26}>
          <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm">

            {/* Grid header bar */}
            <div className="px-5 py-3.5 bg-slate-50 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-400 dark:text-slate-500 mb-0.5">Feature Catalogue</p>
                <p className="text-sm font-extrabold text-slate-800 dark:text-white">
                  Plus, everything you&apos;d expect from a modern workspace
                </p>
              </div>
              <Link href="/products" className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-accent-enacle hover:underline shrink-0">
                Explore all <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Icon grid — border-t + border-l on wrapper; each cell adds border-r + border-b */}
            <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 border-t border-l border-slate-100 dark:border-slate-800">
              {GRID_ITEMS.map((item, i) => (
                <GridItem key={`${item.name}-${i}`} item={item} index={i} />
              ))}

              {/* CTA stripe — spans all columns */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.55 }}
                className="col-span-3 sm:col-span-5 md:col-span-7 lg:col-span-9 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-5 py-5 border-r border-b border-slate-100 dark:border-slate-800"
                style={{ background: "linear-gradient(135deg,#292D34,#1a1d24)" }}
              >
                <div>
                  <p className="font-extrabold text-white text-sm mb-0.5">Ready to replace your entire stack?</p>
                  <p className="text-xs text-slate-400">All 25+ products. One flat price. No per-seat surprises.</p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <ShimmerButton shimmerColor="#FD71AF" background="#7B68EE" className="rounded-lg px-4 py-2 text-xs font-bold text-white">
                    Start free
                  </ShimmerButton>
                  <Link href="/products" className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors">
                    See all products <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.div>
            </div>

          </div>
        </BlurFade>

      </div>
    </section>
  );
}
