"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}
function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

// Simple chevron icon
function ChevronDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [openMenu, setOpenMenu] = React.useState<null | "services" | "whyus" | "resources">(null);

  // Close on escape
  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenMenu(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const services = [
    { title: "Fleet Ownership & Contracting", desc: "Leverage our modern, well‑maintained fleet", href: "#fleet-ownership" },
    { title: "Vendor Network Access", desc: "Nationwide partner network for reliable ops", href: "#vendor-network" },
    { title: "Customized Logistics", desc: "Tailored solutions for your cargo needs", href: "#customized-logistics" },
    { title: "Pan-India Operations", desc: "Coverage across major ports and routes", href: "#pan-india" },
  ];

  const whyUs = [
    { title: "About", desc: "Who we are and our mission", href: "#about" },
    { title: "Our team", desc: "Meet the folks behind Nisha", href: "#team" },
    { title: "Collaborated with", desc: "Brands that trust us", href: "#collab" },
    { title: "Testimonials", desc: "What customers say", href: "#testimonials" },
  ];

  const resources = [
    { title: "Blogs", desc: "Insights and updates", href: "#blogs" },
    { title: "Nisha Academy", desc: "Guides, playbooks, videos", href: "#academy" },
    { title: "FAQ", desc: "Answers to common questions", href: "#faq" },
  ];

  function MegaPanel({ section }: { section: "services" | "whyus" | "resources" }) {
    const isOpen = openMenu === section;
    const baseCls = "absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[min(96vw,900px)]";
    const items = section === "services" ? services : section === "whyus" ? whyUs : resources;

    const panel = (
      <div className="rounded-2xl border border-black/10 bg-white shadow-xl ring-1 ring-black/5 overflow-hidden">
        <div className="p-5 md:p-6">
          {/* Section header pill, no image (Superside-style) */}
          <div className="mb-4">
            <Link href="#" className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium bg-gray-100 text-gray-800 hover:bg-gray-200">
              {section === "services" && "Our services"}
              {section === "whyus" && "Why us"}
              {section === "resources" && "Resources"}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
            </Link>
          </div>

          {/* Links list grid, no image column */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
            {items.map((item) => (
              <Link key={item.title} href={item.href} className="group rounded-lg px-2 py-2 hover:bg-gray-50">
                <div className="font-semibold text-gray-900 group-hover:text-black">{item.title}</div>
                <div className="text-sm text-gray-500">{item.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );

    return (
      <div className={`${baseCls} ${isOpen ? "block" : "hidden"}`} onMouseLeave={() => setOpenMenu(null)}>
        {panel}
      </div>
    );
  }

  return (
    <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 ">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image src="/images/nav-logo.png" alt="Nisha" width={120} height={36} className="h-10 sm:h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {/* Mega menu triggers as plain text only */}
            <div className="relative" onMouseEnter={() => setOpenMenu("services")}>
              <button className="inline-flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-black">
                Services <ChevronDown className={`transition ${openMenu === "services" ? "rotate-180" : ""}`} />
              </button>
              <MegaPanel section="services" />
            </div>
            <div className="relative" onMouseEnter={() => setOpenMenu("whyus")}>
              <button className="inline-flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-black">
                Why us <ChevronDown className={`transition ${openMenu === "whyus" ? "rotate-180" : ""}`} />
              </button>
              <MegaPanel section="whyus" />
            </div>
            <div className="relative" onMouseEnter={() => setOpenMenu("resources")}>
              <button className="inline-flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-black">
                Resources <ChevronDown className={`transition ${openMenu === "resources" ? "rotate-180" : ""}`} />
              </button>
              <MegaPanel section="resources" />
            </div>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <Button className="px-6 py-2.5">Launch App</Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen((s) => !s)}
              className="text-gray-700"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4">
            <div className="divide-y divide-gray-100">
              {/* Services */}
              <details open className="group">
                <summary className="list-none flex items-center justify-between px-1 py-3 cursor-pointer text-base font-medium">Services <ChevronDown className="group-open:rotate-180 transition" /></summary>
                <div className="grid grid-cols-1 gap-2 px-1 pb-4">
                  {services.map((i) => (
                    <Link key={i.title} href={i.href} className="rounded-lg px-3 py-2 hover:bg-gray-50">
                      <div className="font-medium">{i.title}</div>
                      <div className="text-sm text-gray-500">{i.desc}</div>
                    </Link>
                  ))}
                </div>
              </details>

              {/* Why us */}
              <details className="group">
                <summary className="list-none flex items-center justify-between px-1 py-3 cursor-pointer text-base font-medium">Why us <ChevronDown className="group-open:rotate-180 transition" /></summary>
                <div className="grid grid-cols-1 gap-2 px-1 pb-4">
                  {whyUs.map((i) => (
                    <Link key={i.title} href={i.href} className="rounded-lg px-3 py-2 hover:bg-gray-50">
                      <div className="font-medium">{i.title}</div>
                      <div className="text-sm text-gray-500">{i.desc}</div>
                    </Link>
                  ))}
                </div>
              </details>

              {/* Resources */}
              <details className="group">
                <summary className="list-none flex items-center justify-between px-1 py-3 cursor-pointer text-base font-medium">Resources <ChevronDown className="group-open:rotate-180 transition" /></summary>
                <div className="grid grid-cols-1 gap-2 px-1 pb-4">
                  {resources.map((i) => (
                    <Link key={i.title} href={i.href} className="rounded-lg px-3 py-2 hover:bg-gray-50">
                      <div className="font-medium">{i.title}</div>
                      <div className="text-sm text-gray-500">{i.desc}</div>
                    </Link>
                  ))}
                </div>
              </details>

              <div className="pt-4">
                <Button className="w-full py-2.5 sm:py-3 text-sm sm:text-base">Launch App</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
