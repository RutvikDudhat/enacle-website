import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ProductDetail } from "@/components/pages/products/product-detail";
import { getProductBySlug, getAllProductSlugs } from "@/lib/products-data";
import type { Metadata } from "next";

/* ── Static params for all known slugs ──────────────────────────────── */
export function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

/* ── Per-page metadata ───────────────────────────────────────────────── */
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product not found — Enacle" };
  return {
    title: `${product.name} — Enacle`,
    description: product.heroParagraph,
  };
}

/* ── Page component ──────────────────────────────────────────────────── */
export default async function ProductPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <>
      <Header />
      <main>
        <ProductDetail product={product} />
      </main>
      <Footer />
    </>
  );
}
