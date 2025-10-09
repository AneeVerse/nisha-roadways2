import { getServiceBySlug } from "@/data/services";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";

export default function ProjectCargoManagementPage() {
  const service = getServiceBySlug("project-cargo-management");
  
  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2 space-y-8 max-w-4xl">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                  Premium Service
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                  {service.title}
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl">
                  {service.subtitle}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105">
                  Get Quote Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-xl font-semibold transition-all duration-300">
                  <Phone className="mr-2 w-5 h-5" />
                  Call Expert
                </Button>
              </div>
            </div>
            
            <div className="relative lg:col-span-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={service.heroImage}
                  alt={service.title}
                  width={500}
                  height={400}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full opacity-30"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-40"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6">
              About This Service
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              Professional Transportation Solutions
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {service.about}
            </p>
          </div>
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </div>
  );
}

export async function generateMetadata() {
  const service = getServiceBySlug("project-cargo-management");
  
  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | Nisha Roadways`,
    description: service.subtitle,
  };
}