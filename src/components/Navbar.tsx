"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { 
  Menu,
  X,
  ChevronDown,
  Truck,
  Container,
  Settings,
  Shield,
  Package,
  Lock,
  Warehouse,
  FileText,
  Zap
} from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [openMenu, setOpenMenu] = React.useState<null | "services" | "whyus" | "resources">(null);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      href: "/services/empty-container-transportation",
      icon: <Truck className="w-5 h-5" />
    },
    { 
      title: "EXPORT & IMPORT CONTAINERS", 
      desc: "Full-service container logistics for 20ft, 40ft, and 45ft units. Seamless port-to-door connectivity with real-time tracking.", 
      benefits: "Zero documentation delays, customs clearance support, damage-free delivery",
      href: "/services/export-import-containers",
      icon: <Container className="w-5 h-5" />
    },
    { 
      title: "PROJECT CARGO MANAGEMENT", 
      desc: "Oversized and heavy machinery transportation with route surveys, permits, and specialized vehicles. No cargo too complex.", 
      benefits: "Custom engineering solutions, permit management, dedicated project managers",
      href: "/services/project-cargo-management",
      icon: <Settings className="w-5 h-5" />
    },
    { 
      title: "CHEMICAL TRANSPORTATION", 
      desc: "Certified hazardous and non-hazardous chemical transport with safety-trained drivers and compliant vehicles.", 
      benefits: "ADR-certified drivers, emergency response protocols, insurance coverage",
      href: "/services/chemical-transportation",
      icon: <Shield className="w-5 h-5" />
    },
    { 
      title: "BULK CARGO SOLUTIONS", 
      desc: "Steel coils, grains, construction materials, and industrial goods with optimized vehicle configurations.", 
      benefits: "Load optimization, reduced handling damage, flexible scheduling",
      href: "/services/bulk-cargo-solutions",
      icon: <Package className="w-5 h-5" />
    },
    { 
      title: "HIGH-VALUE GOODS ESCORT", 
      desc: "Armed security escort services with GPS tracking for valuable and sensitive cargo shipments.", 
      benefits: "24/7 surveillance, trained security personnel, comprehensive insurance",
      href: "/services/high-value-goods-escort",
      icon: <Lock className="w-5 h-5" />
    },
    { 
      title: "WAREHOUSING & STORAGE", 
      desc: "Climate-controlled facilities near major ports with inventory management and last-mile distribution.", 
      benefits: "Strategic locations, inventory tracking, flexible storage terms",
      href: "/services/warehousing-storage",
      icon: <Warehouse className="w-5 h-5" />
    },
    { 
      title: "LCL CONSOLIDATION", 
      desc: "Small package delivery across India with consolidated shipping for cost-effective transportation.", 
      benefits: "Reduced shipping costs, weekly consolidations, nationwide reach",
      href: "/services/lcl-consolidation-services",
      icon: <FileText className="w-5 h-5" />
    },
  ];

  const whyUs = [
    { title: "About", desc: "Who we are and our mission", href: "/about", image: "/images/use-everywhere/images1.png" },
    { title: "Our team", desc: "Meet the folks behind Nisha", href: "/team", image: "/images/use-everywhere/images2.png" },
    { title: "Collaborated with", desc: "Brands that trust us", href: "/partners", image: "/images/use-everywhere/images3.png" },
    { title: "Testimonials", desc: "What customers say", href: "/testimonials", image: "/images/use-everywhere/images4.png" },
  ];

  const resources = [
    { title: "Blogs", desc: "Insights and updates", href: "/blog", image: "/images/use-everywhere/images1.png" },
    { title: "Nisha Academy", desc: "Logistics education and training", href: "/academy", image: "/images/use-everywhere/images2.png" },
    { title: "FAQ", desc: "Answers to common questions", href: "/faq", image: "/images/use-everywhere/images3.png" },
  ];

  // Sample data for latest blogs and programs
  const latestBlogs = [
    { title: "5 Reasons Why In-House Creative Teams Often Miss the ROI...", href: "/blog", image: "/images/use-everywhere/images1.png" },
    { title: "Agency vs Freelancer vs In-House: 5 Reasons Agencies Win For...", href: "/blog", image: "/images/use-everywhere/images2.png" }
  ];

  const latestPrograms = [
    { title: "Logistics Management Fundamentals", href: "/academy", image: "/images/use-everywhere/images3.png" },
    { title: "Supply Chain Optimization", href: "/academy", image: "/images/use-everywhere/images4.png" }
  ];

  function MegaPanel({ section }: { section: "services" | "whyus" | "resources" }) {
    const isOpen = openMenu === section;
    const items = section === "services" ? services : section === "whyus" ? whyUs : resources;

    const panel = (
      <div className="fixed left-0 right-0 top-full bg-white/100  shadow-2xl border-t border-gray-100/50 z-[110]">
        <div className="w-full px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-24 py-10">
          {/* Services - 3 Column Layout */}
          {section === "services" && (
            <div>
              {/* Our Services Main Link */}
              <div className="mb-8">
                <Link href="/services" className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 hover:from-blue-700 hover:via-blue-800 hover:to-indigo-700 rounded-2xl text-base font-bold text-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 hover:scale-105 overflow-hidden">
                  {/* Animated background overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative flex items-center gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300 group-hover:rotate-12">
                      <Zap className="w-4 h-4" />
                    </div>
                    <span className="tracking-wide">Our Services</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-2 transition-transform duration-500 ease-out">
                      <path d="M5 12h14"/>
                      <path d="m12 5 7 7-7 7"/>
                    </svg>
                  </div>
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Column 1 */}
                <div className="space-y-2">
                {services.slice(0, 3).map((item, index) => (
                  <Link key={item.title} href={item.href} className="group flex items-start gap-4 py-4 px-4 hover:bg-white/70 hover:shadow-md rounded-xl transition-all duration-300 border border-transparent hover:border-blue-100">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-gray-900 group-hover:text-blue-700 mb-2 transition-colors duration-200">
                        {item.title}
                      </div>
                      <div className="text-sm text-gray-600 leading-relaxed">
                        {index === 0 && "Pioneers in empty container movement across all major ports"}
                        {index === 1 && "Full-service container logistics for 20ft, 40ft, and 45ft units"}
                        {index === 2 && "Oversized and heavy machinery transportation"}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Column 2 */}
              <div className="space-y-2">
                {services.slice(3, 6).map((item, index) => (
                  <Link key={item.title} href={item.href} className="group flex items-start gap-4 py-4 px-4 hover:bg-white/70 hover:shadow-md rounded-xl transition-all duration-300 border border-transparent hover:border-blue-100">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-gray-900 group-hover:text-emerald-700 mb-2 transition-colors duration-200">
                        {item.title}
                      </div>
                      <div className="text-sm text-gray-600 leading-relaxed">
                        {index === 0 && "Certified hazardous and non-hazardous chemical transport"}
                        {index === 1 && "Steel coils, grains, construction materials transport"}
                        {index === 2 && "Armed security escort services with GPS tracking"}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Column 3 */}
              <div className="space-y-2">
                {services.slice(6, 8).map((item, index) => (
                  <Link key={item.title} href={item.href} className="group flex items-start gap-4 py-4 px-4 hover:bg-white/70 hover:shadow-md rounded-xl transition-all duration-300 border border-transparent hover:border-blue-100">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-gray-900 group-hover:text-purple-700 mb-2 transition-colors duration-200">
                        {item.title}
                      </div>
                      <div className="text-sm text-gray-600 leading-relaxed">
                        {index === 0 && "Climate-controlled facilities near major ports"}
                        {index === 1 && "Small package delivery across India"}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            </div>
          )}

          {/* Resources - New Layout with Left Menu and Right Content */}
          {section === "resources" && (
            <div className="flex gap-12">
              {/* Left Side - Navigation Menu */}
              <div className="w-64 flex-shrink-0">
                <div className="space-y-1">
                  {resources.map((item) => (
                    <Link 
                      key={item.title} 
                      href={item.href} 
                      className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-50/50 border border-transparent hover:border-blue-100/50 transition-all duration-300"
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-125 transition-transform duration-200"></div>
                      <div>
                        <div className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-200">
                          {item.title}
                        </div>
                        <div className="text-sm text-gray-600">
                          {item.desc}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Right Side - Content Sections */}
              <div className="flex-1 grid grid-cols-2 gap-8">
                {/* Blog Section */}
                <div>
                  <Link href="/blog" className="block mb-4 group">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-200">Blog</h3>
                    <p className="text-sm text-gray-600">Latest articles and insights</p>
                  </Link>
                  <div className="grid grid-cols-1 gap-3">
                    {latestBlogs.map((blog, index) => (
                      <Link 
                        key={index} 
                        href={blog.href}
                        className="group block p-3 rounded-xl hover:bg-gray-50/50 border border-transparent hover:border-gray-200/50 transition-all duration-300"
                      >
                        <div className="aspect-[3/1] bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg mb-3 overflow-hidden">
                          <Image 
                            src={blog.image} 
                            alt={blog.title}
                            width={300}
                            height={100}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <h4 className="font-semibold text-sm text-gray-900 group-hover:text-blue-700 transition-colors duration-200 line-clamp-2">
                          {blog.title}
                        </h4>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Academy Section */}
                <div>
                  <Link href="/academy" className="block mb-4 group">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors duration-200">Academy</h3>
                    <p className="text-sm text-gray-600">Latest programs and courses</p>
                  </Link>
                  <div className="grid grid-cols-1 gap-3">
                    {latestPrograms.map((program, index) => (
                      <Link 
                        key={index} 
                        href={program.href}
                        className="group block p-3 rounded-xl hover:bg-gray-50/50 border border-transparent hover:border-gray-200/50 transition-all duration-300"
                      >
                        <div className="aspect-[3/1] bg-gradient-to-br from-emerald-100 to-teal-100 rounded-lg mb-3 overflow-hidden">
                          <Image 
                            src={program.image} 
                            alt={program.title}
                            width={300}
                            height={100}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <h4 className="font-semibold text-sm text-gray-900 group-hover:text-emerald-700 transition-colors duration-200 line-clamp-2">
                          {program.title}
                        </h4>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Why Us - Keep existing layout */}
          {section === "whyus" && (
            <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center max-w-3xl mx-auto gap-0 -space-x-2">
              {whyUs.map((item) => (
                <Link key={item.title} href={item.href} className="group block w-full max-w-[360px] mx-auto">
                  <div className="aspect-[5/2] bg-gray-100 rounded-lg overflow-hidden mb-4 mt-3">
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
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
      isScrolled || openMenu
        ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-lg' 
        : pathname === '/' && !isScrolled && !openMenu
        ? 'bg-transparent border-b border-transparent'
        : 'bg-white border-b border-gray-200/50'
    }`}>
        {/* Subtle gradient overlay - when scrolled or menu open */}
        {(isScrolled || openMenu) && <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-white/30 to-white/50"></div>}
        
        <div className="w-full px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-24 relative">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 group">
              <div className="relative">
                <Image 
                  src="/images/nav-logo.png" 
                  alt="Nisha" 
                  width={140} 
                  height={42} 
                  className={`h-10 sm:h-12 w-auto transition-all duration-300 group-hover:scale-105 ${
                    isScrolled || openMenu || pathname !== '/' ? 'brightness-100' : 'brightness-0 invert'
                  }`}
                />
                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
              {/* Mega menu triggers */}
              <div className="relative" onMouseEnter={() => setOpenMenu("services")} onClick={(e) => e.stopPropagation()}>
                <button className={`group inline-flex items-center gap-2 text-base font-medium transition-all duration-300 py-3 px-3 relative ${
                  isScrolled || openMenu || pathname !== '/'
                    ? 'text-gray-900 hover:text-blue-600' 
                    : 'text-white hover:text-blue-400'
                }`}>
                  <span className="relative">
                    Services
                    {/* Animated underline */}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300 ease-out"></span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-all duration-300 ${
                    openMenu === "services" 
                      ? "rotate-180 text-blue-400" 
                      : isScrolled || openMenu || pathname !== '/'
                        ? "group-hover:text-blue-600" 
                        : "group-hover:text-blue-400"
                  }`} />
                </button>
                <MegaPanel section="services" />
              </div>
              
              <div className="relative" onMouseEnter={() => setOpenMenu("whyus")} onClick={(e) => e.stopPropagation()}>
                <button className={`group inline-flex items-center gap-2 text-base font-medium transition-all duration-300 py-3 px-3 relative ${
                  isScrolled || openMenu || pathname !== '/'
                    ? 'text-gray-900 hover:text-blue-600' 
                    : 'text-white hover:text-blue-400'
                }`}>
                  <span className="relative">
                    Why Us
                    {/* Animated underline */}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300 ease-out"></span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-all duration-300 ${
                    openMenu === "whyus" 
                      ? "rotate-180 text-blue-400" 
                      : isScrolled || openMenu || pathname !== '/'
                        ? "group-hover:text-blue-600" 
                        : "group-hover:text-blue-400"
                  }`} />
                </button>
                <MegaPanel section="whyus" />
              </div>
              
              <div className="relative" onMouseEnter={() => setOpenMenu("resources")} onClick={(e) => e.stopPropagation()}>
                <button className={`group inline-flex items-center gap-2 text-base font-medium transition-all duration-300 py-3 px-3 relative ${
                  isScrolled || openMenu || pathname !== '/'
                    ? 'text-gray-900 hover:text-blue-600' 
                    : 'text-white hover:text-blue-400'
                }`}>
                  <span className="relative">
                    Resources
                    {/* Animated underline */}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300 ease-out"></span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-all duration-300 ${
                    openMenu === "resources" 
                      ? "rotate-180 text-blue-400" 
                      : isScrolled || openMenu || pathname !== '/'
                        ? "group-hover:text-blue-600" 
                        : "group-hover:text-blue-400"
                  }`} />
                </button>
                <MegaPanel section="resources" />
              </div>
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden lg:block">
              <Button className="group relative px-6 py-3 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-105 overflow-hidden">
                {/* Animated background overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
                
                {/* Content */}
                <span className="relative flex items-center gap-2">
                 GET QUOTE NOW
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform duration-300">
                    <path d="M5 12h14"/>
                    <path d="m12 5 7 7-7 7"/>
                  </svg>
                </span>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen((s) => !s)}
                className={`rounded-xl transition-all duration-300 w-12 h-12 ${
                  isScrolled || openMenu || pathname !== '/'
                    ? 'text-gray-900 hover:text-blue-600 hover:bg-gray-100/50' 
                    : 'text-white hover:text-blue-400 hover:bg-gray-800/50'
                }`}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-700/50 py-6 bg-gray-900/95 backdrop-blur-lg">
            <div className="divide-y divide-gray-700/50">
              {/* Services */}
              <details open className="group">
                <summary className="list-none flex items-center justify-between px-2 py-4 cursor-pointer text-lg font-medium text-white">
                  Services 
                  <ChevronDown className="w-5 h-5 group-open:rotate-180 transition-transform duration-300 text-blue-400" />
                </summary>
                <div className="grid grid-cols-1 gap-3 px-2 pb-6">
                  {services.map((i) => (
                    <Link key={i.title} href={i.href} className="group rounded-xl px-4 py-3 hover:bg-gray-800/50 border border-transparent hover:border-gray-700/50 transition-all duration-300">
                      <div className="font-semibold text-base text-white group-hover:text-blue-400 transition-colors duration-200">{i.title}</div>
                      <div className="text-sm text-gray-300 mb-2 leading-relaxed">{i.desc}</div>
                      <div className="text-sm text-blue-400 font-medium">Benefits: {i.benefits}</div>
                    </Link>
                  ))}
                </div>
              </details>

              {/* Why us */}
              <details className="group">
                <summary className="list-none flex items-center justify-between px-2 py-4 cursor-pointer text-lg font-medium text-white">
                  Why Us 
                  <ChevronDown className="w-5 h-5 group-open:rotate-180 transition-transform duration-300 text-blue-400" />
                </summary>
                <div className="grid grid-cols-1 gap-3 px-2 pb-6">
                  {whyUs.map((i) => (
                    <Link key={i.title} href={i.href} className="group rounded-xl px-4 py-3 hover:bg-gray-800/50 border border-transparent hover:border-gray-700/50 transition-all duration-300">
                      <div className="font-semibold text-base text-white group-hover:text-blue-400 transition-colors duration-200">{i.title}</div>
                      <div className="text-sm text-gray-300">{i.desc}</div>
                    </Link>
                  ))}
                </div>
              </details>

              {/* Resources */}
              <details className="group">
                <summary className="list-none flex items-center justify-between px-2 py-4 cursor-pointer text-lg font-medium text-white">
                  Resources 
                  <ChevronDown className="w-5 h-5 group-open:rotate-180 transition-transform duration-300 text-blue-400" />
                </summary>
                <div className="grid grid-cols-1 gap-3 px-2 pb-6">
                  {resources.map((i) => (
                    <Link key={i.title} href={i.href} className="group rounded-xl px-4 py-3 hover:bg-gray-800/50 border border-transparent hover:border-gray-700/50 transition-all duration-300">
                      <div className="font-semibold text-base text-white group-hover:text-blue-400 transition-colors duration-200">{i.title}</div>
                      <div className="text-sm text-gray-300">{i.desc}</div>
                    </Link>
                  ))}
                </div>
              </details>

              <div className="pt-6 px-2">
                <Button className="w-full py-4 text-base font-medium bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
                  Contact
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
