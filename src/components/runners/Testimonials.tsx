import { MessageCircle, Quote, Star } from "lucide-react";
import { TESTIMONIALS, WHATSAPP_URL } from "@/lib/runners";

export function Testimonials() {
  return (
    <section className="bg-[#0A0F0D] py-14 text-white sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#4ADE80]">
            Quem já está dentro
          </p>
          <h2 className="mx-auto mt-2 max-w-xl text-2xl font-black tracking-tight sm:text-4xl">
            Corredores que já economizaram de verdade
          </h2>
          <div className="mt-3 flex items-center justify-center gap-1.5 text-sm text-white/70">
            <span className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-[#FFB800] text-[#FFB800]" />
              ))}
            </span>
            4,9 de 5 • +2.300 avaliações de membros
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <Quote className="h-6 w-6 text-[#25D366]" />
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-white/85">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#25D366] to-[#0E9F4E] text-xs font-black">
                  {t.initials}
                </span>
                <span>
                  <span className="block text-sm font-extrabold">{t.name}</span>
                  <span className="block text-xs text-white/50">{t.city}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-xl rounded-3xl border border-[#25D366]/30 bg-[#25D366]/10 p-6 text-center sm:p-8">
          <p className="text-sm font-bold uppercase tracking-widest text-[#4ADE80]">
            Print real do grupo
          </p>
          <div className="mx-auto mt-4 max-w-sm rounded-2xl bg-[#0B141A] p-4 text-left shadow-xl">
            <div className="rounded-xl rounded-tl-sm bg-[#005C4B] p-3 text-[13px] leading-snug">
              🔥 <strong>OFERTA RELÂMPAGO</strong> 🔥
              <br />
              👟 Nike Revolution 7<br />
              ❌ De: R$ 449,99
              <br />✅ Por: <strong>R$ 199,99</strong> (-56%)
              <br />
              🏬 Loja: Centauro • Link direto 👇
              <br />
              <span className="text-[#53bdeb] underline">centauro.com.br/nike-revolution-7</span>
              <br />
              <span className="mt-1 block text-right text-[11px] text-white/60">
                09:41 ✓✓
              </span>
            </div>
            <div className="mt-2 rounded-xl rounded-tl-sm bg-[#005C4B] p-3 text-[13px] leading-snug">
              ⚡ Só restam alguns números! Quem pegou reage com ✅
              <span className="mt-1 block text-right text-[11px] text-white/60">
                09:42 ✓✓
              </span>
            </div>
            <div className="mt-3 flex items-center justify-center gap-1 text-xs text-white/60">
              <MessageCircle className="h-3.5 w-3.5" /> 47 pessoas garantiram hoje
            </div>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-6 py-4 font-extrabold text-white transition-all hover:scale-[1.02] hover:bg-[#1fb857]"
          >
            QUERO RECEBER OFERTAS ASSIM
          </a>
        </div>
      </div>
    </section>
  );
}
