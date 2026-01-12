
import React from 'react';
import { LoreItem } from '../types';

const loreItems: LoreItem[] = [
  {
    title: 'The Resonance Key',
    content: 'A unique magic system where powers are unlocked through emotional intelligence and self-regulation.',
    type: 'magic',
    icon: 'auto_fix_high'
  },
  {
    title: 'Leo & Maya',
    content: 'Diverse kid protagonists who face real-world dilemmas masked in fantastical challenges.',
    type: 'character',
    icon: 'group'
  },
  {
    title: 'The Nebula Realms',
    content: 'A vast multiverse where every island represents a different human virtue or struggle.',
    type: 'realm',
    icon: 'public'
  }
];

const UniverseSection: React.FC = () => {
  return (
    <section className="py-24 bg-mystic-blue text-white overflow-hidden relative" id="world">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] rounded-full -mr-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary font-bold uppercase tracking-widest text-sm">Author World</span>
            <h2 className="text-4xl md:text-5xl font-black whimsical-serif mt-2 mb-6">Inside the Universe</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Explore the intricate magic systems and meet the strong kid protagonists that define the Mystical Chaos world. This isn't just a story; it's a guide to navigating life's chaos with wonder and wisdom.
            </p>
            <div className="space-y-6">
              {loreItems.map((item) => (
                <div key={item.title} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all">
                  <div className="size-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <p className="text-sm text-slate-400">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-full border-2 border-primary/20 p-4 animate-spin-slow">
               <div className="w-full h-full rounded-full border-2 border-primary/40 border-dashed"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKWpYux89r0TmSEs8jNET7sENnVYqBixcH0lDkWXkGsU_pYF5pBK1iqqN8JjTW_1OKViNy02WiEZIB1rtR1XATz2BcUwbhDFHoSuGuZNjvraJJ-CtzdGk-qNmGUSCXHM9SaSPVGlzelB3YyuH6qFFYuR2o4e-sP9RiWvSP2X35KNHpVjjLEr1gLQRMDortGbZgaxKPtH6EW1BAW7VJNaBE5oK_1uA_X3gBTAAdZue7R99Nvq8_f5prHNh1BfUYvHpkOk1c3Baiu-c" 
                alt="Magic System Artifact"
                className="w-4/5 h-4/5 object-cover rounded-3xl shadow-2xl shadow-primary/40 rotate-3"
              />
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default UniverseSection;
