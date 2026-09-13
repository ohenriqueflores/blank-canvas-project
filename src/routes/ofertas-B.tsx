import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/runners/Hero";
import { BrandsBar } from "@/components/runners/BrandsBar";
import { Benefits } from "@/components/runners/Benefits";
import { Offers } from "@/components/runners/Offers";
import { Steps } from "@/components/runners/Steps";
import { Testimonials } from "@/components/runners/Testimonials";
import { Faq } from "@/components/runners/Faq";
import { FinalCta, Footer } from "@/components/runners/FinalCta";
import { StickyBar } from "@/components/runners/StickyBar";

export const Route = createFileRoute("/ofertas-B")({
  component: OfertasB,
});

function OfertasB() {
  return (
    <main className="min-h-screen bg-[#0A0F0D] pb-20 font-sans antialiased">
      <Hero />
      <BrandsBar />
      <Benefits />
      <Offers />
      <Steps />
      <Testimonials />
      <Faq />
      <FinalCta />
      <Footer />
      <StickyBar />
    </main>
  );
}
