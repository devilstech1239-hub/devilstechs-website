"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Share2, Globe, MessageCircle, AtSign } from "lucide-react";
import { useParams } from "next/navigation";

const blogDatabase: Record<string, any> = {
  "1": {
    title: "The Future of Web Development in 2026: Why Speed is the Only Metric that Matters",
    content: "In a world where attention spans are measured in milliseconds, premium brands can no longer afford sluggish load times. We explore the architectural shifts that are redefining high-end web experiences. Next.js App Router and Turbopack have revolutionized the way we serve content to the edge. Server components drop JavaScript payload sizes drastically while Framer Motion bridges the aesthetic gaps with lightweight hardware-accelerated transitions.\n\nThe real secret? Combining serverless architecture with aggressive edge caching. Brands utilizing Vercel or Cloudflare Workers alongside a heavily optimized Next.js stack see up to 70% better retention on the first pixel paint. The future isn't just fast; it's instant.",
    category: "Development",
    date: "March 15, 2026",
    readTime: "8 min read",
    author: "Alex Mercer",
  },
  "2": {
    title: "Mastering Performance Marketing for High-Ticket B2B SaaS",
    content: "A deep dive into the advanced SEM and paid social strategies we use to drive explosive growth for enterprise software companies. Traditional lead generation is dead. For high-ticket B2B SaaS, the buying journey is entirely non-linear. It involves dark social, heavy brand touchpoints, and aggressive retargeting.\n\nAt DevilsTech, we implement full-funnel tracking utilizing Google Analytics 4 mapping directly to CRM platforms. Our core strategy involves bidding aggressively on extremely high-intent, long-tail bottom-of-funnel keywords, while utilizing LinkedIn conversational ads for upper-funnel penetration. This dual-pronged strategy ensures we don't just capture demand; we generate it.",
    category: "Marketing",
    date: "March 10, 2026",
    readTime: "6 min read",
    author: "Sarah Jenkins",
  },
  "3": {
    title: "Dark Mode UX: It's More Than Just Inverting Colors",
    content: "Analyzing the psychological impact of dark UI patterns and how to implement premium aesthetic contrast without sacrificing readability. Contrast ratios aren't just for accessibility; they dictate the premium feel of your product. Pure black (#000000) creates ghosting effects on OLED screens, which is why we primarily use deep charcoal (#0a0a0a or #151515) as primary bases.\n\nAccenting these with high-saturation primary colors—such as our DevilsTech Teal (#10f3ce)—commands attention instantly. But spacing is arguably more important in dark mode than light mode. Elements need room to breathe to prevent sensory overwhelm. Typography weights should be slightly reduced to account for light text blooming against dark backgrounds.",
    category: "Design",
    date: "March 5, 2026",
    readTime: "4 min read",
    author: "David Chen",
  }
};

export default function BlogDetail() {
  const params = useParams();
  const id = params?.id as string;
  const post = blogDatabase[id] || blogDatabase["1"]; // Default to 1 if not found

  return (
    <div className="bg-dark min-h-screen pb-32">
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-[#0a0a0a] border-b border-white/5">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/blog" className="text-primary hover:text-white flex items-center gap-2 justify-center mb-10 w-max mx-auto transition-colors">
              <ArrowLeft size={16} /> Back to Journal
            </Link>
            
            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-6 px-4 py-1.5 border border-primary/30 inline-block bg-primary/5 rounded-full">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">{post.title}</h1>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-bold text-text-gray uppercase tracking-wider">
              <span className="flex items-center gap-2 text-white"><span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-dark text-xs">{post.author.charAt(0)}</span> {post.author}</span>
              <span className="w-1.5 h-1.5 bg-primary/50 rounded-full hidden sm:block"></span>
              <span className="flex items-center gap-1"><Calendar size={14} className="text-primary" /> {post.date}</span>
              <span className="w-1.5 h-1.5 bg-primary/50 rounded-full hidden sm:block"></span>
              <span className="flex items-center gap-1"><Clock size={14} className="text-primary" /> {post.readTime}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-32">
        <div className="max-w-[800px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="prose prose-invert prose-lg max-w-none prose-p:text-gray-300 prose-p:leading-relaxed prose-headings:text-white prose-headings:font-black prose-a:text-primary prose-strong:text-white mb-20"
          >
            {post.content.split('\n\n').map((paragraph: string, idx: number) => (
              <p key={idx} className="mb-8">{paragraph}</p>
            ))}
            
            <div className="mt-16 p-8 border-l-4 border-primary bg-[#111]">
              <h3 className="text-2xl font-black text-white mb-2">Want to apply these strategies?</h3>
              <p className="text-gray-400 mb-6">Our engineering and marketing teams are ready to scale your brand aggressively. Stop waiting for the future.</p>
              <Link href="/contact" className="inline-block px-6 py-3 bg-primary text-dark font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors">
                Start a Project
              </Link>
            </div>
          </motion.div>
          
          {/* Share Block */}
          <div className="flex items-center justify-between border-t border-white/10 pt-8">
            <span className="text-white font-bold uppercase tracking-widest text-sm flex items-center gap-2"><Share2 size={16} /> Share Article</span>
            <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-dark text-white hover:text-primary flex items-center justify-center transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75"><Globe size={16} /></a>
              <button className="w-10 h-10 rounded-full bg-[#151515] hover:bg-primary hover:text-dark text-white flex items-center justify-center transition-all duration-300"><MessageCircle size={16} /></button>
              <button className="w-10 h-10 rounded-full bg-[#151515] hover:bg-primary hover:text-dark text-white flex items-center justify-center transition-all duration-300"><AtSign size={16} /></button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
