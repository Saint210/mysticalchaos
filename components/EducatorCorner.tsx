
import React from 'react';
import { EducatorFeature } from '../types';

const features: EducatorFeature[] = [
  {
    title: 'Vocabulary Growth',
    description: 'Level-appropriate challenges that introduce sophisticated language within context for ages 9–14.',
    icon: 'menu_book'
  },
  {
    title: 'Character Education',
    description: 'Plots that serve as moral fantasy books, sparking classroom debates about ethics and integrity.',
    icon: 'balance'
  },
  {
    title: 'Homeschool Support',
    description: 'Comprehensive guides mapped to learning themes like problem-solving and teamwork.',
    icon: 'home_work'
  }
];

const EducatorCorner: React.FC = () => {
  return (
    <section className="py-20 bg-soft-lavender dark:bg-[#251835]" id="educators">
      <div className="max-w-7xl mx-auto px-4 md:px-10 flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 w-full">
          <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl relative group">
            <div className="absolute inset-0 bg-primary/20 flex items-center justify-center z-10 transition-opacity group-hover:opacity-100">
              <div className="size-20 bg-white rounded-full flex items-center justify-center text-primary shadow-2xl cursor-pointer hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-4xl fill-1">play_arrow</span>
              </div>
            </div>
            <div 
              className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBjtZH3VnZInnwJDcoT7eYx-k7Peh8R6LbHN2SNlzhmfkoovqwEbtWOcZBuLXXYUSZX47-t2ff_QfkKlX72AxJBnyVLYgb89lQLcegQMvbGA-nDbue5N1K5W3txP6ykkZ7vIJTdmL3jvz7HAxgEW5Abj9leBS9fAQ-OW1ADCq_xmMWT1N8ADgEuwj4lzqv0t-545qdwmy3WcO-LUNrAonWuNxlNwiZ73fsQ3u2gJ7jh05pVPR8syH-pu_oJ9dsQ4qh_XtXWzgdbgoE")' }}
              aria-label="Teacher reading a book to a diverse group of kids"
            ></div>
          </div>
        </div>

        <div className="flex-1 space-y-8">
          <h2 className="text-4xl font-bold whimsical-serif text-slate-900 dark:text-white leading-tight">
            The Educator's Choice for <br/>
            <span className="text-primary uppercase">Middle Grade Fantasy</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            Designed for teachers, librarians, and homeschool families seeking high-engagement stories that build empathy and confidence.
          </p>
          <ul className="space-y-6">
            {features.map((f) => (
              <li key={f.title} className="flex items-start gap-4">
                <div className="bg-white dark:bg-primary/20 p-2 rounded-lg text-primary shadow-sm">
                  <span className="material-symbols-outlined">{f.icon}</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg dark:text-white">{f.title}</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    {f.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex gap-4">
            <button className="bg-primary text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:shadow-primary/30 transition-all hover:scale-105">
              Download Free Guide
            </button>
            <button className="border border-primary text-primary font-bold py-3 px-8 rounded-xl transition-all">
              Request Author Visit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducatorCorner;
