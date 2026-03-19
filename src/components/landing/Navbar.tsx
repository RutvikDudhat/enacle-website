"use client";

import { useState } from "react";
import { ChevronDown, Sun } from "lucide-react";

const navLinks = [
  { label: "Solutions", hasDropdown: true },
  { label: "Verticals", hasDropdown: true },
  { label: "Infrastructure", hasDropdown: true },
  { label: "Resources", hasDropdown: true },
  { label: "Pricing", hasDropdown: false },
  { label: "Contact us", hasDropdown: false },
];

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-50 to-sky-50 border-b border-blue-100">
      <div className="container mx-auto max-w-7xl px-4 md:px-8 flex items-center justify-between h-14">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-white">
            <Sun className="w-5 h-5" />
          </div>
          <span className="text-lg font-bold text-solar-blue">Solar<span className="text-solar-orange">CRM</span></span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.label}
              className="flex items-center gap-0.5 px-3 py-2 text-sm text-slate-600 hover:text-solar-blue hover:bg-white/50 rounded-md transition-all"
              onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {link.label}
              {link.hasDropdown && (
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === link.label ? "rotate-180" : ""}`} />
              )}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 text-slate-600">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
