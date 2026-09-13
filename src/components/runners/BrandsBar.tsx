import { BRANDS } from "@/lib/runners";

export function BrandsBar() {
  const row = [...BRANDS, ...BRANDS];
  return (
    <section className="border-y border-white/10 bg-[#0D1411] py-5">
      <p className="mb-4 text-center text-[11px] font-bold uppercase tracking-[0.24em] text-white/40">
        Ofertas das maiores marcas
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-[runners-marquee_28s_linear_infinite] items-center gap-3 pr-3">
          {row.map((b, i) => (
            <span
              key={`${b}-${i}`}
              className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-extrabold uppercase tracking-wider text-white/80"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
