import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          >
            {/* Modal Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0a2422] rounded-[24px] shadow-[0px_0px_50px_-10px_rgba(0,0,0,0.25)] w-full max-w-md relative"
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute right-6 top-6 text-white/60 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>

              {/* Content */}
              <div className="p-6 flex flex-col gap-6">
                {!isSubmitted ? (
                  <>
                    {/* Title */}
                    <h2 className="text-3xl font-bold text-white font-['Montserrat',sans-serif] pr-8 text-[24px]">
                      НАПРАВИ ЗАПИТВАНЕ
                    </h2>

                    {/* Form Fields */}
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                      {/* Field 1: Name */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-sm font-medium text-white font-['Montserrat',sans-serif]">
                          Име *
                        </label>
                        <input
                          id="name"
                          type="text"
                          placeholder="Петър Петров"
                          required
                          className="bg-white border-0 rounded-lg px-4 py-4 text-base text-[#0a2422] placeholder:text-[#0a2422]/60 focus:outline-none focus:ring-2 focus:ring-[#91cea2]/50 transition-all font-['Montserrat',sans-serif]"
                        />
                      </div>

                      {/* Field 2: Phone */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="phone" className="text-sm font-medium text-white font-['Montserrat',sans-serif]">
                          Телефон *
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          placeholder="0888888888"
                          required
                          className="bg-white border-0 rounded-lg px-4 py-4 text-base text-[#0a2422] placeholder:text-[#0a2422]/60 focus:outline-none focus:ring-2 focus:ring-[#91cea2]/50 transition-all font-['Montserrat',sans-serif]"
                        />
                      </div>

                      {/* Field 3: Additional Information */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="additional" className="text-sm font-medium text-white font-['Montserrat',sans-serif]">
                          Допълнителна Информация
                        </label>
                        <textarea
                          id="additional"
                          placeholder="..."
                          rows={4}
                          className="bg-white border-0 rounded-lg px-4 py-4 text-base text-[#0a2422] placeholder:text-[#0a2422]/60 focus:outline-none focus:ring-2 focus:ring-[#91cea2]/50 transition-all resize-none font-['Montserrat',sans-serif]"
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="relative bg-[#91cea2] rounded-[2025px] shadow-[0px_4px_30px_0px_rgba(145,206,162,0.5)] px-8 py-4 font-['Montserrat',sans-serif] font-semibold text-[#0a2422] text-base tracking-[1.6px] hover:shadow-[0px_6px_40px_0px_rgba(145,206,162,0.6)] hover:translate-y-[-2px] transition-all active:scale-95"
                      >
                        ИЗПРАТИ
                      </button>
                    </form>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-8 gap-6"
                  >
                    {/* Success Icon */}
                    <div className="w-20 h-20 bg-[#91cea2] rounded-full flex items-center justify-center">
                      <svg
                        className="w-10 h-10 text-[#0a2422]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>

                    {/* Success Message */}
                    <p className="text-white font-['Montserrat',sans-serif] text-center text-lg leading-relaxed px-4">
                      Благодарим ви! Наш представител ще се свърже с вас в най-скоро време!
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}