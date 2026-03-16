"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dock, DockIcon } from "@/components/ui/dock";
import { Home, Package, Lightbulb, DollarSign, BookOpen, Users, Cpu } from "lucide-react";

const NAV = [
  { href: "/",          icon: Home,       label: "Home" },
  { href: "/platform",  icon: Cpu,        label: "Platform" },
  { href: "/products",  icon: Package,    label: "Products" },
  { href: "/solutions", icon: Lightbulb,  label: "Solutions" },
  { href: "/pricing",   icon: DollarSign, label: "Pricing" },
  { href: "/resources", icon: BookOpen,   label: "Resources" },
  { href: "/about",     icon: Users,      label: "About" },
];

export function AppDock() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden">
      <Dock
        iconSize={36}
        iconMagnification={52}
        iconDistance={100}
        className="bg-white/90 dark:bg-slate-900/90 border-slate-200 dark:border-slate-700 backdrop-blur-xl shadow-xl shadow-slate-200/60 dark:shadow-slate-900/60 px-3 gap-1"
      >
        {NAV.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <DockIcon key={item.href}>
              <Link
                href={item.href}
                title={item.label}
                className={`flex items-center justify-center w-full h-full rounded-xl transition-colors ${
                  isActive ? "bg-[#0f172a] dark:bg-white text-white dark:text-[#0f172a]" : "text-slate-500 dark:text-slate-400 hover:text-[#0f172a] dark:hover:text-white"
                }`}
              >
                <Icon className="h-5 w-5" />
              </Link>
            </DockIcon>
          );
        })}
      </Dock>
    </div>
  );
}
