'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  const leftTruckRef = useRef<HTMLDivElement | null>(null);
  const rightTruckRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isVisible = entry.isIntersecting;
          if (isVisible) {
            leftTruckRef.current?.classList.add('truck-move-left-to-right');
            rightTruckRef.current?.classList.add('truck-move-right-to-left');
          } else {
            leftTruckRef.current?.classList.remove('truck-move-left-to-right');
            rightTruckRef.current?.classList.remove('truck-move-right-to-left');
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={sectionRef} className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white mt-8 overflow-hidden">
      {/* Glassmorphism background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/10 to-transparent backdrop-blur-sm"></div>
      
      {/* Road strip with two trucks - Made Larger and Fixed Visibility */}
      <div className="relative h-24 overflow-visible mb-4 z-20" style={{ paddingTop: '20px' }}>
        {/* Single lane solid line */}
        <div className="absolute inset-x-0 top-[50%] -translate-y-1/2 h-[2px] bg-gradient-to-r from-slate-600 via-slate-500 to-slate-600 shadow-lg"></div>
        {/* Single lane dashed line */}
        <div className="absolute inset-x-2 top-[50%] -translate-y-1/2 flex justify-between items-center">
          <div className="flex-1 h-[2px] bg-[repeating-linear-gradient(to_right,_transparent,_transparent_12px,_#ffffff_12px,_#ffffff_24px)] opacity-80 shadow-sm"></div>
        </div>
        
        {/* Small truck goes right - Made Larger and Positioned Above Road */}
        <div
          ref={leftTruckRef}
          className="pointer-events-none absolute left-[-80px] top-[20%] z-40 flex items-center"
        >
          <Image
            src="/images/footer/621dbe2c84d5870bfcca78a1_01.svg"
            alt="Small truck moving right"
            width={120}
            height={60}
            className="drop-shadow-2xl w-20 h-10 filter brightness-110"
          />
        </div>
        {/* Big truck goes left - Made Larger and Positioned Above Road */}
        <div
          ref={rightTruckRef}
          className="pointer-events-none absolute right-[-80px] top-[0%] z-50 flex items-center"
        >
          <Image
            src="/images/footer/62207283e85d0a3ded8b3d3c_05.svg"
            alt="Big truck moving left"
            width={140}
            height={80}
            className="drop-shadow-2xl w-24 h-12 filter brightness-110"
          />
        </div>
      </div>
      {/* Main footer content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-6 -mt-8">
          {/* Newsletter Section - Compact */}
          <div className="mb-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
                {/* Left: Subscribe text */}
                <div className="text-center lg:text-left">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent mb-2">
                    Subscribe to Our Newsletter
                  </h3>
                  <p className="text-white/80 text-sm">
                    Stay updated with our latest logistics solutions and industry insights.
                  </p>
                </div>
                
                {/* Right: Input form */}
                <div>
                  <form className="w-full" onSubmit={(e) => e.preventDefault()}>
                    <div className="flex flex-col gap-2 sm:flex-row sm:gap-0 rounded-xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                      <input
                        type="email"
                        placeholder="Enter Your Email Address"
                        className="flex-1 h-10 px-4 text-sm text-white placeholder-white/60 bg-transparent border-0 outline-none focus:bg-white/5 transition-all"
                        required
                      />
                      <button
                        type="submit"
                        className="px-4 h-10 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 text-white text-sm font-semibold transition-all duration-300 whitespace-nowrap shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        Subscribe Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Left: Brand + Map + Social - takes 2 columns */}
            <div className="lg:col-span-2 flex flex-col items-center lg:items-start">
              {/* Brand */}
              <div className="flex items-center gap-3 mb-4">
                <Image 
                  src="/images/nav-logo.png" 
                  alt="NISHA ROADWAYS" 
                  width={120} 
                  height={40} 
                  className="h-10 w-auto filter brightness-110"
                />
              </div>
              
              {/* World map - Compact */}
              <div className="relative w-full max-w-[200px] mb-4 mx-auto lg:mx-0">
                <div className="relative aspect-[16/10] w-full bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                  <Image
                    src="/images/footer/677f51b86a775b868658e1f7_footer-img-map.png"
                    alt="world map"
                    fill
                    className="object-contain opacity-90 rounded-lg"
                    priority={false}
                  />
                  {/* Blue location pin */}
                  <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full border-2 border-white shadow-xl animate-pulse"></div>
                </div>
              </div>
              
              {/* Social icons - Compact */}
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <a href="https://www.linkedin.com/company/nisha-roadways-pvt-ltd/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 flex items-center justify-center text-white/80 hover:text-white shadow-lg hover:shadow-xl transform hover:scale-110" aria-label="LinkedIn">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/roadwaysnisha/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 flex items-center justify-center text-white/80 hover:text-white shadow-lg hover:shadow-xl transform hover:scale-110" aria-label="Instagram">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://x.com/nisha_roadways" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 flex items-center justify-center text-white/80 hover:text-white shadow-lg hover:shadow-xl transform hover:scale-110" aria-label="Twitter">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="https://www.facebook.com/nisharoadways/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 flex items-center justify-center text-white/80 hover:text-white shadow-lg hover:shadow-xl transform hover:scale-110" aria-label="Facebook">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://www.youtube.com/channel/UCQKsuZavE-e0kP89QiMnsqQ" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 flex items-center justify-center text-white/80 hover:text-white shadow-lg hover:shadow-xl transform hover:scale-110" aria-label="YouTube">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Right: Links sections - takes 3 columns */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Useful Links */}
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 shadow-xl hover:bg-white/10 transition-all duration-300">
                <h4 className="text-base font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent mb-3">
                  Useful Links
                </h4>
                <ul className="space-y-2 text-sm text-white/80">
                  <li><a href="#" className="hover:text-white hover:translate-x-2 transition-all duration-200 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"></span>
                    Track Shipment
                  </a></li>
                  <li><a href="#" className="hover:text-white hover:translate-x-2 transition-all duration-200 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"></span>
                    Get Quote
                  </a></li>
                  <li><a href="#" className="hover:text-white hover:translate-x-2 transition-all duration-200 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"></span>
                    Container Sizes
                  </a></li>
                  <li><a href="#" className="hover:text-white hover:translate-x-2 transition-all duration-200 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"></span>
                    Our Network
                  </a></li>
                  <li><a href="#" className="hover:text-white hover:translate-x-2 transition-all duration-200 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"></span>
                    Career Opportunities
                  </a></li>
                  <li><a href="#" className="hover:text-white hover:translate-x-2 transition-all duration-200 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"></span>
                    Media & Awards
                  </a></li>
                </ul>
              </div>

              {/* Resources */}
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 shadow-xl hover:bg-white/10 transition-all duration-300">
                <h4 className="text-base font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">
                  Resources
                </h4>
                <ul className="space-y-2 text-sm text-white/80">
                  <li><a href="#" className="hover:text-white hover:translate-x-2 transition-all duration-200 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"></span>
                    Industry Blog
                  </a></li>
                  <li><a href="#" className="hover:text-white hover:translate-x-2 transition-all duration-200 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"></span>
                    Nisha Academy
                  </a></li>
                  <li><a href="#" className="hover:text-white hover:translate-x-2 transition-all duration-200 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"></span>
                    FAQ Center
                  </a></li>
                  <li><a href="#" className="hover:text-white hover:translate-x-2 transition-all duration-200 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"></span>
                    Transportation Guide
                  </a></li>
                  <li><a href="#" className="hover:text-white hover:translate-x-2 transition-all duration-200 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"></span>
                    Safety Standards
                  </a></li>
                </ul>
              </div>

              {/* Contact */}
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 shadow-xl hover:bg-white/10 transition-all duration-300">
                <h4 className="text-base font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent mb-3">
                  Contact
                </h4>
                <div className="space-y-3 text-sm text-white/80">
                  <div className="flex items-start gap-2">
                    <div className="w-4 h-4 mt-0.5 flex-shrink-0">
                      <svg fill="currentColor" viewBox="0 0 24 24" className="text-purple-400">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                    </div>
                    <p className="leading-relaxed text-xs">
                      909, Mayuresh Cosmos, Plot No. 37, Sector-11<br />
                      CBD Belapur, Navi Mumbai - 400 614
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 flex-shrink-0">
                      <svg fill="currentColor" viewBox="0 0 24 24" className="text-purple-400">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                    </div>
                    <a href="tel:+912241632222" className="hover:text-white transition-colors font-semibold text-xs">
                      +91-22-41632222
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 flex-shrink-0">
                      <svg fill="currentColor" viewBox="0 0 24 24" className="text-purple-400">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </div>
                    <a href="mailto:info@nisharoadways.com" className="hover:text-white transition-colors text-xs">
                      info@nisharoadways.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 bg-white/5 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 py-4 text-xs text-white/70 grid grid-cols-1 sm:grid-cols-3 gap-2 items-center text-center sm:text-left">
            <a href="#" className="hover:text-white/90 transition-colors sm:text-left">Terms and conditions</a>
            <span className="sm:text-center font-medium">© 2024 Nisha Roadways Pvt. Ltd.</span>
            <a href="#" className="hover:text-white/90 transition-colors sm:text-right">Privacy Policy</a>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes truckLeftToRight {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(100vw + 200px)); }
        }
        @keyframes truckRightToLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100vw - 200px)); }
        }
        .truck-move-left-to-right {
          animation: truckLeftToRight 14s linear infinite;
        }
        .truck-move-right-to-left {
          animation: truckRightToLeft 14s linear infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;


