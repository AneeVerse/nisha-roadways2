"use client";

import Image from 'next/image';
import React from 'react';

type BlogItem = {
  id: string;
  date: string; // e.g. "18"
  month: string; // e.g. "March"
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
    month: 'October',
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
    month: 'October',
    img: '/images/blog/images2.avif',
    author: 'Safety Team Lead',
    category: 'Safety & Compliance',
    title: 'Zero-Damage Logistics: How Advanced Safety Protocols Are Revolutionizing Cargo Protection',
    excerpt:
      "In an industry where even 0.1% damage can cost millions, Nisha Roadways' zero-damage methodology has become the gold standard...",
    href: '/blog',
  },
  {
    id: 'b3',
    date: '10',
    month: 'October',
    img: '/images/blog/images3.avif',
    author: 'Project Management Team',
    category: 'Case Studies',
    title: 'Project Cargo Success Story: Moving 120-Ton Equipment Across India\'s Most Challenging Routes',
    excerpt:
      "When a leading power plant needed to transport oversized equipment through narrow mountain passes, conventional logistics failed...",
    href: '/blog',
  },
];



function BlogCard({ post, index }: { post: BlogItem; index: number }) {
  return (
    <article className="group relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Image with internal padding and curved corners */}
      <div className="relative h-[200px] mb-6 overflow-hidden rounded-2xl">
        <Image
          src={post.img}
          alt={post.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          priority={index === 0}
        />
      </div>

      {/* Content - simplified to just title and description */}
      <div className="space-y-3">
        {/* Title */}
        <h3 className="text-lg font-semibold leading-tight line-clamp-2 text-gray-900">
          {post.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>
      </div>
    </article>
  );
}

export default function BlogSection() {
  return (
    <section className="bg-white py-12 sm:py-16 mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <div className="mb-8 sm:mb-12 md:mb-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm border border-white/20 rounded-full text-blue-600 font-semibold mb-8 shadow-lg">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 animate-pulse"></span>
            Our Blogs
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold text-gray-900 tracking-tight mb-6">
            LATEST <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">INSIGHTS</span> FROM OUR TRUCKER TOOLS
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover industry expertise, safety protocols, and innovative solutions from our logistics professionals
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {BLOGS.map((post, idx) => (
            <BlogCard key={post.id} post={post} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}


