import { metricas, perfil } from "@/data/perfil";
import Revelar from "./Revelar";
import Terminal from "./Terminal";

export default function Hero() {
  const whatsapp = `https://wa.me/${perfil.telefoneE164}?text=${encodeURIComponent(
    "Olá Leonardo! Vi seu portfólio e gostaria de conversar sobre uma oportunidade.",
  )}`;

  return (
    <section id="topo" className="relative overflow-hidden pt-32 sm:pt-40">
      <div className="pointer-events-none absolute inset-0 grade-fundo" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 size-[620px] -translate-x-1/2 brilho-accent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-40 top-40 size-[520px] brilho-cyan"
        aria-hidden="true"
      />

      <div
        id="conteudo"
        className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-5 pb-20 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pb-28"
      >
        <div>
          <Revelar>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/[0.07] px-3 py-1.5 font-mono text-xs text-accent">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-accent" />
              </span>
              disponível para novas oportunidades
            </span>
          </Revelar>

          <Revelar delay={80}>
            <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">
              <span className="texto-gradiente">{perfil.nome}</span>
            </h1>
          </Revelar>

          <Revelar delay={140}>
            <p className="mt-4 font-mono text-sm text-accent sm:text-base">
              <span className="text-dim">&gt;</span> {perfil.cargo}
              <span className="text-dim"> · Java · Spring Boot · Microsserviços</span>
            </p>
          </Revelar>

          <Revelar delay={200}>
            <p className="mt-6 max-w-xl text-pretty text-[15px] leading-relaxed text-muted sm:text-base">
              3 anos construindo o backend que sustenta a operação de crédito
              consignado: mais de <strong className="font-medium text-txt">20 integrações
              bancárias</strong> em produção, de <strong className="font-medium text-txt">5
              a 15 mil propostas digitadas por dia</strong> e a migração de um
              monolito para microsserviços.
            </p>
          </Revelar>

          <Revelar delay={260}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contato"
                className="group inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-bg transition-all hover:bg-accent-dim hover:shadow-lg hover:shadow-accent/20"
              >
                Entrar em contato
                <svg viewBox="0 0 24 24" className="size-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface/60 px-5 py-3 text-sm text-txt transition-colors hover:border-accent/40 hover:text-accent"
              >
                <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
                  <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.08-.3-.15-1.26-.47-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.42-.07-.13-.27-.2-.57-.35ZM12.04 21.5h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.38 9.38 0 0 1-1.44-5.01c0-5.18 4.22-9.4 9.42-9.4a9.35 9.35 0 0 1 6.65 2.76 9.32 9.32 0 0 1 2.75 6.65c0 5.18-4.22 9.4-9.41 9.4ZM20.4 3.6A11.28 11.28 0 0 0 12.04.24C5.82.24.77 5.29.77 11.5c0 1.98.52 3.92 1.5 5.62L.68 23.76l6.79-1.78a11.23 11.23 0 0 0 5.37 1.37h.01c6.21 0 11.26-5.05 11.27-11.26a11.2 11.2 0 0 0-3.3-7.97Z" />
                </svg>
                WhatsApp
              </a>
              <a
                href="/curriculo-leonardo-cabral-sell.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg px-3 py-3 font-mono text-[13px] text-muted transition-colors hover:text-accent"
              >
                <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                currículo.pdf
              </a>
            </div>
          </Revelar>

          <Revelar delay={320}>
            <p className="mt-8 flex items-center gap-2 font-mono text-xs text-dim">
              <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {perfil.local}
            </p>
          </Revelar>
        </div>

        <Revelar delay={200} className="lg:pl-4">
          <Terminal />
        </Revelar>
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-4 sm:px-8">
        <Revelar delay={120}>
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line lg:grid-cols-4">
            {metricas.map((m) => (
              <div
                key={m.rotulo}
                className="group bg-bg-soft px-5 py-6 transition-colors hover:bg-surface"
              >
                <dt className="font-mono text-xl font-semibold text-accent transition-transform group-hover:translate-x-0.5 sm:text-2xl">
                  {m.valor}
                </dt>
                <dd className="mt-1.5 text-[13px] leading-snug text-txt">
                  {m.rotulo}
                </dd>
                <dd className="mt-1 font-mono text-[11px] text-dim">{m.detalhe}</dd>
              </div>
            ))}
          </dl>
        </Revelar>
      </div>
    </section>
  );
}
