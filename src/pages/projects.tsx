import React from "react";

import { AccountingChip, ConceptionChip, FlutterChip, GoogleAdminChip, GoogleCloudChip, Love2DChip, LuaChip, MuiChip, NodejsChip, NumpyChip, PlanningChip, PythonChip, PyTorchChip, ReactChip, StaffChip, TailwindChip } from '../components/TechChip.tsx';

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
    categories?: string[];
}

export const projectsFr: ProjectProps[] = [
    {
        subtitle: 'Développement du',
        title: 'Super S8000',
        id: 'lummx2221',
        lilTags: {
            'Temps de travail': '8 semaines',
            'Budget': 'CHF270',
            'Moteurs': '6',
            'Équipe': 'de 6',
        },
        techTags: [<PythonChip />, <PyTorchChip />, <NumpyChip />],
        preview: ['videos/ss8.mp4'],
        color: '#01a63e',
        description: <p>
            Le <a href='https://github.com/epfl-cs358/2024fa-superscanner8000' target='_blank' rel="noreferrer">SuperScanner8000</a> est un robot qui scanne en 3D un object selectionné. Il se déplace afin de prendre des photos sous différents angles, qu'il utilise dans <a href='https://repo-sam.inria.fr/fungraph/3d-gaussian-splatting/' target='_blank' rel="noreferrer">3DGS</a> pour la recontruction du modèle en 3D.
            La détection de l'objet se fait via <a href="https://github.com/Gy920/segment-anything-2-real-time" target="_blank" rel="noreferrer">une variante de Segment Anything 2</a>.

        </p>,
        status: 'Terminé',
        since: 'décembre 2024',
        instaUrl: 'https://www.instagram.com/ndlm_epfl/',
        categories: ['academic', 'dev']
    },
    {
        title: 'La NDLM 24',
        id: 'ndlm24',
        subtitle: 'Responsable opérations',
        lilTags: {
            'Date': '05.10.24',
            'Participants': '2400',
            'Staffs': '180',
            'Bars': '4',
            'Scènes': '2',
        },
        techTags: [<StaffChip />, <PlanningChip />],
        preview: ['videos/ndlm24.mp4'],
        color: '#c3a36a',
        description: <p>
            La <a href='https://nuit-de-la-magistrale.ch/' target='_blank' rel="noreferrer">Nuit de La Magistrale</a> est l'événement officiel concluant la remise des diplômes de master de <a href='https://www.epfl.ch/' target='_blank' rel="noreferrer">l'EPFL</a>.
            Organiser un évenement de cette ampleur au <a href='https://www.stcc.ch/' target='_blank' rel="noreferrer">Swisstech Convention Center</a> est un défi technique et logistique de taille. En tant que responsable des opérations, j'étais en charge de coordonner le montage/démontage du site ainsi que de recruter et gérer les 180 bénévoles.
        </p>,
        status: 'Membre du comité',
        instaUrl: 'https://www.instagram.com/ndlm_epfl/',
        categories: ['assoc']
    },
    {
        title: 'Lümm x 2221',
        id: 'lummx2221',
        subtitle: 'DJ sets & Panneaux leds',
        lilTags: {
            'Date': '28.09.24',
            'DJ': '6',
            'Participants': '500',
            'Staffs': '20',
            'Bière': 'CHF3',
        },
        techTags: [<StaffChip />, <AccountingChip />],
        preview: ['videos/lummx2221.mp4'],
        color: 'silver',
        description: <p>
            Quatrième édition de la <a href='https://www.lumm.love/' target='_blank' rel="noreferrer">LÜMM</a> organisée en collaboration étroite avec <a href='https://2221.ch/' target='_blank' rel="noreferrer">2221.ch</a>. Première édition où nous sortons nos nouveaux panneaux leds,
            visuels et VJing par <a href='https://www.instagram.com/stories/b0nk_13' target='_blank' rel="noreferrer">b0nk</a>.
            <br />Soutenue par la brasserie <a href='https://lanebuleuse.ch/' target='_blank' rel="noreferrer">La Nébuleuse</a> et < a href='https://www.eltonymate.com/' target='_blank' rel="noreferrer" > El Tony Mate</a >.</p>,
        status: 'Gros banger',
        instaUrl: 'https://www.instagram.com/lumm.love/',
        categories: ['assoc']
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
            Membre du comité de l'association <a href='https://www.artiphys.ch/' target='_blank' rel="noreferrer">Artiphys</a> pour cette éditon 2025. Refonte du site web pour le faire correspondre à la nouvelle direction artistique et au nouveau comité. Gestion des entrées et des billeteries de chaque évenements.</p>,
        status: 'Membre du comité',
        instaUrl: 'https://www.instagram.com/artiphysfestival/',
        since: 'Juin 2024',
        categories: ['assoc', 'dev']
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
        since: '2022',
        categories: ['dev']
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
        categories: ['assoc']
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
        since: 'mai 2024',
        categories: ['dev']
    },
    {
        title: 'Dasher',
        id: 'dasher',
        subtitle: 'Jeu mobile',
        lilTags: {
            'Plateforme': 'Android',
            'Téléchargements': '60',
        },
        preview: ['videos/dasher.mp4'],
        color: '#d0b0e7',
        techTags: [<LuaChip />, <Love2DChip />],
        description: <p>
            Jeu mobile addictif développé pendant le covid. J'ai été en contact avec un représentant de <a href='https://lionstudios.cc/' target='_blank' rel="noreferrer">LionStudios</a> qui s'était montré intéressé par la publication du jeu. Cependant, après une phase de test, les retours des joueurs n'ont pas été suffisamment positifs, et le projet n'a pas été poursuivi.
        </p>,
        status: 'Échec  ',
        since: '2020',
        categories: ['dev']
    },
];

export const projectsEn: ProjectProps[] = [
    {
        subtitle: 'Lead developer',
        title: 'Iglow',
        id: 'iglow',
        lilTags: {
            'Team': 'of 7',
        },
        techTags: [<FlutterChip />, <ReactChip />, <ConceptionChip />],
        preview: ['videos/iglow.mp4'],
        color: '#dc0028',
        description: <p>
            The Iglow smart jacket is a project that aims to improve the safety of cyclists by making them more visible at night. The jacket signals the cyclist's intentions to other road users by displaying light patterns on the back of the jacket.
            I was mainly responsible of the website and the phone app that allows the user to customize the light patterns.
        </p>,
        status: 'Released soon',
        categories: ['dev'],
        link: 'https://iglow.swiss/',
    },
    {
        subtitle: 'Development of',
        title: 'Super S8000',
        id: 'lummx2221',
        lilTags: {
            'Work time': '8 weeks',
            'Budget': 'CHF270',
            'Engines': '6',
            'Team': 'of 6',
        },
        techTags: [<ConceptionChip />, <PythonChip />, <PyTorchChip />, <NumpyChip />],
        preview: ['videos/ss8.mp4'],
        color: '#01a63e',
        description: <p>
            The <a href='https://github.com/epfl-cs358/2024fa-superscanner8000' target='_blank' rel="noreferrer">SuperScanner8000</a> is a robot that scans a selected object in 3D. It moves to take photos from different angles, which it uses in <a href='https://repo-sam.inria.fr/fungraph/3d-gaussian-splatting/' target='_blank' rel="noreferrer">3DGS</a> for 3D model reconstruction.
            Object detection is done via <a href="https://github.com/Gy920/segment-anything-2-real-time" target="_blank" rel="noreferrer">a variant of Segment Anything 2</a>.
        </p>,
        status: 'Completed',
        since: 'December 2024',
        categories: ['academic', 'dev']
    },
    {
        title: 'La NDLM 24',
        id: 'ndlm24',
        subtitle: 'Operations Manager',
        lilTags: {
            'Date': '05.10.24',
            'Participants': '2400',
            'Staffs': '180',
            'Bars': '4',
            'Stages': '2',
        },
        techTags: [<StaffChip />, <PlanningChip />],
        preview: ['videos/ndlm24.mp4'],
        color: '#c3a36a',
        description: <p>
            The <a href='https://nuit-de-la-magistrale.ch/' target='_blank' rel="noreferrer">Nuit de La Magistrale</a> is the official event concluding the master's degree graduation ceremony of <a href='https://www.epfl.ch/' target='_blank' rel="noreferrer">EPFL</a>.
            Organizing an event of this scale at the <a href='https://www.stcc.ch/' target='_blank' rel="noreferrer">Swisstech Convention Center</a> is a significant technical and logistical challenge. As the operations manager, I was responsible for coordinating the setup/teardown of the site and recruiting and managing the 180 volunteers.
        </p>,
        status: 'Former committee Member',
        instaUrl: 'https://www.instagram.com/ndlm_epfl/',
        categories: ['assoc']
    },
    {
        title: 'Lümm x 2221',
        id: 'lummx2221',
        subtitle: 'DJ sets & LED panels',
        lilTags: {
            'Date': '28.09.24',
            'DJs': '6',
            'Participants': '500',
            'Staffs': '20',
            'Beer': 'CHF3',
        },
        techTags: [<StaffChip />, <AccountingChip />],
        preview: ['videos/lummx2221.mp4'],
        color: 'silver',
        description: <p>
            Fourth edition of the <a href='https://www.lumm.love/' target='_blank' rel="noreferrer">LÜMM</a> organized in close collaboration with <a href='https://2221.ch/' target='_blank' rel="noreferrer">2221.ch</a>. First edition where we showcase our new LED panels,
            visuals and VJing by <a href='https://www.instagram.com/stories/b0nk_13' target='_blank' rel="noreferrer">b0nk</a>.
            <br />Supported by the brewery <a href='https://lanebuleuse.ch/' target='_blank' rel="noreferrer">La Nébuleuse</a> and < a href='https://www.eltonymate.com/' target='_blank' rel="noreferrer" > El Tony Mate</a >.</p>,
        status: 'Big banger',
        instaUrl: 'https://www.instagram.com/lumm.love/',
        categories: ['assoc']
    },
    {
        title: 'Artiphys',
        id: 'artiphys-website',
        subtitle: 'Webmaster at',
        lilTags: {
            'Events': '4',
            'Festival-goers': '1200',
            'Committee members': '29',
        },
        techTags: [<ReactChip />, <TailwindChip />, <GoogleAdminChip />],
        link: 'https://artiphys.ch/',
        preview: ['videos/artiphys.mp4'],
        color: '#f9a5ee',
        description: <p>
            Committee member of the association <a href='https://www.artiphys.ch/' target='_blank' rel="noreferrer">Artiphys</a> for this 2025 edition. Redesign of the website to match the new artistic direction and the new committee. Management of entries and ticketing for each event.</p>,
        status: 'Committee Member',
        instaUrl: 'https://www.instagram.com/artiphysfestival/',
        since: 'June 2024',
        categories: ['assoc', 'dev']
    },
    {
        title: 'Okalo.ch',
        id: 'okalo',
        subtitle: 'Online book exchange',
        lilTags: {
            'Users': '650',
            'Books sold': '300',
            'Books for sale': '6000'
        },
        techTags: [<ReactChip />, <NodejsChip />, <MuiChip />, <ConceptionChip />],
        link: 'https://www.okalo.ch/',
        preview: ['videos/okalo.mp4'],
        color: '#0496FF',
        description: <p>
            Used in more than a dozen Geneva colleges, <a href='https://www.okalo.ch/' target='_blank' rel="noreferrer">Okalo</a> facilitates
            the purchase and sale of second-hand books for students, allowing them to save money and give a second life to their unused books.
        </p>,
        status: 'Active',
        instaUrl: 'https://www.instagram.com/okalo.ch/',
        since: '2022',
        categories: ['dev']
    },
    {
        title: 'LÜMM C',
        id: 'lummc',
        subtitle: 'Parade, concerts & DJ sets',
        lilTags: {
            'Date': '11.05.24',
            'Participants': '700',
            'Staffs': '46',
            'Beer': 'CHF2'
        },
        link: 'https://www.lumm.love/',
        preview: ['videos/lummc.mp4'],
        color: 'rgb(205, 24, 27)',
        techTags: [<StaffChip />, <PlanningChip />, <AccountingChip />],
        description: <p>
            Third edition of <a href='https://www.lumm.love/' target='_blank' rel="noreferrer">LÜMM</a>, an association that we officially founded in early 2024 with six friends.
            < br />
            With the participation of the bar < a href='https://satellite.bar/' target='_blank' rel="noreferrer" > Satellite</a > and < a href='https://artepoly.agepoly.ch/' target='_blank' rel="noreferrer" > ArtePoly</a > from EPFL.
            Supported by the brewery < a href='https://lanebuleuse.ch/' target='_blank' rel="noreferrer" > La Nébuleuse</a > and < a href='https://www.eltonymate.com/' target='_blank' rel="noreferrer" > El Tony Mate</a >
        </p >,
        status: 'Big success',
        instaUrl: 'https://www.instagram.com/lumm.love/',
        categories: ['assoc']
    },
    {
        title: 'Morii',
        id: 'morii',
        subtitle: 'Shared photodump',
        lilTags: {
            'Tested at': 'lümm c',
            'Photos shared': '200',
        },
        link: 'https://morii.lumm.love/',
        preview: ['videos/morii.mp4'],
        color: 'white',
        techTags: [<GoogleCloudChip />, <ReactChip />, <NodejsChip />],
        description: <p>
            The main goal of this project was to replace the famous <span style={{ fontStyle: 'italic' }}>"Send your photos to the group."</span><br />
            <a href='https://morii.lumm.love/' target='_blank' rel="noreferrer">Morii</a> is
            a photo-sharing platform that allows you to remember the good times with sorted photos and no loss of quality.
        </p>,
        status: 'On hold',
        since: 'May 2024',
        categories: ['dev']
    },
    {
        title: 'Dasher',
        id: 'dasher',
        subtitle: 'Mobile game',
        lilTags: {
            'Platform': 'Android',
            'Downloads': '60',
        },
        preview: ['videos/dasher.mp4'],
        color: '#d0b0e7',
        techTags: [<LuaChip />, <Love2DChip />],
        description: <p>
            Addictive mobile game developed during covid. I was in contact with a representative of <a href='https://lionstudios.cc/' target='_blank' rel="noreferrer">LionStudios</a> who was interested in publishing the game. However, after a testing phase, player feedback was not positive enough, and the project was not pursued.
        </p>,
        status: 'Failure',
        since: '2020',
        categories: ['dev']
    },
];
