import FeaturedSection from "@/components/FeaturedSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instracter from "@/components/Instracter";
import TestimonialCards from "@/components/TestimonialCards";
import UpComingWebnar from "@/components/UpComingWebnar";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <FeaturedSection/>
      <WhyChooseUs/>
      <TestimonialCards/>
      <UpComingWebnar/>
      <Instracter/>
      <Footer/>
    </main>
  );
}
