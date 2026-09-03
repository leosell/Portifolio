"use client";

import { useEffect, useRef, useState } from "react";

type Linha = { texto: string; classe: string; pausa?: number };

const linhas: Linha[] = [
  { texto: "$ whoami", classe: "text-txt", pausa: 320 },
  { texto: "leonardo-cabral-sell", classe: "text-accent", pausa: 260 },
  { texto: "", classe: "" },
  { texto: "$ cat perfil.json", classe: "text-txt", pausa: 280 },
  { texto: "{", classe: "text-muted" },
  { texto: '  "cargo": "Desenvolvedor Java Pleno",', classe: "text-cyan" },
  { texto: '  "experiencia_anos": 3,', classe: "text-cyan" },
  { texto: '  "dominio": "credito consignado",', classe: "text-cyan" },
  { texto: '  "integracoes_bancarias": 20,', classe: "text-cyan" },
  { texto: '  "propostas_por_dia": "5000-15000",', classe: "text-cyan" },
  {
    texto: '  "stack": ["Java", "Spring Boot", "Docker", "Kafka"]',
    classe: "text-cyan",
  },
  { texto: "}", classe: "text-muted", pausa: 300 },
  { texto: "", classe: "" },
  { texto: "$ status --disponibilidade", classe: "text-txt", pausa: 300 },
  { texto: "● aberto a propostas e freelas", classe: "text-accent" },
];

export default function Terminal() {
  const [indiceLinha, setIndiceLinha] = useState(0);
  const [parcial, setParcial] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const concluido = indiceLinha >= linhas.length;

  useEffect(() => {
    if (indiceLinha >= linhas.length) return;

    // Quem pediu menos movimento recebe o terminal já preenchido.
    const reduzido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduzido) {
      timer.current = setTimeout(() => setIndiceLinha(linhas.length), 0);
      return () => clearTimeout(timer.current);
    }

    const linha = linhas[indiceLinha];

    if (parcial.length < linha.texto.length) {
      const velocidade = linha.texto.startsWith("$") ? 34 : 12;
      timer.current = setTimeout(() => {
        setParcial(linha.texto.slice(0, parcial.length + 1));
      }, velocidade);
    } else {
      timer.current = setTimeout(() => {
        setIndiceLinha((i) => i + 1);
        setParcial("");
      }, linha.pausa ?? 60);
    }

    return () => clearTimeout(timer.current);
  }, [indiceLinha, parcial]);

  return (
    <div className="borda-brilho relative overflow-hidden rounded-xl border border-line bg-surface/90 shadow-2xl shadow-black/50 backdrop-blur">
      <div className="flex items-center gap-2 border-b border-line bg-surface-2/80 px-4 py-3">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 font-mono text-xs text-dim">
          leonardo@portfolio — zsh
        </span>
      </div>

      <div className="min-h-[352px] p-5 font-mono text-[12.5px] leading-[1.75] sm:min-h-[368px] sm:text-[13px]">
        {linhas.slice(0, indiceLinha).map((linha, i) => (
          <p key={i} className={`${linha.classe} whitespace-pre-wrap break-words`}>
            {linha.texto || " "}
          </p>
        ))}

        {indiceLinha < linhas.length && (
          <p
            className={`${linhas[indiceLinha].classe} whitespace-pre-wrap break-words`}
          >
            {parcial}
            <span className="ml-0.5 inline-block h-[1em] w-[7px] translate-y-[2px] bg-accent align-baseline" />
          </p>
        )}

        {concluido && (
          <p className="text-txt">
            ${" "}
            <span className="ml-0.5 inline-block h-[1em] w-[7px] translate-y-[2px] animate-blink bg-accent align-baseline" />
          </p>
        )}
      </div>
    </div>
  );
}
