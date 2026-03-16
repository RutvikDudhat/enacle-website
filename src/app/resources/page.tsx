import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ResourcesHero } from "@/components/pages/resources/hero";
import { ResourcesGrid } from "@/components/pages/resources/grid";

export const metadata = {
  title: "Resources — Enacle",
  description: "Guides, templates, case studies, and documentation to help your team get the most out of Enacle.",
};

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <main>
        <ResourcesHero />
        <ResourcesGrid />
      </main>
      <Footer />
    </>
  );
}
