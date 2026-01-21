'use client'

import { useState, useMemo } from 'react'
import { Search } from 'lucide-react'
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

  const ArticleCard = ({ post }: { post: BlogPost }) => (
    <article className="group relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Image with internal padding and curved corners */}
      <div className="relative h-[200px] mb-6 overflow-hidden rounded-2xl">
        <Image
          src={post.image || "/images/blog/images1.avif"}
          alt={post.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
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
  )

  return (
    <div className="min-h-screen bg-[#f6f3ff] mt-20">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Header */}
        <div className="mb-8 sm:mb-10 text-center">
          <span className="text-xs sm:text-sm font-semibold uppercase mb-2 tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">
            Our Blogs
          </span>
          <h1 className="mt-3 sm:mt-4 text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight">
            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">Insights</span> From Our Trucker Tools
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
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredBlogs.map((post) => (
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
              className="px-6 py-3 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white rounded-xl font-medium hover:shadow-lg transition-all"
            >
              View All Articles
            </button>
          </div>
        )}
      </div>
    </div>
  )
}