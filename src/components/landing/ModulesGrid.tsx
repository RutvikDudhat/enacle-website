import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const modules = [
  {
    title: "Lead Management",
    desc: "AI-powered lead scoring & nurturing",
    ui: (
      <div className="space-y-1.5">
        {[
          { name: "Sarah M.", score: 92, status: "Hot" },
          { name: "John D.", score: 78, status: "Warm" },
          { name: "Emily R.", score: 45, status: "New" },
        ].map((l) => (
          <div key={l.name} className="flex items-center gap-2 bg-white/80 rounded-lg p-1.5 text-[8px]">
            <div className="w-5 h-5 rounded-full gradient-bg text-white flex items-center justify-center text-[7px] font-bold">{l.name[0]}</div>
            <span className="flex-1 font-medium">{l.name}</span>
            <div className="w-10 h-1.5 bg-muted rounded-full overflow-hidden"><div className="h-full gradient-bg" style={{ width: `${l.score}%` }} /></div>
            <span className={`px-1 py-0.5 rounded text-[7px] font-medium ${l.status === "Hot" ? "bg-red-100 text-red-600" : l.status === "Warm" ? "bg-amber-100 text-amber-600" : "bg-blue-100 text-blue-600"}`}>{l.status}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Project Tracking",
    desc: "End-to-end installation management",
    ui: (
      <div className="space-y-1.5">
        {[
          { name: "Residential #1042", progress: 85, phase: "Install" },
          { name: "Commercial #987", progress: 40, phase: "Design" },
          { name: "Residential #1108", progress: 100, phase: "Done" },
        ].map((p) => (
          <div key={p.name} className="bg-white/80 rounded-lg p-1.5 text-[8px]">
            <div className="flex justify-between items-center mb-1">
              <span className="font-medium">{p.name}</span>
              <span className={`px-1 py-0.5 rounded text-[7px] font-medium ${p.phase === "Done" ? "bg-green-100 text-green-600" : "bg-solar-light-purple text-solar-purple"}`}>{p.phase}</span>
            </div>
            <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden"><div className="h-full gradient-bg rounded-full" style={{ width: `${p.progress}%` }} /></div>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Inventory",
    desc: "Real-time stock & supply tracking",
    ui: (
      <div className="space-y-1.5">
        {[
          { item: "Solar Panels 400W", qty: 1240, status: "In Stock" },
          { item: "Micro Inverters", qty: 86, status: "Low" },
          { item: "Mounting Rails", qty: 540, status: "In Stock" },
        ].map((inv) => (
          <div key={inv.item} className="flex items-center gap-2 bg-white/80 rounded-lg p-1.5 text-[8px]">
            <span className="flex-1 font-medium">{inv.item}</span>
            <span className="text-muted-foreground">{inv.qty}</span>
            <span className={`px-1 py-0.5 rounded text-[7px] font-medium ${inv.status === "Low" ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"}`}>{inv.status}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Billing",
    desc: "Automated invoicing & payments",
    ui: (
      <div className="space-y-1.5">
        {[
          { id: "INV-2847", amount: "$12,450", status: "Paid" },
          { id: "INV-2848", amount: "$8,200", status: "Pending" },
          { id: "INV-2849", amount: "$23,100", status: "Sent" },
        ].map((inv) => (
          <div key={inv.id} className="flex items-center gap-2 bg-white/80 rounded-lg p-1.5 text-[8px]">
            <span className="font-mono font-medium">{inv.id}</span>
            <span className="flex-1 font-bold">{inv.amount}</span>
            <span className={`px-1 py-0.5 rounded text-[7px] font-medium ${inv.status === "Paid" ? "bg-green-100 text-green-600" : inv.status === "Pending" ? "bg-amber-100 text-amber-600" : "bg-blue-100 text-blue-600"}`}>{inv.status}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Reports",
    desc: "Custom analytics & export tools",
    ui: (
      <div className="space-y-1.5">
        <div className="flex items-end gap-1 h-12 bg-white/80 rounded-lg p-1.5">
          {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
            <div key={i} className="flex-1 gradient-bg rounded-t-sm" style={{ height: `${h}%`, opacity: 0.7 }} />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-1">
          {[{ l: "Revenue", v: "$1.2M" }, { l: "Growth", v: "+28%" }].map((s) => (
            <div key={s.l} className="bg-white/80 rounded-lg p-1.5 text-center">
              <div className="text-[10px] font-bold gradient-text">{s.v}</div>
              <div className="text-[7px] text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Customer Data",
    desc: "360° customer profiles & history",
    ui: (
      <div className="space-y-1.5">
        {[
          { name: "Green Energy Co.", projects: 12, value: "$145K" },
          { name: "SunTech Homes", projects: 8, value: "$92K" },
          { name: "EcoVolt Inc.", projects: 5, value: "$67K" },
        ].map((c) => (
          <div key={c.name} className="flex items-center gap-2 bg-white/80 rounded-lg p-1.5 text-[8px]">
            <div className="w-5 h-5 rounded-full gradient-bg text-white flex items-center justify-center text-[7px] font-bold">{c.name[0]}</div>
            <span className="flex-1 font-medium">{c.name}</span>
            <span className="text-muted-foreground">{c.projects} proj</span>
            <span className="font-bold">{c.value}</span>
          </div>
        ))}
      </div>
    ),
  },
];

export default function ModulesGrid() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="section-padding bg-muted/20">
      <div className="container mx-auto max-w-7xl">
        <div className={`text-center max-w-2xl mx-auto mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <span className="text-sm font-semibold gradient-text uppercase tracking-widest">Modules</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-3 mb-4">Complete <span className="gradient-text">Solar ERP</span> Suite</h2>
          <p className="text-muted-foreground text-lg">Every module your solar business needs — integrated seamlessly.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {modules.map((m, i) => (
            <div key={m.title} className={`group rounded-2xl border border-border bg-card p-5 hover:shadow-xl hover:shadow-solar-purple/5 hover:-translate-y-1 transition-all duration-300 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: `${i * 0.1}s` }}>
              <h3 className="font-bold text-base mb-1">{m.title}</h3>
              <p className="text-xs text-muted-foreground mb-3">{m.desc}</p>
              <div className="rounded-xl bg-muted/40 p-2.5 border border-border">{m.ui}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
