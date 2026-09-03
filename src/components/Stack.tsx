import { habilidades } from "@/data/perfil";
import Revelar from "./Revelar";
import Secao from "./Secao";

const destaque = new Set([
  "Java",
  "Spring Boot",
  "Spring Security",
  "Spring Data JPA",
  "MySQL",
  "Docker",
  "Kafka",
  "Redis",
  "Microsserviços",
  "API REST",
]);

export default function Stack() {
  return (
    <Secao
      id="stack"
      indice="04"
      titulo="stack"
      descricao="Ferramentas que eu uso todo dia — e as que já sustentaram produção."
      className="bg-bg-soft/40"
    >
      <div className="overflow-hidden rounded-xl border border-line bg-surface/40">
        {habilidades.map((grupo, i) => (
          <Revelar
            key={grupo.chave}
            delay={i * 55}
            className="grid grid-cols-1 gap-3 border-b border-line px-5 py-5 transition-colors last:border-0 hover:bg-surface/60 sm:grid-cols-[190px_1fr] sm:items-baseline sm:gap-6 sm:px-7"
          >
            <h3 className="font-mono text-[13px] text-accent">
              <span className="text-dim">{String(i + 1).padStart(2, "0")}.</span>{" "}
              {grupo.categoria}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {grupo.itens.map((item) => (
                <li
                  key={item}
                  className={`rounded-md border px-2.5 py-1 font-mono text-[12.5px] transition-colors ${
                    destaque.has(item)
                      ? "border-accent/25 bg-accent/[0.07] text-accent"
                      : "border-line bg-surface-2/50 text-muted hover:text-txt"
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </Revelar>
        ))}
      </div>

      <Revelar delay={120}>
        <p className="mt-6 font-mono text-[13px] text-dim">
          <span className="text-accent">{"//"}</span> em destaque: o que uso no dia a dia
          em produção.
        </p>
      </Revelar>
    </Secao>
  );
}
