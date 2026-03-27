"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Globe, MessageCircle, AtSign, X } from "lucide-react";

export const metadata = {
  title: "About Us | DevilsTech",
  description: "DevilsTechs is an elite collective of digital marketers and web engineers serving the USA, UK, and European markets.",
};

const teamMembers = [
  { name: "Marcus Thorne", role: "Founder & Technical Director", image: "bg-neutral-800", bio: "Marcus brings over 15 years of enterprise architecture and digital strategy experience. Having spearheaded growth for Fortune 500s across the USA and UK, he orchestrates technical dominance for high-end boutique brands." },
  { name: "Elena Rostova", role: "Head of Growth Marketing", image: "bg-neutral-900", bio: "Elena engineers aggressive performance marketing frameworks. Her campaigns have acquired hundreds of millions in B2B leads across Europe, blending data-science with unignorable creative disruption." },
  { name: "Julian Vance", role: "Lead Creative Designer", image: "bg-stone-900", bio: "Julian commands the Aagan aesthetic. Formerly an art director for global luxury houses in London, he ensures every DevilsTech export bleeds premium brand authority and seamless interactive UX." },
  { name: "Sarah Chen", role: "Senior UX/UI Engineer", image: "bg-zinc-900", bio: "Bridging the gap between framer-motion magic and React horsepower. Sarah builds bulletproof, zero-latency applications specifically optimized for international performance speeds." }
];

export default function About() {
  const [selectedMember, setSelectedMember] = useState<{name: string, role: string, bio: string, image: string} | null>(null);

  return (
    <div className="pt-32 pb-32 bg-dark min-h-screen relative">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Who We Are</span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">Provoking <span className="text-primary">Change.</span></h1>
          <p className="text-text-gray max-w-3xl mx-auto text-xl leading-relaxed">
            We are a collective of rogue creatives, brilliant engineers, and aggressive growth marketers maximizing ROI for premium brands in the USA, UK, and Europe.
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-black text-white mb-6 leading-tight">Our Story</h2>
            <p className="text-text-gray text-lg leading-relaxed mb-6">
              Founded in 2026, DevilsTech was born out of frustration with mediocre agencies delivering average results. We wanted to create a powerhouse that treats every client project with the same intensity as a high-stakes startup launch.
            </p>
            <p className="text-text-gray text-lg leading-relaxed mb-6">
              Our culture is rooted in dark aesthetics, high performance, and an uncompromising dedication to excellence. We don't accept the ordinary, and neither should you.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-10 p-8 bg-[#151515] border-l-4 border-primary shadow-xl">
              <div>
                <h4 className="text-4xl font-black text-white mb-2 transform hover:scale-105 transition-transform">5+</h4>
                <span className="text-primary text-sm font-bold uppercase tracking-wider">Years Exp</span>
              </div>
              <div>
                <h4 className="text-4xl font-black text-white mb-2 transform hover:scale-105 transition-transform">40+</h4>
                <span className="text-primary text-sm font-bold uppercase tracking-wider">Experts</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-square bg-dark border border-white/5 relative overflow-hidden flex flex-col items-center justify-center p-12 text-center group shadow-2xl"
          >
            <Image src="/about-agency.png" alt="DevilsTechs Corporate Architecture" fill className="object-cover opacity-30 group-hover:opacity-50 transition-all duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#1a1a1a]/80 to-[#111]/80 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <h3 className="text-4xl font-black text-white/10 uppercase tracking-tighter mb-4 relative z-10 w-full rotate-[-10deg] drop-shadow-md">DEVILSTECH</h3>
            <h3 className="text-5xl font-black text-white/20 uppercase tracking-tighter mb-4 relative z-10 w-full rotate-[-10deg] drop-shadow-md">AGENCY</h3>
            <h3 className="text-6xl font-black text-white/30 uppercase tracking-tighter mb-4 relative z-10 w-full rotate-[-10deg] drop-shadow-md text-primary/30">V2.0</h3>
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">The Brains</span>
          <h2 className="text-5xl font-black text-white">Meet Our Team.</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedMember(member)}
            >
              <div className={`aspect-[3/4] ${member.image} bg-[#151515] border border-white/5 mb-6 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-dark text-white text-xs font-bold uppercase tracking-widest px-4 py-2 border border-white/10 shadow-2xl">View Bio</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
              <p className="text-sm font-bold uppercase tracking-widest text-text-gray">{member.role}</p>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Biography Modal */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-[#0a0a0a] border border-primary p-10 md:p-14 z-10 shadow-[0_0_50px_rgba(16,243,206,0.15)] flex flex-col md:flex-row gap-10 items-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none"></div>

              <button 
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-[#151515] text-gray-400 rounded-full flex items-center justify-center hover:bg-primary hover:text-dark transition-colors border border-white/5 hover:border-primary z-20"
              >
                <X size={20} />
              </button>

              <div className={`w-32 h-32 md:w-48 md:h-48 rounded-full ${selectedMember.image} flex-shrink-0 border-4 border-[#151515] shadow-2xl overflow-hidden relative group`}>
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
              </div>

              <div className="flex-1 text-center md:text-left relative z-10">
                <span className="text-primary font-bold uppercase tracking-widest text-xs mb-2 block">{selectedMember.role}</span>
                <h3 className="text-3xl font-black text-white mb-4">{selectedMember.name}</h3>
                <div className="w-12 h-1 bg-primary mb-6 mx-auto md:mx-0"></div>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base mb-6">
                  {selectedMember.bio}
                </p>
                <div className="flex gap-3 justify-center md:justify-start">
                  <a href="#" className="w-10 h-10 rounded-full bg-[#151515] text-white hover:text-primary flex items-center justify-center transition-colors"><Globe size={18} /></a>
                  <a href="#" className="w-10 h-10 rounded-full bg-[#151515] text-white hover:text-primary flex items-center justify-center transition-colors"><MessageCircle size={18} /></a>
                  <a href="#" className="w-10 h-10 rounded-full bg-[#151515] text-white hover:text-primary flex items-center justify-center transition-colors"><AtSign size={18} /></a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
