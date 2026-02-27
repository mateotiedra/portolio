'use client'

import { useMemo } from 'react'
import { ProjectProps } from './projects'
import ProjectCard from './ProjectCard'

function ProjectsDisplayer({ projects, glitchyTextDensity }: { projects: ProjectProps[], glitchyTextDensity: number }) {
  const cards = useMemo(() => projects.map((project, id) => (
    <ProjectCard key={id} glitchyTextDensity={glitchyTextDensity} {...project} />
  )), [projects, glitchyTextDensity])

  return (
    <div className="section-container flex flex-row flex-wrap justify-start gap-20 h-full items-stretch basis-0 overflow-hidden">
      {cards}
    </div>
  )
}

export default ProjectsDisplayer
