"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import {
  FaShippingFast, FaIndustry, FaTrain, FaWarehouse,
  FaSolarPanel, FaTruck, FaShip, FaBoxes,
  FaFlask, FaShieldAlt, FaArrowRight
} from "react-icons/fa";

interface ServicesMegaMenuProps {
  color?: {
    text: string;
    background?: string;
  };
  isOpen?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClose?: () => void;
}

interface MenuItem {
  name: string;
  description: string;
  icon: React.ReactNode;
  slug: string;
}

interface MenuCategory {
  title: string;
  url: string;
  baseColor: string;
  style: React.CSSProperties;
  hoverStyle: React.CSSProperties;
  description: string;
  items: MenuItem[];
}

const ServicesMegaMenu: React.FC<ServicesMegaMenuProps> = ({
  color = { text: "#171717" },
  isOpen = false,
  onMouseEnter,
  onMouseLeave,
  onClose
}) => {
  // Hover delay management - same as Navbar
  const hoverTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  // Cleanup timeout on unmount
  React.useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    if (onMouseEnter) {
      onMouseEnter();
    }
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      if (onMouseLeave) {
        onMouseLeave();
      }
    }, 300); // 300ms delay before closing - same as Navbar
  };

  const handleMenuEnterArea = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    if (onMouseEnter) {
      onMouseEnter();
    }
  };

  const menuCategories: MenuCategory[] = [
    {
      title: "Container Logistics Solutions",
      url: "/services#container-logistics",
      baseColor: "#1d4ed8",
      style: { background: 'linear-gradient(135deg, #1d4ed8, #1e40af)', color: '#ffffff' },
      hoverStyle: { background: 'linear-gradient(135deg, #1e40af, #1e3a8a)' },
      description: "Complete containerized cargo management",
      items: [
        {
          name: "Empty Container Transportation (ECT)",
          description: "Exim and domestic empty container services",
          icon: <FaBoxes />,
          slug: "empty-container-transportation"
        },
        {
          name: "Export Import Containers",
          description: "ExIm transport services for international trade",
          icon: <FaShippingFast />,
          slug: "export-import-containers"
        },
        {
          name: "Domestic Cargo In Our Containers",
          description: "Secured cargo in owned ISO containers",
          icon: <FaTruck />,
          slug: "domestic-cargo-containers"
        }
      ]
    },
    {
      title: "Specialized Cargo Solutions",
      url: "/services#specialized-cargo",
      baseColor: "#63579b",
      style: { background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', color: '#ffffff' },
      hoverStyle: { background: 'linear-gradient(135deg, #2563eb, #7c3aed)' },
      description: "Custom solutions for unique cargo requirements",
      items: [
        {
          name: "Solar Panel & Parts Transportation",
          description: "Renewable energy components logistics",
          icon: <FaSolarPanel />,
          slug: "solar-panel-transportation"
        },
        {
          name: "Over Dimension Cargo (ODC)",
          description: "Oversized machinery and project cargo",
          icon: <FaIndustry />,
          slug: "over-dimension-cargo"
        },
        {
          name: "Bulk Cargo Transportation",
          description: "Steel coils, grains, construction materials",
          icon: <FaWarehouse />,
          slug: "bulk-cargo-solutions"
        },
        {
          name: "Chemical Transportation",
          description: "Tank container logistics for chemicals",
          icon: <FaFlask />,
          slug: "chemical-transportation"
        }
      ]
    },
    {
      title: "Multimodal Transport Solutions",
      url: "/services#multimodal-transport",
      baseColor: "#964f77",
      style: { background: 'linear-gradient(135deg, #8b5cf6, #f43f5e)', color: '#ffffff' },
      hoverStyle: { background: 'linear-gradient(135deg, #7c3aed, #e11d48)' },
      description: "Integrated transportation across multiple modes",
      items: [
        {
          name: "Rail Services",
          description: "Container and bulk cargo by rail",
          icon: <FaTrain />,
          slug: "rail-services"
        },
        {
          name: "Coastal Services",
          description: "Maritime shipping across major Indian ports",
          icon: <FaShip />,
          slug: "coastal-services"
        }
      ]
    },
    {
      title: "Value-Added Logistics Services",
      url: "/services#value-added-services",
      baseColor: "#cd3f45",
      style: { background: 'linear-gradient(135deg, #f43f5e, #9f1239)', color: '#ffffff' },
      hoverStyle: { background: 'linear-gradient(135deg, #e11d48, #881337)' },
      description: "Enhanced services for optimal supply chain management",
      items: [
        {
          name: "LCL Consolidation",
          description: "Less-than-Container-Load optimization",
          icon: <FaBoxes />,
          slug: "lcl-consolidation"
        },
        {
          name: "High Value Goods Transportation",
          description: "GPS-tracked premium cargo with security",
          icon: <FaShieldAlt />,
          slug: "high-value-goods"
        },
        {
          name: "Storage and Warehousing",
          description: "Comprehensive storage solutions",
          icon: <FaWarehouse />,
          slug: "storage-warehousing"
        }
      ]
    }
  ];

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Invisible bridge area - larger for smoother transition */}
      <div className="absolute top-full left-0 right-0 h-10 bg-transparent pointer-events-auto z-[-1]" onMouseEnter={handleMenuEnterArea}></div>
      <Link
        href="/services"
        className={`group inline-flex items-center gap-2 text-base font-medium transition-all duration-300 py-3 px-3 relative hover:text-blue-600`}
        style={{ color: color.text }}
      >
        <span className="relative">
          Services
          {/* Animated underline - same as Navbar */}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300 ease-out"></span>
        </span>
        <ChevronDown className={`w-4 h-4 transition-all duration-300 ${isOpen
          ? "rotate-180 text-blue-400"
          : "group-hover:text-blue-400"
          }`} />
      </Link>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed left-0 right-0 top-full w-screen z-[110]"
            style={{
              marginLeft: "calc(-50vw + 50%)",
              width: "100vw"
            }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onMouseEnter={handleMenuEnterArea}
            onMouseLeave={handleMouseLeave}
          >
            <div className="bg-white shadow-2xl border border-gray-100 w-full overflow-hidden">
              <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 py-12 sm:py-16 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-10 sm:gap-12 lg:gap-14">
                  {menuCategories.map((category, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="space-y-8 sm:space-y-10"
                    >
                      <div className="space-y-5">
                        <Link
                          onClick={() => onClose && onClose()}
                          href={category.url}
                          className={`text-base sm:text-lg font-extrabold group py-4 sm:py-5 px-5 sm:px-6 rounded-xl inline-flex items-center gap-4 sm:gap-5 transition-all duration-300 w-full hover:shadow-lg hover:-translate-y-0.5`}
                          style={category.style}
                          onMouseEnter={(e) => {
                            const target = e.currentTarget;
                            const hoverStyle = category.hoverStyle;
                            if (hoverStyle) {
                              target.style.background = hoverStyle.background as string;
                            }
                          }}
                          onMouseLeave={(e) => {
                            const target = e.currentTarget;
                            target.style.background = category.style.background as string;
                          }}
                        >
                          <span className="whitespace-normal leading-tight uppercase tracking-wide">{category.title}</span>
                          <FaArrowRight className="text-xs group-hover:translate-x-1.5 transition-transform duration-300 flex-shrink-0" />
                        </Link>
                        <p className="text-xs sm:text-sm text-gray-500 px-5 sm:px-6 font-medium leading-relaxed border-l-2 border-gray-100 ml-2">{category.description}</p>
                      </div>
                      <div className="space-y-4 sm:space-y-6">
                        {category.items.map((item, idx) => (
                          <Link
                            onClick={() => onClose && onClose()}
                            href={`/services/${item.slug}`}
                            key={idx}
                            className="flex group px-5 sm:px-6 py-4 sm:py-5 rounded-xl hover:bg-gray-50/80 items-center gap-5 sm:gap-6 transition-all duration-300 border border-transparent hover:border-gray-100"
                            style={{ '--hover-color': category.baseColor } as React.CSSProperties}
                          >
                            <div
                              className="flex-shrink-0 text-xl sm:text-2xl text-gray-400 group-hover:text-[var(--hover-color)] transition-all duration-300 transform group-hover:translate-x-1"
                            >
                              {item.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm sm:text-sm font-bold text-[#111827] group-hover:text-[var(--hover-color)] transition-colors duration-300 flex items-center">
                                <span
                                  className="h-[6px] w-[6px] inline-block transition-all duration-300 scale-0 group-hover:scale-100 rounded-full mr-0 group-hover:mr-3 flex-shrink-0"
                                  style={{ backgroundColor: category.baseColor }}
                                />
                                <span className="whitespace-normal leading-tight tracking-tight">{item.name}</span>
                              </h4>
                              <p className="text-[11px] sm:text-[12px] text-gray-500 mt-1 line-clamp-2 leading-relaxed font-medium">{item.description}</p>
                            </div>
                            <FaArrowRight
                              className="text-white group-hover:text-[var(--hover-color)] text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0"
                              style={{ color: category.baseColor }}
                            />
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServicesMegaMenu;