import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PlatformHero } from "@/components/pages/platform/hero";
import { PlatformArchitecture } from "@/components/pages/platform/architecture";
import { PlatformIntegrations } from "@/components/pages/platform/integrations";
import { PlatformSecurity } from "@/components/pages/platform/security";

export const metadata = {
  title: "Platform — Enacle",
  description: "The technical architecture behind Enacle: AI infrastructure, integrations, security, and enterprise-grade reliability.",
};

export default function PlatformPage() {
  return (
    <>
      <Header />
      <main>
        <PlatformHero />
        <PlatformArchitecture />
        <PlatformIntegrations />
        <PlatformSecurity />
      </main>
      <Footer />
    </>
  );
}
