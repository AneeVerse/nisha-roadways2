import Hero from "@/components/Hero";
import CompanyLogos from "@/components/CompanyLogos";
import Feature from "@/components/FeaturesSection";
import Solutions from "@/components/OurSolution";
import TrustedByBusiness from "@/components/TrustedByBusiness";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <CompanyLogos />
      <Feature />
      <Solutions />
      <TrustedByBusiness />
      <Testimonials />
    </main>
  );
}
