"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Globe, MessageCircle, AtSign } from "lucide-react";

const teamMembers = [
  { name: "Marcus Thorne", role: "Founder & Technical Director", image: "bg-neutral-800" },
  { name: "Elena Rostova", role: "Head of Growth Marketing", image: "bg-neutral-900" },
  { name: "Julian Vance", role: "Lead Creative Designer", image: "bg-stone-900" },
  { name: "Sarah Chen", role: "Senior UX/UI Engineer", image: "bg-zinc-900" }
];

export default function About() {
  return (
    <div className="pt-32 pb-32 bg-dark min-h-screen">
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
            We are a collective of rogue creatives, brilliant engineers, and aggressive growth marketers hell-bent on disrupting the status quo. 
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
            className="aspect-square bg-gradient-to-br from-[#1a1a1a] to-[#111] border border-white/5 relative overflow-hidden flex flex-col items-center justify-center p-12 text-center group shadow-2xl"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 group-hover:scale-110 transition-transform duration-700"></div>
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
              className="group"
            >
              <div className={`aspect-[3/4] ${member.image} bg-[#151515] border border-white/5 mb-6 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/80 transition-all duration-500 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 backdrop-blur-sm">
                  <a href="#" className="w-10 h-10 rounded-full bg-dark text-white hover:text-primary flex items-center justify-center transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75"><Globe size={18} /></a>
                  <a href="#" className="w-10 h-10 rounded-full bg-dark text-white hover:text-primary flex items-center justify-center transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-100"><MessageCircle size={18} /></a>
                  <a href="#" className="w-10 h-10 rounded-full bg-dark text-white hover:text-primary flex items-center justify-center transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-150"><AtSign size={18} /></a>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
              <p className="text-sm font-bold uppercase tracking-widest text-text-gray">{member.role}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
