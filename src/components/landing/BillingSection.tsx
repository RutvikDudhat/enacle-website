import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { FileText, DollarSign, CheckCircle } from "lucide-react";

export default function BillingSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="section-padding">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Invoice mockup */}
          <div className={`${isVisible ? "animate-slide-right" : "opacity-0"}`}>
            <div className="glass-card p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center"><FileText className="w-4 h-4 text-white" /></div>
                  <div>
                    <div className="text-xs font-bold">Invoice #INV-2847</div>
                    <div className="text-[9px] text-muted-foreground">March 15, 2026</div>
                  </div>
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-700 text-[9px] font-semibold rounded-full">Paid</span>
              </div>
              <div className="border border-border rounded-lg overflow-hidden mb-4">
                <div className="grid grid-cols-4 gap-0 text-[8px] font-semibold bg-muted/40 p-2">
                  <span>Item</span><span>Qty</span><span>Price</span><span className="text-right">Total</span>
                </div>
                {[
                  { item: "Solar Panel 400W", qty: "24", price: "$320", total: "$7,680" },
                  { item: "Micro Inverter", qty: "24", price: "$180", total: "$4,320" },
                  { item: "Installation Labor", qty: "1", price: "$2,400", total: "$2,400" },
                  { item: "Mounting Hardware", qty: "1", price: "$850", total: "$850" },
                ].map((r) => (
                  <div key={r.item} className="grid grid-cols-4 gap-0 text-[8px] p-2 border-t border-border">
                    <span className="font-medium">{r.item}</span><span className="text-muted-foreground">{r.qty}</span><span className="text-muted-foreground">{r.price}</span><span className="text-right font-medium">{r.total}</span>
                  </div>
                ))}
                <div className="grid grid-cols-4 gap-0 text-[9px] p-2 border-t-2 border-border bg-muted/20">
                  <span className="col-span-3 font-bold">Total</span>
                  <span className="text-right font-bold gradient-text">$15,250</span>
                </div>
              </div>

              {/* Payment tracking */}
              <div className="space-y-2">
                <div className="text-[9px] font-semibold">Payment History</div>
                {[
                  { date: "Mar 15", amount: "$7,625", method: "Bank Transfer", status: "Complete" },
                  { date: "Mar 10", amount: "$7,625", method: "Credit Card", status: "Complete" },
                ].map((p) => (
                  <div key={p.date} className="flex items-center gap-2 text-[8px] bg-white/80 rounded-lg p-2 border border-border">
                    <CheckCircle className="w-3 h-3 text-green-500" />
                    <span className="text-muted-foreground">{p.date}</span>
                    <span className="flex-1 font-medium">{p.amount}</span>
                    <span className="text-muted-foreground">{p.method}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className={`${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.15s" }}>
            <span className="text-sm font-semibold gradient-text uppercase tracking-widest">Billing & Finance</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-3 mb-4">Effortless <span className="gradient-text">Billing</span> & Payments</h2>
            <p className="text-muted-foreground text-lg mb-8">Create professional invoices, track payments, and manage finances — all automated.</p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: FileText, val: "5,200+", label: "Invoices Generated" },
                { icon: DollarSign, val: "$12M+", label: "Payments Processed" },
              ].map((s) => (
                <div key={s.label} className="glass-card p-4 text-center">
                  <s.icon className="w-6 h-6 mx-auto mb-2 text-solar-purple" />
                  <div className="text-2xl font-extrabold gradient-text">{s.val}</div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
