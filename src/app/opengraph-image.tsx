import { ImageResponse } from "next/og";
import { perfil } from "@/data/perfil";

export const alt = `${perfil.nome} — ${perfil.cargo}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Imagem() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#06090f",
          padding: "68px 72px",
          fontFamily: "sans-serif",
        }}
      >
        {/* faixa superior de destaque */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1200,
            height: 6,
            background: "linear-gradient(90deg, #4ade80 0%, #38bdf8 100%)",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 52,
              height: 52,
              borderRadius: 12,
              border: "2px solid rgba(74,222,128,0.35)",
              background: "rgba(74,222,128,0.10)",
              color: "#4ade80",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            {">_"}
          </div>
          <div style={{ display: "flex", fontSize: 24, color: "#8496ab" }}>
            leonardocsell.com.br
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 76,
              fontWeight: 700,
              color: "#e4ecf5",
              letterSpacing: "-2px",
            }}
          >
            {perfil.nome}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 14,
              fontSize: 34,
              color: "#4ade80",
            }}
          >
            {perfil.cargo} · Spring Boot · Microsserviços
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 22,
              fontSize: 25,
              color: "#8496ab",
              lineHeight: 1.45,
              maxWidth: 940,
            }}
          >
            Integrações bancárias em produção para o mercado de crédito
            consignado, sustentando de 5 a 15 mil propostas por dia.
          </div>
        </div>

        <div style={{ display: "flex", gap: 12 }}>
          {["20+ integrações", "3 anos de experiência", "Florianópolis, SC"].map(
            (item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  padding: "12px 22px",
                  borderRadius: 10,
                  border: "1px solid #1c2836",
                  background: "#0d141e",
                  color: "#8496ab",
                  fontSize: 23,
                }}
              >
                {item}
              </div>
            ),
          )}
        </div>
      </div>
    ),
    size,
  );
}
