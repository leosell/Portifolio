import type { ReactNode } from "react";
import Revelar from "./Revelar";

type Props = {
  id: string;
  indice: string;
  titulo: string;
  descricao?: string;
  children: ReactNode;
  className?: string;
};

export default function Secao({
  id,
  indice,
  titulo,
  descricao,
  children,
  className = "",
}: Props) {
  return (
    <section id={id} className={`relative py-20 sm:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Revelar className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 font-mono text-xs tracking-widest text-accent">
            <span className="text-dim">{indice}</span>
            <span className="uppercase">{titulo}</span>
            <span className="h-px flex-1 bg-gradient-to-r from-line to-transparent" />
          </div>
          {descricao && (
            <h2 className="mt-4 max-w-3xl text-balance text-2xl font-semibold leading-snug tracking-tight text-txt sm:text-4xl">
              {descricao}
            </h2>
          )}
        </Revelar>
        {children}
      </div>
    </section>
  );
}
