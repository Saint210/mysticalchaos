import React from 'react';

const EducationalValue: React.FC = () => {
  const benefits = [
    {
      title: 'Research-Backed Learning',
      description: 'Every technique is grounded in verifiable research and ancient wisdom that has stood the test of time.',
      icon: 'science',
      features: [
        'Cognitive science principles',
        'Neuroplasticity exercises',
        'Evidence-based learning methods',
        'Peer-reviewed techniques'
      ]
    },
    {
      title: 'Practical Life Skills',
      description: 'Beyond entertainment, readers gain actionable skills that translate to real-world challenges.',
      icon: 'build',
      features: [
        'Problem-solving abilities',
        'Emotional regulation',
        'Resilience building',
        'Adaptability skills'
      ]
    },
    {
      title: 'Holistic Development',
      description: 'Addresses mental, physical, and spiritual growth through integrated learning approaches.',
      icon: 'all_inclusive',
      features: [
        'Mind-body connection',
        'Emotional intelligence',
        'Physical wellness',
        'Spiritual awareness'
      ]
    },
    {
      title: 'Age-Appropriate Content',
      description: 'Carefully designed for ages 9-14 with complex concepts made accessible and engaging.',
      icon: 'school',
      features: [
        'Developmentally appropriate',
        'Reading level optimized',
        'Interactive exercises',
        'Progressive difficulty'
      ]
    }
  ];

  const outcomes = [
    'Improved focus and concentration',
    'Enhanced memory retention',
    'Better stress management',
    'Increased self-confidence',
    'Stronger problem-solving skills',
    'Greater emotional awareness'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-900 dark:to-indigo-900/20" id="educational-value">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm">Educational Excellence</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white whimsical-serif mt-2 mb-6">
            More Than Just Stories
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            The Mystical Chaos Series combines entertainment with education, providing children with 
            research-backed techniques that enhance cognitive function, emotional intelligence, and practical life skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-slate-200 dark:border-slate-700">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-white text-xl">{benefit.icon}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white whimsical-serif mb-3">{benefit.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">{benefit.description}</p>
                  <ul className="space-y-2">
                    {benefit.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <span className="material-symbols-outlined text-primary text-xs">check_circle</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-3xl p-8 md:p-12 border border-primary/20 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white whimsical-serif mb-4">
              Measurable Learning Outcomes
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
              Parents and educators report significant improvements in key developmental areas after children engage with the series.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {outcomes.map((outcome, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg border border-primary/20">
                  <span className="material-symbols-outlined text-primary text-2xl">star</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 font-medium">{outcome}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-slate-200 dark:border-slate-700">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white whimsical-serif mb-4">
              Join the Educational Revolution
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
              This isn't just another children's book series. It's a comprehensive learning system 
              disguised as adventure, designed to unlock the full potential of young minds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90 text-white font-bold px-8 py-3 rounded-xl transition-transform hover:scale-105 shadow-xl">
                View Research & Evidence
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-primary font-bold px-8 py-3 rounded-xl backdrop-blur-sm border border-primary/30 transition-all">
                Download Educational Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationalValue;
