"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { useState } from "react";

const blogCategories = ["All", "Design", "Development", "Marketing"];

const featuredPost = {
  id: 1,
  title: "The Future of Web Development in 2026: Why Speed is the Only Metric that Matters",
  excerpt: "In a world where attention spans are measured in milliseconds, premium brands can no longer afford sluggish load times. We explore the architectural shifts that are redefining high-end web experiences.",
  category: "Development",
  date: "March 15, 2026",
  readTime: "8 min read",
  image: "bg-gradient-to-br from-dark to-primary/20",
};

const recentPosts = [
  {
    id: 2,
    title: "Mastering Performance Marketing for High-Ticket B2B SaaS",
    excerpt: "A deep dive into the advanced SEM and paid social strategies we use to drive explosive growth for enterprise software companies.",
    category: "Marketing",
    date: "March 10, 2026",
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "Dark Mode UX: It's More Than Just Inverting Colors",
    excerpt: "Analyzing the psychological impact of dark UI patterns and how to implement premium aesthetic contrast without sacrificing readability.",
    category: "Design",
    date: "March 5, 2026",
    readTime: "5 min read",
  },
  {
    id: 4,
    title: "High Authority Backlinks: Quality Over Quantity",
    excerpt: "Stop buying toxic links. Discover the ethical, high-impact strategies we use to secure placements on Forbes, TechCrunch, and industry-leading publications.",
    category: "Marketing",
    date: "February 28, 2026",
    readTime: "7 min read",
  },
  {
    id: 5,
    title: "Framer Motion vs CSS Animations: When to Use Which?",
    excerpt: "A technical comparison of animation frameworks for modern React applications, focusing on performance, developer experience, and visual fidelity.",
    category: "Development",
    date: "February 15, 2026",
    readTime: "10 min read",
  },
  {
    id: 6,
    title: "The ROI of Premium Branding",
    excerpt: "Why the cheapest option is often the most expensive mistake. How investing in high-end design significantly increases customer lifetime value.",
    category: "Design",
    date: "February 10, 2026",
    readTime: "4 min read",
  }
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All" 
    ? recentPosts 
    : recentPosts.filter(post => post.category === activeCategory);

  return (
    <div className="pt-32 pb-32 bg-dark min-h-screen">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Journal</span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">Insights & <span className="text-primary">Perspectives.</span></h1>
          <p className="text-text-gray max-w-2xl mx-auto text-lg">
            Deep technical dives, marketing strategies, and design philosophy from the engineering and creative teams at DevilsTech.
          </p>
        </motion.div>

        {/* Featured Post */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-24"
        >
          <h2 className="text-2xl font-black text-white mb-8 border-b border-white/10 pb-4">Featured Article</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-white/10 group overflow-hidden cursor-pointer hover:border-primary/50 transition-colors duration-500">
            <div className={`aspect-video lg:aspect-auto ${featuredPost.image} relative overflow-hidden bg-[#151515]`}>
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20mix-blend-overlay"></div>
            </div>
            <div className="p-10 lg:p-16 flex flex-col justify-center bg-[#111]">
              <div className="flex items-center gap-4 text-xs font-bold text-text-gray uppercase tracking-wider mb-6">
                <span className="text-primary group-hover:text-white transition-colors">{featuredPost.category}</span>
                <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                <span className="flex items-center gap-1"><Calendar size={12} /> {featuredPost.date}</span>
                <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                <span className="flex items-center gap-1"><Clock size={12} /> {featuredPost.readTime}</span>
              </div>
              <h3 className="text-4xl font-black text-white mb-6 leading-tight group-hover:text-primary transition-colors duration-300">
                {featuredPost.title}
              </h3>
              <p className="text-text-gray text-lg leading-relaxed mb-10">
                {featuredPost.excerpt}
              </p>
              <Link href={`/blog/${featuredPost.id}`} className="inline-flex w-max items-center gap-2 px-6 py-3 bg-primary text-dark font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors duration-300">
                Read Article <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-12 border-b border-white/10 pb-8">
          {blogCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300 ${
                activeCategory === category 
                  ? "bg-primary text-dark" 
                  : "bg-transparent text-white border border-white/20 hover:border-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Recent Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group cursor-pointer flex flex-col h-full"
            >
              <div className="aspect-[4/3] bg-[#151515] border border-white/10 mb-6 overflow-hidden relative group-hover:border-primary/50 transition-colors duration-500">
                 <div className="absolute top-4 left-4 bg-primary text-dark font-bold text-xs uppercase tracking-widest px-3 py-1 shadow-md">
                  {post.category}
                </div>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500"></div>
              </div>
              
              <div className="flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-xs font-bold text-text-gray uppercase tracking-wider mb-4">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                  <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 leading-snug group-hover:text-primary transition-colors duration-300">
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                <p className="text-text-gray leading-relaxed mb-6 flex-1 text-sm md:text-base">
                  {post.excerpt}
                </p>
                <Link href={`/blog/${post.id}`} className="mt-auto text-primary font-bold text-sm uppercase flex items-center gap-2 group-hover:gap-4 transition-all duration-300 w-max">
                  Read More <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
