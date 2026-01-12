
import React, { useRef } from 'react';
import { Book } from '../types';

const books: Book[] = [
  {
    id: '1',
    label: 'Book One',
    title: 'Mystical Chaos: The Journey Begins',
    description: 'Cast through the sleep chamber vortex into a world of chaos and mystery. Join Leon as he meets his first masters and discovers the genetic imprinting that holds the key to ancient knowledge and hidden powers.',
    imageUrl: '/images/mystical-chaos-the-journey-begins.png',
    amazonUrl: 'https://www.amazon.com/Mystical-Chaos-Journey-Sean-Hamilton/dp/1733822313',
    status: 'available'
  },
  {
    id: '2',
    label: 'Book Two',
    title: 'MYSTICAL CHAOS: Out of the Elemental Field',
    description: 'Coming soon: Leon delves deeper into the old methods and hidden knowledge. He learns brain function activities, self-healing techniques, and begins to understand the true scope of his latent powers.',
    imageUrl: '/images/out-of-elemental-field.jpg',
    amazonUrl: '#',
    status: 'coming-soon'
  },
  {
    id: '3',
    label: 'Book Three',
    title: 'MYSTICAL CHAOS: Seven Wise Sages',
    description: 'Coming soon: The culmination of Leon\'s training as he masters survival skills, advanced healing techniques, and unlocks the full potential of his genetic imprinting.',
    imageUrl: '/images/seven-wise-sages.jpg',
    amazonUrl: '#',
    status: 'coming-soon'
  },
  {
    id: '4',
    label: 'Book Four',
    title: 'MYSTICAL CHAOS: The Temple of Hidden Knowledge',
    description: 'Coming soon: Leon\'s ultimate test awaits as he enters the ancient temple where all knowledge converges. The final secrets of the mystical chaos are revealed.',
    imageUrl: '/images/temple-of-hidden-knowledge.jpg',
    amazonUrl: '#',
    status: 'coming-soon'
  },
  {
    id: '5',
    label: 'Book Five',
    title: 'MYSTICAL CHAOS: Controlling the Elements',
    description: 'Coming soon: Leon masters the fundamental forces of nature as he learns to control earth, air, fire, and water through ancient techniques and mental discipline.',
    imageUrl: '/images/controlling-the-elements.jpg',
    amazonUrl: '#',
    status: 'coming-soon'
  },
  {
    id: '6',
    label: 'Book Six',
    title: 'MYSTICAL CHAOS: Sword of Truth',
    description: 'Coming soon: The path of the warrior reveals itself as Leon discovers that true strength comes from mastering both the blade and the mind.',
    imageUrl: '/images/sword-of-truth.jpg',
    amazonUrl: '#',
    status: 'coming-soon'
  },
  {
    id: '7',
    label: 'Book Seven',
    title: 'MYSTICAL CHAOS: The Great Awakening',
    description: 'Coming soon: Leon\'s consciousness expands beyond physical limits as he unlocks the dormant abilities within his genetic imprinting.',
    imageUrl: '/images/the-great-awakening.jpg',
    amazonUrl: '#',
    status: 'coming-soon'
  },
  {
    id: '8',
    label: 'Book Eight',
    title: 'MYSTICAL CHAOS: The Way Back Home',
    description: 'Coming soon: The final journey begins as Leon discovers the truth about his origins and the path that leads back to his own world.',
    imageUrl: '/images/the-way-back-home.jpg',
    amazonUrl: '#',
    status: 'coming-soon'
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
            <span className="text-primary font-bold uppercase tracking-widest text-sm">The Series</span>
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
          className="flex overflow-x-auto gap-8 pb-10 no-scrollbar snap-x md:flex-row flex-col"
        >
          {books.map((book) => (
            <div key={book.id} className="min-w-[300px] md:min-w-[380px] snap-center group md:min-w-0 w-full">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:-translate-y-4">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
                {book.status === 'coming-soon' && (
                  <div className="absolute inset-0 bg-black/60 z-20 flex items-center justify-center">
                    <span className="bg-white/90 text-slate-900 px-4 py-2 rounded-full font-bold text-sm">Coming Soon</span>
                  </div>
                )}
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
                {book.status === 'available' ? (
                  <a 
                    className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all text-lg" 
                    href={book.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy Now on Amazon <span className="material-symbols-outlined text-sm">shopping_cart</span>
                  </a>
                ) : (
                  <span className="text-slate-400 font-medium flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">schedule</span>
                    Coming Soon
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookCollection;
