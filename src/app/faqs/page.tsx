"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqData = {
  "General": [
    { q: "What is DevilsTech?", a: "DevilsTech is a premium full-stack digital agency specializing in high-end web development, robust SEO strategies, and ROI-driven performance marketing for growing brands." },
    { q: "How long does a typical website project take?", a: "A standard premium website takes between 4 to 8 weeks, depending on the complexity of features, custom animations, and integrations required." },
    { q: "Do you work with international clients?", a: "Yes. Our team is fully remote and equipped to partner with brands anywhere in the world, ensuring smooth communication and flawless delivery regardless of time zones." }
  ],
  "Technical": [
    { q: "What technology stack do you use?", a: "We primarily build blazing-fast applications using React, Next.js, and Node.js. For Styling, we utilize Tailwind CSS and Framer Motion for high-end micro-interactions." },
    { q: "Do you provide hosting and maintenance?", a: "Yes. We offer premium hosting solutions via Vercel or AWS, coupled with ongoing maintenance packages to ensure your site remains secure and updated." },
    { q: "Are your websites optimized for SEO?", a: "Absolutely. Every website is built from the ground up with technical SEO best practices, including semantic HTML, rapid load times, dynamic meta tags, and optimized asset delivery." }
  ],
  "Pricing": [
    { q: "How much does a custom website cost?", a: "Our premium custom web development services typically start at $10,000. For an accurate quote, we recommend scheduling a discovery call." },
    { q: "Do you offer flexible payment plans?", a: "We usually structure payments in milestones—typically an initial deposit, a mid-point payment, and a final payment upon successful deployment." },
    { q: "What is the ROI on your performance marketing?", a: "While results vary by industry, our data-driven approach consistently yields highly profitable ROAS. We focus heavily on tracking, A/B testing, and continuous optimization." }
  ]
};

export default function FAQs() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof faqData>("General");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-32 pb-32 bg-dark min-h-screen">
      <div className="max-w-[1000px] mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Help Center</span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">Frequently Asked <span className="text-primary">Questions.</span></h1>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {(Object.keys(faqData) as Array<keyof typeof faqData>).map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setOpenIndex(null);
              }}
              className={`px-8 py-4 font-bold uppercase tracking-widest text-sm transition-all duration-300 ${
                activeCategory === category 
                  ? "bg-primary text-dark" 
                  : "bg-transparent text-white border-2 border-white/10 hover:border-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              {faqData[activeCategory].map((faq, idx) => (
                <div key={idx} className="mb-4 bg-[#151515] border border-white/5 overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors duration-300"
                  >
                    <h3 className="text-xl font-bold text-white pr-8">{faq.q}</h3>
                    <motion.div 
                      animate={{ rotate: openIndex === idx ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-primary flex-shrink-0"
                    >
                      {openIndex === idx ? <Minus size={24} /> : <Plus size={24} />}
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openIndex === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                      >
                        <div className="p-6 pt-0 text-text-gray leading-relaxed text-lg border-t border-white/5 mt-2">
                          <p className="pt-4">{faq.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
