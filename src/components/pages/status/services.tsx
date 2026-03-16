"use client";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import {
  CheckCircle2, AlertTriangle, XCircle, ChevronDown, ChevronUp,
  Globe, Server, Cpu, Wifi, ShieldCheck, Database, Mail, Webhook,
  Zap, Cloud, Code2, BarChart3,
} from "lucide-react";
import { useState } from "react";

type ServiceStatus = "operational" | "degraded" | "outage" | "maintenance";

interface Service {
  name: string;
  description: string;
  status: ServiceStatus;
  latency?: string;
  icon: React.ElementType;
}

interface ServiceGroup {
  group: string;
  icon: React.ElementType;
  services: Service[];
}

// ── Change any status here to test the UI ─────────────────────
const SERVICE_GROUPS: ServiceGroup[] = [
  {
    group: "Core Platform",
    icon: Globe,
    services: [
      { name: "Web Application",      description: "app.enacle.io — primary workspace UI",            status: "operational",   latency: "55 ms",  icon: Globe },
      { name: "Marketing Website",    description: "enacle.io — public site & landing pages",         status: "operational",   latency: "38 ms",  icon: Globe },
      { name: "User Authentication",  description: "Login, SSO, and 2FA services",                    status: "operational",   latency: "62 ms",  icon: ShieldCheck },
      { name: "Account & Billing",    description: "Subscription management and invoice portal",       status: "operational",   latency: "71 ms",  icon: BarChart3 },
    ],
  },
  {
    group: "API & Infrastructure",
    icon: Server,
    services: [
      { name: "REST API (v2)",        description: "Primary public API — all endpoints",               status: "operational",   latency: "82 ms",  icon: Code2 },
      { name: "GraphQL API",          description: "GraphQL gateway for data queries",                  status: "operational",   latency: "91 ms",  icon: Code2 },
      { name: "Webhooks",             description: "Outbound event delivery to external systems",       status: "operational",   latency: "—",      icon: Webhook },
      { name: "CDN / Edge Network",   description: "Global asset delivery — 38 PoPs worldwide",        status: "operational",   latency: "12 ms",  icon: Wifi },
      { name: "Database Cluster",     description: "Primary PostgreSQL cluster (multi-region)",         status: "operational",   latency: "4 ms",   icon: Database },
      { name: "Object Storage",       description: "File uploads, attachments & media (S3-compatible)", status: "operational",   latency: "28 ms",  icon: Cloud },
    ],
  },
  {
    group: "AI Services",
    icon: Cpu,
    services: [
      { name: "Brain MAX — LLM Gateway", description: "AI text generation, summarisation & reasoning", status: "operational",  latency: "390 ms", icon: Cpu },
      { name: "AI Agent Runtime",        description: "Background agent execution engine",              status: "operational",  latency: "—",      icon: Zap },
      { name: "Embedding Service",       description: "Vector embeddings for semantic search",          status: "operational",  latency: "110 ms", icon: Cpu },
      { name: "AI Document Analysis",    description: "OCR, PDF parsing, and document understanding",   status: "operational",  latency: "520 ms", icon: Cpu },
    ],
  },
  {
    group: "Notifications & Integrations",
    icon: Mail,
    services: [
      { name: "Email Delivery",       description: "Transactional and notification emails via SMTP",   status: "operational",   latency: "—",      icon: Mail },
      { name: "Push Notifications",   description: "In-app and browser push alerts",                   status: "operational",   latency: "—",      icon: Zap },
      { name: "Slack Integration",    description: "Two-way Slack bot and channel sync",               status: "operational",   latency: "—",      icon: Webhook },
      { name: "Google Workspace",     description: "Drive, Docs, Calendar, and Meet sync",             status: "operational",   latency: "—",      icon: Cloud },
      { name: "Stripe Payments",      description: "Payment processing & subscription webhooks",        status: "operational",   latency: "—",      icon: ShieldCheck },
    ],
  },
];

// ── Status helpers ───────────────────────────────────────────────
const STATUS_LABEL: Record<ServiceStatus, string> = {
  operational: "Operational",
  degraded:    "Degraded",
  outage:      "Outage",
  maintenance: "Maintenance",
};

const STATUS_STYLES: Record<ServiceStatus, { dot: string; text: string; bg: string; border: string }> = {
  operational: { dot: "bg-emerald-500", text: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-50 dark:bg-emerald-950/40", border: "border-emerald-200 dark:border-emerald-800" },
  degraded:    { dot: "bg-amber-500",   text: "text-amber-600 dark:text-amber-400",     bg: "bg-amber-50 dark:bg-amber-950/40",     border: "border-amber-200 dark:border-amber-800" },
  outage:      { dot: "bg-red-500",     text: "text-red-600 dark:text-red-400",         bg: "bg-red-50 dark:bg-red-950/40",         border: "border-red-200 dark:border-red-800" },
  maintenance: { dot: "bg-blue-500",    text: "text-blue-600 dark:text-blue-400",       bg: "bg-blue-50 dark:bg-blue-950/40",       border: "border-blue-200 dark:border-blue-800" },
};

const STATUS_ICON: Record<ServiceStatus, React.ElementType> = {
  operational: CheckCircle2,
  degraded:    AlertTriangle,
  outage:      XCircle,
  maintenance: AlertTriangle,
};

// ── 90-day uptime bar — all green for "operational" ──────────────
function UptimeBar({ status }: { status: ServiceStatus }) {
  const bars = Array.from({ length: 90 });
  return (
    <div className="flex gap-px items-end h-6">
      {bars.map((_, i) => {
        const isLast5 = i >= 85;
        const color =
          status === "operational"  ? "bg-emerald-400 dark:bg-emerald-500" :
          status === "maintenance"  ? (isLast5 ? "bg-blue-400" : "bg-emerald-400 dark:bg-emerald-500") :
          status === "degraded"     ? (isLast5 ? "bg-amber-400" : "bg-emerald-400 dark:bg-emerald-500") :
          (isLast5 ? "bg-red-400" : "bg-emerald-400 dark:bg-emerald-500");
        return (
          <div
            key={i}
            title={`Day ${i + 1}`}
            className={`flex-1 rounded-sm ${color} opacity-80 hover:opacity-100 transition-opacity`}
            style={{ height: `${Math.random() * 40 + 60}%` }}
          />
        );
      })}
    </div>
  );
}

// ── Individual service row ───────────────────────────────────────
function ServiceRow({ svc }: { svc: Service }) {
  const [open, setOpen] = useState(false);
  const st = STATUS_STYLES[svc.status];
  const SvcIcon = svc.icon;
  const StIcon = STATUS_ICON[svc.status];

  return (
    <div className="border-b border-zinc-100 dark:border-slate-800 last:border-0">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center gap-4 px-5 py-4 hover:bg-zinc-50 dark:hover:bg-slate-800/50 transition-colors duration-150 text-left"
      >
        {/* Service icon */}
        <div className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
          <SvcIcon className="h-4 w-4 text-zinc-500 dark:text-slate-400" />
        </div>

        {/* Name + desc */}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-zinc-900 dark:text-white truncate">{svc.name}</p>
          <p className="text-xs text-slate-400 dark:text-slate-500 truncate hidden sm:block">{svc.description}</p>
        </div>

        {/* Latency */}
        {svc.latency && svc.latency !== "—" && (
          <span className="hidden md:block text-xs font-mono text-slate-400 dark:text-slate-500 shrink-0 w-16 text-right">
            {svc.latency}
          </span>
        )}

        {/* Status pill */}
        <div className={`flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full border ${st.border} ${st.bg} ${st.text} shrink-0`}>
          <span className={`w-1.5 h-1.5 rounded-full ${st.dot} ${svc.status === "operational" ? "" : "animate-pulse"}`} />
          {STATUS_LABEL[svc.status]}
        </div>

        {/* Expand chevron */}
        <div className="ml-1 text-zinc-300 dark:text-slate-600 shrink-0">
          {open ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </div>
      </button>

      {/* Expanded — 90d uptime bar */}
      {open && (
        <div className="px-5 pb-5 pt-1">
          <div className="flex items-center justify-between text-[10px] text-slate-400 dark:text-slate-500 mb-1.5">
            <span>90 days ago</span>
            <span className={`font-bold ${st.text}`}>
              <StIcon className="inline h-3 w-3 mr-1" />
              {STATUS_LABEL[svc.status]} today
            </span>
            <span>Today</span>
          </div>
          <UptimeBar status={svc.status} />
          <div className="flex items-center justify-between text-[10px] text-slate-400 dark:text-slate-500 mt-1.5">
            <span>
              {svc.latency && svc.latency !== "—" ? `Avg. response: ${svc.latency}` : "Response time: N/A"}
            </span>
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
              {svc.status === "operational" ? "100.00% uptime" : svc.status === "degraded" ? "99.72% uptime" : "99.41% uptime"}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Group card ───────────────────────────────────────────────────
function ServiceGroupCard({ group }: { group: ServiceGroup }) {
  const GroupIcon = group.icon;
  const allOp = group.services.every((s) => s.status === "operational");
  const anyOut = group.services.some((s) => s.status === "outage");
  const groupStatus: ServiceStatus = anyOut ? "outage" : allOp ? "operational" : "degraded";
  const st = STATUS_STYLES[groupStatus];

  return (
    <div className="relative rounded-2xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 overflow-hidden">
      {/* Group header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-100 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 flex items-center justify-center">
            <GroupIcon className="h-4 w-4 text-blue-500" />
          </div>
          <p className="font-extrabold text-zinc-900 dark:text-white text-sm">{group.group}</p>
        </div>
        <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${st.border} ${st.bg} ${st.text}`}>
          {allOp ? "All Operational" : anyOut ? "Outage" : "Degraded"}
        </span>
      </div>

      {/* Service rows */}
      {group.services.map((svc) => (
        <ServiceRow key={svc.name} svc={svc} />
      ))}
    </div>
  );
}

// ── Main export ──────────────────────────────────────────────────
export function StatusServices() {
  return (
    <section className="relative bg-zinc-50 dark:bg-[#060b18] py-20 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:40px_40px] opacity-40" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

        <BlurFade className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600 mb-3">Live Monitor</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0f172a] dark:text-white mb-3">
            Service health
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm max-w-lg mx-auto">
            Click any row to expand its 90-day uptime graph. All times are in UTC.
          </p>
        </BlurFade>

        <div className="space-y-5">
          {SERVICE_GROUPS.map((g, i) => (
            <BlurFade key={g.group} delay={i * 0.07}>
              <ServiceGroupCard group={g} />
            </BlurFade>
          ))}
        </div>

      </div>
    </section>
  );
}
