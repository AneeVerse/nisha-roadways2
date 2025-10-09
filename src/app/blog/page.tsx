'use client'

import { useState, useMemo } from 'react'
import { Search, User, ArrowRight, TrendingUp, Sparkles } from 'lucide-react'
import type { BlogPost } from '@/data/blogData'
import { blogPosts } from '@/data/blogData'
import Image from 'next/image'

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = useMemo(() => {
    const cats = ['All', ...new Set(blogPosts.map(blog => blog.category))]
    return cats
  }, [])

  const filteredBlogs = useMemo(() => {
    return blogPosts.filter(blog => {
      const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  // Show only 2 featured posts
  const featuredPosts = filteredBlogs.filter(post => post.featured).slice(0, 2)
  const regularPosts = filteredBlogs.filter(post => !post.featured)

  const ArticleCard = ({ post, featured = false }: { post: BlogPost, featured?: boolean }) => (
    <article className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:shadow-xl">
      {/* Media */}
      <div className="relative h-[200px] sm:h-[240px] lg:h-[280px] overflow-hidden">
        <Image
          src="/images/blog/blog-img1.png"
          alt={post.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

      {/* Content footer */}
      <div className="relative z-10 -mt-1 sm:-mt-2 rounded-b-xl sm:rounded-b-2xl px-4 sm:px-5 lg:px-6 pb-4 sm:pb-5 lg:pb-6 pt-4 sm:pt-5 lg:pt-6 transition-colors duration-500 ease-in-out bg-white text-gray-900 group-hover:bg-gradient-to-r group-hover:from-[#6a31eb] group-hover:via-[#9a45d1] group-hover:to-[#d560ab] group-hover:text-white">
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
        <button className="inline-flex items-center gap-2 font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#6a31eb] via-[#9a45d1] to-[#d560ab] group-hover:text-white transition-colors text-sm sm:text-base">
          Read More
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">→</span>
        </button>
      </div>
    </article>
  )

  return (
    <div className="min-h-screen bg-[#f6f3ff] mt-20">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Header */}
        <div className="mb-8 sm:mb-10 text-center">
          <span className="text-xs sm:text-sm font-semibold uppercase mb-2 tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-[#6a31eb] via-[#9a45d1] to-[#d560ab]">
            Our Blogs
          </span>
          <h1 className="mt-3 sm:mt-4 text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1f1634] leading-tight">
            Latest Insights From Our Trucker Tools
          </h1>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative bg-white rounded-2xl p-2 shadow-lg border border-gray-200">
            <div className="flex items-center">
              <Search className="ml-4 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 px-4 py-3 bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-[#6a31eb] via-[#9a45d1] to-[#d560ab] text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredBlogs.map((post, idx) => (
            <ArticleCard key={post.id} post={post} />
          ))}
        </div>

        {/* No Results */}
        {filteredBlogs.length === 0 && (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your search or browse different categories</p>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('All')
              }}
              className="px-6 py-3 bg-gradient-to-r from-[#6a31eb] via-[#9a45d1] to-[#d560ab] text-white rounded-xl font-medium hover:shadow-lg transition-all"
            >
              View All Articles
            </button>
          </div>
        )}
      </div>
    </div>
  )
}