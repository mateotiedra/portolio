import React from 'react'
import { ProjectProps } from "../../pages/projects";
import GlitchyTextContainer from "../GlitchyTextContainer";
import { RiInstagramFill, RiExternalLinkFill } from "react-icons/ri";

type ProjectCardProps = ProjectProps & {
    glitchyTextDensity: number,
    color: string,
}

function ProjectCard({
    title,
    subtitle,
    lilTags,
    techTags,
    link,
    glitchyTextDensity,
    preview,
    color,
    description,
    status,
    instaUrl
}: ProjectCardProps) {

    return <div className='max-w-[600px] flex flex-col justify-between'>
        <div className='flex flex-col sm:flex-row items-center gap-6 '>
            <div className='basis-auto sm:basis-2/3'>
                <GlitchyTextContainer color={color} variant='h4' density={glitchyTextDensity}>
                    {subtitle}
                </GlitchyTextContainer>
                <GlitchyTextContainer color={color} variant='h2' density={glitchyTextDensity / 1.2 + 0.1}>
                    {title}
                </GlitchyTextContainer>

                {React.cloneElement(description, { style: { '--primary-color': color }, className: 'styled-link' })}
                <div className='flex flex-row flex-wrap justify-start py-3 gap-2'>
                    {techTags}
                </div>
            </div>
            <div className='rounded-xl overflow-hidden basis-auto sm:basis-1/3 mx-10 sm:mx-0'>
                <a href={link} target='_blank'>
                    <img src={preview?.[0]} alt='project preview' />
                </a>
            </div>
        </div>
        <div>
            <div className='flex flex-row flex-wrap justify-between mt-6 gap-y-4 relative w-full' >
                {Object.entries(lilTags || {}).map(([key, value]) =>
                    <div key={key} className='shrink w-[50%] sm:w-fit'>
                        <h4 className='text-base leading-3 pb-1'>{key}</h4>
                        <GlitchyTextContainer className='text-2xl leading-2 font-normal pb-0' density={glitchyTextDensity} color={color}>
                            <h2 >{value}</h2>
                        </GlitchyTextContainer>
                    </div>
                )}
            </div>
            <div className='border-[1px] border-white rounded-xl px-5 py-3 flex flex-row justify-between items-center gap-3 mt-6'>
                <p>Statut : <span className='capitalize text-white'>{status}</span></p>
                <div className='flex flex-row gap-2 items-center'>
                    {instaUrl && <a href={instaUrl}><RiInstagramFill color='white' size={28} /></a>}
                    <a href={link} target='_blank'><div className='p-[2px] bg-white color-black rounded-sm'><RiExternalLinkFill color='black' size={20} /></div></a>
                </div>
            </div>
        </div>


    </div>
}

export default ProjectCard;