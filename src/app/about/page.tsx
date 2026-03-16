import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AboutHero } from "@/components/pages/about/hero";
import { AboutMission } from "@/components/pages/about/mission";
import { AboutTeam } from "@/components/pages/about/team";

export const metadata = {
  title: "About — Enacle",
  description: "The story behind Enacle — our mission to build the AI-powered operating system for every business.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <AboutMission />
        <AboutTeam />
      </main>
      <Footer />
    </>
  );
}
