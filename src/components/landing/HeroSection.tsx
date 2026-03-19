"use client";

import { useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Shield, Check, ChevronLeft, ChevronRight, TrendingUp, Users, Sun, DollarSign, Zap, BarChart3, PieChart, Activity } from "lucide-react";

// Slide 1: Main Dashboard
const DashboardSlide1 = () => (
  <div className="w-full bg-white rounded-xl overflow-hidden shadow-2xl border border-border">
    {/* Header */}
    <div className="flex items-center gap-2 px-4 py-2 bg-muted/30 border-b border-border">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-yellow-400" />
        <div className="w-3 h-3 rounded-full bg-green-400" />
      </div>
      <div className="flex-1 flex justify-center">
        <span className="text-xs text-muted-foreground">solarcrm.app/dashboard</span>
      </div>
    </div>
    <div className="flex">
      {/* Sidebar */}
      <div className="w-44 bg-foreground/[0.03] border-r border-border p-3 hidden md:block">
        <div className="gradient-bg rounded-lg px-3 py-1.5 text-xs font-bold text-white mb-4 flex items-center gap-2">
          <Sun className="w-4 h-4" /> SolarCRM
        </div>
        {["Dashboard", "Leads", "Pipeline", "Projects", "Inventory", "Billing", "Reports"].map((item, i) => (
          <div key={item} className={`px-3 py-2 rounded-md text-xs mb-1 ${i === 0 ? "bg-solar-yellow/20 text-solar-orange font-semibold" : "text-muted-foreground hover:bg-muted"}`}>{item}</div>
        ))}
      </div>
      {/* Main Content */}
      <div className="flex-1 p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-bold text-foreground">Business Overview</div>
            <div className="text-[10px] text-muted-foreground">Monday, March 18, 2026</div>
          </div>
          <div className="flex gap-2">
            <div className="gradient-bg text-white text-[10px] px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1">
              <Zap className="w-3 h-3" /> + New Lead
            </div>
          </div>
        </div>
        {/* Stats Row */}
        <div className="grid grid-cols-4 gap-2">
          {[
            { label: "Total Leads", value: "2,847", change: "+12%", color: "text-solar-orange" },
            { label: "Revenue", value: "$1.2M", change: "+28%", color: "text-solar-orange" },
            { label: "Projects", value: "156", change: "+8%", color: "text-solar-green" },
            { label: "Installs", value: "89", change: "+15%", color: "text-solar-green" },
          ].map((s) => (
            <div key={s.label} className="bg-muted/30 rounded-lg p-2.5 border border-border">
              <div className="text-[9px] text-muted-foreground">{s.label}</div>
              <div className={`text-sm font-bold ${s.color}`}>{s.value}</div>
              <div className="text-[9px] text-green-500">{s.change}</div>
            </div>
          ))}
        </div>
        {/* Charts */}
        <div className="grid grid-cols-3 gap-2">
          <div className="col-span-2 bg-muted/20 rounded-lg p-3 border border-border">
            <div className="text-[10px] font-semibold mb-2 flex items-center gap-1">
              <TrendingUp className="w-3 h-3 text-solar-orange" /> Revenue Overview
            </div>
            <div className="flex items-end gap-1 h-20">
              {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((h, i) => (
                <div key={i} className="flex-1 rounded-t-sm gradient-bg opacity-70" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
          <div className="bg-muted/20 rounded-lg p-3 border border-border">
            <div className="text-[10px] font-semibold mb-2 flex items-center gap-1">
              <PieChart className="w-3 h-3 text-solar-green" /> Lead Sources
            </div>
            <div className="relative w-16 h-16 mx-auto">
              <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                <circle cx="18" cy="18" r="14" fill="none" stroke="#FFC107" strokeWidth="4" strokeDasharray="40 60" />
                <circle cx="18" cy="18" r="14" fill="none" stroke="#FF8C00" strokeWidth="4" strokeDasharray="30 70" strokeDashoffset="-40" />
                <circle cx="18" cy="18" r="14" fill="none" stroke="#28A745" strokeWidth="4" strokeDasharray="20 80" strokeDashoffset="-70" />
              </svg>
            </div>
          </div>
        </div>
        {/* Recent Leads Table */}
        <div className="bg-muted/20 rounded-lg border border-border overflow-hidden">
          <div className="text-[10px] font-semibold p-2 border-b border-border bg-muted/30">Recent Leads</div>
          <div className="divide-y divide-border">
            {[
              { name: "John Smith", status: "Qualified", value: "$45K", src: "Website" },
              { name: "Emily Chen", status: "New", value: "$32K", src: "Referral" },
              { name: "Mike Johnson", status: "Proposal", value: "$68K", src: "Direct" },
            ].map((r) => (
              <div key={r.name} className="flex items-center justify-between px-2.5 py-1.5 text-[9px]">
                <span className="font-medium text-foreground">{r.name}</span>
                <span className={`px-1.5 py-0.5 rounded text-[8px] font-medium ${r.status === "Qualified" ? "bg-solar-green/20 text-solar-green" : r.status === "New" ? "bg-solar-yellow/20 text-solar-orange" : "bg-solar-orange/20 text-solar-orange"}`}>{r.status}</span>
                <span className="text-muted-foreground">{r.src}</span>
                <span className="font-semibold text-foreground">{r.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Slide 2: Pipeline View
const DashboardSlide2 = () => (
  <div className="w-full bg-white rounded-xl overflow-hidden shadow-2xl border border-border">
    <div className="flex items-center gap-2 px-4 py-2 bg-muted/30 border-b border-border">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-yellow-400" />
        <div className="w-3 h-3 rounded-full bg-green-400" />
      </div>
      <div className="flex-1 flex justify-center">
        <span className="text-xs text-muted-foreground">solarcrm.app/pipeline</span>
      </div>
    </div>
    <div className="p-4">
      <div className="text-sm font-bold mb-3">Sales Pipeline</div>
      <div className="grid grid-cols-4 gap-3">
        {[
          { title: "New Leads", count: 24, color: "bg-solar-yellow/20", cards: [{t: "ABC Solar", v: "$125K"}, {t: "Green Homes", v: "$89K"}] },
          { title: "Qualified", count: 18, color: "bg-solar-orange/20", cards: [{t: "SunTech Inc", v: "$234K"}, {t: "EcoPower", v: "$156K"}] },
          { title: "Proposal", count: 12, color: "bg-solar-orange/30", cards: [{t: "SolarMax", v: "$445K"}] },
          { title: "Closed Won", count: 8, color: "bg-solar-green/20", cards: [{t: "BrightEnergy", v: "$678K"}, {t: "SunRise", v: "$234K"}] },
        ].map((col) => (
          <div key={col.title} className="rounded-lg border border-border bg-muted/20 p-2">
            <div className={`flex items-center justify-between px-2 py-1.5 rounded-md ${col.color} mb-2`}>
              <span className="text-[10px] font-bold">{col.title}</span>
              <span className="text-[10px] bg-white/60 rounded-full px-1.5 py-0.5">{col.count}</span>
            </div>
            <div className="space-y-1.5">
              {col.cards.map((card, i) => (
                <div key={i} className="bg-white rounded-lg p-2 border border-border shadow-sm">
                  <div className="text-[9px] font-medium">{card.t}</div>
                  <div className="text-[8px] text-solar-orange font-bold">{card.v}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Slide 3: Analytics View
const DashboardSlide3 = () => (
  <div className="w-full bg-white rounded-xl overflow-hidden shadow-2xl border border-border">
    <div className="flex items-center gap-2 px-4 py-2 bg-muted/30 border-b border-border">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-yellow-400" />
        <div className="w-3 h-3 rounded-full bg-green-400" />
      </div>
      <div className="flex-1 flex justify-center">
        <span className="text-xs text-muted-foreground">solarcrm.app/analytics</span>
      </div>
    </div>
    <div className="p-4 space-y-3">
      <div className="text-sm font-bold">Performance Analytics</div>
      <div className="grid grid-cols-3 gap-3">
        <div className="col-span-2 bg-muted/20 rounded-lg p-3 border border-border">
          <div className="flex items-center gap-1 text-[10px] font-semibold mb-2">
            <BarChart3 className="w-3 h-3 text-solar-orange" /> Monthly Revenue
          </div>
          <div className="flex items-end gap-1 h-24">
            {[45, 52, 48, 65, 58, 72, 68, 85, 78, 92, 88, 100].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col gap-0.5">
                <div className="rounded-t-sm gradient-bg" style={{ height: `${h}%` }} />
                <div className="rounded-t-sm bg-solar-orange/30" style={{ height: `${h * 0.6}%` }} />
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <div className="bg-gradient-to-br from-solar-yellow/20 to-solar-orange/20 rounded-lg p-3 border border-border">
            <div className="text-[9px] text-muted-foreground">Conversion Rate</div>
            <div className="text-xl font-bold gradient-text">34.8%</div>
            <div className="text-[8px] text-green-500">+5.2% this month</div>
          </div>
          <div className="bg-gradient-to-br from-solar-orange/20 to-solar-green/20 rounded-lg p-3 border border-border">
            <div className="text-[9px] text-muted-foreground">Avg Deal Size</div>
            <div className="text-xl font-bold gradient-text">$45.2K</div>
            <div className="text-[8px] text-green-500">+12% vs last month</div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {[
          { label: "Site Surveys", value: "89", icon: Sun },
          { label: "Installations", value: "67", icon: Zap },
          { label: "Completed", value: "124", icon: Check },
          { label: "Active Leads", value: "2,847", icon: Activity },
        ].map((stat) => (
          <div key={stat.label} className="text-center p-2 rounded-lg bg-muted/20 border border-border">
            <stat.icon className="w-4 h-4 mx-auto mb-1 text-solar-orange" />
            <div className="text-lg font-bold text-foreground">{stat.value}</div>
            <div className="text-[8px] text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const slides = [
  { component: DashboardSlide1, label: "Dashboard" },
  { component: DashboardSlide2, label: "Pipeline" },
  { component: DashboardSlide3, label: "Analytics" },
];

export default function HeroSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const CurrentDashboard = slides[currentSlide].component;

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-solar-yellow/5 via-white to-white">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#FFC10710_1px,transparent_1px),linear-gradient(to_bottom,#FFC10710_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-gradient-to-b from-solar-yellow/20 via-solar-orange/10 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-solar-green/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-solar-orange/10 blur-3xl" />

      <div className="container mx-auto max-w-7xl px-4 md:px-8 py-20 md:py-16 relative z-10">
        {/* Top Badge */}
        <div className={`flex justify-center mb-6 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-solar-yellow/30 shadow-sm">
            <Shield className="w-4 h-4 text-solar-orange" />
            <span className="text-xs font-medium text-solar-blue tracking-wide">SECURE, SCALABLE & COMPLIANT</span>
          </div>
        </div>

        {/* Main Headline - Centered */}
        <div className={`text-center max-w-4xl mx-auto mb-6 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight text-solar-blue">
            A new era of{" "}
            <span className="block mt-2">
              <span className="gradient-text">Solar CRM software</span>
            </span>
          </h1>
        </div>

        {/* Subtext - Centered */}
        <div className={`text-center max-w-2xl mx-auto mb-8 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            SolarCRM keeps pace with your technological transformation helping you become 
            operationally faster, leaner, innovative, resilient, and more relevant.
          </p>
        </div>

        {/* CTA Buttons - Centered */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
          <Button size="lg" className="bg-solar-blue hover:bg-solar-blue/90 text-white px-8 py-6 text-base font-semibold rounded-lg shadow-lg shadow-solar-blue/20 hover:shadow-xl hover:shadow-solar-blue/30 transition-all hover:scale-105">
            Start a Free Trial <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button size="lg" variant="outline" className="border-solar-orange/30 hover:bg-solar-yellow/10 hover:border-solar-orange text-solar-blue px-8 py-6 text-base font-semibold rounded-lg transition-all hover:scale-105">
            <Play className="w-5 h-5 mr-2 text-solar-orange" /> Request a demo
          </Button>
        </div>

        {/* Trust Badges */}
        <div className={`flex flex-wrap justify-center gap-6 mb-12 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.3s" }}>
          {[
            { icon: Check, text: "SOC 2 Certified" },
            { icon: Shield, text: "Bank-grade Security" },
            { icon: Users, text: "2,000+ Solar Companies" },
          ].map((badge) => (
            <div key={badge.text} className="flex items-center gap-2 text-sm text-muted-foreground">
              <badge.icon className="w-4 h-4 text-solar-green" />
              <span>{badge.text}</span>
            </div>
          ))}
        </div>

        {/* Dashboard Slider */}
        <div className={`relative max-w-5xl mx-auto ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.4s" }}>
          {/* Main Dashboard Display */}
          <div className="relative">
            <CurrentDashboard />
            
            {/* Slider Controls */}
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 hidden lg:block">
              <button 
                onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                className="w-10 h-10 rounded-full bg-white shadow-lg border border-border flex items-center justify-center hover:bg-solar-yellow/10 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-solar-blue" />
              </button>
            </div>
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden lg:block">
              <button 
                onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                className="w-10 h-10 rounded-full bg-white shadow-lg border border-border flex items-center justify-center hover:bg-solar-yellow/10 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-solar-blue" />
              </button>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {slides.map((slide, index) => (
              <button
                key={slide.label}
                onClick={() => setCurrentSlide(index)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  index === currentSlide 
                    ? "bg-solar-orange text-white shadow-md" 
                    : "bg-white text-muted-foreground border border-border hover:border-solar-orange/30"
                }`}
              >
                {slide.label}
              </button>
            ))}
          </div>

          {/* Slide Label */}
          <div className="text-center mt-3">
            <span className="text-xs text-muted-foreground">
              View {currentSlide + 1} of {slides.length}: <span className="font-medium text-solar-orange">{slides[currentSlide].label}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
