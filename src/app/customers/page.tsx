import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CustomersHero } from "@/components/pages/customers/hero";
import { CustomersTestimonials } from "@/components/pages/customers/testimonials";
import { CustomersLogos } from "@/components/pages/customers/logos";
import { CustomersCTA } from "@/components/pages/customers/cta";

export const metadata = {
  title: "Customers — Enacle",
  description:
    "See how 50,000+ teams across engineering, marketing, sales, finance, and more use Enacle to move faster and work smarter.",
};

export default function CustomersPage() {
  return (
    <>
      <Header />
      <main>
        <CustomersHero />
        <CustomersTestimonials />
        <CustomersLogos />
        <CustomersCTA />
      </main>
      <Footer />
    </>
  );
}
