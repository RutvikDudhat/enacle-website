"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BlurFade } from "@/components/ui/blur-fade";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { ArrowRight, Sparkles, Bot, Brain, Zap, Clock, Users, Target, MessageSquare, BarChart3, Calendar, FileText, LayoutGrid, TrendingUp, Globe, DollarSign, ShoppingCart, Headphones, Shield, Settings, ChevronRight, Check, Star, Play, Monitor, Smartphone } from "lucide-react";

// AI Character Component
function AICharacter({ className = "" }: { className?: string }) {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`relative ${className}`}
    >
      {/* Colorful gradient mask */}
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 p-1">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 flex items-center justify-center">
            <Bot className="w-10 h-10 text-white" />
          </div>
        </div>
      </div>
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 blur-xl opacity-40 animate-pulse" />
    </motion.div>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20 pt-24 pb-16 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,146,60,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(123,104,238,0.08),transparent_70%)]" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <BlurFade>
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-100 to-pink-100 dark:from-orange-900/30 dark:to-pink-900/30 px-4 py-2 mb-6 shadow-lg">
              <Sparkles className="h-4 w-4 text-orange-600 dark:text-orange-400" />
              <span className="text-sm font-semibold text-orange-800 dark:text-orange-200">New! AI Company Intelligence</span>
            </div>
          </BlurFade>
          
          <BlurFade delay={0.1}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-gray-900 dark:text-white mb-6 leading-[1.1]">
              Every app. Every team.<br />
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Unlimited AI Agents.
              </span>
            </h1>
          </BlurFade>
          
          <BlurFade delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center gap-6 text-gray-600 dark:text-gray-300">
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="font-medium">Replace all your software</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="font-medium">Centralize all your context</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="font-medium">Maximize productivity with AI</span>
                </div>
              </div>
            </div>
          </BlurFade>
          
          <BlurFade delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <ShimmerButton 
                shimmerColor="#ec4899" 
                background="#f97316" 
                className="rounded-full px-8 py-4 text-lg font-bold text-white shadow-xl"
              >
                Get started. It's FREE! <ArrowRight className="inline h-5 w-5 ml-2" />
              </ShimmerButton>
              <button className="flex items-center gap-2 px-8 py-4 rounded-full border-2 border-gray-300 dark:border-gray-600 text-lg font-semibold text-gray-700 dark:text-gray-300 hover:border-orange-400 hover:text-orange-600 dark:hover:text-orange-400 transition-all shadow-lg">
                <Play className="h-5 w-5" /> Watch Demo
              </button>
            </div>
          </BlurFade>
        </div>
        
        {/* AI Character */}
        <div className="flex justify-center mb-12">
          <AICharacter />
        </div>
      </div>
    </section>
  );
}

// Project Management UI
function ProjectManagementUI() {
  const [activeTab, setActiveTab] = useState("Tasks");
  
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Sidebar */}
          <div className="lg:col-span-3">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-4 h-fit">
              {/* Logo */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">M</span>
                </div>
                <span className="font-bold text-gray-900 dark:text-white">Mango Tech</span>
              </div>
              
              {/* Navigation */}
              <nav className="space-y-1">
                {[
                  { icon: LayoutGrid, label: "Projects", active: true },
                  { icon: MessageSquare, label: "Chat" },
                  { icon: Brain, label: "Brain MAX" },
                  { icon: Bot, label: "AI Agents" },
                  { icon: Target, label: "Sprints" },
                  { icon: Clock, label: "Time Tracking" },
                  { icon: Calendar, label: "Calendar" },
                  { icon: FileText, label: "Docs" },
                  { icon: LayoutGrid, label: "Whiteboards" },
                  { icon: Zap, label: "Automations" },
                  { icon: BarChart3, label: "Dashboards" },
                  { icon: Calendar, label: "Scheduling" },
                ].map((item) => (
                  <button
                    key={item.label}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      item.active
                        ? "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300"
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white"
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-9">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 relative">
              
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Marketing</h2>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">Active</span>
                    </div>
                    <span className="text-gray-400">•</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">12 team members</span>
                  </div>
                </div>
                
                {/* Tabs */}
                <div className="flex gap-1 bg-white dark:bg-gray-900 rounded-lg p-1">
                  {["Chat", "Tasks", "Schedule", "Gantt", "Customers"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                        activeTab === tab
                          ? "bg-orange-500 text-white"
                          : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Tasks Content */}
              <AnimatePresence mode="wait">
                {activeTab === "Tasks" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="space-y-6">
                      
                      {/* DONE Section */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Check className="h-4 w-4 text-green-600" />
                          <h3 className="font-semibold text-gray-900 dark:text-white">DONE</h3>
                          <span className="text-sm text-gray-500">(3)</span>
                        </div>
                        <div className="space-y-2">
                          {[
                            { title: "Social campaign", labels: ["Design"], status: "completed" },
                            { title: "Website assets", labels: ["Product"], status: "completed" },
                            { title: "Brand guidelines", labels: ["Design"], status: "completed" },
                          ].map((task, i) => (
                            <div key={i} className="bg-white dark:bg-gray-900 rounded-lg p-4 flex items-center gap-3">
                              <div className="w-5 h-5 rounded border-2 border-green-500 bg-green-500 flex items-center justify-center">
                                <Check className="h-3 w-3 text-white" />
                              </div>
                              <span className="flex-1 text-gray-700 dark:text-gray-300 line-through">{task.title}</span>
                              <div className="flex gap-2">
                                {task.labels.map((label) => (
                                  <span key={label} className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full">
                                    {label}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* IN PROGRESS Section */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-4 h-4 rounded border-2 border-orange-500"></div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">IN PROGRESS</h3>
                          <span className="text-sm text-gray-500">(2)</span>
                        </div>
                        <div className="space-y-2">
                          {[
                            { title: "Landing page", labels: ["Engineering"], assignee: "JD" },
                            { title: "Mobile app", labels: ["Product"], assignee: "AS" },
                          ].map((task, i) => (
                            <div key={i} className="bg-white dark:bg-gray-900 rounded-lg p-4 flex items-center gap-3">
                              <div className="w-5 h-5 rounded border-2 border-orange-500"></div>
                              <span className="flex-1 text-gray-900 dark:text-white">{task.title}</span>
                              <div className="flex gap-2">
                                {task.labels.map((label) => (
                                  <span key={label} className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs rounded-full">
                                    {label}
                                  </span>
                                ))}
                              </div>
                              <div className="w-6 h-6 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                                {task.assignee}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Mobile Phone Mockup */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute top-4 right-4 w-64 h-96 bg-black rounded-3xl p-2 shadow-2xl hidden lg:block"
              >
                <div className="w-full h-full bg-white dark:bg-gray-900 rounded-2xl overflow-hidden">
                  {/* Mobile Header */}
                  <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
                          <span className="text-white font-bold text-xs">M</span>
                        </div>
                        <span className="text-white font-semibold text-sm">Mango Tech</span>
                      </div>
                      <div className="w-4 h-4 bg-white/20 rounded-full"></div>
                    </div>
                    <div className="bg-white/20 rounded-lg px-2 py-1">
                      <input type="text" placeholder="Search" className="bg-transparent text-white placeholder-white/70 text-xs w-full outline-none" />
                    </div>
                  </div>
                  
                  {/* Mobile Content */}
                  <div className="p-3 space-y-3">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-orange-100 dark:bg-orange-900/30 rounded-lg p-2 text-center">
                        <div className="text-orange-600 dark:text-orange-400 font-bold text-sm">Replies</div>
                        <div className="text-gray-600 dark:text-gray-400 text-xs">5 new</div>
                      </div>
                      <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-2 text-center">
                        <div className="text-blue-600 dark:text-blue-400 font-bold text-sm">Today</div>
                        <div className="text-gray-600 dark:text-gray-400 text-xs">12 tasks</div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="text-xs font-semibold text-gray-500 dark:text-gray-400">RECENTS</div>
                      {[
                        "Social Media Content Calendar",
                        "Instructional Resources",
                        "Travel Tips and Tricks"
                      ].map((item, i) => (
                        <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-2">
                          <div className="text-xs text-gray-700 dark:text-gray-300">{item}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* AI Agent Popup */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.3 }}
                className="absolute bottom-8 right-8 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-4 border border-gray-200 dark:border-gray-700 max-w-xs z-10"
              >
                <div className="flex items-start gap-3">
                  <AICharacter className="shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">Super Agent</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      I can help you manage this project! Want me to prioritize tasks or create a timeline?
                    </p>
                    <div className="flex gap-2">
                      <button className="px-3 py-1 bg-orange-500 text-white text-xs rounded-full hover:bg-orange-600 transition-colors">
                        Yes, help me
                      </button>
                      <button className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                        Maybe later
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Super Agents Section
function SuperAgentsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 dark:from-gray-900 dark:via-orange-900/20 dark:to-purple-900/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 dark:text-white mb-6"
          >
            A new era of humans,<br />
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              with Super Agents
            </span>
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <button className="px-8 py-4 bg-black text-white rounded-full text-lg font-bold hover:bg-gray-800 transition-colors shadow-xl">
              Build your own agent
            </button>
            <button className="px-8 py-4 bg-white text-black border-2 border-black rounded-full text-lg font-bold hover:bg-gray-100 transition-colors shadow-xl">
              Learn More
            </button>
          </motion.div>
        </div>
        
        {/* AI Character with annotations */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center items-center mb-16"
        >
          {/* Central AI Character */}
          <div className="relative">
            <AICharacter className="w-32 h-32" />
            
            {/* Annotations */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute -left-32 top-1/2 -translate-y-1/2"
            >
              <div className="flex items-center gap-2">
                <div className="w-16 h-px bg-gray-400"></div>
                <div className="bg-white dark:bg-gray-800 rounded-lg px-4 py-2 shadow-lg">
                  <div className="text-sm font-bold text-gray-900 dark:text-white">WORKS 24/7</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute -right-40 top-0"
            >
              <div className="flex items-center gap-2">
                <div className="bg-white dark:bg-gray-800 rounded-lg px-4 py-2 shadow-lg">
                  <div className="text-sm font-bold text-gray-900 dark:text-white">500+ TOOL SUPERPOWERS</div>
                </div>
                <div className="w-16 h-px bg-gray-400"></div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -right-32 bottom-0"
            >
              <div className="flex items-center gap-2">
                <div className="bg-white dark:bg-gray-800 rounded-lg px-4 py-2 shadow-lg">
                  <div className="text-sm font-bold text-gray-900 dark:text-white">INFINITE MEMORY</div>
                </div>
                <div className="w-16 h-px bg-gray-400"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Bottom CTA with silhouette */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative"
        >
          {/* Human silhouette */}
          <div className="relative h-64 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-t from-red-100 to-transparent opacity-30 rounded-full blur-3xl"></div>
            <div className="w-48 h-48 bg-red-100 dark:bg-red-900/20 rounded-full relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-50 to-red-100 opacity-60"></div>
              {/* Simple head and shoulders silhouette */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-red-200 dark:bg-red-800/40 rounded-full"></div>
              <div className="absolute top-20 left-1/2 -translate-x-1/2 w-24 h-20 bg-red-200 dark:bg-red-800/40 rounded-t-3xl"></div>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <button className="px-8 py-4 bg-orange-500 text-white rounded-full text-lg font-bold hover:bg-orange-600 transition-colors shadow-xl">
              Build your own agent
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// AI Solutions Section
function AISolutionsSection() {
  const [activeTeam, setActiveTeam] = useState("Projects");
  
  const teams = [
    "Projects",
    "Marketing", 
    "Product & Eng",
    "IT",
    "HR",
    "Leadership",
    "See all teams"
  ];
  
  const solutions = {
    Projects: {
      title: "Deliver projects on time, every time",
      description: "AI-powered project management that adapts to your team's workflow and predicts delays before they happen.",
      replaces: ["Jira", "Asana", "Monday.com"],
      features: [
        "Auto-sprint planning with AI",
        "Real-time dependency tracking", 
        "Predictive timeline adjustments"
      ],
      agents: [
        { name: "Project Manager", desc: "Coordinates resources and timelines" },
        { name: "Scrum Master", desc: "Facilitates agile ceremonies" },
        { name: "Risk Analyst", desc: "Identifies and mitigates project risks" },
        { name: "Resource Planner", desc: "Optimizes team allocation" }
      ]
    },
    Marketing: {
      title: "Create campaigns that convert",
      description: "End-to-end marketing automation with AI that knows your audience better than you do.",
      replaces: ["HubSpot", "Marketo", "Mailchimp"],
      features: [
        "AI-powered content generation",
        "Predictive lead scoring",
        "Automated campaign optimization"
      ],
      agents: [
        { name: "Content Creator", desc: "Generates blog posts and social media" },
        { name: "Campaign Manager", desc: "Optimizes marketing campaigns" },
        { name: "Lead Analyst", desc: "Scores and nurtures leads" },
        { name: "SEO Specialist", desc: "Optimizes content for search" }
      ]
    }
  };
  
  const currentSolution = solutions[activeTeam as keyof typeof solutions] || solutions.Projects;
  
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            AI solutions for every team
          </h2>
          
          {/* Team Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {teams.map((team) => (
              <button
                key={team}
                onClick={() => setActiveTeam(team)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTeam === team
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {team}
              </button>
            ))}
          </div>
        </div>
        
        {/* Solution Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side */}
          <motion.div
            key={activeTeam}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {currentSolution.title}
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              {currentSolution.description}
            </p>
            
            {/* Replaces Section */}
            <div className="mb-6">
              <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 mb-3">REPLACES</h4>
              <div className="flex gap-3">
                {currentSolution.replaces.map((tool) => (
                  <div key={tool} className="px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tool}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Features */}
            <div className="space-y-3 mb-8">
              {currentSolution.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
            
            {/* CTA Button */}
            <button className="flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors">
              Explore solution <ChevronRight className="h-4 w-4" />
            </button>
          </motion.div>
          
          {/* Right Side - AI Agents */}
          <motion.div
            key={`agents-${activeTeam}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">AI Agents</h4>
            {currentSolution.agents.map((agent, i) => (
              <motion.div
                key={agent.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-xl flex items-center justify-center shrink-0">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 dark:text-white mb-1">{agent.name}</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{agent.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Save Time Section
function SaveTimeSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-pink-500 to-purple-600 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent_50%)]" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <ArrowRight className="h-4 w-4 text-gray-900" />
              </div>
            </div>
          </div>
          
          {/* Main Text */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-8 leading-[1.1]">
            Save 6-7 days<br />
            every week.
          </h2>
          
          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-orange-500 text-white rounded-full text-lg font-bold hover:bg-orange-400 transition-colors shadow-xl"
          >
            Get started FREE
          </motion.button>
        </motion.div>
        
        {/* Desktop UI Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 relative"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
            <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden">
              {/* App Header */}
              <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">M</span>
                    </div>
                    <span className="text-white font-bold">Mango Tech</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                    <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                    <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              {/* App Content */}
              <div className="p-4">
                <div className="grid grid-cols-4 gap-4">
                  <div className="col-span-1 space-y-2">
                    {["Home", "Inbox", "Replies", "My Tasks", "Posts", "Spaces", "Chat", "Brain", "Apps"].map((item) => (
                      <div key={item} className="text-xs text-gray-600 dark:text-gray-400 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="col-span-3">
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                      <h3 className="font-bold text-gray-900 dark:text-white mb-3">Marketing</h3>
                      <div className="flex gap-2 mb-4">
                        {["Chat", "Overview", "Open Tasks", "Design Needs", "Timeline", "Gantt", "Workload"].map((tab) => (
                          <div key={tab} className="px-3 py-1 bg-white dark:bg-gray-700 rounded text-xs">
                            {tab}
                          </div>
                        ))}
                      </div>
                      <div className="space-y-2">
                        {[
                          { title: "Social campaign", status: "Done", label: "Design" },
                          { title: "Website assets", status: "In Progress", label: "Product" },
                          { title: "Landing page", status: "In Progress", label: "Engineering" },
                          { title: "About page", status: "In Progress", label: "Engineering" },
                          { title: "Mobile", status: "To Do", label: "Product" }
                        ].map((task) => (
                          <div key={task.title} className="flex items-center gap-2 p-2 bg-white dark:bg-gray-900 rounded">
                            <div className="w-3 h-3 rounded-full border-2 border-gray-300"></div>
                            <span className="text-xs text-gray-700 dark:text-gray-300 flex-1">{task.title}</span>
                            <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded">
                              {task.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
function TrustSection() {
  const companies = ["Dish", "Deloitte", "Pfizer", "Adobe", "American", "NBCUniversal"];
  
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">TRUSTED BY THE BEST</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {companies.map((company) => (
              <span key={company} className="text-lg font-semibold text-gray-600 dark:text-gray-400">
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Main Component
export default function ProductsPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <HeroSection />
        <ProjectManagementUI />
        <SuperAgentsSection />
        <AISolutionsSection />
        <SaveTimeSection />
        <TrustSection />
      </div>
      <Footer />
    </>
  );
}
