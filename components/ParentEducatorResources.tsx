import React from 'react';

const ParentEducatorResources: React.FC = () => {
  const resources = [
    {
      title: 'Discussion Guides',
      description: 'Comprehensive guides for each book with discussion questions and activities.',
      icon: 'menu_book',
      downloadUrl: '#',
      features: [
        'Chapter-by-chapter questions',
        'Critical thinking prompts',
        'Family discussion starters',
        'Reflection activities'
      ]
    },
    {
      title: 'Lesson Plans',
      description: 'Classroom-ready lesson plans aligned with educational standards.',
      icon: 'school',
      downloadUrl: '#',
      features: [
        'Common Core alignment',
        'Learning objectives',
        'Assessment tools',
        'Differentiated instruction'
      ]
    },
    {
      title: 'Practice Worksheets',
      description: 'Printable exercises for practicing the techniques Leon learns.',
      icon: 'assignment',
      downloadUrl: '#',
      features: [
        'Brain function activities',
        'Mindfulness exercises',
        'Problem-solving challenges',
        'Progress tracking sheets'
      ]
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step demonstrations of techniques and exercises.',
      icon: 'smart_display',
      downloadUrl: '#',
      features: [
        'Technique demonstrations',
      'Safety guidelines',
        'Age-appropriate instructions',
        'Expert interviews'
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Sarah M., Parent',
      role: 'Mother of 11-year-old',
      content: 'My son was struggling with focus, but after reading the first book and practicing the techniques, his teachers have noticed remarkable improvement.',
      rating: 5
    },
    {
      name: 'Dr. James Chen',
      role: 'Child Psychologist',
      content: 'This series brilliantly combines storytelling with evidence-based cognitive techniques. I recommend it to parents looking for holistic development tools.',
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      role: '5th Grade Teacher',
      content: 'I\'ve integrated these books into my curriculum. The students are engaged, and the practical exercises have improved their problem-solving skills significantly.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900" id="parent-resources">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm">Resources</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white whimsical-serif mt-2 mb-6">
            Parent & Educator Hub
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Everything you need to support your child\'s journey through the Mystical Chaos Series. 
            From discussion guides to complete lesson plans, we\'ve got you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {resources.map((resource, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-300 h-full">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-white text-2xl">{resource.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white whimsical-serif mb-2">{resource.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{resource.description}</p>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {resource.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <span className="material-symbols-outlined text-primary text-xs">check_circle</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold px-6 py-3 rounded-xl transition-transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined">download</span>
                  Download Free Resource
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-500/10 to-primary/10 rounded-3xl p-8 md:p-12 border border-purple-500/20 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white whimsical-serif mb-4">
              What Parents & Educators Are Saying
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
              Real results from families and classrooms using the Mystical Chaos Series.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-yellow-500 text-sm">star</span>
                  ))}
                </div>
                <p className="text-slate-700 dark:text-slate-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">{testimonial.name}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-br from-primary to-purple-500 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold whimsical-serif mb-4">
              Join Our Educator Community
            </h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Connect with thousands of parents and educators using the Mystical Chaos Series 
              to unlock children\'s hidden potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary font-bold px-8 py-3 rounded-xl transition-transform hover:scale-105 shadow-xl">
                Join Community Forum
              </button>
              <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm font-bold px-8 py-3 rounded-xl border border-white/30 transition-all">
                Request School Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParentEducatorResources;
