'use client'

import { useState, useMemo } from 'react'
import { Search, Calendar, User, ArrowRight, TrendingUp, Sparkles } from 'lucide-react'
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

  // Generate thumbnail based on category
  const getThumbnailImage = (category: string) => {
    const thumbnails = {
      'Industry Trends': '/images/blog/industry-trends.jpg',
      'Safety & Compliance': '/images/blog/safety-compliance.jpg',
      'Technology & Innovation': '/images/blog/technology.jpg',
      'Case Studies': '/images/blog/case-studies.jpg',
      'Best Practices': '/images/blog/best-practices.jpg',
      'Market Analysis': '/images/blog/market-analysis.jpg'
    }
    return thumbnails[category as keyof typeof thumbnails] || '/images/blog/default.jpg'
  }

  const ArticleCard = ({ post, featured = false }: { post: any, featured?: boolean }) => (
    <article className={`group bg-white rounded-xl border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden ${featured ? 'h-[320px]' : 'h-[280px]'}`}>
      {/* Thumbnail Image */}
      <div className={`relative overflow-hidden ${featured ? 'h-40' : 'h-32'}`}>
        <div className="w-full h-full bg-gradient-to-br from-blue-100 via-purple-50 to-blue-50">
          {/* Clean gradient background without icons */}
          <div className="w-full h-full bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-indigo-500/10 relative">
            {/* Category badge */}
            <div className="absolute top-2 left-2">
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-white/90 text-gray-800 backdrop-blur-sm shadow-sm">
                {post.category}
              </span>
            </div>
            
            {/* Featured badge */}
            {featured && (
              <div className="absolute top-2 right-2">
                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-xs font-medium bg-yellow-400/90 text-yellow-900 shadow-sm">
                  <Sparkles className="w-2.5 h-2.5" />
                  Featured
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4 flex flex-col h-full">
        {/* Category and Author */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
            {post.category}
          </span>
          <span className="text-xs text-gray-400">{post.readTime}</span>
        </div>
        
        {/* Title */}
        <h3 className={`font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors leading-tight ${featured ? 'text-base' : 'text-sm'} line-clamp-2`}>
          {post.title}
        </h3>
        
        {/* Excerpt with ellipsis */}
        <p className={`text-gray-600 mb-3 leading-relaxed flex-grow ${featured ? 'text-sm' : 'text-xs'} line-clamp-3`}>
          {post.excerpt.length > 120 ? `${post.excerpt.substring(0, 120)}...` : post.excerpt}
        </p>
        
        {/* Author */}
        <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-50">
          <div className="flex items-center gap-2">
            <User className="w-3 h-3 text-gray-400" />
            <span className="text-xs text-gray-600 font-medium">{post.author}</span>
          </div>
          <button className="text-blue-600 hover:text-blue-700 text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all hover:bg-blue-50 px-2 py-1 rounded-md">
            Read <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </article>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20">
      {/* Ultra Modern Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"></div>
        <div className="absolute inset-0 opacity-20">
           <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5"></div>
         </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-indigo-400/20 rounded-full blur-xl animate-pulse delay-500"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 text-white/90 text-sm font-medium mb-8 border border-white/20">
              <TrendingUp className="w-4 h-4" />
              <span>Industry Intelligence Hub</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-[0.9] tracking-tight">
              Logistics
              <br />
              <span className="bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
                Intelligence
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl lg:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Cutting-edge insights, innovative solutions, and strategic intelligence 
              <br className="hidden sm:block" />
              shaping the future of logistics and transportation.
            </p>
            
            {/* Modern Search Bar */}
            <div className="max-w-2xl mx-auto relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl p-2 shadow-2xl border border-white/20">
                <div className="flex items-center">
                  <Search className="ml-4 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Discover insights on logistics, technology, safety..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-1 px-4 py-4 bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none text-lg"
                  />
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Minimalist Categories */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-white/80 text-gray-700 hover:bg-white hover:shadow-md border border-gray-200/50 backdrop-blur-sm'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Latest Articles - Only 2 Featured */}
        {featuredPosts.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
              <div className="h-px bg-gradient-to-r from-blue-600 via-purple-600 to-transparent flex-1"></div>
              <span className="text-sm text-gray-500 bg-white/60 px-3 py-1 rounded-full">
                {featuredPosts.length} featured
              </span>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <ArticleCard key={post.id} post={post} featured />
              ))}
            </div>
          </section>
        )}

        {/* All Articles - Compact Grid */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">All Articles</h2>
            <span className="text-sm text-gray-500 bg-white/60 px-3 py-1 rounded-full">
              {filteredBlogs.length} articles found
            </span>
          </div>
          
          {regularPosts.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {regularPosts.map((post) => (
                <ArticleCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
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
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg transition-all"
              >
                View All Articles
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}