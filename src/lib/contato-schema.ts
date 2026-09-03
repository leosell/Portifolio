import { z } from "zod";

export const assuntos = [
  "Oportunidade de trabalho (CLT/PJ)",
  "Projeto freelance",
  "Consultoria técnica",
  "Outro assunto",
] as const;

export const contatoSchema = z.object({
  nome: z
    .string()
    .trim()
    .min(2, "Informe seu nome.")
    .max(120, "Nome muito longo."),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .min(1, "Informe seu e-mail.")
    .email("E-mail inválido.")
    .max(200, "E-mail muito longo."),
  telefone: z
    .string()
    .trim()
    .min(8, "Informe um telefone válido.")
    .max(30, "Telefone muito longo.")
    .regex(/^[\d\s()+\-.]+$/, "Telefone deve conter apenas números e símbolos."),
  empresa: z.string().trim().max(120, "Nome da empresa muito longo.").optional(),
  assunto: z.enum(assuntos).default("Oportunidade de trabalho (CLT/PJ)"),
  mensagem: z
    .string()
    .trim()
    .min(10, "Escreva ao menos 10 caracteres.")
    .max(3000, "Mensagem muito longa (máx. 3000 caracteres)."),
  // Campo isca anti-spam. Aceita qualquer valor aqui: a rota é que decide
  // descartar em silêncio quando vem preenchido, sem devolver erro ao bot.
  website: z.string().max(200).optional(),
});

export type ContatoInput = z.infer<typeof contatoSchema>;
