import { createFileRoute } from "@tanstack/react-router";
import { WHATSAPP_URL } from "@/lib/runners";
import runnersVideo from "@/assets/Runners_Club_Kalfe.mp4.asset.json";

export const Route = createFileRoute("/ofertas-B")({
  component: OfertasB,
  head: () => ({
    meta: [
      { title: "Tênis Ofertas — Chega de pagar caro em tênis" },
      {
        name: "description",
        content:
          "Encontro as melhores ofertas de tênis ORIGINAIS e compartilho tudo com você. Entre no grupo VIP e receba os descontos primeiro.",
      },
      { property: "og:title", content: "Tênis Ofertas — Chega de pagar caro em tênis" },
      {
        property: "og:description",
        content: "Encontro as melhores ofertas de tênis ORIGINAIS e compartilho tudo com você.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "theme-color", content: "#020A14" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400..800&family=Barlow+Condensed:wght@800&display=swap",
      },
    ],
  }),
});

const AVATARS = [
  "/uploads/lp/av5.jpg",
  "/uploads/lp/av6.jpg",
  "/uploads/lp/av7.jpg",
  "/uploads/lp/av8.jpg",
];

const BRAND_LOGOS = [
  { src: "/uploads/lp/brands/nike.png", alt: "Nike" },
  { src: "/uploads/lp/brands/adidas.png", alt: "Adidas" },
  { src: "/uploads/lp/brands/nuvemshop.png", alt: "Nuvemshop" },
  { src: "/uploads/lp/brands/mercadolivre.png", alt: "Mercado Livre" },
  { src: "/uploads/lp/brands/centauro.png", alt: "Centauro" },
];

const CSS = `
.lp-tenis {
  --verde: #00CF2D;
  --verde-topo: #1BD743;
  --amarelo: #FFD43C;
  --laranja: #F97316;
  --pad: clamp(15px, 8.8vw, 45px);
  font-family: 'Manrope', system-ui, sans-serif;
  background-color: #020A14;
  background-image:
    linear-gradient(rgba(14,165,233,.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(14,165,233,.035) 1px, transparent 1px);
  background-size: 60px 60px;
  min-height: 100dvh;
  -webkit-text-size-adjust: 100%;
}
.lp-tenis * { margin: 0; padding: 0; box-sizing: border-box; }

.lp-tenis .hero { position: relative; overflow: hidden; padding: 50px var(--pad) 0; }

.lp-tenis .topbar { display: flex; justify-content: center; margin-inline: calc(12px - var(--pad)); }
.lp-tenis .selo {
  flex: none; max-width: 100%; display: flex; align-items: center; gap: 7.2px;
  padding: 4.1px 11.3px 4.1px 4.1px; border-radius: 999px;
  background: rgba(255,255,255,.07); border: 1px solid rgba(255,255,255,.16);
  backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
}
.lp-tenis .avatares { flex: none; display: flex; }
.lp-tenis .avatares img {
  width: min(19.4px, 4.46vw); height: min(19.4px, 4.46vw); border-radius: 50%;
  border: 1.5px solid rgba(255,255,255,.5); object-fit: cover;
}
.lp-tenis .avatares img + img { margin-left: -6px; }
.lp-tenis .selo-texto {
  color: rgba(255,255,255,.78); font-family: inherit; font-size: min(12.5px, 2.57vw);
  font-weight: 400; line-height: 1.2; white-space: nowrap;
}
@media (max-width: 699px) {
  .lp-tenis .selo { gap: 8px; padding: 4.6px 12.6px 4.6px 4.6px; }
  .lp-tenis .avatares img { width: min(21.6px, 4.97vw); height: min(21.6px, 4.97vw); border-width: 1.7px; }
  .lp-tenis .avatares img + img { margin-left: -6.7px; }
  .lp-tenis .selo-texto { font-size: min(13.9px, 2.86vw); }
}

.lp-tenis h1 {
  margin-top: 40px; margin-left: -19px; margin-right: -19px; color: #fff;
  font-family: 'Barlow Condensed', 'Manrope', system-ui, sans-serif;
  font-size: clamp(44px, 14.2vw, 74px); font-weight: 800; line-height: 1.01;
  letter-spacing: 0.01em; text-align: center;
}
.lp-tenis h1 .destaque { color: var(--laranja); }

.lp-tenis .sub {
  margin: 16px auto 0; max-width: 21em; color: rgba(255,255,255,.72);
  font-size: clamp(16.5px, 4.2vw, 19.4px); font-weight: 500; line-height: 1.48;
  letter-spacing: -0.015em; text-align: center; text-wrap: balance;
}
.lp-tenis .sub b { font-weight: 800; color: rgba(255,255,255,.92); }

.lp-tenis .cta {
  display: flex; align-items: center; justify-content: center; gap: 8.2px;
  width: clamp(285px, calc(125px + 44.3vw), 320px); height: 63px; margin: 32px auto 0;
  padding: 0 22px; border-radius: 999px; background: var(--verde); color: #fff;
  font-family: inherit; font-size: clamp(18.3px, 4.94vw, 21.8px); font-weight: 800;
  letter-spacing: -0.02em; white-space: nowrap; text-decoration: none; position: relative;
  box-shadow: 0 12px 30px -8px rgba(0,207,45,.45);
  animation: lp-pulsar 2.6s ease-in-out infinite;
}
.lp-tenis .cta::after {
  content: ''; position: absolute; inset: 0; z-index: -1; border-radius: inherit;
  box-shadow: 0 17px 44px -8px rgba(0,207,45,.78); opacity: 0;
  animation: lp-brilhar 2.6s ease-in-out infinite; pointer-events: none;
}
@keyframes lp-pulsar { 0%,100% { transform: scale(1); } 50% { transform: scale(1.0264); } }
@keyframes lp-brilhar { 0%,100% { opacity: 0; } 50% { opacity: 1; } }
.lp-tenis .cta svg { flex: none; width: 28px; height: 28px; }

.lp-tenis .rodape-cta { display: flex; flex-direction: column; align-items: center; margin-top: 21px; margin-bottom: 24px; }
.lp-tenis .cta-sub {
  margin: 0; color: rgba(255,255,255,.62); font-family: inherit;
  font-size: clamp(9.2px, 2.68vw, 10.8px); line-height: 1.45; text-align: center; white-space: nowrap;
}
.lp-tenis .cta-sub:first-child { margin-bottom: 2px; white-space: normal; }
.lp-tenis .cta-sub strong { font-weight: 600; color: #fff; }

.lp-tenis .marcas {
  display: flex; justify-content: center; align-items: center; flex-wrap: wrap; gap: 9.2px;
  margin: 9px calc(12px - var(--pad)) 0; align-self: stretch;
}
.lp-tenis .marca {
  width: 35px; height: 35px; border-radius: 50%; background: #fff; border: 1px solid #EBE9E3;
  box-shadow: 0 1px 3px rgba(0,0,0,.08); display: flex; align-items: center; justify-content: center;
  overflow: hidden; flex-shrink: 0;
}
.lp-tenis .marca img { width: 20px; height: 20px; object-fit: contain; display: block; }
.lp-tenis .marca-mais { background: #E5E5E5; color: #14130F; font-family: inherit; font-weight: 600; font-size: 15px; line-height: 1; }

.lp-tenis .fone { display: block; width: min(100%, 330px); margin: 46px auto 36px; -webkit-tap-highlight-color: transparent; }
.lp-tenis .fone:active { opacity: .93; }
.lp-tenis .fone video { display: block; width: 100%; height: auto; background: transparent; }

@media (prefers-reduced-motion: reduce) {
  .lp-tenis .cta { animation: none; }
  .lp-tenis .cta::after { animation: none; opacity: 0; }
}

@media (min-width: 700px) and (max-width: 979px) {
  .lp-tenis .hero { padding-inline: calc(50% - 195px); }
  .lp-tenis h1 { font-size: 74px; }
  .lp-tenis .sub { font-size: 19.4px; }
  .lp-tenis .cta { font-size: 21.8px; }
  .lp-tenis .cta-sub { font-size: 12.5px; }
  .lp-tenis .marcas { gap: 11px; }
  .lp-tenis .marca { width: 36px; height: 36px; }
  .lp-tenis .marca img { width: 21px; height: 21px; }
  .lp-tenis .marca-mais { font-size: 16px; }
}

@media (min-width: 980px) {
  .lp-tenis .hero {
    display: flex; flex-direction: row; align-items: center; justify-content: center;
    gap: clamp(28px, 3vw, 64px); min-height: 100dvh;
    padding: clamp(24px, 4vh, 56px) clamp(40px, 5vw, 96px);
  }
  .lp-tenis .fone { order: -1; flex: none; width: auto; height: min(91dvh, 840px, 60vw); margin: 0; }
  .lp-tenis .fone video { width: auto; height: 100%; }
  .lp-tenis .bloco-topo { flex: none; width: fit-content; max-width: min(48vw, 588px); }
  .lp-tenis .topbar, .lp-tenis .marcas { margin-inline: 0; }
  .lp-tenis .selo { gap: 8.05px; padding: 4.55px 12.6px 4.55px 4.55px; }
  .lp-tenis .avatares img { width: 21.6px; height: 21.6px; }
  .lp-tenis .avatares img + img { margin-left: -6.35px; }
  .lp-tenis .selo-texto { font-size: 13.85px; }
  .lp-tenis h1 {
    margin-top: 26px; margin-left: 0; margin-right: 0;
    white-space: nowrap; font-size: clamp(62px, 5.74vw, 91px);
  }
  .lp-tenis .sub { margin-top: 20px; max-width: 22em; font-size: clamp(18.6px, 1.475vw, 22.8px); }
  .lp-tenis .cta {
    margin-top: 30px; height: clamp(69px, 4.97vw, 76px);
    width: clamp(335px, 25.7vw, 399px); font-size: clamp(20px, 1.58vw, 24px);
  }
  .lp-tenis .cta svg { width: clamp(29px, 2.1vw, 33px); height: clamp(29px, 2.1vw, 33px); }
  .lp-tenis .rodape-cta { margin: 22px 0 0; }
  .lp-tenis .cta-sub { font-size: clamp(11.75px, 0.949vw, 14.6px); }
  .lp-tenis .marcas { gap: clamp(11.8px, 0.9vw, 13.9px); margin-top: 15px; }
  .lp-tenis .marca { width: clamp(38.5px, 2.56vw, 42.6px); height: clamp(38.5px, 2.56vw, 42.6px); }
  .lp-tenis .marca img { width: clamp(22.3px, 1.49vw, 24.3px); height: clamp(22.3px, 1.49vw, 24.3px); }
  .lp-tenis .marca-mais { font-size: clamp(17px, 1.16vw, 19px); }
}
`;

export function WhatsAppIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.04 3C8.9 3 3.1 8.8 3.1 15.94c0 2.28.6 4.5 1.73 6.46L3 29l6.77-1.77a12.9 12.9 0 0 0 6.27 1.6c7.14 0 12.94-5.8 12.94-12.94S23.18 3 16.04 3Zm0 23.66c-1.93 0-3.83-.52-5.49-1.5l-.39-.23-4.02 1.05 1.07-3.92-.25-.4a10.73 10.73 0 0 1-1.65-5.72c0-5.93 4.83-10.76 10.77-10.76 5.93 0 10.76 4.83 10.76 10.76 0 5.94-4.83 10.72-10.8 10.72Zm5.9-8.03c-.32-.16-1.91-.94-2.21-1.05-.3-.11-.51-.16-.73.16-.21.32-.83 1.05-1.02 1.26-.19.22-.37.24-.7.08-.32-.16-1.36-.5-2.6-1.6a9.8 9.8 0 0 1-1.8-2.23c-.19-.32-.02-.5.14-.66.15-.14.32-.37.49-.56.16-.19.21-.32.32-.54.11-.21.05-.4-.03-.56-.08-.16-.72-1.75-1-2.39-.26-.63-.53-.55-.72-.56h-.62c-.21 0-.56.08-.86.4-.29.32-1.13 1.1-1.13 2.7 0 1.58 1.16 3.12 1.32 3.33.16.22 2.28 3.48 5.52 4.88.77.33 1.37.53 1.84.68.78.25 1.48.21 2.04.13.62-.09 1.91-.78 2.18-1.53.27-.76.27-1.4.19-1.53-.08-.14-.29-.22-.61-.38Z" />
    </svg>
  );
}

export function OfertasB() {
  return (
    <div className="lp-tenis">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <main className="hero">
        <div className="bloco-topo">
          <div className="topbar">
            <div className="selo">
              <div className="avatares">
                {AVATARS.map((src) => (
                  <img key={src} src={src} alt="" width={19} height={19} decoding="async" />
                ))}
              </div>
              <div className="selo-texto">
                + de <span>500.000</span> pessoas já economizam com a gente
              </div>
            </div>
          </div>

          <h1>
            CHEGA DE PAGAR
            <br />
            CARO <span className="destaque">EM TÊNIS!</span>
          </h1>

          <p className="sub">
            Encontro as melhores ofertas de tênis <b>ORIGINAIS</b> e compartilho tudo com você.
          </p>

          <a className="cta" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon />
            Entrar no Grupo VIP
          </a>

          <div className="rodape-cta">
            <p className="cta-sub">
              Grupo <strong>100% GRATUITO</strong> - saia quando quiser
            </p>
            <p className="cta-sub">Divulgamos promoções somente de lojas oficiais</p>
            <div className="marcas" aria-label="Lojas parceiras">
              {BRAND_LOGOS.map((b) => (
                <span key={b.src} className="marca">
                  <img src={b.src} alt={b.alt} width={20} height={20} loading="lazy" decoding="async" />
                </span>
              ))}
              <span className="marca marca-mais" aria-label="Mais lojas">
                +
              </span>
            </div>
          </div>
        </div>

        <a
          className="fone"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Entrar no grupo VIP de ofertas no WhatsApp"
        >
          <video
            key="runners-club-video"
            src={runnersVideo.url}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            disablePictureInPicture
            aria-hidden="true"
          />
        </a>
      </main>
    </div>
  );
}
