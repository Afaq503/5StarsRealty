"use client";
import Image from "next/image";
import React from "react";
import ApiData from "@/data/muisc_coures.json";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import FeaturedSection from "@/components/FeaturedSection";

const page = () => {
  return (
    <div>
      <HeroSection
        title="Located In The Vibrant City Of Miami"
        description=""
       
      />

      <div className="min-h-screen bg-white py-12 pt-36">
        <h1 className="text-lg md:text-7xl text-center text-black font-sans font-bold mb-8">
          All Properties ({ApiData.courses.length})
        </h1>
        <div className="flex flex-wrap justify-center">
          <FeaturedSection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
