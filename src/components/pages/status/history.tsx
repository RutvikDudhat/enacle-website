"use client";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { CheckCircle2, AlertTriangle, XCircle, Clock, Wrench } from "lucide-react";

type IncidentStatus = "resolved" | "monitoring" | "investigating" | "maintenance";

interface IncidentUpdate {
  time: string;
  message: string;
}

interface Incident {
  id: string;
  title: string;
  status: IncidentStatus;
  date: string;
  duration: string;
  affected: string[];
  updates: IncidentUpdate[];
}

const INCIDENTS: Incident[] = [
  {
    id: "INC-2026-014",
    title: "Scheduled maintenance — Database cluster upgrade",
    status: "maintenance",
    date: "20 Mar 2026",
    duration: "Planned: 02:00–04:00 UTC",
    affected: ["Database Cluster", "REST API (v2)", "AI Agent Runtime"],
    updates: [
      { time: "02:00 UTC", message: "Maintenance window begins. Rolling upgrade of primary PostgreSQL cluster to v16.3." },
      { time: "03:41 UTC", message: "Upgrade complete. Running validation tests across all dependent services." },
      { time: "04:00 UTC", message: "All services restored. Maintenance completed ahead of schedule." },
    ],
  },
  {
    id: "INC-2026-013",
    title: "Elevated API latency in ap-south-1 region",
    status: "resolved",
    date: "8 Mar 2026",
    duration: "41 min",
    affected: ["REST API (v2)", "Web Application"],
    updates: [
      { time: "14:07 UTC", message: "Monitoring alerts fired — p99 API latency in ap-south-1 spiked to 2.1 s. Engineering on-call engaged." },
      { time: "14:19 UTC", message: "Root cause identified: a misconfigured load balancer rule after a routine CDN config push." },
      { time: "14:48 UTC", message: "Rollback of CDN config deployed. Latency returning to normal baseline (< 95 ms)." },
      { time: "14:48 UTC", message: "Incident resolved. Post-mortem scheduled for 10 Mar." },
    ],
  },
  {
    id: "INC-2026-011",
    title: "Email delivery delays for notification emails",
    status: "resolved",
    date: "21 Feb 2026",
    duration: "1 h 14 min",
    affected: ["Email Delivery"],
    updates: [
      { time: "09:12 UTC", message: "Reports from users of delayed or missing notification emails. SMTP queue depth elevated." },
      { time: "09:37 UTC", message: "Upstream SMTP provider confirmed intermittent relay issues. Failover to secondary relay initiated." },
      { time: "10:26 UTC", message: "Queue fully drained via secondary relay. All queued emails delivered. Monitoring." },
    ],
  },
  {
    id: "INC-2026-009",
    title: "Brain MAX LLM Gateway — intermittent 503 errors",
    status: "resolved",
    date: "3 Feb 2026",
    duration: "28 min",
    affected: ["Brain MAX — LLM Gateway", "AI Document Analysis"],
    updates: [
      { time: "16:44 UTC", message: "Spike in 503 errors from the LLM inference cluster. Traffic rate-limiting engaged to protect backend." },
      { time: "16:58 UTC", message: "Auto-scaling triggered. New inference nodes coming online." },
      { time: "17:12 UTC", message: "Capacity fully restored. Error rate back to 0.01%. Incident closed." },
    ],
  },
  {
    id: "INC-2026-006",
    title: "Webhook delivery failures for Shopify integration",
    status: "resolved",
    date: "14 Jan 2026",
    duration: "52 min",
    affected: ["Webhooks", "Shopify Integration"],
    updates: [
      { time: "11:03 UTC", message: "Shopify integration team reported missed order events. Webhook retry queue checked." },
      { time: "11:28 UTC", message: "Identified a TLS certificate rotation on Shopify's endpoint that caused our outbound validator to reject connections." },
      { time: "11:55 UTC", message: "Validator updated to accept new certificate chain. Queued events replayed successfully." },
    ],
  },
];

const STATUS_CONFIG: Record<IncidentStatus, { Icon: React.ElementType; label: string; dot: string; text: string; bg: string; border: string }> = {
  resolved:      { Icon: CheckCircle2, label: "Resolved",    dot: "bg-emerald-500", text: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-50 dark:bg-emerald-950/40", border: "border-emerald-200 dark:border-emerald-800" },
  monitoring:    { Icon: AlertTriangle,label: "Monitoring",  dot: "bg-amber-500",   text: "text-amber-600 dark:text-amber-400",     bg: "bg-amber-50 dark:bg-amber-950/40",     border: "border-amber-200 dark:border-amber-800" },
  investigating: { Icon: XCircle,      label: "Investigating",dot: "bg-red-500",    text: "text-red-600 dark:text-red-400",         bg: "bg-red-50 dark:bg-red-950/40",         border: "border-red-200 dark:border-red-800" },
  maintenance:   { Icon: Wrench,       label: "Maintenance", dot: "bg-blue-500",    text: "text-blue-600 dark:text-blue-400",       bg: "bg-blue-50 dark:bg-blue-950/40",       border: "border-blue-200 dark:border-blue-800" },
};

function IncidentCard({ incident, index }: { incident: Incident; index: number }) {
  const cfg = STATUS_CONFIG[incident.status];
  const { Icon } = cfg;

  return (
    <BlurFade delay={index * 0.07}>
      <div className="relative rounded-2xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 overflow-hidden hover:shadow-md hover:border-zinc-300 dark:hover:border-slate-600 transition-all duration-200">
        <BorderBeam size={300} duration={14 + index * 2} colorFrom="#3b82f6" colorTo="#8b5cf6" />

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 p-5 border-b border-zinc-100 dark:border-slate-800">
          <div className="flex items-start gap-3">
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border ${cfg.border} ${cfg.bg}`}>
              <Icon className={`h-4.5 w-4.5 ${cfg.text}`} />
            </div>
            <div>
              <p className="font-extrabold text-zinc-900 dark:text-white text-sm mb-1">{incident.title}</p>
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 dark:text-slate-500">
                <span className="font-mono">{incident.id}</span>
                <span>·</span>
                <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{incident.date}</span>
                <span>·</span>
                <span>Duration: {incident.duration}</span>
              </div>
            </div>
          </div>
          <div className={`flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full border shrink-0 self-start ${cfg.border} ${cfg.bg} ${cfg.text}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
            {cfg.label}
          </div>
        </div>

        {/* Affected services */}
        <div className="px-5 py-3 border-b border-zinc-100 dark:border-slate-800 flex flex-wrap gap-2">
          <span className="text-xs font-bold text-slate-400 dark:text-slate-500 mr-1">Affected:</span>
          {incident.affected.map((a) => (
            <span key={a} className="text-xs font-semibold bg-zinc-100 dark:bg-slate-800 border border-zinc-200 dark:border-slate-700 text-zinc-600 dark:text-slate-300 px-2 py-0.5 rounded-full">
              {a}
            </span>
          ))}
        </div>

        {/* Timeline of updates */}
        <div className="px-5 py-4 space-y-4">
          {incident.updates.map((u, i) => (
            <div key={i} className="relative flex gap-3.5 items-start">
              {/* Timeline connector */}
              {i < incident.updates.length - 1 && (
                <div className="absolute left-[7px] top-5 bottom-0 w-px bg-zinc-100 dark:bg-slate-800" />
              )}
              <div className={`w-3.5 h-3.5 rounded-full mt-0.5 shrink-0 ring-2 ring-white dark:ring-slate-900 ${i === incident.updates.length - 1 ? cfg.dot : "bg-zinc-300 dark:bg-slate-600"}`} />
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-0.5">{u.time}</p>
                <p className="text-sm text-zinc-700 dark:text-slate-300 leading-relaxed">{u.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BlurFade>
  );
}

export function StatusHistory() {
  return (
    <section className="relative bg-white dark:bg-[#080d1a] py-20 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:40px_40px] opacity-40" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

        <BlurFade className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600 mb-3">Incident Log</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0f172a] dark:text-white mb-3">
            Incident history
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm max-w-lg mx-auto">
            Full timeline of every incident and planned maintenance in the last 90 days. Older incidents are archived at{" "}
            <a href="mailto:support@enacle.io" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">support@enacle.io</a>.
          </p>
        </BlurFade>

        {/* No active incidents notice */}
        <BlurFade delay={0.04}>
          <div className="flex items-center gap-3 rounded-xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/30 px-5 py-3.5 mb-8">
            <CheckCircle2 className="h-4.5 w-4.5 text-emerald-500 shrink-0" />
            <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">No active incidents right now.</p>
          </div>
        </BlurFade>

        <div className="space-y-5">
          {INCIDENTS.map((inc, i) => (
            <IncidentCard key={inc.id} incident={inc} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
