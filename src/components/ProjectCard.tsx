import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/src/components/ui/accordion"
import { Project } from "../pages";

export const ProjectCards: React.FC<{ project: Project[] }> = ({ project }) => {

    if (project.length > 0) {
        return (
            project.map(({ title, desc, tags }) => (
                <div className="card p-5 rounded-lg border-gray-800">
                    <Accordion type="single" collapsible>
                        <AccordionItem value={title}>
                            <AccordionTrigger className="text-xl font-semibold text-white">{title}</AccordionTrigger>
                            <AccordionContent>
                                <p className="text-gray-300 mt-2">{desc}</p>
                                {tags && (
                                    <div className="mt-3 flex gap-2 flex-wrap">
                                        {tags.map((t) => (
                                            <span key={t} className="text-sm px-2 py-1 border rounded text-gray-400 border-gray-700">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            ))
        );
    }
}