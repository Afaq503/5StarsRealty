import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

const HeroSection = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-2 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Located In The Vibrant City Of Miami
        </h1>
        <p className="mt-4   font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto w-full">
          5 Stars Realty stands as a beacon of excellence in the realm of real
          estate, spearheaded by the visionary leadership of Gretel Costa. Our
          firm specializes in empowering families to build wealth through
          strategic investments in real estate, leveraging our unparalleled
          expertise in both residential and commercial properties. At 5 Stars
          Realty, we understand that each client is unique, which is why we
          offer personalized service tailored to individual needs and goals.
        </p>
        <div className="mt-4">
          <Link href={"/"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Explore Properties
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
