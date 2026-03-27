"use client";

import { motion } from "framer-motion";
import { Search, BarChart, Code, Globe, MessageSquare, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const servicesDetails = [
  {
    icon: <Search size={40} />,
    title: "SEO Optimization",
    tagline: "Organic Growth",
    description: "We don't just optimize for search engines; we optimize for user intent and conversion. Our technical and content-driven SEO strategies ensure your brand dominates the SERPs.",
    features: ["Comprehensive Technical Audits", "Keyword & Intent Engineering", "On-Page Content Optimization", "Local & International SEO"],
    delay: 0.1
  },
  {
    icon: <BarChart size={40} />,
    title: "Performance Marketing",
    tagline: "ROI & SEM",
    description: "Stop wasting ad spend. We engineer highly targeted, data-backed paid search and social campaigns designed purely to maximize Return on Ad Spend (ROAS).",
    features: ["Google Ads & PPC Management", "Paid Social (Meta, LinkedIn)", "Conversion Rate Optimization (CRO)", "Advanced Analytics & Attribution"],
    delay: 0.2
  },
  {
    icon: <Code size={40} />,
    title: "Website Development",
    tagline: "High-Speed & Responsive",
    description: "We build premium, lightning-fast web applications using React and Next.js. Our architectures are flawless, ensuring 99+ Lighthouse scores and immersive micro-interactions.",
    features: ["Custom React/Next.js Architecture", "Framer Motion Animations", "Headless CMS Integration", "E-Commerce Solutions"],
    delay: 0.3
  },
  {
    icon: <Globe size={40} />,
    title: "High Authority Backlinks",
    tagline: "Trust & Authority",
    description: "Scale your domain authority with ethical, white-hat link building. We secure high-quality placements on industry-leading publications to boost your digital trust signals.",
    features: ["Custom Outreach Strategies", "Digital PR Placements", "Guest Post Management", "Toxic Link Removal"],
    delay: 0.4
  },
  {
    icon: <MessageSquare size={40} />,
    title: "Social Media Marketing",
    tagline: "Brand Engagement",
    description: "Turn followers into brand advocates. We craft compelling visual narratives and community management strategies that amplify your brand's voice across all platforms.",
    features: ["Content Strategy & Creation", "Community Management", "Influencer Partnerships", "Social Listening & Reporting"],
    delay: 0.5
  }
];

export default function Services() {
  return (
    <div className="pt-32 pb-32 bg-dark min-h-screen">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">What We Do</span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">Premium <span className="text-primary">Services.</span></h1>
          <p className="text-text-gray max-w-2xl mx-auto text-lg">
            We deliver end-to-end digital solutions designed to provoke change, dominate markets, and scale your operations aggressively.
          </p>
        </motion.div>

        {/* Services List */}
        <div className="space-y-16 lg:space-y-32">
          {servicesDetails.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: service.delay }}
              className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}
            >
              {/* Image / Graphic Placeholder */}
              <div className="w-full lg:w-1/2 aspect-square md:aspect-video lg:aspect-square bg-[#151515] border border-white/5 relative flex items-center justify-center p-10 group overflow-hidden">
                <Image src="/services-preview.png" alt={`${service.title} illustration`} fill className="object-cover opacity-30 group-hover:opacity-60 transition-opacity duration-700" sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="text-primary transform scale-150 group-hover:scale-110 opacity-50 group-hover:opacity-100 transition-all duration-700 relative z-10">
                  {service.icon}
                </div>
                <h3 className="absolute bottom-10 left-10 text-4xl lg:text-5xl font-black text-white/10 uppercase tracking-tighter z-10">
                  {String(idx + 1).padStart(2, '0')}
                </h3>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-4 mb-6 text-primary">
                  {service.icon}
                  <span className="font-bold tracking-widest uppercase text-sm border border-primary px-3 py-1">{service.tagline}</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">{service.title}</h2>
                <p className="text-text-gray text-lg leading-relaxed mb-10">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 border-t border-white/10 pt-8">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-primary flex-shrink-0 mt-1" />
                      <span className="text-white font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-primary text-primary font-bold uppercase tracking-widest text-sm hover:bg-primary hover:text-dark transition-all duration-300">
                  Start Project <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
