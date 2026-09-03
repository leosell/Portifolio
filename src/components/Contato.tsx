import { perfil } from "@/data/perfil";
import Formulario from "./Formulario";
import Revelar from "./Revelar";
import Secao from "./Secao";

const mensagemWhats = encodeURIComponent(
  "Olá Leonardo! Vi seu portfólio e gostaria de conversar sobre uma oportunidade.",
);

export default function Contato() {
  const canais = [
    {
      rotulo: "WhatsApp",
      valor: perfil.telefone,
      href: `https://wa.me/${perfil.telefoneE164}?text=${mensagemWhats}`,
      externo: true,
      nota: "resposta mais rápida",
      icone: (
        <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.08-.3-.15-1.26-.47-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.42-.07-.13-.27-.2-.57-.35ZM12.04 21.5h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.38 9.38 0 0 1-1.44-5.01c0-5.18 4.22-9.4 9.42-9.4a9.35 9.35 0 0 1 6.65 2.76 9.32 9.32 0 0 1 2.75 6.65c0 5.18-4.22 9.4-9.41 9.4ZM20.4 3.6A11.28 11.28 0 0 0 12.04.24C5.82.24.77 5.29.77 11.5c0 1.98.52 3.92 1.5 5.62L.68 23.76l6.79-1.78a11.23 11.23 0 0 0 5.37 1.37h.01c6.21 0 11.26-5.05 11.27-11.26a11.2 11.2 0 0 0-3.3-7.97Z" />
      ),
      preenchido: true,
    },
    {
      rotulo: "E-mail",
      valor: perfil.email,
      href: `mailto:${perfil.email}`,
      externo: false,
      nota: "para propostas formais",
      icone: (
        <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6Zm-2 0-8 5-8-5h16Zm0 12H4V8l8 5 8-5v10Z" />
      ),
      preenchido: true,
    },
    {
      rotulo: "LinkedIn",
      valor: "leonardo-cabral-sell",
      href: perfil.linkedin,
      externo: true,
      nota: "histórico profissional",
      icone: (
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05a3.75 3.75 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
      ),
      preenchido: true,
    },
    {
      rotulo: "GitHub",
      valor: "leosell",
      href: perfil.github,
      externo: true,
      nota: "código e experimentos",
      icone: (
        <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.1.82-.26.82-.58v-2.2c-3.34.72-4.04-1.4-4.04-1.4-.55-1.4-1.34-1.78-1.34-1.78-1.1-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.39 1.24-3.23-.13-.3-.54-1.53.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.23 0 4.63-2.8 5.65-5.48 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
      ),
      preenchido: true,
    },
  ];

  return (
    <Secao
      id="contato"
      indice="05"
      titulo="contato"
      descricao="Vamos conversar sobre a sua vaga ou o seu projeto."
      className="bg-bg-soft/40"
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-12">
        <div>
          <Revelar>
            <p className="max-w-md text-pretty text-[15px] leading-relaxed text-muted">
              Se você é recrutador, me mande os detalhes da posição. Se precisa de
              alguém para construir ou resgatar um backend, me conte o problema.
              Respondo todo contato — normalmente em até 24 horas úteis.
            </p>
          </Revelar>

          <div className="mt-8 space-y-3">
            {canais.map((canal, i) => (
              <Revelar key={canal.rotulo} delay={i * 70}>
                <a
                  href={canal.href}
                  {...(canal.externo
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="borda-brilho group flex items-center gap-4 rounded-xl border border-line bg-surface/50 px-5 py-4 transition-colors hover:bg-surface"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-line bg-surface-2 text-muted transition-colors group-hover:border-accent/40 group-hover:text-accent">
                    <svg viewBox="0 0 24 24" className="size-[18px]" fill="currentColor" aria-hidden="true">
                      {canal.icone}
                    </svg>
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-mono text-[11px] uppercase tracking-widest text-dim">
                      {canal.rotulo}
                    </span>
                    <span className="mt-0.5 block truncate text-sm text-txt transition-colors group-hover:text-accent">
                      {canal.valor}
                    </span>
                  </span>
                  <span className="hidden shrink-0 font-mono text-[11px] text-dim sm:block">
                    {canal.nota}
                  </span>
                  <svg viewBox="0 0 24 24" className="size-4 shrink-0 text-dim transition-all group-hover:translate-x-0.5 group-hover:text-accent" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </Revelar>
            ))}
          </div>

          <Revelar delay={280}>
            <div className="mt-6 flex items-start gap-3 rounded-xl border border-line bg-surface/30 px-5 py-4">
              <svg viewBox="0 0 24 24" className="mt-0.5 size-4 shrink-0 text-accent" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <p className="text-[13.5px] leading-relaxed text-muted">
                Baseado em <span className="text-txt">{perfil.local}</span>. Aberto a
                remoto, híbrido e presencial na Grande Florianópolis.
              </p>
            </div>
          </Revelar>
        </div>

        <Revelar delay={120}>
          <Formulario />
        </Revelar>
      </div>
    </Secao>
  );
}
