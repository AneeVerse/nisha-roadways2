'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
    <>
      <footer ref={sectionRef} className="relative bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 text-white mt-8 sm:mt-12 md:mt-0 overflow-visible">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.1)_25%,rgba(59,130,246,0.1)_50%,transparent_50%,transparent_75%,rgba(59,130,246,0.1)_75%)] bg-[length:20px_20px]"></div>
        </div>
        {/* Road strip with two trucks */}
        <div className="relative h-24 sm:h-28 md:h-32 lg:h-36 overflow-visible mb-6 sm:mb-8">
          {/* Single lane solid line */}
          <div className="absolute inset-x-0 top-[30%] -translate-y-1/2 h-[2px] sm:h-[3px] "></div>
          {/* Single lane dashed line */}
          <div className="absolute inset-x-2 sm:inset-x-3 top-[30%] -translate-y-1/2 flex justify-between items-center">
            <div className="flex-1 h-[2px] sm:h-[3px] bg-[repeating-linear-gradient(to_right,_transparent,_transparent_12px,_#ffffff_12px,_#ffffff_24px)] sm:bg-[repeating-linear-gradient(to_right,_transparent,_transparent_16px,_#ffffff_16px,_#ffffff_32px)] opacity-70"></div>
          </div>
          
          {/* Small truck goes right - behind big truck */}
          <div
            ref={leftTruckRef}
            className="pointer-events-none absolute left-[-80px] sm:left-[-100px] md:left-[-120px] -top-[20%] z-10 flex items-center"
          >
            <Image
              src="/images/footer/621dbe2c84d5870bfcca78a1_01.svg"
              alt="Small truck moving right"
              width={120}
              height={60}
              className="drop-shadow-lg w-16 h-8 sm:w-20 sm:h-10 md:w-[120px] md:h-[60px] "
            />
          </div>
          {/* Big truck goes left - in front and moved up */}
          <div
            ref={rightTruckRef}
            className="pointer-events-none absolute right-[-80px] sm:right-[-100px] md:right-[-120px] top-[15%] z-30 flex items-center"
          >
            <Image
              src="/images/footer/62207283e85d0a3ded8b3d3c_05.svg"
              alt="Big truck moving left"
              width={120}
              height={120}
              className="drop-shadow-lg w-16 h-8 sm:w-20 sm:h-10 md:w-[120px] md:h-[100px] "
            />
          </div>
        </div>

        {/* New Footer Content */}
        <div className="w-full text-white pt-0 pb-8">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
            
            {/* Main Footer Content */}
            <div className="mb-12">
              
              {/* Two-column layout with left-right spacing */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                
                {/* Left Column - Logo */}
                <div className="space-y-6">
                  <div className="flex justify-center lg:justify-start -ml-3">
                    <Image 
                      src="/images/nav-logo.png" 
                      alt="Nisha Roadways" 
                      width={200} 
                      height={60} 
                      className="h-20 w-auto brightness-0 invert"
                    />
                  </div>
                  
                  {/* Company Address and Contact Information */}
                  <div className="space-y-2 text-gray-400 text-sm">
                    <div className="font-semibold text-white">Contact Information</div>
                    <div>909, Mayuresh Cosmos, Plot No. 37, Sector-11</div>
                    <div>CBD Belapur, Navi Mumbai - 400 614</div>
                    <div className="pt-2">
                      <div>Phone: <a href="tel:+91-22-41632222" className="text-blue-300 hover:text-blue-200 transition-colors">+91-22-41632222</a></div>
                      <div>Email: <a href="mailto:info@nisharoadways.com" className="text-blue-300 hover:text-blue-200 transition-colors">info@nisharoadways.com</a></div>
                    </div>
                  </div>
                </div>
                
                {/* Right Column - Navigation Links */}
                <div className="space-y-6">
                  <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {/* Column 1 */}
                    <div className="space-y-3">
                      <Link href="/track-shipment" className="text-white hover:text-blue-300 transition-colors duration-200 text-sm py-2 border-l-2 border-white hover:border-blue-300 pl-3 hover:pl-4 transition-all duration-200 block">
                        Track Shipment
                      </Link>
                      <Link href="/get-quote" className="text-white hover:text-blue-300 transition-colors duration-200 text-sm py-2 border-l-2 border-white hover:border-blue-300 pl-3 hover:pl-4 transition-all duration-200 block">
                        Get Quote
                      </Link>
                      <Link href="/container-sizes" className="text-white hover:text-blue-300 transition-colors duration-200 text-sm py-2 border-l-2 border-white hover:border-blue-300 pl-3 hover:pl-4 transition-all duration-200 block">
                        Container Sizes
                      </Link>
                      <Link href="/our-network" className="text-white hover:text-blue-300 transition-colors duration-200 text-sm py-2 border-l-2 border-white hover:border-blue-300 pl-3 hover:pl-4 transition-all duration-200 block">
                        Our Network
                      </Link>
                    </div>
                    
                    {/* Column 2 */}
                    <div className="space-y-3">
                      <Link href="/career-opportunities" className="text-white hover:text-blue-300 transition-colors duration-200 text-sm py-2 border-l-2 border-white hover:border-blue-300 pl-3 hover:pl-4 transition-all duration-200 block">
                        Career Opportunities
                      </Link>
                      <Link href="/media-awards" className="text-white hover:text-blue-300 transition-colors duration-200 text-sm py-2 border-l-2 border-white hover:border-blue-300 pl-3 hover:pl-4 transition-all duration-200 block">
                        Media & Awards
                      </Link>
                      <Link href="/industry-blog" className="text-white hover:text-blue-300 transition-colors duration-200 text-sm py-2 border-l-2 border-white hover:border-blue-300 pl-3 hover:pl-4 transition-all duration-200 block">
                        Industry Blog
                      </Link>
                      <Link href="/nisha-academy" className="text-white hover:text-blue-300 transition-colors duration-200 text-sm py-2 border-l-2 border-white hover:border-blue-300 pl-3 hover:pl-4 transition-all duration-200 block">
                        Nisha Academy
                      </Link>
                    </div>
                    
                    {/* Column 3 */}
                    <div className="space-y-3">
                      <Link href="/faq-center" className="text-white hover:text-blue-300 transition-colors duration-200 text-sm py-2 border-l-2 border-white hover:border-blue-300 pl-3 hover:pl-4 transition-all duration-200 block">
                        FAQ Center
                      </Link>
                      <Link href="/transportation-guide" className="text-white hover:text-blue-300 transition-colors duration-200 text-sm py-2 border-l-2 border-white hover:border-blue-300 pl-3 hover:pl-4 transition-all duration-200 block">
                        Transportation Guide
                      </Link>
                      <Link href="/safety-standards" className="text-white hover:text-blue-300 transition-colors duration-200 text-sm py-2 border-l-2 border-white hover:border-blue-300 pl-3 hover:pl-4 transition-all duration-200 block">
                        Safety Standards
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Section */}
              <div className="flex justify-center mt-12">
                <div className="flex space-x-6">
                  {/* LinkedIn */}
                  <a href="https://www.linkedin.com/company/nisha-roadways-pvt-ltd/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors duration-200 p-2 hover:bg-gray-800 rounded-full">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  
                  {/* Instagram */}
                  <a href="https://www.instagram.com/roadwaysnisha/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400 transition-colors duration-200 p-2 hover:bg-gray-800 rounded-full">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  
                  {/* Twitter/X */}
                  <a href="https://x.com/nisha_roadways" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors duration-200 p-2 hover:bg-gray-800 rounded-full">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  
                  {/* Facebook */}
                  <a href="https://www.facebook.com/nisharoadways/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 transition-colors duration-200 p-2 hover:bg-gray-800 rounded-full">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  
                  {/* YouTube */}
                  <a href="https://www.youtube.com/channel/UCQKsuZavE-e0kP89QiMnsqQ" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500 transition-colors duration-200 p-2 hover:bg-gray-800 rounded-full">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                  
                  {/* Email */}
                  <a href="mailto:info@nisharoadways.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400 transition-colors duration-200 p-2 hover:bg-gray-800 rounded-full">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5L4 8V6l8 5 8-5v2z" />
                    </svg>
                  </a>
                  
                  {/* Phone */}
                  <a href="tel:+91-22-41632222" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors duration-200 p-2 hover:bg-gray-800 rounded-full">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-white pt-8">
              <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
                
                {/* Left Side - Copyright */}
                <div className="text-center lg:text-left order-2 lg:order-1">
                  <span className="text-sm text-gray-400">© 2025 Name change gazette. All rights reserved.</span>
                </div>

                {/* Center - Privacy Policy and Terms of Service */}
                <div className="flex items-center justify-center space-x-4 sm:space-x-6 text-sm text-gray-400 order-3 lg:order-2">
                  <Link href="#" className="hover:text-white transition-colors duration-200 whitespace-nowrap">Privacy Policy</Link>
                  <span className="text-gray-600">|</span>
                  <Link href="#" className="hover:text-white transition-colors duration-200 whitespace-nowrap">Terms of Service</Link>
                </div>

                {/* Right Side - Aneeverse Credit */}
                <div className="text-center lg:text-right order-1 lg:order-3">
                  <a 
                    href="https://www.aneeverse.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center lg:justify-end space-x-2 text-sm text-gray-400 hover:text-white transition-colors duration-200 group"
                  >
                    <span className="whitespace-nowrap">Designed & Managed by Aneeverse</span>
                    <Image
                      src="/images/aneeverse-logo.svg"
                      alt="Aneeverse"
                      width={16}
                      height={16}
                      className=" brightness-0 invert flex-shrink-0"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

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
    </>
  );
};

export default Footer;


