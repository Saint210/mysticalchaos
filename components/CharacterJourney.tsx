import React from 'react';

const CharacterJourney: React.FC = () => {
  const characters = [
    {
      name: 'Leon',
      role: 'The Seeker',
      description: 'A young dreamer cast through the sleep chamber vortex into a world of mystical chaos. Armed with curiosity and courage, he seeks answers to questions he doesn\'t yet understand.',
      traits: ['Brave', 'Curious', 'Determined', 'Open-minded'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuGdhB9QAU3R8pppAG-Ek19LlHBhrrlJ0YensioMnf9oG9snvD0qVSwZJ-f52bd3rWq3o2BD__jbaFSx6aRkC_Wf67e6lisfBGqC5VB7RZcSXVJvW1KaayxrMBiv6Z8YZKAL52UMOqFA3xELVcKL67I0hkx3ZnhFTIisw9V3btzBf9cPaoK9zs1RGuhYvFipqTxObx4-T63ihuV63O21bUvyKqLyNKcjmvYohECeiHThXpeDndcHnrdtGQVvG8azprHDC0fIGDFTI'
    },
    {
      name: 'Master Elara',
      role: 'The Keeper of Ancient Knowledge',
      description: 'Guardian of the old ways and methods to hidden knowledge. She teaches Leon that the answers lie within, waiting to be unlocked through genetic imprinting and practice.',
      traits: ['Wise', 'Patient', 'Mysterious', 'Powerful'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKWpYux89r0TmSEs8jNET7sENnVYqBixcH0lDkWXkGsU_pYF5pBK1iqqN8JjTW_1OKViNy02WiEZIB1rtR1XATz2BcUwbhDFHoSuGuZNjvraJJ-CtzdGk-qNmGUSCXHM9SaSPVGlzelB3YyuH6qFFYuR2o4e-sP9RiWvSP2X35KNHpVjjLEr1gLQRMDortGbZgaxKPtH6EW1BAW7VJNaBE5oK_1uA_X3gBTAAdZue7R99Nvq8_f5prHNh1BfUYvHpkOk1c3Baiu-c'
    },
    {
      name: 'Kael',
      role: 'The Survival Master',
      description: 'Teacher of ancestral survival skills and living off the land. He shows Leon how to connect with nature and access the forgotten wisdom of our ancestors.',
      traits: ['Resourceful', 'Grounded', 'Skilled', 'Protective'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAA-ZQy5kc5nk1ZZUuQkaV9a7QKLfh3MV7lc-TcDfAme4grNjO-Fmn9nHU9bSI8I7sKUpgG16aFitlKs0O9mNGhAAKeHZjb4uSpMTofOlI9GQjiM9KZweQkO-ZwlDbU7gLpsInExTKfW1Ls5sx7v17_mwpO32JnVW7vTvbamx6C8_8MVz49eHa_MRVZTgNzTbscQaE8_tbhwup00gqANOZHhoUAz261O1RrdFPmgdOn9uDtFcAuKN2godHa_hG5BwdPh0VS_rZWNM'
    },
    {
      name: 'Luna',
      role: 'The Healing Guide',
      description: 'Master of self-healing techniques and grandma\'s remedies. She teaches Leon the ancient arts of energy healing and natural wellness practices.',
      traits: ['Compassionate', 'Intuitive', 'Gentle', 'Knowledgeable'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_ULdrcuFgGASZWdsfGUxUfAUxK5T6ySDxR2_IPJahevUNdkbEcCraUZNrb5Q7YzhViw7-pwp94ig65khW-3P0vp_udZukLWGsMEnoOwnUHKi8VMQGWvfPibuqR-fjAhuTYod-DYysyyrjQuGDruFLM4bh7XGVIsdPrRVAtNtoFIEQj6c9MsEsc0h2CCTOl1ANT2J52jW26GcdN-e6CA2XElfyhQPrv13uIGh_pLFgNia9FJOWEeKntwnH6REupUe-lymwdzO8Ho'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900" id="characters">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm">Meet The Characters</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white whimsical-serif mt-2 mb-6">
            The Masters & Companions
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Leon doesn't walk this path alone. Meet the masters who guide him and the companions who share his journey 
            through the mystical chaos, each holding pieces of ancient wisdom.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {characters.map((character, index) => (
            <div key={character.name} className="group">
              <div className="flex flex-col md:flex-row gap-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-6 md:p-8 border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-300">
                <div className="md:w-1/3">
                  <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-purple-500/20">
                    <img 
                      src={character.image} 
                      alt={character.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="md:w-2/3 flex flex-col justify-center">
                  <div className="mb-3">
                    <span className="text-primary font-bold text-sm uppercase tracking-wider">{character.role}</span>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white whimsical-serif mt-1">{character.name}</h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {character.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {character.traits.map((trait, traitIndex) => (
                      <span 
                        key={traitIndex}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium border border-primary/20"
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-500/10 to-primary/10 rounded-3xl p-8 md:p-12 border border-purple-500/20">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white whimsical-serif mb-4">
              Every Character Holds a Key
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-6 max-w-2xl mx-auto">
              As Leon learns from each master, readers gain access to the same knowledge. 
              These aren't just characters – they're your guides to unlocking hidden powers within yourself.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-primary hover:from-purple-600 hover:to-primary text-white font-bold px-8 py-3 rounded-xl transition-transform hover:scale-105 shadow-xl">
                Discover Their Secrets
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-purple-600 dark:text-purple-400 font-bold px-8 py-3 rounded-xl backdrop-blur-sm border border-purple-300 dark:border-purple-700 transition-all">
                View Character Profiles
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharacterJourney;
