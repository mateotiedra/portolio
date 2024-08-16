import { ReactNode } from "react";

type ProjectProps = {
    title: string;
    id: string;
    subtitle?: string;
    lilTags?: Record<string, string>
    techTags?: string[],
    link?: string,
    previews?: ReactNode[]
}

const projects: ProjectProps[] = [
    {
        title: 'Okalo',
        id: 'okalo',
        subtitle: 'Bourse aux livres en ligne',
        lilTags: { ['Sorti en ']: '2022' },
        techTags: ['React', 'Express', 'Node', 'MUI'],
        link: 'https://www.okalo.ch/',
    },
]

export default projects;