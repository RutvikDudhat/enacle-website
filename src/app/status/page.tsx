import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { StatusHero } from "@/components/pages/status/hero";
import { StatusServices } from "@/components/pages/status/services";
import { StatusHistory } from "@/components/pages/status/history";
import { StatusSubscribe } from "@/components/pages/status/subscribe";

export const metadata = {
  title: "System Status — Enacle",
  description:
    "Real-time health, uptime, and incident history for every Enacle service. Subscribe to get notified on any status change.",
};

export default function StatusPage() {
  return (
    <>
      <Header />
      <main>
        <StatusHero />
        <StatusServices />
        <StatusHistory />
        <StatusSubscribe />
      </main>
      <Footer />
    </>
  );
}
