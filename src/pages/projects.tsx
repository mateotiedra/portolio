import React from "react";
import OkaloPreview1 from '../assets/images/okalo/preview-1.gif';
import LummcPreview1 from '../assets/images/lummc/preview-1.gif';
import MoriiPreview1 from '../assets/images/morii/preview-1.gif';
import MoriiPreview2 from '../assets/images/morii/preview-2.gif';
import { AccountingChip, GoogleCloudChip, MuiChip, NodejsChip, PlanningChip, ReactChip, StaffChip } from '../components/TechChip.tsx';
import { importAllImageFromFolder } from "../helpers/index.js";

export type ProjectProps = {
    title: string;
    id: string;
    subtitle?: string;
    lilTags?: Record<string, string>;
    techTags?: React.JSX.Element[];
    link?: string;
    preview?: string[];
    description: React.JSX.Element;
    color: string;
    status: string;
    instaUrl?: string;
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
        techTags: [<ReactChip />, <NodejsChip />, <MuiChip />],
        link: 'https://www.okalo.ch/',
        preview: [OkaloPreview1],
        color: '#0496FF',
        description: <p>
            Utilisé dans plus d'une dizaine de collèges genevois, <a href='https://www.okalo.ch/' target='_blank' rel="noreferrer">Okalo</a> facilite
            l'achat et la vente de livres d'occasion pour les étudiants, leur permettant ainsi de faire des économies et de donner une seconde vie à leurs bouquins inutilisés.
        </p>,
        status: 'actif',
        instaUrl: 'https://www.instagram.com/okalo.ch/',
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
        preview: [LummcPreview1],
        color: 'rgb(205, 24, 27)',
        techTags: [<StaffChip />, <PlanningChip />, <AccountingChip />],
        description: <p>
            Troisième édition de la <a href='https://www.lumm.love/' target='_blank' rel="noreferrer">LÜMM</a>, une association que nous avons officielement fondée début 2024 avec Kake, Loulou, Noa, Hamousz, Kerem & Tonio.
            <br />
            Avec la participation du bar <a href='https://satellite.bar/' target='_blank' rel="noreferrer">Satellite</a> et <a href='https://artepoly.agepoly.ch/' target='_blank' rel="noreferrer">ArtePoly</a> de l'EPFL.
            Soutenue par la brasserie <a href='https://lanebuleuse.ch/' target='_blank' rel="noreferrer">La Nébuleuse</a> et <a href='https://www.eltonymate.com/' target='_blank' rel="noreferrer">El Tony Mate</a>
        </p>,
        status: 'terminé',
        instaUrl: 'https://www.instagram.com/lumm.love/',
    },
    {
        title: 'Morii',
        id: 'morii',
        subtitle: 'Photodump partagé',
        lilTags: {
            'Testé à': 'lümm c',
            'Photos partagées': '200',
        },
        link: 'https://morii.lumm.love/',
        preview: [MoriiPreview2, MoriiPreview1],
        color: 'white',
        techTags: [<GoogleCloudChip />, <ReactChip />, <NodejsChip />],
        description: <p>
            Le but principal de ce projet était de remplacer les fameux <span style={{ fontStyle: 'italic' }}>"Envoyez vos photos sur le groupe."</span><br />
            <a href='https://morii.lumm.love/' target='_blank' rel="noreferrer">Morii</a> est
            une plateforme de partage de photos qui permet de se souvenir des bons moments grâce à des photos triées et sans perte de qualité.
        </p>,
        status: 'en pause',
    },
];
