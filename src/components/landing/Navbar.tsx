import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const links = ["Features", "Modules", "Pricing", "Testimonials"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="container mx-auto max-w-7xl px-4 md:px-8 flex items-center justify-between h-16">
        <div className="flex items-center gap-2 font-extrabold text-lg">
          <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-white text-sm">☀️</div>
          <span>Solar<span className="gradient-text">CRM</span></span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">{l}</a>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm">Sign In</Button>
          <Button size="sm" className="gradient-bg text-white border-0 shadow-md shadow-solar-purple/20">Start Free Trial</Button>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <div className="md:hidden glass border-t border-white/10 p-4 space-y-3">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="block text-sm text-muted-foreground py-2" onClick={() => setOpen(false)}>{l}</a>
          ))}
          <Button className="w-full gradient-bg text-white border-0">Start Free Trial</Button>
        </div>
      )}
    </nav>
  );
}
