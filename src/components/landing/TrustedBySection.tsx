import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const logos = [
  "SunPower", "Tesla Solar", "Vivint", "Enphase", "SolarEdge",
  "Canadian Solar", "First Solar", "Jinko Solar", "LONGi", "Trina Solar",
  "SunPower", "Tesla Solar", "Vivint", "Enphase", "SolarEdge",
  "Canadian Solar", "First Solar", "Jinko Solar", "LONGi", "Trina Solar",
];

export default function TrustedBySection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-16 border-y border-border bg-muted/20 overflow-hidden">
      <div className={`text-center mb-8 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Trusted by Leading Solar Companies Worldwide</p>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-muted/20 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-muted/20 to-transparent z-10" />
        <div className="flex animate-scroll-x">
          {logos.map((name, i) => (
            <div key={i} className="flex-shrink-0 mx-8 flex items-center gap-2 opacity-40 hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 rounded-lg gradient-bg opacity-60 flex items-center justify-center text-white text-xs font-bold">{name[0]}</div>
              <span className="text-base font-semibold text-foreground whitespace-nowrap">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
