"use client";

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, User, Tag } from 'lucide-react';
import Link from 'next/link';

type BlogItem = {
  id: string;
  date: string;
  month: string;
  img: string;
  author: string;
  category: string;
  title: string;
  excerpt: string;
  href: string;
};

const BLOGS: BlogItem[] = [
  {
    id: 'b1',
    date: '15',
    month: 'Oct',
    img: '/images/blog/images1.avif',
    author: 'Navin Agarwal',
    category: 'Industry Trends',
    title: 'The Future of Container Transportation in India: 5 Trends Reshaping the Industry',
    excerpt:
      "As India's logistics sector evolves rapidly, container transportation is experiencing unprecedented transformation. From AI-powered route optimization to sustainability mandates...",
    href: '/blog',
  },
  {
    id: 'b2',
    date: '12',
    month: 'Oct',
    img: '/images/blog/images2.avif',
    author: 'Safety Team',
    category: 'Safety & Compliance',
    title: 'Zero-Damage Logistics: How Advanced Safety Protocols Protect High-Value Cargo',
    excerpt:
      "In an industry where even a small margin of damage can cost millions, Nisha Roadways' zero-damage methodology has become the gold standard...",
    href: '/blog',
  },
  {
    id: 'b3',
    date: '10',
    month: 'Oct',
    img: '/images/blog/images3.avif',
    author: 'Project Team',
    category: 'Case Studies',
    title: 'Project Cargo Success: Moving 120-Ton Equipment Across Challenging Routes',
    excerpt:
      "When a leading power plant needed to transport oversized equipment through narrow mountain passes, our specialized ODC team delivered...",
    href: '/blog',
  },
];

function BlogCard({ post, index }: { post: BlogItem; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-[1.25rem] sm:rounded-[2rem] overflow-hidden border border-slate-100 hover:border-blue-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full min-w-[200px] w-[65vw] sm:w-full sm:min-w-0 flex-shrink-0 snap-start"
    >
      {/* Image Container */}
      <div className="relative h-[120px] sm:h-[240px] overflow-hidden">
        <Image
          src={post.img}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-white/90 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl sm:rounded-2xl border border-white/20 shadow-lg text-center min-w-[50px] sm:min-w-[60px]">
          <div className="text-lg sm:text-xl font-black text-blue-600 leading-none">{post.date}</div>
          <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">{post.month}</div>
        </div>


      </div>

      {/* Content */}
      <div className="p-4 sm:p-8 flex-1 flex flex-col">
        <div className="flex items-center gap-4 sm:gap-6 text-[8px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2 sm:mb-4">
          <div className="flex items-center gap-1 sm:gap-2">
            <User className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-500" />
            {post.author}
          </div>
        </div>

        <h3 className="text-sm sm:text-xl font-bold text-slate-900 leading-tight mb-2 sm:mb-4 group-hover:text-blue-600 transition-colors line-clamp-2">
          {post.title}
        </h3>

        <p className="text-[10px] sm:text-sm text-slate-500 leading-relaxed line-clamp-2 mb-4 sm:mb-8">
          {post.excerpt}
        </p>

        <div className="mt-auto pt-6 border-t border-slate-50">
          <Link
            href={post.href}
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 group/link"
          >
            READ ARTICLE
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default function BlogSection() {
  return (
    <section className="relative bg-white py-12 sm:py-16">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-50/50 rounded-full blur-[100px] -z-10 -translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 relative z-10">
        {/* Centered Heading */}
        <div className="text-center mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-4 sm:gap-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-600/10 border border-blue-600/20 rounded-full w-fit">
              <Tag className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
              <span className="text-[10px] sm:text-xs font-black text-blue-700 uppercase tracking-widest">Industry Insights</span>
            </div>

            <h2 className="text-sm sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
              Knowledge & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">Logistics Trends.</span>
            </h2>

            {/* Gradient underline */}
            <div className="w-16 sm:w-24 h-1 sm:h-1.5 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 mx-auto rounded-full"></div>

            <p className="max-w-2xl text-xs sm:text-base lg:text-lg text-slate-600 font-medium leading-relaxed">
              Stay ahead with expert perspectives on global trade, technological breakthroughs,
              and the future of supply chain management.
            </p>
          </motion.div>
        </div>

        {/* Grid / Horizontal Scroll on Mobile */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 snap-x snap-mandatory pb-4 sm:pb-8 pt-2 sm:pt-4 px-2 sm:px-6 md:px-8 -mx-2 sm:-mx-6 md:-mx-8">
          {BLOGS.map((post, idx) => (
            <div key={post.id} className="p-1 sm:p-3">
              <BlogCard post={post} index={idx} />
            </div>
          ))}
        </div>

        {/* Centered CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 sm:mt-6 text-center"
        >
          <Link href="/blog">
            <button className="group relative px-5 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white font-black text-[10px] sm:text-xs uppercase tracking-widest rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 active:scale-95 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                Explore Knowledge Hub
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
