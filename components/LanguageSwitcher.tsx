'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LanguageSwitcher({ 
  currentLang, 
  navDict 
}: { 
  currentLang: string, 
  navDict: { language: string, langCode: string } 
}) {
  const pathname = usePathname();
  
  // Replace current locale with target locale
  const targetPath = pathname.replace(`/${currentLang}`, `/${navDict.langCode}`);

  return (
    <Link 
      href={targetPath}
      className="text-sm tracking-widest text-white/50 hover:text-white transition-colors duration-300 uppercase"
    >
      {navDict.language}
    </Link>
  );
}
