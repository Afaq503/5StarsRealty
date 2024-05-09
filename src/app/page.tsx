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
      <HeroSection
        title="Located In The Vibrant City Of Miami"
        description="5 Stars Realty stands as a beacon of excellence in the realm of real estate, spearheaded by the visionary leadership of Gretel Costa. Our firm specializes in empowering families to build wealth through strategic investments in real estate, leveraging our unparalleled expertise in both residential and commercial properties. At 5 Stars Realty, we understand that each client is unique, which is why we offer personalized service tailored to individual needs and goals."
        buttonText="Explore Properties"
        buttonLink="/property"
      />
      <FeaturedSection/>
      {/* <WhyChooseUs/> */}
      <TestimonialCards/>
      <UpComingWebnar/>
      {/* <Instracter/> */}
      <Footer/>
    </main>
  );
}
