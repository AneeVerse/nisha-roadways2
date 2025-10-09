import Image from "next/image";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import { 
  Truck, 
  Container, 
  Settings, 
  Shield, 
  Package, 
  Lock, 
  Warehouse, 
  FileText 
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Empty Container Transportation",
      description: "Pioneers in empty container movement across all major ports and ICDs. Cost-effective solutions with industry-leading turnaround times.",
      benefits: ["40% cost savings", "24/7 availability", "Pan-India coverage"],
      icon: <Truck className="w-8 h-8" />
    },
    {
      id: 2,
      title: "Export & Import Containers",
      description: "Full-service container logistics for 20ft, 40ft, and 45ft units. Seamless port-to-door connectivity with real-time tracking.",
      benefits: ["Zero documentation delays", "Customs clearance support", "Damage-free delivery"],
      icon: <Container className="w-8 h-8" />
    },
    {
      id: 3,
      title: "Project Cargo Management",
      description: "Oversized and heavy machinery transportation with route surveys, permits, and specialized vehicles. No cargo too complex.",
      benefits: ["Custom engineering solutions", "Permit management", "Dedicated project managers"],
      icon: <Settings className="w-8 h-8" />
    },
    {
      id: 4,
      title: "Chemical Transportation",
      description: "Certified hazardous and non-hazardous chemical transport with safety-trained drivers and compliant vehicles.",
      benefits: ["ADR-certified drivers", "Emergency response protocols", "Insurance coverage"],
      icon: <Shield className="w-8 h-8" />
    },
    {
      id: 5,
      title: "Bulk Cargo Solutions",
      description: "Steel coils, grains, construction materials, and industrial goods with optimized vehicle configurations.",
      benefits: ["Load optimization", "Reduced handling damage", "Flexible scheduling"],
      icon: <Package className="w-8 h-8" />
    },
    {
      id: 6,
      title: "High-Value Goods Escort",
      description: "Armed security escort services with GPS tracking for valuable and sensitive cargo shipments.",
      benefits: ["24/7 surveillance", "Trained security personnel", "Comprehensive insurance"],
      icon: <Lock className="w-8 h-8" />
    },
    {
      id: 7,
      title: "Warehousing & Storage",
      description: "Climate-controlled facilities near major ports with inventory management and last-mile distribution.",
      benefits: ["Strategic locations", "Inventory tracking", "Flexible storage terms"],
      icon: <Warehouse className="w-8 h-8" />
    },
    {
      id: 8,
      title: "LCL Consolidation",
      description: "Small package delivery across India with consolidated shipping for cost-effective transportation.",
      benefits: ["Reduced shipping costs", "Weekly consolidations", "Nationwide reach"],
      icon: <FileText className="w-8 h-8" />
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
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-16 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Complete Logistics Solutions for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6a31eb] via-[#9a45d1] to-[#d560ab]">
                  Every Business Need
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                From 20ft containers to 100-ton project cargo, we handle what others can&apos;t. 35+ years of expertise across 16 industry sectors with zero damage guarantee.
              </p>
              <Button className="px-8 py-3 text-lg">
                Get Custom Quote for Your Cargo
              </Button>
            </div>
            
            {/* Right Image */}
            <div className="relative max-w-full h-full flex items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full">
                <Image
                  src="/images/use-everywhere/images3.png"
                  alt="Logistics and Transportation Services"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover max-w-full min-h-[400px] lg:min-h-[500px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              {/* Floating elements - positioned within bounds */}
             
            </div>
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
              Whether you&apos;re shipping a single container or managing complex project cargo, Nisha Roadways delivers tailored solutions that move your business forward. Our comprehensive service portfolio covers every logistics challenge across India&apos;s most demanding routes.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.id} className="group relative bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-700 hover:border-gray-200 hover:-translate-y-3 cursor-pointer overflow-hidden">
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#6a31eb]/5 via-transparent to-[#d560ab]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
                
                {/* Icon container */}
                <div className="relative flex items-center justify-center w-20 h-20 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl mb-8 group-hover:from-[#6a31eb]/10 group-hover:to-[#d560ab]/10 transition-all duration-700 group-hover:scale-110 group-hover:rotate-3">
                  <div className="text-gray-600 group-hover:text-[#6a31eb] transition-all duration-700 group-hover:scale-110">
                    {service.icon}
                  </div>
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#6a31eb] transition-colors duration-500 leading-tight">{service.title}</h3>
                  <p className="text-gray-600 mb-8 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-500">{service.description}</p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-bold text-gray-900 uppercase tracking-wider">Key Benefits</p>
                      <div className="h-px bg-gradient-to-r from-[#6a31eb] to-[#d560ab] flex-1 ml-3 opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
                    </div>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-center group-hover:text-gray-700 transition-colors duration-500">
                          <div className="w-2 h-2 bg-gradient-to-r from-[#6a31eb] to-[#d560ab] rounded-full mr-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-500"></div>
                          <span className="group-hover:translate-x-1 transition-transform duration-500">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#6a31eb] via-[#9a45d1] to-[#d560ab] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left rounded-b-3xl"></div>
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

      <CtaBanner />
      <Footer />
    </main>
  );
}