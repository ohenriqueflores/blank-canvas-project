import { MousePointerClick, ShoppingCart, Truck } from "lucide-react";

const STEPS = [
  {
    icon: MousePointerClick,
    n: "1",
    title: "Entre no grupo",
    text: "Clique em qualquer botão verde desta página e confirme a entrada no WhatsApp.",
  },
  {
    icon: ShoppingCart,
    n: "2",
    title: "Receba as ofertas",
    text: "Todos os dias você recebe links diretos das melhores quedas de preço.",
  },
  {
    icon: Truck,
    n: "3",
    title: "Compre e economize",
    text: "Finalize a compra na loja oficial e receba tudo em casa com segurança.",
  },
];

export function Steps() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#0E9F4E]">
            Como funciona
          </p>
          <h2 className="mx-auto mt-2 max-w-xl text-2xl font-black tracking-tight text-zinc-950 sm:text-4xl">
            Do clique à economia em 3 passos
          </h2>
        </div>
        <div className="relative mt-10 grid gap-4 md:grid-cols-3">
          <div
            aria-hidden
            className="absolute left-[16%] right-[16%] top-10 hidden border-t-2 border-dashed border-[#25D366]/40 md:block"
          />
          {STEPS.map((s) => (
            <div key={s.n} className="relative rounded-3xl border border-zinc-200 bg-zinc-50 p-6 text-center">
              <span className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0A0F0D] text-[#4ADE80] shadow-lg">
                <s.icon className="h-6 w-6" />
                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#25D366] text-xs font-black text-white">
                  {s.n}
                </span>
              </span>
              <h3 className="mt-4 font-extrabold text-zinc-950">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
