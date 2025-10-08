import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Play, Truck, MapPin, Shield } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-2 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-12 right-1/4 w-80 h-80 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-22 right-1/3 w-64 h-64 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="text-center mb-12 lg:mb-16">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            India's Most Trusted Logistics Partner
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-6">
            India's Most Trusted <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-blue-600 to-orange-500">
              Logistics Partner
            </span>
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-700 font-semibold">
              for 35+ Years
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            From containers to project cargo, we move what matters most to your business. 
            <span className="block mt-2 font-medium text-gray-800">
              Pan-India coverage • Zero damage guarantee • 24/7 tracking
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button className="group relative px-8 py-4 bg-gradient-to-r from-orange-600 via-orange-700 to-red-700 hover:from-orange-700 hover:via-orange-800 hover:to-red-800 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-105 overflow-hidden">
              {/* Animated background overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-400 to-red-400 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
              
              {/* Content */}
              <span className="relative flex items-center gap-2">
                Get Instant Quote
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform duration-300">
                  <path d="M5 12h14"/>
                  <path d="m12 5 7 7-7 7"/>
                </svg>
              </span>
            </Button>
            <Button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 hover:from-blue-700 hover:via-blue-800 hover:to-purple-800 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-105 overflow-hidden">
              {/* Animated background overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
              
              {/* Content */}
              <span className="relative flex items-center gap-2">
                Track Your Shipment
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform duration-300">
                  <path d="M5 12h14"/>
                  <path d="m12 5 7 7-7 7"/>
                </svg>
              </span>
            </Button>
          </div>
        </div>

        {/* Hero Video/Image Section */}
        <div className="relative">
          <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-900 to-gray-800">
            {/* Video Placeholder with Play Button */}
            <div className="relative aspect-[16/7] bg-gradient-to-br from-gray-800 to-gray-900">
              <Image
                src="/images/hero-bg/hero.jpg"
                alt="Nisha Roadways Fleet - Trucks moving across India's highways"
                width={1920}
                height={1080}
                className="w-full h-full object-cover opacity-80"
                priority
              />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="group bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full p-6 lg:p-8 transition-all duration-300 transform hover:scale-110">
                  <Play className="w-8 h-8 lg:w-12 lg:h-12 text-white ml-1" fill="currentColor" />
                </button>
              </div>

              {/* Video Title Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-black/50 backdrop-blur-sm rounded-xl p-4 lg:p-6">
                  <h3 className="text-white text-lg lg:text-xl font-bold mb-2">
                    Driving Forward Your Business
                  </h3>
                  <p className="text-gray-200 text-sm lg:text-base">
                    Watch our fleet in action across India's diverse landscapes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
