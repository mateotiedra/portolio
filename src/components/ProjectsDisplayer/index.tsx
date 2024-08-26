import React from 'react'
import { ProjectProps } from "../../pages/projects.ts";
import ProjectCard from './ProjectCard.tsx';


function ProjectsDisplayer({
    projects,
    glitchyTextDensity,
}: { projects: ProjectProps[], glitchyTextDensity: number, color: string }) {
    return <div className='section-container flex flex-row flex-wrap justify-center gap-32 h-full items-stretch basis-0'>
        {projects.map((project) => <ProjectCard key={project.id} glitchyTextDensity={glitchyTextDensity}  {...project} />)}

        <div className='fixed top-0 left-0 w-[100vw] h-[100vh] -z-10 '
            style={{
                backdropFilter: 'blur(100px)',
            }}>
        </div>
    </div>
}

export default ProjectsDisplayer;