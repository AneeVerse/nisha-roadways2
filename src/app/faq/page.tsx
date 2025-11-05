'use client';

import React, { useState, useMemo } from 'react';
import { Search, ChevronDown, ChevronUp, Phone, Mail, MapPin, Globe, Clock, Users, Shield, Truck, DollarSign, Headphones, Building, Zap, Briefcase, MessageCircle } from 'lucide-react';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQ[] = [
  // General Company Information
  {
    id: 'company-1',
    question: 'How long has Nisha Roadways been in business?',
    answer: 'Nisha Roadways was established in October 1982 by Mr. Nandkishor Agarwal. We have been serving India\'s logistics needs for over 43 years, growing from a single 80 square feet office to a pan-India network of 30+ branches serving 500+ companies across 16+ industry sectors.',
    category: 'company'
  },
  {
    id: 'company-2',
    question: 'What makes Nisha Roadways different from other logistics companies?',
    answer: 'We are pioneers in empty container transportation by road in India, giving us unique expertise and competitive advantage. Our founder started this innovative service, and today we combine four decades of experience with modern technology, zero-damage delivery guarantee, and personalized service that treats every client as part of the "Nisha Parivaar".',
    category: 'company'
  },
  {
    id: 'company-3',
    question: 'Which industries do you serve?',
    answer: 'We serve 16+ major industry sectors including Chemicals, Shipping, Pharmaceuticals, Textiles, FMCG, Electronics & White Goods, Engineering, Entertainment, Energy & Power, Retail, Construction, Oil & Gas, Steel, Cement, Infrastructure, and Aviation & Defense. Our expertise spans across diverse cargo types and specialized handling requirements.',
    category: 'company'
  },
  {
    id: 'company-4',
    question: 'How many branches do you have and where are they located?',
    answer: 'We have 30+ branches strategically located across India, ensuring comprehensive coverage from major metros to remote industrial locations. Our network provides seamless connectivity for transportation to and from all major ports, ICDs, and industrial centers nationwide.',
    category: 'company'
  },
  {
    id: 'company-5',
    question: 'Who are your key leadership team members?',
    answer: 'Our leadership team includes Founder & Chairman Nandkishor Agarwal (43+ years experience), CEO Navin Agarwal (MBA, 25+ years experience who expanded our network from 4 to 30+ branches), and experienced advisory board members bringing expertise in finance, legal, and strategic planning.',
    category: 'company'
  },

  // Services & Capabilities
  {
    id: 'services-1',
    question: 'What types of containers do you transport?',
    answer: 'We handle all container types and sizes including: 20ft, 40ft, and 45ft standard containers (loaded and empty), High-cube containers for oversized cargo, Refrigerated containers with temperature control, Tank containers for liquid cargo (hazardous and non-hazardous), Flat rack and platform containers for out-of-gauge cargo, and Open-top containers for crane-loaded materials.',
    category: 'services'
  },
  {
    id: 'services-2',
    question: 'Do you handle project cargo and oversized shipments?',
    answer: 'Yes, we specialize in project cargo transportation with equipment ranging from 50ft to 90ft trailers and multi-axle vehicles capable of handling loads up to 120 tons. Our services include route surveys, permit acquisition, custom vehicle configuration, and specialized handling equipment. We\'ve successfully managed complex infrastructure and power plant equipment transportation.',
    category: 'services'
  },
  {
    id: 'services-3',
    question: 'Can you transport hazardous chemicals safely?',
    answer: 'Absolutely. We have specialized expertise in chemical transportation with ADR-certified drivers, safety-equipped vehicles, and emergency response protocols. Our zero major incidents track record demonstrates our commitment to safety in handling both hazardous and non-hazardous chemicals with complete regulatory compliance.',
    category: 'services'
  },
  {
    id: 'services-4',
    question: 'Do you provide warehousing and storage services?',
    answer: 'Yes, we offer comprehensive warehousing solutions at strategic locations near major ports and ICDs. Our facilities feature climate-controlled environments, advanced security systems, inventory management capabilities, and value-added services including pick-and-pack, cross-docking, and last-mile distribution.',
    category: 'services'
  },
  {
    id: 'services-5',
    question: 'What is LCL consolidation and do you offer this service?',
    answer: 'Less-than-Container-Load (LCL) consolidation combines multiple smaller shipments into single containers for cost-effective transportation. We offer regular weekly consolidations with door-to-door service, making it perfect for businesses with smaller shipping volumes who want container shipping benefits without full container costs.',
    category: 'services'
  },
  {
    id: 'services-6',
    question: 'Do you provide escort services for high-value cargo?',
    answer: 'Yes, our escort services include trained security personnel, armed escort vehicles, GPS tracking, and comprehensive insurance coverage. We provide maximum security for electronics, pharmaceuticals, jewelry, cash, and other high-value goods requiring enhanced protection during transportation.',
    category: 'services'
  },

  // Pricing & Quotes
  {
    id: 'pricing-1',
    question: 'How do you calculate transportation rates?',
    answer: 'Our rates are calculated based on factors including cargo type, weight, dimensions, distance, route complexity, special handling requirements, and service urgency. We provide transparent, competitive pricing with no hidden charges and detailed breakdowns of all costs involved.',
    category: 'pricing'
  },
  {
    id: 'pricing-2',
    question: 'How quickly can I get a transportation quote?',
    answer: 'We provide instant quotes for standard shipments through our online system, and custom quotes for specialized cargo within 24 hours. Our experienced team evaluates your specific requirements to provide accurate, competitive pricing tailored to your needs.',
    category: 'pricing'
  },
  {
    id: 'pricing-3',
    question: 'Do you offer volume discounts for regular clients?',
    answer: 'Yes, we provide competitive pricing structures for regular clients and high-volume shipments. Our relationship-based approach means better rates, priority service, and customized solutions for long-term partners. Contact us to discuss volume-based pricing for your specific requirements.',
    category: 'pricing'
  },
  {
    id: 'pricing-4',
    question: 'What payment terms do you offer?',
    answer: 'We offer flexible payment terms including advance payment, credit arrangements for established clients, and various payment methods including bank transfers, cheques, and digital payments. Specific terms are discussed based on shipment value and client relationship history.',
    category: 'pricing'
  },
  {
    id: 'pricing-5',
    question: 'Are there additional charges for specialized services?',
    answer: 'Specialized services like escort security, route permits, custom vehicle configuration, or expedited delivery may involve additional charges. All such costs are clearly communicated upfront in your quote with complete transparency about pricing structure.',
    category: 'pricing'
  },

  // Safety & Security
  {
    id: 'safety-1',
    question: 'What is your safety track record?',
    answer: 'We maintain a zero-tolerance policy for substandard deliveries and have achieved zero major incidents across 1,500+ projects. Our safety protocols match international agency standards, and we invest in best-in-class materials and equipment to ensure cargo reaches destination safely and intact.',
    category: 'safety'
  },
  {
    id: 'safety-2',
    question: 'How do you ensure cargo security during transportation?',
    answer: 'Our security measures include GPS tracking on all vehicles, trained and background-verified drivers, secure loading and unloading procedures, comprehensive insurance coverage, and 24/7 monitoring of all shipments. For high-value cargo, we provide additional escort services and armed security personnel.',
    category: 'safety'
  },
  {
    id: 'safety-3',
    question: 'What safety equipment do your vehicles have?',
    answer: 'Our vehicles are equipped with fire extinguishers, first-aid kits, emergency communication systems, GPS tracking devices, advanced lashing equipment, and specialized safety gear based on cargo type. Chemical transport vehicles have additional safety equipment including emergency response kits and hazard identification systems.',
    category: 'safety'
  },
  {
    id: 'safety-4',
    question: 'How do you handle emergency situations during transport?',
    answer: 'We have 24/7 emergency response protocols with trained personnel, immediate communication systems, coordination with local authorities, and comprehensive contingency plans. Our drivers are trained in emergency procedures, and we maintain emergency contact networks across all our routes.',
    category: 'safety'
  },
  {
    id: 'safety-5',
    question: 'What insurance coverage do you provide?',
    answer: 'We offer comprehensive transit insurance coverage through partnerships with leading insurance companies like Bajaj Allianz and Tata AIG. Coverage options include cargo value protection, liability insurance, and specialized coverage for high-value or sensitive shipments.',
    category: 'safety'
  },

  // Tracking & Support
  {
    id: 'tracking-1',
    question: 'How can I track my shipment?',
    answer: 'We provide real-time tracking through our online portal and mobile app. From the moment we pick your cargo until delivery and sign-off, we track and update every movement. Our easy-to-use tracking feature enables you to follow your cargo at all times with 100% transparency.',
    category: 'tracking'
  },
  {
    id: 'tracking-2',
    question: 'What information do I need to track my shipment?',
    answer: 'You can track your shipment using your booking reference number, container number, or vehicle registration details. Our tracking system provides real-time location updates, estimated delivery times, and milestone notifications throughout the journey.',
    category: 'tracking'
  },
  {
    id: 'tracking-3',
    question: 'Do you provide delivery notifications and updates?',
    answer: 'Yes, we provide proactive notifications via SMS, email, and phone calls for key milestones including pickup confirmation, departure updates, route progress, and delivery completion. You can customize notification preferences based on your requirements.',
    category: 'tracking'
  },
  {
    id: 'tracking-4',
    question: 'What are your customer support hours?',
    answer: 'Our customer support team operates 24/7 to assist with inquiries, emergency situations, and real-time updates. You can reach us through phone, email, live chat, or our mobile app for immediate assistance and status updates.',
    category: 'tracking'
  },
  {
    id: 'tracking-5',
    question: 'How do I file a complaint or claim?',
    answer: 'Contact our customer service team immediately with your shipment details and concern description. We have dedicated complaint resolution procedures with committed response times and escalation processes to ensure swift resolution of any issues.',
    category: 'tracking'
  },

  // Operational Procedures
  {
    id: 'operations-1',
    question: 'How do I book transportation services with Nisha Roadways?',
    answer: 'You can book services through multiple channels: online booking portal, mobile app, phone call to our customer service, email request, or visit any of our 30+ branch offices. Our team will guide you through requirements and provide confirmation within hours.',
    category: 'operations'
  },
  {
    id: 'operations-2',
    question: 'What documents do I need to provide for shipment booking?',
    answer: 'Required documents typically include cargo description and value, pickup and delivery addresses, contact information, any special handling instructions, and relevant permits or certificates (for specialized cargo). Our team will guide you through specific requirements based on your shipment type.',
    category: 'operations'
  },
  {
    id: 'operations-3',
    question: 'How much advance notice do you need for booking?',
    answer: 'For standard shipments, we can arrange pickup within 24-48 hours. Specialized cargo, project shipments, or routes requiring permits may need 3-7 days advance notice. Emergency shipments can be accommodated with additional coordination and may involve premium charges.',
    category: 'operations'
  },

  // Geographic Coverage
  {
    id: 'geographic-1',
    question: 'Which ports and ICDs do you serve?',
    answer: 'We provide services to all major ports including Mumbai Port, JNPT, Chennai Port, Kolkata Port, Kandla Port, and all primary ICDs including Delhi ICD, Bangalore ICD, Hyderabad ICD, and Ahmedabad ICD. Our network covers both coastal and inland container facilities.',
    category: 'geographic'
  },
  {
    id: 'geographic-2',
    question: 'Do you provide services to remote or difficult-to-reach locations?',
    answer: 'Yes, our pan-India network of 30+ branches enables us to reach remote industrial locations, mines, project sites, and rural areas. We have experience in challenging terrains and can arrange specialized vehicles and routing for difficult destinations.',
    category: 'geographic'
  },
  {
    id: 'geographic-3',
    question: 'Can you handle international shipments?',
    answer: 'We handle the domestic transportation segment of international shipments, including port pickup/delivery, customs clearance support, and inland transportation to/from international gateways. We coordinate with international partners for complete logistics solutions.',
    category: 'geographic'
  },
  {
    id: 'geographic-4',
    question: 'What are your primary transportation corridors?',
    answer: 'Our key corridors include Mumbai-Delhi, Chennai-Bangalore, Kolkata-Delhi, JNPT-Pune, Chennai-Hyderabad, and all major industrial routes connecting ports, manufacturing centers, and consumption markets across India.',
    category: 'geographic'
  },

  // Technology & Innovation
  {
    id: 'technology-1',
    question: 'Do you have a mobile app for tracking and booking?',
    answer: 'Yes, we\'re launching our mobile app that will provide real-time tracking, instant rate quotes, booking capabilities, and direct communication with our customer service team. The app will offer convenient access to all our services on your smartphone.',
    category: 'technology'
  },
  {
    id: 'technology-2',
    question: 'How advanced is your GPS tracking system?',
    answer: 'Our GPS tracking system provides real-time location updates, route monitoring, speed tracking, geofence alerts, and predictive analytics. The system integrates with our customer portal for complete transparency and proactive communication.',
    category: 'technology'
  },
  {
    id: 'technology-3',
    question: 'Do you use digital documentation?',
    answer: 'Yes, we\'re transitioning to digital documentation including electronic proof of delivery, digital bills of lading, online invoice generation, and paperless customs clearance processes. This reduces processing time and improves accuracy.',
    category: 'technology'
  },
  {
    id: 'technology-4',
    question: 'Can you integrate with our ERP or logistics management system?',
    answer: 'We offer API integration capabilities to connect with client ERP systems, providing automatic status updates, digital documentation transfer, and seamless data exchange for enterprise clients with complex logistics requirements.',
    category: 'technology'
  },

  // Careers & Partnerships
  {
    id: 'careers-1',
    question: 'Do you have career opportunities available?',
    answer: 'Yes, we regularly hire across various positions including operations management, customer service, fleet coordination, safety specialists, and administrative roles. Current openings are available for Senior Executives at our head office with requirements for logistics industry experience and excellent communication skills.',
    category: 'careers'
  },
  {
    id: 'careers-2',
    question: 'How can I become a vendor or service partner?',
    answer: 'We welcome partnerships with reliable vendors including vehicle owners, warehouse providers, technology partners, and service providers. Contact our business development team with your capabilities and service offerings for partnership evaluation.',
    category: 'careers'
  },
  {
    id: 'careers-3',
    question: 'Do you offer training programs or skill development?',
    answer: 'Through Nisha Academy, we offer comprehensive logistics education programs ranging from foundation courses to specialized certifications in container operations, project cargo, chemical transport, and warehouse management. We also provide corporate training solutions.',
    category: 'careers'
  },
  {
    id: 'careers-4',
    question: 'What are your vendor empanelment requirements?',
    answer: 'Vendor requirements typically include valid business licenses, insurance coverage, safety certifications, financial stability, and demonstration of service quality. Specific requirements vary based on service type and scope of partnership.',
    category: 'careers'
  },

  // Contact & Support
  {
    id: 'contact-1',
    question: 'What are your office hours and contact information?',
    answer: 'Our head office is located at 909, Mayuresh Cosmos, Plot No. 37, Sector-11, CBD Belapur, Navi Mumbai - 400 614. Contact us at +91-22-41632222, +91-9820088578, or email info@nisharoadways.com. While our office operates during business hours, our operations and customer support are available 24/7.',
    category: 'contact'
  },
  {
    id: 'contact-2',
    question: 'How can I visit your facilities or meet with your team?',
    answer: 'You can visit our head office or any of our 30+ branch locations across India. We recommend scheduling appointments for detailed discussions about your logistics requirements. Our team is always available for site visits and facility tours.',
    category: 'contact'
  },
  {
    id: 'contact-3',
    question: 'Do you participate in industry events and exhibitions?',
    answer: 'Yes, we regularly participate in logistics and transportation industry events including CTL Mumbai, various trade exhibitions, and industry conferences. These events provide opportunities to meet our team and learn about our latest services and capabilities.',
    category: 'contact'
  },
  {
    id: 'contact-4',
    question: 'How do I provide feedback or suggestions?',
    answer: 'We welcome feedback through our website contact form, email, phone, or direct communication with your account manager. Your suggestions help us improve our services and we value all client input for continuous improvement.',
    category: 'contact'
  }
];

const categories = [
  { id: 'company', name: 'About Nisha Roadways', icon: Building, color: 'blue' },
  { id: 'services', name: 'Our Service Offerings', icon: Truck, color: 'orange' },
  { id: 'pricing', name: 'Pricing Information', icon: DollarSign, color: 'green' },
  { id: 'safety', name: 'Safety Protocols & Security', icon: Shield, color: 'red' },
  { id: 'tracking', name: 'Shipment Tracking & Customer Support', icon: Headphones, color: 'purple' },
  { id: 'operations', name: 'Booking & Operations', icon: Users, color: 'indigo' },
  { id: 'geographic', name: 'Geographic Coverage', icon: MapPin, color: 'teal' },
  { id: 'technology', name: 'Technology & Innovation', icon: Zap, color: 'cyan' },
  { id: 'careers', name: 'Careers & Partnerships', icon: Users, color: 'pink' },
  { id: 'contact', name: 'Contact & Support', icon: Phone, color: 'gray' }
];

const quickAccessButtons = [
  { id: 'services', label: 'Service Information', icon: Truck },
  { id: 'pricing', label: 'Pricing & Quotes', icon: DollarSign },
  { id: 'safety', label: 'Safety & Security', icon: Shield },
  { id: 'tracking', label: 'Tracking & Support', icon: Headphones }
];

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const filteredFAQs = useMemo(() => {
    return faqData.filter(faq => {
      const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const toggleExpanded = (id: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  const handleQuickAccess = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setSearchTerm('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-16 sm:py-20 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-blue-200 max-w-4xl mx-auto mb-10">
              Get instant answers to your logistics questions. With 43 years of industry experience, 
              we've compiled comprehensive responses to help you make informed decisions about your cargo transportation needs.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-25">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for answers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 text-lg rounded-lg border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Quick Access Buttons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {quickAccessButtons.map((button) => {
                const Icon = button.icon;
                return (
                  <button
                    key={button.id}
                    onClick={() => handleQuickAccess(button.id)}
                    className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg p-4 transition-all duration-300 hover:scale-105"
                  >
                    <Icon className="h-8 w-8 mx-auto mb-2 text-yellow-400" />
                    <span className="text-sm font-medium">{button.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === 'all'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                All Categories
              </button>
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                      selectedCategory === category.id
                        ? `bg-${category.color}-600 text-white shadow-lg`
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{category.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* FAQ Items */}
          <div className="max-w-4xl mx-auto">
            {filteredFAQs.length === 0 ? (
              <div className="text-center py-12">
                <MessageCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
                <p className="text-gray-600">Try adjusting your search terms or browse different categories.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredFAQs.map((faq) => (
                  <div
                    key={faq.id}
                    className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleExpanded(faq.id)}
                      className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                      {expandedItems.has(faq.id) ? (
                        <ChevronUp className="h-6 w-6 text-gray-500 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-6 w-6 text-gray-500 flex-shrink-0" />
                      )}
                    </button>
                    {expandedItems.has(faq.id) && (
                      <div className="px-6 pb-4">
                        <div className="border-t border-gray-200 pt-4">
                          <p className="text-gray-700 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-blue-200 max-w-4xl mx-auto">
              Can't find the information you're looking for? Our customer service team is here to help 
              with personalized assistance for your specific logistics requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                <Phone className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Phone Support</h3>
                <p className="text-blue-200 mb-2">24/7 Operations Support</p>
                <p className="text-white font-medium">+91-22-41632222</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                <Mail className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Email Support</h3>
                <p className="text-blue-200 mb-2">Quick Response</p>
                <p className="text-white font-medium">info@nisharoadways.com</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                <MessageCircle className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
                <p className="text-blue-200 mb-2">Business Hours</p>
                <p className="text-white font-medium">Available on Website</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                <MapPin className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                <p className="text-blue-200 mb-2">Head Office</p>
                <p className="text-white font-medium">CBD Belapur, Navi Mumbai</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
              Contact Our Support Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}