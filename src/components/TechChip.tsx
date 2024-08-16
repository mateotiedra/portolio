import React from 'react'
import { SiExpress, SiMui, SiReact } from "react-icons/si";

type TechChipProps = {
    name: string,
    url?: string,
    icon?: React.JSX.Element
    color?: string
}

function TechChip({
    name,
    icon,
    url,
}: TechChipProps) {

    return <a className='cursore-pointer' target='_blank' href={url}>
        <div className='flex flex-row gap-2 rounded-xl items-center justify-center px-2 py-1 border-[1px]'>
            <span className='uppercase text-xs'>{name}</span>
            {icon}
        </div>
    </a>
}

export default TechChip;

export const ReactChip = () => <TechChip name='React' icon={<SiReact size={15} color={'rgb(8, 126, 164)'} />} url='https://react.dev/' />
export const ExpressChip = () => <TechChip name='Express' icon={<SiExpress size={15} />} url='https://expressjs.com/' />
export const MuiChip = () => <TechChip name='Mui' icon={<SiMui size={15} color='#29b6f6' />} url=' https://mui.com/' />
