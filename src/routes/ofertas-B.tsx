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

export function WhatsAppIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function OfertasB() {
  return (
    <main className="min-h-screen bg-[#0A120E] font-sans text-white antialiased selection:bg-[#25D366]/30">
      <section className="relative overflow-hidden">
        {/* fundo orgânico */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 left-1/2 h-[480px] w-[900px] -translate-x-1/2 rounded-[100%] bg-[#25D366]/15 blur-[130px]" />
          <div className="absolute -left-40 top-1/3 h-[380px] w-[380px] rounded-full bg-[#FF8A00]/10 blur-[110px]" />
          <div className="absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-[#00A884]/20 blur-[120px]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pb-14 pt-8 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:pt-12">
          <div className="order-2 flex justify-center lg:order-1">
            {/* mock WhatsApp Runners Club Kalfe */}
            <div className="relative">
              <div aria-hidden className="absolute -inset-6 rounded-[3rem] bg-gradient-to-b from-[#25D366]/25 via-transparent to-[#FF8A00]/15 blur-2xl" />
              <div className="relative w-full max-w-[320px] rounded-[2.5rem] border-[10px] border-[#1c1c1e] bg-black shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] ring-1 ring-white/10">
              <div className="flex items-center justify-between rounded-t-[1.8rem] bg-black px-5 pb-1 pt-3 text-[11px] font-semibold text-white">
                  <span>11:08</span>
                  <span className="h-5 w-20 rounded-full bg-[#1c1c1e]" />
                  <span>📶 🔋</span>
                </div>
              <div className="flex items-center gap-2 rounded-t-xl bg-[#075E54] px-3 py-2.5 text-white">
                <span className="text-lg leading-none">‹</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] text-[11px] font-black ring-2 ring-white/30">
                  RC
                </span>
                <div className="min-w-0 flex-1 leading-tight">
                  <p className="truncate text-[13px] font-bold">Runners Club Kalfe 🏃‍♂️🔥</p>
                  <p className="truncate text-[10px] text-white/75">Kalfe, Ana, Pedro e +847 online</p>
                </div>
                <span className="flex gap-2 text-sm opacity-80">◎ ✆</span>
              </div>
              <div className="space-y-2 bg-[#ECE5DD] bg-[radial-gradient(circle_at_20%_20%,rgba(0,0,0,0.04),transparent_60%)] px-3 py-3 text-[#111]">
                <p className="mx-auto w-fit rounded-full bg-[#FFF3CD] px-3 py-1 text-center text-[9px] font-medium text-[#7a6200] shadow-sm">
                  🔒 As mensagens são criptografadas de ponta a ponta
                </p>
                <div className="rounded-xl rounded-tl-sm bg-white p-2.5 text-[11px] leading-snug shadow">
                  <p className="text-[10px] font-bold uppercase text-[#075E54]">Fila muito custo-benefício</p>
                  <p className="mt-1 font-semibold">Tênis Fila Diffusion</p>
                  <p className="mt-1">De <s className="text-black/50">R$ 399</s> por <strong className="text-[#128C7E]">R$ 186</strong></p>
                  <p>Use o Cupom: FASHIONML 🎁</p>
                  <p className="mt-1 text-[#1a73e8]">Vendido por Loja Oficial no ML<br />https://meli.li/1Uoypx7</p>
                  <p className="mt-1 text-right text-[9px] text-black/50">10:09 ✓✓</p>
                </div>
                <div className="rounded-xl rounded-tl-sm bg-white p-2.5 text-[11px] leading-snug shadow">
                  <p className="text-[10px] font-bold text-[#c81e1e]">ADM Runners Club Kalfe ✅</p>
                  <div className="relative mt-1.5 overflow-hidden rounded-lg">
                    <img src="https://images.unsplash.com/photo-1603487742131-4160ec999306?q=80&w=600&auto=format&fit=crop" alt="Chinelo Nike em oferta no grupo" className="h-40 w-full object-cover" loading="eager" />
                      <span className="absolute left-2 top-2 rounded-full bg-[#FF3B30] px-2 py-0.5 text-[10px] font-black text-white shadow">-63%</span>
                  </div>
                  <p className="mt-2 font-bold uppercase">90 conto nesse slide brabo da Nike 🔥</p>
                  <p className="mt-1">Chinelo Nike Victori One</p>
                  <p className="mt-1">De R$ 249 por R$ 91 no Pix</p>
                  <p>Use o Cupom: MODALIVRE + Selecione Pix</p>
                  <p className="mt-2 text-center text-[9px] text-black/50">Somente <span className="text-orange-600">admins</span> podem enviar mensagens</p>
                </div>
              </div>
              <div className="rounded-b-[1.8rem] bg-black py-2 text-center text-[10px] text-white/40">─</div>
              </div>
            </div>
          </div>
          <div className="order-1 text-center lg:order-2 lg:text-left">
            <div className="inline-flex max-w-full items-center gap-2.5 rounded-2xl border border-[#25D366]/25 bg-gradient-to-r from-white/[0.08] to-[#25D366]/10 px-4 py-2.5 text-left text-[13px] leading-snug text-white/90 shadow-[0_8px_30px_-12px_rgba(37,211,102,0.5)] backdrop-blur">
              <span className="flex shrink-0 items-center justify-center rounded-full bg-[#25D366] p-1.5 text-white">
                <WhatsAppIcon className="h-4 w-4" />
              </span>
              <span className="font-medium">Nunca mais pague caro em tênis, chuteiras e outros equipamentos!</span>
            </div>
            <h1 className="mx-auto mt-5 max-w-xl text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:mx-0">
              COMPRE TÊNIS<br />COM ATÉ <span className="bg-gradient-to-r from-[#FF8A00] to-[#FFB347] bg-clip-text text-transparent">90% DE DESCONTO</span>
            </h1>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/75 sm:text-base lg:mx-0">
              Encontro as melhores ofertas de tênis <strong className="text-white">ORIGINAIS</strong> e compartilho tudo com você no <strong className="text-white">Runners Club Kalfe</strong>.
            </p>
            <div className="mx-auto mt-6 max-w-md lg:mx-0">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-b from-[#2BE07A] to-[#00C95C] px-8 py-4 text-lg font-extrabold text-white shadow-[0_16px_45px_-10px_rgba(0,230,118,0.9)] transition-all hover:scale-[1.02] hover:brightness-110 active:scale-[0.98]">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 ring-1 ring-white/40">
                  <WhatsAppIcon className="h-5 w-5" />
                </span>
                Entrar no Grupo VIP
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


