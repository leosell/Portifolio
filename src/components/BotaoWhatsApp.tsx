"use client";

import { useEffect, useState } from "react";
import { perfil } from "@/data/perfil";

const href = `https://wa.me/${perfil.telefoneE164}?text=${encodeURIComponent(
  "Olá Leonardo! Vi seu portfólio e gostaria de conversar sobre uma oportunidade.",
)}`;

export default function BotaoWhatsApp() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisivel(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      className={`group fixed bottom-5 right-5 z-50 flex items-center gap-0 overflow-hidden rounded-full border border-accent/30 bg-surface/90 py-3 pl-3 pr-3 shadow-xl shadow-black/50 backdrop-blur transition-all duration-300 hover:border-accent/60 hover:gap-2 hover:pr-5 sm:bottom-7 sm:right-7 ${
        visivel
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <svg viewBox="0 0 24 24" className="size-6 shrink-0 text-accent" fill="currentColor" aria-hidden="true">
        <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.08-.3-.15-1.26-.47-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.42-.07-.13-.27-.2-.57-.35ZM12.04 21.5h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.38 9.38 0 0 1-1.44-5.01c0-5.18 4.22-9.4 9.42-9.4a9.35 9.35 0 0 1 6.65 2.76 9.32 9.32 0 0 1 2.75 6.65c0 5.18-4.22 9.4-9.41 9.4ZM20.4 3.6A11.28 11.28 0 0 0 12.04.24C5.82.24.77 5.29.77 11.5c0 1.98.52 3.92 1.5 5.62L.68 23.76l6.79-1.78a11.23 11.23 0 0 0 5.37 1.37h.01c6.21 0 11.26-5.05 11.27-11.26a11.2 11.2 0 0 0-3.3-7.97Z" />
      </svg>
      <span className="max-w-0 whitespace-nowrap text-sm font-medium text-txt opacity-0 transition-all duration-300 group-hover:max-w-[10rem] group-hover:opacity-100">
        Falar no WhatsApp
      </span>
    </a>
  );
}
