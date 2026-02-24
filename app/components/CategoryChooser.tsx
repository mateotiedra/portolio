'use client'

import { useCallback, useMemo, useState, useEffect } from 'react'
import { projectsEn } from './projects'
import GlitchyTextContainer from './GlitchyTextContainer'
import { ProjectProps } from './projects'

const SelectedChip = ({ onClick, selected, text, color }: { onClick: () => void, selected: boolean, text: string, color: string }) => (
  <div
    className="flex flex-row gap-2 rounded-xl items-center justify-center px-2 py-1 border-[1px] cursor-pointer z-30"
    style={{ borderColor: color, background: selected ? color : 'transparent' }}
    onClick={onClick}
  >
    <span className="uppercase text-xs" style={{ color: selected ? 'black' : color }}>
      {text}
    </span>
  </div>
)

function CategoryChooser({ categories, setShownProjects, glitchyTextDensity }: {
  categories?: string[]
  setShownProjects: (p: ProjectProps[]) => void
  glitchyTextDensity: number
}) {
  const projects = projectsEn
  const projectsColor = useMemo(() => projects.map((proj) => proj.color), [projects])
  const randomColors = useMemo(() => {
    const shuffled = [...projectsColor].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, 4)
  }, [projectsColor])

  const [selectedCategories, setSelectedCategories] = useState(['all'])

  const onChipClick = useCallback((category: string) => () => {
    if (category === 'all') {
      setSelectedCategories(['all'])
    } else {
      setSelectedCategories((prev) => {
        if (prev.includes('all')) return [category]
        if (prev.includes(category)) return prev.filter((c) => c !== category)
        return [...prev, category]
      })
    }
  }, [])

  useMemo(() => {
    setShownProjects(
      projects.filter((proj) => {
        if (selectedCategories.includes('all')) return true
        return selectedCategories.some((cat) => proj.categories?.includes(cat))
      })
    )
  }, [selectedCategories, setShownProjects, projects])

  useEffect(() => {
    if (typeof window !== 'undefined' && (window.location.href.includes('cv') || window.location.href.includes('dev'))) {
      setSelectedCategories(['dev', 'academic'])
    }
  }, [])

  return (
    <div className="section-container flex flex-col md:flex-row items-center gap-4">
      <GlitchyTextContainer colors={projectsColor} variant="h3" density={glitchyTextDensity + 0.04}>
        Project Categories :
      </GlitchyTextContainer>
      <div className="flex flex-wrap justify-start gap-2 relative top-[-3px]">
        <SelectedChip text="Dev" color={randomColors[0]} selected={selectedCategories.includes('dev')} onClick={onChipClick('dev')} />
        <SelectedChip text="Academic" color={randomColors[1]} selected={selectedCategories.includes('academic')} onClick={onChipClick('academic')} />
        <SelectedChip text="Association" color={randomColors[2]} selected={selectedCategories.includes('assoc')} onClick={onChipClick('assoc')} />
        <SelectedChip text="All" color={randomColors[3]} selected={selectedCategories.includes('all')} onClick={onChipClick('all')} />
      </div>
    </div>
  )
}

export default CategoryChooser
