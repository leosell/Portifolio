# Portfólio — Leonardo Cabral Sell

Site pessoal em Next.js com identidade dark tech/terminal, construído a partir do
currículo. Inclui formulário de contato que envia e-mail via SMTP e canal direto
de WhatsApp.

**Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS 4 · Nodemailer · Zod

---

## Rodando localmente

```bash
npm install
cp .env.example .env.local   # preencha as variáveis
npm run dev
```

Abre em http://localhost:3000

---

## Passo 1 — Configurar o envio de e-mail (SMTP)

O formulário usa o Route Handler em `src/app/api/contato/route.ts`, que roda no
runtime Node da Vercel. **A Vercel permite conexões SMTP nas portas 587 e 465** —
apenas a porta 25 é bloqueada. Como a configuração usa 587 (STARTTLS), funciona
no plano gratuito.

### Se você usar Gmail

A senha da sua conta **não funciona** — o Google exige uma *senha de app*:

1. Ative a verificação em duas etapas: https://myaccount.google.com/security
2. Gere a senha de app: https://myaccount.google.com/apppasswords
3. Copie os 16 dígitos e use como `SMTP_PASS` (sem espaços).

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=leosell14@gmail.com
SMTP_PASS=abcdefghijklmnop
MAIL_FROM=leosell14@gmail.com
MAIL_TO=leosell14@gmail.com
```

### Outros provedores

| Provedor | Host | Porta |
|---|---|---|
| Gmail | `smtp.gmail.com` | 587 |
| Zoho Mail | `smtp.zoho.com` | 465 |
| Outlook / Microsoft 365 | `smtp.office365.com` | 587 |
| Brevo (ex-Sendinblue) | `smtp-relay.brevo.com` | 587 |

> Se o e-mail cair em spam do destinatário, a causa costuma ser o `MAIL_FROM`
> não pertencer ao domínio autenticado. Mantenha `MAIL_FROM` igual ao `SMTP_USER`.

---

## Passo 2 — Deploy na Vercel

1. Suba o projeto para o GitHub:
   ```bash
   git init
   git add .
   git commit -m "portfolio: versão inicial"
   git branch -M main
   git remote add origin https://github.com/leosell/portfolio.git
   git push -u origin main
   ```

2. Em https://vercel.com/new, importe o repositório. A Vercel detecta o Next.js
   sozinho — não mude nenhuma configuração de build.

3. Antes de clicar em **Deploy**, abra *Environment Variables* e cadastre, para
   os ambientes **Production, Preview e Development**:

   | Variável | Valor |
   |---|---|
   | `NEXT_PUBLIC_SITE_URL` | `https://leonardocsell.com.br` |
   | `SMTP_HOST` | `smtp.gmail.com` |
   | `SMTP_PORT` | `587` |
   | `SMTP_USER` | seu e-mail |
   | `SMTP_PASS` | senha de app |
   | `MAIL_FROM` | seu e-mail |
   | `MAIL_TO` | e-mail que recebe os contatos |

   > Alterou uma variável depois do deploy? É preciso **redeployar** para valer.

---

## Passo 3 — Apontar o seu domínio

1. No projeto da Vercel: **Settings → Domains → Add** e digite `leonardocsell.com.br`.
2. A Vercel mostra os registros DNS. No painel do seu registrador (Registro.br,
   GoDaddy, Cloudflare…), cadastre:

   | Tipo | Nome | Valor |
   |---|---|---|
   | `A` | `@` | `76.76.21.21` |
   | `CNAME` | `www` | `cname.vercel-dns.com` |

   *Use sempre os valores exibidos na tela da Vercel — eles são a fonte da verdade.*

3. A propagação leva de minutos a algumas horas. O HTTPS é emitido automaticamente.
4. Atualize `NEXT_PUBLIC_SITE_URL` para o domínio final e redeploye.

---

## Onde editar o conteúdo

Quase tudo vem de um arquivo só: **`src/data/perfil.ts`**.

| O que mudar | Onde |
|---|---|
| Nome, cargo, contatos, links | `perfil` |
| Números do topo do site | `metricas` |
| Cargos e entregas | `experiencias` |
| Projetos | `projetos` |
| Tecnologias | `habilidades` |
| Formação e idiomas | `formacao`, `idiomas` |
| Cores e tema | `src/app/globals.css` (bloco `@theme`) |
| Currículo em PDF | `public/curriculo-leonardo-cabral-sell.pdf` |

---

## Estrutura

```
src/
├── app/
│   ├── api/contato/route.ts   # recebe o formulário e dispara o e-mail
│   ├── globals.css            # tema (cores, animações, utilitários)
│   ├── layout.tsx             # fontes, SEO, JSON-LD
│   ├── page.tsx               # composição das seções
│   ├── icon.svg               # favicon
│   ├── robots.ts / sitemap.ts
├── components/                # Header, Hero, Terminal, Sobre, Experiencia,
│                              # Projetos, Stack, Contato, Formulario, Rodape...
├── data/perfil.ts             # TODO o conteúdo do site
└── lib/
    ├── contato-schema.ts      # validação (Zod), compartilhada cliente/servidor
    ├── mailer.ts              # SMTP + template do e-mail
    └── rate-limit.ts          # trava de rajada por IP
```

---

## Proteções do formulário

- **Validação dupla:** o mesmo schema Zod valida no cliente e no servidor.
- **Honeypot:** campo `website` invisível; se vier preenchido, a rota responde
  sucesso e descarta em silêncio, sem revelar a armadilha ao bot.
- **Rate limit:** 4 envios por IP a cada 10 minutos. É em memória — em serverless
  cada instância tem a sua, então barra rajadas, não um ataque distribuído. Se um
  dia virar problema, troque `src/lib/rate-limit.ts` por Upstash Redis.
- **Reply-To:** o e-mail chega com o endereço de quem preencheu, então basta
  responder direto na sua caixa.

---

## Sobre o FastAPI

O plano inicial previa um backend Python. Para o escopo atual — uma rota que
valida um formulário e dispara um e-mail — o Route Handler do próprio Next
resolve com um deploy só, um runtime só e nenhuma infra extra.

Se depois surgir backend de verdade (dashboard, processamento, banco), a Vercel
roda funções Python no mesmo projeto: basta criar `api/*.py` com o handler ASGI.
Aí o FastAPI passa a valer o custo.
