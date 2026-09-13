import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/runners";
import { cn } from "@/lib/utils";

export function StickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 560);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#0A0F0D]/95 px-4 py-3 backdrop-blur transition-transform duration-300",
        visible ? "translate-y-0" : "translate-y-full"
      )}
    >
      <div className="mx-auto flex max-w-3xl items-center gap-3">
        <p className="hidden min-w-0 flex-1 text-sm font-bold text-white sm:block">
          🔥 Ofertas de hoje já estão no grupo{" "}
          <span className="block text-xs font-medium text-white/60">
            Entre grátis em 10 segundos
          </span>
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-extrabold text-white transition-colors hover:bg-[#1fb857] sm:max-w-xs"
        >
          <MessageCircle className="h-4 w-4 fill-white" />
          ENTRAR NO GRUPO GRÁTIS
        </a>
      </div>
    </div>
  );
}
