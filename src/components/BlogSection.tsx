"use client";

import Image from 'next/image';
import Link from 'next/link';
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
    date: '18',
    month: 'March',
    img: '/images/blog/blog-img1.png',
    author: 'Henry Nicolls',
    category: 'Tax Lawyer',
    title: 'Experience Matters: Your Tax Your & Resolution Starts Here',
    excerpt:
      "As a small business owner, you’re well aware of the numerous financial responsibilities.",
    href: '#',
  },
  {
    id: 'b2',
    date: '16',
    month: 'June',
    img: '/images/blog/blog-img2.png',
    author: 'Henry Nicolls',
    category: 'Tax Lawyer',
    title: 'Experience Matters: Your Tax Your & Resolution Starts Here',
    excerpt:
      "As a small business owner, you’re well aware of the numerous financial responsibilities.",
    href: '#',
  },
  {
    id: 'b3',
    date: '12',
    month: 'July',
    img: '/images/blog/blog-img3.png',
    author: 'Henry Nicolls',
    category: 'Tax Lawyer',
    title: 'Experience Matters: Your Tax Your & Resolution Starts Here',
    excerpt:
      "As a small business owner, you’re well aware of the numerous financial responsibilities.",
    href: '#',
  },
];



function BlogCard({ post, index }: { post: BlogItem; index: number }) {
  return (
    <article className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:shadow-xl">
      {/* Media */}
      <div className="relative h-[200px] sm:h-[240px] lg:h-[280px] overflow-hidden">
        <Image
          src={post.img}
          alt={post.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          priority={index === 0}
        />
      </div>

      {/* Content footer */}
      <div className="relative z-10 -mt-1 sm:-mt-2 rounded-b-xl sm:rounded-b-2xl px-4 sm:px-5 lg:px-6 pb-4 sm:pb-5 lg:pb-6 pt-4 sm:pt-5 lg:pt-6 transition-colors duration-500 ease-in-out bg-white text-gray-900 group-hover:bg-[#5a3df0] group-hover:text-white">
        {/* Meta */}
        <div className="mb-3 sm:mb-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 lg:gap-6 text-xs sm:text-sm">
          <div className="flex items-center gap-2 opacity-80">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="transition-colors duration-300 group-hover:fill-white/90 sm:w-4 sm:h-4"><path d="M12 12c2.209 0 4-1.791 4-4s-1.791-4-4-4-4 1.791-4 4 1.791 4 4 4Zm0 2c-3.313 0-6 2.239-6 5v1h12v-1c0-2.761-2.687-5-6-5Z" fill="currentColor"/></svg>
            <span className="text-xs sm:text-sm">{post.author}</span>
          </div>
          <div className="flex items-center gap-2 opacity-80">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="transition-colors duration-300 group-hover:fill-white/90 sm:w-4 sm:h-4"><path d="M12 2 2 7l10 5 10-5-10-5Zm0 20-10-5V9l10 5 10-5v8l-10 5Z" fill="currentColor"/></svg>
            <span className="text-xs sm:text-sm">{post.category}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl lg:text-2xl font-semibold leading-snug line-clamp-2">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="mb-4 sm:mb-5 text-sm sm:text-[15px] leading-5 sm:leading-6 opacity-90 line-clamp-2 sm:line-clamp-3">
          {post.excerpt}
        </p>

        {/* Read more */}
        <Link
          href={post.href}
          className="inline-flex items-center gap-2 font-medium text-[#5a3df0] transition-colors group-hover:text-white text-sm sm:text-base"
        >
          Read More
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">→</span>
        </Link>
      </div>
    </article>
  );
}

export default function BlogSection() {
  return (
    <section className="bg-[#f6f3ff] py-12 sm:py-16">
      <div className="mx-auto max-w-[1350px] px-4 sm:px-6">
        {/* Heading */}
        <div className="mb-8 sm:mb-10 text-center">
          <span className="inline-block rounded-full bg-white px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-[#5a3df0] shadow-sm">
            Our Blogs
          </span>
          <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1f1634] leading-tight">
          Latest Insights From Our Trucker Tools
          </h2>
        </div>

        {/* Grid */}
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {BLOGS.map((post, idx) => (
            <BlogCard key={post.id} post={post} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}


