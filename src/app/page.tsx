import Hero from "@/components/Hero";
import CompanyLogos from "@/components/CompanyLogos";
import Feature from "@/components/FeaturesSection";
import Solutions from "@/components/OurSolution";
import TrustedByBusiness from "@/components/TrustedByBusiness";
import Testimonials from "@/components/Testimonials";
import ReviewVideo from "@/components/ReviewVideo";
import CtaBanner from "@/components/CtaBanner";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import SocialMosaic from "@/components/SocialMosaic";

export default function Home() {
  return (
    <main className="pt-20 ">
      <Hero />
      <CompanyLogos />
      <Feature />
      <Solutions />
      {/* <TrustedByBusiness /> */}
      <SocialMosaic />
      <ReviewVideo />
          <Testimonials />
      <BlogSection />
      <CtaBanner />
      <Footer />
    </main>
  );
}
