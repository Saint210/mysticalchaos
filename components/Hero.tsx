
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-background-dark">
      {/* Background Imagery */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent z-10"></div>
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div 
          className="w-full h-full bg-cover bg-center scale-105" 
          style={{ 
            backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBuGdhB9QAU3R8pppAG-Ek19LlHBhrrlJ0YensioMnf9oG9snvD0qVSwZJ-f52bd3rWq3o2BD__jbaFSx6aRkC_Wf67e6lisfBGqC5VB7RZcSXVJvW1KaayxrMBiv6Z8YZKAL52UMOqFA3xELVcKL67I0hkx3ZnhFTIisw9V3btzBf9cPaoK9zs1RGuhYvFipqTxObx4-T63ihuV63O21bUvyKqLyNKcjmvYohECeiHThXpeDndcHnrdtGQVvG8azprHDC0fIGDFTI")' 
          }}
          aria-label="Young hero facing a swirling magical purple and gold nebula portal"
        ></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <div className="bg-black/30 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/10 shadow-2xl">
          <div className="inline-block bg-primary/20 border border-primary/40 rounded-full px-4 py-1 mb-4">
            <span className="text-accent-gold text-xs font-bold uppercase tracking-widest">Learn Ancient Techniques • Unlock Hidden Powers</span>
          </div>
          <h1 className="whimsical-serif glowing-gold text-4xl md:text-6xl font-black leading-tight mb-6">
            Follow Leon's Journey Through the Mystical Chaos
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
            Cast through a <strong>sleep chamber vortex</strong> into a world of chaos and mystery. Learn <strong>ancient techniques</strong> alongside Leon as he masters hidden knowledge, self-healing, and survival skills from the masters who guide his path.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary hover:bg-primary/90 text-white text-lg font-bold px-10 py-4 rounded-xl transition-transform hover:scale-105 shadow-xl shadow-primary/40">
              Shop on Amazon US
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white text-lg font-bold px-10 py-4 rounded-xl backdrop-blur-sm border border-white/30 transition-all">
              Discover the World
            </button>
          </div>
          <p className="mt-6 text-white/50 text-xs uppercase tracking-tighter">
            Research-Backed Techniques • Practical Life Skills • Parent-Approved Learning
          </p>
        </div>
      </div>

      {/* Animated Bottom Transition */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent z-30"></div>
    </section>
  );
};

export default Hero;
