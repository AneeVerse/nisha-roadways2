"use client"

import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { type LucideIcon, Truck, Container, Shield, Package, Warehouse, Zap, CheckCircle } from "lucide-react"
import Link from "next/link"

type ServiceKey =
  | "container-logistics"
  | "specialized-cargo"
  | "multimodal-transport"
  | "value-added-services"

type ServiceConfig = {
  key: ServiceKey
  label: string
  imageSrc: string
  imageAlt: string
  heading: string
  description: string
  benefits: string[]
  link: string
}

const SERVICES: ServiceConfig[] = [
  {
    key: "container-logistics",
    label: "Container Solutions",
    imageSrc: "/images/our-solution/road.avif",
    imageAlt: "Container solutions",
    heading: "Container Solutions",
    description:
      "Complete container logistics including Empty Container Transportation (ECT), Export Import Containers (ExIm Transport Service), and Domestic Cargo In Our Containers across all major ports and ICDs.",
    benefits: ["Empty Container Transportation (ECT)", "Export Import Containers", "Domestic Cargo In Our Containers"],
    link: "/services#container-logistics",
  },
  {
    key: "specialized-cargo",
    label: "Specialized Transport",
    imageSrc: "/images/our-solution/ship.avif",
    imageAlt: "Specialized transport",
    heading: "Specialized Transport",
    description:
      "Custom solutions for unique cargo requirements including Solar Panel & Parts Transportation (SolarTransport), Over Dimension Cargo (ODC), and Bulk Cargo Transportation with specialized handling.",
    benefits: ["Solar Panel & Parts Transportation", "Over Dimension Cargo (ODC)", "Bulk Cargo Transportation"],
    link: "/services#specialized-cargo",
  },
  {
    key: "multimodal-transport",
    label: "Alternative Logistics",
    imageSrc: "/images/our-solution/railway.avif",
    imageAlt: "Alternative logistics",
    heading: "Alternative Logistics",
    description:
      "Integrated transportation solutions including Rail Services, Coastal Services, and LCL Consolidation, providing seamless connectivity and cost-effective alternatives.",
    benefits: ["Rail Services", "Coastal Services", "LCL Consolidation"],
    link: "/services#multimodal-transport",
  },
  {
    key: "value-added-services",
    label: "Value-Added Services",
    imageSrc: "/images/our-solution/airway.avif",
    imageAlt: "Value-added services",
    heading: "Value-Added Services",
    description:
      "Enhanced services for optimal supply chain management including Transportation Of High Value Goods, Storage and Warehousing, and Chemical Transportation in Tank Containers.",
    benefits: ["Transportation Of High Value Goods", "Storage and Warehousing", "Chemical Transportation"],
    link: "/services#value-added-services",
  },
]

export default function OurSolution() {
  const sectionRef = useRef<HTMLElement>(null)
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([])

  const [activeServiceIndex, setActiveServiceIndex] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)

  // Preload all service images when component mounts
  useEffect(() => {
    const preloadImages = () => {
      SERVICES.forEach((service) => {
        if (typeof window !== 'undefined') {
          const img = new window.Image()
          img.src = service.imageSrc
        }
      })
    }

    preloadImages()
  }, [])

  // Intersection Observer to detect which service is in view
  useEffect(() => {
    const observers: IntersectionObserver[] = []

    serviceRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
              setActiveServiceIndex(index)
            }
          },
          {
            threshold: [0.5],
            rootMargin: "-20% 0px -20% 0px",
          },
        )

        observer.observe(ref)
        observers.push(observer)
      }
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  // Handle scroll events for smooth transitions and sticky behavior
  useEffect(() => {
    let timer: number | undefined

    const handleScroll = () => {
      setIsScrolling(true)
      if (timer) window.clearTimeout(timer)
      timer = window.setTimeout(() => setIsScrolling(false), 150)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (timer) window.clearTimeout(timer)
    }
  }, [])

  const activeService = SERVICES[activeServiceIndex]
  
  // Icon mappings for category and benefits (lucide-react)
  const categoryIcons: Record<ServiceKey, LucideIcon> = {
    "container-logistics": Container,
    "specialized-cargo": Zap,
    "multimodal-transport": Truck,
    "value-added-services": Shield,
  }

  const getBenefitIcon = (name: string): LucideIcon => {
    switch (name) {
      case "Empty Container Transportation (ECT)":
        return Container
      case "Export Import Containers":
        return Package
      case "Domestic Cargo In Our Containers":
        return Warehouse
      case "Solar Panel & Parts Transportation":
        return Zap
      case "Over Dimension Cargo (ODC)":
        return Package
      case "Bulk Cargo Transportation":
        return Truck
      case "Rail Services":
        return Truck
      case "Coastal Services":
        return Container
      case "LCL Consolidation":
        return Package
      case "Transportation Of High Value Goods":
        return Shield
      case "Storage and Warehousing":
        return Warehouse
      case "Chemical Transportation":
        return Container
      default:
        return CheckCircle
    }
  }

  return (
    <section
      id="our-solution"
      ref={sectionRef}
      className="relative min-h-screen bg-blue-50 pb-12 lg:pb-10"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-200/40 via-cyan-200/30 to-indigo-200/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-indigo-200/40 via-blue-200/30 to-cyan-200/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-100/20 via-cyan-100/20 to-indigo-100/20 rounded-full blur-3xl"></div>
      </div>
      
      {/* Extended blue background that goes further down */}
      <div className="absolute inset-x-0 top-0 bottom-0 -z-10 bg-blue-50"></div>

      {/* Header Section */}
      <div className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          {/* Badge */}

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold text-gray-900 tracking-tight mb-6">
            Integrated Intelligence. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">Seamless Connectivity.</span>

          </h2>
          
          {/* Gradient underline */}
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 mx-auto rounded-full mb-6"></div>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trade flows better when every connection works intelligently. We orchestrate comprehensive supply chain solutions that anticipate challenges, optimize resources, and change what's possible for businesses across India.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 lg:pb-40">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Fixed Left Image Card (sticky only on desktop) */}
          <div className="lg:w-1/2 order-2 lg:order-1 lg:self-start lg:sticky lg:top-28 lg:my-12">
            <div className="relative group">
              {/* Card Container */}
              <div className="relative rounded-3xl bg-white shadow-2xl shadow-black/50 border border-blue-100/50 backdrop-blur-sm">
                {/* Animated border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-indigo-500/20 p-[2px]">
                  <div className="w-full h-full rounded-3xl bg-white"></div>
                </div>

                {/* Image Container */}
                <div className="relative h-[320px] sm:h-[420px] lg:h-[480px] overflow-hidden rounded-3xl">
                  <Image
                    key={activeService.imageSrc}
                    src={activeService.imageSrc || "/placeholder.svg"}
                    alt={activeService.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className={`object-cover transition-all duration-700 ease-in-out ${
                      isScrolling ? "scale-105" : "scale-100"
                    } group-hover:scale-110`}
                    priority
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-800/20 to-transparent"></div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full blur-xl animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-indigo-400/30 to-blue-400/30 rounded-full blur-xl animate-pulse"></div>
            </div>
          </div>

          {/* Right Side - Scrollable Services */}
          <div className="order-1 lg:order-2 lg:w-1/2 lg:flex-shrink-0">
            {SERVICES.map((service, index) => (
              <div
                key={service.key}
                ref={(el) => {
                  serviceRefs.current[index] = el
                }}
                className="relative transition-all duration-500 mb-6 last:mb-0"
              >
                {/* Service Card */}
                <div className="relative group">
                  {/* Background card - simplified to match reference style */}
                  <div className="relative rounded-2xl p-6 sm:p-7 lg:p-8 bg-white shadow-sm border border-blue-100 hover:shadow-md transition-all duration-300 min-h-[220px]">
                    <div className="relative z-10">
                      {/* Icon + Category title */}
                      {(() => {
                        const Icon = categoryIcons[service.key]
                        return (
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-sm">
                              <Icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold leading-tight text-gray-900">
                              {service.heading}
                            </h3>
                          </div>
                        )
                      })()}

                      {/* Bullet list of services */}
                      <ul className="mt-2 space-y-2">
                        {service.benefits.map((benefit, benefitIndex) => {
                          const Icon = getBenefitIcon(benefit)
                          return (
                            <li key={benefitIndex} className="flex items-center gap-3">
                              <Icon className="w-4 h-4 text-blue-600 flex-shrink-0" />
                              <span className="text-sm sm:text-base leading-tight text-gray-700">
                                {benefit}
                              </span>
                            </li>
                          )
                        })}
                      </ul>

                      {/* CTA Button - untouched functionality */}
                      <div className="mt-6">
                        <Link 
                          href={service.link}
                          className="group relative inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
                          <span className="relative flex items-center gap-2">
                            EXPLORE ALL SERVICES
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform duration-300">
                              <path d="M5 12h14"/>
                              <path d="m12 5 7 7-7 7"/>
                            </svg>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


    </section>
  )
}
