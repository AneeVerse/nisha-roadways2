"use client";

import React from 'react';
import Image from 'next/image';

const FeaturesSection = () => {
  const handlePlayVideo = () => {
    // Open YouTube video in new tab
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
  };

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

        <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50/30 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header - Full Width */}
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-6">
                ABOUT US
              </div>
              <h1 className="text-3xl lg:text-4xl xl:text-[48px] font-bold text-gray-900 mb-8 leading-tight uppercase w-full">
                The Beginning That <span className="text-blue-600">Never Stopped Growing</span>
              </h1>
              <p className="text-sm lg:text-base text-gray-600 max-w-5xl mx-auto leading-relaxed">
                Founded by <span className="font-semibold text-gray-900">Mr. Nandkishor Agarwal</span> in <span className="font-semibold text-blue-600">1982</span>, Nisha Roadways started from an 80 sq ft office and grew into India's leading logistics powerhouse, now serving <span className="font-semibold text-blue-600">500+ companies</span> with the same dedication that built our legacy.
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column - Content */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                    Three Decades of Excellence
                  </h2>
                  <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-8">
                    Since 1982, we've delivered consistent quality that earned us the trust and respect of India's biggest brands.
                  </p>
                </div>

                {/* Feature Points */}
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">
                        Pioneer in Empty Container Movement
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        We revolutionized empty container transportation by road, setting industry benchmarks that others follow.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">
                        500+ Corporate Partners
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        From shipping giants to pharma leaders, we've built lasting partnerships across every major industry sector.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Video Card */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full max-w-lg">
                  {/* Decorative Background Elements */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-[20px] blur-sm" />
                  <div className="absolute -top-2 -right-2 w-24 h-24 bg-gradient-to-br from-blue-400/10 to-blue-600/10 rounded-full blur-xl" />
                  
                  {/* Video Card Container - Fully Rounded Oyster Style */}
                  <div className="relative">
                    {/* Inner Card */}
                    <div className="relative bg-white rounded-[2.8rem] overflow-hidden">
                      <div className="relative aspect-[4/3] overflow-hidden rounded-[2.8rem]">
                        {/* Video Thumbnail Image */}
                        <Image 
                          src="/images/about-us/about.png" 
                          alt="From 80 Square Feet to Pan-India Success"
                          fill
                          className="object-cover object-center rounded-[2.8rem]"
                        />
                        
                        {/* Subtle Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-[2.8rem]" />
                        
                        {/* Play Button - Oyster Style */}
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                          <button
                            onClick={handlePlayVideo}
                            className="relative w-16 h-16 lg:w-18 lg:h-18 rounded-full flex items-center justify-center bg-black/70 backdrop-blur-sm text-white shadow-xl transition-all duration-300 hover:bg-black/80 hover:scale-105 hover:shadow-2xl group"
                            aria-label="Play video"
                          >
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/10 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <svg className="w-6 h-6 lg:w-7 lg:h-7 ml-0.5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </button>
                        </div>
                        
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default FeaturesSection;
