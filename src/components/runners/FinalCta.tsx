import { Lock, ShieldCheck, Timer } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-[#0A0F0D] py-14 text-center text-white sm:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-[640px] -translate-x-1/2 rounded-full bg-[#25D366]/20 blur-[110px]"
      />
      <div className="relative mx-auto max-w-2xl px-4 sm:px-6">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-red-600/15 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-red-400">
          <Timer className="h-4 w-4" /> Vagas abertas — entrada gratuita hoje
        </span>
        <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight sm:text-4xl">
          Sua próxima economia está a <span className="text-[#4ADE80]">1 clique</span> de
          distância
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
          Junte-se a mais de <strong className="text-white">8.500 corredores</strong> que
          já recebem ofertas diárias de tênis e artigos esportivos. Leva menos de 10
          segundos para entrar.
        </p>
        <div className="mx-auto mt-7 max-w-xl">
          <WhatsAppButton size="xl">ENTRAR NO GRUPO AGORA</WhatsAppButton>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-white/50">
          <span className="flex items-center gap-1.5">
            <Lock className="h-3.5 w-3.5 text-[#4ADE80]" /> Grupo fechado e seguro
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-[#4ADE80]" /> Sem spam, só ofertas
          </span>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070B09] px-4 py-8 text-center text-white">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#25D366] to-[#0E9F4E] text-sm font-black">
            RC
          </span>
          <p className="text-sm font-extrabold tracking-wide">
            RUNNERS CLUB <span className="text-[#25D366]">KALFE</span>
          </p>
        </div>
        <p className="max-w-xl text-xs leading-relaxed text-white/45">
          Grupo gratuito de ofertas no WhatsApp. Preços e disponibilidade podem variar
          conforme o estoque das lojas. Não vendemos produtos — divulgamos ofertas de
          lojas parceiras oficiais.
        </p>
        <p className="text-xs text-white/35">
          © {new Date().getFullYear()} Runners Club Kalfe • Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
