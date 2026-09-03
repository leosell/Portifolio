import BotaoWhatsApp from "@/components/BotaoWhatsApp";
import Contato from "@/components/Contato";
import Experiencia from "@/components/Experiencia";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projetos from "@/components/Projetos";
import Rodape from "@/components/Rodape";
import Sobre from "@/components/Sobre";
import Stack from "@/components/Stack";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Experiencia />
        <Projetos />
        <Stack />
        <Contato />
      </main>
      <Rodape />
      <BotaoWhatsApp />
    </>
  );
}
