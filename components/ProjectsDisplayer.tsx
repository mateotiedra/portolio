'use client'
import React, { useMemo } from 'react'
import { ProjectProps } from "./projects";
import ProjectCard from './ProjectCard';

function ProjectsDisplayer({ projects, glitchyTextDensity }: { projects: ProjectProps[], glitchyTextDensity: number }) {
    const projectsCards = useMemo(() => projects.map((project, id) => <ProjectCard key={id} glitchyTextDensity={glitchyTextDensity} {...project} />), [projects, glitchyTextDensity])

    return <div className='section-container flex flex-row flex-wrap justify-center gap-20 h-full items-stretch basis-0 overflow-hidden'>
        {projectsCards}
    </div>
}

export default ProjectsDisplayer;
