import React from "react";
import okaloHomeBoomerang from '../assets/projects/okalo/home-boomerang.gif';
import { ExpressChip, MuiChip, ReactChip } from '../components/TechChip.tsx';


export type ProjectProps = {
    title: string;
    id: string;
    subtitle?: string;
    lilTags?: Record<string, string>
    techTags?: React.JSX.Element[],
    link?: string,
    preview?: string,
    description: React.JSX.Element,
    color: string,
}

export const projects: ProjectProps[] = [
    {
        title: 'Okalo.ch',
        id: 'okalo',
        subtitle: 'Bourse aux livres en ligne',
        lilTags: {
            ['Depuis']: '2022', 'Utilisateurs': '500', 'Livres vendus': '200', 'Livres en vente': '5000'
        },
        techTags: [<ReactChip />, <ExpressChip />, <MuiChip />],
        link: 'https://www.okalo.ch/',
        preview: okaloHomeBoomerang,
        color: '#0496FF',
        description: <p>
            Utilisé dans plus d'une dizaine de collège genevois, <a href='https://www.okalo.ch/' style={{ color: '#0496FF', fontWeight: 'bold', textDecoration: 'underline' }}>Okalo</a> facilite
            l'achat et la vente de livres d'occasion pour les étudiants, leur permettant ainsi de faire des économies et de donner une seconde vie à leurs bouquins inutilisés.
        </p>
    },
]