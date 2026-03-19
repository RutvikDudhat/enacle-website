"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Sun, Zap, TrendingUp, Users, Shield, Smartphone, Globe, ArrowRight,
  Check, Star, Lightbulb, Leaf, Target, BarChart3, Clock, DollarSign
} from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { BlurFade } from "@/components/ui/blur-fade";
import { RetroGrid } from "@/components/ui/retro-grid";

// Hero Section
function SolarHeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-white via-purple-50/30 to-pink-50/20 pt-32 pb-20 overflow-hidden">
      {/* Retro Grid Background */}
      <RetroGrid
        angle={65}
        cellSize={50}
        opacity={0.3}
        lightLineColor="rgb(123, 104, 238)"
        darkLineColor="rgb(123, 104, 238)"
        className="inset-0"
      />

      {/* Gradient Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-gradient-to-tr from-purple-100/20 via-pink-100/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <BlurFade>
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 mb-8 border border-purple-400 animate-pulse-border">
              <Sun className="h-4 w-4 text-purple-600 animate-spin" />
              <span className="text-sm font-semibold text-purple-900">Next Generation Solar Solutions</span>
            </div>
          </BlurFade>

          <BlurFade delay={0.1}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-gray-900 mb-8 leading-[1.1]">
              Harness the <br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-pink-600 bg-clip-text text-transparent">
                power of the sun
              </span><br />
              with intelligent technology
            </h1>
          </BlurFade>

          <BlurFade delay={0.2}>
            <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Transform solar energy management with AI-driven insights, real-time monitoring, and predictive analytics for maximum efficiency.
            </p>
          </BlurFade>

          <BlurFade delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <ShimmerButton
                shimmerColor="#fd71af"
                background="#7b68ee"
                className="rounded-full px-8 py-4 text-lg font-bold text-white shadow-lg"
              >
                Explore Solutions <ArrowRight className="inline h-5 w-5 ml-2" />
              </ShimmerButton>
              <button className="flex items-center gap-2 px-8 py-4 rounded-full border-2 border-purple-500 text-lg font-semibold text-purple-700 bg-purple-50/70 hover:bg-purple-100 hover:border-purple-600 hover:text-purple-800 transition-all shadow-md hover:shadow-lg hover:animate-pulse-glow">
                <Sun className="h-5 w-5" /> Learn More
              </button>
            </div>
          </BlurFade>

          {/* Key Stats */}
          <BlurFade delay={0.4}>
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-gray-200">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0 }}
                className="text-center"
              >
                <div className="text-4xl font-black bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">50%</div>
                <p className="text-sm text-gray-600 mt-2">Energy Savings</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-black bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">24/7</div>
                <p className="text-sm text-gray-600 mt-2">Real-time Monitoring</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="text-4xl font-black bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">99.9%</div>
                <p className="text-sm text-gray-600 mt-2">System Uptime</p>
              </motion.div>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}

// Features Section
function SolarFeaturesSection() {
  const features = [
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      desc: "Real-time energy production analytics and performance insights"
    },
    {
      icon: Zap,
      title: "Smart Optimization",
      desc: "AI-powered system optimization for maximum efficiency"
    },
    {
      icon: Shield,
      title: "System Protection",
      desc: "Advanced monitoring and fault detection"
    },
    {
      icon: Globe,
      title: "Remote Management",
      desc: "Control and monitor from anywhere, anytime"
    },
    {
      icon: TrendingUp,
      title: "ROI Tracking",
      desc: "Track your return on investment in real-time"
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      desc: "Seamless experience on all devices"
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <BlurFade>
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 mb-4">
              <Lightbulb className="h-4 w-4 text-purple-600" />
              <span className="text-xs font-bold text-purple-900 uppercase tracking-wide">POWERFUL FEATURES</span>
            </div>
          </BlurFade>

          <BlurFade delay={0.1}>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
              Everything you need for solar success
            </h2>
          </BlurFade>

          <BlurFade delay={0.2}>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive tools and insights built specifically for the solar energy industry
            </p>
          </BlurFade>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="rounded-xl border border-gray-200 p-6 bg-white hover:shadow-lg hover:border-purple-300 transition-all group"
            >
              <feature.icon className="h-8 w-8 text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Benefits Section
function SolarBenefitsSection() {
  const benefits = [
    {
      title: "Maximize Energy Production",
      desc: "AI-powered optimization increases output by up to 50%",
      icon: "⚡"
    },
    {
      title: "Reduce Operating Costs",
      desc: "Predictive maintenance prevents costly downtime",
      icon: "💰"
    },
    {
      title: "Sustainable Future",
      desc: "Track your environmental impact in real-time",
      icon: "🌱"
    },
    {
      title: "Scale Your Business",
      desc: "Manage unlimited solar installations from one dashboard",
      icon: "📈"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <BlurFade>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
              Why choose our solar platform?
            </h2>
          </BlurFade>

          <BlurFade delay={0.1}>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands of solar companies already saving time and money
            </p>
          </BlurFade>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border-2 border-purple-300 bg-gradient-to-br from-purple-50 to-white p-8 hover:shadow-2xl hover:shadow-purple-300/50 transition-all"
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-700">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Integration Section
function SolarIntegrationSection() {
  const integrations = [
    { name: "Smart Inverters", icon: "⚙️" },
    { name: "Weather APIs", icon: "🌤️" },
    { name: "IoT Sensors", icon: "📡" },
    { name: "Weather Station", icon: "📊" },
    { name: "Battery Systems", icon: "🔋" },
    { name: "Utility APIs", icon: "🔌" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <BlurFade>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Integrates with your existing systems
            </h2>
          </BlurFade>

          <BlurFade delay={0.1}>
            <p className="text-lg text-gray-600">
              Seamlessly connect with industry-leading solar equipment and platforms
            </p>
          </BlurFade>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {integrations.map((int, i) => (
            <motion.div
              key={int.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.08 }}
              className="rounded-xl border border-gray-200 p-6 text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-gray-50 to-white"
            >
              <div className="text-4xl mb-3">{int.icon}</div>
              <p className="text-sm font-semibold text-gray-900">{int.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Pricing Preview Section
function SolarPricingSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-white to-purple-50/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <BlurFade>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
              Flexible pricing for every size
            </h2>
          </BlurFade>

          <BlurFade delay={0.1}>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transparent pricing with no hidden fees. Scale as you grow.
            </p>
          </BlurFade>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Starter", price: "₹4,999", features: ["Up to 5 systems", "Basic analytics", "Email support", "API access"] },
            { name: "Professional", price: "₹14,999", features: ["Up to 50 systems", "Advanced analytics", "Priority support", "Custom integrations"], highlight: true },
            { name: "Enterprise", price: "Custom", features: ["Unlimited systems", "White-label option", "24/7 phone support", "Dedicated account manager"] }
          ].map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-2xl border-2 p-8 transition-all ${
                plan.highlight
                  ? "border-purple-500 bg-gradient-to-br from-purple-50 to-pink-50 shadow-2xl shadow-purple-300/50"
                  : "border-gray-300 bg-white hover:shadow-lg"
              }`}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
                {plan.price}
                {plan.price !== "Custom" && <span className="text-lg text-gray-600">/month</span>}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fi) => (
                  <li key={fi} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-purple-600 shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-full font-bold transition-all ${
                plan.highlight
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg"
                  : "border-2 border-purple-600 text-purple-600 hover:bg-purple-50"
              }`}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section
function SolarCTASection() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-pink-600">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-40 h-40 border-2 border-white rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-10 w-64 h-64 border-2 border-white rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Sun className="h-16 w-16 text-white/80 mx-auto mb-6 animate-pulse-glow" />
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.1]">
            Ready to power your<br />
            solar business?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join the solar revolution and start optimizing your energy systems today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-white text-purple-600 rounded-full text-lg font-bold hover:bg-purple-50 transition-all shadow-lg hover:shadow-2xl hover:animate-pulse-glow transform hover:scale-105 border border-purple-200">
              Start Free Trial <ArrowRight className="inline h-5 w-5 ml-2" />
            </button>
            <button className="px-8 py-4 bg-purple-600/20 text-white rounded-full text-lg font-bold hover:bg-purple-600/40 transition-all border-2 border-purple-300 hover:border-purple-200 hover:shadow-xl">
              Schedule Demo
            </button>
          </div>

          <p className="text-white/70 text-sm mt-8">
            ✓ No credit card required • ✓ 14-day free trial • ✓ 24/7 support
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// Main Solar Landing Page
export function SolarLandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <SolarHeroSection />
      <SolarFeaturesSection />
      <SolarBenefitsSection />
      <SolarIntegrationSection />
      <SolarPricingSection />
      <SolarCTASection />
    </div>
  );
}
