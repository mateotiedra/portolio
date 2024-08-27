import React, { useMemo } from 'react'
import { ProjectProps } from "../../pages/projects";
import GlitchyTextContainer from "../GlitchyTextContainer";
import { RiInstagramFill, RiExternalLinkFill } from "react-icons/ri";

type ProjectCardProps = ProjectProps & {
    glitchyTextDensity: number,
    color: string,
}

const getBlob = (color: string) => {
    const blobs = [
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill={color} d="M34.6,-27.4C40.1,-20.6,36.6,-6.5,33.2,7.3C29.8,21.1,26.5,34.6,14.9,45.9C3.3,57.2,-16.5,66.3,-27.6,59.9C-38.8,53.6,-41.3,31.8,-47.3,9.6C-53.3,-12.6,-62.9,-35.2,-55.6,-42.4C-48.3,-49.6,-24.2,-41.5,-4.8,-37.6C14.5,-33.8,29,-34.3,34.6,-27.4Z" transform="translate(100 100)" />
        </svg>,
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill={color} d="M62.5,-50.9C77.7,-30.7,84.6,-4.9,79,17.4C73.4,39.7,55.3,58.5,35.6,64.3C15.8,70.1,-5.5,63,-18.6,51.7C-31.7,40.4,-36.5,24.9,-37,11.6C-37.5,-1.7,-33.7,-12.8,-26.9,-31C-20,-49.3,-10,-74.6,6.8,-80.1C23.6,-85.5,47.3,-71,62.5,-50.9Z" transform="translate(100 100)" />
        </svg>,
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill={color} d="M31.9,-45.6C35.1,-35.3,27.2,-19.3,32,-3.9C36.8,11.6,54.4,26.5,55.1,38C55.8,49.4,39.8,57.3,23.2,63.1C6.5,69,-10.7,72.8,-17.4,63.5C-24.1,54.2,-20.4,31.9,-21.1,18.2C-21.8,4.5,-26.9,-0.6,-32,-11.5C-37.1,-22.5,-42.1,-39.4,-36.8,-49.3C-31.5,-59.2,-15.7,-62.2,-0.7,-61.3C14.3,-60.5,28.6,-55.8,31.9,-45.6Z" transform="translate(100 100)" />
        </svg>,
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill={color} d="M55.2,-57.1C67.8,-55.2,71.7,-34.2,65.8,-18.8C59.9,-3.4,44.3,6.6,36.7,22.6C29.2,38.6,29.6,60.7,20.7,69.4C11.7,78.1,-6.6,73.4,-20.7,64.8C-34.8,56.3,-44.5,43.8,-55.5,29.6C-66.5,15.5,-78.8,-0.3,-77.1,-14.2C-75.3,-28.1,-59.6,-40.1,-44.4,-41.6C-29.2,-43.1,-14.6,-34.1,3.3,-38.1C21.3,-42.1,42.6,-59.1,55.2,-57.1Z" transform="translate(100 100)" />
        </svg>
    ]

    return blobs[Math.floor(Math.random() * blobs.length)]
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
    instaUrl,
    since
}: ProjectCardProps) {
    const blob = useMemo(() => getBlob(color), [color])

    return <div className='max-w-[600px] h-full flex flex-col justify-between relative'>
        <div className='fixed top-0 left-0 w-[100vw] h-[100vh] -z-10 '
            style={{
                backdropFilter: 'blur(100px)',
            }}>
        </div>
        <div className='flex flex-col sm:flex-row items-center gap-6 '>
            <div className='basis-auto sm:basis-2/3'>
                <div className='absolute w-[180%] h-[180%] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 -z-20 opacity-25'>
                    <div className='relative w-full h-full flex justify-center items-center -top-48 sm:top-0'>
                        {blob}
                    </div>
                </div>

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
                <a href={link} target='_blank' rel="noreferrer">
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
                <p>Statut : <span className='capitalize text-white'>{status}</span>{!!since && <> depuis <span className=' text-white'>{since}</span></>}</p>
                <div className='flex flex-row gap-2 items-center'>
                    {instaUrl && <a href={instaUrl}><RiInstagramFill color='white' size={28} /></a>}
                    {link && <a href={link} target='_blank' rel="noreferrer"><div className='p-[2px] bg-white color-black rounded-sm'><RiExternalLinkFill color='black' size={20} /></div></a>}
                </div>
            </div>
        </div>
    </div >
}

export default ProjectCard;