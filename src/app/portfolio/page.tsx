"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, X, ExternalLink } from "lucide-react";

const portfolioItems = [
  { id: 1, title: "Lumina Skin", category: "Web", image: "bg-neutral-800", details: "A massive headless Next.js e-commerce build for a luxury skincare brand, increasing conversion rates by 45% through sub-second page loads." },
  { id: 2, title: "Nexus Brand Identity", category: "Branding", image: "bg-neutral-900", details: "Complete brand overhaul including strict dark-mode design systems, motion graphics, and typography architecture." },
  { id: 3, title: "Apex FinTech", category: "Web", image: "bg-stone-900", details: "An ultra-secure React dashboard handling millions in transactions, featuring real-time WebSockets and complex data visualization." },
  { id: 4, title: "Horizon SaaS Growth", category: "Marketing", image: "bg-zinc-900", details: "An aggressive 6-month B2B SEM campaign that scaled MRR by 300% using hyper-targeted LinkedIn and Google Network scaling." },
  { id: 5, title: "Studio 9 Redesign", category: "Web", image: "bg-gray-900", details: "Portfolio redesign for an elite architecture firm utilizing Framer Motion WebGL integrations for cinematic 3D scroll experiences." },
  { id: 6, title: "Elevate Campaigns", category: "Marketing", image: "bg-slate-900", details: "Omnichannel digital PR and High Authority Backlink sprint that secured 50+ tier-1 media placements in 90 days." },
];

const categories = ["All", "Web", "Branding", "Marketing"];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedItem, setSelectedItem] = useState<any | null>(null);

  const filteredItems = activeFilter === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div className="pt-32 pb-32 bg-dark min-h-screen relative">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Work</span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">Selected <span className="text-primary">Projects.</span></h1>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-8 py-3 font-bold uppercase tracking-widest text-xs transition-all duration-300 rounded-full ${
                activeFilter === cat 
                  ? "bg-primary text-dark" 
                  : "bg-transparent text-white border border-white/20 hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Filterable Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group cursor-pointer"
              >
                <div className={`aspect-[4/5] ${item.image} relative overflow-hidden bg-[#151515] border border-white/5 shadow-xl`}>
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/90 transition-all duration-500 flex flex-col items-center justify-center p-6 text-center opacity-0 group-hover:opacity-100 backdrop-blur-sm">
                    <span className="text-dark font-black tracking-widest uppercase text-xs mb-3 block px-3 py-1 bg-white/20 rounded-full">{item.category}</span>
                    <h3 className="text-3xl font-black text-dark leading-tight">{item.title}</h3>
                    <div className="mt-8 w-12 h-12 rounded-full border-2 border-dark flex items-center justify-center text-dark transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100 hover:bg-dark hover:text-primary">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80 backdrop-blur-sm"
          >
            {/* Click outside to close */}
            <div className="absolute inset-0" onClick={() => setSelectedItem(null)}></div>
            
            <motion.div 
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              transition={{ type: "spring", bounce: 0.4 }}
              className="relative w-full max-w-4xl bg-[#0a0a0a] border border-white/10 shadow-2xl flex flex-col md:flex-row overflow-hidden z-10 rounded-sm"
            >
              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-dark/50 text-white rounded-full flex items-center justify-center hover:bg-primary hover:text-dark transition-colors"
              >
                <X size={20} />
              </button>

              <div className={`w-full md:w-1/2 aspect-video md:aspect-auto ${selectedItem.image} relative`}>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent md:hidden"></div>
              </div>
              
              <div className="w-full md:w-1/2 p-10 lg:p-14 flex flex-col justify-center">
                <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 inline-block px-3 py-1 bg-primary/10 w-max rounded-full">{selectedItem.category}</span>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">{selectedItem.title}</h2>
                <div className="w-12 h-1 bg-primary mb-6"></div>
                <p className="text-gray-400 text-lg leading-relaxed mb-10">
                  {selectedItem.details}
                </p>
                <div className="mt-auto">
                    <Link href={`/portfolio/${selectedItem.id}`} className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-sm hover:text-primary transition-colors group">
                      Read Full Case Study <ExternalLink size={16} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
