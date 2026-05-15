'use client';

import { useState } from 'react';

export default function BioSection({
    title,
    bioPl,
    bioEn,
    initialLang
}: {
    title: string;
    bioPl: string;
    bioEn: string;
    initialLang: 'pl' | 'en';
}) {
    // Stan przechowujący aktualnie wybrany język tylko dla tego komponentu
    const [bioLang, setBioLang] = useState<'pl' | 'en'>(initialLang);

    return (
        <section
            id="bio"
            className="relative w-full mb-8 md:mb-12 scroll-mt-32 min-h-[40vh] lg:min-h-[50vh] flex flex-col justify-center overflow-hidden pt-24 pb-8"
        >
            <div className="relative z-10 w-full px-6 md:px-8 lg:px-12 flex">
                <div className="w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl text-left">

                    <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8 mb-8">
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white/90 drop-shadow-xl">
                            {title}
                        </h2>

                        {/* Przełącznik języka PL / EN specjalnie dla Bio */}
                        <div className="flex gap-3 text-sm md:text-base font-light tracking-widest text-white/50 uppercase">
                            <button
                                onClick={() => setBioLang('pl')}
                                className={`transition-colors hover:text-white ${bioLang === 'pl' ? 'text-white font-medium' : ''}`}
                            >
                                PL
                            </button>
                            <span>/</span>
                            <button
                                onClick={() => setBioLang('en')}
                                className={`transition-colors hover:text-white ${bioLang === 'en' ? 'text-white font-medium' : ''}`}
                            >
                                EN
                            </button>
                        </div>
                    </div>

                    <p className="text-lg md:text-lg text-white/80 font-thin leading-relaxed drop-shadow-lg whitespace-pre-wrap">
                        {/* Wyświetlamy tekst w zależności od tego, w co kliknął użytkownik */}
                        {bioLang === 'pl' ? bioPl : bioEn}
                    </p>

                </div>
            </div>
        </section>
    );
}