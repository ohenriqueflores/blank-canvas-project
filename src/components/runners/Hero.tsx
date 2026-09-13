import { BadgeCheck, Flame, Star, Users } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

export function Hero() {
  return (
    <header className="relative overflow-hidden bg-[#0A0F0D] text-white">
      {/* glow decor */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-[#25D366]/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-24 hidden h-72 w-72 rounded-full bg-[#FFB800]/15 blur-[100px] md:block"
      />

      <div className="relative mx-auto max-w-5xl px-4 pb-12 pt-6 sm:px-6 sm:pt-8">
        {/* logo row */}
        <div className="flex items-center justify-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#25D366] to-[#0E9F4E] text-xl font-black shadow-lg shadow-[#25D366]/30">
            RC
          </span>
          <div className="text-left leading-tight">
            <p className="text-base font-extrabold tracking-wide sm:text-lg">
              RUNNERS CLUB <span className="text-[#25D366]">KALFE</span>
            </p>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/60">
              Ofertas de tênis e esporte
            </p>
          </div>
        </div>

        <div className="mt-8 text-center sm:mt-10">
          <a
            href="https://chat.whatsapp.com/EK9YnzBhoVh7u85eRQWMvk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#4ADE80] transition-colors hover:bg-[#25D366]/20"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4ADE80] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4ADE80]" />
            </span>
            Grupo gratuito no WhatsApp
          </a>

          <h1 className="mx-auto mt-5 max-w-3xl text-3xl font-black leading-[1.1] tracking-tight sm:text-5xl">
            Tênis com até{" "}
            <span className="bg-gradient-to-r from-[#4ADE80] to-[#25D366] bg-clip-text text-transparent">
              70% OFF
            </span>{" "}
            direto no seu WhatsApp
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-lg">
            O <strong className="text-white">Runners Club Kalfe</strong> garimpa
            todos os dias as melhores ofertas de tênis de corrida, lifestyle e
            artigos esportivos nas maiores lojas do Brasil — e envia o link
            pronto pra você economizar.
          </p>

          {/* sneaker visual */}
          <div className="relative mx-auto mt-8 max-w-2xl">
            <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/50">
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop"
                alt="Tênis esportivo em oferta"
                className="h-52 w-full object-cover sm:h-72"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F0D] via-transparent to-transparent" />
            </div>
            <div className="absolute -top-3 right-4 rotate-3 rounded-xl bg-[#FFB800] px-3 py-1.5 text-sm font-black text-black shadow-lg sm:right-8">
              <Flame className="mr-1 inline h-4 w-4" />
              Nike Pegasus de R$ 899 por R$ 479
            </div>
            <div className="absolute -bottom-3 left-4 -rotate-2 rounded-xl bg-white px-3 py-1.5 text-sm font-black text-black shadow-lg sm:left-8">
              -47% HOJE
            </div>
          </div>

          <div className="mx-auto mt-8 max-w-xl">
            <WhatsAppButton size="xl" />
            <p className="mt-3 text-xs text-white/50">
              Grátis • Sem spam • Saia quando quiser
            </p>
          </div>

          {/* social proof */}
          <div className="mx-auto mt-8 flex max-w-2xl flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {["RM", "JT", "AL", "PS"].map((i) => (
                  <span
                    key={i}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#0A0F0D] bg-gradient-to-br from-zinc-600 to-zinc-800 text-[10px] font-bold"
                  >
                    {i}
                  </span>
                ))}
              </div>
              <span className="flex items-center gap-1 text-xs font-semibold text-white/80">
                <Users className="h-4 w-4 text-[#4ADE80]" />
                +8.500 corredores no grupo
              </span>
            </div>
            <div className="hidden h-8 w-px bg-white/15 sm:block" />
            <div className="flex items-center gap-1.5 text-xs font-semibold text-white/80">
              <span className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#FFB800] text-[#FFB800]" />
                ))}
              </span>
              4,9 • +2.300 avaliações
            </div>
          </div>

          <p className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-white/50">
            <BadgeCheck className="h-3.5 w-3.5 text-[#4ADE80]" />
            Links apenas de lojas oficiais e verificadas
          </p>
        </div>
      </div>
    </header>
  );
}
