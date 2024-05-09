"use client";
import React, { useEffect, useState } from "react";
import ApiData from "../data/muisc_coures.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBath,
  faMountain,
  faMoneyBill,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

interface Course {
  id: number;
  title: string;
  slug: string;
  descripation: string;
  price: number;
  agent: string;
  isFeatured: boolean;
  image: string;
  Beds: number;
  Baths: number;
  Balcony: number;
  type: string;
}
interface Listings {
  ListingId: string;
  BuilderModel: string;
  YearBuiltDetails: string;
  HighSchool: string;
  Media: Media[];
}
interface Media {
  Order: number;
  MediaURL: string;
  ResourceRecordKey: string;
  ResourceName: string;
  ClassName: string;
  MediaCategory: string;
  MimeType: string;
  MediaObjectID: string;
  ShortDescription: string;
}

const FeaturedSection = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await fetch(
          "https://api.bridgedataoutput.com/api/v2/test/listings?access_token=5b10bb2de02292b88de3bdb70a249701"
        );

        if (response.ok) {
          const data = await response.json();
          console.log("data is here", data);

          setListings(data.bundle);
        } else {
          console.error("Failed to fetch listings");
        }
      } catch (error) {
        console.error("Error fetching listings:", error);
      }
    };

    fetchListings();
  }, []);

  const featuredPropertes = ApiData.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <div className="py-12 bg-white">
    {/* <div className="py-12 bg-gray-900"> */}
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-smeibold tracking-wide uppercase">
            FEARTURED PROPERTIES
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-black sm:text-4xl">
            Check with the Best
          </p>
        </div>
      </div>
      <div className="mt-10">
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {listings.map((item: Listings) => (
            <div key={item.ListingId} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                 

                  {listings.map((listing: Listings) => (
                    <Image
                      key={listing.Media[0].Order}
                      src={listing.Media[0].MediaURL}
                      alt="this is image"
                      width={200}
                      height={200}
                      className="object-contain justify-center"
                    />
                  ))}

             

                  <p className="text-lg sm:text-xl text-neutral-100 mt-4 mb-2 dark:text-netural-200">
                    {item.BuilderModel}
                  </p>
                  <p className="text-sm  text-neutral-600 dark:text-netural-400 flex-grow">
                    {item.YearBuiltDetails}
                  </p>
                  <Link href={`/courese/${item.HighSchool}`}>Learn More</Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredPropertes.map((item: Course) => (
            <div key={item.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <Image
                    // src={''}
                    src={item.image}
                    alt="image"
                    height={300}
                    width={200}
                    className="object-contain justify-center"
                  />
                  <p className="text-lg sm:text-xl text-neutral-100 mt-4 mb-2 dark:text-netural-200">
                    {item.title}
                  </p>
                  {/* <p className="text-sm  text-neutral-600 dark:text-netural-400 flex-grow">{item.descripation}</p> */}
                  <div className=" flex-row flex justify-evenly gap-10">
                    <div className="flex items-center text-neutral-100">
                      <FontAwesomeIcon icon={faBed} className="mr-2" />
                      <div className="flex flex-row gap-3">
                        <p>{item.Beds}</p>
                        <p>Beds</p>
                      </div>
                    </div>
                    {/* <p className="text-lg sm:text-xl text-neutral-100 mt-4 mb-2 dark:text-netural-200">
                      Beds:{item.Beds}
                    </p> */}
                    <div className="flex items-center text-neutral-100">
                      <FontAwesomeIcon icon={faBath} className="mr-2" />
                      <div className="flex flex-row gap-3">
                        <p>{item.Baths}</p>
                        <p>Baths</p>
                      </div>
                    </div>
                    {/* <p className="text-lg sm:text-xl text-neutral-100 mt-4 mb-2 dark:text-netural-200">
                      Baths:{item.Baths}
                    </p> */}
                    <div className="flex items-center text-neutral-100">
                      <FontAwesomeIcon icon={faMountain} className="mr-2" />
                      <div className="flex flex-row gap-3">
                        <p>{item.Balcony}</p>
                        <p>Balcony</p>
                      </div>
                    </div>
                    {/* <p className="text-lg sm:text-xl text-neutral-100 mt-4 mb-2 dark:text-netural-200">
                      Balcony:{item.Balcony}
                    </p> */}
                  </div>
                  <div className="mt-10 flex flex-row justify-betweeen gap-20">
                    <div className="flex items-center text-neutral-100">
                      <FontAwesomeIcon icon={faMoneyBill} className="mr-2" />
                      
                      <p>Price: ${item.price}</p>
                    </div>
                    <div className="flex items-center text-neutral-100">
                      <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
                      <p>Type: {item.type}</p>
                    </div>
                    {/* <p className="text-lg sm:text-xl text-neutral-100 mt-4 mb-2 dark:text-netural-200">
                      Price:{item.price}
                    </p>
                  <p className="text-lg sm:text-xl text-neutral-100 mt-4 mb-2 dark:text-netural-200">
                      Type:{item.type}
                    </p> */}
                  </div>
                  <div className="mt-5 border p-2 rounded-lg">
                    <Link href={`/courese/${item.slug}`}>Learn More</Link>
                  </div>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link
          href={"/"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
        >
          View All properties
        </Link>
      </div>
    </div>
  );
};

export default FeaturedSection;
