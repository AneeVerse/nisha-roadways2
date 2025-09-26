import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight tracking-tighter mb-6">
            One Platform to Manage All
            <br />
            Your Ship {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Inspections</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Connect ship owners with qualified inspectors to simplify compliance and maintenance processes.
          </p>
        </div>

        <div className="mt-12 lg:mt-16">
          {/* Outer wrapper keeps shadows and border, inner wrapper clips the image and notch */}
          <div className="relative rounded-[2.5rem] border border-black/5 shadow-2xl shadow-gray-300/50">
            <div className="relative overflow-hidden rounded-[2.5rem]">
              {/* Notch cut inside the top center of the image */}
              <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[74px] bg-white rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.08)] z-10"
              />

              {/* Image */}
              <Image
                src="/images/hero-bg/hero.jpg"
                alt="Ship Inspection"
                width={1920}
                height={1080}
                className="w-full h-auto object-cover select-none"
                priority
              />
            </div>

            {/* Floating CTA group sits above the outer wrapper so it is not clipped */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="flex items-center gap-2 bg-white  rounded-full p-1 ">
                <Button className="px-5 py-2 text-sm">Get Started</Button>
                <Button variant="outline" className="px-5 py-2 text-sm bg-white">Contact Us</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
