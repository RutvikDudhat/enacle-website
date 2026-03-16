import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ProductsHero } from "@/components/pages/products/hero";
import { ProductsGrid } from "@/components/pages/products/grid";

export const metadata = {
  title: "Products — Enacle",
  description: "12 products in one subscription. Projects, Chat, Brain MAX, AI Agents, Docs, Dashboards and more.",
};

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main>
        <ProductsHero />
        <ProductsGrid />
      </main>
      <Footer />
    </>
  );
}
