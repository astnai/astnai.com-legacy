import Image from "next/image";
import { Book } from "@/lib/types/book";

interface BookCardProps {
  book: Book;
  priority?: boolean;
}

export const BookCard = ({ book, priority = false }: BookCardProps) => {
  return (
    <div className="book-card relative w-full aspect-[2/3] transition-opacity duration-200 ease-in-out">
      <a
        href={book.bookUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block h-full overflow-hidden rounded-r-2xl rounded-l-sm shadow-xl ring ring-neutral-800/10 dark:ring-neutral-200/10 dark:shadow-white/10 cursor-pointer md:hover:shadow-none md:transition-shadow md:duration-200 md:ease-in-out"
        aria-label={`View details for ${book.name}`}
      >
        <Image
          src={book.coverUrl}
          alt={`Book cover of ${book.name}`}
          fill
          priority={priority}
          // so, why scale? all book cover images have different borders, some are cropped and don't have perfect edges, with scale/zoom you make all covers universal.
          className="object-cover object-center scale-[1.04]"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </a>
    </div>
  );
};
