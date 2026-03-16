import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PricingHero } from "@/components/pages/pricing/hero";
import { PricingPlans } from "@/components/pages/pricing/plans";
import { PricingFaq } from "@/components/pages/pricing/faq";

export const metadata = {
  title: "Pricing — Enacle",
  description: "Simple, transparent pricing. All 12 products included in every plan. Start free, no credit card required.",
};

export default function PricingPage() {
  return (
    <>
      <Header />
      <main>
        <PricingHero />
        <PricingPlans />
        <PricingFaq />
      </main>
      <Footer />
    </>
  );
}
