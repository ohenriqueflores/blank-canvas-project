import { BellRing, HandCoins, ShieldCheck, Zap } from "lucide-react";

const PERKS = [
  {
    icon: Zap,
    title: "Ofertas em tempo real",
    text: "Promoções relâmpago e cupons postados na hora — quem vê primeiro, garante o tamanho.",
  },
  {
    icon: HandCoins,
    title: "Até 70% OFF de verdade",
    text: "Comparamos o preço histórico e só enviamos quando o desconto vale a pena.",
  },
  {
    icon: ShieldCheck,
    title: "Só loja confiável",
    text: "Netshoes, Centauro, Nike, Adidas, Asics e marketplaces verificados. Zero golpe.",
  },
  {
    icon: BellRing,
    title: "100% gratuito",
    text: "Sem mensalidade, sem spam, sem grupo de conversa. Só oferta. Saia quando quiser.",
  },
];

export function Benefits() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#0E9F4E]">
            Por que entrar?
          </p>
          <h2 className="mx-auto mt-2 max-w-xl text-2xl font-black tracking-tight text-zinc-950 sm:text-4xl">
            Pare de pagar caro em tênis. A gente garimpa por você.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-zinc-600 sm:text-base">
            Todos os dias nossa equipe monitora dezenas de lojas e envia no
            grupo apenas as quedas de preço que realmente valem o clique.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PERKS.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 transition-shadow hover:shadow-lg"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0A0F0D] text-[#4ADE80]">
                <p.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-extrabold text-zinc-950">{p.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
