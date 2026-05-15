export interface Project {
  id: string;
  title: {
    pl: string;
    en: string;
  };
  metadata: {
    medium: {
      pl: string;
      en: string;
    };
    format: {
      pl: string;
      en: string;
    };
  };
  shortDescription: {
    pl: string;
    en: string;
  };
  longDescription: {
    pl: string;
    en: string;
  };
  images: string[];
}

export const projects: Project[] = [
  {
    id: '1',
    title: {
      pl: 'Przenikalność form',
      en: '',
    },
    metadata: {
      medium: {
        pl: 'Instalacja interaktywna, TouchDesigner, kamera, projekcja wideo',
        en: ''
      },
      format: {
        pl: 'Generowane w czasie rzeczywistym impresje wizualne na bazie ruchu',
        en: ''
      }
    },
    shortDescription: {
      pl: 'Projekt badawczo-artystyczny realizowany jako praca licencjacka, będący próbą uchwycenia relacji między ciałem, ruchem a technologią cyfrową. Głównym założeniem przedsięwzięcia było zbadanie, jak nowoczesne media mogą zarejestrować i zwielokrotnić efemeryczną naturę ludzkiej ekspresji.',
      en: '',
    },
    longDescription: {
      pl: 'Praca ma na celu ukazanie ruchu jako środka przekazu – samowyrażania siebie, często nawet nieświadomego. Mowa ciała, gesty, mimika, wszystko to składa się mimowolnie na nasz obraz, sposób w jaki ludzie nas postrzegają, po części uchyla też rąbka tajemnicy o tym jacy jesteśmy w rzeczywistości.\n\nSzczególnie interesującą dla mnie formą ruchu jest taniec. Nie ważne czy jest on zaimprowizowany do tego stopnia, że tańczący nie wie jeszcze co zrobi dwa kroki później czy może w pełni wyreżyserowany; zawsze pozostaje w nim coś z tańczącego. Jak mówiła Pina Bausch: „nie interesuje mnie jak ludzie się poruszają, ale co nimi porusza”. Sposób ruchu wynika z tego, co nas porusza, dlatego sam w sobie stanowi świetny klucz do poznania samego siebie. Poprzez swoją pracę pragnę zaprosić widza do refleksji nad tym, jak bardzo się różnimy, a ile zarazem mamy wspólnego – nad tym jak spotykamy się, mijamy, przenikamy, wpływamy na siebie oraz pozostawiamy po sobie ślad.\n\n<strong>Inspiracje i proces:</strong>\n\n• <b>Inspiracje:</b> Praca Alvina Luciera „I am sitting in a room” (1969) zainspirowała mnie do użycia multiplikacji i nakładania się form w celu odkrywania wewnętrznej „melodii” rejestrowanego ruchu. Z kolei słowa Elizabeth Barrett Browning skłoniły mnie do poszukiwania powidoków ludzkich postaci i utrwalania ich ulotnych cieni.\n\n• <b>Proces twórczy:</b> Po serii próbnych zdjęć z wykorzystaniem lampy stroboskopowej i wielokrotnej ekspozycji, przeniosłam projekt do programu TouchDesigner. System opiera się na sprzężeniach zwrotnych (feedback loops), przetwarzając dane z kamery na żywo i generując multiplikację powidoków ludzkiego ciała.',
      en: ''
    },
    images: [
      '/images/przenikalnosc_form/Picture1.png', '/images/przenikalnosc_form/Picture2.png', '/images/przenikalnosc_form/Picture3.png',
      '/images/przenikalnosc_form/Picture4.png', '/images/przenikalnosc_form/Picture5.png', '/images/przenikalnosc_form/Picture6.png',
      '/images/przenikalnosc_form/Picture7.png', '/images/przenikalnosc_form/Picture8.png', '/images/przenikalnosc_form/Picture9.png',
      '/images/przenikalnosc_form/Picture10.png', '/images/przenikalnosc_form/Picture11.jpg', '/images/przenikalnosc_form/Picture12.png',
      '/images/przenikalnosc_form/Picture13.png', '/images/przenikalnosc_form/Picture14.jpg'
    ],
  },
  {
    id: '2',
    title: {
      pl: 'Powidoki przeszłości',
      en: '',
    },
    metadata: {
      medium: {
        pl: ': Interdyscyplinarny cykl grafik (grafika cyfrowa, druk na folii)',
        en: ''
      },
      format: {
        pl: '5 grafik 100x70 cm oraz 7 mniejszych wydruków interaktywnych',
        en: ''
      }
    },
    shortDescription: {
      pl: '„Sobień.art – W ruinie czasu” to czwarta edycja cyklicznego projektu PODKARPACKIE.ART, zorganizowana w maju 2025 roku przez Województwo Podkarpackie (Departament Kultury i Ochrony Dziedzictwa Narodowego) w partnerstwie z Wydziałem Sztuk Pięknych Uniwersytetu Rzeszowskiego oraz Miejską Biblioteką Publiczną w Sanoku. Inicjatywa zamieniła malownicze ruiny średniowiecznego zamku Kmitów w żywe laboratorium pamięci, zapraszając młodych twórców do artystycznego dialogu z historią. Główną osią narracyjną stał się motyw przemijania i poetyka destrukcji – to, jak czas kruszy kamień i zaciera ślady ludzkiej obecności. Zwieńczeniem akcji była zbiorowa wystawa w BWA Galerii Sanockiej.',
      en: '',
    },
    longDescription: {
      "pl": "Zakładanym efektem końcowym jest cykl prac interdyscyplinarnych, przedstawiających zestawienie aktualnego stanu ruin zamku Sobień z subiektywnym wyobrażeniem tego, jak mógł prezentować się w przeszłości. W pracach uwzględnione zostały również postacie historyczne oraz bohaterowie legend związanych z zamkiem. Zarówno przedstawienie zamku z przeszłości jak i postaci z nim związanych, ma być nieoczywiste, eteryczne i subtelne.\n\nPostaci, podobnie jak dawna bryła zamku, przedstawione są w sposób szkicowy lub w formie delikatnych powidoków, nie zawsze w pierwszej chwili rozpoznawalnych. Z założenia mają przenikać się ze współczesnymi pozostałościami zamku, wyciekać z jego murów, wyłaniać się z cieni. Tworzą wspólną całość, jednocześnie nie będąc nachalnym, dosłownym przedstawieniem, a eteryczną formą pozostawiającą pole dla wyobraźni widza. Mają stanowić subtelne ślady bytności, bardziej zbliżone do zapachów niż dosłownych przerysowanych przedstawień.\n\n<strong>Forma i Inspiracje</strong>\n\nPraca składa się z pięciu grafik cyfrowych oraz siedmiu mniejszych wydruków na folii. Foliowe wydruki, dzięki odpowiedniej oprawie, stanowią element interaktywny, pozwalający widzowi w namacalny sposób doświadczyć oraz ingerować w strukturę pracy poprzez zestawianie ich ze sobą i tworzenie nowych form. Ruiny zamku były świetną, działającą na wyobraźnię inspiracją. Bardzo zależało mi, aby przez surrealistyczną formę oddać choć trochę z jego tajemnicy, odczarować pozostałości murów i pokazać ślady tych, co już tu byli – pozornie niewidoczne, ale wciąż wybrzmiewające.",
      en: ''
    },
    images: ['/images/sobienart/pic1.jpg', '/images/sobienart/pic2.jpg', '/images/sobienart/pic3.jpg', '/images/sobienart/pic4.jpg'],
  },
  {
    id: '3',
    title: {
      pl: 'Pogranicze kultur – gmina Lubenia',
      en: '',
    },
    metadata: {
      medium: {
        pl: 'Grafika cyfrowa',
        en: ''
      },
      format: {
        pl: 'A5 (nawiązujący do klasycznego formatu sztuki poczty)',
        en: ''
      }
    },
    shortDescription: {
      pl: '„MailArt – Pogranicze Kultur” to międzynarodowy projekt artystyczno-badawczy poświęcony idei Sztuki Poczty (Mail Art) – nurtu artystycznego wykorzystującego przesyłkę pocztową jako medium i nośnik dzieła sztuki, w którym list, pocztówka czy koperta stają się jednocześnie dziełem artystycznym i środkiem komunikacji; pomysłodawcą projektu jest dr hab. Marek Adam Olszyński, a realizatorem rzeszowskie Stowarzyszenie InspirujeMY pod honorowym patronatem Dziekana Wydziału Sztuk Pięknych Uniwersytetu Rzeszowskiego, Prezydenta Miasta Rzeszowa oraz partnerów instytucjonalnych i medialnych; projekt zakłada stworzenie przestrzeni twórczej opartej na temacie pogranicza kultur oraz promowanie różnorodności i dziedzictwa poprzez wystawy w Polsce i za granicą.',
      en: '',
    },
    longDescription: {
      "pl": "Praca jest grafiką cyfrową odnoszącą się do bogatej historii i kultury moich rodzinnych stron. Lubenia to jedna z najstarszych wsi w powiecie rzeszowskim (pierwsze wzmianki z 1359 r.). Przez jej teren przebiegał dawny Trakt Madziarski, łączący Polskę z Węgrami, którym płynęło wino, sukno i idee. Położenie na styku z Grodami Czerwieńskimi utrwaliło w Lubeni dziedzictwo ruskie (widoczne m.in. w nazwie Wysznyj Gród), a wpływ osadnictwa wołoskiego ukształtował lokalne rzemiosło pasterskie i obróbkę drewna. Efektem tego kulturowego tygla stała się unikalna gwara lubeńska, łącząca polski rdzeń z ruską melodyką.\n\n„Pogranicze kultur” to wręcz synonim tej miejscowości, dlatego w warstwie wizualnej została ona przedstawiona w formie mapy pokrywającej ludzkie, kotłujące się ciała. Liczni osadnicy przynosili ze sobą fragmenty swoich kultur, kawałek siebie, a fragmenty te przenikając się tworzyły unikalność tego miejsca, która później odciskała się na tożsamości kolejnych pokoleń żyjących tu ludzi.",
      en: '',
    },
    images: ['/images/mailart/curvy-woman.jpg'],
  }
];
