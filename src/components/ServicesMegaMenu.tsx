"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import {
  FaShippingFast, FaIndustry, FaTrain, FaWarehouse,
  FaSolarPanel, FaTruck, FaShip, FaBoxes,
  FaFlask, FaShieldAlt, FaMapMarkedAlt, FaArrowRight
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

const ServicesMegaMenu: React.FC<ServicesMegaMenuProps> = ({
  color = { text: "#171717" },
  isOpen = false,
  onMouseEnter,
  onMouseLeave,
  onClose
}) => {
  // Hover delay management - same as Navbar
  const hoverTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const [pendingClose, setPendingClose] = React.useState(false);

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
    setPendingClose(false);
    if (onMouseEnter) {
      onMouseEnter();
    }
  };

  const handleMouseLeave = () => {
    setPendingClose(true);
    hoverTimeoutRef.current = setTimeout(() => {
      if (onMouseLeave) {
        onMouseLeave();
      }
      setPendingClose(false);
    }, 300); // 300ms delay before closing - same as Navbar
  };

  const handleMenuEnterArea = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setPendingClose(false);
  };

  const menuCategories = [
    {
      title: "Container Logistics Solutions",
      url: "/services#container-logistics",
      style: { background: 'linear-gradient(135deg, #1d4ed8, #1e40af)', color: '#ffffff' },
      hoverStyle: { background: 'linear-gradient(135deg, #1e40af, #1e3a8a)' },
      description: "Complete containerized cargo management",
      items: [
        {
          name: "Empty Container Transportation (ECT)",
          description: "Exim and domestic empty container services",
          icon: <FaBoxes className="text-[#317fb9]" />,
          slug: "empty-container-transportation"
        },
        {
          name: "Export Import Containers",
          description: "ExIm transport services for international trade",
          icon: <FaShippingFast className="text-[#317fb9]" />,
          slug: "export-import-containers"
        },
        {
          name: "Domestic Cargo In Our Containers",
          description: "Secured cargo in owned ISO containers",
          icon: <FaTruck className="text-[#317fb9]" />,
          slug: "domestic-cargo-containers"
        }
      ]
    },
    {
      title: "Specialized Cargo Solutions",
      url: "/services#specialized-cargo",
      style: { background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', color: '#ffffff' },
      hoverStyle: { background: 'linear-gradient(135deg, #2563eb, #7c3aed)' },
      description: "Custom solutions for unique cargo requirements",
      items: [
        {
          name: "Solar Panel & Parts Transportation",
          description: "Renewable energy components logistics",
          icon: <FaSolarPanel className="text-[#63579b]" />,
          slug: "solar-panel-transportation"
        },
        {
          name: "Over Dimension Cargo (ODC)",
          description: "Oversized machinery and project cargo",
          icon: <FaIndustry className="text-[#63579b]" />,
          slug: "over-dimension-cargo"
        },
        {
          name: "Bulk Cargo Transportation",
          description: "Steel coils, grains, construction materials",
          icon: <FaWarehouse className="text-[#63579b]" />,
          slug: "bulk-cargo-solutions"
        },
        {
          name: "Chemical Transportation",
          description: "Tank container logistics for chemicals",
          icon: <FaFlask className="text-[#63579b]" />,
          slug: "chemical-transportation"
        }
      ]
    },
    {
      title: "Multimodal Transport Solutions",
      url: "/services#multimodal-transport",
      style: { background: 'linear-gradient(135deg, #8b5cf6, #f43f5e)', color: '#ffffff' },
      hoverStyle: { background: 'linear-gradient(135deg, #7c3aed, #e11d48)' },
      description: "Integrated transportation across multiple modes",
      items: [
        {
          name: "Rail Services",
          description: "Container and bulk cargo by rail",
          icon: <FaTrain className="text-[#964f77]" />,
          slug: "rail-services"
        },
        {
          name: "Coastal Services",
          description: "Maritime shipping across major Indian ports",
          icon: <FaShip className="text-[#964f77]" />,
          slug: "coastal-services"
        }
      ]
    },
    {
      title: "Value-Added Logistics Services",
      url: "/services#value-added-services",
      style: { background: 'linear-gradient(135deg, #f43f5e, #9f1239)', color: '#ffffff' },
      hoverStyle: { background: 'linear-gradient(135deg, #e11d48, #881337)' },
      description: "Enhanced services for optimal supply chain management",
      items: [
        {
          name: "LCL Consolidation",
          description: "Less-than-Container-Load optimization",
          icon: <FaBoxes className="text-[#cd3f45]" />,
          slug: "lcl-consolidation"
        },
        {
          name: "High Value Goods Transportation",
          description: "GPS-tracked premium cargo with security",
          icon: <FaShieldAlt className="text-[#cd3f45]" />,
          slug: "high-value-goods"
        },
        {
          name: "Storage and Warehousing",
          description: "Comprehensive storage solutions",
          icon: <FaWarehouse className="text-[#cd3f45]" />,
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
      {/* Invisible bridge area */}
      <div className="absolute top-full left-0 right-0 h-2 bg-transparent pointer-events-auto" onMouseEnter={handleMenuEnterArea}></div>
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
            <div className="bg-white shadow-2xl border border-gray-100 w-full">
              <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16 py-8 sm:py-10 lg:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
                  {menuCategories.map((category, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="space-y-3 sm:space-y-4"
                    >
                      <Link
                        onClick={() => onClose && onClose()}
                        href={category.url}
                        className={`text-base sm:text-lg font-bold group py-2 sm:py-3 px-3 sm:px-4 rounded-lg inline-flex items-center gap-2 sm:gap-3 transition-all duration-300 w-full hover:shadow-md`}
                        style={category.style as any}
                        onMouseEnter={(e) => {
                          const target = e.currentTarget;
                          const hoverStyle = (category as any).hoverStyle;
                          if (hoverStyle) {
                            target.style.background = hoverStyle.background;
                          }
                        }}
                        onMouseLeave={(e) => {
                          const target = e.currentTarget;
                          target.style.background = (category.style as any).background;
                        }}
                      >
                        <span className="truncate">{category.title}</span>
                        <FaArrowRight className="text-xs sm:text-sm group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
                      </Link>
                      <p className="text-xs sm:text-sm text-gray-600 px-3 sm:px-4 line-clamp-2">{category.description}</p>
                      <div className="space-y-1 sm:space-y-2">
                        {category.items.map((item, idx) => (
                          <Link
                            onClick={() => onClose && onClose()}
                            href={`/services/${item.slug}`}
                            key={idx}
                            className="flex group px-3 sm:px-4 py-2 sm:py-3 rounded-lg hover:bg-gray-50 items-center gap-3 sm:gap-4 transition-all duration-300"
                          >
                            <div className="flex-shrink-0 text-lg sm:text-xl">
                              {item.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm sm:text-sm -ml-1 font-semibold text-[#374151] group-hover:text-blue-600 transition-colors duration-300 flex items-center truncate">
                                <span className="h-[4px] w-[4px] bg-blue-600 inline-block transition-all duration-300 scale-0 group-hover:scale-100 rounded-full mr-0 group-hover:mr-2 flex-shrink-0" />
                                <span className="truncate">{item.name}</span>
                              </h4>
                              <p className="text-xs text-[#374151] mt-1 line-clamp-1 sm:line-clamp-2">{item.description}</p>
                            </div>
                            <FaArrowRight className="text-[#374151] text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
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