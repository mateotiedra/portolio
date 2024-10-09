import React from "react";

import { AccountingChip, GoogleAdminChip, GoogleCloudChip, Love2DChip, LuaChip, MuiChip, NodejsChip, PlanningChip, ReactChip, StaffChip, TailwindChip } from '../components/TechChip.tsx';

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
    since?: string;
}

export const projects: ProjectProps[] = [
    {
        title: 'Lümm x 2221',
        id: 'lummx2221',
        subtitle: 'DJ sets & Panneaux leds',
        lilTags: {
            'Date': '28.09.24',
            'DJ': '6',
            'Participants': '500',
            'Staff': '20',
            'Bière': 'CHF3',
        },
        techTags: [<StaffChip />, <AccountingChip />],
        preview: ['videos/lummx2221.mp4'],
        color: 'silver',
        description: <p>
            Quatrième édition de la <a href='https://www.lumm.love/' target='_blank' rel="noreferrer">LÜMM</a> organisée en collaboration direct avec <a href='https://2221.ch/' target='_blank' rel="noreferrer">2221</a>.
            Soutenue par la brasserie <a href='https://lanebuleuse.ch/' target='_blank' rel="noreferrer">La Nébuleuse</a> et < a href='https://www.eltonymate.com/' target='_blank' rel="noreferrer" > El Tony Mate</a ></p>,
        status: 'Gros banger',
        instaUrl: 'https://www.instagram.com/lumm.love/',
    },
    {
        title: 'Artiphys',
        id: 'artiphys-website',
        subtitle: 'Webmaster à',
        lilTags: {
            'Events': '4',
            'Festivalier.x.s': '1200',
            'Membres du comité': '29',
        },
        techTags: [<ReactChip />, <TailwindChip />, <GoogleAdminChip />],
        link: 'https://artiphys.ch/',
        preview: ['videos/artiphys.mp4'],
        color: '#f9a5ee',
        description: <p>
            Membre du comité de l'association <a href='https://www.artiphys.ch/' target='_blank' rel="noreferrer">Artiphys</a> pour cette éditon 2025. J'ai refait le site web pour le faire correspondre au nouveau comité et à la nouvelle direction artistique. Je gère également toute la partie gestion du Google Workspace partagé par les membres du comité.</p>,
        status: 'Membre du comité',
        instaUrl: 'https://www.instagram.com/artiphysfestival/',
        since: 'Juin 2024'
    },
    {
        title: 'Okalo.ch',
        id: 'okalo',
        subtitle: 'Bourse aux livres en ligne',
        lilTags: {
            'Utilisateurs': '650',
            'Livres vendus': '300',
            'Livres en vente': '6000'
        },
        techTags: [<ReactChip />, <NodejsChip />, <MuiChip />],
        link: 'https://www.okalo.ch/',
        preview: ['videos/okalo.mp4'],
        color: '#0496FF',
        description: <p>
            Utilisé dans plus d'une dizaine de collèges genevois, <a href='https://www.okalo.ch/' target='_blank' rel="noreferrer">Okalo</a> facilite
            l'achat et la vente de livres d'occasion pour les étudiants, leur permettant ainsi de faire des économies et de donner une seconde vie à leurs bouquins inutilisés.
        </p>,
        status: 'Actif',
        instaUrl: 'https://www.instagram.com/okalo.ch/',
        since: '2022'
    },
    {
        title: 'LÜMM C',
        id: 'lummc',
        subtitle: 'Défilé, concerts & DJ sets',
        lilTags: {
            'Date': '11.05.24',
            'Participants': '700',
            'Staffs': '46',
            'Bière': 'CHF2'
        },
        link: 'https://www.lumm.love/',
        preview: ['videos/lummc.mp4'],
        color: 'rgb(205, 24, 27)',
        techTags: [<StaffChip />, <PlanningChip />, <AccountingChip />],
        description: <p>
            Troisième édition de la <a href='https://www.lumm.love/' target='_blank' rel="noreferrer">LÜMM</a>, une association que nous avons officielement fondée début 2024 avec Kake, Loulou, Noa, Hamousz, Kerem & Tonio.
            <br />
            Avec la participation du bar <a href='https://satellite.bar/' target='_blank' rel="noreferrer">Satellite</a> et <a href='https://artepoly.agepoly.ch/' target='_blank' rel="noreferrer">ArtePoly</a> de l'EPFL.
            Soutenue par la brasserie <a href='https://lanebuleuse.ch/' target='_blank' rel="noreferrer">La Nébuleuse</a> et <a href='https://www.eltonymate.com/' target='_blank' rel="noreferrer">El Tony Mate</a>
        </p>,
        status: 'Big succès',
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
        preview: ['videos/morii.mp4'],
        color: 'white',
        techTags: [<GoogleCloudChip />, <ReactChip />, <NodejsChip />],
        description: <p>
            Le but principal de ce projet était de remplacer les fameux <span style={{ fontStyle: 'italic' }}>"Envoyez vos photos sur le groupe."</span><br />
            <a href='https://morii.lumm.love/' target='_blank' rel="noreferrer">Morii</a> est
            une plateforme de partage de photos qui permet de se souvenir des bons moments grâce à des photos triées et sans perte de qualité.
        </p>,
        status: 'En pause',
        since: 'mai 2024'
    },
    {
        title: 'Dasher',
        id: 'dasher',
        subtitle: 'Jeu mobile',
        lilTags: {
            'Plateforme': 'Android',
            'Téléchargement': '60',
        },
        preview: ['videos/dasher.mp4'],
        color: '#d0b0e7',
        techTags: [<LuaChip />, <Love2DChip />],
        description: <p>
            Jeu mobile addictif développé pendant le covid. J'ai été en contact avec un représentant de <a href='https://lionstudios.cc/' target='_blank' rel="noreferrer">LionStudios</a> qui s'était montré intéressé par la publication du jeu. Cependant, après une phase de test, les retours des joueurs n'ont pas été suffisamment positifs, et le projet n'a pas été poursuivi.
        </p>,
        status: 'Échec  ',
        since: '2020'
    },
];
