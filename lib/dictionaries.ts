const dictionaries = {
  pl: {
    hero: {
      title: 'Justyna Środoń',
      bio: "(ur. 2001 r. w Rzeszowie). Jestem artystką wizualną. Obecnie studiuję na Wydziale Sztuk Pięknych Uniwersytetu Rzeszowskiego, gdzie równolegle realizuję studia na kierunkach Malarstwo oraz Sztuki Wizualne (II stopień).\n\nW mojej pracy twórczej często poruszam intymny temat przemijania, poszukując na płótnie i w strukturach graficznych subtelnych powidoków przeszłości. Ważnym filarem moich poszukiwań artystycznych jest również portret, który traktuję jako narzędzie do głębokiego odkrywania i mapowania ludzkiej natury.\n\nMój dotychczasowy dorobek obejmuje kilkadziesiąt wystaw zbiorowych oraz indywidualnych, w tym projekty o charakterze międzynarodowym.",
    },
    portfolio: {
      title: 'Galeria Projektów',
    },
    contact: {
      title: 'Kontakt',
      email: 'justyna.srodon@wp.pl',
      phone: '733 063 550'
    },
    footer: {
      rights: 'Wszelkie prawa zastrzeżone.',
    },
    nav: {
      language: 'EN',
      langCode: 'en',
      bio: 'O mnie',
      portfolio: 'Portfolio',
      contact: 'Kontakt'
    }
  },
  en: {
    hero: {
      title: 'Justyna Środoń',
      bio: '(b. 2001, Rzeszów, Poland). I am a visual artist. Currently, I study at the Faculty of Fine Arts of the University of Rzeszów, where I am concurrently pursuing degrees in Painting and Visual Arts (Master’s level).\n\nIn my creative practice, I frequently touch upon the intimate theme of passing, seeking subtle afterimages of the past within canvas and print structures. Another vital pillar of my artistic exploration is portraiture, which I approach as a profound tool for uncovering and mapping human nature.\n\nMy professional portfolio includes dozens of group and solo exhibitions, including international artistic and research projects.'
    },
    portfolio: {
      title: 'Project Gallery',
    },
    contact: {
      title: 'Contact',
      email: 'justyna.srodon@wp.pl',
      phone: '733 063 550'
    },
    footer: {
      rights: 'All rights reserved.',
    },
    nav: {
      language: 'PL',
      langCode: 'pl',
      bio: 'About',
      portfolio: 'Portfolio',
      contact: 'Contact'
    }
  },
};

export type Locale = keyof typeof dictionaries;

export const getDictionary = (locale: Locale) => dictionaries[locale] ?? dictionaries.pl;