import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PartnersHero } from "@/components/pages/partners/hero";
import { PartnersTiers } from "@/components/pages/partners/tiers";
import { PartnersApply } from "@/components/pages/partners/apply";
import { PartnersFAQ } from "@/components/pages/partners/faq";

export const metadata = {
  title: "Partner Program — Enacle",
  description:
    "Join the Enacle Partner Program. Earn up to 40% recurring revenue as a reseller, technology ISV, agency, or referral partner.",
};

export default function PartnersPage() {
  return (
    <>
      <Header />
      <main>
        <PartnersHero />
        <PartnersTiers />
        <PartnersApply />
        <PartnersFAQ />
      </main>
      <Footer />
    </>
  );
}
