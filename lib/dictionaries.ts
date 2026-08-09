const dictionaries = {
  pl: {
    nav: {
      language: 'EN',
      langCode: 'en',
      bio: 'O mnie',
      portfolio: 'Projekty',
      exhibitions: 'Wystawy',
      contact: 'Kontakt',
    },

    footer: {
      rights: 'Wszelkie prawa zastrzeżone.',
    },
  },

  en: {
    nav: {
      language: 'PL',
      langCode: 'pl',
      bio: 'About',
      portfolio: 'Projects',
      exhibitions: 'Exhibitions',
      contact: 'Contact',
    },

    footer: {
      rights: 'All rights reserved.',
    },
  },
};

export type Locale = keyof typeof dictionaries;

export const getDictionary = (locale: Locale) =>
  dictionaries[locale] ?? dictionaries.pl;