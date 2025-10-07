"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}
function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

// Simple chevron icon
function ChevronDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [openMenu, setOpenMenu] = React.useState<null | "services" | "whyus" | "resources">(null);

  // Close on escape
  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenMenu(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Close menu when clicking outside
  React.useEffect(() => {
    function handleClickOutside() {
      setOpenMenu(null);
    }
    if (openMenu) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [openMenu]);

  const services = [
    { 
      title: "EMPTY CONTAINER TRANSPORTATION", 
      desc: "Pioneers in empty container movement across all major ports and ICDs. Cost-effective solutions with industry-leading turnaround times.", 
      benefits: "40% cost savings, 24/7 availability, pan-India coverage",
      href: "#empty-container" 
    },
    { 
      title: "EXPORT & IMPORT CONTAINERS", 
      desc: "Full-service container logistics for 20ft, 40ft, and 45ft units. Seamless port-to-door connectivity with real-time tracking.", 
      benefits: "Zero documentation delays, customs clearance support, damage-free delivery",
      href: "#export-import" 
    },
    { 
      title: "PROJECT CARGO MANAGEMENT", 
      desc: "Oversized and heavy machinery transportation with route surveys, permits, and specialized vehicles. No cargo too complex.", 
      benefits: "Custom engineering solutions, permit management, dedicated project managers",
      href: "#project-cargo" 
    },
    { 
      title: "CHEMICAL TRANSPORTATION", 
      desc: "Certified hazardous and non-hazardous chemical transport with safety-trained drivers and compliant vehicles.", 
      benefits: "ADR-certified drivers, emergency response protocols, insurance coverage",
      href: "#chemical-transport" 
    },
    { 
      title: "BULK CARGO SOLUTIONS", 
      desc: "Steel coils, grains, construction materials, and industrial goods with optimized vehicle configurations.", 
      benefits: "Load optimization, reduced handling damage, flexible scheduling",
      href: "#bulk-cargo" 
    },
    { 
      title: "HIGH-VALUE GOODS ESCORT", 
      desc: "Armed security escort services with GPS tracking for valuable and sensitive cargo shipments.", 
      benefits: "24/7 surveillance, trained security personnel, comprehensive insurance",
      href: "#high-value-escort" 
    },
    { 
      title: "WAREHOUSING & STORAGE", 
      desc: "Climate-controlled facilities near major ports with inventory management and last-mile distribution.", 
      benefits: "Strategic locations, inventory tracking, flexible storage terms",
      href: "#warehousing" 
    },
    { 
      title: "LCL CONSOLIDATION", 
      desc: "Small package delivery across India with consolidated shipping for cost-effective transportation.", 
      benefits: "Reduced shipping costs, weekly consolidations, nationwide reach",
      href: "#lcl-consolidation" 
    },
  ];

  const whyUs = [
    { title: "About", desc: "Who we are and our mission", href: "#about", image: "/images/use-everywhere/images1.png" },
    { title: "Our team", desc: "Meet the folks behind Nisha", href: "#team", image: "/images/use-everywhere/images2.png" },
    { title: "Collaborated with", desc: "Brands that trust us", href: "#collab", image: "/images/use-everywhere/images3.png" },
    { title: "Testimonials", desc: "What customers say", href: "#testimonials", image: "/images/use-everywhere/images4.png" },
  ];

  const resources = [
    { title: "Blogs", desc: "Insights and updates", href: "#blogs", image: "/images/use-everywhere/images1.png" },
    { title: "Nisha Academy", desc: "Guides, playbooks, videos", href: "#academy", image: "/images/use-everywhere/images2.png" },
    { title: "FAQ", desc: "Answers to common questions", href: "#faq", image: "/images/use-everywhere/images3.png" },
  ];

  function MegaPanel({ section }: { section: "services" | "whyus" | "resources" }) {
    const isOpen = openMenu === section;
    const items = section === "services" ? services : section === "whyus" ? whyUs : resources;

    const panel = (
      <div className="fixed left-0 right-0 top-full bg-white shadow-lg border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 py-8">
          {/* Services - 3 Column Layout */}
          {section === "services" && (
            <div>
              {/* Our Services Main Link */}
              <div className="mb-6">
                <Link href="/services" className="group inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:text-gray-900 transition-all duration-200">
                  Our services
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform duration-200">
                    <path d="M5 12h14"/>
                    <path d="m12 5 7 7-7 7"/>
                  </svg>
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Column 1 */}
                <div className="space-y-0 divide-y divide-gray-100">
                {services.slice(0, 3).map((item, index) => (
                  <Link key={item.title} href={item.href} className="group flex items-center justify-between py-4 px-2 hover:bg-gray-50 transition-colors duration-200 first:pt-0 last:pb-0">
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 group-hover:text-gray-700 mb-1">
                        {item.title}
                      </div>
                      <div className="text-sm text-gray-500">
                        {index === 0 && "Pioneers in empty container movement across all major ports"}
                        {index === 1 && "Full-service container logistics for 20ft, 40ft, and 45ft units"}
                        {index === 2 && "Oversized and heavy machinery transportation"}
                      </div>
                    </div>
                    <div className="flex-shrink-0 w-6 h-6 text-gray-400">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {index === 0 && <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/>}
                        {index === 0 && <path d="M15 18H9"/>}
                        {index === 0 && <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/>}
                        {index === 0 && <circle cx="17" cy="18" r="2"/>}
                        {index === 0 && <circle cx="7" cy="18" r="2"/>}
                        
                        {index === 1 && <rect x="1" y="3" width="15" height="13"/>}
                        {index === 1 && <path d="m16 8 2 2-2 2"/>}
                        {index === 1 && <path d="M21 12H18"/>}
                        
                        {index === 2 && <path d="M12 2L2 7l10 5 10-5-10-5z"/>}
                        {index === 2 && <path d="M2 17l10 5 10-5"/>}
                        {index === 2 && <path d="M2 12l10 5 10-5"/>}
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Column 2 */}
              <div className="space-y-0 divide-y divide-gray-100">
                {services.slice(3, 6).map((item, index) => (
                  <Link key={item.title} href={item.href} className="group flex items-center justify-between py-4 px-2 hover:bg-gray-50 transition-colors duration-200 first:pt-0 last:pb-0">
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 group-hover:text-gray-700 mb-1">
                        {item.title}
                      </div>
                      <div className="text-sm text-gray-500">
                        {index === 0 && "Certified hazardous and non-hazardous chemical transport"}
                        {index === 1 && "Steel coils, grains, construction materials transport"}
                        {index === 2 && "Armed security escort services with GPS tracking"}
                      </div>
                    </div>
                    <div className="flex-shrink-0 w-6 h-6 text-gray-400">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {index === 0 && <path d="M9 12l2 2 4-4"/>}
                        {index === 0 && <circle cx="12" cy="12" r="9"/>}
                        
                        {index === 1 && <path d="M12 2L2 7l10 5 10-5-10-5z"/>}
                        {index === 1 && <path d="M2 17l10 5 10-5"/>}
                        {index === 1 && <path d="M2 12l10 5 10-5"/>}
                        
                        {index === 2 && <path d="M9 11H5a2 2 0 0 0-2 2v3c0 1.1.9 2 2 2h4l3 3V8l-3 3z"/>}
                        {index === 2 && <path d="M22 4H12a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h9l1 1V6a2 2 0 0 0-2-2z"/>}
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Column 3 */}
              <div className="space-y-0 divide-y divide-gray-100">
                {services.slice(6, 8).map((item, index) => (
                  <Link key={item.title} href={item.href} className="group flex items-center justify-between py-4 px-2 hover:bg-gray-50 transition-colors duration-200 first:pt-0 last:pb-0">
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 group-hover:text-gray-700 mb-1">
                        {item.title}
                      </div>
                      <div className="text-sm text-gray-500">
                        {index === 0 && "Climate-controlled facilities near major ports"}
                        {index === 1 && "Small package delivery across India"}
                      </div>
                    </div>
                    <div className="flex-shrink-0 w-6 h-6 text-gray-400">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {index === 0 && <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"/>}
                        {index === 0 && <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"/>}
                        {index === 0 && <path d="M12 3v6"/>}
                        
                        {index === 1 && <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>}
                        {index === 1 && <path d="M9 9h6v6H9z"/>}
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            </div>
          )}

          {/* Why Us & Resources - Simple image and text format like Superside */}
          {(section === "whyus" || section === "resources") && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {items.map((item, index) => (
                <Link key={item.title} href={item.href} className="group block">
                  <div className="aspect-[5/2] bg-gray-100 rounded-lg overflow-hidden mb-4">
                    <Image 
                      src={item.image} 
                      alt={item.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="font-medium text-gray-900 group-hover:text-gray-700">{item.title}</div>
                    <div className="text-sm text-gray-500">{item.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    );

    return (
      <div className={`absolute left-0 right-0 top-full z-50 ${isOpen ? "block" : "hidden"}`} onMouseLeave={() => setOpenMenu(null)}>
        {panel}
      </div>
    );
  }

    return (
      <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image src="/images/nav-logo.png" alt="Nisha" width={120} height={36} className="h-10 sm:h-12 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
              {/* Mega menu triggers */}
              <div className="relative" onMouseEnter={() => setOpenMenu("services")} onClick={(e) => e.stopPropagation()}>
                <button className="inline-flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors py-2">
                  Services <ChevronDown className={`transition-transform duration-200 ${openMenu === "services" ? "rotate-180" : ""}`} />
                </button>
                <MegaPanel section="services" />
              </div>
              <div className="relative" onMouseEnter={() => setOpenMenu("whyus")} onClick={(e) => e.stopPropagation()}>
                <button className="inline-flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors py-2">
                  Why us <ChevronDown className={`transition-transform duration-200 ${openMenu === "whyus" ? "rotate-180" : ""}`} />
                </button>
                <MegaPanel section="whyus" />
              </div>
              <div className="relative" onMouseEnter={() => setOpenMenu("resources")} onClick={(e) => e.stopPropagation()}>
                <button className="inline-flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors py-2">
                  Resources <ChevronDown className={`transition-transform duration-200 ${openMenu === "resources" ? "rotate-180" : ""}`} />
                </button>
                <MegaPanel section="resources" />
              </div>
            </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <Button className="px-6 py-2.5 bg-gray-900 hover:bg-gray-800 text-white transition-colors duration-200">Launch App</Button>
          </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen((s) => !s)}
                className="text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
              </Button>
            </div>
          </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4">
            <div className="divide-y divide-gray-100">
              {/* Services */}
              <details open className="group">
                <summary className="list-none flex items-center justify-between px-1 py-3 cursor-pointer text-base font-medium">Services <ChevronDown className="group-open:rotate-180 transition" /></summary>
                <div className="grid grid-cols-1 gap-2 px-1 pb-4">
                  {services.map((i) => (
                    <Link key={i.title} href={i.href} className="rounded-lg px-3 py-2 hover:bg-gray-50">
                      <div className="font-medium text-sm">{i.title}</div>
                      <div className="text-xs text-gray-500 mb-1">{i.desc}</div>
                      <div className="text-xs text-blue-600">Benefits: {i.benefits}</div>
                    </Link>
                  ))}
                </div>
              </details>

              {/* Why us */}
              <details className="group">
                <summary className="list-none flex items-center justify-between px-1 py-3 cursor-pointer text-base font-medium">Why us <ChevronDown className="group-open:rotate-180 transition" /></summary>
                <div className="grid grid-cols-1 gap-2 px-1 pb-4">
                  {whyUs.map((i) => (
                    <Link key={i.title} href={i.href} className="rounded-lg px-3 py-2 hover:bg-gray-50">
                      <div className="font-medium">{i.title}</div>
                      <div className="text-sm text-gray-500">{i.desc}</div>
                    </Link>
                  ))}
                </div>
              </details>

              {/* Resources */}
              <details className="group">
                <summary className="list-none flex items-center justify-between px-1 py-3 cursor-pointer text-base font-medium">Resources <ChevronDown className="group-open:rotate-180 transition" /></summary>
                <div className="grid grid-cols-1 gap-2 px-1 pb-4">
                  {resources.map((i) => (
                    <Link key={i.title} href={i.href} className="rounded-lg px-3 py-2 hover:bg-gray-50">
                      <div className="font-medium">{i.title}</div>
                      <div className="text-sm text-gray-500">{i.desc}</div>
                    </Link>
                  ))}
                </div>
              </details>

              <div className="pt-4">
                <Button className="w-full py-2.5 sm:py-3 text-sm sm:text-base">Launch App</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
