"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { ChevronDown, ArrowRight, Bot, Brain, GitBranch, Clock, Calendar, FileText, LayoutGrid, Target, MessageSquare, Layers, BarChart3, Users, DollarSign, Globe, Code2, Cpu, Mail, TrendingUp, Package, ShoppingCart, Headphones, Shield, Database, Smartphone, PieChart, Workflow, Building2, CreditCard, BookOpen, Megaphone, Settings, SunMedium, Zap } from "lucide-react";

// Product type definition
interface Product {
  icon: React.ElementType;
  sub: string;
  name: string;
  desc: string;
  color: string;
  href: string;
}

interface Category {
  id: string;
  label: string;
  products: Product[];
}

// Product Categories Data
const CATEGORIES: Category[] = [
  {
    id: "recent",
    label: "Recent Launches",
    products: [
      { icon: SunMedium,   sub: "Enacle", name: "Solar CRM",           desc: "CRM built for solar energy businesses to manage leads, installations, and service.",       color: "#f59e0b", href: "/products/solar-crm" },
      { icon: Brain,       sub: "Enacle", name: "ERP",            desc: "ERP built for faster, smarter operations across finance, ops, and IT.",                   color: "#2563eb", href: "/products#erp" },
      { icon: ShoppingCart,sub: "Enacle", name: "Procurement",    desc: "Complete source-to-pay platform that turns procurement into a growth lever.",             color: "#dc2626", href: "/products#procurement" },
      { icon: CreditCard,  sub: "Enacle", name: "Spend",          desc: "Control every business spend from cards to expenses in one place.",                        color: "#ea580c", href: "/products#spend" },
      { icon: Workflow,    sub: "Enacle", name: "MCP",            desc: "Make apps agent-ready and orchestrate agentic workflows with prompts.",                    color: "#7c3aed", href: "/products#mcp" },
      { icon: LayoutGrid,  sub: "Enacle", name: "POS",            desc: "Modern retail POS to sell better, sync inventory, and delight customers.",                 color: "#0891b2", href: "/products#pos" },
      { icon: Globe,       sub: "Enacle", name: "Domains",        desc: "Easy domain registration, transfers, and secure DNS management.",                          color: "#16a34a", href: "/products#domains" },
    ],
  },
  {
    id: "sales",
    label: "Sales",
    products: [
      { icon: TrendingUp,  sub: "Enacle", name: "CRM",           desc: "AI-powered CRM to manage pipeline, leads, and deals at scale.",                             color: "#dc2626", href: "/products#crm" },
      { icon: Users,       sub: "Enacle", name: "Bigin",         desc: "Pipeline-centric CRM built for small teams that need speed.",                               color: "#0891b2", href: "/products#bigin" },
      { icon: BookOpen,    sub: "Enacle", name: "SalesIQ",       desc: "Live chat and visitor intelligence to convert website traffic.",                            color: "#16a34a", href: "/products#salesiq" },
      { icon: DollarSign,  sub: "Enacle", name: "Subscriptions", desc: "Recurring billing platform for subscription-first businesses.",                              color: "#ea580c", href: "/products#subscriptions" },
      { icon: FileText,    sub: "Enacle", name: "Sign",          desc: "eSignature solution to send, sign, and manage documents online.",                           color: "#7c3aed", href: "/products#sign" },
      { icon: Target,      sub: "Enacle", name: "Contracts",     desc: "Contract lifecycle management for legal and revenue teams.",                                color: "#2563eb", href: "/products#contracts" },
    ],
  },
  {
    id: "marketing",
    label: "Marketing",
    products: [
      { icon: Megaphone,   sub: "Enacle", name: "Campaigns",     desc: "Email and SMS marketing with automation, AI copy, and analytics.",                         color: "#ea580c", href: "/products#campaigns" },
      { icon: Globe,       sub: "Enacle", name: "Social",        desc: "Social media management and publishing across every channel.",                             color: "#2563eb", href: "/products#social" },
      { icon: BarChart3,   sub: "Enacle", name: "Marketing Plus",desc: "Unified marketing suite to plan, execute, and measure campaigns.",                         color: "#9333ea", href: "/products#marketingplus" },
      { icon: PieChart,    sub: "Enacle", name: "PageSense",     desc: "Conversion rate optimization, heatmaps, and funnel analytics.",                            color: "#0891b2", href: "/products#pagesense" },
      { icon: Smartphone,  sub: "Enacle", name: "Backstage",     desc: "Event management platform for virtual, hybrid, and in-person events.",                    color: "#16a34a", href: "/products#backstage" },
      { icon: Brain,       sub: "Enacle", name: "LandingPage",   desc: "Drag-and-drop landing page builder with AI testing and insights.",                        color: "#dc2626", href: "/products#landingpage" },
    ],
  },
  {
    id: "commerce",
    label: "Commerce and POS",
    products: [
      { icon: LayoutGrid,  sub: "Enacle", name: "POS",           desc: "Modern retail POS to manage catalog, inventory, and checkout.",                           color: "#0891b2", href: "/products#pos" },
      { icon: ShoppingCart,sub: "Enacle", name: "Commerce",      desc: "Launch and scale your online store with native payments and shipping.",                    color: "#16a34a", href: "/products#commerce" },
      { icon: CreditCard,  sub: "Enacle", name: "Payments",      desc: "Accept payments, manage subscriptions, and reconcile payouts effortlessly.",               color: "#2563eb", href: "/products#payments" },
      { icon: ShoppingCart,sub: "Enacle", name: "Inventory",     desc: "Real-time inventory and order management across warehouses and channels.",                 color: "#ea580c", href: "/products#inventory" },
    ],
  },
  {
    id: "service",
    label: "Service",
    products: [
      { icon: Headphones,    sub: "Enacle", name: "Desk",        desc: "Customer support helpdesk with AI triage and omni-channel support.",                      color: "#dc2626", href: "/products#desk" },
      { icon: MessageSquare, sub: "Enacle", name: "Cliq",        desc: "Team messaging and collaboration with channels, calls, and AI copilots.",                 color: "#2563eb", href: "/products#cliq" },
      { icon: Bot,           sub: "Enacle", name: "SalesIQ",     desc: "Live chat, chatbots, and visitor intelligence platform for support.",                    color: "#16a34a", href: "/products#salesiq" },
      { icon: BookOpen,      sub: "Enacle", name: "Assist",      desc: "Remote support software for customer and IT teams.",                                      color: "#7c3aed", href: "/products#assist" },
    ],
  },
  {
    id: "finance",
    label: "Finance",
    products: [
      { icon: BarChart3,   sub: "Enacle", name: "Books",         desc: "Online accounting to manage finances, compliance, and reporting.",                        color: "#16a34a", href: "/products#books" },
      { icon: CreditCard,  sub: "Enacle", name: "Invoice",       desc: "Professional invoicing and billing software with smart reminders.",                       color: "#2563eb", href: "/products#invoice" },
      { icon: DollarSign,  sub: "Enacle", name: "Expense",       desc: "Expense reporting and spend controls for every team.",                                    color: "#ea580c", href: "/products#expense" },
      { icon: PieChart,    sub: "Enacle", name: "Payroll",       desc: "Complete payroll with compliance and multi-country support.",                              color: "#9333ea", href: "/products#payroll" },
      { icon: ShoppingCart,sub: "Enacle", name: "Checkout",      desc: "Smart payment checkout flows for online businesses.",                                    color: "#dc2626", href: "/products#checkout" },
    ],
  },
];

// Product Card Component
function ProductCard({ p, onClose }: { p: Product; onClose: () => void }) {
  const Icon = p.icon;
  return (
    <Link
      href={p.href}
      onClick={onClose}
      className="group flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
        style={{ backgroundColor: p.color + "18", border: `1px solid ${p.color}30` }}
      >
        <Icon className="h-5 w-5" style={{ color: p.color }} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 leading-none tracking-wide mb-1">{p.sub}</p>
        <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
          {p.name}
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">{p.desc}</p>
      </div>
    </Link>
  );
}

// All Products Button with Mega Menu
export function AllProductsButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCatId, setActiveCatId] = useState("recent");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const activeCat = CATEGORIES.find((c) => c.id === activeCatId) ?? CATEGORIES[0];

  // Close on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close on escape key
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      {/* All Products Button - Zoho Style */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        {/* Enacle Logo Icon */}
        <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg,#7B68EE,#FD71AF)" }}>
          <Zap className="h-4 w-4 text-white" />
        </div>
        
        <span className="text-lg font-semibold text-gray-900 dark:text-white">All Products</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-5 w-5 text-gray-500" />
        </motion.div>
      </button>

      {/* Mega Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Dropdown Panel */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-full left-0 mt-2 w-[900px] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 z-50 overflow-hidden"
            >
              <div className="flex">
                {/* Left Sidebar - Categories */}
                <div className="w-56 bg-slate-50 dark:bg-slate-800/50 p-4 border-r border-slate-200 dark:border-slate-700">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">
                    Categories
                  </h3>
                  <nav className="space-y-1">
                    {CATEGORIES.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setActiveCatId(cat.id)}
                        className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                          activeCatId === cat.id
                            ? "bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm"
                            : "text-slate-600 dark:text-slate-300 hover:bg-white/60 dark:hover:bg-slate-700/50"
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </nav>

                  {/* Explore All Link */}
                  <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
                    <Link
                      href="/products"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-2 px-3 py-2 text-sm font-bold text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                    >
                      Explore all products
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                {/* Right Content - Products Grid */}
                <div className="flex-1 p-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{activeCat.label}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{activeCat.products.length} products</p>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {activeCat.products.map((product) => (
                      <ProductCard key={product.name} p={product} onClose={() => setIsOpen(false)} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  <span className="font-bold">25+ products</span> in one subscription
                </p>
                <Link
                  href="/pricing"
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View pricing →
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

// Simple Header for Product Pages - Only All Products Button
export function ProductPageHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Only All Products Button */}
          <AllProductsButton />
        </div>
      </div>
    </header>
  );
}
