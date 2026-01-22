/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { PortableText } from '@portabletext/react';
import Image from "next/image";
import Link from "next/link";
import { getPostBySlug, getAllPosts, client, urlFor } from "@/sanity/lib/client";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";

interface BlogPost {
    _id: string;
    title: string;
    slug: { current: string };
    mainImage?: any;
    authorImage?: any;
    publishedAt: string;
    author: string;
    excerpt?: string;
    body: any;
    categories?: string[];
    faqs?: { question: string; answer: string }[];
}


export const revalidate = 60;

// Generate Dynamic Metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const slugParam = resolvedParams.slug;

    const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    metaDescription,
    "slug": slug.current,
    "thumbnail": mainImage.asset->url,
    excerpt,
    "date": publishedAt,
    "author": author->name,
  }`;

    const post = await client.fetch(query, { slug: slugParam });

    if (!post) {
        return { title: "Blog | Nisha Roadways", description: "This blog post does not exist." };
    }

    return {
        title: post.title,
        description: post.metaDescription || post.excerpt || "Read this article on our blog.",
        openGraph: {
            title: post.title,
            description: post.metaDescription || post.excerpt,
            images: [post.thumbnail].filter(Boolean),
            type: 'article',
            publishedTime: post.date,
            authors: [post.author],
        },
    };
}

const portableTextComponents = {
    types: {
        image: ({ value }: any) => (
            value && value.asset ? (
                <div className="my-8 rounded-2xl overflow-hidden shadow-lg">
                    <img
                        src={urlFor(value).url()}
                        alt={value.alt || 'Blog image'}
                        className="w-full h-auto object-cover"
                    />
                    {value.alt && <p className="text-center text-xs text-gray-500 mt-2 italic px-4">{value.alt}</p>}
                </div>
            ) : null
        ),
    },
    block: {
        h1: ({ children }: any) => <h1 className="text-3xl sm:text-4xl font-bold mt-12 mb-6 text-gray-900 leading-tight">{children}</h1>,
        h2: ({ children }: any) => <h2 className="text-2xl sm:text-3xl font-bold mt-10 mb-5 text-gray-900 leading-tight">{children}</h2>,
        h3: ({ children }: any) => <h3 className="text-xl sm:text-2xl font-bold mt-8 mb-4 text-gray-900 leading-tight">{children}</h3>,
        h4: ({ children }: any) => <h4 className="text-lg sm:text-xl font-bold mt-6 mb-3 text-gray-900 leading-tight">{children}</h4>,
        blockquote: ({ children }: any) => (
            <blockquote className="border-l-4 border-blue-600 pl-6 italic my-8 text-gray-700 bg-blue-50/50 py-4 pr-4 rounded-r-xl">
                {children}
            </blockquote>
        ),
        normal: ({ children }: any) => <p className="mb-6 leading-relaxed text-gray-700 text-base sm:text-lg">{children}</p>,
    },
    marks: {
        strong: ({ children }: any) => <strong className="font-bold text-gray-900">{children}</strong>,
        em: ({ children }: any) => <em className="italic">{children}</em>,
        link: ({ value, children }: any) => (
            <a href={value?.href} className="text-blue-600 hover:underline decoration-2 underline-offset-4" target="_blank" rel="noopener noreferrer">
                {children}
            </a>
        ),
    },
    list: {
        bullet: ({ children }: any) => <ul className="list-disc list-outside mb-6 ml-6 space-y-2 text-gray-700">{children}</ul>,
        number: ({ children }: any) => <ol className="list-decimal list-outside mb-6 ml-6 space-y-2 text-gray-700">{children}</ol>,
    },
};

async function BlogDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const { slug } = resolvedParams;

    try {
        const blog = await getPostBySlug(slug) as BlogPost;
        const allPosts = await getAllPosts() as BlogPost[];
        const relatedBlogs = allPosts
            .filter((post: BlogPost) => post.slug.current !== slug)
            .slice(0, 3);

        if (!blog) {
            return (
                <div className="min-h-screen flex flex-col justify-center items-center bg-[#f6f3ff] mt-20 px-4">
                    <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                        <Tag className="w-8 h-8 text-red-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Article Not Found</h2>
                    <p className="text-gray-500 mb-8 text-center max-w-md">We couldn't find the blog post you're looking for. It might have been moved or deleted.</p>
                    <Link href="/blog" className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:shadow-lg transition-all">
                        Back to All Articles
                    </Link>
                </div>
            );
        }

        return (
            <main className="min-h-screen bg-[#f6f3ff] mt-20 pb-20">
                {/* Progress bar mock (decorative) */}
                <div className="fixed top-20 left-0 w-full h-1 bg-gray-200 z-50 overflow-hidden">
                    <div className="h-full bg-blue-600 w-0 transition-all duration-300" />
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
                    {/* Back Navigation */}
                    <Link href="/blog" className="group inline-flex items-center text-sm font-semibold text-blue-600 mb-10 hover:translate-x-[-4px] transition-transform">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Articles
                    </Link>

                    {/* Header */}
                    <header className="mb-12">
                        <div className="flex flex-wrap gap-2 mb-6">
                            {blog.categories?.map((cat: string, i: number) => (
                                <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-wider rounded-lg shadow-sm">
                                    {cat || "Uncategorized"}
                                </span>
                            ))}
                        </div>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
                            {blog.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 py-6 border-y border-gray-200">
                            <div className="flex items-center gap-3">
                                {blog.authorImage ? (
                                    <Image
                                        src={urlFor(blog.authorImage).url()}
                                        alt={blog.author}
                                        width={48}
                                        height={48}
                                        className="rounded-full object-cover ring-2 ring-white shadow-md w-12 h-12"
                                    />
                                ) : (
                                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                                        <User className="w-6 h-6 text-blue-600" />
                                    </div>
                                )}
                                <div>
                                    <p className="text-sm font-bold text-gray-900">{blog.author}</p>
                                    <p className="text-xs text-gray-500">Author</p>
                                </div>
                            </div>

                            <div className="h-10 w-[1px] bg-gray-200 hidden sm:block" />

                            <div className="flex items-center gap-2">
                                <Calendar className="w-5 h-5 text-blue-600" />
                                <div>
                                    <p className="text-sm font-bold text-gray-900">
                                        {new Date(blog.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                    </p>
                                    <p className="text-xs text-gray-500">Published Date</p>
                                </div>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    {blog.mainImage && (
                        <div className="relative aspect-[16/9] w-full mb-16 rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src={urlFor(blog.mainImage).url()}
                                alt={blog.title}
                                fill
                                priority
                                className="object-cover"
                                sizes="(min-width: 1024px) 896px, 100vw"
                            />
                        </div>
                    )}

                    {/* Content & Sidebar Layout */}
                    <div className="flex flex-col lg:flex-row gap-16">
                        <div className="flex-1 min-w-0">
                            {/* Excerpt/Intro */}
                            {blog.excerpt && (
                                <div className="text-xl text-gray-600 font-medium leading-relaxed mb-12 border-b border-gray-100 pb-12">
                                    {blog.excerpt}
                                </div>
                            )}

                            {/* Body */}
                            <article className="prose prose-blue max-w-none">
                                <PortableText value={blog.body} components={portableTextComponents} />
                            </article>

                            {/* FAQ Section */}
                            {blog.faqs && blog.faqs.length > 0 && (
                                <section className="mt-20 pt-16 border-t border-gray-200">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-10">Common Questions</h2>
                                    <div className="space-y-4">
                                        {blog.faqs.map((faq: any, index: number) => (
                                            <div key={index} className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
                                                <h3 className="font-bold text-lg text-gray-900 mb-3 flex gap-3">
                                                    <span className="text-blue-600 font-black">Q.</span>
                                                    {faq.question}
                                                </h3>
                                                <p className="text-gray-600 leading-relaxed pl-7">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}
                        </div>

                        {/* Sidebar with Related Content (Hidden on small screens) */}
                        <aside className="w-full lg:w-72 flex-shrink-0">
                            <div className="sticky top-28 space-y-12">
                                {relatedBlogs.length > 0 && (
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center justify-between">
                                            Recommended
                                            <div className="h-[2px] w-12 bg-blue-600 rounded-full" />
                                        </h3>
                                        <div className="space-y-6">
                                            {relatedBlogs.map((related: any) => (
                                                <Link
                                                    key={related._id}
                                                    href={`/blog/${related.slug.current}`}
                                                    className="group block"
                                                >
                                                    <div className="relative h-32 w-full mb-3 rounded-xl overflow-hidden shadow-sm transition-shadow group-hover:shadow-md">
                                                        <Image
                                                            src={related.mainImage ? urlFor(related.mainImage).url() : "/images/blog/images1.avif"}
                                                            alt={related.title}
                                                            fill
                                                            className="object-cover transition-transform group-hover:scale-110"
                                                        />
                                                    </div>
                                                    <h4 className="font-bold text-gray-900 text-sm line-clamp-2 leading-snug group-hover:text-blue-600 transition-colors">
                                                        {related.title}
                                                    </h4>
                                                    <p className="text-[10px] text-gray-500 mt-1 uppercase font-semibold">
                                                        {new Date(related.publishedAt).toLocaleDateString()}
                                                    </p>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Minimalist CTA */}
                                <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 text-white shadow-xl shadow-blue-200/50">
                                    <h4 className="font-bold text-lg mb-3">Optimize your logistics</h4>
                                    <p className="text-blue-100 text-xs mb-6 leading-relaxed">Join 500+ businesses using our trucker tools to streamline operations.</p>
                                    <Link href="/contact" className="block w-full text-center py-3 bg-white text-blue-700 font-bold rounded-xl text-sm hover:bg-blue-50 transition-colors shadow-sm">
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </main>
        );
    } catch (error) {
        console.error("Error fetching blog details:", error);
        return (
            <div className="min-h-screen flex flex-col justify-center items-center bg-[#f6f3ff] mt-20 px-4">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                    <Tag className="w-8 h-8 text-red-500" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Something Went Wrong</h2>
                <p className="text-gray-500 mb-8 text-center max-w-md">We encountered an error while loading the blog post. Please try again later.</p>
                <Link href="/blog" className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:shadow-lg transition-all">
                    Back to Articles
                </Link>
            </div>
        );
    }
}

export default BlogDetailsPage;
