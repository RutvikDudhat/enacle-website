"use client";

import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import TrustedBySection from "@/components/landing/TrustedBySection";
import FeaturesGrid from "@/components/landing/FeaturesGrid";
import WorkflowSection from "@/components/landing/WorkflowSection";
import DashboardShowcase from "@/components/landing/DashboardShowcase";
import ModulesGrid from "@/components/landing/ModulesGrid";
import ProjectManagementSection from "@/components/landing/ProjectManagementSection";
import AnalyticsSection from "@/components/landing/AnalyticsSection";
import AutomationSection from "@/components/landing/AutomationSection";
import BillingSection from "@/components/landing/BillingSection";
import MultiDeviceMockups from "@/components/landing/MultiDeviceMockups";
import GrowthSection from "@/components/landing/GrowthSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import SecuritySection from "@/components/landing/SecuritySection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

export default function SolarCRMLanding() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <TrustedBySection />
      <FeaturesGrid />
      <WorkflowSection />
      <DashboardShowcase />
      <ModulesGrid />
      <ProjectManagementSection />
      <AnalyticsSection />
      <AutomationSection />
      <BillingSection />
      <MultiDeviceMockups />
      <GrowthSection />
      <TestimonialsSection />
      <SecuritySection />
      <CTASection />
      <Footer />
    </main>
  );
}
