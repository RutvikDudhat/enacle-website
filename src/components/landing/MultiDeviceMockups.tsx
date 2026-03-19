import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const MobileMockup = () => (
  <div className="w-[180px] mx-auto">
    <div className="bg-foreground rounded-[24px] p-2 shadow-2xl">
      <div className="bg-white rounded-[16px] overflow-hidden">
        <div className="gradient-bg px-3 py-2 flex items-center justify-between">
          <span className="text-[8px] text-white font-bold">☀️ SolarCRM</span>
          <div className="w-4 h-4 bg-white/20 rounded-full" />
        </div>
        <div className="p-2 space-y-2">
          <div className="grid grid-cols-2 gap-1.5">
            {[{ v: "$1.2M", l: "Revenue" }, { v: "2,847", l: "Leads" }].map((s) => (
              <div key={s.l} className="bg-muted/40 rounded-lg p-2 text-center">
                <div className="text-[10px] font-bold text-primary">{s.v}</div>
                <div className="text-[7px] text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
          <div className="bg-muted/30 rounded-lg p-2">
            <div className="text-[8px] font-semibold mb-1">Pipeline</div>
            <div className="flex gap-0.5 h-10">
              {[60, 80, 45, 70, 90].map((h, i) => (
                <div key={i} className="flex-1 gradient-bg rounded-t-sm opacity-70" style={{ height: `${h}%`, marginTop: "auto" }} />
              ))}
            </div>
          </div>
          <div className="space-y-1">
            {["New Lead: John S.", "Install: #1042", "Payment: $12K"].map((item) => (
              <div key={item} className="bg-muted/20 rounded p-1.5 text-[7px] text-muted-foreground border border-border">{item}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const TabletMockup = () => (
  <div className="w-[320px] mx-auto">
    <div className="bg-foreground rounded-[16px] p-2.5 shadow-2xl">
      <div className="bg-white rounded-[10px] overflow-hidden">
        <div className="flex">
          <div className="w-16 bg-foreground/5 border-r border-border p-2 space-y-1.5">
            {["📊", "👥", "📁", "📦", "💰", "📈"].map((icon) => (
              <div key={icon} className="w-full aspect-square rounded-lg bg-muted/40 flex items-center justify-center text-xs">{icon}</div>
            ))}
          </div>
          <div className="flex-1 p-3 space-y-2">
            <div className="grid grid-cols-3 gap-1.5">
              {[{ v: "$847K", l: "Revenue", c: "text-primary" }, { v: "186", l: "Projects", c: "text-secondary" }, { v: "94%", l: "Efficiency", c: "text-green-600" }].map((s) => (
                <div key={s.l} className="rounded-lg border border-border p-2">
                  <div className={`text-xs font-bold ${s.c}`}>{s.v}</div>
                  <div className="text-[7px] text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
            <div className="rounded-lg border border-border p-2">
              <div className="text-[8px] font-semibold mb-1">Sales Pipeline</div>
              <div className="flex items-end gap-1 h-16">
                {[45, 65, 55, 80, 70, 95, 60, 85].map((h, i) => (
                  <div key={i} className="flex-1 gradient-bg rounded-t-sm" style={{ height: `${h}%`, opacity: 0.7 }} />
                ))}
              </div>
            </div>
            <div className="rounded-lg border border-border overflow-hidden">
              <div className="text-[8px] font-semibold p-1.5 bg-muted/30">Recent Activity</div>
              {["Lead converted: $45K deal", "Installation completed: #1089", "Invoice sent: Solar Plus Inc"].map((t) => (
                <div key={t} className="text-[7px] p-1.5 border-t border-border text-muted-foreground">{t}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function MultiDeviceMockups() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-solar-yellow/5 via-transparent to-solar-orange/5" />
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className={`text-center max-w-2xl mx-auto mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <span className="text-sm font-semibold gradient-text uppercase tracking-widest">Multi-Platform</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-3 mb-4">Works Seamlessly on <span className="gradient-text">Every Device</span></h2>
          <p className="text-muted-foreground text-lg">Access your solar CRM from anywhere — desktop, tablet, or mobile.</p>
        </div>
        <div className={`flex flex-col md:flex-row items-end justify-center gap-8 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
          <div className="order-2 md:order-1">
            <MobileMockup />
          </div>
          <div className="order-1 md:order-2 self-center">
            <TabletMockup />
          </div>
          <div className="order-3 hidden lg:block">
            <MobileMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
