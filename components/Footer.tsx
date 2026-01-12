
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-mystic-blue text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="size-8 text-primary">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z" fill="currentColor"></path>
                </svg>
              </div>
              <h2 className="text-xl font-bold tracking-tight uppercase whimsical-serif">Mystical Chaos</h2>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Official home of the <strong>middle grade fantasy adventure book</strong> series. We specialize in <strong>children's fantasy series</strong> that secretly teach life skills and character values.
            </p>
            <div className="flex gap-4">
               <span className="material-symbols-outlined text-white/40 hover:text-primary cursor-pointer">facebook</span>
               <span className="material-symbols-outlined text-white/40 hover:text-primary cursor-pointer">alternate_email</span>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-primary uppercase text-sm tracking-widest font-display">Fantasy Hub</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a className="hover:text-white transition-colors" href="#">Best Middle Grade Fantasy</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Fantasy Books Ages 9–14</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Magical Adventure Kids</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Hero Journey Children</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-primary uppercase text-sm tracking-widest font-display">Educational Values</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a className="hover:text-white transition-colors" href="#">Character Education Fiction</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Moral Fantasy Books</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Homeschool Support</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Fantasy Reluctant Readers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-primary uppercase text-sm tracking-widest font-display">Stay Updated</h4>
            <p className="text-slate-400 text-sm mb-4">Get release alerts for the ongoing series.</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input 
                className="bg-white/5 border-white/10 rounded-l-lg w-full px-4 py-2 text-sm focus:ring-primary focus:border-primary outline-none" 
                placeholder="Email address" 
                type="email" 
              />
              <button className="bg-primary px-4 py-2 rounded-r-lg hover:bg-primary/80 transition-all flex items-center justify-center">
                <span className="material-symbols-outlined text-sm">send</span>
              </button>
            </form>
            <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10 text-center">
              <span className="text-[10px] uppercase text-slate-500 block mb-1">Buy on Marketplace</span>
              <span className="text-accent-gold font-black text-sm">Amazon KDP Storefront</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2024 Mystical Chaos. The premier middle grade fantasy series for ages 9–14.</p>
          <div className="flex gap-6">
            <a className="hover:text-white" href="#">Privacy Policy</a>
            <a className="hover:text-white" href="#">Terms of Service</a>
            <a className="hover:text-white" href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
