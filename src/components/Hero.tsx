import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-screen overflow-hidden pt-0 -mt-20">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://www.datocms-assets.com/105899/1695210411-ep-1.mp4" type="video/mp4" />
          {/* Fallback background image */}
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
            }}
          ></div>
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/0"></div>
      </div>
      
      <div className="relative z-10 flex items-center justify-start min-h-screen pt-20">
        <div className="w-full px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24">
          <div className="max-w-4xl">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-white leading-[0.9] tracking-tight mb-8">
              Intelligent Solutions for Every Supply Chain Challenge
            </h1>
             <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 max-w-[800px]  mb-8 font-ligh lg:mt-10">
              From empty container optimization to complex ODC movements, we transform logistics challenges into competitive advantages. Twelve integrated solutions. One intelligent network. Infinite possibilities for your business.
            </p>

             {/* CTA Button - Match navbar styling */}
            <div className="flex items-center gap-6 mb-20">
              <Button className="group relative px-6 py-3 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-105 overflow-hidden">
                {/* Animated background overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
                
                {/* Content */}
                <span className="relative flex items-center gap-2">
                 DISCOVER SOLUTIONS
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform duration-300">
                    <path d="M5 12h14"/>
                    <path d="m12 5 7 7-7 7"/>
                  </svg>
                </span>
              </Button>
            </div>



           

            {/* Explore Text - Simple text with arrow side by side */}
            <div className="absolute bottom-8 right-8 sm:right-12 lg:right-16 xl:right-20 2xl:right-24">
              <div className="group flex items-center gap-2 text-white/80 hover:text-white transition-all duration-300 cursor-pointer">
                <span className="text-sm font-medium">Explore</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-y-1 transition-transform duration-300">
                  <path d="M12 5v14"/>
                  <path d="m5 12 7 7 7-7"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
