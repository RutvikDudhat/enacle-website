"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { BorderBeam } from "@/components/ui/border-beam";
import {
  Brain, Bot, GitBranch, Clock, Calendar, FileText,
  LayoutGrid, Zap, BarChart3, Target, MessageSquare, Layers,
  ArrowRight, Search, ChevronDown, Users, DollarSign,
  ShoppingCart, HeadphonesIcon, TrendingUp, Globe,
  Database, Code2, Cpu, Mail, HardDrive, Package,
  SunMedium, BatteryCharging, Activity, MonitorCheck,
  Thermometer, Wrench, AreaChart, CloudSun,
} from "lucide-react";

/* ─── All products ──────────────────────────────────────────────────── */
const ALL_PRODUCTS = [
  // Everyone — Project Management
  { id: 1, icon: Layers,         name: "Projects",       tagline: "Plan, track & ship work",           desc: "Kanban boards, sprints, Gantt timelines — all AI-connected.",         category: "Project Management",  group: "everyone", color: "from-blue-500 to-indigo-600",    accent: "#3b82f6", slug: "projects" },
  { id: 2, icon: GitBranch,      name: "Sprints",        tagline: "Agile sprint management",           desc: "Full agile toolkit with AI auto-balancing and GitHub sync.",           category: "Project Management",  group: "everyone", color: "from-indigo-500 to-violet-600",  accent: "#6366f1", slug: null },
  { id: 3, icon: Target,         name: "Scheduling",     tagline: "Resource & capacity planning",      desc: "Visualise team capacity and plan resources across projects.",          category: "Project Management",  group: "everyone", color: "from-violet-500 to-purple-600",  accent: "#8b5cf6", slug: null },
  // Everyone — Communication
  { id: 4, icon: MessageSquare,  name: "Chat",           tagline: "Context-aware messaging",           desc: "Conversations that live inside tasks with AI meeting summaries.",      category: "Email & Collaboration",group: "everyone", color: "from-sky-500 to-blue-600",      accent: "#0ea5e9", slug: null },
  { id: 5, icon: Mail,           name: "Mail",           tagline: "Unified team inbox",                desc: "Shared inboxes, email sequences, and smart routing for every team.",   category: "Email & Collaboration",group: "everyone", color: "from-blue-400 to-sky-500",      accent: "#38bdf8", slug: null },
  // Everyone — AI
  { id: 6, icon: Brain,          name: "Brain MAX",      tagline: "Universal AI second brain",         desc: "One AI with full workspace context. Ask anything, get real answers.",   category: "Analytics",           group: "everyone", color: "from-violet-600 to-purple-700",  accent: "#7c3aed", slug: null },
  { id: 7, icon: Bot,            name: "AI Agents",      tagline: "Autonomous agents 24/7",            desc: "Deploy no-code agents for support triage and lead qualification.",     category: "Analytics",           group: "everyone", color: "from-purple-500 to-pink-600",    accent: "#a855f7", slug: null },
  // Everyone — Productivity
  { id: 8, icon: FileText,       name: "Docs",           tagline: "Living documentation",              desc: "Rich docs linked to tasks. AI drafts, summarises, keeps docs fresh.",  category: "Storage",             group: "everyone", color: "from-teal-500 to-emerald-600",   accent: "#14b8a6", slug: null },
  { id: 9, icon: LayoutGrid,     name: "Whiteboards",    tagline: "Infinite canvas for ideas",         desc: "Brainstorm and plan on an infinite canvas synced to your tasks.",      category: "Storage",             group: "everyone", color: "from-emerald-500 to-teal-600",   accent: "#10b981", slug: null },
  { id:10, icon: Clock,          name: "Time Tracking",  tagline: "Hours, estimates & billing",        desc: "Log time, set estimates, and generate billing reports instantly.",     category: "Project Management",  group: "everyone", color: "from-amber-500 to-orange-500",   accent: "#f59e0b", slug: null },
  // Everyone — Data
  { id:11, icon: BarChart3,      name: "Dashboards",     tagline: "Live KPI intelligence",             desc: "Drag-and-drop dashboards built on live data with AI digest reports.",  category: "Analytics",           group: "everyone", color: "from-rose-500 to-pink-600",      accent: "#f43f5e", slug: null },
  { id:12, icon: Calendar,       name: "Calendar",       tagline: "Smart team scheduling",             desc: "Unified calendar with AI scheduling and Google/Outlook sync.",         category: "Email & Collaboration",group: "everyone", color: "from-orange-500 to-amber-500",   accent: "#f97316", slug: null },
  // Everyone — Payments
  { id:13, icon: DollarSign,     name: "Payments",       tagline: "Integrated payment flows",          desc: "Collect payments, manage subscriptions, and reconcile in one place.",  category: "Payments",            group: "everyone", color: "from-green-500 to-emerald-600",  accent: "#22c55e", slug: null },
  // Specific — Sales
  { id:14, icon: TrendingUp,     name: "CRM",            tagline: "AI-powered sales CRM",              desc: "Pipeline management, deal tracking, and AI-scored leads.",            category: "Sales Tools",         group: "specific", color: "from-blue-600 to-indigo-700",    accent: "#2563eb", slug: "crm" },
  { id:15, icon: Users,          name: "Sales Engage",   tagline: "Sequences & outreach",              desc: "Automated email sequences, call scheduling, and engagement scoring.",  category: "Sales Tools",         group: "specific", color: "from-indigo-600 to-blue-700",    accent: "#4f46e5", slug: null },
  // Specific — Marketing
  { id:16, icon: Zap,            name: "Automations",    tagline: "No-code marketing workflows",       desc: "Build powerful automations with 200+ app integrations.",               category: "Marketing Tools",     group: "specific", color: "from-amber-500 to-yellow-500",   accent: "#eab308", slug: null },
  { id:17, icon: Globe,          name: "Campaigns",      tagline: "Multi-channel campaigns",           desc: "Run email, SMS, and social campaigns with built-in analytics.",       category: "Marketing Tools",     group: "specific", color: "from-orange-500 to-red-500",     accent: "#ea580c", slug: null },
  // Specific — Finance
  { id:18, icon: BarChart3,      name: "Finance Hub",    tagline: "Spend & budget management",        desc: "Manage budgets, expenses, and financial forecasting in one view.",      category: "Finance Tools",       group: "specific", color: "from-emerald-600 to-teal-700",   accent: "#059669", slug: "solar" },
  // Specific — HR
  { id:19, icon: Users,          name: "HR Suite",       tagline: "People & performance ops",          desc: "Onboarding, performance reviews, time-off, and org chart in one.",    category: "HR Tools",            group: "specific", color: "from-pink-500 to-rose-600",      accent: "#ec4899", slug: null },
  // Specific — Developer
  { id:20, icon: Code2,          name: "Dev Platform",   tagline: "APIs, webhooks & SDKs",             desc: "Full REST/GraphQL API, webhooks, and SDKs for every major language.",   category: "Developer Platforms", group: "specific", color: "from-slate-600 to-slate-800",    accent: "#475569", slug: null },
  { id:21, icon: Database,       name: "Data Warehouse", tagline: "Centralised data layer",            desc: "Connect any source, build pipelines, and query with SQL or AI.",       category: "Developer Platforms", group: "specific", color: "from-cyan-600 to-blue-700",      accent: "#0891b2", slug: null },
  // Specific — IoT
  { id:22, icon: Cpu,            name: "IoT Connect",    tagline: "Device & sensor management",        desc: "Connect devices, ingest sensor data, and trigger automations in real-time.",category: "IoT",           group: "specific", color: "from-lime-500 to-green-600",     accent: "#84cc16", slug: null },
  // Specific — Commerce
  { id:23, icon: ShoppingCart,   name: "Commerce",       tagline: "Storefront & POS",                  desc: "Sell online and in-store with inventory, POS, and fulfilment built in.", category: "Sales Tools",       group: "specific", color: "from-violet-500 to-indigo-600",  accent: "#7c3aed", slug: null },
  // Specific — Support
  { id:24, icon: HeadphonesIcon, name: "Support Desk",   tagline: "AI-first customer support",         desc: "Ticketing, live chat, AI triage, and CSAT surveys — all in one.",     category: "HR Tools",            group: "specific", color: "from-sky-500 to-cyan-600",       accent: "#0284c7", slug: null },
  // Specific — Storage
  { id:25, icon: HardDrive,      name: "Cloud Storage",  tagline: "Secure file management",            desc: "Unlimited storage, version history, and fine-grained access controls.", category: "Storage",           group: "specific", color: "from-teal-500 to-cyan-600",      accent: "#0d9488", slug: null },
  // Solar
  { id:26, icon: SunMedium,       name: "Solar CRM",          tagline: "CRM for solar energy businesses",      desc: "Track leads, manage installations, and deliver service — built for solar companies.",      category: "Solar", group: "solar", color: "from-amber-400 to-orange-500",   accent: "#f59e0b", slug: "solar-crm" },
  { id:27, icon: SunMedium,       name: "Solar ERP",          tagline: "ERP built for solar businesses",       desc: "End-to-end ERP from lead to installation to after-sales — built for solar operators.", category: "Solar", group: "solar", color: "from-amber-400 to-yellow-500",   accent: "#f59e0b", slug: "solar" },
  { id:28, icon: BatteryCharging, name: "Energy Monitor",     tagline: "Real-time energy production",          desc: "Monitor solar generation and consumption in real time across all your sites.",          category: "Solar", group: "solar", color: "from-green-500 to-emerald-500",  accent: "#16a34a", slug: null },
  { id:29, icon: AreaChart,       name: "Solar Analytics",    tagline: "AI yield & ROI forecasting",           desc: "AI-powered performance analytics, yield forecasting and ROI dashboards.",               category: "Solar", group: "solar", color: "from-violet-500 to-purple-600",  accent: "#7c3aed", slug: null },
  { id:30, icon: Wrench,          name: "Field Service",      tagline: "O&M job & technician management",      desc: "Schedule and dispatch technicians, track O&M jobs, and manage SLAs.",                  category: "Solar", group: "solar", color: "from-cyan-500 to-sky-600",       accent: "#0891b2", slug: null },
  { id:31, icon: CloudSun,        name: "Weather Intelligence",tagline: "Irradiance & weather forecasting",    desc: "Hyperlocal weather data and irradiance forecasting to optimise solar generation.",       category: "Solar", group: "solar", color: "from-orange-400 to-amber-500",   accent: "#ea580c", slug: null },
  { id:32, icon: MonitorCheck,    name: "Asset Management",   tagline: "Panel & inverter tracking",            desc: "Track panels, inverters and batteries with automated fault detection and alerting.",     category: "Solar", group: "solar", color: "from-red-500 to-rose-500",       accent: "#dc2626", slug: null },
  { id:33, icon: Activity,        name: "Grid Connect",       tagline: "Net metering & utility integration",   desc: "Seamless net metering, export billing, and utility grid integration.",                  category: "Solar", group: "solar", color: "from-purple-500 to-violet-600",  accent: "#9333ea", slug: null },
  { id:34, icon: Thermometer,     name: "Thermal Scanner",    tagline: "AI thermal anomaly detection",         desc: "AI-driven thermal imaging and anomaly detection to maximise panel uptime.",              category: "Solar", group: "solar", color: "from-orange-600 to-red-500",     accent: "#c2410c", slug: null },
  { id:35, icon: DollarSign,      name: "Solar Finance",      tagline: "Project financing & subsidy claims",   desc: "Manage project financing, EMI schedules, and subsidy claims in one unified portal.",    category: "Solar", group: "solar", color: "from-blue-500 to-indigo-600",    accent: "#2563eb", slug: null },
];

/* ─── Sidebar structure ─────────────────────────────────────────────── */
const SIDEBAR = [
  {
    id: "everyone",
    label: "Products for Everyone",
    sub: "Universal tools for any team",
    categories: ["Project Management", "Email & Collaboration", "Analytics", "Storage", "Payments"],
  },
  {
    id: "specific",
    label: "Products for Specific Use Cases",
    sub: "Purpose-built for departments & roles",
    categories: ["Sales Tools", "Marketing Tools", "Finance Tools", "HR Tools", "Developer Platforms", "IoT"],
  },
  {
    id: "solar",
    label: "Solar Products",
    sub: "End-to-end tools for solar energy businesses",
    categories: ["Solar"],
  },
];

const ALL_LABEL = "Recent Launches";

/* ─── Product Card ──────────────────────────────────────────────────── */
function ProductCard({ p, delay }: { p: (typeof ALL_PRODUCTS)[0]; delay: number }) {
  const Icon = p.icon;

  const card = (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ y: -4, transition: { type: "spring", stiffness: 320, damping: 22 } }}
      className="group relative rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-900 p-6 overflow-hidden cursor-pointer shadow-sm hover:shadow-lg hover:shadow-slate-200/60 dark:hover:shadow-black/30 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-200 flex flex-col h-full"
    >
      <BorderBeam
        size={200} duration={16}
        colorFrom={p.accent}
        colorTo={p.accent + "80"}
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />

      {/* Icon */}
      <div className={`w-11 h-11 rounded-xl bg-linear-to-br ${p.color} flex items-center justify-center shadow-md mb-4 shrink-0`}>
        <Icon className="h-5 w-5 text-white" />
      </div>

      {/* Content */}
      <div className="flex-1">
        <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 dark:text-slate-500 mb-1">{p.category}</p>
        <h3 className="text-base font-extrabold text-[#0f172a] dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{p.name}</h3>
        <p className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 mb-2">{p.tagline}</p>
        <p className="text-xs text-slate-400 dark:text-slate-500 leading-relaxed">{p.desc}</p>
      </div>

      {/* CTA */}
      <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
        <span
          className="flex items-center gap-1 text-xs font-bold transition-all"
          style={{ color: p.accent }}
        >
          {p.slug ? "LEARN MORE" : "TRY NOW"}
          <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </motion.div>
  );

  if (p.slug) {
    return (
      <Link href={`/products/${p.slug}`} className="block">
        {card}
      </Link>
    );
  }

  return card;
}

/* ─── Main Component ────────────────────────────────────────────────── */
export function ProductsGrid() {
  const [activeGroup, setActiveGroup]     = useState<string>(ALL_LABEL);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [expandedGroup, setExpandedGroup] = useState<string | null>("everyone");
  const [query, setQuery]                 = useState("");

  const filtered = useMemo(() => {
    let list = ALL_PRODUCTS;

    if (activeGroup !== ALL_LABEL) {
      list = list.filter((p) => p.group === activeGroup);
    }
    if (activeCategory) {
      list = list.filter((p) => p.category === activeCategory);
    }
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.desc.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }
    return list;
  }, [activeGroup, activeCategory, query]);

  function handleGroupClick(groupId: string) {
    setActiveGroup(groupId);
    setActiveCategory(null);
    setExpandedGroup((prev) => (prev === groupId ? null : groupId));
  }

  function handleCategoryClick(cat: string, groupId: string) {
    setActiveGroup(groupId);
    setActiveCategory((prev) => (prev === cat ? null : cat));
    setExpandedGroup(groupId);
  }

  const sectionTitle =
    activeCategory ??
    (activeGroup === ALL_LABEL ? ALL_LABEL : SIDEBAR.find((s) => s.id === activeGroup)?.label ?? "");

  return (
    <section className="bg-white dark:bg-[#080d1a] min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">

        {/* ── Search bar ── */}
        <div className="relative mb-8 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
          <input
            type="text"
            placeholder="I'm looking for..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400 transition-all shadow-sm"
          />
        </div>

        <div className="flex gap-8 items-start">

          {/* ══ LEFT SIDEBAR ══════════════════════════════════════ */}
          <aside className="hidden lg:block w-56 shrink-0 sticky top-24">

            {/* "All" link */}
            <button
              onClick={() => { setActiveGroup(ALL_LABEL); setActiveCategory(null); setExpandedGroup(null); }}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold mb-1 transition-all ${
                activeGroup === ALL_LABEL && !activeCategory
                  ? "bg-blue-600 text-white shadow-md shadow-blue-200 dark:shadow-blue-900/40"
                  : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              {ALL_LABEL}
              {activeGroup === ALL_LABEL && !activeCategory && <ChevronDown className="h-3.5 w-3.5" />}
            </button>

            <div className="mt-2 space-y-1">
              {SIDEBAR.map((group) => (
                <div key={group.id}>
                  {/* Group header */}
                  <button
                    onClick={() => handleGroupClick(group.id)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                      activeGroup === group.id && !activeCategory
                        ? "bg-blue-600 text-white shadow-md shadow-blue-200 dark:shadow-blue-900/40"
                        : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                    }`}
                  >
                    <span className="text-left leading-snug">{group.label}</span>
                    <motion.div
                      animate={{ rotate: expandedGroup === group.id ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="h-3.5 w-3.5 shrink-0 ml-1" />
                    </motion.div>
                  </button>

                  {/* Category list */}
                  <AnimatePresence initial={false}>
                    {expandedGroup === group.id && (
                      <motion.ul
                        key="cats"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: "easeInOut" }}
                        className="overflow-hidden ml-3 mt-0.5 border-l-2 border-slate-100 dark:border-slate-800"
                      >
                        {group.categories.map((cat) => (
                          <li key={cat}>
                            <button
                              onClick={() => handleCategoryClick(cat, group.id)}
                              className={`w-full text-left px-3 py-2 text-sm transition-all rounded-r-lg ${
                                activeCategory === cat
                                  ? "text-blue-600 dark:text-blue-400 font-semibold bg-blue-50 dark:bg-blue-950/40"
                                  : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50"
                              }`}
                            >
                              {cat}
                            </button>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Explore all button */}
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
              <button
                onClick={() => { setActiveGroup(ALL_LABEL); setActiveCategory(null); }}
                className="w-full flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2.5 rounded-xl transition-colors shadow-sm shadow-blue-200 dark:shadow-blue-900/30"
              >
                EXPLORE ALL PRODUCTS
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </aside>

          {/* ══ MAIN CONTENT ══════════════════════════════════════ */}
          <div className="flex-1 min-w-0">

            {/* Section title + count */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-extrabold text-[#0f172a] dark:text-white">{sectionTitle}</h2>
                <p className="text-xs text-slate-400 mt-0.5">{filtered.length} products</p>
              </div>
              {(activeCategory || activeGroup !== ALL_LABEL) && (
                <button
                  onClick={() => { setActiveGroup(ALL_LABEL); setActiveCategory(null); }}
                  className="text-xs text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                >
                  Clear filter
                </button>
              )}
            </div>

            {/* Product grid */}
            <AnimatePresence mode="wait">
              {filtered.length > 0 ? (
                <motion.div
                  key={activeGroup + activeCategory + query}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5"
                >
                  {filtered.map((p, i) => (
                    <ProductCard key={p.id} p={p} delay={i * 0.03} />
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center py-24 text-center"
                >
                  <Package className="h-12 w-12 text-slate-200 dark:text-slate-700 mb-4" />
                  <p className="text-sm font-semibold text-slate-400">No products found for &ldquo;{query}&rdquo;</p>
                  <button onClick={() => setQuery("")} className="mt-3 text-xs text-blue-600 dark:text-blue-400 hover:underline">Clear search</button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
