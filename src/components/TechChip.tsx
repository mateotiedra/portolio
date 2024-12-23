import React from 'react'
import { SiExpress, SiMui, SiReact, SiGooglecloud, SiNodedotjs, SiLua, SiTailwindcss, SiGoogle, SiPython, SiPytorch, SiNumpy } from "react-icons/si";
import { IoAccessibility, IoCalendar, IoReceipt, IoHeart } from "react-icons/io5";

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

    return <a className='cursore-pointer' target='_blank' rel="noreferrer" href={url}>
        <div className='flex flex-row gap-2 rounded-xl items-center justify-center px-2 py-1 border-[1px]'>
            <span className='uppercase text-2xs'>{name}</span>
            {icon}
        </div>
    </a>
}

export default TechChip;

export const ReactChip = () => <TechChip name='React' icon={<SiReact size={15} color={'rgb(8, 126, 164)'} />} url='https://react.dev/' />
export const ExpressChip = () => <TechChip name='Express' icon={<SiExpress size={15} />} url='https://expressjs.com/' />
export const MuiChip = () => <TechChip name='Mui' icon={<SiMui size={15} color='#29b6f6' />} url='https://mui.com/' />
export const StaffChip = () => <TechChip name='Gestion staff' icon={<IoAccessibility size={15} color='#85C7F2' />} />
export const PlanningChip = () => <TechChip name='Opérationnel' icon={<IoCalendar size={15} color='#A8C686' />} />
export const AccountingChip = () => <TechChip name='Comptabilité' icon={<IoReceipt size={15} color='#ffe74c' />} />
export const GoogleCloudChip = () => <TechChip name='Google Cloud' icon={<SiGooglecloud size={15} color='#1a73e8' />} url='https://cloud.google.com/storage/' />
export const NodejsChip = () => <TechChip name='Node.js' icon={<SiNodedotjs size={15} color='rgb(44 104 44)' />} url='https://nodejs.org/' />
export const LuaChip = () => <TechChip name='Lua' icon={<SiLua size={15} color='#000080' />} url='https://www.lua.org/' />
export const Love2DChip = () => <TechChip name='Love2D' icon={<IoHeart size={15} color='#B1E3FA' />} url='https://love2d.org/' />
export const TailwindChip = () => <TechChip name='Tailwind' icon={<SiTailwindcss size={15} color='#0ea5e9' />} url='https://tailwindcss.com/' />
export const GoogleAdminChip = () => <TechChip name='Google Admin' icon={<SiGoogle size={15} color='#1967d2' />} url='https://admin.google.com/' />
export const PythonChip = () => <TechChip name='Python' icon={<SiPython size={15} color='#ffe872' />} url='https://www.python.org/' />
export const PyTorchChip = () => <TechChip name='PyTorch' icon={<SiPytorch size={15} color='#ee4c2c' />} url='https://pytorch.org/' />
export const NumpyChip = () => <TechChip name='NumPy' icon={<SiNumpy size={15} color='#4dabcf' />} url='https://numpy.org/' />

