import { createFileRoute } from "@tanstack/react-router";
import { WHATSAPP_URL } from "@/lib/runners";

export const Route = createFileRoute("/ofertas-B")({
  component: OfertasB,
});

const STORE_LOGOS = [
  { src: "/uploads/images__1_.png", alt: "Logo de marca parceira" },
  { src: "/uploads/9ea42f7b638f36be2a996e7b0de3cb5c.jpg", alt: "Logo de loja parceira" },
  { src: "/uploads/Logotipo_da_Penalty__2024_.svg", alt: "Logo Penalty" },
];

export function OfertasB() {
  return (
    <main className="min-h-screen bg-[#070D16] font-sans text-white antialiased">
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-[#25D366]/10 blur-[120px]"
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pb-14 pt-8 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:pt-12">
          <div className="order-2 flex justify-center lg:order-1">
            <div className="w-full max-w-[320px] rounded-[2.5rem] border-[10px] border-[#1c1c1e] bg-black shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]">
              <div className="flex items-center justify-between rounded-t-[1.8rem] bg-black px-5 pb-1 pt-3 text-[11px] font-semibold text-white">
                <span>11:08</span>
                <span className="h-5 w-20 rounded-full bg-black" />
                <span>📶 🔋</span>
              </div>
              <div className="flex items-center gap-2 bg-[#075E54] px-3 py-2 text-white">
                <span className="text-lg">‹</span>
                <span className="text-xs text-white/70">101</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366] text-[10px] font-black">
                  TN
                </span>
                <div className="min-w-0 flex-1 leading-tight">
                  <p className="truncate text-[13px] font-bold">Tênis Ofertas | 556</p>
                  <p className="truncate text-[10px] text-white/70">ADM 3927, ADM Tênis Ofertas, Mídia P...</p>
                </div>
                <span className="text-sm">◎</span>
              </div>
              <div className="space-y-2 bg-[#ECE5DD] px-3 py-3 text-[#111]">
                <div className="rounded-lg bg-white p-2.5 text-[11px] leading-snug shadow">
                  <p className="text-[10px] font-bold uppercase text-[#075E54]">Fila muito custo-benefício</p>
                  <p className="mt-1 font-semibold">Tênis Fila Diffusion</p>
                  <p className="mt-1">De R$ 399 por R$ 186</p>
                  <p>Use o Cupom: FASHIONML 🎁</p>
                  <p className="mt-1 text-[#1a73e8]">Vendido por Loja Oficial no ML<br />https://meli.li/1Uoypx7</p>
                  <p className="mt-1 text-right text-[9px] text-black/50">10:09</p>
                </div>
                <div className="rounded-lg bg-white p-2.5 text-[11px] leading-snug shadow">
                  <p className="text-[10px] font-bold text-[#c81e1e]">ADM Tênis Ofertas</p>
                  <div className="mt-1 overflow-hidden rounded-lg">
                    <img src="https://images.unsplash.com/photo-1603487742131-4160ec999306?q=80&w=600&auto=format&fit=crop" alt="Chinelo Nike em oferta no grupo" className="h-40 w-full object-cover" loading="eager" />
                  </div>
                  <p className="mt-2 font-bold uppercase">90 conto nesse slide brabo da Nike</p>
                  <p className="mt-1">Chinelo Nike Victori One</p>
                  <p className="mt-1">De R$ 249 por R$ 91 no Pix</p>
                  <p>Use o Cupom: MODALIVRE + Selecione Pix</p>
                  <p className="mt-2 text-center text-[9px] text-black/50">Somente <span className="text-orange-600">admins</span> podem enviar mensagens</p>
                </div>
              </div>
              <div className="rounded-b-[1.8rem] bg-black py-2 text-center text-[10px] text-white/40">─</div>
            </div>
          </div>
          <div className="order-1 text-center lg:order-2 lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/80">
              <span className="flex -space-x-1.5">
                {["RM", "JT", "AL"].map((i) => (
                  <span key={i} className="flex h-6 w-6 items-center justify-center rounded-full border border-[#070D16] bg-zinc-600 text-[8px] font-bold">{i}</span>
                ))}
              </span>
              + de 500.000 pessoas já economizam com a gente
            </div>
            <h1 className="mx-auto mt-5 max-w-xl text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:mx-0">
              CHEGA DE PAGAR<br />CARO <span className="text-[#FF8A00]">EM TÊNIS!</span>
            </h1>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/75 sm:text-base lg:mx-0">
              Encontro as melhores ofertas de tênis <strong className="text-white">ORIGINAIS</strong> e compartilho tudo com você.
            </p>
            <div className="mx-auto mt-6 max-w-md lg:mx-0">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#00E676] px-8 py-4 text-lg font-extrabold text-white shadow-[0_12px_40px_-8px_rgba(0,230,118,0.8)] transition-all hover:scale-[1.02] hover:bg-[#00d46c] active:scale-[0.98]">
                <span className="text-xl">✆</span> Entrar no Grupo VIP
              </a>
              <p className="mt-3 text-xs leading-relaxed text-white/55">
                Grupo <strong className="text-white">100% GRATUITO</strong> - saia quando quiser<br />Divulgamos promoções somente de lojas oficiais
              </p>
            </div>
            <div className="mt-5 flex items-center justify-center gap-2.5 lg:justify-start">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white px-1 text-center text-[9px] font-black leading-tight text-black">NIKE</span>
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white px-1 text-center text-[8px] font-black leading-tight text-black">adidas</span>
              {STORE_LOGOS.map((l) => (
                <span key={l.src} className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-white">
                  <img src={l.src} alt={l.alt} className="h-8 w-8 object-contain" loading="lazy" />
                </span>
              ))}
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-lg font-black text-black">+</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


