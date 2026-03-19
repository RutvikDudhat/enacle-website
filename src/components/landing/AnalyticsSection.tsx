import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { TrendingUp, PieChart, Activity, BarChart } from "lucide-react";

export default function AnalyticsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-solar-yellow/5 blur-3xl" />
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className={`text-center max-w-2xl mx-auto mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <span className="text-sm font-semibold gradient-text uppercase tracking-widest">Analytics</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-3 mb-4">Advanced Analytics & <span className="gradient-text">AI Insights</span></h2>
          <p className="text-muted-foreground text-lg">Data-driven decisions with real-time dashboards and predictive analytics.</p>
        </div>

        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.15s" }}>
          {/* Revenue chart card */}
          <div className="glass-card p-6 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-solar-orange" />
              <span className="font-bold">Revenue Analytics</span>
            </div>
            <div className="flex items-end gap-2 h-40">
              {[30, 45, 38, 62, 48, 75, 55, 82, 68, 90, 78, 95].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col gap-1">
                  <div className="rounded-t-md gradient-bg transition-all hover:opacity-100 opacity-75" style={{ height: `${h}%` }} />
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-[10px] text-muted-foreground">
              {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>
          </div>

          {/* Pie chart card */}
          <div className="glass-card p-6">
            <div className="flex items-center gap-2 mb-4">
              <PieChart className="w-5 h-5 text-solar-green" />
              <span className="font-bold">Lead Sources</span>
            </div>
            <div className="relative w-32 h-32 mx-auto mb-4">
              <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                <circle cx="18" cy="18" r="14" fill="none" stroke="#FFC107" strokeWidth="4" strokeDasharray="35 65" strokeLinecap="round" />
                <circle cx="18" cy="18" r="14" fill="none" stroke="#FF8C00" strokeWidth="4" strokeDasharray="25 75" strokeDashoffset="-35" strokeLinecap="round" />
                <circle cx="18" cy="18" r="14" fill="none" stroke="#4ade80" strokeWidth="4" strokeDasharray="22 78" strokeDashoffset="-60" strokeLinecap="round" />
                <circle cx="18" cy="18" r="14" fill="none" stroke="#fbbf24" strokeWidth="4" strokeDasharray="18 82" strokeDashoffset="-82" strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-lg font-bold">3.2K</div>
                  <div className="text-[9px] text-muted-foreground">Total</div>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              {[{ l: "Website", c: "bg-solar-yellow", v: "35%" }, { l: "Referrals", c: "bg-solar-orange", v: "25%" }, { l: "Social", c: "bg-solar-green", v: "22%" }, { l: "Ads", c: "bg-amber-400", v: "18%" }].map((s) => (
                <div key={s.l} className="flex items-center gap-2 text-xs">
                  <div className={`w-2.5 h-2.5 rounded-full ${s.c}`} />
                  <span className="text-muted-foreground flex-1">{s.l}</span>
                  <span className="font-semibold">{s.v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* KPI cards */}
          <div className="glass-card p-6">
            <div className="flex items-center gap-2 mb-4">
              <Activity className="w-5 h-5 text-green-500" />
              <span className="font-bold">Conversion Rate</span>
            </div>
            <div className="text-4xl font-extrabold gradient-text mb-1">34.8%</div>
            <div className="text-sm text-green-500 font-medium">↑ 12.5% from last quarter</div>
            <div className="mt-4 h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full gradient-bg rounded-full" style={{ width: "68%" }} />
            </div>
          </div>

          <div className="glass-card p-6 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <BarChart className="w-5 h-5 text-solar-orange" />
              <span className="font-bold">Installation Performance</span>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[
                { label: "Completed", value: "247", trend: "+18%" },
                { label: "In Progress", value: "89", trend: "+5%" },
                { label: "Scheduled", value: "134", trend: "+22%" },
                { label: "Avg Time", value: "4.2 days", trend: "-15%" },
              ].map((kpi) => (
                <div key={kpi.label} className="text-center p-3 rounded-xl bg-muted/30">
                  <div className="text-xl font-bold text-foreground">{kpi.value}</div>
                  <div className="text-[10px] text-muted-foreground">{kpi.label}</div>
                  <div className="text-[10px] text-green-500 font-medium">{kpi.trend}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
