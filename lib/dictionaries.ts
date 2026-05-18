const dictionaries = {
  pl: {
    hero: {
      title: 'Justyna Środoń',
      subtitle: '(ur. 2001 r. w Rzeszowie)',
      bio: "Artystka wizualna, poruszająca się na styku malarstwa i struktur graficznych. Obecnie studentka studiów magisterskich w Instytucie Sztuk Pięknych Uniwersytetu Rzeszowskiego. </br></br> W swojej praktyce twórczej bada wielowymiarowość przemijania, poszukując na płótnie subtelnych powidoków przeszłości i śladów ludzkiej obecności. Jej malarstwo charakteryzuje się wrażliwością na materię – eksperymentuje z podłożami i strukturami, wprowadzając do prac piasek, który nadaje im organiczny, ziarnisty charakter. Temat ulotności i pamięci rozwija obecnie w powstającej pracy magisterskiej, równolegle budując autorskie podejście do portretu jako zapisu ludzkiej natury. Poza pracą w pracowni angażuję się w realizację projektów wystawienniczych, prezentując swoją twórczość w kraju i za granicą.",
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
      exhibitions: 'Wystawy',
      contact: 'Kontakt'
    }
  },
  en: {
    hero: {
      title: 'Justyna Środoń',
      subtitle: '(b. 2001, Rzeszów)',
      bio: "A visual artist working at the intersection of painting and graphic structures, currently pursuing her MFA at the Institute of Fine Arts of the University of Rzeszów. </br></br> Her creative practice explores the multidimensionality of ephemerality, searching the canvas for subtle afterimages of the past and traces of human presence. Her painting is defined by a deep sensitivity to matter; she experiments with surfaces and textures, incorporating sand to give her works an organic, grainy substance. This fascination with fleetingness and memory is the core of her ongoing master's thesis, developed alongside an original approach to portraiture as a record of human nature. Beyond her studio work, she is involved in curating exhibition projects and actively showcases her work both in Poland and abroad.",
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
      exhibitions: 'Exhibitions',
      portfolio: 'Portfolio',
      contact: 'Contact'
    }
  },
};

export type Locale = keyof typeof dictionaries;

export const getDictionary = (locale: Locale) => dictionaries[locale] ?? dictionaries.pl;