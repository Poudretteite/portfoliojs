export interface ExhibitionItem {
    year: string;
    desc: string;
}

export interface ExhibitionCategory {
    title: string;
    items: ExhibitionItem[];
}

export const exhibitionsData: ExhibitionCategory[] = [
    {
        title: 'Curatorial Projects',
        items: [
            {
                year: '2026',
                desc: '“In Black and White” (Czarno na białym), national exhibition of student printmaking, Stara Drukarnia – Pub Galeria, Rzeszów (Curator)'
            },
            {
                year: '2024',
                desc: '“Reciprocity” (Wzajemności), printmaking exhibition of students from the Institute of Fine Arts at the University of Rzeszów, Stara Drukarnia – Pub Galeria, Rzeszów (Curator & Participant)'
            }
        ]
    },
    {
        title: 'Solo exhibitions',
        items: [
            {
                year: '2025',
                desc: '“Common Points” (Punkty wspólne), painting exhibition, Regional House of Culture (WDK), Rzeszów'
            },
            {
                year: '2024',
                desc: '“The Beauty of Silence” (Piękno ciszy), painting exhibition, Maria Konopnicka Museum in Żarnowiec'
            }
        ]
    },
    {
        title: 'Selected group exhibitions',
        items: [
            {
                year: '2026–2027',
                desc: '“MAIL ART – BORDERLANDS OF CULTURE”, international artistic and research project (ongoing)'
            },
            {
                year: '2025',
                desc: '“SOBIEŃ.ART – In the Ruin of Time”, Bureau of Artistic Exhibitions (BWA), Sanok'
            },
            {
                year: '2025',
                desc: '“Artwork, Printmaking, Drawing, Sculpture of the Year – Hommage à Beksiński”, Bureau of Artistic Exhibitions (BWA), Rzeszów'
            },
            {
                year: '2025',
                desc: '14th International Exhibition of Exlibris and Small Graphic Forms “The Universe in Miniature”, Oleśnica 2025'
            },
            {
                year: '2024',
                desc: '“Penetration of Dimensions”, exhibition of printmaking and photography by students and faculty, State Secondary School of Fine Arts (Synagogue building), Jarosław'
            },
            {
                year: '2024',
                desc: '“International Prints Exchange PRINTCARD WROCŁAW”, Gallery of Kulturni Centar Osijek, Osijek (Croatia)'
            },
            {
                year: '2024',
                desc: '“International Prints Exchange PRINTCARD WROCŁAW”, Galeria za Szkłem, The Eugeniusz Geppert Academy of Art and Design, Wrocław'
            },
            {
                year: '2023',
                desc: '“Small Print Form I”, Galeria Na Ściance BWA, Bureau of Artistic Exhibitions, Rzeszów'
            }
        ]
    }
];