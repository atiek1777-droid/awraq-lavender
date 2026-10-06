import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Works from "@/components/Works";
import Branches from "@/components/Branches";
import Footer from "@/components/Footer";
import StickyCta from "@/components/StickyCta";
import { site } from "@/lib/site";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Florist",
    name: site.name,
    alternateName: site.nameEn,
    slogan: site.tagline,
    url: site.url,
    sameAs: [
      `https://instagram.com/${site.instagram}`,
      `https://www.tiktok.com/@${site.tiktok}`,
      ...(site.snapchat ? [`https://www.snapchat.com/add/${site.snapchat}`] : []),
    ],
  };
  return (
    <>
      <Hero />
      <main>
        <Services />
        <Works />
        <Branches />
      </main>
      <Footer />
      <StickyCta />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
