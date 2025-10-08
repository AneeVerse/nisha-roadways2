import Image from 'next/image';
import { ArrowRight, Award, Users, Globe, Shield, Truck, Warehouse, Cpu, Target, Eye, Heart, Star, CheckCircle, MapPin, Phone, Mail, ExternalLink, TrendingUp } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-12">
            
            {/* Left Content - Perfectly Aligned */}
            <div className="flex flex-col justify-center space-y-6 lg:pr-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold shadow-lg w-fit">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                Since 1982 • 40+ Years of Excellence
              </div>
              
              {/* Main Heading - Perfect Typography */}
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
                  From <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 animate-gradient">80 Square Feet</span> to India's <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-500 to-red-500 animate-gradient">Logistics Leader</span>
                </h1>
              </div>
              
              {/* Description */}
              <p className="text-lg text-gray-700 leading-relaxed font-medium max-w-xl">
                The inspiring story of how a father's dream, named after his daughter, grew into India's most trusted logistics partner serving <span className="font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">500+ companies</span> across <span className="font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">16 industries</span>.
              </p>
              
              {/* CTA Buttons - Perfect Alignment */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button className="group bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-2xl text-base transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center gap-2 shadow-xl">
                  Discover Our Journey
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group border-2 border-gray-300 hover:border-blue-600 bg-white/80 backdrop-blur-sm text-gray-700 hover:text-blue-600 font-bold py-3 px-6 rounded-2xl text-base transition-all duration-300 hover:shadow-xl inline-flex items-center justify-center gap-2">
                  Watch Our Story
                  <div className="w-5 h-5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-l-[5px] border-l-white border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent ml-0.5"></div>
                  </div>
                </button>
              </div>
              
              {/* Stats - Perfect Grid */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200/50">
                <div className="text-center group">
                  <div className="text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">500+</div>
                  <div className="text-xs font-semibold text-gray-600 mt-1">Companies Served</div>
                </div>
                <div className="text-center group">
                  <div className="text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">16+</div>
                  <div className="text-xs font-semibold text-gray-600 mt-1">Industries</div>
                </div>
                <div className="text-center group">
                  <div className="text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">30+</div>
                  <div className="text-xs font-semibold text-gray-600 mt-1">Branches</div>
                </div>
              </div>
            </div>
            
            {/* Right Visual - Perfect Alignment */}
            <div className="flex items-center justify-center lg:justify-end relative">
              <div className="relative w-full max-w-lg">
                {/* Main Card */}
                <div className="relative z-20 bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-500 border border-white/20">
                  <div className="relative overflow-hidden rounded-2xl">
                    <Image 
                      src="/images/use-everywhere/images1.png" 
                      alt="Nisha Roadways Journey" 
                      width={600} 
                      height={400} 
                      className="w-full h-80 object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div className="mt-6 space-y-2">
                    <h3 className="text-2xl font-bold text-gray-900">The Beginning - 1982</h3>
                    <p className="text-gray-600 text-lg">From a modest 80 sq ft office in Masjid Bunder, Mumbai</p>
                  </div>
                </div>
                
                {/* Floating Elements - Perfect Positioning */}
                <div className="absolute -top-6 -left-6 z-30 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl animate-bounce">
                  Est. 1982
                </div>
                <div className="absolute -bottom-6 -right-6 z-30 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl">
                  40+ Years Strong
                </div>
                
                {/* Background Decorations */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-indigo-100/50 rounded-3xl transform rotate-6 -z-10 blur-sm"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-purple-100/50 to-pink-100/50 rounded-3xl transform -rotate-3 -z-20 blur-sm"></div>
                
                {/* Floating Geometric Shapes */}
                <div className="absolute top-10 right-10 w-4 h-4 bg-blue-500 rounded-full animate-ping"></div>
                <div className="absolute bottom-20 left-10 w-6 h-6 bg-yellow-400 rotate-45 animate-pulse"></div>
                <div className="absolute top-1/2 -right-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-bounce delay-500"></div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* The Beginning - Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Where Dreams Meet Determination</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-yellow-500">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">1982</div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900">The Beginning</h3>
                    <p className="text-gray-600">Masjid Bunder, Mumbai</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  In a modest 80 square feet office, Mr. Nandkishor Agarwal planted the seeds of what would become India's logistics revolution. Named lovingly after his daughter Nisha, this wasn't just another business venture—it was a father's tribute and a visionary's mission.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-500">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">1975</div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900">The Foundation</h3>
                    <p className="text-gray-600">Learning the Trade</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Mr. Nandkishor had already spent seven years mastering the rough and tumble of the transportation industry since arriving in Mumbai from Calcutta. Starting as a supervisor, he learned every nuance of the trade.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-4">The Pioneer's Vision</h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  What set Nisha Roadways apart from day one was our founder's revolutionary idea: empty container transportation by road. This pioneering effort gave us a head start in a domain that others hadn't even considered.
                </p>
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="text-yellow-300 font-semibold">Today, four decades later</p>
                  <p className="text-blue-100">That same spirit of innovation drives our partnerships with 500+ companies across shipping, retail, pharmaceuticals, chemicals, infrastructure, aviation, defense, and countless other sectors.</p>
                </div>
              </div>
              <Image 
                src="/images/use-everywhere/images2.png" 
                alt="Nisha Roadways Journey" 
                width={400} 
                height={300} 
                className="absolute -top-6 -right-6 w-32 h-32 object-cover rounded-full border-4 border-white shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Chairman's Message */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">The Chairman Speaks</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 md:p-12 rounded-3xl shadow-xl relative">
              <div className="absolute top-6 left-6 text-6xl text-orange-400 opacity-50">"</div>
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-orange-600 mb-4">JAI MATA DI!</h3>
              </div>
              
              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                <p>
                  As the economy improves and India marches to a brighter future, we at Nisha Roadways boost our business to bolster growth and progress. Over the years, we have persistently explored options aiming to be one of the leading logistics companies in this industry segment.
                </p>
                <p>
                  Our cornerstone is our team of qualified and earnest employees. They have been our major strength in delivering optimum solutions to our clients. Together we are planning our bright way forward, strategizing processes to meet new challenges.
                </p>
                <p>
                  I take this opportunity to welcome prospective clients, vendors and associates to the Nisha Parivaar for a valuable relationship and journey towards success.
                </p>
              </div>
              
              <div className="mt-8 text-center">
                <div className="inline-flex items-center gap-4 bg-white p-4 rounded-2xl shadow-lg">
                  <Image 
                    src="/images/use-everywhere/images3.png" 
                    alt="Nandkishor Agarwal" 
                    width={80} 
                    height={80} 
                    className="rounded-full object-cover"
                  />
                  <div className="text-left">
                    <p className="font-bold text-gray-900 text-xl">Nandkishor Agarwal</p>
                    <p className="text-gray-600">Founder and Chairman</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">The Dream Team Behind India's Logistics Success</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Nandkishor Agarwal */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 bg-gradient-to-br from-blue-600 to-indigo-700">
                <Image 
                  src="/images/use-everywhere/images1.png" 
                  alt="Nandkishor Agarwal" 
                  width={300} 
                  height={300} 
                  className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                    <Users className="w-16 h-16 text-blue-600" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Nandkishor Agarwal</h3>
                <p className="text-blue-600 font-semibold mb-4">Founder & Chairman</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Born and brought up in Calcutta, moved to Mumbai in 1975. His 43 years of rich experience in the transport sector has earned him tremendous goodwill and respect among clients, competitors, and industry leaders.
                </p>
              </div>
            </div>

            {/* Navin Agarwal */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 bg-gradient-to-br from-green-600 to-emerald-700">
                <Image 
                  src="/images/use-everywhere/images2.png" 
                  alt="Navin Agarwal" 
                  width={300} 
                  height={300} 
                  className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                    <Target className="w-16 h-16 text-green-600" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Navin Agarwal</h3>
                <p className="text-green-600 font-semibold mb-4">Chief Executive Officer</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  B.Com from Mumbai University and MBA from K.J. Somaiya Institute. Joined in 2000, transformed Nisha Roadways from 4 branches to 30+ branches pan-India with innovative leadership.
                </p>
              </div>
            </div>

            {/* Rajkumar Agarwal */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 bg-gradient-to-br from-purple-600 to-violet-700">
                <Image 
                  src="/images/use-everywhere/images3.png" 
                  alt="Rajkumar Agarwal" 
                  width={300} 
                  height={300} 
                  className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                    <Shield className="w-16 h-16 text-purple-600" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Rajkumar Agarwal</h3>
                <p className="text-purple-600 font-semibold mb-4">Mentor</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Practicing lawyer specializing in Income Tax who left practice for real estate in 1990. Founder and Managing Director of Kolkata's AMBEY GROUP with 20+ years construction expertise.
                </p>
              </div>
            </div>

            {/* Sumit Singhania */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 bg-gradient-to-br from-orange-600 to-red-700">
                <Image 
                  src="/images/use-everywhere/images4.png" 
                  alt="Sumit Singhania" 
                  width={300} 
                  height={300} 
                  className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                    <Award className="w-16 h-16 text-orange-600" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Sumit Singhania</h3>
                <p className="text-orange-600 font-semibold mb-4">Chartered Accountant, BAS & CO.</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  18+ years experience in audit, finance, real estate, and taxation. Extensive knowledge of Indian real estate sector with Big 4 CA firms experience.
                </p>
              </div>
            </div>

            {/* Arun Kumar Pandey */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 md:col-span-2 lg:col-span-1">
              <div className="relative h-64 bg-gradient-to-br from-teal-600 to-cyan-700">
                <Image 
                  src="/images/use-everywhere/images5.png" 
                  alt="Arun Kumar Pandey" 
                  width={300} 
                  height={300} 
                  className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                    <Star className="w-16 h-16 text-teal-600" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Arun Kumar Pandey</h3>
                <p className="text-teal-600 font-semibold mb-4">Chartered Accountant, Pandey & Associates</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Rock-solid 30 years as Chartered Accountant with 15 big-league companies before establishing own firm. In-depth industry proficiency invaluable to our core group.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Driving India Forward</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-3xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative">
                <div className="flex items-center mb-6">
                  <Eye className="w-12 h-12 text-yellow-400 mr-4" />
                  <h3 className="text-3xl font-bold">Our Vision</h3>
                </div>
                <p className="text-blue-100 text-lg leading-relaxed">
                  To use our values as the major driving force so that we can align our company with customer sensitivity by creating a niche in the transport and logistics sector.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-600 to-emerald-700 p-8 rounded-3xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative">
                <div className="flex items-center mb-6">
                  <Target className="w-12 h-12 text-yellow-400 mr-4" />
                  <h3 className="text-3xl font-bold">Our Mission</h3>
                </div>
                <p className="text-green-100 text-lg leading-relaxed">
                  To be fully committed towards understanding and meeting the quality standards and expectations of clients with implementation of latest technology and superior services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">The Pillars That Define Us</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                In everything that we do. Every shipment, every route, every client interaction reflects our commitment to setting industry benchmarks.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Reliability</h3>
              <p className="text-gray-600 leading-relaxed">
                Giving our 100%, every time, in every shipment. When you trust us with your cargo, you trust us with your business success.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">History</h3>
              <p className="text-gray-600 leading-relaxed">
                Continuing our legacy of continuous development with pride. Four decades of learning, growing, and leading the industry forward.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                Empowered with inventions, we arrive at newer technological solutions and scalable ideas in logistics and transportation.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Customer Orientation</h3>
              <p className="text-gray-600 leading-relaxed">
                Aligning ourselves to our customers' goals helps us create suitable solutions that directly address their needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Sets Us Apart</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Truck className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Transport Excellence</h3>
                  <p className="text-gray-600 leading-relaxed">
                    High-quality logistics services on 24x7 basis keeping safety as the top priority. Our specialized fleet handles everything from 20ft containers to 100-ton project cargo.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Warehouse className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Storage Solutions</h3>
                  <p className="text-gray-600 leading-relaxed">
                    End-to-end warehousing facilities that are cost-effective and organized, adhering to safety norms with scalable measures. Strategic locations near major ports and ICDs.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Technology Integration</h3>
                  <p className="text-gray-600 leading-relaxed">
                    World-class information technology including cyber security ensuring complete safety of clients' goods and valuable cargo. Latest tracking devices deliver efficient service.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">People Power</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our employees are our core strength, well-trained in all safety, security, and handling processes. We analyze complex problems and provide the best possible logistics solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Trusted Across 16+ Industry Sectors</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
            <p className="text-xl text-gray-600 mt-6">We serve all major business sectors with specialized expertise and tailored solutions</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {[
              { name: 'Chemicals', icon: '🧪' },
              { name: 'Shipping', icon: '🚢' },
              { name: 'Pharmaceuticals', icon: '💊' },
              { name: 'Textiles', icon: '🧵' },
              { name: 'FMCG', icon: '🛒' },
              { name: 'Electronics', icon: '📱' },
              { name: 'Engineering', icon: '⚙️' },
              { name: 'Entertainment', icon: '🎬' },
              { name: 'Energy & Power', icon: '⚡' },
              { name: 'Retail', icon: '🏪' },
              { name: 'Construction', icon: '🏗️' },
              { name: 'Oil & Gas', icon: '🛢️' },
              { name: 'Steel', icon: '🔩' },
              { name: 'Cement', icon: '🏭' },
              { name: 'Infrastructure', icon: '🌉' },
              { name: 'Aviation & Defense', icon: '✈️' }
            ].map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {industry.icon}
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Network & Awards Combined */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Network */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Pan-India Presence, Local Expertise</h2>
              <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  With 30+ branches strategically located across India, we create cost-effective transportation plans and provide services at all major ports and ICDs.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-2xl">
                    <h4 className="font-bold text-blue-900 mb-3">Major Ports</h4>
                    <ul className="text-blue-700 space-y-1">
                      <li>• Mumbai</li>
                      <li>• JNPT</li>
                      <li>• Chennai</li>
                      <li>• Kolkata</li>
                      <li>• Kandla</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-2xl">
                    <h4 className="font-bold text-green-900 mb-3">Primary ICDs</h4>
                    <ul className="text-green-700 space-y-1">
                      <li>• Delhi</li>
                      <li>• Bangalore</li>
                      <li>• Hyderabad</li>
                      <li>• Ahmedabad</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-8 rounded-3xl text-white">
                  <MapPin className="w-12 h-12 text-yellow-400 mb-4" />
                  <h3 className="text-2xl font-bold mb-4">30+ Branches Nationwide</h3>
                  <p className="text-indigo-100 mb-6">
                    Our nationwide network ensures that no destination is too remote and no cargo too challenging.
                  </p>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <p className="text-yellow-300 font-semibold">Coverage Areas:</p>
                    <p className="text-indigo-100 text-sm">Industrial corridors, manufacturing hubs, and Tier-1, Tier-2, Tier-3 cities nationwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Awards */}
          <div>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Industry Recognition for Excellence</h2>
              <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-8 rounded-3xl text-white text-center">
                <Award className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">EXIM MALA AWARDS</h3>
                <p className="text-yellow-100 mb-2">Container Transport Operator of the Year (Road)</p>
                <p className="text-2xl font-bold">2011</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-8 rounded-3xl text-white text-center">
                <Star className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">GUJARAT STAR AWARDS</h3>
                <p className="text-blue-100 mb-2">Industry Excellence Recognition</p>
                <p className="text-2xl font-bold">Excellence</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-8 rounded-3xl text-white text-center">
                <CheckCircle className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">GUJARAT JUNCTION AWARDS</h3>
                <p className="text-green-100 mb-2">Best Transport Operator of the Year</p>
                <p className="text-2xl font-bold">2016</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Security Commitment */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
           <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full opacity-10"></div>
           <div className="absolute bottom-20 right-20 w-40 h-40 bg-white rounded-full opacity-5"></div>
           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white rounded-full opacity-5"></div>
         </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Shield className="w-4 h-4" />
              Our Sacred Promise
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Handle With <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Care</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              We realize that the shipments we carry are the lifeline of our clients' businesses. That's why we take "Handle with Care" beyond industry standards.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Zero Tolerance Policy */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Zero Tolerance Policy</h3>
                <p className="text-blue-100 leading-relaxed">
                  We have zero tolerance for substandard deliveries and strictly adhere to safety measures matching international agency standards.
                </p>
                <div className="mt-6 flex items-center text-red-400 font-semibold">
                  <div className="w-2 h-2 bg-red-400 rounded-full mr-2 animate-pulse"></div>
                  100% Compliance Rate
                </div>
              </div>
            </div>
            
            {/* Investment in Excellence */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Investment in Excellence</h3>
                <p className="text-blue-100 leading-relaxed">
                  Nisha Roadways invests in best-in-class materials and equipment ensuring your cargo reaches its destination safely and intact.
                </p>
                <div className="mt-6 flex items-center text-yellow-400 font-semibold">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></div>
                  Premium Equipment
                </div>
              </div>
            </div>
            
            {/* 100% Transparency */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Eye className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">100% Transparency</h3>
                <p className="text-blue-100 leading-relaxed">
                  From pickup to delivery, we track and update every movement. Complete transparency with online tracking empowers our clients.
                </p>
                <div className="mt-6 flex items-center text-cyan-400 font-semibold">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></div>
                  Real-time Tracking
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-500 rounded-full border-2 border-white"></div>
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full border-2 border-white"></div>
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full border-2 border-white"></div>
              </div>
              <div className="text-left">
                <div className="text-white font-bold">Your Cargo, Our Commitment</div>
                <div className="text-blue-200 text-sm">Trusted by 500+ companies nationwide</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Nisha Parivaar */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-64 h-64 bg-emerald-200 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-teal-200 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-200 rounded-full opacity-10 blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold">
                <Users className="w-4 h-4" />
                Join Our Family
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Success Story <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Starts Here</span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Join the <span className="font-bold text-emerald-600">Nisha Parivaar</span> and become part of India's most trusted logistics family. Together, we'll build the future of transportation and create success stories that inspire generations.
              </p>
              
              {/* Benefits Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Growth Opportunities</div>
                    <div className="text-sm text-gray-600">Career advancement</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Family Culture</div>
                    <div className="text-sm text-gray-600">Supportive environment</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-cyan-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Recognition</div>
                    <div className="text-sm text-gray-600">Merit-based rewards</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Innovation</div>
                    <div className="text-sm text-gray-600">Cutting-edge technology</div>
                  </div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2">
                  Join Nisha Parivaar
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-emerald-600 hover:bg-emerald-600 text-emerald-600 hover:text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 inline-flex items-center justify-center gap-2">
                  View Opportunities
                  <Globe className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            {/* Right Visual */}
            <div className="relative">
              <div className="relative z-10">
                {/* Main Card */}
                <div className="bg-white rounded-3xl shadow-2xl p-8 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Be Part of Something Big</h3>
                    <p className="text-gray-600 mb-6">Join 5000+ professionals who chose Nisha Roadways as their career destination</p>
                    
                    {/* Team Photos Placeholder */}
                    <div className="flex justify-center -space-x-2 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full border-4 border-white"></div>
                      <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full border-4 border-white"></div>
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full border-4 border-white"></div>
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full border-4 border-white"></div>
                      <div className="w-12 h-12 bg-emerald-100 rounded-full border-4 border-white flex items-center justify-center">
                        <span className="text-emerald-600 font-bold text-sm">5K+</span>
                      </div>
                    </div>
                    
                    <div className="bg-emerald-50 rounded-2xl p-4">
                      <div className="text-3xl font-bold text-emerald-600">40+</div>
                      <div className="text-sm text-emerald-700">Years of Trust & Growth</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce">
                We're Hiring!
              </div>
              <div className="absolute -bottom-6 -left-6 bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                5000+ Team Members
              </div>
              
              {/* Background Decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl transform rotate-6 -z-10"></div>
            </div>
          </div>
          
          {/* Bottom Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600">5000+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600">30+</div>
              <div className="text-gray-600">Branches</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-600">16+</div>
              <div className="text-gray-600">Industries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">40+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}