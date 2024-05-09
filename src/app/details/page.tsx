import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import TestimonialCards from "@/components/TestimonialCards";
import React from "react";

const page = () => {
  return (
    <div>
      <HeroSection
        title="Located In The Vibrant City Of Miami"
        description=""
      
      />
      <TestimonialCards />
      <Footer />
    </div>
  );
};

export default page;
