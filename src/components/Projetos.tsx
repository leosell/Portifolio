import { projetos } from "@/data/perfil";
import Revelar from "./Revelar";
import Secao from "./Secao";

export default function Projetos() {
  return (
    <Secao
      id="projetos"
      indice="03"
      titulo="projetos"
      descricao="Sistemas que rodam em produção, não protótipos de fim de semana."
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {projetos.map((projeto, i) => (
          <Revelar
            key={projeto.arquivo}
            as="article"
            delay={i * 90}
            className="borda-brilho group flex flex-col overflow-hidden rounded-xl border border-line bg-surface/50 transition-colors hover:bg-surface"
          >
            <div className="flex items-center gap-2 border-b border-line bg-surface-2/60 px-4 py-2.5">
              <svg viewBox="0 0 24 24" className="size-3.5 text-dim" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
              </svg>
              <span className="font-mono text-xs text-dim">
                {projeto.arquivo}
                <span className="text-line">/</span>
              </span>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-pretty text-lg font-semibold leading-snug tracking-tight text-txt transition-colors group-hover:text-accent">
                {projeto.nome}
              </h3>
              <p className="mt-3 text-pretty text-[14px] leading-relaxed text-muted">
                {projeto.descricao}
              </p>

              <ul className="mt-5 space-y-2">
                {projeto.destaques.map((d) => (
                  <li
                    key={d}
                    className="flex gap-2.5 font-mono text-[12.5px] leading-relaxed text-muted"
                  >
                    <span className="mt-[1px] shrink-0 text-accent">▸</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-wrap gap-2 pt-6">
                {projeto.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-accent/20 bg-accent/[0.06] px-2.5 py-1 font-mono text-[11px] text-accent"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Revelar>
        ))}
      </div>

      <Revelar delay={140}>
        <p className="mt-8 flex flex-wrap items-center gap-2 font-mono text-[13px] text-dim">
          <span className="text-accent">{"//"}</span>
          Alguns projetos são de código proprietário. Posso detalhar arquitetura e
          decisões técnicas em uma conversa.
        </p>
      </Revelar>
    </Secao>
  );
}
