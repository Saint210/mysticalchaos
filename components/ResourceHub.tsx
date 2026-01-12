
import React from 'react';

const silos = [
  {
    title: 'Fantasy Books',
    description: 'Discovery guides for parents and young readers.',
    keywords: ['Best Middle Grade Fantasy', 'Books Ages 9–14', 'Chapter Fantasy Kids'],
    icon: 'auto_stories',
    color: 'from-purple-500/20 to-indigo-500/20'
  },
  {
    title: 'Kids Series',
    description: 'Binge-worthy ongoing sagas and reading tracks.',
    keywords: ['Reluctant Readers', 'Age Appropriate Fantasy', 'Ongoing Series'],
    icon: 'subscriptions',
    color: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    title: 'Educational Fantasy',
    description: 'Differentiating reading through learning value.',
    keywords: ['Character Lessons', 'Problem Solving', 'Values Fiction'],
    icon: 'school',
    color: 'from-emerald-500/20 to-teal-500/20'
  },
  {
    title: 'Author World',
    description: 'Dive deep into the Mystical Chaos universe.',
    keywords: ['Magic Systems', 'Character Protagonists', 'Lore & Realms'],
    icon: 'diamond',
    color: 'from-amber-500/20 to-orange-500/20'
  }
];

const ResourceHub: React.FC = () => {
  return (
    <section className="py-24 bg-background-light dark:bg-background-dark" id="resources">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm">Learning & Exploration</span>
          <h2 className="text-4xl md:text-5xl font-black whimsical-serif mt-2 mb-6 text-slate-900 dark:text-white">Adventure Resource Hub</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Whether you're a parent seeking character-building stories or a reader exploring the Nebula Realms, our resource silos guide your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {silos.map((silo) => (
            <div 
              key={silo.title}
              className={`relative p-8 rounded-3xl bg-gradient-to-br ${silo.color} border border-slate-200 dark:border-white/5 hover:border-primary/40 transition-all group overflow-hidden`}
            >
              <div className="absolute -right-4 -top-4 size-24 bg-white/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>
              
              <div className="size-14 bg-white dark:bg-white/10 rounded-2xl flex items-center justify-center text-primary mb-6 shadow-sm">
                <span className="material-symbols-outlined text-3xl">{silo.icon}</span>
              </div>
              
              <h3 className="text-xl font-bold mb-3 whimsical-serif">{silo.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                {silo.description}
              </p>
              
              <div className="space-y-2">
                {silo.keywords.map(kw => (
                  <a 
                    key={kw}
                    href="#" 
                    className="block text-xs font-semibold text-slate-500 dark:text-slate-500 hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <span className="size-1 bg-slate-300 dark:bg-slate-700 rounded-full"></span>
                    {kw}
                  </a>
                ))}
              </div>
              
              <button className="mt-8 text-primary font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                Explore Hub <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourceHub;
