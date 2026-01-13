import React, { useState } from 'react';

interface WaitingListModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookTitle: string;
}

const WaitingListModal: React.FC<WaitingListModalProps> = ({ isOpen, onClose, bookTitle }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // For now, we'll just log it. In production, you'd send this to your backend
      console.log(`Waiting list signup: ${email} for ${bookTitle}`);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      setTimeout(() => {
        onClose();
        setIsSubmitted(false);
        setEmail('');
      }, 2000);
    } catch (error) {
      console.error('Error submitting to waiting list:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 max-w-md w-full">
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white whimsical-serif">
            Join Waiting List
          </h3>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {!isSubmitted ? (
          <>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Be the first to know when <strong>{bookTitle}</strong> is available!
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border border-slate-200 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-slate-700 dark:text-white"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || !email}
                className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Joining...' : 'Join Waiting List'}
              </button>
            </form>

            <p className="text-xs text-slate-500 dark:text-slate-400 mt-4">
              We'll notify you when this book is released. No spam, ever.
            </p>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="material-symbols-outlined text-green-600 dark:text-green-400 text-2xl">
                check_circle
              </span>
            </div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              You're on the list!
            </h4>
            <p className="text-slate-600 dark:text-slate-400">
              We'll notify you when <strong>{bookTitle}</strong> is available.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WaitingListModal;
