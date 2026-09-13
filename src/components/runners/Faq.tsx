import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { WhatsAppButton } from "./WhatsAppButton";

const FAQS = [
  {
    q: "O grupo é realmente gratuito?",
    a: "Sim, 100% gratuito. Você entra, recebe as ofertas e não paga nada. Nosso trabalho é remunerado pelas próprias lojas quando você compra pelo link — sem custo extra pra você.",
  },
  {
    q: "Vou receber muito spam?",
    a: "Não. O grupo é fechado: só os administradores enviam mensagens, e apenas com ofertas verificadas. Nada de bom dia, corrente ou conversa paralela.",
  },
  {
    q: "As lojas são confiáveis?",
    a: "Trabalhamos apenas com lojas oficiais e marketplaces verificados: Netshoes, Centauro, Nike, Adidas, Asics, Mizuno, New Balance, Amazon e similares. Cada oferta passa por verificação antes de ser postada.",
  },
  {
    q: "Como recebo as ofertas?",
    a: "É só clicar em qualquer botão desta página para entrar no grupo do WhatsApp. A partir daí, as ofertas chegam automaticamente no seu celular, todos os dias.",
  },
  {
    q: "Posso sair quando quiser?",
    a: "Claro. Basta sair do grupo no WhatsApp a qualquer momento, sem burocracia e sem ninguém te chamar no privado.",
  },
];

export function Faq() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#0E9F4E]">
            Dúvidas frequentes
          </p>
          <h2 className="mt-2 text-2xl font-black tracking-tight text-zinc-950 sm:text-4xl">
            Perguntas de quem ainda não entrou
          </h2>
        </div>
        <Accordion type="single" collapsible className="mt-8">
          {FAQS.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-sm font-extrabold text-zinc-950 sm:text-base">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-zinc-600">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-8 text-center">
          <WhatsAppButton />
        </div>
      </div>
    </section>
  );
}
