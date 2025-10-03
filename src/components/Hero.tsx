import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900 leading-[1.1] sm:leading-tight tracking-tighter mb-4 sm:mb-6">
            One Platform to Manage All <br />Your Ship 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2489be] via-[#89517f] to-[#cb4147]"> Inspections</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-2 sm:px-4 leading-relaxed">
            Connect ship owners with qualified inspectors to simplify compliance and maintenance processes.
          </p>
        </div>

        <div className="mt-20 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-16">
          {/* Outer wrapper keeps shadows and border, inner wrapper clips the image and notch */}
          <div className="relative rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] border border-black/5 shadow-xl sm:shadow-2xl shadow-gray-300/50">
            <div className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem]">
              {/* Notch cut inside the top center of the image */}
              <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[240px] md:w-[280px] h-[50px] sm:h-[60px] md:h-[74px] bg-white rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.08)] sm:shadow-[0_8px_24px_rgba(0,0,0,0.08)] z-10"
              />

              {/* Image */}
              <Image
                src="/images/hero-bg/hero.jpg"
                alt="Ship Inspection"
                width={1920}
                height={1080}
                className="w-full h-auto object-cover select-none min-h-[300px] sm:min-h-[400px] md:min-h-[500px]"
                priority
              />
            </div>

            {/* Floating CTA group sits above the outer wrapper so it is not clipped */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 z-20 w-full max-w-[240px] sm:max-w-none sm:w-auto px-6 sm:px-0 ">
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-2 bg-white rounded-full p-4 sm:p-1 ">
                <Button className="px-4 sm:px-5 py-2.5 sm:py-2 text-sm w-full sm:w-auto font-medium">Get Started</Button>
                <Button variant="outline" className="px-4 sm:px-5 py-2.5 sm:py-2 text-sm bg-white w-full sm:w-auto font-medium">Contact Us</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
