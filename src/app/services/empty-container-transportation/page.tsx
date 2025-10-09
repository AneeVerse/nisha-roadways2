import Image from "next/image";
import { Button } from "@/components/ui/button";
import { 
  Truck, 
  MapPin, 
  Shield, 
  ArrowRight,
  Phone,
  Container,
  Zap,
  Target,
  Settings,
  Package,
  FileText
} from "lucide-react";
import Footer from "@/components/Footer";

export default function EmptyContainerTransportationPage() {
  const keyBenefits = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Cost Leadership",
      description: "Up to 40% savings compared to rail transport"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Speed Advantage", 
      description: "Direct port-to-port delivery without transshipment delays"
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Fleet Expertise",
      description: "Dedicated skeleton and platform trailers"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Network Coverage",
      description: "Presence at all major ports and ICDs nationwide"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
     
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
            <div className="space-y-8 flex flex-col justify-center">
              <div className="inline-flex items-center px-4 py-2 bg-blue-600/30 rounded-full text-sm font-medium w-fit">
                <Container className="w-4 h-4 mr-2" />
                Empty Container Transportation
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                India&apos;s Pioneer in{" "}
                <span className="text-blue-300">Empty Container</span>{" "}
                Transportation
              </h1>
              
              <p className="text-xl text-blue-100 leading-relaxed">
                Connecting all major ports and ICDs with cost-effective empty container solutions since 1982.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-semibold text-lg">
                  Get Instant Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 font-semibold text-lg transition-all duration-300">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </div>
            </div>
            
            <div className="relative flex items-center justify-center h-full">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full max-w-lg">
                <Image
                  src="/images/use-everywhere/images1.png"
                  alt="Empty Container Transportation"
                  width={600}
                  height={500}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-6 rounded-xl shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">40%</div>
                    <div className="text-sm text-gray-600">Cost Savings</div>
                  </div>
                  <div className="w-px h-12 bg-gray-200"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">24/7</div>
                    <div className="text-sm text-gray-600">Availability</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About This Service */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
                  About Our Service
                </div>
                <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Revolutionizing Container <span className="text-blue-600">Movement</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Nisha Roadways revolutionized empty container movement by road in India. We handle 20ft, 40ft, and 45ft empty containers with specialized skeleton trailers and platform vehicles, ensuring quick turnaround times at competitive rates.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl font-bold text-blue-600 mb-2">1982</div>
                  <div className="text-sm text-gray-600 font-medium">Since</div>
                </div>
                <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl font-bold text-blue-600 mb-2">Pan-India</div>
                  <div className="text-sm text-gray-600 font-medium">Coverage</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/use-everywhere/images2.png"
                  alt="Container Transportation Fleet"
                  width={600}
                  height={500}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-200 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Key Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the advantages of choosing Nisha Roadways for your empty container transportation needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyBenefits.map((benefit, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/use-everywhere/images3.png"
                  alt="Technical Specifications"
                  width={600}
                  height={500}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-30"></div>
              <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-40"></div>
            </div>
            
            <div className="space-y-6 order-1 lg:order-2">
              <div>
                <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold mb-4">
                  Technical Excellence
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  Precision in Every <span className="text-green-600">Detail</span>
                </h2>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                <div className="group p-4 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-blue-200">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                      <Container className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">Container Types</h3>
                      <p className="text-sm text-gray-600">20ft, 40ft, and 45ft empty containers</p>
                    </div>
                  </div>
                </div>
                
                <div className="group p-4 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-blue-200">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                      <Truck className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">Vehicle Types</h3>
                      <p className="text-sm text-gray-600">Specialized skeleton trailers and platform vehicles</p>
                    </div>
                  </div>
                </div>
                
                <div className="group p-4 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-blue-200">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-300">
                      <Settings className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">Load Capacity</h3>
                      <p className="text-sm text-gray-600">Up to 30 tons per vehicle with optimal weight distribution</p>
                    </div>
                  </div>
                </div>
                
                <div className="group p-4 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-blue-200">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors duration-300">
                      <Shield className="w-4 h-4 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">Safety Standards</h3>
                      <p className="text-sm text-gray-600">ISO certified handling procedures and GPS tracking</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6">
              Industries We Serve
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Trusted Across <span className="text-purple-600">Industries</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From manufacturing to retail, we serve diverse industries with specialized container transportation solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-purple-200 hover:-translate-y-2">
               <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                 <Package className="w-8 h-8 text-blue-600" />
               </div>
               <h3 className="text-xl font-bold text-gray-900 mb-3">Manufacturing</h3>
               <p className="text-gray-600 leading-relaxed">Raw materials, finished goods, and industrial equipment transportation</p>
             </div>
             
             <div className="group p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-purple-200 hover:-translate-y-2">
               <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                 <Truck className="w-8 h-8 text-green-600" />
               </div>
               <h3 className="text-xl font-bold text-gray-900 mb-3">Automotive</h3>
               <p className="text-gray-600 leading-relaxed">Vehicle parts, components, and finished automobiles</p>
             </div>
             
             <div className="group p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-purple-200 hover:-translate-y-2">
               <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                 <Settings className="w-8 h-8 text-purple-600" />
               </div>
               <h3 className="text-xl font-bold text-gray-900 mb-3">Textiles</h3>
               <p className="text-gray-600 leading-relaxed">Fabric, garments, and textile machinery</p>
             </div>
             
             <div className="group p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-purple-200 hover:-translate-y-2">
               <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                 <Container className="w-8 h-8 text-orange-600" />
               </div>
               <h3 className="text-xl font-bold text-gray-900 mb-3">Chemicals</h3>
               <p className="text-gray-600 leading-relaxed">Industrial chemicals and pharmaceutical products</p>
             </div>
             
             <div className="group p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-purple-200 hover:-translate-y-2">
               <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                 <Shield className="w-8 h-8 text-red-600" />
               </div>
               <h3 className="text-xl font-bold text-gray-900 mb-3">Electronics</h3>
               <p className="text-gray-600 leading-relaxed">Consumer electronics and technology equipment</p>
             </div>
             
             <div className="group p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-purple-200 hover:-translate-y-2">
               <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-teal-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                 <FileText className="w-8 h-8 text-teal-600" />
               </div>
               <h3 className="text-xl font-bold text-gray-900 mb-3">Retail</h3>
               <p className="text-gray-600 leading-relaxed">Consumer goods and retail merchandise</p>
             </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
              Our Process
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Streamlined <span className="text-blue-600">Operations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven 4-step process ensures efficient and reliable container transportation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group relative">
              <div className="h-full p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg border border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Booking Request</h3>
                <p className="text-gray-600 leading-relaxed">Submit your container transportation requirements through our online portal or contact our team directly</p>
              </div>
              {/* Connector line */}
              <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-300 to-green-300 transform -translate-y-1/2"></div>
            </div>
            
            <div className="group relative">
              <div className="h-full p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-lg border border-green-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Route Planning</h3>
                <p className="text-gray-600 leading-relaxed">Our logistics team plans the optimal route considering traffic, regulations, and delivery timelines</p>
              </div>
              {/* Connector line */}
              <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-green-300 to-purple-300 transform -translate-y-1/2"></div>
            </div>
            
            <div className="group relative">
              <div className="h-full p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl shadow-lg border border-purple-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Transportation</h3>
                <p className="text-gray-600 leading-relaxed">Secure loading and transportation with real-time GPS tracking and regular status updates</p>
              </div>
              {/* Connector line */}
              <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-300 to-orange-300 transform -translate-y-1/2"></div>
            </div>
            
            <div className="group">
              <div className="h-full p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl shadow-lg border border-orange-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Delivery</h3>
                <p className="text-gray-600 leading-relaxed">Safe delivery to destination with proper documentation and confirmation of receipt</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      <Footer />
    </div>
  );
}