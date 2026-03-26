"use client";

import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

// Mock data for the dynamic service pages
const serviceDetails: Record<string, any> = {
  "seo-optimization": {
    title: "SEO Optimization",
    tagline: "Dominate Search Rankings",
    heroImage: "bg-[url('https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')]",
    overview: "Our premium SEO services ensure your brand captures the highest digital visibility. We engineer search intent, authoritative content, and technical perfection to position you at the top.",
    features: ["Deep Technical Audits", "Competitor Keyword Gap Analysis", "Content Strategy & Engineering", "Local & Global Search Dominance", "Link Profile Management"]
  },
  "performance-marketing": {
    title: "Performance Marketing",
    tagline: "Maximize ROI Interventions",
    heroImage: "bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')]",
    overview: "We execute data-driven SEM and paid social campaigns that aggressively target your ideal customers. Stop burning ad spend and start driving measurable impact.",
    features: ["Google Ads & PPC", "Advanced Analytics Attribution", "A/B Testing & CRO", "Retargeting Infrastructure", "Meta & LinkedIn Ads"]
  },
  "website-development": {
    title: "Website Development",
    tagline: "High-Speed, Premium Web Architecture",
    heroImage: "bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')]",
    overview: "We construct blazing fast, visually stunning digital experiences. Built on Next.js and React, our applications boast 99+ Lighthouse performance scores.",
    features: ["Custom React & Next.js Builds", "Headless CMS Solutions", "E-Commerce Integrations", "Framer Motion Interactive Design", "API Development"]
  },
  "high-authority-backlinks": {
    title: "High Authority Backlinks",
    tagline: "Build Unbreakable Digital Trust",
    heroImage: "bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')]",
    overview: "Secure placements on the world's most trusted publications. Our white-hat PR strategies significantly enhance your domain authority and organic footprint.",
    features: ["Digital PR Placements", "Manual Outreach Campaigns", "Guest Post Ecosystems", "Toxic Link Disavowing", "Authority Scaling"]
  },
  "social-media-marketing": {
    title: "Social Media Marketing",
    tagline: "Command Attention, Drive Loyalty",
    heroImage: "bg-[url('https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')]",
    overview: "We create viral, aesthetic, and compelling brand narratives across Facebook, TikTok, Instagram, and LinkedIn. Turn passive scrollers into fervent brand advocates.",
    features: ["Cross-Platform Strategy", "Premium Visual Content", "Community Growth Tactics", "Influencer Collaborations", "Trend Utilization"]
  }
};

export default function ServiceDetail() {
  const params = useParams();
  const slug = params?.slug as string;
  const service = serviceDetails[slug];

  if (!service) {
    return (
      <div className="min-h-screen bg-dark flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl font-black text-white mb-6">Service Not Found</h1>
        <Link href="/services" className="text-primary hover:text-white flex items-center gap-2">
          <ArrowLeft size={16} /> Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-dark min-h-screen pb-32">
      {/* Dynamic Hero */}
      <section className={`relative pt-40 pb-32 ${service.heroImage} bg-cover bg-center bg-no-repeat`}>
        <div className="absolute inset-0 bg-dark/80 backdrop-blur-sm z-0"></div>
        <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block px-4 py-1 border border-primary/30 inline-block bg-dark/50 backdrop-blur-md">
              {service.tagline}
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">{service.title}</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              {service.overview}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-24">
        <div className="max-w-[1000px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-black text-white mb-8">What You Get</h2>
            <p className="text-text-gray text-lg leading-relaxed mb-8">
              Working with DevilsTech means bypassing the fluff and focusing strictly on growth levers that generate ROI. Our {service.title} protocols map directly to your business goals.
            </p>
            <div className="space-y-4">
              {service.features.map((feature: string, idx: number) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-[#151515] border border-white/5 hover:border-primary/50 transition-colors">
                  <CheckCircle className="text-primary flex-shrink-0" size={24} />
                  <span className="text-white font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#111] border border-white/10 p-10 flex flex-col justify-center"
          >
            <h3 className="text-2xl font-black text-white mb-4">Start Your Campaign</h3>
            <p className="text-text-gray mb-8">Ready to dominate? Our engineering and marketing teams are on standby.</p>
            <Link href="/contact" className="w-full py-4 text-center bg-primary text-dark font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors duration-300">
              Request a Proposal
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
