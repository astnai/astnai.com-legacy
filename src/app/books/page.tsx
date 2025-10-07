import { Metadata } from 'next';
import { BookCard } from '@/components/books/BookCard';
import { favoriteBooks } from '@/data/books';

export const metadata: Metadata = {
  title: 'books',
  description: "A collection of Agustín Arias's marked books",
};

export default function BooksPage() {
  return (
    <div className='grid grid-cols-2 gap-6 mb-20 md:[&:has(.book-card:hover)_.book-card]:opacity-20 md:[&:has(.book-card:hover)_.book-card:hover]:opacity-100'>
      {favoriteBooks.map((book, index) => (
        <BookCard
          key={`${book.name}-${index}`}
          book={book}
          priority={index < 4}
        />
      ))}
    </div>
  );
}
