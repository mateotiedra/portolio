import React from 'react'
import {
  AccountingChip, ConceptionChip, FlutterChip, GoogleAdminChip, GoogleCloudChip,
  Love2DChip, LuaChip, MuiChip, NodejsChip, NumpyChip, PlanningChip,
  PythonChip, PyTorchChip, ReactChip, ReactNativeChip, StaffChip, TailwindChip
} from './TechChip'

export type ProjectProps = {
  title: string
  id: string
  subtitle?: string
  lilTags?: Record<string, string>
  techTags?: React.ReactNode[]
  link?: string
  preview?: string[]
  description: React.ReactNode
  color: string
  status: string
  instaUrl?: string
  since?: string
  categories?: string[]
}

export const projectsEn: ProjectProps[] = [
  {
    subtitle: 'Lead developer',
    title: 'Iglow',
    id: 'iglow',
    lilTags: { 'Team': 'of 7' },
    techTags: [<FlutterChip key="f" />, <ReactChip key="r" />, <ConceptionChip key="c" />],
    preview: ['videos/iglow.mp4'],
    color: '#dc0028',
    description: <p>The Iglow smart jacket is a project that aims to improve the safety of cyclists by making them more visible at night. The jacket signals the cyclist&apos;s intentions to other road users by displaying light patterns on the back of the jacket. I was mainly responsible of the website and the phone app that allows the user to customize the light patterns.</p>,
    status: 'Released soon',
    categories: ['dev'],
    link: 'https://iglow.swiss/',
  },
  {
    subtitle: 'Development of',
    title: 'Super S8000',
    id: 'ss8000',
    lilTags: { 'Work time': '8 weeks', 'Budget': 'CHF270', 'Engines': '6', 'Team': 'of 6' },
    techTags: [<ConceptionChip key="c" />, <PythonChip key="p" />, <PyTorchChip key="pt" />, <NumpyChip key="n" />],
    preview: ['videos/ss8.mp4'],
    color: '#01a63e',
    description: <p>The <a href="https://github.com/epfl-cs358/2024fa-superscanner8000" target="_blank" rel="noreferrer">SuperScanner8000</a> is a robot that scans a selected object in 3D. It moves to take photos from different angles, which it uses in <a href="https://repo-sam.inria.fr/fungraph/3d-gaussian-splatting/" target="_blank" rel="noreferrer">3DGS</a> for 3D model reconstruction. Object detection is done via <a href="https://github.com/Gy920/segment-anything-2-real-time" target="_blank" rel="noreferrer">a variant of Segment Anything 2</a>.</p>,
    status: 'Completed',
    since: 'December 2024',
    categories: ['academic', 'dev'],
  },
  {
    title: 'La NDLM 24',
    id: 'ndlm24',
    subtitle: 'Operations Manager',
    lilTags: { 'Date': '05.10.24', 'Participants': '2400', 'Staffs': '180', 'Bars': '4', 'Stages': '2' },
    techTags: [<StaffChip key="s" />, <PlanningChip key="p" />],
    preview: ['videos/ndlm24.mp4'],
    color: '#c3a36a',
    description: <p>The <a href="https://nuit-de-la-magistrale.ch/" target="_blank" rel="noreferrer">Nuit de La Magistrale</a> is the official event concluding the master&apos;s degree graduation ceremony of <a href="https://www.epfl.ch/" target="_blank" rel="noreferrer">EPFL</a>. Organizing an event of this scale at the <a href="https://www.stcc.ch/" target="_blank" rel="noreferrer">Swisstech Convention Center</a> is a significant technical and logistical challenge. As the operations manager, I was responsible for coordinating the setup/teardown of the site and recruiting and managing the 180 volunteers.</p>,
    status: 'Former committee Member',
    instaUrl: 'https://www.instagram.com/ndlm_epfl/',
    categories: ['assoc'],
  },
  {
    title: 'Lümm x 2221',
    id: 'lummx2221',
    subtitle: 'DJ sets & LED panels',
    lilTags: { 'Date': '28.09.24', 'DJs': '6', 'Participants': '500', 'Staffs': '20', 'Beer': 'CHF3' },
    techTags: [<StaffChip key="s" />, <AccountingChip key="a" />],
    preview: ['videos/lummx2221.mp4'],
    color: 'silver',
    description: <p>Fourth edition of the <a href="https://www.lumm.love/" target="_blank" rel="noreferrer">LÜMM</a> organized in close collaboration with <a href="https://2221.ch/" target="_blank" rel="noreferrer">2221.ch</a>. First edition where we showcase our new LED panels, visuals and VJing by <a href="https://www.instagram.com/stories/b0nk_13" target="_blank" rel="noreferrer">b0nk</a>.<br/>Supported by the brewery <a href="https://lanebuleuse.ch/" target="_blank" rel="noreferrer">La Nébuleuse</a> and <a href="https://www.eltonymate.com/" target="_blank" rel="noreferrer">El Tony Mate</a>.</p>,
    status: 'Big banger',
    instaUrl: 'https://www.instagram.com/lumm.love/',
    categories: ['assoc'],
  },
  {
    title: 'Artiphys',
    id: 'artiphys-website',
    subtitle: 'Webmaster at',
    lilTags: { 'Events': '4', 'Festival-goers': '1200', 'Committee members': '29' },
    techTags: [<ReactChip key="r" />, <TailwindChip key="t" />, <GoogleAdminChip key="g" />],
    link: 'https://artiphys.ch/',
    preview: ['videos/artiphys.mp4'],
    color: '#f9a5ee',
    description: <p>Committee member of the association <a href="https://www.artiphys.ch/" target="_blank" rel="noreferrer">Artiphys</a> for this 2025 edition. Redesign of the website to match the new artistic direction and the new committee. Management of entries and ticketing for each event.</p>,
    status: 'Committee Member',
    instaUrl: 'https://www.instagram.com/artiphysfestival/',
    since: 'June 2024',
    categories: ['assoc', 'dev'],
  },
  {
    title: 'Okalo.ch',
    id: 'okalo',
    subtitle: 'Online book exchange',
    lilTags: { 'Users': '650', 'Books sold': '300', 'Books for sale': '6000' },
    techTags: [<ConceptionChip key="c" />, <ReactChip key="r" />, <NodejsChip key="n" />, <MuiChip key="m" />],
    link: 'https://www.okalo.ch/',
    preview: ['videos/okalo.mp4'],
    color: '#0496FF',
    description: <p>Used in more than a dozen Geneva colleges, <a href="https://www.okalo.ch/" target="_blank" rel="noreferrer">Okalo</a> facilitates the purchase and sale of second-hand books for students, allowing them to save money and give a second life to their unused books.</p>,
    status: 'Active',
    instaUrl: 'https://www.instagram.com/okalo.ch/',
    since: '2022',
    categories: ['dev'],
  },
  {
    title: 'LÜMM C',
    id: 'lummc',
    subtitle: 'Parade, concerts & DJ sets',
    lilTags: { 'Date': '11.05.24', 'Participants': '700', 'Staffs': '46', 'Beer': 'CHF2' },
    link: 'https://www.lumm.love/',
    preview: ['videos/lummc.mp4'],
    color: 'rgb(205, 24, 27)',
    techTags: [<StaffChip key="s" />, <PlanningChip key="p" />, <AccountingChip key="a" />],
    description: <p>Third edition of <a href="https://www.lumm.love/" target="_blank" rel="noreferrer">LÜMM</a>, an association that we officially founded in early 2024 with six friends.<br/>With the participation of the bar <a href="https://satellite.bar/" target="_blank" rel="noreferrer">Satellite</a> and <a href="https://artepoly.agepoly.ch/" target="_blank" rel="noreferrer">ArtePoly</a> from EPFL. Supported by the brewery <a href="https://lanebuleuse.ch/" target="_blank" rel="noreferrer">La Nébuleuse</a> and <a href="https://www.eltonymate.com/" target="_blank" rel="noreferrer">El Tony Mate</a></p>,
    status: 'Big success',
    instaUrl: 'https://www.instagram.com/lumm.love/',
    categories: ['assoc'],
  },
  {
    title: 'Morii',
    id: 'morii',
    subtitle: 'Shared photodump',
    lilTags: { 'Tested at': 'lümm c', 'Photos shared': '200' },
    link: 'https://morii.lumm.love/',
    preview: ['videos/morii.mp4'],
    color: 'white',
    techTags: [<ConceptionChip key="c" />, <GoogleCloudChip key="gc" />, <ReactChip key="r" />, <NodejsChip key="n" />],
    description: <p>The main goal of this project was to replace the famous <span style={{ fontStyle: 'italic' }}>&quot;Send your photos to the group.&quot;</span><br/><a href="https://morii.lumm.love/" target="_blank" rel="noreferrer">Morii</a> is a photo-sharing platform that allows you to remember the good times with sorted photos and no loss of quality.</p>,
    status: 'On hold',
    since: 'May 2024',
    categories: ['dev'],
  },
  {
    title: 'Dasher',
    id: 'dasher',
    subtitle: 'Mobile game',
    lilTags: { 'Platform': 'Android', 'Downloads': '60' },
    preview: ['videos/dasher.mp4'],
    color: '#d0b0e7',
    techTags: [<LuaChip key="l" />, <Love2DChip key="lv" />],
    description: <p>Addictive mobile game developed during covid. I was in contact with a representative of <a href="https://lionstudios.cc/" target="_blank" rel="noreferrer">LionStudios</a> who was interested in publishing the game. However, after a testing phase, player feedback was not positive enough, and the project was not pursued.</p>,
    status: 'Failure',
    since: '2020',
    categories: ['dev'],
  },
  {
    title: 'Parkeur',
    id: 'parkeur',
    subtitle: 'Mobile app',
    lilTags: { 'Platform': 'Android', 'Released on': 'Google Play' },
    preview: ['videos/parkeur.mp4'],
    color: '#4c63ec',
    techTags: [<ConceptionChip key="c" />, <ReactNativeChip key="rn" />],
    description: <p>A mobile app designed to help users learn language vocabulary. The app adapts its learning mode to match the user&apos;s current knowledge of the vocabulary. It also allows users to scan vocabulary lists for seamless integration.</p>,
    status: 'Finished',
    since: '2019',
    categories: ['dev'],
  },
]
