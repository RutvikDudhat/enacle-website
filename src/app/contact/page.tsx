import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ContactHero } from "@/components/pages/contact/hero";
import { ContactMain } from "@/components/pages/contact/main";
import { ContactFAQ } from "@/components/pages/contact/faq";

export const metadata = {
  title: "Contact — Enacle",
  description:
    "Get in touch with the Enacle team. Talk to sales, get support, explore partnerships, or just say hello.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactHero />
        <ContactMain />
        <ContactFAQ />
      </main>
      <Footer />
    </>
  );
}
