
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'The Series', href: '#books' },
    { name: 'The World', href: '#world' },
    { name: 'Resources', href: '#resources' },
    { name: 'Educators', href: '#educators' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background-dark/95 backdrop-blur-md shadow-lg' : 'bg-transparent'} border-b border-primary/20 px-4 md:px-10 py-3`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-8 text-primary">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z" fill="currentColor"></path>
            </svg>
          </div>
          <h2 className="text-white text-xl font-bold tracking-tight uppercase whimsical-serif cursor-pointer" onClick={() => window.scrollTo(0, 0)}>Mystical Chaos</h2>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              className="text-white/80 hover:text-white text-sm font-medium transition-colors" 
              href={link.href}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-primary hover:bg-primary/80 text-white px-6 py-2 rounded-lg text-sm font-bold transition-all shadow-lg shadow-primary/20">
            Shop Series on Amazon
          </button>
        </nav>

        <div className="md:hidden text-white flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background-dark border-b border-primary/20 p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              className="text-white/80 hover:text-white text-lg font-medium transition-colors" 
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-primary hover:bg-primary/80 text-white px-6 py-3 rounded-lg text-lg font-bold transition-all shadow-lg shadow-primary/20 w-full">
            Shop on Amazon
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
