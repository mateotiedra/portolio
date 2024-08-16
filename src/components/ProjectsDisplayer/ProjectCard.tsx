import React from 'react'
import { ProjectProps } from "../../pages/projects";
import GlitchyTextContainer from "../GlitchyTextContainer";

type ProjectCardProps = ProjectProps & {
    glitchyTextDensity: number,
    color: string,
}

function ProjectCard({
    title,
    subtitle,
    lilTags,
    techTags,
    glitchyTextDensity,
    preview,
    color,
    description
}: ProjectCardProps) {

    return <div className='max-w-[600px]'>
        <div className='flex flex-col sm:flex-row  items-start gap-6 '>
            <div className='basis-2/3'>
                <GlitchyTextContainer color={color} variant='h4' density={glitchyTextDensity}>
                    {subtitle}
                </GlitchyTextContainer>
                <GlitchyTextContainer color={color} variant='h2' density={glitchyTextDensity / 1.2 + 0.1}>
                    {title}
                </GlitchyTextContainer>

                {React.cloneElement(description, { style: { ['--primary-color']: color }, className: 'styled-link' })}
                <div className='flex flex-row flex-wrap justify-start py-3 gap-2'>
                    {techTags}
                </div>
            </div>
            <div className='rounded-xl overflow-hidden basis-1/3 mx-10 sm:mx-0'>
                <img src={preview} />
            </div>
        </div>
        <div className='flex flex-row flex-wrap justify-between w-full mt-6 gap-4' >
            {Object.entries(lilTags || {}).map(([key, value]) =>
                <div>
                    <h4 className='text-base leading-3 pb-1'>{key}</h4>
                    <GlitchyTextContainer className='text-2xl leading-2 font-normal pb-0' density={glitchyTextDensity} color={color}>
                        <h2 >{value}</h2>
                    </GlitchyTextContainer>
                </div>
            )}
        </div>
    </div>
}

export default ProjectCard;