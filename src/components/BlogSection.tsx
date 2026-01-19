"use client";

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';
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
      className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 hover:border-blue-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
    >
      {/* Image Container */}
      <div className="relative h-[240px] overflow-hidden">
        <Image
          src={post.img}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/20 shadow-lg text-center min-w-[60px]">
          <div className="text-xl font-black text-blue-600 leading-none">{post.date}</div>
          <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">{post.month}</div>
        </div>

        {/* Category Overlay */}
        <div className="absolute bottom-6 right-6">
          <span className="px-4 py-1.5 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex-1 flex flex-col">
        <div className="flex items-center gap-6 text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">
          <div className="flex items-center gap-2">
            <User className="w-3.5 h-3.5 text-blue-500" />
            {post.author}
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 leading-tight mb-4 group-hover:text-blue-600 transition-colors line-clamp-2">
          {post.title}
        </h3>

        <p className="text-sm text-slate-500 leading-relaxed line-clamp-3 mb-8">
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
    <section className="relative bg-white py-24 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-50/50 rounded-full blur-[100px] -z-10 -translate-x-1/2 -translate-y-1/2"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        {/* Heading */}
        <div className="mb-16 text-center lg:text-left flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-100 rounded-full mb-6 text-slate-500">
              <Tag className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-widest">Knowledge Center</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
              Industry Insights & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Logistics Trends.
              </span>
            </h2>
          </div>

          <div className="hidden lg:block pb-1">
            <Link
              href="/blog"
              className="px-8 py-3 border-2 border-slate-200 rounded-full text-sm font-bold text-slate-600 hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
            >
              VIEW KNOWLEDGE HUB
            </Link>
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {BLOGS.map((post, idx) => (
            <BlogCard key={post.id} post={post} index={idx} />
          ))}
        </div>

        {/* Mobile View Hub Link */}
        <div className="mt-12 text-center lg:hidden">
          <Link
            href="/blog"
            className="inline-flex px-8 py-3 border-2 border-slate-200 rounded-full text-sm font-bold text-slate-600"
          >
            VIEW KNOWLEDGE HUB
          </Link>
        </div>
      </div>
    </section>
  );
}
