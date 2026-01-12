import React, { useState } from 'react';

const InteractiveLearning: React.FC = () => {
  const [selectedTechnique, setSelectedTechnique] = useState<string | null>(null);

  const techniques = [
    {
      id: 'brain-function',
      title: 'Brain Function Activities',
      description: 'Enhance cognitive abilities through ancient mental exercises',
      icon: 'psychology',
      color: 'from-purple-500 to-pink-500',
      techniques: [
        'Memory palace techniques',
        'Pattern recognition exercises', 
        'Focus meditation practices',
        'Creative problem-solving methods'
      ]
    },
    {
      id: 'healing',
      title: 'Self-Healing Techniques',
      description: 'Learn ancient remedies and energy healing methods',
      icon: 'healing',
      color: 'from-green-500 to-teal-500',
      techniques: [
        'Grandma\'s natural remedies',
        'Energy balancing exercises',
        'Breathing techniques for wellness',
        'Mind-body connection practices'
      ]
    },
    {
      id: 'survival',
      title: 'Ancestral Survival Skills',
      description: 'Master the lost arts of living off the land',
      icon: 'forest',
      color: 'from-amber-500 to-orange-500',
      techniques: [
        'Natural shelter building',
        'Wild food identification',
        'Water purification methods',
        'Navigation without tools'
      ]
    },
    {
      id: 'hidden-powers',
      title: 'Unlocking Hidden Powers',
      description: 'Access latent abilities through genetic imprinting',
      icon: 'auto_awesome',
      color: 'from-indigo-500 to-purple-500',
      techniques: [
        'Intuition development',
        'Energy sensing abilities',
        'Enhanced perception techniques',
        'Mind-over-matter practices'
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800" id="learning">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm">Interactive Learning</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white whimsical-serif mt-2 mb-6">
            Learn Alongside Leon
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            As Leon discovers ancient knowledge from his masters, you'll learn the same techniques. 
            Each book includes practical exercises backed by research and designed for real-world application.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {techniques.map((technique) => (
            <div
              key={technique.id}
              onClick={() => setSelectedTechnique(selectedTechnique === technique.id ? null : technique.id)}
              className="group cursor-pointer"
            >
              <div className={`bg-gradient-to-br ${technique.color} p-1 rounded-2xl transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl`}>
                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 h-full">
                  <div className={`w-12 h-12 bg-gradient-to-br ${technique.color} rounded-xl flex items-center justify-center mb-4`}>
                    <span className="material-symbols-outlined text-white text-xl">{technique.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{technique.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{technique.description}</p>
                  
                  {selectedTechnique === technique.id && (
                    <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                      <ul className="space-y-2">
                        {technique.techniques.map((item, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                            <span className="material-symbols-outlined text-primary text-xs">check_circle</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-3xl p-8 md:p-12 border border-primary/20">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white whimsical-serif mb-4">
              More Than Just Fiction
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
              Every technique Leon learns is based on real knowledge that can be verified through research. 
              These aren't just stories – they're practical guides to unlocking your true potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-3 rounded-xl transition-transform hover:scale-105 shadow-xl shadow-primary/40">
                Start Your Journey
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-primary font-bold px-8 py-3 rounded-xl backdrop-blur-sm border border-primary/30 transition-all">
                View Sample Exercises
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveLearning;
