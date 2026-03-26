"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { X, Send } from "lucide-react";

export default function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if they already saw it this session to avoid harassment
    const hasSeen = sessionStorage.getItem("hasSeenLeadPopup");
    
    if (!hasSeen) {
      // Trigger the animated popup after 3 seconds of the user browsing the page
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("hasSeenLeadPopup", "true");
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 hidden md:flex">
          {/* Backdrop Image Blur */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          
          {/* Popup Content */}
          <motion.div 
            initial={{ scale: 0.9, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 50, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative w-full max-w-lg bg-[#0a0a0a] border border-white/10 p-10 shadow-[0_0_50px_rgba(16,243,206,0.15)] z-10 rounded-sm"
          >
            {/* Background Texture inside precise popup */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none"></div>
            
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-dark text-text-gray rounded-full flex items-center justify-center hover:bg-primary hover:text-dark transition-colors border border-white/5 hover:border-primary z-20"
            >
              <X size={20} />
            </button>

            <div className="text-center mb-8 relative z-10 flex flex-col items-center">
              <Image src="/devils-brand-new.png" alt="DevilsTechs Logo" width={225} height={68} className="object-contain -mb-4 mt-2" />
              <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 inline-block px-3 py-1 bg-primary/10 rounded-full">Exclusive Offer</span>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-3">Ready to Scale?</h2>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                Drop your details below and our lead engineer will reach out within <span className="text-white font-bold">24 hours</span> customized to your brand.
              </p>
            </div>

            <form className="space-y-4 relative z-10" onSubmit={(e) => { e.preventDefault(); setIsOpen(false); }}>
              <div>
                <input type="text" placeholder="Full Name" required className="w-full bg-[#111] border border-white/5 p-4 text-white focus:outline-none focus:border-primary transition-colors text-sm" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input type="email" placeholder="Email Address" required className="w-full bg-[#111] border border-white/5 p-4 text-white focus:outline-none focus:border-primary transition-colors text-sm" />
                </div>
                <div>
                  <input type="tel" placeholder="Phone Number" required className="w-full bg-[#111] border border-white/5 p-4 text-white focus:outline-none focus:border-primary transition-colors text-sm" />
                </div>
              </div>
              <div>
                <select required defaultValue="" className="w-full bg-[#111] border border-white/5 p-4 text-gray-400 focus:outline-none focus:text-white focus:border-primary transition-colors text-sm appearance-none cursor-pointer">
                  <option value="" disabled>Which service do you need?</option>
                  <option value="seo">SEO Optimization</option>
                  <option value="performance">Performance Marketing</option>
                  <option value="web">Website Development</option>
                  <option value="social">Social Media Marketing</option>
                  <option value="backlinks">High Authority Backlinks</option>
                </select>
              </div>
              <button type="submit" className="w-full py-5 bg-primary text-dark font-black uppercase tracking-widest text-sm hover:bg-white flex items-center justify-center gap-3 transition-colors duration-300 group mt-4 shadow-xl">
                Get Started Now <Send size={18} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
