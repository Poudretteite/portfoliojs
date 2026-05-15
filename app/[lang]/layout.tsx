import '../globals.css';
import { Inter } from 'next/font/google';
import Background from '@/components/Background';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Justyna Środoń',
  description: 'Justyna Środoń - Portfolio',
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <html lang={lang} className="dark">
      <body className={`${inter.className} bg-neutral-950 text-neutral-50 antialiased selection:bg-white/20 relative`}>
        <Background />
        <div className="relative z-30">
          {children}
        </div>
      </body>
    </html>
  );
}
