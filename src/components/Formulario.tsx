"use client";

import { useState, type FormEvent } from "react";
import { assuntos } from "@/lib/contato-schema";
import { perfil } from "@/data/perfil";

type Estado = "ocioso" | "enviando" | "sucesso" | "erro";

const inicial = {
  nome: "",
  email: "",
  telefone: "",
  empresa: "",
  assunto: assuntos[0] as string,
  mensagem: "",
  website: "",
};

function mascararTelefone(valor: string) {
  const digitos = valor.replace(/\D/g, "").slice(0, 11);
  if (digitos.length <= 2) return digitos;
  if (digitos.length <= 6) return `(${digitos.slice(0, 2)}) ${digitos.slice(2)}`;
  if (digitos.length <= 10)
    return `(${digitos.slice(0, 2)}) ${digitos.slice(2, 6)}-${digitos.slice(6)}`;
  return `(${digitos.slice(0, 2)}) ${digitos.slice(2, 7)}-${digitos.slice(7)}`;
}

const rotuloBase =
  "mb-2 block font-mono text-xs uppercase tracking-widest text-muted";
const campoBase =
  "w-full rounded-lg border bg-bg/70 px-4 py-3 text-sm text-txt outline-none transition-colors placeholder:text-dim focus:border-accent/60 focus:ring-2 focus:ring-accent/15";

export default function Formulario() {
  const [dados, setDados] = useState(inicial);
  const [estado, setEstado] = useState<Estado>("ocioso");
  const [erroGeral, setErroGeral] = useState("");
  const [erros, setErros] = useState<Record<string, string>>({});

  function atualizar(campo: keyof typeof inicial, valor: string) {
    setDados((d) => ({ ...d, [campo]: valor }));
    setErros((e) => {
      if (!e[campo]) return e;
      const copia = { ...e };
      delete copia[campo];
      return copia;
    });
  }

  async function enviar(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    if (estado === "enviando") return;

    setEstado("enviando");
    setErroGeral("");
    setErros({});

    try {
      const resposta = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
      });

      const corpo = await resposta.json().catch(() => ({}));

      if (!resposta.ok || !corpo.ok) {
        setErros(corpo.campos ?? {});
        setErroGeral(
          corpo.erro ?? "Não consegui enviar sua mensagem. Tente novamente.",
        );
        setEstado("erro");
        return;
      }

      setDados(inicial);
      setEstado("sucesso");
    } catch {
      setErroGeral(
        "Falha de conexão. Verifique sua internet ou me chame no WhatsApp.",
      );
      setEstado("erro");
    }
  }

  if (estado === "sucesso") {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center rounded-xl border border-accent/30 bg-accent/[0.05] p-10 text-center">
        <span className="grid size-14 place-items-center rounded-full border border-accent/40 bg-accent/10 text-accent">
          <svg viewBox="0 0 24 24" className="size-7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </span>
        <h3 className="mt-5 text-lg font-semibold text-txt">Mensagem enviada</h3>
        <p className="mt-2 max-w-sm text-pretty text-sm leading-relaxed text-muted">
          Recebi seu contato e respondo o quanto antes, normalmente em até 24 horas
          úteis. Se for urgente, me chame no WhatsApp.
        </p>
        <button
          type="button"
          onClick={() => setEstado("ocioso")}
          className="mt-6 rounded-lg border border-line px-4 py-2 font-mono text-[13px] text-muted transition-colors hover:border-accent/40 hover:text-accent"
        >
          enviar outra mensagem
        </button>
      </div>
    );
  }

  const desabilitado = estado === "enviando";

  return (
    <form
      onSubmit={enviar}
      noValidate
      className="relative rounded-xl border border-line bg-surface/50 p-6 sm:p-8"
    >
      <div className="mb-6 flex items-center gap-2 font-mono text-xs text-dim">
        <span className="size-2 rounded-full bg-accent" />
        POST /api/contato
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nome" className={rotuloBase}>
            Nome <span className="text-accent">*</span>
          </label>
          <input
            id="nome"
            name="nome"
            type="text"
            autoComplete="name"
            required
            value={dados.nome}
            onChange={(e) => atualizar("nome", e.target.value)}
            disabled={desabilitado}
            aria-invalid={Boolean(erros.nome)}
            aria-describedby={erros.nome ? "erro-nome" : undefined}
            placeholder="Como devo te chamar?"
            className={`${campoBase} ${erros.nome ? "border-red-500/60" : "border-line"}`}
          />
          {erros.nome && (
            <p id="erro-nome" className="mt-1.5 font-mono text-xs text-red-400">
              {erros.nome}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="empresa" className={rotuloBase}>
            Empresa
          </label>
          <input
            id="empresa"
            name="empresa"
            type="text"
            autoComplete="organization"
            value={dados.empresa}
            onChange={(e) => atualizar("empresa", e.target.value)}
            disabled={desabilitado}
            placeholder="Opcional"
            className={`${campoBase} ${erros.empresa ? "border-red-500/60" : "border-line"}`}
          />
        </div>

        <div>
          <label htmlFor="email" className={rotuloBase}>
            E-mail <span className="text-accent">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            value={dados.email}
            onChange={(e) => atualizar("email", e.target.value)}
            disabled={desabilitado}
            aria-invalid={Boolean(erros.email)}
            aria-describedby={erros.email ? "erro-email" : undefined}
            placeholder="voce@empresa.com"
            className={`${campoBase} ${erros.email ? "border-red-500/60" : "border-line"}`}
          />
          {erros.email && (
            <p id="erro-email" className="mt-1.5 font-mono text-xs text-red-400">
              {erros.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="telefone" className={rotuloBase}>
            Telefone <span className="text-accent">*</span>
          </label>
          <input
            id="telefone"
            name="telefone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            value={dados.telefone}
            onChange={(e) => atualizar("telefone", mascararTelefone(e.target.value))}
            disabled={desabilitado}
            aria-invalid={Boolean(erros.telefone)}
            aria-describedby={erros.telefone ? "erro-telefone" : undefined}
            placeholder="(48) 99999-9999"
            className={`${campoBase} ${erros.telefone ? "border-red-500/60" : "border-line"}`}
          />
          {erros.telefone && (
            <p id="erro-telefone" className="mt-1.5 font-mono text-xs text-red-400">
              {erros.telefone}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="assunto" className={rotuloBase}>
            Assunto
          </label>
          <select
            id="assunto"
            name="assunto"
            value={dados.assunto}
            onChange={(e) => atualizar("assunto", e.target.value)}
            disabled={desabilitado}
            className={`${campoBase} border-line appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%238496ab%22%20stroke-width%3D%222%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%2F%3E%3C%2Fsvg%3E')] bg-[length:18px] bg-[right_1rem_center] bg-no-repeat pr-11`}
          >
            {assuntos.map((a) => (
              <option key={a} value={a} className="bg-surface">
                {a}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="mensagem" className={rotuloBase}>
            Mensagem <span className="text-accent">*</span>
          </label>
          <textarea
            id="mensagem"
            name="mensagem"
            rows={5}
            required
            value={dados.mensagem}
            onChange={(e) => atualizar("mensagem", e.target.value)}
            disabled={desabilitado}
            maxLength={3000}
            aria-invalid={Boolean(erros.mensagem)}
            aria-describedby={erros.mensagem ? "erro-mensagem" : undefined}
            placeholder="Conte um pouco sobre a vaga, o projeto ou o desafio técnico."
            className={`${campoBase} resize-y ${erros.mensagem ? "border-red-500/60" : "border-line"}`}
          />
          <div className="mt-1.5 flex items-start justify-between gap-3">
            {erros.mensagem ? (
              <p id="erro-mensagem" className="font-mono text-xs text-red-400">
                {erros.mensagem}
              </p>
            ) : (
              <span />
            )}
            <span className="shrink-0 font-mono text-xs text-dim">
              {dados.mensagem.length}/3000
            </span>
          </div>
        </div>
      </div>

      {/* Campo isca anti-spam: invisível para pessoas, tentador para bots. */}
      <div className="pointer-events-none absolute size-0 overflow-hidden opacity-0" aria-hidden="true">
        <label htmlFor="website">Não preencha este campo</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={dados.website}
          onChange={(e) => atualizar("website", e.target.value)}
        />
      </div>

      {erroGeral && (
        <p
          role="alert"
          className="mt-6 flex items-start gap-2.5 rounded-lg border border-red-500/30 bg-red-500/[0.07] px-4 py-3 text-sm text-red-300"
        >
          <svg viewBox="0 0 24 24" className="mt-0.5 size-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          {erroGeral}
        </p>
      )}

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={desabilitado}
          className="inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-accent px-6 py-3 text-sm font-medium text-bg transition-all hover:bg-accent-dim hover:shadow-lg hover:shadow-accent/20 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {desabilitado ? (
            <>
              <svg viewBox="0 0 24 24" className="size-4 animate-spin" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                <path d="M21 12a9 9 0 1 1-6.22-8.56" />
              </svg>
              enviando...
            </>
          ) : (
            <>
              Enviar mensagem
              <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </>
          )}
        </button>

        <p className="font-mono text-[11px] leading-relaxed text-dim">
          Vai direto para {perfil.email}.
          <br />
          Seus dados não são armazenados nem compartilhados.
        </p>
      </div>
    </form>
  );
}
