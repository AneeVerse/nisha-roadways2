import Image from "next/image";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Empty Container Transportation",
      description: "Pioneers in empty container movement across all major ports and ICDs. Cost-effective solutions with industry-leading turnaround times.",
      benefits: ["40% cost savings", "24/7 availability", "Pan-India coverage"],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
        </svg>
      )
    },
    {
      id: 2,
      title: "Export & Import Containers",
      description: "Full-service container logistics for 20ft, 40ft, and 45ft units. Seamless port-to-door connectivity with real-time tracking.",
      benefits: ["Zero documentation delays", "Customs clearance support", "Damage-free delivery"],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          <path d="M3 17h18v2H3v-2zm0-6h18v2H3v-2zm0-6h18v2H3V5z"/>
        </svg>
      )
    },
    {
      id: 3,
      title: "Project Cargo Management",
      description: "Oversized and heavy machinery transportation with route surveys, permits, and specialized vehicles. No cargo too complex.",
      benefits: ["Custom engineering solutions", "Permit management", "Dedicated project managers"],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
        </svg>
      )
    },
    {
      id: 4,
      title: "Chemical Transportation",
      description: "Certified hazardous and non-hazardous chemical transport with safety-trained drivers and compliant vehicles.",
      benefits: ["ADR-certified drivers", "Emergency response protocols", "Insurance coverage"],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.5 2c-1.82 0-3.53.5-5 1.35C2.99 4.07 2 5.84 2 7.5c0 1.66.99 3.43 2.5 4.15C6.47 12.5 8.18 13 10 13h4c1.82 0 3.53-.5 5-1.35C20.01 10.93 21 9.16 21 7.5c0-1.66-.99-3.43-2.5-4.15C16.53 2.5 14.82 2 13 2H9.5zm0 2H13c1.48 0 2.77.35 3.75.88.98.53 1.75 1.37 1.75 2.62s-.77 2.09-1.75 2.62C15.77 10.65 14.48 11 13 11h-3c-1.48 0-2.77-.35-3.75-.88C5.27 9.59 4.5 8.75 4.5 7.5s.77-2.09 1.75-2.62C7.23 4.35 8.52 4 10 4h-.5z"/>
          <circle cx="7" cy="7.5" r="1.5"/>
          <circle cx="17" cy="7.5" r="1.5"/>
          <path d="M12 15v7h-2v-7h2z"/>
        </svg>
      )
    },
    {
      id: 5,
      title: "Bulk Cargo Solutions",
      description: "Steel coils, grains, construction materials, and industrial goods with optimized vehicle configurations.",
      benefits: ["Load optimization", "Reduced handling damage", "Flexible scheduling"],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          <path d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"/>
        </svg>
      )
    },
    {
      id: 6,
      title: "High-Value Goods Escort",
      description: "Armed security escort services with GPS tracking for valuable and sensitive cargo shipments.",
      benefits: ["24/7 surveillance", "Trained security personnel", "Comprehensive insurance"],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.1 16,12.7V16.2C16,16.8 15.4,17.3 14.8,17.3H9.2C8.6,17.3 8,16.8 8,16.2V12.8C8,12.2 8.6,11.7 9.2,11.7V10.1C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,9.5V11.5H13.5V9.5C13.5,8.7 12.8,8.2 12,8.2Z"/>
        </svg>
      )
    },
    {
      id: 7,
      title: "Warehousing & Storage",
      description: "Climate-controlled facilities near major ports with inventory management and last-mile distribution.",
      benefits: ["Strategic locations", "Inventory tracking", "Flexible storage terms"],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17,10H7V8L12,3L17,8V10M20,21H4A2,2 0 0,1 2,19V9H4V19H20V9H22V19A2,2 0 0,1 20,21Z"/>
          <path d="M8 11h2v6H8v-6zm3 0h2v6h-2v-6zm3 0h2v6h-2v-6z"/>
        </svg>
      )
    },
    {
      id: 8,
      title: "LCL Consolidation",
      description: "Small package delivery across India with consolidated shipping for cost-effective transportation.",
      benefits: ["Reduced shipping costs", "Weekly consolidations", "Nationwide reach"],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
          <path d="M8 12h8v2H8v-2zm0 3h8v2H8v-2z"/>
        </svg>
      )
    }
  ];

  const advantages = [
    {
      title: "Zero Damage Guarantee",
      description: "Advanced packing and handling protocols"
    },
    {
      title: "Real-Time Tracking",
      description: "GPS-enabled transparency from pickup to delivery"
    },
    {
      title: "Industry Expertise",
      description: "Specialized knowledge across 16+ sectors"
    },
    {
      title: "Pan-India Network",
      description: "30+ branches ensuring seamless connectivity"
    }
  ];

  const stats = [
    { number: "1,500+", label: "Projects Completed Successfully" },
    { number: "500+", label: "Corporate Clients Served" },
    { number: "16+", label: "Industry Sectors Covered" },
    { number: "99.8%", label: "On-Time Delivery Rate" }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Complete Logistics Solutions for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6a31eb] via-[#9a45d1] to-[#d560ab]">
                Every Business Need
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              From 20ft containers to 100-ton project cargo, we handle what others can't. 35+ years of expertise across 16 industry sectors with zero damage guarantee.
            </p>
            <Button className="px-8 py-3 text-lg">
              Get Custom Quote for Your Cargo
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Eight Specialized Services.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6a31eb] via-[#9a45d1] to-[#d560ab]">
                One Trusted Partner.
              </span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you're shipping a single container or managing complex project cargo, Nisha Roadways delivers tailored solutions that move your business forward. Our comprehensive service portfolio covers every logistics challenge across India's most demanding routes.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.id} className="group bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 hover:border-gray-200 hover:-translate-y-2 cursor-pointer">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl mb-6 group-hover:from-[#6a31eb]/10 group-hover:to-[#d560ab]/10 transition-all duration-500">
                  <div className="text-gray-600 group-hover:text-[#6a31eb] transition-colors duration-500">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#6a31eb] transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">{service.description}</p>
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Key Benefits</p>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center group-hover:text-gray-700 transition-colors duration-300">
                        <div className="w-2 h-2 bg-gradient-to-r from-[#6a31eb] to-[#d560ab] rounded-full mr-3 flex-shrink-0"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              The{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6a31eb] via-[#9a45d1] to-[#d560ab]">
                Nisha Roadways
              </span>{" "}
              Advantage
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover why leading businesses trust us with their most critical logistics challenges
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500 border border-gray-100 hover:border-gray-200 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-[#6a31eb] to-[#d560ab] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#6a31eb] transition-colors duration-300">{advantage.title}</h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Statistics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Proven Track Record of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6a31eb] via-[#9a45d1] to-[#d560ab]">
                Excellence
              </span>
            </h2>
            <p className="text-lg text-gray-600">Numbers that speak for our commitment to quality service</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 hover:from-[#6a31eb]/5 hover:to-[#d560ab]/5 transition-all duration-500 border border-gray-100 hover:border-gray-200 hover:shadow-lg">
                  <div className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6a31eb] via-[#9a45d1] to-[#d560ab] mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <p className="text-gray-600 font-medium leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}