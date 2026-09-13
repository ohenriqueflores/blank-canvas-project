import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/runners/Hero";

export const Route = createFileRoute("/ofertas-B")({
  component: OfertasB,
});

function OfertasB() {
  return (
    <main className="min-h-screen bg-[#0A0F0D] font-sans antialiased">
      <Hero />
    </main>
  );
}

