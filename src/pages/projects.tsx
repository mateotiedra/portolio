import React from "react";
import okaloHomeBoomerang from '../assets/projects/okalo/home-boomerang.gif';
import { ExpressChip, MuiChip, ReactChip } from '../components/TechChip.tsx';

export type ProjectProps = {
    title: string;
    id: string;
    subtitle?: string;
    lilTags?: Record<string, string>;
    techTags?: React.JSX.Element[];
    link?: string;
    preview?: string;
    description: React.JSX.Element;
    color: string;
}

export const projects: ProjectProps[] = [
    {
        title: 'Okalo.ch',
        id: 'okalo',
        subtitle: 'Bourse aux livres en ligne',
        lilTags: {
            'Depuis': '2022',
            'Utilisateurs': '500',
            'Livres vendus': '200',
            'Livres en vente': '5000'
        },
        techTags: [<ReactChip />, <ExpressChip />, <MuiChip />],
        link: 'https://www.okalo.ch/',
        preview: okaloHomeBoomerang,
        color: '#0496FF',
        description: <p>
            Utilisé dans plus d'une dizaine de collèges genevois, <a href='https://www.okalo.ch/' target='_blank'>Okalo</a> facilite
            l'achat et la vente de livres d'occasion pour les étudiants, leur permettant ainsi de faire des économies et de donner une seconde vie à leurs bouquins inutilisés.
        </p>
    },
    {
        title: 'LÜMM C',
        id: 'lummc',
        subtitle: 'Défilé, concerts & DJ sets',
        lilTags: {
            'Date': '11.05.22',
            'Participants': '700',
            'Staffs': '46',
            'Bière': 'CHF2'
        },
        link: 'https://www.lumm.love/',
        preview: okaloHomeBoomerang,
        color: 'rgb(205, 24, 27)',
        description: <p>
            Troisième soirée organisée par <a href='https://www.lumm.love/' target='_blank'>LÜMM</a>, une association que nous avons officielement fondée début 2024 avec Kake, Loulou, Noa, Hamousz, Kerem & Tonio.
            <br />
            Avec la participation du bar <a href='https://satellite.bar/' target='_blank'>Satellite</a> et <a href='https://artepoly.agepoly.ch/' target='_blank'>ArtePoly</a> de l'EPFL.
            Soutenue par la brasserie <a href='https://lanebuleuse.ch/' target='_blank'>La Nébuleuse</a> et <a href='https://www.eltonymate.com/' target='_blank'>El Tony Mate</a>
        </p>
    },
];
