import nodemailer from "nodemailer";
import type { ContatoInput } from "./contato-schema";

function obrigatorio(nome: string): string {
  const valor = process.env[nome];
  if (!valor) {
    throw new Error(`Variável de ambiente ausente: ${nome}`);
  }
  return valor;
}

let transportador: nodemailer.Transporter | null = null;

function getTransportador() {
  if (transportador) return transportador;

  const host = obrigatorio("SMTP_HOST");
  const porta = Number(process.env.SMTP_PORT ?? 587);

  transportador = nodemailer.createTransport({
    host,
    port: porta,
    // 465 = SSL implícito; 587 = STARTTLS.
    secure: porta === 465,
    auth: {
      user: obrigatorio("SMTP_USER"),
      pass: obrigatorio("SMTP_PASS"),
    },
    // Serverless: falhar rápido em vez de estourar o tempo da função.
    connectionTimeout: 10_000,
    greetingTimeout: 8_000,
    socketTimeout: 12_000,
  });

  return transportador;
}

function escapar(texto: string) {
  return texto
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function montarHtml(dados: ContatoInput, meta: { ip: string; recebidoEm: string }) {
  const linhas: [string, string][] = [
    ["Nome", dados.nome],
    ["E-mail", dados.email],
    ["Telefone", dados.telefone],
    ["Empresa", dados.empresa || "—"],
    ["Assunto", dados.assunto],
  ];

  const tabela = linhas
    .map(
      ([rotulo, valor]) => `
        <tr>
          <td style="padding:10px 16px;border-bottom:1px solid #1c2836;color:#8496ab;font-size:13px;white-space:nowrap;">${escapar(rotulo)}</td>
          <td style="padding:10px 16px;border-bottom:1px solid #1c2836;color:#e4ecf5;font-size:14px;font-weight:500;">${escapar(valor)}</td>
        </tr>`,
    )
    .join("");

  return `<!doctype html>
<html lang="pt-BR">
<body style="margin:0;padding:24px;background:#06090f;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:620px;margin:0 auto;background:#0d141e;border:1px solid #1c2836;border-radius:12px;overflow:hidden;">
    <tr>
      <td style="padding:20px 24px;background:#111a26;border-bottom:1px solid #1c2836;">
        <p style="margin:0;font-family:ui-monospace,Menlo,monospace;font-size:12px;color:#4ade80;letter-spacing:1px;text-transform:uppercase;">novo contato · portfólio</p>
        <h1 style="margin:8px 0 0;font-size:19px;color:#e4ecf5;font-weight:600;">${escapar(dados.nome)} quer falar com você</h1>
      </td>
    </tr>
    <tr>
      <td style="padding:8px 8px 0;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${tabela}</table>
      </td>
    </tr>
    <tr>
      <td style="padding:20px 24px;">
        <p style="margin:0 0 8px;font-family:ui-monospace,Menlo,monospace;font-size:12px;color:#8496ab;text-transform:uppercase;letter-spacing:1px;">Mensagem</p>
        <div style="padding:16px;background:#06090f;border:1px solid #1c2836;border-radius:8px;color:#e4ecf5;font-size:14px;line-height:1.65;white-space:pre-wrap;">${escapar(dados.mensagem)}</div>
      </td>
    </tr>
    <tr>
      <td style="padding:0 24px 24px;">
        <a href="mailto:${escapar(dados.email)}" style="display:inline-block;padding:11px 20px;background:#4ade80;color:#06090f;text-decoration:none;border-radius:8px;font-size:14px;font-weight:600;">Responder por e-mail</a>
        <a href="https://wa.me/55${dados.telefone.replace(/\D/g, "").replace(/^55/, "")}" style="display:inline-block;margin-left:8px;padding:11px 20px;border:1px solid #1c2836;color:#8496ab;text-decoration:none;border-radius:8px;font-size:14px;">Chamar no WhatsApp</a>
      </td>
    </tr>
    <tr>
      <td style="padding:14px 24px;background:#0a0f17;border-top:1px solid #1c2836;">
        <p style="margin:0;font-family:ui-monospace,Menlo,monospace;font-size:11px;color:#5d6d80;">recebido em ${escapar(meta.recebidoEm)} · origem ${escapar(meta.ip)}</p>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function montarTexto(dados: ContatoInput, meta: { ip: string; recebidoEm: string }) {
  return [
    "NOVO CONTATO — PORTFÓLIO",
    "",
    `Nome:     ${dados.nome}`,
    `E-mail:   ${dados.email}`,
    `Telefone: ${dados.telefone}`,
    `Empresa:  ${dados.empresa || "—"}`,
    `Assunto:  ${dados.assunto}`,
    "",
    "Mensagem:",
    dados.mensagem,
    "",
    `Recebido em ${meta.recebidoEm} · origem ${meta.ip}`,
  ].join("\n");
}

export async function enviarContato(
  dados: ContatoInput,
  meta: { ip: string },
) {
  const remetente = process.env.MAIL_FROM ?? obrigatorio("SMTP_USER");
  const destino = process.env.MAIL_TO ?? remetente;

  const recebidoEm = new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short",
    timeStyle: "short",
    timeZone: "America/Sao_Paulo",
  }).format(new Date());

  const contexto = { ip: meta.ip, recebidoEm };

  await getTransportador().sendMail({
    from: `"Portfólio — Contato" <${remetente}>`,
    to: destino,
    replyTo: `"${dados.nome}" <${dados.email}>`,
    subject: `[Portfólio] ${dados.assunto} — ${dados.nome}`,
    text: montarTexto(dados, contexto),
    html: montarHtml(dados, contexto),
  });
}
