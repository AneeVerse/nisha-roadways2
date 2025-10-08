"use client";

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Handle video loading
  useEffect(() => {
    if (isVideoPlaying && videoRef.current) {
      const video = videoRef.current;
      video.load(); // Reload the video source
    }
  }, [isVideoPlaying]);

  const handlePlayVideo = async () => {
    setIsVideoPlaying(true);
    // Wait for the video element to be rendered
    setTimeout(async () => {
      if (videoRef.current) {
        try {
          await videoRef.current.play();
        } catch (error) {
          console.error('Error playing video:', error);
        }
      }
    }, 100);
  };

  const handlePauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    }
  };

  return (
    <>
    <section id="features-section" ref={sectionRef} className="relative w-full px-0 py-12 lg:py-16 xl:py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center min-h-[85vh] lg:min-h-[80vh]">
            
            {/* Left Column - Text Content */}
            <div className="flex flex-col justify-center space-y-6 lg:col-span-7 order-1 lg:order-1">
              <div className="max-w-2xl">
                {/* Badge */}
                <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-indigo-600/10 border border-blue-200/50 mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700">
                    About Us
                  </span>
                </div>

                {/* Main Title */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight mb-4">
                  The Beginning That{' '}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700">
                    Never Stopped Growing
                  </span>
                </h2>
                
                {/* Description */}
                <div className="space-y-3 text-gray-700 leading-relaxed mb-6">
                  <p className="text-base md:text-lg font-normal">
                    Founded by <span className="font-semibold text-gray-900">Mr. Nandkishor Agarwal</span> in <span className="font-semibold text-blue-600">1982</span>, Nisha Roadways started from an 80 sq ft office and grew into India's leading logistics powerhouse.
                  </p>
                  <p className="text-sm md:text-base text-gray-600">
                    What began as a dream named after his daughter became the bridge connecting businesses across the nation. Today, we serve <span className="font-semibold text-blue-600">500+ companies</span> with the same dedication that built our legacy.
                  </p>
                </div>
                
                {/* Feature Points */}
                <div className="space-y-4">
                  {/* Three Decades of Excellence */}
                  <div className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-gray-900 mb-1">Three Decades of Excellence</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">Since 1982, we've delivered consistent quality that earned us the trust and respect of India's biggest brands.</p>
                    </div>
                  </div>
                  
                  {/* Pioneer in Empty Container Movement */}
                  <div className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-purple-500 to-violet-600 text-white shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-gray-900 mb-1">Pioneer in Empty Container Movement</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">We revolutionized empty container transportation by road, setting industry benchmarks that others follow.</p>
                    </div>
                  </div>
                  
                  {/* 500+ Corporate Partners */}
                  <div className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-indigo-500 to-blue-600 text-white shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-gray-900 mb-1">500+ Corporate Partners</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">From shipping giants to pharma leaders, we've built lasting partnerships across every major industry sector.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Video Card */}
            <div className="flex justify-center lg:justify-end lg:col-span-5 order-2 lg:order-2">
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm xl:max-w-md">
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-15 blur-xl animate-pulse" />
                <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-full opacity-10 blur-2xl" />
                
                {/* Video Card Container */}
                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100/50 backdrop-blur-sm">
                  {!isVideoPlaying ? (
                    <div className="relative aspect-[4/5] overflow-hidden">
                      {/* Video Thumbnail Image */}
                      <Image 
                        src="/images/our-solution/ship.avif" 
                        alt="Nisha Roadways journey from 80 sq ft to pan-India success"
                        fill
                        className="object-cover object-center"
                        style={{ objectPosition: 'center' }}
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      
                      {/* Play Button - Bottom Right */}
                      <div className="absolute bottom-4 right-4 z-10">
                        <div className="relative group">
                          <span className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 opacity-50 blur-lg animate-pulse group-hover:opacity-70" />
                          <button
                            onClick={handlePlayVideo}
                            className="relative w-12 h-12 rounded-full flex items-center justify-center bg-white/95 backdrop-blur-sm ring-2 ring-white/50 text-blue-600 shadow-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white hover:ring-blue-400 hover:scale-110 group-hover:shadow-xl"
                            aria-label="Play video"
                          >
                            <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      
                      {/* Video Title - Bottom Left */}
                      <div className="absolute bottom-4 left-4 z-10 max-w-[70%]">
                        <p className="text-white text-sm lg:text-base font-semibold drop-shadow-lg mb-1">
                          From 80 Square Feet to Pan-India Success
                        </p>
                        <p className="text-white/90 text-xs leading-tight">
                          The remarkable journey of trust, innovation, and relentless growth
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="relative aspect-[4/5] bg-black">
                      <video
                        ref={videoRef}
                        className="w-full h-full object-cover object-center"
                        style={{ objectPosition: 'center 25%' }}
                        controls
                        autoPlay
                        playsInline
                        preload="metadata"
                        onEnded={() => setIsVideoPlaying(false)}
                        onError={(e) => {
                          console.error('Video error:', e);
                          setIsVideoPlaying(false);
                        }}
                      >
                        <source src="/video/feature_preview.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      
                      {/* Close Button */}
                      <button
                        onClick={handlePauseVideo}
                        className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center bg-white/95 text-gray-800 ring-1 ring-white/50 hover:bg-white transition-colors backdrop-blur-sm shadow-lg"
                        aria-label="Close video"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                          <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default FeaturesSection;
