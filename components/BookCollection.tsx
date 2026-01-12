
import React, { useRef } from 'react';
import { Book } from '../types';

const books: Book[] = [
  {
    id: '1',
    label: 'Book One',
    title: 'The Sleep Chamber Vortex',
    description: 'Leon\'s journey begins as he\'s cast through the mysterious sleep chamber vortex into a chaotic world. He meets his first masters and discovers the genetic imprinting that holds the key to hidden knowledge.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKWpYux89r0TmSEs8jNET7sENnVYqBixcH0lDkWXkGsU_pYF5pBK1iqqN8JjTW_1OKViNy02WiEZIB1rtR1XATz2BcUwbhDFHoSuGuZNjvraJJ-CtzdGk-qNmGUSCXHM9SaSPVGlzelB3YyuH6qFFYuR2o4e-sP9RiWvSP2X35KNHpVjjLEr1gLQRMDortGbZgaxKPtH6EW1BAW7VJNaBE5oK_1uA_X3gBTAAdZue7R99Nvq8_f5prHNh1BfUYvHpkOk1c3Baiu-c',
    amazonUrl: 'https://www.amazon.com/Mystical-Chaos-Journey-Sean-Hamilton/dp/1733822313'
  },
  {
    id: '2',
    label: 'Book Two',
    title: 'The Ancient Ways',
    description: 'Leon delves deeper into the old methods and hidden knowledge. He learns brain function activities, self-healing techniques, and begins to understand the true scope of his latent powers.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAA-ZQy5kc5nk1ZZUuQkaV9a7QKLfh3MV7lc-TcDfAme4grNjO-Fmn9nHU9bSI8I7sKUpgG16aFitlKs0O9mNGhAAKeHZjb4uSpMTofOlI9GQjiM9KZweQkO-ZwlDbU7gLpsInExTKfW1Ls5sx7v17_mwpO32JnVW7vTvbamx6C8_8MVz49eHa_MRVZTgNzTbscQaE8_tbhwup00gqANOZHhoUAz261O1RrdFPmgdOn9uDtFcAuKN2godHa_hG5BwdPh0VS_rZWNM',
    amazonUrl: 'https://www.amazon.com/Mystical-Chaos-Journey-Sean-Hamilton/dp/1733822313'
  },
  {
    id: '3',
    label: 'Book Three',
    title: 'Masters of the Lost Arts',
    description: 'The culmination of Leon\'s training as he masters survival skills, advanced healing techniques, and unlocks the full potential of his genetic imprinting. The answers to how and why he came to this world are finally revealed.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_ULdrcuFgGASZWdsfGUxUfAUxK5T6ySDxR2_IPJahevUNdkbEcCraUZNrb5Q7YzhViw7-pwp94ig65khW-3P0vp_udZukLWGsMEnoOwnUHKi8VMQGWvfPibuqR-fjAhuTYod-DYysyyrjQuGDruFLM4bh7XGVIsdPrRVAtNtoFIEQj6c9MsEsc0h2CCTOl1ANT2J52jW26GcdN-e6CA2XElfyhQPrv13uIGh_pLFgNia9FJOWEeKntwnH6REupUe-lymwdzO8Ho',
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
            <span className="text-primary font-bold uppercase tracking-widest text-sm">The Collection</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white whimsical-serif mt-2">Begin the Journey</h2>
          </div>
          <div className="hidden md:flex gap-2">
            <button 
              onClick={() => scroll('left')}
              className="p-2 rounded-full border border-slate-200 dark:border-white/10 hover:bg-primary hover:text-white transition-all"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-2 rounded-full border border-slate-200 dark:border-white/10 hover:bg-primary hover:text-white transition-all"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>

        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-8 pb-10 no-scrollbar snap-x"
        >
          {books.map((book) => (
            <div key={book.id} className="min-w-[300px] md:min-w-[380px] snap-center group">
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
              <div className="mt-6">
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {book.description}
                </p>
                <a 
                  className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all" 
                  href={book.amazonUrl}
                >
                  View on Amazon <span className="material-symbols-outlined text-sm">arrow_forward</span>
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
