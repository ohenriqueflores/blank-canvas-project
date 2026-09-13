import type { ReactNode } from "react";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { WHATSAPP_URL } from "@/lib/runners";

export function WhatsAppButton({
  className,
  children = "ENTRAR NO GRUPO GRATUITO",
  size = "lg",
}: {
  className?: string;
  children?: ReactNode;
  size?: "lg" | "md" | "xl";
}) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex items-center justify-center gap-2.5 rounded-2xl bg-[#25D366] font-extrabold text-white shadow-[0_12px_40px_-8px_rgba(37,211,102,0.7)] transition-all hover:scale-[1.02] hover:bg-[#1fb857] hover:shadow-[0_16px_48px_-8px_rgba(37,211,102,0.8)] active:scale-[0.98]",
        size === "xl" && "w-full px-8 py-5 text-lg sm:text-xl",
        size === "lg" && "w-full px-6 py-4 text-base sm:w-auto sm:px-10 sm:text-lg",
        size === "md" && "px-5 py-3 text-sm",
        className
      )}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-transform group-hover:rotate-6 group-hover:scale-110">
        <MessageCircle className="h-5 w-5 fill-white" />
      </span>
      {children}
    </a>
  );
}
