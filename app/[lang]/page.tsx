import { getDictionary, Locale } from '@/lib/dictionaries';
import { projects } from '@/lib/projects';
import Header from '@/components/Header';
import ProjectCard from '@/components/ProjectCard';
import FadeIn from '@/components/FadeIn';

export default async function Home({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang);

  return (
    <div className="min-h-screen flex flex-col">
      <Header lang={lang} navDict={dict.nav} artistName={dict.hero.title} />

      {/* Hero (Bio) */}
      <section
        id="bio"
        className="relative w-full mb-8 md:mb-12 scroll-mt-32 min-h-[40vh] lg:min-h-[50vh] flex flex-col justify-center overflow-hidden pt-24 pb-8"
      >
        <div className="relative z-10 w-full px-6 md:px-8 lg:px-12 flex">
          <div className="w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl text-left">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-8 text-white/90 drop-shadow-xl">
              {dict.hero.title}
            </h2>
            <p className="text-xl md:text-xl text-white/80 font-thin leading-relaxed drop-shadow-lg whitespace-pre-wrap">
              {dict.hero.bio}
            </p>
          </div>
        </div>
      </section>

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

        {/* Footer (Contact) */}
        <footer id="contact" className="pb-14 md:pb-20 flex flex-col items-center justify-center text-center text-sm scroll-mt-32 mt-12">
          <div className="mb-12">
            <h4 className="text-white/90 font-medium uppercase tracking-widest mb-6">{dict.contact.title}</h4>
            <a href={`mailto:${dict.contact.email}`} className="text-white/50 hover:text-white transition-colors block mb-4">{dict.contact.email}</a>
            <div className="flex justify-center gap-3 text-white/40">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
              <span className="text-white/20">/</span>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Facebook</a>
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