import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import Link from "next/link";

interface HeroSectionProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-2 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          {title}
        </h1>
        <p className="mt-4   font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto w-full">
          {description}
        </p>
        {buttonText && buttonLink && (
        <div className="mt-4">
          <Link href={buttonLink}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              {buttonText}
            </Button>
          </Link>
        </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
