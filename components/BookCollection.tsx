
import React, { useRef } from 'react';
import { Book } from '../types';

const books: Book[] = [
  {
    id: '1',
    label: 'Book One',
    title: 'Mystical Chaos: Finding the Secret Scrolls',
    description: 'Cast through the sleep chamber vortex into a world of chaos and mystery. Join Leon as he meets his first masters and discovers the genetic imprinting that holds the key to ancient knowledge and hidden powers.',
    imageUrl: '/images/finding-secret-scrolls.jpg',
    amazonUrl: 'https://www.amazon.com/Mystical-Chaos-Journey-Sean-Hamilton/dp/1733822313'
  }
];

const BookCollection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-background-light dark:bg-background-dark" id="books">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-primary font-bold uppercase tracking-widest text-sm">Available Now</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white whimsical-serif mt-2">Mystical Chaos: Finding the Secret Scrolls</h2>
            <p className="text-slate-600 dark:text-slate-400 mt-2 text-lg">The first book in the educational adventure series</p>
          </div>
        </div>

        <div className="flex justify-center">
          {books.map((book) => (
            <div key={book.id} className="w-full max-w-[380px] group">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:-translate-y-4">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
                <div 
                  className="w-full h-full bg-cover bg-center" 
                  style={{ backgroundImage: `url("${book.imageUrl}")` }}
                ></div>
                <div className="absolute bottom-6 left-6 z-20">
                  <span className="bg-primary text-white text-[10px] font-bold px-2 py-1 rounded uppercase mb-2 inline-block">
                    {book.label}
                  </span>
                  <h3 className="text-white text-2xl font-bold whimsical-serif">{book.title}</h3>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {book.description}
                </p>
                <a 
                  className="text-primary font-bold flex items-center justify-center gap-2 hover:gap-3 transition-all" 
                  href={book.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Your Copy on Amazon <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookCollection;
