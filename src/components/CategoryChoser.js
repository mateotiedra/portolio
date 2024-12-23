import { useCallback, useMemo, useState, useEffect } from 'react';

import { projectsFr, projectsEn } from '../pages/projects.tsx';

import GlitchyTextContainer from './GlitchyTextContainer/index.js';

const SelectedChip = ({ onClick, selected, text, color }) => {
  return (
    <div
      className='flex flex-row gap-2 rounded-xl items-center justify-center px-2 py-1 border-[1px] cursor-pointer z-30'
      style={{
        borderColor: color,
        background: selected ? color : 'transparent',
      }}
      onClick={onClick}
    >
      <span
        className='uppercase text-xs'
        style={{
          color: selected ? 'black' : color,
        }}
      >
        {text}
      </span>
    </div>
  );
};

function CategoryChooser({
  categories,
  setShownProjects,
  glitchyTextDensity,
  fr,
}) {
  const projects = useMemo(() => (fr ? projectsFr : projectsEn), [fr]);
  const projectsColor = useMemo(
    () => projects.map((proj) => proj.color),
    [projects]
  );

  const randomColors = useMemo(() => {
    const shuffledColors = [...projectsColor].sort(() => 0.5 - Math.random());
    return shuffledColors.slice(0, 4);
  }, [projectsColor]);

  const [selectedCategories, setSelectedCategories] = useState(['all']);

  const onChipClick = useCallback(
    (category) => () => {
      if (category === 'all') {
        setSelectedCategories(['all']);
      } else {
        setSelectedCategories((prevSelected) => {
          if (prevSelected.includes('all')) {
            return [category];
          } else {
            if (prevSelected.includes(category)) {
              return prevSelected.filter((cat) => cat !== category);
            } else {
              return [...prevSelected, category];
            }
          }
        });
      }
    },
    []
  );

  useMemo(() => {
    setShownProjects(
      projects.filter((proj) => {
        if (selectedCategories.includes('all')) return true;
        return selectedCategories.filter((cat) => proj.categories.includes(cat))
          .length;
      })
    );
  }, [selectedCategories, setShownProjects, projects]);

  useEffect(() => {
    if (
      window.location.href.includes('cv') ||
      window.location.href.includes('dev')
    ) {
      setSelectedCategories(['dev', 'academic']);
    }
  }, []);

  return (
    <div className='section-container flex flex-col md:flex-row items-center gap-4'>
      <GlitchyTextContainer
        colors={projectsColor}
        variant='h3'
        density={glitchyTextDensity + 0.04}
      >
        {fr ? 'Type de projet' : 'Project Categories :'}
      </GlitchyTextContainer>
      <div className='flex flex-wrap justify-start gap-2 relative top-[-3px]'>
        <SelectedChip
          text='Dev'
          color={randomColors[0]}
          selected={selectedCategories.includes('dev')}
          onClick={onChipClick('dev')}
        />
        <SelectedChip
          text={fr ? 'Académique' : 'Academic'}
          color={randomColors[1]}
          selected={selectedCategories.includes('academic')}
          onClick={onChipClick('academic')}
        />
        <SelectedChip
          text='Association'
          color={randomColors[2]}
          selected={selectedCategories.includes('assoc')}
          onClick={onChipClick('assoc')}
        />
        {/* <SelectedChip
          category='personal'
          text='Personal'
          color={randomColors[2]}
        /> */}
        <SelectedChip
          text={fr ? 'Tout' : 'All'}
          color={randomColors[3]}
          selected={selectedCategories.includes('all')}
          onClick={onChipClick('all')}
        />
      </div>
    </div>
  );
}

export default CategoryChooser;
