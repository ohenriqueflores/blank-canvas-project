import { ArrowRight, Store } from "lucide-react";
import { OFFERS, WHATSAPP_URL } from "@/lib/runners";

const IMAGES = [
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=800&auto=format&fit=crop",
];

export function Offers() {
  return (
    <section className="bg-zinc-100 py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#0E9F4E]">
              Exemplos reais
            </p>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-zinc-950 sm:text-4xl">
              Ofertas que já passaram pelo grupo
            </h2>
          </div>
          <span className="rounded-full bg-red-600 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-white">
            Vagas abertas hoje
          </span>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {OFFERS.map((o, i) => (
            <article
              key={o.name}
              className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition-transform hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative">
                <img
                  src={IMAGES[i % IMAGES.length]}
                  alt={o.name}
                  className="h-44 w-full object-cover"
                  loading="lazy"
                />
                <span className="absolute left-3 top-3 rounded-full bg-black/80 px-3 py-1 text-xs font-black text-white backdrop-blur">
                  {o.off}
                </span>
                <span className="absolute right-3 top-3 rounded-full bg-[#FFB800] px-3 py-1 text-[11px] font-black uppercase text-black">
                  {o.tag}
                </span>
              </div>
              <div className="p-5">
                <p className="text-[11px] font-extrabold uppercase tracking-widest text-zinc-500">
                  {o.brand}
                </p>
                <h3 className="mt-1 font-extrabold text-zinc-950">{o.name}</h3>
                <p className="mt-1 flex items-center gap-1 text-xs text-zinc-500">
                  <Store className="h-3.5 w-3.5" /> {o.store}
                </p>
                <div className="mt-3 flex items-end gap-2">
                  <span className="text-sm text-zinc-400 line-through">{o.oldPrice}</span>
                  <span className="text-2xl font-black text-[#0E9F4E]">{o.price}</span>
                </div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-xl bg-[#0A0F0D] px-4 py-3 text-sm font-extrabold text-white transition-colors hover:bg-[#25D366]"
                >
                  Quero ofertas assim <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-zinc-500">
          * Valores ilustrativos de ofertas já encerradas. As ofertas do dia são
          enviadas em tempo real dentro do grupo.
        </p>
      </div>
    </section>
  );
}
