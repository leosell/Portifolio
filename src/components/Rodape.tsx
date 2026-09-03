import { perfil } from "@/data/perfil";

export default function Rodape() {
  const ano = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-bg">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="font-mono text-sm text-txt">
            leonardo<span className="text-accent">.sell</span>
          </p>
          <p className="mt-1.5 font-mono text-xs text-dim">
            © {ano} {perfil.nome} · {perfil.cargo}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={perfil.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted transition-colors hover:text-accent"
          >
            github
          </a>
          <span className="text-line">·</span>
          <a
            href={perfil.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted transition-colors hover:text-accent"
          >
            linkedin
          </a>
          <span className="text-line">·</span>
          <a
            href={`mailto:${perfil.email}`}
            className="font-mono text-xs text-muted transition-colors hover:text-accent"
          >
            e-mail
          </a>
          <span className="text-line">·</span>
          <a
            href="#topo"
            className="font-mono text-xs text-muted transition-colors hover:text-accent"
          >
            topo ↑
          </a>
        </div>
      </div>

      <div className="border-t border-line-soft">
        <p className="mx-auto w-full max-w-6xl px-5 py-4 font-mono text-[11px] text-dim sm:px-8">
          <span className="text-accent">$</span> construído com Next.js, TypeScript e
          Tailwind CSS · hospedado na Vercel
        </p>
      </div>
    </footer>
  );
}
