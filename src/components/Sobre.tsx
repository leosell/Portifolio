import { formacao, idiomas, perfil } from "@/data/perfil";
import Revelar from "./Revelar";
import Secao from "./Secao";

const focos = [
  {
    titulo: "Integrações que não podem parar",
    texto:
      "APIs de simulação e digitação de propostas conversando com mais de 20 sistemas bancários diferentes, cada um com seu contrato, sua instabilidade e seu horário de pico.",
    icone: (
      <>
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </>
    ),
  },
  {
    titulo: "Performance sob carga real",
    texto:
      "Consultas reescritas e índices aplicados no MySQL para eliminar travamentos em horário de pico, quando a operação inteira depende do sistema responder.",
    icone: (
      <>
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </>
    ),
  },
  {
    titulo: "Arquitetura e entrega",
    texto:
      "Migração de monolito para microsserviços, containerização com Docker e um ciclo de publicação que caiu de ~30 minutos para 5 a 8 minutos.",
    icone: (
      <>
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </>
    ),
  },
];

export default function Sobre() {
  return (
    <Secao
      id="sobre"
      indice="01"
      titulo="sobre"
      descricao="Backend para um domínio onde erro custa dinheiro de verdade."
    >
      <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
        <div>
          <Revelar>
            <div className="space-y-4 text-[15px] leading-relaxed text-muted sm:text-base">
              {perfil.sobre.map((p, i) => (
                <p key={i} className="text-pretty">
                  {p}
                </p>
              ))}
              <p className="text-pretty">
                Trabalho perto da operação: entendo o que a área de negócio precisa,
                traduzo em contrato de API e entrego algo que aguenta o volume do dia a
                dia. Quando faltou mão no front, assumi o React; quando faltou
                automação, escrevi os testes de ponta a ponta.
              </p>
            </div>
          </Revelar>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {focos.map((foco, i) => (
              <Revelar
                key={foco.titulo}
                delay={i * 70}
                className="borda-brilho rounded-xl border border-line bg-surface/50 p-5 transition-colors hover:bg-surface sm:first:col-span-2"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="size-5 text-accent"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {foco.icone}
                </svg>
                <h3 className="mt-3 text-[15px] font-medium text-txt">{foco.titulo}</h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted">
                  {foco.texto}
                </p>
              </Revelar>
            ))}
          </div>
        </div>

        <Revelar delay={120}>
          <div className="sticky top-28 space-y-4">
            <div className="rounded-xl border border-line bg-surface/50 p-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-accent">
                formação
              </h3>
              <ul className="mt-4 space-y-4">
                {formacao.map((f) => (
                  <li key={f.curso} className="border-l-2 border-accent/30 pl-4">
                    <p className="text-sm font-medium leading-snug text-txt">
                      {f.curso}
                    </p>
                    <p className="mt-1 font-mono text-xs text-muted">
                      {f.instituicao}
                    </p>
                    <p className="mt-0.5 font-mono text-xs text-dim">{f.periodo}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-line bg-surface/50 p-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-accent">
                idiomas
              </h3>
              <ul className="mt-4 space-y-3">
                {idiomas.map((i) => (
                  <li
                    key={i.idioma}
                    className="flex items-baseline justify-between gap-3 border-b border-line-soft pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-sm text-txt">{i.idioma}</span>
                    <span className="text-right font-mono text-xs text-muted">
                      {i.nivel}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-line bg-surface/50 p-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-accent">
                modelo de trabalho
              </h3>
              <ul className="mt-4 space-y-2.5 font-mono text-[13px] text-muted">
                <li className="flex items-center gap-2">
                  <span className="text-accent">✓</span> CLT ou PJ
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">✓</span> Remoto, híbrido ou presencial em Florianópolis
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">✓</span> Projetos pontuais e consultoria
                </li>
              </ul>
            </div>
          </div>
        </Revelar>
      </div>
    </Secao>
  );
}
