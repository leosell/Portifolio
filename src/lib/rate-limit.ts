type Registro = { contagem: number; expiraEm: number };

const memoria = new Map<string, Registro>();

const JANELA_MS = 10 * 60 * 1000; // 10 minutos
const LIMITE = 4; // envios por janela

/**
 * Rate limit em memória. Em ambiente serverless cada instância tem a própria
 * memória, então isto barra rajadas de um mesmo IP na mesma instância — é uma
 * primeira barreira, não uma garantia distribuída.
 */
export function permitido(chave: string): { ok: boolean; restante: number } {
  const agora = Date.now();
  const registro = memoria.get(chave);

  if (!registro || registro.expiraEm < agora) {
    memoria.set(chave, { contagem: 1, expiraEm: agora + JANELA_MS });
    return { ok: true, restante: LIMITE - 1 };
  }

  if (registro.contagem >= LIMITE) {
    return { ok: false, restante: 0 };
  }

  registro.contagem += 1;
  return { ok: true, restante: LIMITE - registro.contagem };
}

// Limpeza preguiçosa para não crescer indefinidamente numa instância quente.
export function limparExpirados() {
  const agora = Date.now();
  for (const [chave, registro] of memoria) {
    if (registro.expiraEm < agora) memoria.delete(chave);
  }
}
