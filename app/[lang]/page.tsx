import { getDictionary, Locale } from '@/lib/dictionaries';
import { projects } from '@/lib/projects';
import { exhibitionsData } from '@/lib/exhibitions';

import Header from '@/components/Header';
import ProjectCard from '@/components/ProjectCard';
import FadeIn from '@/components/FadeIn';

export default async function Home({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang);

  return (
    <div className="min-h-screen flex flex-col">
      <Header lang={lang} navDict={dict.nav} artistName={dict.hero.title} />

      {/* Bio Section */}
      <section
        id="bio"
        className="relative w-full mb-8 md:mb-12 scroll-mt-32 min-h-[40vh] lg:min-h-[50vh] flex flex-col justify-center overflow-hidden pt-24 pb-8"
      >
        <div className="relative z-10 w-full px-6 md:px-8 lg:px-12 flex">
          <div className="w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl text-left">

            <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8 mb-2">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white/90 drop-shadow-xl">
                {dict.hero.title}
              </h2>
            </div>

            <p className="text-base md:text-lg text-white/50 font-light tracking-wide mb-8 drop-shadow-lg">
              {dict.hero.subtitle}
            </p>

            <div
              className="text-lg lg:pr-80 md:text-lg text-white/80 font-thin leading-relaxed drop-shadow-lg [&_strong]:font-medium [&_strong]:text-white/90 [&_br]:block [&_br]:content-[''] [&_br]:my-2"
              dangerouslySetInnerHTML={{ __html: dict.hero.bio.replace(/\n/g, '<br/>') }}
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