import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SolutionsHero } from "@/components/pages/solutions/hero";
import { SolutionsGrid } from "@/components/pages/solutions/grid";

export const metadata = {
  title: "Solutions — Enacle",
  description: "Enacle for every team: engineering, marketing, sales, support, HR, and executives.",
};

export default function SolutionsPage() {
  return (
    <>
      <Header />
      <main>
        <SolutionsHero />
        <SolutionsGrid />
      </main>
      <Footer />
    </>
  );
}
