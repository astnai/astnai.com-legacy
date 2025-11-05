import type { Metadata } from 'next';
import { Geist, Geist_Mono, Caveat, Lora } from 'next/font/google';
import Header from '@/components/Header';
import './globals.css';

const lora = Lora({
  variable: '--font-lora',
  subsets: ['latin'],
});

const caveat = Caveat({
  variable: '--font-handwriting',
  subsets: ['latin'],
});

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: 'astnai/%s',
    default: 'astnai',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='overflow-x-hidden touch-manipulation'>
      <body
        className={`${geistSans.className} ${geistMono.variable} ${caveat.variable} ${lora.variable} mx-auto w-full max-w-screen-sm px-6 sm:px-8 md:px-10 text-sm sm:text-[15px] md:text-base leading-relaxed antialiase`}
      >
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
