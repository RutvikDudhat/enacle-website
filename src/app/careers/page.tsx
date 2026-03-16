import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CareersHero } from "@/components/pages/careers/hero";
import { CareersCulture } from "@/components/pages/careers/culture";
import { CareersOpenings } from "@/components/pages/careers/openings";
import { CareersProcess } from "@/components/pages/careers/process";

export const metadata = {
  title: "Careers — Enacle",
  description:
    "Join the team building the AI-powered operating system for every business. Remote-first, ambitious, and hiring now.",
};

export default function CareersPage() {
  return (
    <>
      <Header />
      <main>
        <CareersHero />
        <CareersCulture />
        <CareersOpenings />
        <CareersProcess />
      </main>
      <Footer />
    </>
  );
}
