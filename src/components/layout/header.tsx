"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronDown, Menu, X, Zap, Sun, Moon, Search, ArrowRight,
  Brain, Bot, GitBranch, Clock, Calendar, FileText,
  LayoutGrid, Target, MessageSquare, Layers, BarChart3,
  Users, DollarSign, Globe, Code2, Cpu, Mail,
  TrendingUp, Package, ShoppingCart, Headphones,
  Shield, Database, Smartphone, PieChart, Workflow,
  Building2, CreditCard, BookOpen, Megaphone, Settings,
  SunMedium, BatteryCharging, Activity, MonitorCheck,
  Thermometer, Wrench, AreaChart, CloudSun,
} from "lucide-react";
import { useTheme } from "next-themes";

/* ─── Types ─────────────────────────────────────────────────────────── */
type Product = {
  icon: React.ElementType;
  sub: string;
  name: string;
  desc: string;
  color: string;
  href: string;
};

/* ─── Product catalogue ─────────────────────────────────────────────── */
const CATEGORIES: { id: string; label: string; products: Product[] }[] = [
  {
    id: "recent",
    label: "Recent Launches",
    products: [
      { icon: Brain,       sub: "Enacle", name: "ERP",            desc: "ERP software built for businesses to run faster and smarter operations.",                    color: "#2563eb", href: "/products#erp" },
      { icon: ShoppingCart,sub: "Enacle", name: "Procurement",    desc: "Complete source-to-pay platform to transform your procurement into a growth engine.",        color: "#dc2626", href: "/products#procurement" },
      { icon: CreditCard,  sub: "Enacle", name: "Spend",          desc: "Manage and control every business spend from a single unified platform.",                    color: "#ea580c", href: "/products#spend" },
      { icon: Workflow,    sub: "Enacle", name: "MCP",            desc: "Make apps agent-ready, build agentic workflows, and get work done with prompts.",            color: "#7c3aed", href: "/products#mcp" },
      { icon: LayoutGrid,  sub: "Enacle", name: "POS",            desc: "Modern retail POS to sell better, manage your entire business, and join the digital revolution.", color: "#0891b2", href: "/products#pos" },
      { icon: Globe,       sub: "Enacle", name: "Domains",        desc: "Easy domain registration, transfer, and secured DNS management.",                            color: "#16a34a", href: "/products#domains" },
      { icon: CreditCard,  sub: "Enacle", name: "Payments",       desc: "Accept payments, manage subscriptions and build a reliable payment infrastructure.",         color: "#2563eb", href: "/products#payments" },
      { icon: Brain,       sub: "Enacle", name: "ResearchStudio", desc: "AI-powered research platform to gather, analyze and act on customer insights.",              color: "#9333ea", href: "/products#researchstudio" },
      { icon: Package,     sub: "Enacle", name: "Projects Plus",  desc: "Enterprise-grade project management with advanced resource and budget tracking.",            color: "#c2410c", href: "/products#projectsplus" },
    ],
  },
  {
    id: "sales",
    label: "Sales",
    products: [
      { icon: TrendingUp,  sub: "Enacle", name: "CRM",           desc: "AI-powered sales CRM to manage pipeline, leads and deals.",                                  color: "#dc2626", href: "/products#crm" },
      { icon: Users,       sub: "Enacle", name: "Bigin",         desc: "Pipeline-centric CRM built for small businesses and teams.",                                  color: "#0891b2", href: "/products#bigin" },
      { icon: BookOpen,    sub: "Enacle", name: "SalesIQ",       desc: "Live chat and visitor tracking to convert website visitors.",                                  color: "#16a34a", href: "/products#salesiq" },
      { icon: DollarSign,  sub: "Enacle", name: "Subscriptions", desc: "Recurring billing platform for subscription-based businesses.",                               color: "#ea580c", href: "/products#subscriptions" },
      { icon: FileText,    sub: "Enacle", name: "Sign",          desc: "eSignature solution to send, sign and manage documents online.",                              color: "#7c3aed", href: "/products#sign" },
      { icon: Target,      sub: "Enacle", name: "Contracts",     desc: "End-to-end contract lifecycle management for legal and sales teams.",                         color: "#2563eb", href: "/products#contracts" },
    ],
  },
  {
    id: "marketing",
    label: "Marketing",
    products: [
      { icon: Megaphone,   sub: "Enacle", name: "Campaigns",     desc: "Email and SMS marketing campaigns with automation and analytics.",                            color: "#ea580c", href: "/products#campaigns" },
      { icon: Globe,       sub: "Enacle", name: "Social",        desc: "Social media management and publishing across all major platforms.",                          color: "#2563eb", href: "/products#social" },
      { icon: BarChart3,   sub: "Enacle", name: "Marketing Plus",desc: "Unified marketing platform to run multi-channel campaigns.",                                  color: "#9333ea", href: "/products#marketingplus" },
      { icon: PieChart,    sub: "Enacle", name: "PageSense",     desc: "Conversion rate optimization and funnel analytics.",                                          color: "#0891b2", href: "/products#pagesense" },
      { icon: Smartphone,  sub: "Enacle", name: "Backstage",     desc: "Event management platform for virtual, hybrid and in-person events.",                        color: "#16a34a", href: "/products#backstage" },
      { icon: Brain,       sub: "Enacle", name: "LandingPage",   desc: "Drag-and-drop landing page builder with A/B testing.",                                        color: "#dc2626", href: "/products#landingpage" },
    ],
  },
  {
    id: "commerce",
    label: "Commerce and POS",
    products: [
      { icon: LayoutGrid,  sub: "Enacle", name: "POS",           desc: "Modern retail POS to sell better and manage your entire business.",                           color: "#0891b2", href: "/products#pos" },
      { icon: ShoppingCart,sub: "Enacle", name: "Commerce",      desc: "Build and manage your online store with a complete commerce platform.",                       color: "#16a34a", href: "/products#commerce" },
      { icon: CreditCard,  sub: "Enacle", name: "Payments",      desc: "Accept payments and manage subscriptions seamlessly.",                                        color: "#2563eb", href: "/products#payments" },
      { icon: ShoppingCart,sub: "Enacle", name: "Inventory",     desc: "Real-time inventory management across warehouses and sales channels.",                        color: "#ea580c", href: "/products#inventory" },
    ],
  },
  {
    id: "service",
    label: "Service",
    products: [
      { icon: Headphones,    sub: "Enacle", name: "Desk",        desc: "Customer support helpdesk with AI triage and multi-channel support.",                         color: "#dc2626", href: "/products#desk" },
      { icon: MessageSquare, sub: "Enacle", name: "Cliq",        desc: "Context-aware team messaging and collaboration platform.",                                     color: "#2563eb", href: "/products#cliq" },
      { icon: Bot,           sub: "Enacle", name: "SalesIQ",     desc: "Live chat, chatbots and visitor intelligence platform.",                                       color: "#16a34a", href: "/products#salesiq" },
      { icon: BookOpen,      sub: "Enacle", name: "Assist",      desc: "Remote support software for customer and IT teams.",                                           color: "#7c3aed", href: "/products#assist" },
    ],
  },
  {
    id: "finance",
    label: "Finance",
    products: [
      { icon: BarChart3,   sub: "Enacle", name: "Books",         desc: "Online accounting software to manage your business finances.",                                 color: "#16a34a", href: "/products#books" },
      { icon: CreditCard,  sub: "Enacle", name: "Invoice",       desc: "Professional invoicing and billing software for businesses.",                                  color: "#2563eb", href: "/products#invoice" },
      { icon: DollarSign,  sub: "Enacle", name: "Expense",       desc: "Expense reporting and management for companies of all sizes.",                                 color: "#ea580c", href: "/products#expense" },
      { icon: PieChart,    sub: "Enacle", name: "Payroll",       desc: "Complete payroll management with compliance for businesses.",                                  color: "#9333ea", href: "/products#payroll" },
      { icon: ShoppingCart,sub: "Enacle", name: "Checkout",      desc: "Smart payment checkout for online businesses.",                                                color: "#dc2626", href: "/products#checkout" },
    ],
  },
  {
    id: "erp",
    label: "ERP",
    products: [
      { icon: Brain,       sub: "Enacle", name: "ERP",           desc: "ERP software built for businesses to run faster and smarter.",                                 color: "#2563eb", href: "/products#erp" },
      { icon: Package,     sub: "Enacle", name: "Inventory",     desc: "Multi-location inventory and order management.",                                               color: "#ea580c", href: "/products#inventory" },
      { icon: ShoppingCart,sub: "Enacle", name: "Procurement",   desc: "End-to-end procurement and vendor management.",                                                color: "#dc2626", href: "/products#procurement" },
      { icon: BarChart3,   sub: "Enacle", name: "Analytics",     desc: "Business intelligence and embedded analytics platform.",                                       color: "#7c3aed", href: "/products#analytics" },
    ],
  },
  {
    id: "email",
    label: "Email, Storage & Collaboration",
    products: [
      { icon: Mail,          sub: "Enacle", name: "Mail",        desc: "Secure business email with shared inboxes and collaboration.",                                 color: "#2563eb", href: "/products#mail" },
      { icon: MessageSquare, sub: "Enacle", name: "Cliq",        desc: "Team messaging with channels, calls and context-aware collaboration.",                         color: "#0891b2", href: "/products#cliq" },
      { icon: Calendar,      sub: "Enacle", name: "Calendar",    desc: "Smart shared calendar with scheduling and availability management.",                           color: "#ea580c", href: "/products#calendar" },
      { icon: FileText,      sub: "Enacle", name: "Docs",        desc: "Collaborative document creation linked to projects and tasks.",                                color: "#16a34a", href: "/products#docs" },
      { icon: Database,      sub: "Enacle", name: "WorkDrive",   desc: "Team file storage, sharing and collaboration in one place.",                                   color: "#7c3aed", href: "/products#workdrive" },
    ],
  },
  {
    id: "hr",
    label: "Human Resources",
    products: [
      { icon: Users,       sub: "Enacle", name: "People",        desc: "HR software for employee lifecycle, performance and engagement.",                              color: "#ec4899", href: "/products#people" },
      { icon: BookOpen,    sub: "Enacle", name: "Recruit",       desc: "Applicant tracking system to hire talent faster.",                                             color: "#2563eb", href: "/products#recruit" },
      { icon: Target,      sub: "Enacle", name: "Payroll",       desc: "Complete payroll management with tax compliance.",                                             color: "#16a34a", href: "/products#payroll" },
      { icon: LayoutGrid,  sub: "Enacle", name: "Workerly",      desc: "Temp staffing and workforce management platform.",                                             color: "#ea580c", href: "/products#workerly" },
    ],
  },
  {
    id: "security",
    label: "Security and IT Management",
    products: [
      { icon: Shield,      sub: "Enacle", name: "Vault",         desc: "Enterprise password manager and secure credential storage.",                                   color: "#16a34a", href: "/products#vault" },
      { icon: Settings,    sub: "Enacle", name: "OneAuth",       desc: "Multi-factor authentication and identity management.",                                         color: "#2563eb", href: "/products#oneauth" },
      { icon: Database,    sub: "Enacle", name: "Directory",     desc: "Centralized identity and access management for your organisation.",                            color: "#7c3aed", href: "/products#directory" },
    ],
  },
  {
    id: "bi",
    label: "BI and Analytics",
    products: [
      { icon: BarChart3,   sub: "Enacle", name: "Analytics",     desc: "Self-serve business intelligence and embedded analytics platform.",                            color: "#7c3aed", href: "/products#analytics" },
      { icon: PieChart,    sub: "Enacle", name: "DataPrep",      desc: "No-code data preparation and transformation for analytics.",                                  color: "#2563eb", href: "/products#dataprep" },
      { icon: Brain,       sub: "Enacle", name: "Embedded BI",   desc: "Embed powerful analytics directly into your product.",                                         color: "#ea580c", href: "/products#embeddedbi" },
    ],
  },
  {
    id: "pm",
    label: "Project Management",
    products: [
      { icon: Layers,      sub: "Enacle", name: "Projects",      desc: "End-to-end project management with Kanban, Gantt and sprints.",                               color: "#2563eb", href: "/products#projects" },
      { icon: GitBranch,   sub: "Enacle", name: "Sprints",       desc: "Agile sprint management with velocity tracking and retrospectives.",                           color: "#6366f1", href: "/products#sprints" },
      { icon: Clock,       sub: "Enacle", name: "BugTracker",    desc: "Issue tracking and bug management integrated with development.",                               color: "#dc2626", href: "/products#bugtracker" },
      { icon: Package,     sub: "Enacle", name: "Projects Plus", desc: "Enterprise project management with advanced resource allocation.",                             color: "#c2410c", href: "/products#projectsplus" },
    ],
  },
  {
    id: "dev",
    label: "Developer Platforms",
    products: [
      { icon: Code2,       sub: "Enacle", name: "Creator",       desc: "Low-code platform to build custom business apps without coding.",                              color: "#2563eb", href: "/products#creator" },
      { icon: Cpu,         sub: "Enacle", name: "IoT",           desc: "IoT device management and real-time data pipeline platform.",                                  color: "#16a34a", href: "/products#iot" },
      { icon: Database,    sub: "Enacle", name: "Catalyst",      desc: "Serverless platform to build, deploy and scale cloud functions.",                             color: "#7c3aed", href: "/products#catalyst" },
      { icon: Workflow,    sub: "Enacle", name: "Flow",          desc: "No-code workflow automation connecting 200+ apps.",                                            color: "#ea580c", href: "/products#flow" },
      { icon: Brain,       sub: "Enacle", name: "MCP",           desc: "Build agentic workflows and AI-ready integrations.",                                           color: "#9333ea", href: "/products#mcp" },
    ],
  },
  {
    id: "solar",
    label: "Solar",
    products: [
      { icon: SunMedium,       sub: "Enacle", name: "Solar ERP",         desc: "End-to-end ERP built for solar businesses — from lead to installation to after-sales.",    color: "#f59e0b", href: "/products/solar" },
      { icon: BatteryCharging, sub: "Enacle", name: "Energy Monitor",    desc: "Real-time solar energy production and consumption monitoring across all your sites.",       color: "#16a34a", href: "/products#energy-monitor" },
      { icon: AreaChart,       sub: "Enacle", name: "Solar Analytics",   desc: "AI-powered performance analytics, yield forecasting and ROI dashboards for solar plants.",  color: "#7c3aed", href: "/products#solar-analytics" },
      { icon: Wrench,          sub: "Enacle", name: "Field Service",     desc: "Schedule and dispatch technicians, track O&M jobs, and manage SLAs for solar assets.",     color: "#0891b2", href: "/products#field-service" },
      { icon: CloudSun,        sub: "Enacle", name: "Weather Intelligence", desc: "Hyperlocal weather data and irradiance forecasting to optimise solar generation.",       color: "#ea580c", href: "/products#weather-intelligence" },
      { icon: MonitorCheck,    sub: "Enacle", name: "Asset Management",  desc: "Track panels, inverters and batteries with automated fault detection and alerting.",        color: "#dc2626", href: "/products#asset-management" },
      { icon: Activity,        sub: "Enacle", name: "Grid Connect",      desc: "Seamless net metering, export billing, and utility grid integration for solar operators.",  color: "#9333ea", href: "/products#grid-connect" },
      { icon: Thermometer,     sub: "Enacle", name: "Thermal Scanner",   desc: "AI-driven thermal imaging and anomaly detection to maximise panel uptime and efficiency.",  color: "#c2410c", href: "/products#thermal-scanner" },
      { icon: DollarSign,      sub: "Enacle", name: "Solar Finance",     desc: "Manage solar project financing, EMI schedules, and subsidy claims in one unified portal.", color: "#2563eb", href: "/products#solar-finance" },
    ],
  },
];

/* ─── Solutions & Platform menus ────────────────────────────────────── */
const SOLUTIONS_MENU = [
  { label: "For Engineering",   desc: "Ship faster with AI sprint tools",        icon: GitBranch,     color: "#6366f1", href: "/solutions#engineering"  },
  { label: "For Marketing",     desc: "Campaigns, analytics & content AI",       icon: TrendingUp,    color: "#f59e0b", href: "/solutions#marketing"    },
  { label: "For Sales",         desc: "CRM, pipeline & AI lead scoring",         icon: DollarSign,    color: "#22c55e", href: "/solutions#sales"         },
  { label: "For Support",       desc: "AI triage, helpdesk & live chat",         icon: MessageSquare, color: "#0ea5e9", href: "/solutions#support"       },
  { label: "For HR",            desc: "Onboarding, reviews & org planning",      icon: Users,         color: "#ec4899", href: "/solutions#hr"            },
  { label: "For Executives",    desc: "KPI dashboards & AI board reports",       icon: BarChart3,     color: "#f43f5e", href: "/solutions#executives"    },
  { label: "For Finance",       desc: "Billing, expenses & financial controls",  icon: CreditCard,    color: "#10b981", href: "/solutions#finance"       },
  { label: "For Operations",    desc: "ERP, inventory & supply chain",           icon: Building2,     color: "#8b5cf6", href: "/solutions#operations"    },
  { label: "For IT & Security", desc: "IAM, vault & compliance tools",           icon: Shield,        color: "#64748b", href: "/solutions#security"      },
];

const PLATFORM_MENU = [
  { label: "AI Agents",      desc: "Build & deploy autonomous agents",           icon: Bot,        color: "#a855f7", href: "/platform#ai-agents"     },
  { label: "Automations",    desc: "No-code 200+ app workflow builder",          icon: Workflow,   color: "#f59e0b", href: "/platform#automations"   },
  { label: "Integrations",   desc: "Connect every tool you use",                 icon: Globe,      color: "#0ea5e9", href: "/platform#integrations"  },
  { label: "Security",       desc: "SOC 2, GDPR, SSO & audit logs",              icon: Shield,     color: "#10b981", href: "/platform#security"      },
  { label: "Architecture",   desc: "99.99% uptime, 12 global regions",           icon: Layers,     color: "#6366f1", href: "/platform#architecture"  },
  { label: "API & SDKs",     desc: "Full REST/GraphQL & developer tools",        icon: Code2,      color: "#475569", href: "/platform#api"           },
  { label: "Analytics",      desc: "Embedded BI and real-time dashboards",       icon: BarChart3,  color: "#f43f5e", href: "/platform#analytics"     },
  { label: "IoT Platform",   desc: "Device management & sensor pipelines",       icon: Cpu,        color: "#16a34a", href: "/platform#iot"           },
  { label: "AI Brain",       desc: "Universal AI assistant across all products", icon: Brain,      color: "#7c3aed", href: "/platform#ai-brain"      },
];

/* ─── Theme toggle ──────────────────────────────────────────────────── */
function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-9 h-9" />;
  const isDark = theme === "dark";
  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="relative w-9 h-9 rounded-lg flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span key="sun" initial={{ opacity: 0, rotate: -90, scale: 0.5 }} animate={{ opacity: 1, rotate: 0, scale: 1 }} exit={{ opacity: 0, rotate: 90, scale: 0.5 }} transition={{ duration: 0.18 }} className="absolute">
            <Sun className="h-4 w-4 text-amber-500" />
          </motion.span>
        ) : (
          <motion.span key="moon" initial={{ opacity: 0, rotate: 90, scale: 0.5 }} animate={{ opacity: 1, rotate: 0, scale: 1 }} exit={{ opacity: 0, rotate: -90, scale: 0.5 }} transition={{ duration: 0.18 }} className="absolute">
            <Moon className="h-4 w-4 text-slate-500" />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}

/* ─── Product card — exact Zoho reference style ─────────────────────── */
function ProductCard({ p, onClose, index }: { p: Product; onClose: () => void; index: number }) {
  const Icon = p.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.14, delay: index * 0.02 }}
      className="h-full"
    >
      <Link
        href={p.href}
        onClick={onClose}
        className="group flex flex-col gap-3 p-5 rounded-none border border-slate-200 dark:border-slate-700/60 hover:border-slate-300 dark:hover:border-slate-600 bg-white dark:bg-[#0f172a] hover:shadow-md transition-all h-full"
      >
        {/* Icon + "Enacle / ProductName" header — matches Zoho exactly */}
        <div className="flex items-start gap-4">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform"
            style={{ backgroundColor: p.color + "18", border: `1px solid ${p.color}30` }}
          >
            <Icon className="h-5.5 w-5.5" style={{ color: p.color }} />
          </div>
          <div className="min-w-0 pt-0.5">
            <p className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 leading-none tracking-wide mb-1">{p.sub}</p>
            <p className="text-base font-bold text-slate-900 dark:text-white group-hover:text-accent-enacle dark:group-hover:text-[#9d8ff5] transition-colors leading-tight">
              {p.name}
            </p>
          </div>
        </div>
        {/* Description */}
        <p className="text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2 flex-1">
          {p.desc}
        </p>
        {/* TRY NOW */}
        <p className="text-xs font-bold text-accent-enacle dark:text-[#9d8ff5] flex items-center gap-1 group-hover:gap-2 transition-all uppercase tracking-wide">
          TRY NOW <ArrowRight className="h-3 w-3" />
        </p>
      </Link>
    </motion.div>
  );
}

/* ─── Products Mega Menu ─────────────────────────────────────────────── */
const TABS = ["Apps", "Suites", "Zoho One", "Marketplace"];

function ProductsMegaMenu({ onClose }: { onClose: () => void }) {
  const [activeTab, setActiveTab] = useState("Apps");
  const [activeCatId, setActiveCatId] = useState("recent");
  const [query, setQuery] = useState("");

  const activeCat = CATEGORIES.find((c) => c.id === activeCatId) ?? CATEGORIES[0];

  const displayed: Product[] = query.trim()
    ? CATEGORIES.flatMap((c) => c.products).filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.desc.toLowerCase().includes(query.toLowerCase())
      )
    : activeCat.products;

  const heading = query.trim()
    ? `${displayed.length} result${displayed.length !== 1 ? "s" : ""} for "${query}"`
    : activeCat.label;

  return (
    <div className="w-full bg-white dark:bg-[#0f172a] border-t border-slate-200 dark:border-slate-700 shadow-2xl">

      {/* ── Tab bar row (full width, no search here) ── */}
      <div className="border-b border-slate-200 dark:border-slate-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-13">
          {/* Tabs */}
          <div className="flex items-center h-full">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative h-full px-5 text-sm font-semibold transition-colors select-none ${
                  activeTab === tab
                    ? "text-accent-enacle dark:text-[#9d8ff5]"
                    : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.75 rounded-t-full"
                    style={{ background: "#7B68EE" }}
                  />
                )}
              </button>
            ))}
          </div>
          {/* Explore all — right side of tab bar */}
          <Link
            href="/products"
            onClick={onClose}
            className="flex items-center gap-1.5 text-sm font-bold text-accent-enacle dark:text-[#9d8ff5] hover:opacity-80 transition-opacity"
          >
            EXPLORE ALL PRODUCTS <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      {/* ── Body: left sidebar + right grid ── */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex" style={{ maxHeight: "74vh" }}>

        {/* ── LEFT sidebar ── */}
        <div className="w-52 shrink-0 border-r border-slate-100 dark:border-slate-800 flex flex-col">

          {/* Search — inside left column, matches Zoho exactly */}
          <div className="px-3 pt-4 pb-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400 pointer-events-none" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="I'm looking for..."
                className="w-full pl-8 pr-3 py-2 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#7B68EE]/40 transition-all"
              />
            </div>
          </div>

          {/* Category list */}
          <div className="flex-1 overflow-y-auto pb-2">
            {CATEGORIES.map((cat) => {
              const isActive = cat.id === activeCatId && !query.trim();
              return (
                <button
                  key={cat.id}
                  onMouseEnter={() => { setQuery(""); setActiveCatId(cat.id); }}
                  onClick={() => { setQuery(""); setActiveCatId(cat.id); }}
                  className={`w-full text-left flex items-center justify-between px-4 py-2 text-sm transition-all ${
                    isActive
                      ? "text-accent-enacle dark:text-[#9d8ff5] font-semibold bg-violet-50 dark:bg-violet-950/40 border-r-2 border-accent-enacle"
                      : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  <span>{cat.label}</span>
                  {isActive && <ChevronDown className="h-3.5 w-3.5 -rotate-90 shrink-0" />}
                </button>
              );
            })}
          </div>

          {/* EXPLORE ALL button at bottom of sidebar */}
          <div className="px-3 py-3 border-t border-slate-100 dark:border-slate-800">
            <Link
              href="/products"
              onClick={onClose}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-white text-xs font-bold rounded-lg transition-colors"
              style={{ background: "linear-gradient(135deg,#7B68EE,#FD71AF)" }}
            >
              EXPLORE ALL PRODUCTS <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>

        {/* ── RIGHT grid ── */}
        <div className="flex-1 py-6 px-7 overflow-y-auto">
          <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-5">{heading}</h3>
          <div className="grid grid-cols-3 gap-4">
            {displayed.map((p, i) => (
              <ProductCard key={p.name + i} p={p} onClose={onClose} index={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Solutions Mega Menu ────────────────────────────────────────────── */
function SolutionsMegaMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="w-full bg-white dark:bg-[#0f172a] border-t border-slate-200 dark:border-slate-700 shadow-2xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-4">Solutions by team</p>
        <div className="grid grid-cols-3 gap-3">
          {SOLUTIONS_MENU.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div key={s.label} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.035 }}>
                <Link
                  href={s.href}
                  onClick={onClose}
                  className="flex items-center gap-3 p-3.5 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-violet-200 dark:hover:border-violet-700 hover:shadow-sm bg-white dark:bg-[#111827] hover:bg-violet-50/40 dark:hover:bg-violet-950/20 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform" style={{ backgroundColor: s.color + "22" }}>
                    <Icon className="h-5 w-5" style={{ color: s.color }} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800 dark:text-white group-hover:text-accent-enacle dark:group-hover:text-[#9d8ff5] transition-colors">{s.label}</p>
                    <p className="text-[11px] text-slate-400 dark:text-slate-500">{s.desc}</p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ─── Platform Mega Menu ─────────────────────────────────────────────── */
function PlatformMegaMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="w-full bg-white dark:bg-[#0f172a] border-t border-slate-200 dark:border-slate-700 shadow-2xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-4">Platform capabilities</p>
        <div className="grid grid-cols-3 gap-3">
          {PLATFORM_MENU.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div key={s.label} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.035 }}>
                <Link
                  href={s.href}
                  onClick={onClose}
                  className="flex items-center gap-3 p-3.5 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-violet-200 dark:hover:border-violet-700 hover:shadow-sm bg-white dark:bg-[#111827] hover:bg-violet-50/40 dark:hover:bg-violet-950/20 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform" style={{ backgroundColor: s.color + "22" }}>
                    <Icon className="h-5 w-5" style={{ color: s.color }} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800 dark:text-white group-hover:text-accent-enacle dark:group-hover:text-[#9d8ff5] transition-colors">{s.label}</p>
                    <p className="text-[11px] text-slate-400 dark:text-slate-500">{s.desc}</p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ─── Main Header ────────────────────────────────────────────────────── */
export function Header() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExp, setMobileExp] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const close = useCallback(() => setOpen(null), []);

  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => setOpen(null), 120);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) close();
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, [close]);

  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === "Escape") { close(); setMobileOpen(false); }
    };
    document.addEventListener("keydown", fn);
    return () => document.removeEventListener("keydown", fn);
  }, [close]);

  useEffect(() => {
    return () => { if (closeTimer.current) clearTimeout(closeTimer.current); };
  }, []);

  const NAV = [
    { label: "Products",   href: "/products",   mega: true  },
    { label: "Platform",   href: "/platform",   mega: true  },
    { label: "Solutions",  href: "/solutions",  mega: true  },
    { label: "Enterprise", href: "/enterprise", mega: false },
    { label: "Pricing",    href: "/pricing",    mega: false },
    { label: "Resources",  href: "/resources",  mega: false },
    { label: "Customers",  href: "/customers",  mega: false },
    { label: "Careers",    href: "/careers",    mega: false },
    { label: "Partners",   href: "/partners",   mega: false },
    { label: "Contact",    href: "/contact",    mega: false },
  ];

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-slate-200/80 dark:border-slate-700/60 bg-white/95 dark:bg-[#0a0f1e]/95 backdrop-blur-md shadow-sm"
          : "border-transparent bg-white/90 dark:bg-[#0a0f1e]/90 backdrop-blur-sm"
      }`}
    >
      {/* ── Top nav bar ── */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-15 items-center justify-between gap-6">

          {/* Logo */}
          <Link href="/" onClick={close} className="flex items-center gap-2.5 shrink-0">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center shadow-md" style={{ background: "linear-gradient(135deg,#7B68EE,#FD71AF)", boxShadow: "0 4px 14px rgba(123,104,238,0.35)" }}>
              <Zap className="h-4 w-4 text-white" />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">Enacle</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5 flex-1">
            {NAV.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => { if (item.mega) { cancelClose(); setOpen(item.label); } }}
                onMouseLeave={() => { if (item.mega) scheduleClose(); }}
              >
                {item.mega ? (
                  <button
                    onClick={() => setOpen((p) => (p === item.label ? null : item.label))}
                    className={`flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors select-none ${
                      open === item.label
                        ? "text-accent-enacle dark:text-[#9d8ff5] bg-violet-50 dark:bg-violet-950/40"
                        : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800"
                    }`}
                  >
                    {item.label}
                    <motion.span animate={{ rotate: open === item.label ? 180 : 0 }} transition={{ duration: 0.2 }} className="inline-flex">
                      <ChevronDown className="h-3.5 w-3.5" />
                    </motion.span>
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    onClick={close}
                    className="flex items-center px-3.5 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right CTAs */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <ThemeToggle />
            <Link
              href="/login"
              onClick={close}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white px-3 py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              onClick={close}
              className="inline-flex items-center gap-1.5 text-white font-semibold text-sm px-4 py-2 rounded-lg transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(135deg,#7B68EE,#FD71AF)" }}
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile toggle */}
          <div className="lg:hidden flex items-center gap-1">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {mobileOpen
                ? <X className="h-5 w-5 text-slate-700 dark:text-slate-200" />
                : <Menu className="h-5 w-5 text-slate-700 dark:text-slate-200" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* ── Desktop Mega Menus ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key={open}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="hidden lg:block"
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
          >
            {open === "Products"  && <ProductsMegaMenu  onClose={close} />}
            {open === "Solutions" && <SolutionsMegaMenu onClose={close} />}
            {open === "Platform"  && <PlatformMegaMenu  onClose={close} />}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="lg:hidden border-t border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-900 overflow-hidden"
          >
            <div className="px-4 py-3 space-y-0.5">
              {NAV.map((item) => (
                <div key={item.label}>
                  {item.mega ? (
                    <>
                      <button
                        onClick={() => setMobileExp((p) => (p === item.label ? null : item.label))}
                        className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                      >
                        {item.label}
                        <motion.span animate={{ rotate: mobileExp === item.label ? 180 : 0 }} transition={{ duration: 0.2 }}>
                          <ChevronDown className="h-4 w-4" />
                        </motion.span>
                      </button>
                      <AnimatePresence initial={false}>
                        {mobileExp === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden ml-3 border-l-2 border-slate-100 dark:border-slate-800"
                          >
                            {(item.label === "Products"
                              ? CATEGORIES.flatMap((c) => c.products.map((p) => ({ label: p.name, href: p.href })))
                              : item.label === "Solutions"
                              ? SOLUTIONS_MENU.map((s) => ({ label: s.label, href: s.href }))
                              : PLATFORM_MENU.map((s) => ({ label: s.label, href: s.href }))
                            )
                              .filter((v, i, a) => a.findIndex((x) => x.label === v.label) === i)
                              .map((sub) => (
                                <Link
                                  key={sub.label}
                                  href={sub.href}
                                  onClick={() => { setMobileOpen(false); setMobileExp(null); }}
                                  className="flex items-center gap-2 px-4 py-2 text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 rounded-r-lg transition-colors"
                                >
                                  <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600 shrink-0" />
                                  {sub.label}
                                </Link>
                              ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-3 mt-1 border-t border-slate-100 dark:border-slate-700 flex flex-col gap-2">
                <Link
                  href="/login"
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-300 text-center hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg"
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setMobileOpen(false)}
                  className="block text-white font-semibold text-sm px-4 py-2.5 rounded-lg text-center transition-opacity hover:opacity-90"
                  style={{ background: "linear-gradient(135deg,#7B68EE,#FD71AF)" }}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
