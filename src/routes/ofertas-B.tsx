import { createFileRoute } from "@tanstack/react-router";
import { WHATSAPP_URL } from "@/lib/runners";

export const Route = createFileRoute("/ofertas-B")({
  component: OfertasB,
});

const STORE_LOGOS = [
  { src: "/uploads/penalty-logo.svg", alt: "Logo Penalty" },
  { src: "/uploads/images__1_.png", alt: "Logo de marca esportiva parceira" },
  { src: "/uploads/9ea42f7b638f36be2a996e7b0de3cb5c.jpg", alt: "Logo de marca esportiva parceira" },
  { src: "/uploads/MIZUNO_logo.svg.webp", alt: "Logo Mizuno" },
  { src: "/uploads/Fila_logo.svg.webp", alt: "Logo Fila" },
  { src: "/uploads/Under_armour_logo.svg.webp", alt: "Logo Under Armour" },
  { src: "/uploads/Adidas_Logo.svg.webp", alt: "Logo Adidas" },
  { src: "/uploads/umbro-logo.svg", alt: "Logo Umbro" },
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
    <main className="flex min-h-screen flex-col bg-[#0A120E] font-sans text-white antialiased selection:bg-[#25D366]/30">
      <section className="relative flex flex-1 items-center overflow-hidden">
        {/* fundo orgânico */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 left-1/2 h-[480px] w-[900px] -translate-x-1/2 rounded-[100%] bg-[#25D366]/15 blur-[130px]" />
          <div className="absolute -left-40 top-1/3 h-[380px] w-[380px] rounded-full bg-[#FF8A00]/10 blur-[110px]" />
          <div className="absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-[#00A884]/20 blur-[120px]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 px-5 pb-12 pt-10 sm:px-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-16 lg:pb-16 lg:pt-14">
          <div className="order-2 flex justify-center lg:order-1">
            {/* animação Runners Club Kalfe em loop */}
            <div className="relative w-full max-w-[300px] sm:max-w-[340px] lg:max-w-[380px]">
              <div aria-hidden className="absolute -inset-6 rounded-[3rem] bg-gradient-to-b from-[#25D366]/25 via-transparent to-[#FF8A00]/15 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2.5rem] border-[10px] border-[#1c1c1e] bg-black shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] ring-1 ring-white/10">
                <img
                  src="/uploads/Runners_Club_Kalfe_Animacao_gif.gif"
                  alt="Animação do grupo Runners Club Kalfe com ofertas"
                  className="block h-auto w-full object-cover"
                  loading="eager"
                  decoding="async"
                  draggable={false}
                />
              </div>
              <p className="mt-4 text-center text-xs font-medium tracking-wide text-white/50">
                Prévia real do grupo • ofertas entrando todo dia
              </p>
            </div>
          </div>
          <div className="order-1 flex flex-col items-center text-center lg:order-2 lg:items-start lg:text-left">
            <div className="inline-flex max-w-full items-center gap-2.5 rounded-2xl border border-[#25D366]/25 bg-gradient-to-r from-white/[0.08] to-[#25D366]/10 px-4 py-2.5 text-left text-[13px] leading-snug text-white/90 shadow-[0_8px_30px_-12px_rgba(37,211,102,0.5)] backdrop-blur">
              <span className="flex shrink-0 items-center justify-center rounded-full bg-[#25D366] p-1.5 text-white">
                <WhatsAppIcon className="h-4 w-4" />
              </span>
              <span className="font-medium">Nunca mais pague caro em tênis, chuteiras e outros equipamentos!</span>
            </div>
            <h1 className="mt-5 max-w-xl text-balance text-[2rem] font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.25rem]">
              COMPRE TÊNIS<br />COM ATÉ <span className="bg-gradient-to-r from-[#FF8A00] to-[#FFB347] bg-clip-text text-transparent">90% DE DESCONTO</span>
            </h1>
            <p className="mt-4 max-w-md text-pretty text-[15px] leading-relaxed text-white/80 sm:max-w-xl sm:text-lg">
              Encontramos as melhores ofertas de tênis <strong className="text-white">ORIGINAIS</strong> e compartilhamos tudo com você no <strong className="text-white">Runners Club Kalfe</strong>.
            </p>
            <div className="mt-6 w-full max-w-md">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-b from-[#2BE07A] to-[#00C95C] px-8 py-4 text-lg font-extrabold text-white shadow-[0_16px_45px_-10px_rgba(0,230,118,0.9)] transition-all hover:scale-[1.02] hover:brightness-110 active:scale-[0.98]">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 ring-1 ring-white/40">
                  <WhatsAppIcon className="h-5 w-5" />
                </span>
                Entrar no Grupo VIP
              </a>
              <p className="mt-3 text-center text-xs leading-relaxed text-white/60 lg:text-left">
                Grupo <strong className="text-white">100% GRATUITO</strong> — saia quando quiser • Somente lojas oficiais
              </p>
            </div>
            <div className="mt-6 flex w-full max-w-md flex-wrap items-center justify-center gap-2.5 lg:justify-start">
              {STORE_LOGOS.map((l) => (
                <span key={l.src} className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-white ring-1 ring-white/20">
                  <img src={l.src} alt={l.alt} className="h-8 w-8 object-contain" loading="lazy" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-t border-white/10 bg-black/30">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-3 px-5 py-6 sm:grid-cols-3 sm:gap-4 sm:px-8">
          <div className="flex items-center justify-center gap-2.5 rounded-2xl bg-white/[0.04] px-4 py-3 text-sm text-white/80 sm:justify-start">
            <span className="text-base">✅</span> Ofertas verificadas todos os dias
          </div>
          <div className="flex items-center justify-center gap-2.5 rounded-2xl bg-white/[0.04] px-4 py-3 text-sm text-white/80 sm:justify-start">
            <span className="text-base">🏬</span> Somente lojas oficiais
          </div>
          <div className="flex items-center justify-center gap-2.5 rounded-2xl bg-white/[0.04] px-4 py-3 text-sm text-white/80 sm:justify-start">
            <span className="text-base">🔓</span> Grupo gratuito, saia quando quiser
          </div>
        </div>
      </section>
    </main>
  );
}


