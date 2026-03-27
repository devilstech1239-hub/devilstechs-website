"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BarChart, Code, Globe, MessageSquare, Search, Star, Quote, Plus, Minus, Send, MapPin, Mail, Phone } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import LeadPopup from "@/components/LeadPopup";

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const services = [
    { title: "SEO", icon: <Search size={32} />, desc: "Dominate search rankings with targeted organic growth strategies." },
    { title: "Performance Marketing", icon: <BarChart size={32} />, desc: "Maximize ROI with data-driven SEM and paid advertising campaigns." },
    { title: "Website Development", icon: <Code size={32} />, desc: "High-speed, responsive, and visually stunning web experiences." },
    { title: "High Authority Backlinks", icon: <Globe size={32} />, desc: "Build brand trust with off-page strategy and premium placements." },
    { title: "Social Media Marketing", icon: <MessageSquare size={32} />, desc: "Engaging content that drives brand awareness and loyalty." },
  ];

  const aboutTabs = [
    { title: "Who We Are", content: "DevilsTech is a premium digital agency that rebels against the ordinary. We blend dark aesthetics with cutting-edge technology to create digital presences that simply cannot be ignored." },
    { title: "Our Mission", content: "To provoke change in traditional markets by injecting high-end design, flawless performance, and aggressive growth strategies into every project we touch." },
    { title: "Our Vision", content: "We envision a web where every brand experience is cinematic, fast, and driven by measurable results. We don't just build sites; we build empires." },
  ];

  const stats = [
    { number: "150+", label: "Projects Delivered" },
    { number: "98%", label: "Client Retention" },
    { number: "25+", label: "Industry Awards" },
    { number: "10M+", label: "Leads Generated" },
  ];

  const testimonials = [
    { name: "Alex Morgan", role: "CEO, TechFlow", rating: 5, quote: "DevilsTech completely overhauled our digital presence. The new site is lightning fast and our conversions have doubled.", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d" },
    { name: "Sarah Jenkins", role: "Founder, Luxe", rating: 5, quote: "Honestly, the best agency experience I've ever had. They understood our brand vision immediately and delivered a flawless execution.", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d" },
    { name: "David Chen", role: "CMO, Nexus", rating: 5, quote: "Their SEO and performance marketing strategies put us on the map. We went from page 3 to holding the #1 spot.", avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d" },
  ];

  const faqs = [
    { q: "What is DevilsTech?", a: "DevilsTech is a premium full-stack digital agency specializing in high-end web development, robust SEO strategies, and ROI-driven performance marketing for growing brands." },
    { q: "How long does a typical website project take?", a: "A standard premium website takes between 4 to 8 weeks, depending on the complexity of features, custom animations, and integrations required." },
    { q: "What technology stack do you use?", a: "We primarily build blazing-fast applications using React, Next.js, and Node.js. For Styling, we utilize Tailwind CSS and Framer Motion for high-end micro-interactions." },
    { q: "How much does a custom website cost?", a: "Our premium custom web development services typically start at $10,000. For an accurate quote, we recommend scheduling a discovery call." }
  ];

  const blogs = [
    { id: 1, title: "The Future of Web Development in 2026", date: "March 15, 2026", category: "Development", readTime: "5 min read" },
    { id: 2, title: "Mastering Performance Marketing for SaaS", date: "March 10, 2026", category: "Marketing", readTime: "8 min read" },
    { id: 3, title: "Why Dark Mode is More Than Just a Trend", date: "March 5, 2026", category: "Design", readTime: "4 min read" },
  ];

  return (
    <div className="flex flex-col w-full bg-dark">
      <LeadPopup />
      
      {/* 1. Hero Section - Elevated Aesthetics */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#050505]">
        <div className="absolute inset-0 z-0">
          <Image src="/hero-abstract.png" alt="DevilsTechs Premium Agency Architecture" fill priority className="object-cover opacity-20" sizes="100vw" />
        </div>
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
           <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
           <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-900/40 rounded-full blur-[150px] mix-blend-screen"></div>
        </div>
        
        <motion.div 
          className="relative z-10 max-w-[1200px] mx-auto px-6 text-center"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp} className="mb-6 inline-block">
            <span className="px-4 py-1.5 border border-primary/30 text-primary uppercase tracking-widest text-xs font-bold bg-primary/5 backdrop-blur-md rounded-full shadow-[0_0_15px_rgba(16,243,206,0.3)]">
              Welcome to the Future
            </span>
          </motion.div>
          <motion.h1 
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-[6rem] font-black text-white tracking-tighter mb-8 leading-[1.05]"
          >
            We Provoke Change.<br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-teal-900 drop-shadow-2xl">
              We Create Success.
            </span>
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed"
          >
            A premium digital agency engineering high-end web experiences, striking brand identities, and aggressive growth marketing for audacious brands.
          </motion.p>
          <motion.div 
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link href="/services" className="px-10 py-5 bg-primary text-dark font-black uppercase tracking-widest text-sm w-full sm:w-auto hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(16,243,206,0.5)]">
              Explore Services
            </Link>
            <Link href="/contact" className="px-10 py-5 bg-transparent border-2 border-primary text-primary font-black uppercase tracking-widest text-sm w-full sm:w-auto hover:bg-primary hover:text-dark transition-all duration-300 backdrop-blur-sm">
              Get A Quote
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
           <div className="w-[1px] h-[60px] bg-gradient-to-b from-primary to-transparent"></div>
        </motion.div>
      </section>

      {/* 1.5 Trustpilot & Google Reviews Banner */}
      <section className="py-6 bg-[#0a0a0a] border-b border-white/5 relative z-20">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-16">
          <div className="flex items-center gap-3">
            <span className="text-white font-bold text-lg">Rated 4.9/5</span>
            <div className="flex gap-1 text-primary">
              <Star size={20} className="fill-primary" /><Star size={20} className="fill-primary" /><Star size={20} className="fill-primary" /><Star size={20} className="fill-primary" /><Star size={20} className="fill-primary" />
            </div>
            <span className="text-gray-400 font-medium">on</span>
            <span className="text-white font-black flex items-center gap-1"><Star size={20} className="fill-green-500 text-green-500" /> Trustpilot</span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-white/10"></div>
          <div className="flex items-center gap-3">
             <span className="text-white font-bold text-lg">Rated 5.0/5</span>
             <div className="flex gap-1 text-primary">
              <Star size={20} className="fill-primary" /><Star size={20} className="fill-primary" /><Star size={20} className="fill-primary" /><Star size={20} className="fill-primary" /><Star size={20} className="fill-primary" />
            </div>
            <span className="text-gray-400 font-medium">on</span>
            <span className="text-white font-black flex items-center gap-1">Google Reviews</span>
          </div>
        </div>
      </section>

      {/* 2. Services Grid Section */}
      <section className="py-32 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-20 text-center"
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">What We Do</span>
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight">Our Premium Services</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-[#111] p-10 border border-white/5 group hover:border-primary/50 transition-all duration-500 relative overflow-hidden shadow-xl hover:shadow-[0_0_40px_rgba(16,243,206,0.1)]"
              >
                <div className="absolute -right-10 -top-10 text-white/5 transform scale-[5] group-hover:text-primary/10 transition-colors duration-500 pointer-events-none">
                  {service.icon}
                </div>
                <div className="text-primary mb-8 transform group-hover:scale-110 transition-transform duration-300 relative z-10">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{service.title}</h3>
                <p className="text-text-gray mb-8 leading-relaxed relative z-10">{service.desc}</p>
                <Link href={`/services/${service.title.toLowerCase().replace(/ /g, '-')}`} className="text-primary font-bold text-sm uppercase flex items-center gap-2 group-hover:gap-4 transition-all duration-300 relative z-10">
                  Read More <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. About Us Tabs Section */}
      <section className="py-32 bg-[#151515] relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">About Us</span>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight tracking-tight">We Are Not Your Average Agency.</h2>
            
            <div className="flex gap-4 border-b border-white/10 mb-8 overflow-x-auto pb-4">
              {aboutTabs.map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`text-sm font-bold uppercase tracking-wider py-2 px-4 whitespace-nowrap transition-colors duration-300 ${
                    activeTab === idx ? "bg-primary text-dark" : "text-text-gray hover:text-white bg-white/5"
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>
            
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-gray-300 text-lg leading-relaxed border-l-2 border-primary pl-6"
            >
              {aboutTabs[activeTab].content}
            </motion.div>
            
            <div className="mt-12">
              <Link href="/about" className="px-8 py-4 bg-white text-dark font-bold uppercase tracking-widest text-sm hover:bg-primary transition-colors duration-300 inline-block shadow-lg">
                Discover More
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-square bg-[#0a0a0a] border border-white/5 relative flex items-center justify-center overflow-hidden shadow-2xl group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <span className="text-4xl md:text-5xl font-black text-white/20 tracking-tighter relative z-10 drop-shadow-md">DEVILS<span className="text-primary/40">TECH</span> MEDIA</span>
          </motion.div>
        </div>
      </section>

      {/* 4. Stats Counter Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 relative z-10">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center group"
            >
              <h3 className="text-6xl md:text-7xl font-black text-dark mb-4 drop-shadow-md transform group-hover:-translate-y-2 transition-transform duration-300">{stat.number}</h3>
              <p className="text-dark hover:text-white transition-colors duration-300 font-bold uppercase tracking-widest text-sm border-t-2 border-dark/20 pt-4 w-1/2 mx-auto">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. Wall of Love (Testimonials on Homepage) */}
      <section className="py-32 bg-[#0a0a0a]">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-24"
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Wall of Love</span>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">Client<span className="text-primary"> Say's.</span></h2>
            <p className="text-text-gray max-w-2xl mx-auto text-lg leading-relaxed">
              Don't just take our word for it. Look at what established brands say after experiencing a DevilsTech overhaul.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
            {testimonials.map((t, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-10 relative rounded-sm group hover:-translate-y-3 transition-all duration-500 shadow-2xl flex flex-col items-center text-center mt-10"
              >
                <div className="absolute -top-12 w-24 h-24 rounded-full overflow-hidden border-[6px] border-white shadow-xl bg-gray-200 flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                  <Image src={t.avatar} alt={t.name} width={96} height={96} className="object-cover w-full h-full" />
                </div>
                
                <div className="mt-8 mb-6 flex-1 flex flex-col">
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} className={i < t.rating ? "fill-primary text-primary" : "fill-gray-300 text-gray-300"} />
                    ))}
                  </div>
                  <Quote size={40} className="text-gray-100 mx-auto mb-4 scale-x-[-1]" />
                  <p className="text-gray-600 italic text-lg leading-relaxed mb-8 flex-1">"{t.quote}"</p>
                  <div className="w-16 h-1 bg-gradient-to-r from-primary to-teal-700 mx-auto mb-6"></div>
                  <h4 className="text-xl font-black text-dark">{t.name}</h4>
                  <p className="text-xs font-bold tracking-widest text-primary uppercase mt-2">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ Section (Homepage Addition) */}
      <section className="py-32 bg-[#151515] relative overflow-hidden">
        <div className="max-w-[1000px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Help Center</span>
            <h2 className="text-5xl font-black text-white mb-6 leading-tight">Frequently Asked<br /><span className="text-primary">Questions.</span></h2>
            <p className="text-text-gray mb-10 text-lg leading-relaxed">
              Have questions about our process, technology, or pricing? Here are the facts you need.
            </p>
            <Link href="/faqs" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-dark font-bold uppercase tracking-widest text-sm hover:bg-white transition-all duration-300">
              View All FAQs <ArrowRight size={16} />
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-[#111] border border-white/5 overflow-hidden">
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors duration-300"
                >
                  <h3 className="text-lg md:text-xl font-bold text-white pr-8">{faq.q}</h3>
                  <motion.div 
                    animate={{ rotate: activeFaq === idx ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-primary flex-shrink-0 bg-primary/10 p-2 rounded-full"
                  >
                    {activeFaq === idx ? <Minus size={20} /> : <Plus size={20} />}
                  </motion.div>
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="p-6 pt-0 text-gray-400 leading-relaxed text-md md:text-lg border-t border-white/5 mt-2">
                        <p className="pt-4">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. Get In Touch (Homepage Addition) */}
      <section className="py-32 bg-[#050505] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] mix-blend-screen pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Start The Process</span>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-none">Ready to <br /><span className="text-primary">Dominate?</span></h2>
            <p className="text-text-gray text-lg leading-relaxed mb-12 max-w-md">
              The internet is crowded. We ensure your brand isn't part of the noise. Let's discuss your exponential growth.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-[#151515] flex items-center justify-center text-primary border border-white/5 group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1 uppercase tracking-wider">Email Us</h4>
                  <p className="text-text-gray text-lg">support@devilstechs.com</p>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-[#151515] flex items-center justify-center text-primary border border-white/5 group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1 uppercase tracking-wider">Call Us</h4>
                  <p className="text-text-gray text-lg">+918160969105</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#111] p-10 lg:p-14 border border-white/10 shadow-2xl relative z-10"
          >
            <h3 className="text-3xl font-black text-white mb-8">Send a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-text-gray text-xs font-bold uppercase tracking-widest mb-3">Your Name</label>
                  <input type="text" className="w-full bg-[#0a0a0a] border border-white/5 p-4 text-white focus:outline-none focus:border-primary transition-colors text-lg" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-text-gray text-xs font-bold uppercase tracking-widest mb-3">Email Address</label>
                  <input type="email" className="w-full bg-[#0a0a0a] border border-white/5 p-4 text-white focus:outline-none focus:border-primary transition-colors text-lg" placeholder="john@company.com" />
                </div>
              </div>
              <div>
                <label className="block text-text-gray text-xs font-bold uppercase tracking-widest mb-3">Phone Number</label>
                <input type="tel" className="w-full bg-[#0a0a0a] border border-white/5 p-4 text-white focus:outline-none focus:border-primary transition-colors text-lg" placeholder="+1 (555) 000-0000" />
              </div>
              <div>
                <label className="block text-text-gray text-xs font-bold uppercase tracking-widest mb-3">Project Details</label>
                <textarea rows={4} className="w-full bg-[#0a0a0a] border border-white/5 p-4 text-white focus:outline-none focus:border-primary transition-colors resize-none text-lg" placeholder="Tell us about your project..."></textarea>
              </div>
              <button className="w-full py-5 bg-primary text-dark font-black uppercase tracking-widest text-sm hover:bg-white flex items-center justify-center gap-3 transition-colors duration-300 mt-6 group">
                Submit Request <Send size={18} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* 8. Recent Blogs Section */}
      <section className="py-32 bg-[#151515] border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
          >
            <div>
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Journal</span>
              <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight">Latest <span className="text-primary">News.</span></h2>
            </div>
            <Link href="/blog" className="text-primary font-bold text-sm uppercase flex items-center gap-2 hover:gap-4 transition-all duration-300 bg-primary/10 px-6 py-3 rounded-full hover:bg-primary/20">
              View All Posts <ArrowRight size={16} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((blog, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/3] bg-dark border border-white/5 mb-6 overflow-hidden relative shadow-lg">
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 left-4 bg-primary text-dark font-black text-xs uppercase px-4 py-1.5 shadow-md tracking-wider">
                    {blog.category}
                  </div>
                </div>
                <div className="flex items-center gap-4 text-xs font-bold text-text-gray uppercase tracking-widest mb-4">
                  <span>{blog.date}</span>
                  <span className="w-1.5 h-1.5 bg-primary/50 rounded-full"></span>
                  <span>{blog.readTime}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 leading-snug group-hover:text-primary transition-colors duration-300">
                  <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
