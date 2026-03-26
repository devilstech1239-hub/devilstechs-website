"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink, CheckCircle } from "lucide-react";
import { useParams } from "next/navigation";

const portfolioDatabase: Record<string, any> = {
  "1": { 
    id: 1, 
    title: "Lumina Skin", 
    category: "Web", 
    image: "bg-neutral-800",
    client: "Lumina Cosmeceuticals",
    timeline: "8 Weeks",
    metrics: ["45% Conversion Increase", "Sub-second Page Loads", "200% Mobile Traffic Growth"],
    details: "A massive headless Next.js e-commerce build for a luxury skincare brand. The legacy WordPress site was causing high bounce rates due to 6-second load times. We migrated them to a modern React architecture backed by Shopify headless APIs, resulting in an immediate 45% uplift in conversion rates." 
  },
  "2": { 
    id: 2, 
    title: "Nexus Brand Identity", 
    category: "Branding", 
    image: "bg-neutral-900",
    client: "Nexus AI Solutions",
    timeline: "4 Weeks",
    metrics: ["Complete Rebrand", "Design System Delivery", "Motion Graphics Suite"],
    details: "Complete brand overhaul including strict dark-mode design systems, motion graphics, and typography architecture. We positioned Nexus as a premium enterprise AI provider, diverging from typical SaaS aesthetics to create a commanding, high-contrast visual identity." 
  },
  "3": { 
    id: 3, 
    title: "Apex FinTech", 
    category: "Web", 
    image: "bg-stone-900",
    client: "Apex Financial",
    timeline: "12 Weeks",
    metrics: ["Zero Downtime Launch", "Real-time WebSockets", "Custom Visualization"],
    details: "An ultra-secure React dashboard handling millions in transactions, featuring real-time WebSockets and complex data visualization. We utilized advanced charting libraries and strict State Management to ensure traders experienced zero lag during peak market hours." 
  },
  "4": { 
    id: 4, 
    title: "Horizon SaaS Growth", 
    category: "Marketing", 
    image: "bg-zinc-900",
    client: "Horizon Analytics",
    timeline: "6 Months",
    metrics: ["300% MRR Growth", "70% Lower CPL", "$2M Pipeline Generated"],
    details: "An aggressive 6-month B2B SEM campaign that scaled MRR by 300% using hyper-targeted LinkedIn and Google Network scaling. We deployed account-based marketing tactics to capture enterprise leads that had previously eluded their internal marketing team." 
  },
  "5": { 
    id: 5, 
    title: "Studio 9 Redesign", 
    category: "Web", 
    image: "bg-gray-900",
    client: "Studio 9 Architecture",
    timeline: "10 Weeks",
    metrics: ["Awwwards Nominee", "Interactive WebGL", "Premium Lead Surge"],
    details: "Portfolio redesign for an elite architecture firm utilizing Framer Motion and WebGL integrations for cinematic 3D scroll experiences. The site functions more like a digital gallery than a standard agency site, fully immersing high-net-worth clients in their architectural philosophy." 
  },
  "6": { 
    id: 6, 
    title: "Elevate Campaigns", 
    category: "Marketing", 
    image: "bg-slate-900",
    client: "Elevate Startup",
    timeline: "90 Days",
    metrics: ["50+ Media Placements", "Domain Rating +25", "Global PR Reach"],
    details: "Omnichannel digital PR and High Authority Backlink sprint that secured 50+ tier-1 media placements in 90 days. We hijacked trending news cycles and positioned their founders as thought leaders, resulting in unprecedented domain authority spikes." 
  },
};

export default function PortfolioDetail() {
  const params = useParams();
  const id = params?.id as string;
  const project = portfolioDatabase[id];

  if (!project) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center text-white text-center px-6">
        <div>
          <h1 className="text-4xl font-black mb-4">Project Not Found</h1>
          <Link href="/portfolio" className="text-primary hover:text-white flex items-center gap-2 justify-center transition-colors">
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-dark min-h-screen pb-32">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-[#0a0a0a] border-b border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/portfolio" className="text-primary hover:text-white flex items-center gap-2 mb-10 w-max transition-colors">
              <ArrowLeft size={16} /> All Projects
            </Link>
            
            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-6 px-4 py-1.5 border border-primary/30 inline-block bg-primary/5 rounded-full">
              {project.category}
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">{project.title}</h1>
            
            <div className="flex gap-10 border-t border-white/10 pt-8 mt-10">
              <div>
                <p className="text-xs uppercase tracking-widest text-text-gray font-bold mb-2">Client</p>
                <p className="text-white font-medium">{project.client}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-text-gray font-bold mb-2">Timeline</p>
                <p className="text-white font-medium">{project.timeline}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className={`w-full aspect-square md:aspect-video lg:aspect-square ${project.image} relative overflow-hidden shadow-2xl`}
          >
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          </motion.div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-black text-white mb-6">The Challenge & Solution</h2>
            <div className="w-12 h-1 bg-primary mb-8"></div>
            <p className="text-gray-300 text-lg leading-relaxed mb-10">
              {project.details}
            </p>
            
            <div className="p-8 bg-[#111] border-l-4 border-primary mt-12">
              <h3 className="text-xl font-black text-white mb-4">Ready to achieve similar results?</h3>
              <p className="text-gray-400 mb-6">Let's discuss how we can engineer growth for your brand.</p>
              <Link href="/contact" className="inline-block px-6 py-3 bg-primary text-dark font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors">
                Start a Conversation
              </Link>
            </div>
          </div>

          <div className="bg-[#151515] p-10 border border-white/5 h-max">
            <h3 className="text-xl font-black text-white mb-6 uppercase tracking-wider">Key Metrics</h3>
            <div className="space-y-4">
              {project.metrics.map((metric: string, idx: number) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-300 font-medium">{metric}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/10">
              <Link href="#" className="flex items-center justify-between w-full text-white font-bold uppercase tracking-widest text-sm hover:text-primary transition-colors group">
                Live Case Study <ExternalLink size={16} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
