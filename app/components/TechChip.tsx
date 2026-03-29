import React from 'react'
import { SiMui, SiReact, SiGooglecloud, SiNodedotjs, SiLua, SiTailwindcss, SiGoogle, SiPython, SiPytorch, SiNumpy, SiFlutter, SiNextdotjs, SiDocker, SiSupabase, SiMetabase, SiN8N } from 'react-icons/si'
import { IoAccessibility, IoCalendar, IoReceipt, IoHeart } from 'react-icons/io5'
import { TbTools, TbRobot, TbServer } from 'react-icons/tb'

type TechChipProps = {
  name: string
  url?: string
  icon?: React.ReactNode
  color?: string
}

function TechChip({ name, icon, url, color }: TechChipProps) {
  return (
    <a className="cursor-pointer" target="_blank" rel="noreferrer" href={url}>
      <div className="flex flex-row gap-2 rounded-xl items-center justify-center px-2 py-1 border-[1px]" style={{ borderColor: color, color }}>
        <span className="uppercase text-2xs">{name}</span>
        {icon}
      </div>
    </a>
  )
}

export default TechChip

export const ReactChip = () => <TechChip name="React" color="rgb(8, 126, 164)" icon={<SiReact size={15} color="rgb(8, 126, 164)" />} url="https://react.dev/" />
export const ReactNativeChip = () => <TechChip name="React Native" color="rgb(8, 126, 164)" icon={<SiReact size={15} color="rgb(8, 126, 164)" />} url="https://reactnative.dev/" />
export const MuiChip = () => <TechChip name="Mui" color="#29b6f6" icon={<SiMui size={15} color="#29b6f6" />} url="https://mui.com/" />
export const StaffChip = () => <TechChip name="Gestion staff" color="#85C7F2" icon={<IoAccessibility size={15} color="#85C7F2" />} />
export const PlanningChip = () => <TechChip name="Opérationnel" color="#A8C686" icon={<IoCalendar size={15} color="#A8C686" />} />
export const AccountingChip = () => <TechChip name="Comptabilité" color="#ffe74c" icon={<IoReceipt size={15} color="#ffe74c" />} />
export const GoogleCloudChip = () => <TechChip name="Google Cloud" color="#1a73e8" icon={<SiGooglecloud size={15} color="#1a73e8" />} url="https://cloud.google.com/storage/" />
export const NodejsChip = () => <TechChip name="Node.js" color="rgb(44 104 44)" icon={<SiNodedotjs size={15} color="rgb(44 104 44)" />} url="https://nodejs.org/" />
export const LuaChip = () => <TechChip name="Lua" color="#000080" icon={<SiLua size={15} color="#000080" />} url="https://www.lua.org/" />
export const Love2DChip = () => <TechChip name="Love2D" color="#B1E3FA" icon={<IoHeart size={15} color="#B1E3FA" />} url="https://love2d.org/" />
export const TailwindChip = () => <TechChip name="Tailwind" color="#0ea5e9" icon={<SiTailwindcss size={15} color="#0ea5e9" />} url="https://tailwindcss.com/" />
export const GoogleAdminChip = () => <TechChip name="Google Admin" color="#1967d2" icon={<SiGoogle size={15} color="#1967d2" />} url="https://admin.google.com/" />
export const PythonChip = () => <TechChip name="Python" color="#ffe872" icon={<SiPython size={15} color="#ffe872" />} url="https://www.python.org/" />
export const PyTorchChip = () => <TechChip name="PyTorch" color="#ee4c2c" icon={<SiPytorch size={15} color="#ee4c2c" />} url="https://pytorch.org/" />
export const NumpyChip = () => <TechChip name="NumPy" color="#4dabcf" icon={<SiNumpy size={15} color="#4dabcf" />} url="https://numpy.org/" />
export const FlutterChip = () => <TechChip name="Flutter" color="#2472d6" icon={<SiFlutter size={15} color="#2472d6" />} url="https://flutter.dev/" />
export const ConceptionChip = () => <TechChip name="Conception" color="#c211b3" icon={<TbTools size={15} color="#c211b3" />} />
export const NextjsChip = () => <TechChip name="Next.js" color="#fff" icon={<SiNextdotjs size={15} color="#fff" />} url="https://nextjs.org/" />
export const DockerChip = () => <TechChip name="Docker" color="#2496ED" icon={<SiDocker size={15} color="#2496ED" />} url="https://www.docker.com/" />
export const SupabaseChip = () => <TechChip name="Supabase" color="#3ECF8E" icon={<SiSupabase size={15} color="#3ECF8E" />} url="https://supabase.com/" />
export const MetabaseChip = () => <TechChip name="Metabase" color="#509EE3" icon={<SiMetabase size={15} color="#509EE3" />} url="https://www.metabase.com/" />
export const AIChip = () => <TechChip name="AI Agents" color="#a78bfa" icon={<TbRobot size={15} color="#a78bfa" />} />
export const InfraChip = () => <TechChip name="Infrastructure" color="#f59e0b" icon={<TbServer size={15} color="#f59e0b" />} />
export const N8nChip = () => <TechChip name="n8n" color="#ea4b71" icon={<SiN8N size={15} color="#ea4b71" />} url="https://n8n.io/" />
