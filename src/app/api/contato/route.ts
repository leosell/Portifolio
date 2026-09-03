import { NextResponse } from "next/server";
import { contatoSchema } from "@/lib/contato-schema";
import { enviarContato } from "@/lib/mailer";
import { limparExpirados, permitido } from "@/lib/rate-limit";

// Nodemailer abre socket TCP: precisa do runtime Node, não do Edge.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function obterIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "desconhecido";
}

export async function POST(req: Request) {
  try {
    const corpo = await req.json().catch(() => null);

    if (!corpo || typeof corpo !== "object") {
      return NextResponse.json(
        { ok: false, erro: "Requisição inválida." },
        { status: 400 },
      );
    }

    const resultado = contatoSchema.safeParse(corpo);

    if (!resultado.success) {
      const campos: Record<string, string> = {};
      for (const issue of resultado.error.issues) {
        const campo = String(issue.path[0] ?? "form");
        if (!campos[campo]) campos[campo] = issue.message;
      }
      return NextResponse.json(
        { ok: false, erro: "Confira os campos destacados.", campos },
        { status: 422 },
      );
    }

    const dados = resultado.data;

    // Honeypot: bots preenchem o campo escondido. Respondemos sucesso para
    // não sinalizar a armadilha, mas não enviamos nada.
    if (dados.website) {
      return NextResponse.json({ ok: true });
    }

    const ip = obterIp(req);
    limparExpirados();
    const limite = permitido(ip);

    if (!limite.ok) {
      return NextResponse.json(
        {
          ok: false,
          erro:
            "Você já enviou várias mensagens. Aguarde alguns minutos ou fale comigo no WhatsApp.",
        },
        { status: 429 },
      );
    }

    await enviarContato(dados, { ip });

    return NextResponse.json({ ok: true });
  } catch (erro) {
    console.error("[api/contato] falha ao enviar:", erro);
    return NextResponse.json(
      {
        ok: false,
        erro:
          "Não consegui enviar sua mensagem agora. Tente novamente ou me chame no WhatsApp.",
      },
      { status: 500 },
    );
  }
}
