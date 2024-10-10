import React, { useMemo } from 'react'
import { ProjectProps } from "../../pages/projects.ts";
import ProjectCard from './ProjectCard.tsx';


function ProjectsDisplayer({
    projects,
    glitchyTextDensity,
}: { projects: ProjectProps[], glitchyTextDensity: number, color: string }) {

    const projectsCards = useMemo(() => projects.map((project, id) => <ProjectCard key={id} glitchyTextDensity={glitchyTextDensity}  {...project} />), [projects, glitchyTextDensity])

    return <div className='section-container flex flex-row flex-wrap justify-center gap-20 h-full items-stretch basis-0 overflow-hidden'>
        {projectsCards}
    </div>
}

export default ProjectsDisplayer;