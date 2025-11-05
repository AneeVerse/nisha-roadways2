import Image from 'next/image';
import { ArrowRight, Award, Users, Globe, Shield, Truck, Warehouse, Cpu, Target, Eye, Heart, Star, CheckCircle, MapPin } from 'lucide-react';
import Footer from '@/components/Footer';
import TeamProfileCard from '@/components/TeamProfileCard';

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
          backgroundImage: `url(&quot;data:image/svg+xml,%3Csvg width=&apos;60&apos; height=&apos;60&apos; viewBox=&apos;0 0 60 60&apos; xmlns=&apos;http://www.w3.org/2000/svg&apos;%3E%3Cg fill=&apos;none&apos; fill-rule=&apos;evenodd&apos;%3E%3Cg fill=&apos;%23000000&apos; fill-opacity=&apos;1&apos;%3E%3Ccircle cx=&apos;7&apos; cy=&apos;7&apos; r=&apos;1&apos;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E&quot;)`
        }}></div>
        
        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-12">
            
            {/* Left Content - Perfectly Aligned */}
            <div className="flex flex-col justify-center space-y-6 lg:pr-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold shadow-lg w-fit">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                Since 1982 • 43 Years of Excellence
              </div>
              
              {/* Main Heading - Perfect Typography */}
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
                  Our Story
                </h1>
              </div>
              
              {/* Description */}
              <p className="text-lg text-gray-700 leading-relaxed font-medium max-w-xl">
                We started in 1982 with a simple idea: move cargo reliably, track it completely, and keep clients informed.
                <br /><br />
                43 years later, we&apos;re moving 96,000 shipments annually across India. We&apos;ve grown from local transport to pan-India operations with plans for Dubai and Africa.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div>
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">2.3M+</div>
                  <div className="text-sm font-semibold text-gray-600 mt-1">Shipments Moved</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">300+</div>
                  <div className="text-sm font-semibold text-gray-600 mt-1">Active Clients</div>
                </div>
              </div>
              
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
      <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/30 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              Our Journey
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              What Sets Us Apart
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Timeline Cards */}
            <div className="space-y-8">
              {/* Real Tracking Card */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="bg-gradient-to-br from-yellow-500 to-orange-500 text-white rounded-2xl w-16 h-16 flex items-center justify-center font-bold text-xl shadow-lg">
                        <Target className="w-8 h-8" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Real tracking, not updates</h3>
                      <p className="text-blue-600 font-semibold mb-4">Our GPS system</p>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        Our GPS system tracks through driver phones and cell towers. You get automated reports every hour not when someone remembers to call you.
                      </p>
                    </div>
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                </div>
              </div>
              
              {/* Fleet Card */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="bg-gradient-to-br from-blue-500 to-indigo-500 text-white rounded-2xl w-16 h-16 flex items-center justify-center font-bold text-xl shadow-lg">
                        <Truck className="w-8 h-8" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Owned + Leased fleet</h3>
                      <p className="text-indigo-600 font-semibold mb-4">Flexibility</p>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        75 owned vehicles and 650 leased vehicles give us flexibility. Need 50 trucks next week? We can make it happen.
                      </p>
                    </div>
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
            
            {/* Vision Card */}
            <div className="relative lg:sticky lg:top-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-700/20 rounded-3xl blur-2xl"></div>
                <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 p-10 rounded-3xl text-white shadow-2xl overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-20 translate-x-20"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-16 -translate-x-16"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center">
                        <Warehouse className="w-6 h-6 text-blue-900" />
                      </div>
                      <h3 className="text-3xl font-bold">500 containers ready</h3>
                    </div>
                    
                    <p className="text-blue-100 mb-8 leading-relaxed text-lg">
                      We own 500 containers in different sizes and types. GP, high cube, reefer, tank, flat rack whatever your cargo needs.
                    </p>
                    
                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-blue-900" />
                        </div>
                        <p className="text-yellow-300 font-bold text-lg">Our Approach</p>
                      </div>
                      <p className="text-blue-100 leading-relaxed">
                        We check container conditions before pickup. We provide bottle seals for your cargo. We verify everything at delivery and inform you immediately if there&apos;s an issue. When you need escorts, special locks, or brand-new containers for high-value cargo—you get them. No upcharges, no negotiations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Technology Integration */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Technology Integration</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
            <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed">
              We&apos;re building <span className="font-bold text-blue-600">DICE</span>, our end-to-end logistics platform. It handles orders, tracking, documentation, and billing with minimal human intervention. AI integration improves route planning and reduces delivery times.
            </p>
          </div>
        </div>
      </section>

      {/* Training Matters */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Training Matters</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
            <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed">
              <span className="font-bold text-blue-600">Aamita</span> is our weekly training program where industry experts share real experiences. Our team learns from people who&apos;ve handled ODC movements in monsoons, cleared customs in 2 hours, and managed port congestion.
            </p>
            <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto font-semibold">
              Better training means better service for you.
            </p>
          </div>
        </div>
      </section>

      {/* Building Relationships */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Building Relationships</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
            <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed">
              We organize the <span className="font-bold text-blue-600">Nisha Cricket Team IPL Championship</span> every year. Clients join us for friendly matches. It&apos;s not about winning—it&apos;s about knowing the people who move your cargo.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Leadership (DREAM TEAM)</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamProfileCard
              name="NK AGARWAL"
              role="Founder & Chairman"
              imageSrc="/images/dream-team/imgi_2_nka.jpg"
              description="Born and brought up in Calcutta, Mr. Nandkishor Agarwal moved to Mumbai in 1975. Having completed his education in Calcutta, he got a job in a small transport company as Supervisor as soon as he arrived in Mumbai. He subsequently started out on his own and founded Nisha Roadways Pvt. Ltd. in 1982. The company has grown from strength to strength over the years. His rich experience of 43 years in the transport sector has earned him tremendous goodwill and respect amongst his clients, competitors and industry biggies."
              accentGradient="from-blue-600 to-indigo-700"
            />
            <TeamProfileCard
              name="NAVIN AGARWAL"
              role="CEO"
              imageSrc="/images/dream-team/imgi_3_navina.jpg"
              description="After completing his B.Com from Mumbai University, Navin acquired an MBA from K. J. Somaiya Institute of Management Studies, Mumbai, and subsequently joined the business in the year 2000. Bringing innovative ideas, he worked to boost the business from just four to 30+ branches, thus widening the network pan-India. Making calculated strategies work for him, he diversified into other segments like tank division, LCL, FCL services, warehousing and packaging etc. Today under his astute supervision, NRPL is steadily growing with their own fleet on roads."
              accentGradient="from-green-600 to-emerald-700"
            />
            <TeamProfileCard
              name="RAJKUMAR AGARWAL"
              role="Mentor"
              imageSrc="/images/dream-team/imgi_4_rajkumara.jpg"
              description="Mr. Raj Kumar Agarwal, a practicing lawyer in the field of Income tax, left his practice to pursue his dream in the field of Real estate in the year 1990. Currently the founder &amp; Managing Director of Kolkata's Real Estate company &quot;AMBEY GROUP&quot;, engaged in construction and land development for both residential as well as commercial spaces since more than two decades."
              accentGradient="from-purple-600 to-violet-700"
            />
            <TeamProfileCard
              name="SUMIT SINGHANIA"
              role="C.A (Consultant)"
              imageSrc="/images/dream-team/imgi_5_sumits.jpg"
              description="He is a chartered accountant with over 18 years of working experience in the field of audit, finance, real-estate and taxation. He has extensive knowledge of the Indian real-estate sector and has passion for developing innovative products for the real-estate sector. He carries with him the experience of working with the big 4 CA Firms and has executed several projects in the country as the leader. He is presently serving as a Consultant in BAS &amp; CO. LLP and is also acting as a CEO &amp; Founder of Distress Bricks Private Limited."
              accentGradient="from-orange-600 to-red-700"
            />
            <TeamProfileCard
              name="ARUN KUMAR PANDEY"
              role="C.A (Consultant)"
              imageSrc="/images/dream-team/imgi_6_arunkumar.jpg"
              description="Arun Pandey comes with a rock solid experience of 30 years as a Chartered Accountant. Having worked with 15 companies which are in the big league, today he runs his own company &quot;A Pandey &amp; Associates&quot;. Immensely benefitting his collective experience working has given him in-depth proficiency about the working of this industry. Today he is amongst the core group of NRPL."
              accentGradient="from-teal-600 to-cyan-700"
            />
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
                Aligning ourselves to our customers&apos; goals helps us create suitable solutions that directly address their needs.
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
                    World-class information technology including cyber security ensuring complete safety of clients&apos; goods and valuable cargo. Latest tracking devices deliver efficient service.
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
          
          {/* Bottom Stats */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-8 bg-white/80 backdrop-blur-sm border border-white/30 rounded-2xl px-8 py-6 shadow-xl">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-indigo-600">16+</div>
                <div className="text-sm text-gray-600 font-medium">Industries</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-purple-600">500+</div>
                <div className="text-sm text-gray-600 font-medium">Clients Served</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600">99.8%</div>
                <div className="text-sm text-gray-600 font-medium">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Network & Awards Combined */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-400/30 to-indigo-600/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-400/30 to-pink-600/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-2xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Network */}
          <div className="mb-24">
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm border border-white/20 rounded-full text-blue-700 font-semibold mb-8 shadow-lg">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></span>
                Nationwide Network
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">Pan-India Presence</span>, Local Expertise
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                With 30+ strategically located branches across India, we deliver unmatched connectivity and localized expertise for seamless logistics solutions
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="bg-white/70 backdrop-blur-sm border border-white/30 p-8 rounded-3xl shadow-xl">
                  <p className="text-xl text-gray-700 mb-8 leading-relaxed font-medium">
                    Our extensive network creates cost-effective transportation plans and provides comprehensive services at all major ports and ICDs across the nation.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center mr-3">
                          <span className="text-white font-bold text-lg">🚢</span>
                        </div>
                        <h4 className="font-bold text-blue-900 text-lg">Major Ports</h4>
                      </div>
                      <ul className="text-blue-800 space-y-2 font-medium">
                        <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Mumbai</li>
                        <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>JNPT</li>
                        <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Chennai</li>
                        <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Kolkata</li>
                        <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Kandla</li>
                      </ul>
                    </div>
                    
                    <div className="group bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-2xl border border-green-200/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center mr-3">
                          <span className="text-white font-bold text-lg">🏭</span>
                        </div>
                        <h4 className="font-bold text-green-900 text-lg">Primary ICDs</h4>
                      </div>
                      <ul className="text-green-800 space-y-2 font-medium">
                        <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Delhi</li>
                        <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Bangalore</li>
                        <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Hyderabad</li>
                        <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Ahmedabad</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 p-10 rounded-3xl text-white shadow-2xl border border-white/20 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div>
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                        <MapPin className="w-8 h-8 text-indigo-900" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold mb-1">30+ Branches</h3>
                        <p className="text-indigo-200 font-medium">Nationwide Coverage</p>
                      </div>
                    </div>
                    
                    <p className="text-indigo-100 mb-8 text-lg leading-relaxed">
                      Our nationwide network ensures that no destination is too remote and no cargo too challenging for our expert logistics solutions.
                    </p>
                    
                    <div className="bg-white/15 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                      <div className="flex items-center mb-3">
                        <span className="w-3 h-3 bg-yellow-400 rounded-full mr-3"></span>
                        <p className="text-yellow-300 font-bold text-lg">Coverage Areas</p>
                      </div>
                      <p className="text-indigo-100 leading-relaxed">
                        Industrial corridors, manufacturing hubs, and comprehensive coverage across Tier-1, Tier-2, and Tier-3 cities nationwide
                      </p>
                    </div>
                    
                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/20">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-yellow-300">30+</div>
                        <div className="text-indigo-200 text-sm font-medium">Branches</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-yellow-300">5</div>
                        <div className="text-indigo-200 text-sm font-medium">Major Ports</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-yellow-300">4</div>
                        <div className="text-indigo-200 text-sm font-medium">Primary ICDs</div>
                      </div>
                    </div>
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
              We realize that the shipments we carry are the lifeline of our clients&apos; businesses. That&apos;s why we take &quot;Handle with Care&quot; beyond industry standards.
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
                Join the <span className="font-bold text-emerald-600">Nisha Parivaar</span> and become part of India&apos;s most trusted logistics family. Together, we&apos;ll build the future of transportation and create success stories that inspire generations.
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
              {/* Floating Elements - Moved Up */}
              <div className="absolute -top-12 -right-4 bg-emerald-500 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg animate-bounce z-20">
                We&apos;re Hiring!
              </div>
              <div className="absolute -top-8 -left-4 bg-teal-500 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg z-20">
                5000+ Team Members
              </div>
              
              <div className="relative z-10">
                {/* Main Card - Straightened */}
                <div className="bg-white rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-500">
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
              
              {/* Background Decoration - Subtle */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/50 to-teal-100/50 rounded-3xl transform translate-x-2 translate-y-2 -z-10"></div>
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

      {/* Footer */}
      <Footer />
    </div>
  );
}