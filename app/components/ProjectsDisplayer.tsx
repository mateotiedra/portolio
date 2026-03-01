'use client'

import { useMemo } from 'react'
import { ProjectProps } from './projects'
import ProjectCard from './ProjectCard'

function ProjectsDisplayer({ projects, glitchyTextDensity }: { projects: ProjectProps[], glitchyTextDensity: number }) {
  const cards = useMemo(() => projects.map((project, id) => (
    <ProjectCard key={project.id} index={id} glitchyTextDensity={glitchyTextDensity} {...project} />
  )), [projects, glitchyTextDensity])

  return (
    <div className="flex flex-row flex-wrap justify-start gap-20 h-full items-stretch basis-0 overflow-hidden relative mt-12">
      <div className="fixed inset-0 -z-10" style={{ backdropFilter: 'blur(100px)', WebkitBackdropFilter: 'blur(100px)' }} />
      {cards}
    </div>
  )
}

export default ProjectsDisplayer
