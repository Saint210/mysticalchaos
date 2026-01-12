
import React from 'react';
import { ValueCard } from '../types';

const values: ValueCard[] = [
  {
    title: 'Courageous Characters',
    description: "Protagonists who aren't perfect, but choose to do what's right even when they are afraid.",
    icon: 'shield'
  },
  {
    title: 'Resilience Building',
    description: 'Stories designed to show young readers that failure is just a step towards growth and wisdom.',
    icon: 'psychology'
  },
  {
    title: 'Imaginative Exploration',
    description: 'Worlds that expand the mind and encourage creative thinking outside the ordinary box.',
    icon: 'auto_fix_high'
  }
];

const BrandValues: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-mystic-blue/50" id="values">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold whimsical-serif text-primary mb-4">Our Brand Values</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((val) => (
            <div 
              key={val.title}
              className="p-8 rounded-2xl bg-background-light dark:bg-background-dark border border-slate-100 dark:border-white/5 hover:border-primary/50 transition-all shadow-xl group"
            >
              <div className="size-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl">{val.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{val.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandValues;
