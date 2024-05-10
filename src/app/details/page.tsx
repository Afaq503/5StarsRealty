"use client";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import TestimonialCards from "@/components/TestimonialCards";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faBed,
  faBath,
  faCar,
  faRuler,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import React, { useState } from "react";

const page = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };
  const property = {
    title: "Beautiful Villa with Ocean View",
    location: "Miami, Florida",
    price: "$1,200,000",
    description:
      "This stunning villa offers breathtaking ocean views and luxurious amenities. Featuring spacious rooms, modern kitchen, outdoor pool, and more.",
    imageUrl: "/no-wifi.png",
  };
  return (
    <div>
      <HeroSection
        title="Located In The Vibrant City Of Miami"
        description=""
      />
      <div>
        <BackgroundGradient className="flex flex-col  dark:bg-zinc-900  h-full ">
          <div className="font-sans  bg-white rounded-lg px-4 py-2">
            <div className="p-6 lg:max-w-7xl max-w-4xl mx-auto">
              <div className=" shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
                <div className="flex flex-row mt-10 justify-between">
                  <h2 className="text-2xl font-extrabold text-[#333]">
                    House For Sale in Langebaan Rural, Langebaan
                  </h2>
                  <div className="flex flex-wrap gap-4 mt-4">
                    <p className="text-[#333] text-3xl font-bold">$1200</p>
                    <p className="text-gray-400 text-lg">
                      <span>$1500</span>{" "}
                      <span className="text-sm ml-1">Tax included</span>
                    </p>
                  </div>
                </div>
                <div className="flex  flex-col space-x-2">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm self-start">
                    For Sale
                  </button>
                  <div className="flex items-center self-start">
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      className="text-gray-500 mr-1"
                    />
                    <p className="text-gray-700">
                      Langebaan, Western Cape, South Africa
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid items-start  gap-12 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
                <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
                  <div className="px-4 py-10 rounded-xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative">
                    <img
                      src={
                        selectedImage ||
                        "https://readymadeui.com/images/laptop5.webp"
                      }
                      alt="Product"
                      className="w-4/5 rounded object-cover"
                    />
                  </div>

                  <div className="mt-6 flex flex-wrap justify-center gap-6 mx-auto">
                    <div className="rounded-xl p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
                      <img
                        src="https://readymadeui.com/images/laptop2.webp"
                        alt="Product2"
                        className="w-24 cursor-pointer"
                        onClick={() =>
                          handleImageClick(
                            "https://readymadeui.com/images/laptop2.webp"
                          )
                        }
                      />
                    </div>
                    <div className="rounded-xl p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
                      <img
                        src="https://readymadeui.com/images/laptop3.webp"
                        alt="Product2"
                        className="w-24 cursor-pointer"
                        onClick={() =>
                          handleImageClick(
                            "https://readymadeui.com/images/laptop3.webp"
                          )
                        }
                      />
                    </div>
                    <div className="rounded-xl p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
                      <img
                        src="https://readymadeui.com/images/laptop4.webp"
                        alt="Product2"
                        className="w-24 cursor-pointer"
                        onClick={() =>
                          handleImageClick(
                            "https://readymadeui.com/images/laptop4.webp"
                          )
                        }
                      />
                    </div>
                    <div className="rounded-xl p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
                      <img
                        src="https://readymadeui.com/images/laptop5.webp"
                        alt="Product2"
                        className="w-24 cursor-pointer"
                        onClick={() =>
                          handleImageClick(
                            "https://readymadeui.com/images/laptop5.webp"
                          )
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
                <h3 className="text-lg font-bold text-[#333]">
                  Active Property
                </h3>
                <div className="flex flex-row justify-between items-center mt-4">
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faBed}
                      className="text-[#333] mr-2"
                    />
                    <span className="text-[#333]">4 Bedrooms</span>
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faBath}
                      className="text-[#333] mr-2"
                    />
                    <span className="text-[#333]">3 Bathrooms</span>
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faCar}
                      className="text-[#333] mr-2"
                    />
                    <span className="text-[#333]">0 Garage</span>
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faRuler}
                      className="text-[#333] mr-2"
                    />
                    <span className="text-[#333]">140 m2</span>
                  </div>
                </div>
              </div>

              <div className="mt-16 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
                <div className="flex flex-row justify-between">
                  <h3 className="text-lg font-bold text-[#333]">
                    Location Details
                  </h3>
                  <div className="mt-4">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center space-x-2">
                      <FontAwesomeIcon
                        icon={faMapMarkedAlt}
                        className="text-white"
                      />
                      <span>Open in Google Maps</span>
                    </button>
                  </div>
                </div>
                <div className="mt-6 text-[#333]">
                  <ul className="mt-6 space-y-6 text-[#333]">
                    <li className="text-lg font-semibold">
                      Address:{" "}
                      <span className="ml-4 float-right">
                        {" "}
                        Langebaan Rural, Langebaan, Western Cape
                      </span>
                    </li>
                    <li className="text-lg font-semibold">
                      City: <span className="ml-4 float-right">Cape Town</span>
                    </li>
                    <li className="text-lg font-semibold">
                      Country: <span className="ml-4 float-right">USA</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-16 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
                <h3 className="text-lg font-bold text-[#333]">
                  Property information
                </h3>
                <ul className="mt-6 space-y-6 text-[#333]">
                  <li className="text-sm">
                    TYPE <span className="ml-4 float-right">LAPTOP</span>
                  </li>
                  <li className="text-sm">
                    RAM <span className="ml-4 float-right">16 BG</span>
                  </li>
                  <li className="text-sm">
                    SSD <span className="ml-4 float-right">1000 BG</span>
                  </li>
                  <li className="text-sm">
                    PROCESSOR TYPE{" "}
                    <span className="ml-4 float-right">
                      INTEL CORE I7-12700H
                    </span>
                  </li>
                  <li className="text-sm">
                    PROCESSOR SPEED{" "}
                    <span className="ml-4 float-right">2.3 - 4.7 GHz</span>
                  </li>
                  <li className="text-sm">
                    DISPLAY SIZE INCH{" "}
                    <span className="ml-4 float-right">16.0</span>
                  </li>
                  <li className="text-sm">
                    DISPLAY SIZE SM{" "}
                    <span className="ml-4 float-right">40.64 cm</span>
                  </li>
                  <li className="text-sm">
                    DISPLAY TYPE{" "}
                    <span className="ml-4 float-right">
                      OLED, TOUCHSCREEN, 120 Hz
                    </span>
                  </li>
                  <li className="text-sm">
                    DISPLAY RESOLUTION{" "}
                    <span className="ml-4 float-right">2880x1620</span>
                  </li>
                </ul>
              </div>

              <div className="mt-16 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
                <h3 className="text-lg font-bold text-[#333] px-4 py-2">
                  Video
                </h3>
                <div className=" justify-center">
                  <video
                    className="w-full  h-auto lg:w-3/4 lg:h-auto"
                    controls
                    preload="none"
                  >
                    <source src="/path/to/video.mp4" type="video/mp4" />
                    <track
                      src="/path/to/captions.vtt"
                      kind="subtitles"
                      srcLang="en"
                      label="English"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </BackgroundGradient>
      </div>
      <TestimonialCards />
      <Footer />
    </div>
  );
};

export default page;
