import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function DashboardShowcase() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="section-padding bg-muted/20 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full bg-solar-purple/5 blur-3xl" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className={`text-center max-w-2xl mx-auto mb-12 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <span className="text-sm font-semibold gradient-text uppercase tracking-widest">Dashboard</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-3 mb-4">Complete Command Center for <span className="gradient-text">Solar Operations</span></h2>
          <p className="text-muted-foreground text-lg">See every metric, manage every project, and control every process from a single beautiful dashboard.</p>
        </div>
        {/* Laptop frame */}
        <div className={`relative ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
          <div className="bg-foreground/90 rounded-t-2xl pt-3 px-3">
            <div className="flex gap-1.5 mb-2 ml-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
            </div>
            {/* Screen */}
            <div className="bg-white rounded-t-lg overflow-hidden">
              <div className="flex">
                {/* Sidebar */}
                <div className="w-44 bg-foreground text-white p-3 space-y-1 hidden md:block">
                  <div className="gradient-bg rounded-lg px-3 py-2 text-xs font-bold mb-4 flex items-center gap-2">☀️ SolarCRM Pro</div>
                  {[
                    { label: "Dashboard", active: true }, { label: "Lead Center" }, { label: "Sales Pipeline" },
                    { label: "Projects" }, { label: "Installations" }, { label: "Inventory" },
                    { label: "Invoices" }, { label: "Reports" }, { label: "Settings" },
                  ].map((item) => (
                    <div key={item.label} className={`px-3 py-1.5 rounded-md text-[10px] ${item.active ? "bg-white/10 font-semibold" : "text-white/60 hover:text-white/80"}`}>{item.label}</div>
                  ))}
                </div>
                {/* Content area */}
                <div className="flex-1 p-4 space-y-3">
                  {/* Stats row */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {[
                      { label: "Monthly Revenue", val: "$847,290", sub: "+24.5% vs last month", c: "text-primary" },
                      { label: "Active Leads", val: "3,241", sub: "412 qualified today", c: "text-green-600" },
                      { label: "Active Projects", val: "186", sub: "23 completing this week", c: "text-secondary" },
                      { label: "Team Performance", val: "94.2%", sub: "Above target", c: "text-amber-600" },
                    ].map((s) => (
                      <div key={s.label} className="rounded-xl border border-border p-3">
                        <div className="text-[9px] text-muted-foreground">{s.label}</div>
                        <div className={`text-lg font-bold ${s.c}`}>{s.val}</div>
                        <div className="text-[8px] text-green-500">{s.sub}</div>
                      </div>
                    ))}
                  </div>
                  {/* Charts row */}
                  <div className="grid md:grid-cols-3 gap-2">
                    <div className="md:col-span-2 rounded-xl border border-border p-3">
                      <div className="text-[10px] font-semibold mb-2">Revenue & Installations Trend</div>
                      <div className="flex items-end gap-1 h-28">
                        {[35, 50, 42, 68, 55, 78, 65, 88, 72, 95, 82, 100].map((h, i) => (
                          <div key={i} className="flex-1 flex flex-col gap-0.5 items-stretch">
                            <div className="rounded-t-sm gradient-bg" style={{ height: `${h}%` }} />
                            <div className="rounded-t-sm bg-solar-pink/30" style={{ height: `${h * 0.6}%` }} />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-xl border border-border p-3">
                      <div className="text-[10px] font-semibold mb-2">Lead Sources</div>
                      <div className="relative w-20 h-20 mx-auto my-2">
                        <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                          <circle cx="18" cy="18" r="15" fill="none" stroke="hsl(var(--muted))" strokeWidth="3" />
                          <circle cx="18" cy="18" r="15" fill="none" stroke="#7B68EE" strokeWidth="3" strokeDasharray="40 60" strokeLinecap="round" />
                          <circle cx="18" cy="18" r="15" fill="none" stroke="#FD71AF" strokeWidth="3" strokeDasharray="25 75" strokeDashoffset="-40" strokeLinecap="round" />
                          <circle cx="18" cy="18" r="15" fill="none" stroke="#4ade80" strokeWidth="3" strokeDasharray="20 80" strokeDashoffset="-65" strokeLinecap="round" />
                        </svg>
                      </div>
                      <div className="space-y-1">
                        {[{ l: "Website", c: "bg-solar-purple", v: "40%" }, { l: "Referral", c: "bg-solar-pink", v: "25%" }, { l: "Direct", c: "bg-green-400", v: "20%" }].map((s) => (
                          <div key={s.l} className="flex items-center gap-1.5 text-[9px]">
                            <div className={`w-2 h-2 rounded-full ${s.c}`} />
                            <span className="text-muted-foreground">{s.l}</span>
                            <span className="ml-auto font-semibold">{s.v}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Laptop base */}
          <div className="bg-foreground/80 h-4 rounded-b-2xl mx-8" />
          <div className="bg-foreground/60 h-2 rounded-b-xl mx-24" />
        </div>
      </div>
    </section>
  );
}
