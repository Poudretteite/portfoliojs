import { getDictionary, Locale } from '@/lib/dictionaries';
import { projects } from '@/lib/projects';
import { exhibitionsData } from '@/lib/exhibitions';

import Header from '@/components/Header';
import ProjectCard from '@/components/ProjectCard';
import FadeIn from '@/components/FadeIn';

import BioSection from '@/components/BioSection';

export default async function Home({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang);
  const plDict = getDictionary('pl');
  const enDict = getDictionary('en');

  return (
    <div className="min-h-screen flex flex-col">
      <Header lang={lang} navDict={dict.nav} artistName={dict.hero.title} />

      <BioSection
        title={dict.hero.title}
        bioPl={plDict.hero.bio}
        bioEn={enDict.hero.bio}
        initialLang={lang} // Ustawia domyślny język na taki, jaki ma cała strona na start
      />

      <main className="flex-1 w-full max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12">

        {/* Portfolio List */}
        <section id="portfolio" className="w-full flex flex-col pt-8">

          <div className="flex items-center justify-center w-full">
            <hr className="flex-grow border-t border-white/20" />
            <h3 className="px-6 md:px-10 text-3xl md:text-4xl lg:text-6xl font-thin text-center text-white/90 uppercase tracking-[0.5em]">
              {lang === 'pl' ? 'Projekty' : 'Projects'}
            </h3>
            <hr className="flex-grow border-t border-white/20" />
          </div>

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
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
            {exhibitionsData.map((category, index) => (
              <div key={index}>
                {/* 2. Zmienione na category.title[lang] */}
                <h4 className="text-xl md:text-2xl font-light tracking-widest text-white/80 uppercase mb-8">
                  {category.title}
                </h4>
                <ul className="flex flex-col gap-6">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex flex-col md:flex-row gap-2 md:gap-6 text-white/60 font-light text-base md:text-lg leading-relaxed">
                      <span className="text-white/90 font-medium shrink-0 md:w-28 whitespace-nowrap">
                        {item.year}
                      </span>
                      {/* 3. Zmienione na item.desc[lang] */}
                      <span>{item.desc}</span>
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
            <h4 className="text-white/90 font-medium uppercase tracking-widest mb-6">{dict.contact.title}</h4>

            {/* Email */}
            <p className="text-white/50 block mb-2">
              {dict.contact.email}
            </p>

            {/* Telefon */}
            <p className="text-white/50 block mb-6">
              {dict.contact.phone}
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