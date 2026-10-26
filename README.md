# Portfolio — Justyna Środoń

Dwujęzyczna (PL / EN) strona portfolio artystki wizualnej zajmującej się malarstwem i strukturami graficznymi. Zbudowana w **Next.js (App Router) + TypeScript**. Treści są zarządzane przez **Sanity CMS**, więc właścicielka sama aktualizuje projekty, wystawy i bio, bez zmian w kodzie.

## Zrzuty ekranu

<table>
  <tr>
    <td align="center" width="50%">
      <img src="https://github.com/user-attachments/assets/aca6dba1-1689-415f-8372-3f2cbb078130" alt="Strona główna" width="100%">
      <br><sub><b>Strona główna</b></sub>
    </td>
    <td align="center" width="50%">
      <img src="https://github.com/user-attachments/assets/1660f23c-9fdd-4d4f-ac3e-f71c7e005fcb" alt="Widok szczegółów" width="100%">
      <br><sub><b>Widok szczegółów</b></sub>
    </td>
  </tr>
</table>


## Funkcje

- **Bio** z animowanym nagłówkiem, który zmienia się przy przewijaniu strony
- **Projekty**: karty z opisem krótkim i długim, metadanymi (medium, format), galerią zdjęć i filmami
- **Odtwarzacz wideo w oknie modalnym**: pliki z Sanity oraz linki YouTube i Facebook (z automatycznymi miniaturami YouTube)
- **Wystawy** pogrupowane w kategorie (np. indywidualne / zbiorowe), z rokiem i opisem
- **Galeria** zdjęć i sekcja kontaktowa
- **Dwie wersje językowe** dostępne pod `/pl` i `/en`, z przełącznikiem języka
- Płynne animacje (Framer Motion) i przewijanie do sekcji
- SEO: metadane, `alternates` dla wersji językowych, `sitemap.xml`, `robots.txt`

## Technologie

| Obszar | Narzędzia |
|---|---|
| Framework | Next.js 16 (App Router, Server Components), React 19, TypeScript |
| Stylowanie | Tailwind CSS 4, Framer Motion, lucide-react |
| CMS | Sanity v5, `next-sanity`, GROQ |
| Sanity – pluginy | internationalized-array (tłumaczenia pól), orderable-document-list (kolejność przeciąganiem), Vision (testowanie zapytań GROQ) |
| Obrazy | `@sanity/image-url`, `next/image` z CDN Sanity |

## Jak to działa

### Treści i CMS

Schematy dokumentów są w `sanity/schemaTypes/`:

| Typ | Zawartość |
|---|---|
| `siteSettings` | hero (imię, podtytuł, bio) i dane kontaktowe |
| `projectType` | projekt: tytuł, metadane, opisy, zdjęcia (z hotspotem), filmy |
| `exhibitionCategory` | kategoria wystaw z listą pozycji (rok + opis) |
| `gallery` | zbiór zdjęć do galerii |

Projekty i kategorie wystaw mają pole `orderRank`, więc ich kolejność na stronie ustawia się przeciąganiem w panelu Sanity. Własny układ panelu (`sanity/structure.ts`) dzieli go na sekcje: Wystawy, Projekty, Tekst strony i Galeria.

### Wielojęzyczność

- Pola tekstowe w CMS są typu `internationalizedArrayString` / `internationalizedArrayText`, więc każde pole przechowuje wersje `pl` i `en` obok siebie.
- Zapytania GROQ wybierają od razu właściwy język, dzięki czemu do strony trafiają już gotowe teksty:
  ```groq
  *[_type == "projectType"] | order(orderRank) {
    _id,
    "title": title[language == $lang][0].value,
    "shortDesc": shortDesc[language == $lang][0].value
  }
  ```
- Stałe teksty interfejsu (nawigacja, stopka) są w `lib/dictionaries.ts`.
- Routing opiera się na segmencie `app/[lang]/`.

### Pobieranie danych i cache

Strona to Server Component, który pobiera dane z Sanity po stronie serwera. Działa w trybie ISR (`revalidate = 60`), więc zmiany w CMS pojawiają się na stronie w ciągu minuty, bez ponownego budowania.

### Routing i zabezpieczenia (`proxy.ts`)

- `/` przekierowuje na `/pl`.
- Dozwolone są tylko ścieżki `/pl`, `/en` i zasoby Next.js. Pozostałe adresy wracają na stronę główną.
- W produkcji blokowana jest ścieżka `/studio`, a panel Sanity działa wyłącznie lokalnie lub w hostingu Sanity.

## Struktura projektu

```
├── app/
│   ├── [lang]/          # layout i strona główna dla każdego języka
│   ├── sitemap.xml
│   └── robots.txt
├── components/          # Header, ProjectCard, VideoModal, LanguageSwitcher, Background
├── lib/dictionaries.ts  # tłumaczenia interfejsu
├── sanity/
│   ├── schemaTypes/     # schematy treści
│   ├── lib/             # klient, zapytania GROQ, typy, helpery obrazów i plików
│   └── structure.ts     # układ panelu Sanity Studio
├── proxy.ts             # przekierowania i ograniczenie ścieżek
├── sanity.config.ts     # konfiguracja Studio
└── next.config.ts       # dozwolony host obrazów (cdn.sanity.io)
```

## Uruchomienie lokalne

Wymagania: Node.js 20+.

```bash
git clone https://github.com/Poudretteite/portfoliojs.git
cd portfoliojs
npm install
npm run dev
```

Strona będzie dostępna pod `http://localhost:3000` (przekierowanie na `/pl`). Dane pobierane są z publicznego datasetu Sanity skonfigurowanego w `sanity/env.ts`.

Panel do edycji treści (Sanity Studio):

```bash
npx sanity dev
```

Studio uruchomi się pod `http://localhost:3333`. Do edycji potrzebne jest konto z dostępem do projektu Sanity.

### Skrypty

| Polecenie | Działanie |
|---|---|
| `npm run dev` | serwer deweloperski |
| `npm run build` | build produkcyjny |
| `npm run start` | uruchomienie zbudowanej wersji |
| `npm run lint` | ESLint |

### Zmienne środowiskowe (opcjonalne)

| Zmienna | Opis | Domyślnie |
|---|---|---|
| `NEXT_PUBLIC_SANITY_API_VERSION` | wersja API Sanity dla strony | `2026-08-05` |
| `SANITY_STUDIO_API_VERSION` | wersja API dla Studio | `2026-08-05` |

## Autorka strony

Projekt i implementacja: [Poudretteite](https://github.com/Poudretteite). Treści i prace prezentowane na stronie należą do Justyny Środoń.
