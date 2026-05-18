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
  videos?: string[];
}

export const projects: Project[] = [
  {
    id: '1',
    title: {
      pl: 'Przenikalność form',
      en: 'Permeation of Forms',
    },
    metadata: {
      medium: {
        pl: 'Instalacja interaktywna, TouchDesigner, kamera, projekcja wideo',
        en: 'Interactive installation (TouchDesigner, camera, video projection)'
      },
      format: {
        pl: 'Generowane w czasie rzeczywistym impresje wizualne na bazie ruchu',
        en: 'Real-time generated visual afterimages'
      }
    },
    shortDescription: {
      pl: 'Projekt jest próbą uchwycenia żywej relacji między ciałem a ruchem. Za pomocą cyfrowego obrazu badam mowę ciała jako nasz najbardziej podświadomy, osobisty język. Przekształcając gesty w nakładające się na siebie powidoki, instalacja rejestruje ulotne ślady obecności, badając procesy przemijania i zanikania. To wizualny zapis tego, jak jako ludzie spotykamy się w przestrzeni, wzajemnie przenikamy i nieuchronnie zacieramy.',
      en: 'Format: Real-time generated visual afterimages The project is an attempt to capture the living relationship between the body and movement. Through digital imagery, I examine body language as our most subconscious, personal language. By transforming gestures into overlapping afterimages, the installation records fleeting traces of presence, exploring the processes of passing and fading. It is a visual chronicle of how we, as humans, meet in space, intertwine, and inevitably blur away.',
    },
    longDescription: {
      pl: 'Praca narodziła się z fascynacji ruchem jako najbardziej autentycznym, bo często zupełnie nieświadomym środkiem wyrazu. Mowa ciała, gesty i mimika nieustannie nas zdradzają, tworząc nasz obraz w oczach innych i uchylając rąbka tajemnicy o tym, jacy jesteśmy w rzeczywistości. Szczególnie intryguje mnie taniec – nieważne, czy jest zaimprowizowany w ułamku sekundy, czy w pełni wyreżyserowany, zawsze zostaje w nim czysta esencja człowieka. Idąc za słowami Piny Bausch: „nie interesuje mnie, jak ludzie się poruszają, ale co nimi porusza”, traktuję dynamikę ciała jako klucz do samopoznania. Projekt jest zaproszeniem do refleksji nad skomplikowaną siecią relacji między ludźmi – nad tym, jak spotykamy się w przestrzeni, wpływamy na siebie, wzajemnie przenikamy i powoli zacieramy, pozostawiając po sobie jedynie ulotny ślad. </br></br> Ten wizualny rytm i potrzebę multiplikacji form odnalazłam w dwóch bliskich mi inspiracjach. Pierwszą z nich był utwór dźwiękowy Alvina Luciera „I am sitting in a room” (1969), w którym artysta wykorzystał proces wielokrotnego nawarstwiania taśmy. Przenosząc ten koncept na grunt sztuk wizualnych, prowokuję nakładanie się form, przez co uzyskuję momentami pozornie nieczytelny obraz, pozwalający jednak odkrywać wewnętrzną „melodię” rejestrowanego ruchu. Drugim impulsem były słowa Elizabeth Barrett, które sprowokowały mnie do obrania tego kierunku: </br> </br> „Pomyśl o tych wszystkich ludziach siadających w słońcu i pozostawiających na płycie swoją wierną podobiznę, z każdym szczegółem kształtu cienia, po upływie półtorej minuty… Chciałabym mieć taką pamiątkę po każdej istocie drogiej memu sercu… szczególnie cenne jest tu nie samo podobieństwo, ale wspomnienie i uczucie bliskości zawarte w przedmiotach… cienie tych osób kładące się na nich i utrwalone na zawsze!” </br> </br> Zapragnęłam te odchodzące w przeszłość ślady schwytać, przedłużyć ich istnienie na ekranie, pozwolić im się dopełniać i sięgnąć głębiej, poza samą powierzchowność. </br> </br> Od strony warsztatowej proces zaczął się tradycyjnie: od prób z lampą stroboskopową i wielokrotną ekspozycją w fotografii. Tę samą logikę przeniosłam później do programu TouchDesigner, przeznaczonego do tworzenia interaktywnych instalacji. Projekt opiera się na wielokrotnym wykorzystaniu sprzężeń zwrotnych, co pozwala na osiągnięcie efektu poklatkowości. Dane z kamery są przetwarzane na żywo pod kątem uzyskania kolejno impresji wizualnych, śladów pozostawianych przez postać oraz dynamicznej multiplikacji powstałych powidoków. Powstające smugi stają się malarskim zapisem przemijania – gęstnieją, by po chwili stopić się z ciemnością, pozwalając widzowi doświadczyć ulotności własnego jestestwa.',
      en: "The work was born out of a fascination with movement as the most authentic, and often completely unconscious, means of expression. Body language, gestures, and facial expressions constantly reveal us, shaping how others perceive us and catching a glimpse of who we truly are. I am particularly intrigued by dance—whether improvised in a split second or fully choreographed, it always retains the pure essence of the person. Following the words of Pina Bausch: \"I'm not so much interested in how people move as in what moves them,\" I treat body dynamics as a key to self-discovery. The project is an invitation to reflect on the complex web of human relationships—how we meet in space, influence one another, intertwine, and slowly blur away, leaving behind nothing but a fleeting trace. </br> </br>I discovered this visual rhythm and the need for multiplying forms in two closely related inspirations. The first was Alvin Lucier's audio piece \"I am sitting in a room\" (1969), in which the artist utilized a process of multiple tape layering. Translating this concept into the realm of visual arts, I provoke the overlapping of forms. This at times creates a seemingly illegible image, yet one that allows the viewer to uncover the inner \"melody\" of the recorded movement. The second impulse came from the words of Elizabeth Barrett, which provoked me to take this direction: </br> </br>\"Think of all those people sitting in the sun and leaving their true likeness on the plate, with every detail of the shadow's shape, after a minute and a half... I should like to have such a memorial of every being dear to me in the world... it is the association and the sense of nearness in the thing which is so precious... the shadows of those persons listing upon them and fixed forever!\" </br> </br>I longed to capture these traces fading into the past, to prolong their existence on the screen, to allow them to complement one another, and to reach deeper, far beyond mere surface appearances.</br></br> On the technical side, the process began traditionally: with strobe light trials and multiple exposure photography. I later transferred the same logic into TouchDesigner, a software designed for creating interactive installations. The project relies on the multiple use of feedback loops, which enables a frame-by-frame effect. Live camera data is processed in real-time to generate a sequence of visual impressions, traces left by the figure, and the dynamic multiplication of the resulting afterimages. The emerging streaks become a painterly record of transience—they thicken, only to dissolve into darkness moments later, allowing the viewer to experience the sheer ephemerality of their own being.",
    },
    images: [
      '/images/przenikalnosc_form/Picture1.png', '/images/przenikalnosc_form/Picture2.png', '/images/przenikalnosc_form/Picture3.png',
      '/images/przenikalnosc_form/Picture4.png', '/images/przenikalnosc_form/Picture5.png', '/images/przenikalnosc_form/Picture6.png',
      '/images/przenikalnosc_form/Picture7.png', '/images/przenikalnosc_form/Picture8.png', '/images/przenikalnosc_form/Picture9.png',
      '/images/przenikalnosc_form/Picture10.png', '/images/przenikalnosc_form/Picture11.jpg', '/images/przenikalnosc_form/Picture12.png',
      '/images/przenikalnosc_form/Picture13.png', '/images/przenikalnosc_form/Picture14.jpg'
    ],
    videos: ['/videos/licencjat.mp4'],
  },
  {
    id: '2',
    title: {
      pl: 'Powidoki przeszłości',
      en: 'Afterimages of the Past',
    },
    metadata: {
      medium: {
        pl: ': Interdyscyplinarny cykl grafik (grafika cyfrowa, druk na folii)',
        en: 'Interdisciplinary graphic series (digital graphics, print on foil)'
      },
      format: {
        pl: '5 grafik 100x70 cm oraz 7 mniejszych wydruków interaktywnych',
        en: '5 graphics 100x70 cm and 7 smaller interactive prints'
      }
    },
    shortDescription: {
      pl: '"Sobień.art – W ruinie czasu" to czwarta odsłona cyklicznego projektu PODKARPACKIE.ART. Inicjatywa zamieniła malownicze ruiny średniowiecznego zamku Kmitów w żywe laboratorium pamięci, stając się przestrzenią artystycznego dialogu młodych twórców z historią. Główną osią narracji stał się motyw przemijania i poetyka destrukcji – zapis tego, jak czas kruszy kamień i zaciera ślady ludzkiej obecności. Finałem tego twórczego procesu była zbiorowa wystawa zorganizowana w 2025 roku w BWA Galerii Sanockiej. Wydarzenie powstało z inicjatywy Województwa Podkarpackiego (Departament Kultury i Ochrony Dziedzictwa Narodowego) we współpracy z Wydziałem Sztuk Pięknych Uniwersytetu Rzeszowskiego oraz Miejską Biblioteką Publiczną w Sanoku.',
      en: "Sobień.art – In the Ruin of Time is the fourth edition of the cyclical project PODKARPACKIE.ART. The initiative transformed the picturesque ruins of the medieval Kmitas' Castle into a living laboratory of memory, creating a space for young artists to engage in a creative dialogue with history. The central narrative axis became the theme of transience and the poetics of destruction—a record of how time crumbles stone and blurs the traces of human presence. This creative process culminated in a collective exhibition held in 2025 at the BWA Gallery in Sanok. The event was initiated by the Podkarpackie Voivodeship (Department of Culture and National Heritage Protection) in partnership with the Faculty of Fine Arts of the University of Rzeszów and the Municipal Public Library in Sanok.",
    },
    longDescription: {
      pl: "Cykl prac powstał z fascynacji ruinami zamku Sobień i jest próbą uchwycenia ukrytej w nich przeszłości. Bazą projektu są kolaże cyfrowe stworzone z fotografii zamkowych murów. Prace układają się w historię opowiedzianą samym kamieniem – od niemal realistycznych, zwielokrotnionych ujęć, aż po całkowicie abstrakcyjne formy. Te surowe ściany zdają się mówić, jednak robią to w sposób niezwykle subtelny. Historia nie jest tu podana wprost; uwalnia się z obrazów jak ulotne wrażenie, które intuicyjnie wyczuwamy, poruszając się po zakamarkach własnej pamięci. </br></br>Unikając dosłowności, kolaże zyskały surrealistyczny, tajemniczy klimat, który pozwala na nowo odkryć pozostałości zamku. Trzon wystawy stanowi pięć wielkoformatowych grafik (100x70 cm). Towarzyszy im siedem mniejszych wydruków na przezroczystej folii. Zamknięte w autorskich ramkach foliowe warstwy tworzą element interaktywny – widz może je samodzielnie nakładać na siebie i zestawiać, sprawdzając, jak pod wpływem światła i ruchu budują się zupełnie nowe, autorskie kompozycje.</br></br><iframe src=\"https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0bRoViAMGHmdFozE9abDm1xzo5gStdePsWvfYNwN4ChdwBPbXPdPVvgtHUkKzYdLMl%26id%3D100087743830118&show_text=true&width=500\" width=\"100%\" height=\"715\" style=\"border:none;overflow:hidden;display:block;max-width:500px;margin:0 auto\" scrolling=\"no\" frameborder=\"0\" allowfullscreen=\"true\" allow=\"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share\"></iframe></br></br><iframe src=\"https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1331500082317499&show_text=false&width=500\" width=\"100%\" height=\"290\" style=\"border:none;overflow:hidden;display:block;max-width:500px;margin:0 auto\" scrolling=\"no\" frameborder=\"0\" allowfullscreen=\"true\" allow=\"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share\"></iframe>",
      en: "This series of works stems from a fascination with the ruins of Sobień Castle and is an attempt to capture the past hidden within them. The project is based on digital collages created from photographs of the castle walls. The pieces unfold as a story told through the stone itself—ranging from nearly realistic, multiplied views to entirely abstract forms. These raw walls seem to speak, yet they do so in an incredibly subtle way. History is not presented directly here; it releases itself from the images like a fleeting impression that we intuitively feel while navigating the recesses of our own memory.</br></br>Avoiding literalism, the collages take on a surreal, mysterious atmosphere that allows the remaining structures of the castle to be rediscovered. The core of the exhibition consists of five large-format prints (100x70 cm), accompanied by seven smaller prints on transparent film. Enclosed in custom frames, these film layers create an interactive element—the viewer can physically overlay and combine them, discovering how entirely new, unique compositions are built through light and movement.</br></br><iframe src=\"https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0bRoViAMGHmdFozE9abDm1xzo5gStdePsWvfYNwN4ChdwBPbXPdPVvgtHUkKzYdLMl%26id%3D100087743830118&show_text=true&width=500\" width=\"100%\" height=\"715\" style=\"border:none;overflow:hidden;display:block;max-width:500px;margin:0 auto\" scrolling=\"no\" frameborder=\"0\" allowfullscreen=\"true\" allow=\"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share\"></iframe></br></br><iframe src=\"https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1331500082317499&show_text=false&width=500\" width=\"100%\" height=\"290\" style=\"border:none;overflow:hidden;display:block;max-width:500px;margin:0 auto\" scrolling=\"no\" frameborder=\"0\" allowfullscreen=\"true\" allow=\"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share\"></iframe>"
    },
    images: ['/images/sobienart/pic1.jpg', '/images/sobienart/pic2.jpg', '/images/sobienart/pic3.jpg', '/images/sobienart/pic4.jpg'],
    videos: [
      'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1331500082317499&show_text=false&width=500',
    ],
  },
  {
    id: '3',
    title: {
      pl: 'Pogranicze kultur',
      en: 'Borderland of Cultures',
    },
    metadata: {
      medium: {
        pl: 'Grafika cyfrowa',
        en: 'Digital graphics'
      },
      format: {
        pl: 'A5 (nawiązujący do klasycznego formatu sztuki poczty)',
        en: 'A5 (referencing the classic format of mail art)'
      }
    },
    shortDescription: {
      pl: '„MailArt – Pogranicze Kultur” to międzynarodowy projekt artystyczno-badawczy dedykowany idei sztuki poczty. Ten unikalny nurt artystyczny wykorzystuje tradycyjną przesyłkę jako autonomiczne medium – list, koperta czy pocztówka stają się tu jednocześnie dziełem sztuki i bezpośrednim środkiem komunikacji. Głównym założeniem projektu jest stworzenie otwartej przestrzeni twórczej, która porusza temat styku tradycji, promuje różnorodność oraz popularyzuje wielokulturowe dziedzictwo poprzez wystawy w Polsce i za granicą. Pomysłodawcą całego przedsięwzięcia jest dr hab. Marek Adam Olszyński, a za jego realizację odpowiada rzeszowskie Stowarzyszenie InspirujeMY. Projekt odbywa się pod honorowym patronatem Prezydenta Miasta Rzeszowa oraz Dziekana Wydziału Sztuk Pięknych Uniwersytetu Rzeszowskiego, przy wsparciu licznych partnerów instytucjonalnych i medialnych.',
      en: '"MailArt – Borderland" is an international artistic and research project dedicated to the concept of Mail Art. This unique artistic movement utilizes traditional mail as an autonomous medium—where a letter, envelope, or postcard simultaneously becomes a piece of art and a direct means of communication. The main objective of the project is to create an open creative space that explores the intersection of traditions, promotes diversity, and popularizes multicultural heritage through exhibitions both in Poland and abroad. The project was conceived by dr hab. Marek Adam Olszyński and is organized by the Rzeszów-based "InspirujeMY" Association. The initiative is held under the honorary patronage of the Mayor of the City of Rzeszów and the Dean of the College of Fine Arts at the University of Rzeszów, with the support of numerous institutional and media partners.',
    },
    longDescription: {
      pl: "Prezentowana grafika cyfrowa to osobista, wizualna opowieść o bogatej tożsamości moich rodzinnych stron. Lubenia – jedna z najstarszych wsi w powiecie rzeszowskim, datowana na 1359 rok – od wieków istniała jako kulturowy tygiel. To tutaj dawny Trakt Madziarski łączył Polskę z Węgrami, rzeźbiąc przestrzeń wymianą towarów i idei. Sąsiedztwo Grodów Czerwieńskich zakorzeniło tu dziedzictwo ruskie, osadnictwo wołoskie ukształtowało tradycje rzemiosła i pasterstwa, a z tego wielogłosu wyrosła unikalna gwara lubeńska, łącząca polski rdzeń z ruską melodyką.</br></br>Dla mnie „pogranicze kultur” to nie suchy fakt historyczny, ale żywy, pulsujący proces, który uformował tutejszych ludzi. W warstwie wizualnej praca przybiera formę mapy nakładającej się na splątane, kotłujące się ludzkie ciała. To metafora pokoleń osadników, z których każdy przynosił ze sobą fragment własnej tradycji i cząstkę siebie. Przenikając się nawzajem, te mikro-historie stworzyły unikalny kod genetyczny miejsca, który do dziś odciska się na tożsamości żyjących tu ludzi.</br></br><iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/qZD8-zenHUc\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>",
      en: "This digital collage is a deeply personal, visual narrative about the rich identity of my homeland. Lubenia—one of the oldest villages in the Rzeszów district, dating back to 1359—has existed for centuries as a cultural melting pot. It was here that the ancient Magyar Route connected Poland with Hungary, shaping the region through the exchange of goods and ideas. The proximity to the Cherven Cities rooted a Rus' heritage within the area, Vlach settlement shaped the traditions of pastoral craftsmanship, and from this polyphony emerged the unique Lubenia dialect, blending a Polish core with Rus' melodic cadence .</br></br>For me, the 'borderland of cultures' is not a dry historical fact, but a living, pulsating process that formed the local people. Visually, the work takes the shape of a map superimposed onto tangled, swirling human bodies. This serves as a metaphor for the generations of settlers, each bringing a fragment of their own tradition and a piece of themselves. Intertwining with one another, these micro-histories created a unique genetic code of the place, which continues to imprint itself onto the identity of the people living here today.</br></br><iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/qZD8-zenHUc\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>"
    },
    images: ['/images/mailart/curvy-woman.jpg'],
    videos: [
      'https://www.youtube.com/watch?v=qZD8-zenHUc',
    ],
  }
];
