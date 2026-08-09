import { client } from '@/sanity/lib/client';
import { Locale, getDictionary } from '@/lib/dictionaries';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import ProjectCard from '@/components/ProjectCard';
import { siteSettingsQuery, galleryQuery } from '@/sanity/lib/queries';
import type {
  ExhibitionCategory,
  Project,
  Gallery
} from '@/sanity/lib/types';
import { getLocalizedValue } from '@/sanity/lib/utils';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Justyna Środoń — Artystka wizualna',
  description:
    'Justyna Środoń — artystka wizualna zajmująca się malarstwem i strukturami graficznymi.',
  keywords: [
    'Justyna Środoń',
    'Justyna Srodon',
    'artystka',
    'artysta',
    'malarstwo',
    'portfolio',
    'sztuka współczesna',
    'Rzeszów',
  ],
  alternates: {
    languages: {
      pl: 'https://twojadomena.pl/pl',
      en: 'https://twojadomena.pl/en',
    },
  },
  authors: [{ name: 'Justyna Środoń' }],
  robots: {
    index: true,
    follow: true,
  },
};

async function getSiteSettings(lang: Locale) {
  return await client.fetch(
    siteSettingsQuery,
    { lang }
  );
}

async function getExhibitions(lang: Locale) {

  const query = `
    *[_type == "exhibitionCategory"] | order(orderRank) {
      _id,
      "title":
        title[language == $lang][0].value,
      items[] {
        year,
        "description":
          description[language == $lang][0].value
      }
    }
  `;

  return await client.fetch<ExhibitionCategory[]>(
    query,
    { lang }
  );
}

async function getProjects(lang: Locale) {

  const query = `
    *[_type == "projectType"] | order(orderRank) {
      _id,
      "title":
        title[language == $lang][0].value,
      "shortDesc":
        shortDesc[language == $lang][0].value,
      "longDesc":
        longDesc[language == $lang][0].value,
      metadata {
        "medium":
          medium[language == $lang][0].value,
        "format":
          format[language == $lang][0].value
      },
      images,
      videos
    }
  `;

  return await client.fetch<Project[]>(
    query,
    { lang }
  );
}

async function getGallery() {
  return await client.fetch<Gallery | null>(galleryQuery);
}

export default async function Home({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang);
  
  const site = await getSiteSettings(lang);
  const gallery = await getGallery();
  const exhibitionsData = await getExhibitions(lang);
  const projects = await getProjects(lang);

  const subtitle = getLocalizedValue(
    site.hero.subtitle,
    lang
  );

  const bio = getLocalizedValue(
    site.hero.bio,
    lang
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header lang={lang} navDict={dict.nav} artistName={site.hero.title} galleryImages={gallery?.images ?? []} />

      {/* Bio Section */}
      <section
        id="bio"
        className="relative w-full mb-8 md:mb-12 scroll-mt-32 min-h-[40vh] lg:min-h-[50vh] flex flex-col justify-center overflow-hidden pt-24 pb-8"
      >
        <div className="relative z-10 w-full px-6 md:px-8 lg:px-12 flex">
          <div className="w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl text-left">

            <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8 mb-2">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white/90 drop-shadow-xl">
                {site.hero.title}
              </h2>
            </div>

            <p className="text-base md:text-lg text-white/50 font-light tracking-wide mb-8 drop-shadow-lg">
              {subtitle}
            </p>

            <div
              className="text-lg lg:pr-80 md:text-lg text-white/80 font-thin leading-relaxed drop-shadow-lg [&_strong]:font-medium [&_strong]:text-white/90 [&_br]:block [&_br]:content-[''] [&_br]:my-2"
              dangerouslySetInnerHTML={{ __html: bio.replace(/\n/g, '<br/>') }}
            />

          </div>
        </div>
      </section>

      <main className="flex-1 w-full max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12">

        {/* Portfolio List */}
        <section id="portfolio" className="w-full flex flex-col pt-30">

          <div className="flex items-center justify-center w-full">
            <hr className="flex-grow border-t border-white/20" />
            <h3 className="px-6 md:px-10 text-3xl md:text-4xl lg:text-6xl font-thin text-center text-white/90 uppercase tracking-[0.5em]">
              {lang === 'pl' ? 'Projekty' : 'Projects'}
            </h3>
            <hr className="flex-grow border-t border-white/20" />
          </div>

          {projects.map((project) => (
            <ProjectCard
              key={project._id}
              project={project}
              lang={lang}
            />
          ))}
        </section>

        {/* Sekcja Wystaw */}
        <section id="exhibitions" className="w-full flex flex-col pt-16 md:pt-24">
          <div className="flex items-center justify-center w-full mb-16 md:mb-24">
            <hr className="flex-grow border-t border-white/20" />
            <h3 className="px-6 md:px-10 text-3xl md:text-4xl lg:text-6xl font-thin text-center text-white/90 uppercase tracking-[0.5em]">
              {lang === 'pl' ? 'Wystawy' : 'Exhibitions'}
            </h3>
            <hr className="flex-grow border-t border-white/20" />
          </div>

          <div className="flex flex-col gap-12 md:gap-16 max-w-4xl">
            {exhibitionsData.map((category: any, index: number) => (
              <div key={index}>
                
                {/* Dynamiczne wybieranie tytułu kategorii w zależności od języka */}
                <h4 className="text-xl md:text-2xl font-light tracking-widest text-white/80 uppercase mb-8">
                  {category.title}
                </h4>

                <ul className="flex flex-col gap-6">
                  {category.items.map((item: any, idx: number) => (
                    <li key={idx} className="flex flex-col md:flex-row gap-2 md:gap-6 text-white/60 font-light text-base md:text-lg leading-relaxed">
                      <span className="text-white/90 font-medium shrink-0 md:w-28 whitespace-nowrap">
                        {item.year}
                      </span>
                      
                      {/* Dynamiczne wybieranie opisu wystawy w zależności od języka */}
                      <span>
                        {item.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Footer (Contact) */}
        <footer id="contact" className="pb-14 md:pb-20 flex flex-col items-center justify-center text-center text-sm scroll-mt-32 mt-24">
          <div className="mb-12">
            <h4 className="text-white/90 font-medium uppercase tracking-widest mb-6">
              {lang === 'pl' ? 'Kontakt' : 'Contact'}
            </h4>
            {/* Email */}
            <p className="text-white/50 block mb-2">
              {site.contact.email}
            </p>

            {/* Telefon */}
            <p className="text-white/50 block mb-6">
              {site.contact.phone}
            </p>

            <div className="flex justify-center gap-3 text-white/40">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
            </div>
          </div>
          <div className="text-white/30">
            <p>&copy; {new Date().getFullYear()} {dict.footer.rights}</p>
          </div>
        </footer>
      </main>
    </div>
  );
}