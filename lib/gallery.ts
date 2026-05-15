// plik: src/lib/gallery.ts (lub w folderze, w którym trzymasz dane)

export interface GalleryImage {
    id: string;
    src: string;
    alt: {
        pl: string;
        en: string;
    };
}

export const galleryImages: GalleryImage[] = [
    {
        id: '1',
        src: '/images/przenikalnosc_form/Picture1.png',
        alt: {
            pl: 'Przenikalność form - ujęcie 1',
            en: 'Permeation of forms - shot 1'
        }
    },
    {
        id: '2',
        src: '/images/przenikalnosc_form/Picture2.png',
        alt: {
            pl: 'Przenikalność form - ujęcie 2',
            en: 'Permeation of forms - shot 2'
        }
    },
    {
        id: '3',
        src: '/images/sobienart/pic1.jpg',

        alt: {
            pl: 'Powidoki przeszłości - detal',
            en: 'Afterimages of the past - detail'
        }
    },
    {
        id: '4',
        src: '/images/mailart/curvy-woman.jpg',
        alt: {
            pl: 'Pogranicze kultur - MailArt',
            en: 'Borderland of cultures - MailArt'
        }
    }
    // ... możesz tu dodać dowolne zdjęcia, w dowolnej kolejności
];