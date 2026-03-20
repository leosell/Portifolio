import React from "react";
import { ProjectProps } from "../pages";

export const ProjectCard: React.FC<{ project: ProjectProps }> = ({ project }) => {
    return (
        <div className="card p-5 rounded-lg border-gray-800 h-auto">
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="text-gray-300 mt-2">{project.desc}</p>
            {project.tags && (
                <div className="mt-3 flex gap-2 flex-wrap">
                    {project.tags.map((t) => (
                        <span key={t} className="text-sm px-2 py-1 border rounded text-gray-400 border-gray-700">
                            {t}
                        </span>
                    ))}
                </div>
            )}
            {project.link && (
                <div className="mt-4">
                    <a
                        className="text-gray-300 bg-black/15 p-2 rounded-lg hover:underline cursor-pointer hover:bg-black/60"
                        href={project.link}
                        target="_blank"
                    >
                        Acessar Repositório
                    </a>
                </div>
            )}
        </div>
    );
}