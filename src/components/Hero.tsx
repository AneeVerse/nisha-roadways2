import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden pt-0 -mt-20">
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
        <div className="w-full px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="max-w-4xl">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-white leading-[0.9] tracking-tight mb-8">
              India's Most Trusted <br />
              <span className="text-white">
               Logistics Partner 
              </span>
            </h1>
             <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 max-w-[800px]  mb-8 font-ligh lg:mt-10">
              From containers to project cargo, we move what matters most to your business
              Pan-India coverage. Zero damage guarantee. 24/7 tracking..
            </p>

             {/* CTA Button - White background with blue accents */}
            <div className="flex items-center gap-6 mb-20">
              <Button 
                variant="outline"
                className="group relative px-12 py-4 !bg-white hover:!bg-gradient-to-r hover:!from-blue-600 hover:!via-blue-700 hover:!to-blue-800 !text-gray-900 hover:!text-white text-xl font-semibold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 overflow-hidden min-w-[280px] !border !border-blue-200 hover:!border-blue-800"
              >
                {/* Animated background overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-blue-50/50 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
                
                {/* Blue glow effect on hover */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/10 via-blue-500/20 to-blue-600/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
                
                <span className="relative flex items-center justify-center gap-12 uppercase">
                 Track Your Shipment

                  {/* Blue icon */}
                  <div className="relative w-10 h-10 rounded-full  bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 group-hover:bg-blue-600 flex items-center justify-center transition-all duration-300 shadow-lg">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform duration-300">
                      <path d="M5 12h14"/>
                      <path d="m12 5 7 7-7 7"/>
                    </svg>
                  </div>
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
