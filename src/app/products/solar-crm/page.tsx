import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import SolarCRMLandingPage from "@/components/pages/solar-crm-landing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solar CRM — Enacle",
  description: "A CRM that powers your solar business from lead to install. Track leads, manage installations, and deliver exceptional service in one platform.",
};

export default function Page() {
  return (
    <>
      <Header minimal />
      <main>
        <SolarCRMLandingPage />
      </main>
      <Footer />
    </>
  );
}
