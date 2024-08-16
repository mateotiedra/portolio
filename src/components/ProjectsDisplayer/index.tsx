import React from 'react'
import { ProjectProps } from "../../pages/projects.ts";
import ProjectCard from './ProjectCard.tsx';


function ProjectsDisplayer({
    projects,
    glitchyTextDensity,
}: { projects: ProjectProps[], glitchyTextDensity: number, color: string }) {
    return <div className='section-container flex flex-col'>
        {projects.map((project) => <ProjectCard key={project.id} glitchyTextDensity={glitchyTextDensity}  {...project} />)}

    </div>
}

export default ProjectsDisplayer;