import React from "react";
import { ProfileCard } from "../components/ProfileCard";
import { ProjectCard } from "../components/ProjectCard";
import { Header } from "../components/Header";

const projects = [
      {
        title: "Gerenciador de Estacionamento (Ignite Park&Go)",
        desc: "Sistema de gerenciamento de estacionamento completo para o dono de estacionamento e cliente. Focado em agilidade e segurança!",
        tags: ["Java", "Spring Boot", "Node.js", "React", "Typescript"]
      },
];

export default function Home() {
    return (
        <div className="min-h-screen text-white">
            <Header />
            <main>
                <ProfileCard />

                {/* Seção Sobre */}
                <section id="sobre" className="max-w-5xl mx-auto px-6 py-6">
                    <h2 className="text-3xl font-bold">Sobre mim</h2>
                    <p className="mt-4 text-gray-300 max-w-3xl leading-relaxed">
                        Sou desenvolvedor backend com mais de 1 ano de experiência. Sou especialista em Java, Spring Boot e MySQL,
                        com foco em escrever código limpo, eficiente e seguro. Também gosto de trabalhar com Node.js e integrações em nuvem.
                    </p>
                </section>

                {/* Seção Projetos */}
                <section id="projects" className="max-w-5xl mx-auto px-6 py-6">
                    <h2 className="text-3xl font-bold">Projetos</h2>
                    <div className="mt-6 grid gap-6 grid-cols-1 md:grid-cols-2">
                        {projects.length > 0 ? projects.map((p) => (
                            <ProjectCard key={p.title} project={p} />
                        )) : (
                            <div>
                                <p className="text-gray-400 mb-2">Nenhum projeto adicionado ainda.</p>
                                <p className="text-gray-500 italic">Projetos privados por questões contratuais.</p>
                            </div>
                        )}
                    </div>
                </section>

                {/* Seção Contato */}
                <section id="contact" className="max-w-5xl mx-auto px-6 py-10">
                    <h2 className="text-2xl font-semibold">Contato</h2>
                    <p className="mt-3 text-gray-300">
                        GitHub: <a className="text-blue-300" href="https://github.com/leosell" target="_blank">github.com/leosell</a>
                    </p>
                    <p className="mt-3 text-gray-300">
                        GitLab: <a className="text-blue-300" href="https://gitlab.com/Leonardo_Sell" target="_blank">gitlab.com/Leonardo_Sell</a>
                    </p>
                    <p className="mt-3 text-gray-300">
                        Linkedin: <a className="text-blue-300" href="https://www.linkedin.com/in/leonardo-cabral-sell-353ba71b5/" target="_blank">linkedin.com/in/leonardo-cabral-sell-353ba71b5</a>
                    </p>
                    {/* <p className="mt-3 text-gray-300">
                        Email: <a className="text-blue-300" href="mailto:leonardo@example.com">leonardo@example.com</a>
                    </p> */}
                </section>
            </main>
        </div>
    );
}