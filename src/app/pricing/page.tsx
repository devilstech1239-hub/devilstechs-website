"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

export default function PricingPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <main className="pt-32 pb-24 bg-dark min-h-screen">
      {/* Header */}
      <section className="text-center max-w-[800px] mx-auto px-6 mb-24">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block"
        >
          Transparent Pricing
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tighter"
        >
          Scale Your Business <br/> Without Guesswork.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-text-gray text-lg"
        >
          Premium services designed for maximum growth and absolute precision in the USA, UK, and Europe.
        </motion.p>
      </section>

      {/* Website Development Pricing */}
      <section className="max-w-[1200px] mx-auto px-6 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-white">Website Development</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
          {/* Template Based */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-[#111] border border-white/5 p-10 hover:border-primary/50 transition-colors duration-500 relative flex flex-col h-full"
          >
            <h3 className="text-2xl font-bold text-white mb-2">Template Based</h3>
            <p className="text-text-gray mb-8">Rapid deployment using proven conversion architecture.</p>
            <div className="mb-8">
              <span className="text-5xl font-black text-white">$600</span>
              <span className="text-text-gray">/ starting</span>
            </div>
            
            <ul className="space-y-4 mb-10 flex-1">
              {['Premium Theme Setup', 'Mobile Responsive', 'Basic SEO Configuration', '5 Pages Built-in', '1 Month Support'].map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                  <Check size={18} className="text-primary flex-shrink-0" /> {feature}
                </li>
              ))}
            </ul>

            <Link href="/contact" className="block w-full text-center py-4 border border-white/10 text-white hover:bg-white hover:text-dark font-bold uppercase tracking-widest text-sm transition-colors">
              Get Started
            </Link>
          </motion.div>

          {/* Custom Based */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="bg-[#151515] border border-primary p-10 relative flex flex-col h-full shadow-[0_0_50px_rgba(16,243,206,0.1)]"
          >
            <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-primary text-dark font-black uppercase tracking-widest text-xs py-1 px-4">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Custom Built</h3>
            <p className="text-text-gray mb-8">Ground-up React/Next.js development for massive scale.</p>
            <div className="mb-8">
              <span className="text-5xl font-black text-white">$1,000</span>
              <span className="text-text-gray">/ starting</span>
            </div>
            
            <ul className="space-y-4 mb-10 flex-1">
              {['Bespoke UI/UX Design', 'Framer Motion Animations', 'Headless CMS Integration', 'Advanced Technical SEO', 'Performance Auditing', '3 Months VIP Support'].map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                  <Check size={18} className="text-primary flex-shrink-0" /> {feature}
                </li>
              ))}
            </ul>

            <Link href="/contact" className="block w-full text-center py-4 bg-primary text-dark font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors">
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Backlinks Pricing */}
      <section className="max-w-[1200px] mx-auto px-6 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-white">High Authority Backlinks</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-6 mb-6"></div>
          <p className="text-text-gray max-w-[600px] mx-auto">Acquire massive domain authority in the USA and UK markets with our curated link-building architecture.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
          {/* Starter Pack */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-[#111] border border-white/5 p-10 hover:border-primary/50 transition-colors duration-500 flex flex-col items-center text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-2">Growth Tier</h3>
            <p className="text-primary font-black text-xl mb-6">500 HQ Backlinks</p>
            <div className="mb-8">
              <span className="text-5xl font-black text-white">$59.99</span>
            </div>
            <Link href="/contact" className="block w-full text-center py-4 border border-white/10 text-white hover:bg-white hover:text-dark font-bold uppercase tracking-widest text-sm transition-colors mt-auto">
              Purchase Now
            </Link>
          </motion.div>

          {/* Scale Pack */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="bg-[#111] border border-white/5 p-10 hover:border-primary/50 transition-colors duration-500 flex flex-col items-center text-center relative"
          >
            <h3 className="text-2xl font-bold text-white mb-2">Dominance Tier</h3>
            <p className="text-primary font-black text-xl mb-6">800 HQ Backlinks</p>
            <div className="mb-8">
              <span className="text-5xl font-black text-white">$69.99</span>
            </div>
            <Link href="/contact" className="block w-full text-center py-4 border border-white/10 text-white hover:bg-white hover:text-dark font-bold uppercase tracking-widest text-sm transition-colors mt-auto">
              Purchase Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Custom Demand Contact */}
      <section className="max-w-[800px] mx-auto px-6 text-center bg-[#151515] p-16 border border-white/5">
        <h2 className="text-3xl font-black text-white mb-4">Enterprise SEO Needs?</h2>
        <p className="text-gray-400 mb-8 max-w-[500px] mx-auto">
          If you have a custom demand for recurring backlinks or massive PR placements, speak directly with our lead growth engineer.
        </p>
        <Link 
          href="/contact" 
          className="inline-flex py-4 px-10 bg-white text-dark font-black uppercase tracking-widest text-sm hover:bg-primary transition-colors items-center gap-3"
        >
          Contact For Custom Volume <ArrowRight size={18} />
        </Link>
      </section>

    </main>
  );
}
