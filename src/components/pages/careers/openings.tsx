"use client";
import { useState } from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import {
  Code2, BarChart3, Megaphone, Headphones, PenTool,
  Briefcase, MapPin, Clock, ArrowUpRight, ChevronDown,
  ChevronUp, Search, Star, Zap, Users2,
} from "lucide-react";

type Dept =
  | "All"
  | "Engineering"
  | "Product"
  | "Design"
  | "Marketing"
  | "Sales"
  | "Operations"
  | "Support";

const DEPT_ICONS: Record<Dept, React.ElementType> = {
  All: Briefcase,
  Engineering: Code2,
  Product: BarChart3,
  Design: PenTool,
  Marketing: Megaphone,
  Sales: Star,
  Operations: Users2,
  Support: Headphones,
};

const DEPT_COLORS: Record<Dept, { text: string; bg: string; border: string }> = {
  All:         { text: "text-zinc-600 dark:text-slate-300",    bg: "bg-zinc-100 dark:bg-slate-800",       border: "border-zinc-200 dark:border-slate-700" },
  Engineering: { text: "text-blue-600 dark:text-blue-400",    bg: "bg-blue-50 dark:bg-blue-950/40",       border: "border-blue-200 dark:border-blue-800" },
  Product:     { text: "text-violet-600 dark:text-violet-400",bg: "bg-violet-50 dark:bg-violet-950/40",   border: "border-violet-200 dark:border-violet-800" },
  Design:      { text: "text-pink-600 dark:text-pink-400",    bg: "bg-pink-50 dark:bg-pink-950/40",       border: "border-pink-200 dark:border-pink-800" },
  Marketing:   { text: "text-amber-600 dark:text-amber-400",  bg: "bg-amber-50 dark:bg-amber-950/40",     border: "border-amber-200 dark:border-amber-800" },
  Sales:       { text: "text-emerald-600 dark:text-emerald-400",bg:"bg-emerald-50 dark:bg-emerald-950/40",border: "border-emerald-200 dark:border-emerald-800" },
  Operations:  { text: "text-cyan-600 dark:text-cyan-400",    bg: "bg-cyan-50 dark:bg-cyan-950/40",       border: "border-cyan-200 dark:border-cyan-800" },
  Support:     { text: "text-orange-600 dark:text-orange-400",bg: "bg-orange-50 dark:bg-orange-950/40",   border: "border-orange-200 dark:border-orange-800" },
};

interface Job {
  id: number;
  title: string;
  dept: Dept;
  location: string;
  type: "Full-time" | "Part-time" | "Contract";
  remote: boolean;
  seniority: "IC1" | "IC2" | "IC3" | "IC4" | "Staff" | "Principal" | "Lead" | "Manager" | "Director";
  seniorityLabel: string;
  description: string;
  highlights: string[];
  salary: string;
  posted: string;
  hot?: boolean;
}

const JOBS: Job[] = [
  /* ── Engineering ── */
  {
    id: 1,
    title: "Staff Software Engineer — AI Platform",
    dept: "Engineering",
    location: "Remote / San Francisco",
    type: "Full-time",
    remote: true,
    seniority: "Staff",
    seniorityLabel: "Staff",
    description: "Own the foundational AI inference and agent orchestration layer that powers all Enacle AI features across millions of users.",
    highlights: ["LLM inference optimization", "Agent runtime design", "Python + TypeScript", "$200k–$250k + equity"],
    salary: "$200k–$250k",
    posted: "2 days ago",
    hot: true,
  },
  {
    id: 2,
    title: "Senior Full-Stack Engineer — Core Product",
    dept: "Engineering",
    location: "Remote / London",
    type: "Full-time",
    remote: true,
    seniority: "IC3",
    seniorityLabel: "Senior",
    description: "Build the core workspace — task management, real-time collaboration, and the data model that everything else depends on.",
    highlights: ["Next.js / React", "Golang backend", "Real-time CRDT sync", "$160k–$195k + equity"],
    salary: "$160k–$195k",
    posted: "5 days ago",
  },
  {
    id: 3,
    title: "Senior Infrastructure Engineer",
    dept: "Engineering",
    location: "Remote",
    type: "Full-time",
    remote: true,
    seniority: "IC3",
    seniorityLabel: "Senior",
    description: "Scale Enacle's infrastructure to 10× current load — Kubernetes, edge compute, zero-downtime deploys.",
    highlights: ["Kubernetes / Terraform", "AWS / GCP", "Observability stack", "$155k–$190k + equity"],
    salary: "$155k–$190k",
    posted: "1 week ago",
  },
  {
    id: 4,
    title: "Software Engineer — Mobile (iOS/Android)",
    dept: "Engineering",
    location: "Remote / Bangalore",
    type: "Full-time",
    remote: true,
    seniority: "IC2",
    seniorityLabel: "Mid-Level",
    description: "Ship the Enacle mobile app used by 200k+ daily active users across iOS and Android.",
    highlights: ["React Native", "Swift / Kotlin", "Offline-first sync", "$120k–$150k + equity"],
    salary: "$120k–$150k",
    posted: "3 days ago",
  },
  /* ── Product ── */
  {
    id: 5,
    title: "Senior Product Manager — AI Features",
    dept: "Product",
    location: "Remote / San Francisco",
    type: "Full-time",
    remote: true,
    seniority: "IC3",
    seniorityLabel: "Senior",
    description: "Define and ship AI-powered features — from intelligent suggestions to autonomous agents — that delight millions of users.",
    highlights: ["AI product strategy", "0→1 ownership", "Cross-functional leadership", "$175k–$210k + equity"],
    salary: "$175k–$210k",
    posted: "1 day ago",
    hot: true,
  },
  {
    id: 6,
    title: "Product Manager — Growth",
    dept: "Product",
    location: "Remote / London",
    type: "Full-time",
    remote: true,
    seniority: "IC2",
    seniorityLabel: "Mid-Level",
    description: "Own the activation, expansion, and retention loops that turn trials into long-term customers.",
    highlights: ["PLG strategy", "A/B experimentation", "Funnel analytics", "$140k–$165k + equity"],
    salary: "$140k–$165k",
    posted: "1 week ago",
  },
  /* ── Design ── */
  {
    id: 7,
    title: "Principal Product Designer — Design System",
    dept: "Design",
    location: "Remote / San Francisco",
    type: "Full-time",
    remote: true,
    seniority: "Principal",
    seniorityLabel: "Principal",
    description: "Architect and scale Enacle's design system to support 10 product surfaces with one cohesive visual language.",
    highlights: ["Figma + Tokens", "Component architecture", "Cross-squad impact", "$180k–$220k + equity"],
    salary: "$180k–$220k",
    posted: "4 days ago",
    hot: true,
  },
  {
    id: 8,
    title: "Senior UX Designer — Onboarding",
    dept: "Design",
    location: "Remote",
    type: "Full-time",
    remote: true,
    seniority: "IC3",
    seniorityLabel: "Senior",
    description: "Redesign the first-user experience to cut time-to-value from 20 minutes to under 5.",
    highlights: ["UX research", "Figma prototyping", "Activation metrics", "$140k–$165k + equity"],
    salary: "$140k–$165k",
    posted: "6 days ago",
  },
  /* ── Marketing ── */
  {
    id: 9,
    title: "Head of Content & SEO",
    dept: "Marketing",
    location: "Remote",
    type: "Full-time",
    remote: true,
    seniority: "Lead",
    seniorityLabel: "Lead",
    description: "Own Enacle's organic growth engine — long-form content, SEO strategy, thought leadership and distribution.",
    highlights: ["B2B SaaS SEO", "Content ops", "AI-assisted writing", "$130k–$160k + equity"],
    salary: "$130k–$160k",
    posted: "3 days ago",
  },
  {
    id: 10,
    title: "Senior Demand Gen Manager",
    dept: "Marketing",
    location: "Remote / San Francisco",
    type: "Full-time",
    remote: true,
    seniority: "IC3",
    seniorityLabel: "Senior",
    description: "Run paid acquisition, ABM, and marketing ops that fill the pipeline with qualified Enterprise deals.",
    highlights: ["Paid social / SEM", "ABM programs", "HubSpot / Marketo", "$130k–$155k + equity"],
    salary: "$130k–$155k",
    posted: "1 week ago",
  },
  /* ── Sales ── */
  {
    id: 11,
    title: "Enterprise Account Executive",
    dept: "Sales",
    location: "San Francisco / New York",
    type: "Full-time",
    remote: false,
    seniority: "IC3",
    seniorityLabel: "Senior",
    description: "Close seven-figure Enterprise contracts with Fortune 500 companies adopting Enacle as their operating platform.",
    highlights: ["$1M+ quota", "MEDDIC methodology", "SaaS enterprise sales", "$140k base + uncapped commission"],
    salary: "$140k + commission",
    posted: "2 days ago",
    hot: true,
  },
  {
    id: 12,
    title: "Sales Development Representative",
    dept: "Sales",
    location: "Remote / London",
    type: "Full-time",
    remote: true,
    seniority: "IC1",
    seniorityLabel: "Entry-Level",
    description: "Open new Enterprise conversations through outbound prospecting and turn them into qualified opportunities for AEs.",
    highlights: ["Outbound prospecting", "Salesforce CRM", "Clear promotion path", "$65k–$80k + OTE"],
    salary: "$65k–$80k OTE",
    posted: "5 days ago",
  },
  /* ── Operations ── */
  {
    id: 13,
    title: "Revenue Operations Manager",
    dept: "Operations",
    location: "Remote / San Francisco",
    type: "Full-time",
    remote: true,
    seniority: "IC3",
    seniorityLabel: "Senior",
    description: "Build the systems and insights that make our GTM teams operate at peak efficiency across CRM, data, and tooling.",
    highlights: ["Salesforce admin", "RevOps strategy", "Data modeling", "$130k–$155k + equity"],
    salary: "$130k–$155k",
    posted: "1 week ago",
  },
  /* ── Support ── */
  {
    id: 14,
    title: "Senior Customer Success Manager",
    dept: "Support",
    location: "Remote / London",
    type: "Full-time",
    remote: true,
    seniority: "IC3",
    seniorityLabel: "Senior",
    description: "Own a book of 30–40 Enterprise accounts, drive adoption, and ensure they renew and expand year over year.",
    highlights: ["QBR delivery", "Churn prevention", "Product champions", "$110k–$135k + equity"],
    salary: "$110k–$135k",
    posted: "4 days ago",
  },
  {
    id: 15,
    title: "Technical Support Engineer",
    dept: "Support",
    location: "Remote / Bangalore",
    type: "Full-time",
    remote: true,
    seniority: "IC2",
    seniorityLabel: "Mid-Level",
    description: "Be the first responder for Enterprise technical issues — deep debugging, API integrations, and customer empathy.",
    highlights: ["API debugging", "SQL / logs", "Customer empathy", "$70k–$90k + equity"],
    salary: "$70k–$90k",
    posted: "3 days ago",
  },
];

const DEPTS: Dept[] = [
  "All", "Engineering", "Product", "Design", "Marketing", "Sales", "Operations", "Support",
];

function JobCard({ job }: { job: Job }) {
  const [expanded, setExpanded] = useState(false);
  const cfg = DEPT_COLORS[job.dept];
  const DeptIcon = DEPT_ICONS[job.dept];

  return (
    <div className={`rounded-2xl border ${expanded ? "border-[#7B68EE]/40 dark:border-[#7B68EE]/40 shadow-lg shadow-violet-100/50 dark:shadow-violet-950/30" : "border-zinc-200 dark:border-slate-700"} bg-white dark:bg-slate-900 relative overflow-hidden transition-all duration-200 hover:border-[#7B68EE]/30 dark:hover:border-[#7B68EE]/30 hover:shadow-md`}>
      {expanded && <BorderBeam size={300} duration={10} colorFrom="#7B68EE" colorTo="#FD71AF" />}

      {/* Card top */}
      <button
        className="w-full text-left p-5 sm:p-6"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4 min-w-0">
            {/* Dept icon */}
            <div className={`shrink-0 w-11 h-11 rounded-xl border ${cfg.border} ${cfg.bg} flex items-center justify-center`}>
              <DeptIcon className={`h-5 w-5 ${cfg.text}`} />
            </div>

            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h3 className="text-base font-bold text-zinc-900 dark:text-white leading-snug">{job.title}</h3>
                {job.hot && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-orange-100 dark:bg-orange-950/50 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-800 px-2 py-0.5 rounded-full uppercase tracking-wider">
                    <Zap className="h-2.5 w-2.5" /> Hot
                  </span>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
                {/* Dept badge */}
                <span className={`inline-flex items-center gap-1 font-semibold ${cfg.text}`}>
                  <DeptIcon className="h-3 w-3" />{job.dept}
                </span>
                <span className="hidden sm:inline text-slate-300 dark:text-slate-700">·</span>
                <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{job.location}</span>
                <span className="hidden sm:inline text-slate-300 dark:text-slate-700">·</span>
                <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{job.type}</span>
                {job.remote && (
                  <>
                    <span className="hidden sm:inline text-slate-300 dark:text-slate-700">·</span>
                    <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />Remote OK
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Right: salary + expand */}
          <div className="flex flex-col items-end gap-2 shrink-0">
            <span className="text-sm font-bold text-zinc-900 dark:text-white whitespace-nowrap">{job.salary}</span>
            <div className={`w-7 h-7 rounded-lg ${expanded ? "bg-violet-100 dark:bg-violet-950/60" : "bg-zinc-100 dark:bg-slate-800"} flex items-center justify-center transition-colors`}>
              {expanded
                ? <ChevronUp className="h-4 w-4" style={{ color: "#7B68EE" }} />
                : <ChevronDown className="h-4 w-4 text-slate-400" />}
            </div>
          </div>
        </div>
      </button>

      {/* Expanded body */}
      {expanded && (
        <div className="px-5 sm:px-6 pb-6 border-t border-zinc-100 dark:border-slate-800">
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mt-4 mb-4">
            {job.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-5">
            {job.highlights.map((h) => (
              <span
                key={h}
                className={`text-xs font-semibold px-2.5 py-1 rounded-lg border ${cfg.border} ${cfg.bg} ${cfg.text}`}
              >
                {h}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400 dark:text-slate-500">Posted {job.posted}</span>
            <a
              href={`mailto:careers@enacle.com?subject=Application: ${job.title}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-bold hover:opacity-90 transition-opacity shadow-sm"
            >
              Apply Now <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export function CareersOpenings() {
  const [activeDept, setActiveDept] = useState<Dept>("All");
  const [query, setQuery] = useState("");

  const filtered = JOBS.filter((j) => {
    const matchesDept = activeDept === "All" || j.dept === activeDept;
    const matchesQuery =
      query.trim() === "" ||
      j.title.toLowerCase().includes(query.toLowerCase()) ||
      j.dept.toLowerCase().includes(query.toLowerCase()) ||
      j.location.toLowerCase().includes(query.toLowerCase());
    return matchesDept && matchesQuery;
  });

  return (
    <section id="openings" className="relative bg-white dark:bg-[#080d1a] py-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_40%,transparent_100%)] opacity-40" />

      <div className="relative z-10 mx-auto max-w-350 px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <BlurFade className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: "#7B68EE" }}>Open Positions</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0f172a] dark:text-white mb-4">
            {JOBS.length} open roles
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Find your place at Enacle. Every role ships product used by real teams every day.
          </p>
        </BlurFade>

        {/* Search + filter bar */}
        <BlurFade delay={0.08} className="mb-8">
          <div className="flex flex-col sm:flex-row gap-3 mb-5">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400 dark:text-slate-500" />
              <input
                type="text"
                placeholder="Search roles, departments, locations…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#7B68EE]/30 focus:border-[#7B68EE] dark:focus:border-[#7B68EE] transition-all"
              />
            </div>
          </div>

          {/* Dept pills */}
          <div className="flex flex-wrap gap-2">
            {DEPTS.map((d) => {
              const DIcon = DEPT_ICONS[d];
              const dcfg = DEPT_COLORS[d];
              const isActive = activeDept === d;
              const count = d === "All" ? JOBS.length : JOBS.filter((j) => j.dept === d).length;
              return (
                <button
                  key={d}
                  onClick={() => setActiveDept(d)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold border transition-all duration-150 ${
                    isActive
                      ? `${dcfg.border} ${dcfg.bg} ${dcfg.text} shadow-sm`
                      : "border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-500 dark:text-slate-400 hover:border-zinc-300 dark:hover:border-slate-600"
                  }`}
                >
                  <DIcon className="h-3.5 w-3.5" />
                  {d}
                  <span className={`ml-0.5 text-[10px] font-bold px-1.5 py-0.5 rounded-full ${isActive ? "bg-white/60 dark:bg-black/30" : "bg-zinc-100 dark:bg-slate-800"}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </BlurFade>

        {/* Job list */}
        <div className="space-y-3">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-slate-400 dark:text-slate-500">
              <Briefcase className="h-10 w-10 mx-auto mb-3 opacity-30" />
              <p className="text-sm font-semibold">No roles match your search.</p>
              <p className="text-xs mt-1">Try a different department or keyword.</p>
            </div>
          ) : (
            filtered.map((job, i) => (
              <BlurFade key={job.id} delay={i * 0.04}>
                <JobCard job={job} />
              </BlurFade>
            ))
          )}
        </div>

        {/* Didn't find your role */}
        <BlurFade delay={0.2} className="mt-12">
          <div className="rounded-2xl border border-dashed border-zinc-300 dark:border-slate-700 p-8 text-center">
            <div className="w-12 h-12 rounded-2xl bg-violet-50 dark:bg-violet-950/40 border border-violet-200 dark:border-violet-800 flex items-center justify-center mx-auto mb-4">
              <Star className="h-5 w-5" style={{ color: "#7B68EE" }} />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">Don&apos;t see your role?</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-5">
              We&apos;re always open to exceptional talent. Send us your best work and we&apos;ll find a way to build together.
            </p>
            <a
              href="mailto:careers@enacle.com?subject=Open Application"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-bold hover:opacity-90 transition-opacity"
            >
              Send an Open Application <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </BlurFade>

      </div>
    </section>
  );
}
