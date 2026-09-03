import { experiencias } from "@/data/perfil";
import Revelar from "./Revelar";
import Secao from "./Secao";

export default function Experiencia() {
  return (
    <Secao
      id="experiencia"
      indice="02"
      titulo="experiência"
      descricao="O que eu entreguei, com o número do lado."
      className="bg-bg-soft/40"
    >
      <div className="space-y-16">
        {experiencias.map((exp) => (
          <div key={exp.empresa}>
            <Revelar>
              <div className="flex flex-col gap-4 border-b border-line pb-6 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-txt sm:text-2xl">
                    {exp.cargo}
                  </h3>
                  <p className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-sm text-accent">
                    {exp.empresa}
                    <span className="text-dim">·</span>
                    <span className="text-muted">{exp.periodo}</span>
                    <span className="rounded border border-line bg-surface px-1.5 py-0.5 text-[11px] text-dim">
                      {exp.duracao}
                    </span>
                  </p>
                </div>
              </div>
            </Revelar>

            <Revelar delay={80}>
              <p className="mt-6 max-w-3xl text-pretty text-[15px] leading-relaxed text-muted">
                {exp.descricao}
              </p>
            </Revelar>

            <ol className="mt-10 space-y-0">
              {exp.entregas.map((entrega, i) => (
                <Revelar
                  key={entrega.titulo}
                  as="li"
                  delay={i * 55}
                  className="group relative grid grid-cols-[auto_1fr] gap-x-5 pb-8 last:pb-0"
                >
                  <div className="relative flex flex-col items-center">
                    <span className="z-10 mt-1 grid size-7 shrink-0 place-items-center rounded-md border border-line bg-surface font-mono text-[11px] text-dim transition-colors group-hover:border-accent/50 group-hover:text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {i < exp.entregas.length - 1 && (
                      <span className="absolute top-8 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-line to-line/20" />
                    )}
                  </div>
                  <div className="pt-0.5">
                    <h4 className="text-[15px] font-medium text-txt">
                      {entrega.titulo}
                    </h4>
                    <p className="mt-1.5 max-w-3xl text-pretty text-[14px] leading-relaxed text-muted">
                      {entrega.texto}
                    </p>
                  </div>
                </Revelar>
              ))}
            </ol>

            <Revelar delay={100}>
              <div className="mt-10 flex flex-wrap gap-2">
                {exp.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-line bg-surface/60 px-2.5 py-1 font-mono text-xs text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Revelar>
          </div>
        ))}
      </div>
    </Secao>
  );
}
