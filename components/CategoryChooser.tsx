'use client'
import { useCallback, useMemo, useState, useEffect } from 'react';
import { projectsFr, projectsEn, ProjectProps } from './projects';
import GlitchyTextContainer from './GlitchyTextContainer';

const SelectedChip = ({ onClick, selected, text, color }: { onClick: () => void, selected: boolean, text: string, color: string }) => {
  return (
    <div
      className='flex flex-row gap-2 rounded-xl items-center justify-center px-2 py-1 border-[1px] cursor-pointer z-30'
      style={{ borderColor: color, background: selected ? color : 'transparent' }}
      onClick={onClick}
    >
      <span className='uppercase text-xs' style={{ color: selected ? 'black' : color }}>
        {text}
      </span>
    </div>
  );
};

function CategoryChooser({
  setShownProjects,
  glitchyTextDensity,
  fr,
}: {
  setShownProjects: (projects: ProjectProps[]) => void,
  glitchyTextDensity: number,
  fr?: boolean,
}) {
  const projects = useMemo(() => (fr ? projectsFr : projectsEn), [fr]);
  const projectsColor = useMemo(() => projects.map((proj) => proj.color), [projects]);
  const randomColors = useMemo(() => {
    const shuffled = [...projectsColor].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  }, [projectsColor]);

  const [selectedCategories, setSelectedCategories] = useState(['all']);

  const onChipClick = useCallback((category: string) => () => {
    if (category === 'all') {
      setSelectedCategories(['all']);
    } else {
      setSelectedCategories((prev) => {
        if (prev.includes('all')) return [category];
        if (prev.includes(category)) return prev.filter((c) => c !== category);
        return [...prev, category];
      });
    }
  }, []);

  useMemo(() => {
    setShownProjects(
      projects.filter((proj) => {
        if (selectedCategories.includes('all')) return true;
        return selectedCategories.some((cat) => proj.categories?.includes(cat));
      })
    );
  }, [selectedCategories, setShownProjects, projects]);

  useEffect(() => {
    if (typeof window !== 'undefined' && (window.location.href.includes('cv') || window.location.href.includes('dev'))) {
      setSelectedCategories(['dev', 'academic']);
    }
  }, []);

  return (
    <div className='section-container flex flex-col md:flex-row items-center gap-4'>
      <GlitchyTextContainer colors={projectsColor} variant='h3' density={glitchyTextDensity + 0.04}>
        {fr ? 'Type de projet' : 'Project Categories :'}
      </GlitchyTextContainer>
      <div className='flex flex-wrap justify-start gap-2 relative top-[-3px]'>
        <SelectedChip text='Dev' color={randomColors[0]} selected={selectedCategories.includes('dev')} onClick={onChipClick('dev')} />
        <SelectedChip text={fr ? 'Académique' : 'Academic'} color={randomColors[1]} selected={selectedCategories.includes('academic')} onClick={onChipClick('academic')} />
        <SelectedChip text='Association' color={randomColors[2]} selected={selectedCategories.includes('assoc')} onClick={onChipClick('assoc')} />
        <SelectedChip text={fr ? 'Tout' : 'All'} color={randomColors[3]} selected={selectedCategories.includes('all')} onClick={onChipClick('all')} />
      </div>
    </div>
  );
}

export default CategoryChooser;
