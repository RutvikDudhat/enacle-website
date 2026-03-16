"use client";
import { useState } from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { Star, ArrowUpRight, Building2, TrendingUp, Users2, Zap } from "lucide-react";

type Industry = "All" | "Engineering" | "Marketing" | "Sales" | "Finance" | "Operations" | "Education";

const INDUSTRIES: Industry[] = ["All", "Engineering", "Marketing", "Sales", "Finance", "Operations", "Education"];

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  industry: Industry;
  companySize: string;
  avatar: string;
  gradient: string;
  quote: string;
  result: string;
  resultIcon: React.ElementType;
  resultColor: string;
  resultBg: string;
  resultBorder: string;
  stars: number;
  featured?: boolean;
}

const TESTIMONIALS: Testimonial[] = [
  /* ── Featured ── */
  {
    id: 1,
    name: "Sarah Chen",
    role: "VP of Engineering",
    company: "Atlassian",
    industry: "Engineering",
    companySize: "10,000+ employees",
    avatar: "SC",
    gradient: "from-blue-600 to-indigo-600",
    quote: "Enacle replaced 11 tools we were paying for separately. Our engineering team went from 3 standups a week to one, because the AI surfaces everything they need automatically. Shipping velocity is up 40% in 6 months.",
    result: "40% faster shipping",
    resultIcon: Zap,
    resultColor: "text-blue-600",
    resultBg: "bg-blue-50 dark:bg-blue-950/40",
    resultBorder: "border-blue-200 dark:border-blue-800",
    stars: 5,
    featured: true,
  },
  {
    id: 2,
    name: "Marcus Williams",
    role: "Chief Marketing Officer",
    company: "Spotify",
    industry: "Marketing",
    companySize: "6,000+ employees",
    avatar: "MW",
    gradient: "from-green-500 to-emerald-600",
    quote: "Brain MAX is the unfair advantage our marketing team needed. Competitor research, campaign briefs, performance summaries — all drafted in minutes. We&apos;ve cut content production time by 65% and doubled output.",
    result: "65% faster content",
    resultIcon: TrendingUp,
    resultColor: "text-emerald-600",
    resultBg: "bg-emerald-50 dark:bg-emerald-950/40",
    resultBorder: "border-emerald-200 dark:border-emerald-800",
    stars: 5,
    featured: true,
  },
  {
    id: 3,
    name: "Priya Nair",
    role: "Head of Revenue Operations",
    company: "Razorpay",
    industry: "Sales",
    companySize: "2,500+ employees",
    avatar: "PN",
    gradient: "from-violet-600 to-purple-600",
    quote: "Our sales team used to miss follow-ups constantly. The Enacle AI agent now handles lead qualification, auto-assigns tasks, and even drafts personalised follow-up emails. Our pipeline conversion went from 18% to 31%.",
    result: "31% pipeline conversion",
    resultIcon: TrendingUp,
    resultColor: "text-violet-600",
    resultBg: "bg-violet-50 dark:bg-violet-950/40",
    resultBorder: "border-violet-200 dark:border-violet-800",
    stars: 5,
    featured: true,
  },
  /* ── Regular grid ── */
  {
    id: 4,
    name: "James Liu",
    role: "CTO",
    company: "Wayfair",
    industry: "Engineering",
    companySize: "15,000+ employees",
    avatar: "JL",
    gradient: "from-orange-500 to-amber-500",
    quote: "We migrated from Jira + Confluence + Slack to Enacle in 3 weeks. The AI-powered sprint planning alone saves each engineer 2 hours every week.",
    result: "2 hrs saved per engineer/week",
    resultIcon: Zap,
    resultColor: "text-amber-600",
    resultBg: "bg-amber-50 dark:bg-amber-950/40",
    resultBorder: "border-amber-200 dark:border-amber-800",
    stars: 5,
  },
  {
    id: 5,
    name: "Anya Petrova",
    role: "Director of Finance",
    company: "Booking.com",
    industry: "Finance",
    companySize: "20,000+ employees",
    avatar: "AP",
    gradient: "from-sky-500 to-blue-600",
    quote: "Financial reporting used to take 3 days every quarter. With Enacle's AI dashboards and automated data pulls, we produce the same reports in 4 hours.",
    result: "Reports 18× faster",
    resultIcon: TrendingUp,
    resultColor: "text-sky-600",
    resultBg: "bg-sky-50 dark:bg-sky-950/40",
    resultBorder: "border-sky-200 dark:border-sky-800",
    stars: 5,
  },
  {
    id: 6,
    name: "David Kim",
    role: "Operations Lead",
    company: "Shopify",
    industry: "Operations",
    companySize: "10,000+ employees",
    avatar: "DK",
    gradient: "from-emerald-600 to-teal-500",
    quote: "Managing 200+ contractors across 15 time zones was chaos. Enacle's scheduling and automation features made it genuinely manageable — and our on-time delivery rate jumped to 97%.",
    result: "97% on-time delivery",
    resultIcon: Users2,
    resultColor: "text-emerald-600",
    resultBg: "bg-emerald-50 dark:bg-emerald-950/40",
    resultBorder: "border-emerald-200 dark:border-emerald-800",
    stars: 5,
  },
  {
    id: 7,
    name: "Prof. Linda Torres",
    role: "Dean of Technology",
    company: "Harvard Extension",
    industry: "Education",
    companySize: "500+ staff",
    avatar: "LT",
    gradient: "from-rose-600 to-red-500",
    quote: "We use Enacle to coordinate curriculum development across 120 faculty members. The docs, task management, and AI review summaries are exceptional — nothing else comes close for academic workflows.",
    result: "120 faculty coordinated",
    resultIcon: Users2,
    resultColor: "text-rose-600",
    resultBg: "bg-rose-50 dark:bg-rose-950/40",
    resultBorder: "border-rose-200 dark:border-rose-800",
    stars: 5,
  },
  {
    id: 8,
    name: "Ravi Shankar",
    role: "Co-Founder & CEO",
    company: "GrowthHive",
    industry: "Marketing",
    companySize: "50 employees",
    avatar: "RS",
    gradient: "from-amber-500 to-orange-500",
    quote: "As a small marketing agency, we compete with teams 10× our size because of Enacle. The AI agents handle client reporting, campaign briefs, and competitive research automatically.",
    result: "Compete at 10× our size",
    resultIcon: TrendingUp,
    resultColor: "text-amber-600",
    resultBg: "bg-amber-50 dark:bg-amber-950/40",
    resultBorder: "border-amber-200 dark:border-amber-800",
    stars: 5,
  },
  {
    id: 9,
    name: "Tom Nakamura",
    role: "VP Sales",
    company: "NVIDIA",
    industry: "Sales",
    companySize: "25,000+ employees",
    avatar: "TN",
    gradient: "from-green-600 to-lime-500",
    quote: "Deal coaching, call summaries, competitive battlecards — Enacle's AI agents prepare our reps before every single call. Our average deal size increased by 28% in the first year.",
    result: "28% larger deal size",
    resultIcon: TrendingUp,
    resultColor: "text-green-600",
    resultBg: "bg-green-50 dark:bg-green-950/40",
    resultBorder: "border-green-200 dark:border-green-800",
    stars: 5,
  },
  {
    id: 10,
    name: "Fatima Al-Rashid",
    role: "Chief of Staff",
    company: "Verizon",
    industry: "Operations",
    companySize: "100,000+ employees",
    avatar: "FA",
    gradient: "from-red-600 to-rose-500",
    quote: "I oversee execution for a team of 800. Enacle gives me a real-time view of everything — blockers, milestones, headcount — in one place. My weekly prep time dropped from 6 hours to under 1.",
    result: "6 hrs → 45 min weekly prep",
    resultIcon: Zap,
    resultColor: "text-red-600",
    resultBg: "bg-red-50 dark:bg-red-950/40",
    resultBorder: "border-red-200 dark:border-red-800",
    stars: 5,
  },
  {
    id: 11,
    name: "Melissa Grant",
    role: "CFO",
    company: "Dropbox",
    industry: "Finance",
    companySize: "3,000+ employees",
    avatar: "MG",
    gradient: "from-indigo-500 to-blue-600",
    quote: "Enacle's budget tracking and AI anomaly detection caught a ₹12 lakh over-spend before it hit our books. The automated forecasting is now a core part of our monthly close process.",
    result: "Caught ₹12L overspend",
    resultIcon: Building2,
    resultColor: "text-indigo-600",
    resultBg: "bg-indigo-50 dark:bg-indigo-950/40",
    resultBorder: "border-indigo-200 dark:border-indigo-800",
    stars: 5,
  },
  {
    id: 12,
    name: "Carlos Mendez",
    role: "Engineering Manager",
    company: "Freshworks",
    industry: "Engineering",
    companySize: "5,000+ employees",
    avatar: "CM",
    gradient: "from-teal-500 to-cyan-500",
    quote: "Sprint planning, retros, incident reviews — our entire engineering rhythm runs on Enacle now. The AI sprint planner alone reduced planning sessions from 3 hours to 40 minutes.",
    result: "3 hrs → 40 min sprints",
    resultIcon: Zap,
    resultColor: "text-teal-600",
    resultBg: "bg-teal-50 dark:bg-teal-950/40",
    resultBorder: "border-teal-200 dark:border-teal-800",
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

function TestimonialCard({ t, featured = false }: { t: Testimonial; featured?: boolean }) {
  const ResultIcon = t.resultIcon;
  return (
    <div className={`relative rounded-2xl border ${featured ? "border-violet-200 dark:border-violet-800" : "border-zinc-200 dark:border-slate-700"} bg-white dark:bg-slate-900 p-6 flex flex-col h-full overflow-hidden hover:shadow-lg hover:border-violet-300 dark:hover:border-violet-700 transition-all duration-200 ${featured ? "shadow-md shadow-violet-100/50 dark:shadow-violet-950/20" : ""}`}>
      <BorderBeam size={featured ? 350 : 220} duration={featured ? 9 : 14} colorFrom="#7B68EE" colorTo="#FD71AF" />

      {/* Stars */}
      <div className="flex items-center justify-between mb-4">
        <StarRating count={t.stars} />
        {featured && (
          <span className="text-[10px] font-black uppercase tracking-widest bg-violet-100 dark:bg-violet-950/60 border border-violet-200 dark:border-violet-800 px-2.5 py-0.5 rounded-full" style={{ color: "#7B68EE" }}>
            Featured
          </span>
        )}
      </div>

      {/* Quote */}
      <blockquote className="flex-1 mb-5">
        <span className="text-3xl text-zinc-200 dark:text-slate-700 font-black leading-none">&ldquo;</span>
        <p className={`-mt-2 ${featured ? "text-base" : "text-sm"} text-zinc-700 dark:text-slate-300 leading-relaxed`}>
          {t.quote}
        </p>
      </blockquote>

      {/* Result badge */}
      <div className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1.5 rounded-lg border ${t.resultBorder} ${t.resultBg} ${t.resultColor} mb-5 self-start`}>
        <ResultIcon className="h-3 w-3" />
        {t.result}
      </div>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-zinc-100 dark:border-slate-800">
        <div className={`w-10 h-10 rounded-xl bg-linear-to-br ${t.gradient} flex items-center justify-center shrink-0 shadow-sm`}>
          <span className="text-xs font-black text-white">{t.avatar}</span>
        </div>
        <div className="min-w-0">
          <p className="text-sm font-bold text-zinc-900 dark:text-white truncate">{t.name}</p>
          <p className="text-xs text-slate-400 dark:text-slate-500 truncate">{t.role} · {t.company}</p>
        </div>
        <div className="ml-auto shrink-0">
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${t.resultBorder} ${t.resultBg} ${t.resultColor}`}>
            {t.industry}
          </span>
        </div>
      </div>
    </div>
  );
}

export function CustomersTestimonials() {
  const [filter, setFilter] = useState<Industry>("All");

  const featured = TESTIMONIALS.filter((t) => t.featured);
  const regular = TESTIMONIALS.filter(
    (t) => !t.featured && (filter === "All" || t.industry === filter)
  );

  return (
    <section className="relative bg-zinc-50 dark:bg-[#060b18] py-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:40px_40px] opacity-50" />
      <div className="pointer-events-none absolute top-0 right-0 w-150 h-100 rounded-full blur-3xl" style={{ background: "rgba(123,104,238,0.08)" }} />
      <div className="pointer-events-none absolute bottom-0 left-0 w-125 h-75 rounded-full blur-3xl" style={{ background: "rgba(253,113,175,0.08)" }} />

      <div className="relative z-10 mx-auto max-w-350 px-4 sm:px-6 lg:px-8">

        {/* ── Featured 3-up ── */}
        <BlurFade className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: "#7B68EE" }}>What Our Customers Say</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0f172a] dark:text-white mb-4">
            Real results, real teams
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Don&apos;t take our word for it — hear directly from the people using Enacle every day.
          </p>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20">
          {featured.map((t, i) => (
            <BlurFade key={t.id} delay={i * 0.08}>
              <TestimonialCard t={t} featured />
            </BlurFade>
          ))}
        </div>

        {/* ── Filter + grid ── */}
        <BlurFade className="mb-7">
          <div className="flex flex-wrap gap-2">
            {INDUSTRIES.map((ind) => {
              const count = ind === "All"
                ? TESTIMONIALS.filter((t) => !t.featured).length
                : TESTIMONIALS.filter((t) => !t.featured && t.industry === ind).length;
              return (
                <button
                  key={ind}
                  onClick={() => setFilter(ind)}
                  className={`text-xs font-bold px-3.5 py-2 rounded-xl border transition-all duration-150 ${
                    filter === ind
                      ? "bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 border-zinc-900 dark:border-white shadow-sm"
                      : "bg-white dark:bg-slate-900 text-zinc-500 dark:text-slate-400 border-zinc-200 dark:border-slate-700 hover:border-zinc-400 dark:hover:border-slate-500"
                  }`}
                >
                  {ind}
                  <span className={`ml-1.5 text-[10px] px-1.5 py-0.5 rounded-full font-bold ${filter === ind ? "bg-white/20 dark:bg-black/20" : "bg-zinc-100 dark:bg-slate-800"}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {regular.map((t, i) => (
            <BlurFade key={t.id} delay={i * 0.05}>
              <TestimonialCard t={t} />
            </BlurFade>
          ))}
        </div>

      </div>
    </section>
  );
}
