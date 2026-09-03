/**
 * URL pública do site. Em produção vem da variável de ambiente
 * (NEXT_PUBLIC_SITE_URL na Vercel); o fallback cobre build local sem .env.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://leonardocsell.com.br";
