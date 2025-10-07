import Image from 'next/image';
import type { Metadata } from 'next';
import { talks } from '@/data/talks';

export const metadata: Metadata = {
  title: 'talks',
  description: "Agustín Arias's talks and presentations",
};

export default function TalksPage() {
  return (
    <section aria-label='List of talks' className='space-y-16'>
      {talks.map((talk, index) => (
        <article
          key={index}
          className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 items-start group'
        >
          <div>
            <header className='mb-4 border-b border-border'>
              <h2 className='text-foreground font-medium'>{talk.title}</h2>
              <time
                dateTime={talk.date}
                className='mb-4 flex justify-between text-xs sm:text-sm text-muted-foreground font-mono'
              >
                {talk.date}
              </time>
            </header>
            <ul className='list-disc pl-4 space-y-4 sm:space-y-6 md:space-8'>
              {talk.highlights
                .slice()
                .sort((a, b) => b.length - a.length)
                .map((point, i) => (
                  <li
                    key={i}
                    className='text-sm sm:text-base leading-relaxed marker:text-muted-foreground'
                  >
                    {point}
                  </li>
                ))}
            </ul>
          </div>
          <figure className='relative aspect-[4/6] w-full overflow-hidden rounded-xs'>
            <Image
              src={talk.imageUrl}
              alt={`Presentation slide for ${talk.title}`}
              fill
              priority={index < 1}
              sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw'
              className='object-cover'
            />
          </figure>
        </article>
      ))}
    </section>
  );
}
