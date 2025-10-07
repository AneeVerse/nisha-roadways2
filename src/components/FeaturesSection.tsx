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
    <section id="features-section" ref={sectionRef} className="relative mt-6 sm:mt-8 md:-mt-12 lg:-mt-16 xl:-mt-20 w-full px-0 mb-8 sm:mb-12 md:mb-16 lg:mb-20 mobile-features">
      <div className="relative px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-start lg:items-center py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20">
            
            {/* Left Column - Text Content */}
            <div className="flex flex-col justify-start lg:justify-center space-y-3 sm:space-y-4 md:space-y-5 lg:col-span-7 order-1 lg:order-1">
              <div className="max-w-2xl">
                <span className="text-xs sm:text-sm font-semibold uppercase mb-2 tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-[#6a31eb] via-[#9a45d1] to-[#d560ab]">
                  About Us
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.1] sm:leading-tight tracking-tighter mb-3 sm:mb-4 md:mb-5">
                  Your Trusted Partner for Effortless Global Shipping
                </h2>
                
                <div className="space-y-3 sm:space-y-4 text-gray-600 leading-relaxed">
                  <p className="text-sm sm:text-base md:text-lg">
                    From booking to delivery, we simplify every step of the shipping process. ShipMate ensures your packages arrive safely, on time, and without hassle.
                  </p>
                </div>
                
                {/* Feature Points */}
                <div className="mt-4 sm:mt-5 md:mt-6 space-y-4 sm:space-y-5 md:space-y-6">
                  {/* Seamless Process */}
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-[#6a31eb]/10 via-[#9a45d1]/10 to-[#d560ab]/10 text-[#6a31eb] mt-0.5">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold text-gray-900">Seamless Process</h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Book, track, and manage shipments with just a few clicks.</p>
                    </div>
                  </div>
                  
                  {/* Dedicated Team */}
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-[#6a31eb]/10 via-[#9a45d1]/10 to-[#d560ab]/10 text-[#9a45d1] mt-0.5">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold text-gray-900">Dedicated Team</h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Our logistics experts and trusted riders ensure smooth handling from pickup to delivery.</p>
                    </div>
                  </div>
                  
                  {/* 24/7 Customer Support */}
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-[#6a31eb]/10 via-[#9a45d1]/10 to-[#d560ab]/10 text-[#d560ab] mt-0.5">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold text-gray-900">24/7 Customer Support</h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Get real-time updates and assistance whenever you need it.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Video Card */}
            <div className="flex justify-center lg:justify-end lg:col-span-5 order-2 lg:order-2">
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm xl:max-w-md">
                {/* Video Card Container */}
                <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden border border-white">
                  {!isVideoPlaying ? (
                    <div className="relative aspect-[4/5] overflow-hidden">
                      {/* Video Thumbnail Image */}
                      <Image 
                        src="/images/about-us/about.png" 
                        alt="Fitness retreat thumbnail"
                        fill
                        className="object-cover object-top"
                        style={{ objectPosition: 'center' }}
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Play Button - Bottom Right */}
                      <div className="absolute bottom-3 sm:bottom-4 md:bottom-5 right-3 sm:right-4 md:right-5 z-10">
                        <div className="relative group">
                          <span className="absolute -inset-1.5 sm:-inset-2 md:-inset-3 rounded-full bg-gradient-to-r from-[#6a31eb] via-[#9a45d1] to-[#d560ab] opacity-60 blur-md sm:blur-lg animate-pulse group-hover:opacity-80" />
                          <button
                            onClick={handlePlayVideo}
                            className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center bg-black ring-1 sm:ring-2 ring-[#6a31eb] text-[#6a31eb] shadow-lg sm:shadow-xl transition-all duration-200 hover:bg-gradient-to-r hover:from-[#6a31eb] hover:via-[#9a45d1] hover:to-[#d560ab] hover:text-white hover:ring-[#6a31eb] hover:scale-110"
                            aria-label="Play video"
                          >
                            <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 ml-0.5 sm:ml-0.5 md:ml-1" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      
                      {/* Video Title - Bottom Left */}
                      <div className="absolute bottom-3 sm:bottom-4 md:bottom-5 left-3 sm:left-4 md:left-5 z-10">
                        <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-bold font-unbounded drop-shadow-lg">
                          Watch Our Story
                        </p>
                        <p className="text-white/80 text-xs sm:text-xs md:text-sm mt-0.5 sm:mt-1">
                          See what makes us different
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="relative aspect-[4/5] bg-black">
                      <video
                        ref={videoRef}
                        className="w-full h-full object-cover object-top"
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
                        className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center bg-white/90 text-black ring-1 ring-black/30 hover:bg-white transition-colors backdrop-blur-sm"
                        aria-label="Close video"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5">
                          <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Mobile CTA Buttons removed as per request */}

          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default FeaturesSection;
