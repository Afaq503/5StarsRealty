"use client";
import React, { useEffect, useState } from "react";
import ApiData from "../data/muisc_coures.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";

interface Course {
  id: number;
  title: string;
  slug: string;
  descripation: string;
  price: number;
  agent: string;
  isFeatured: boolean;
  image: string;
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
  //  const listingsData = listings.map((course:Listings) => course.isFeatured);
  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-smeibold tracking-wide uppercase">
            FEARTURED PROPERTIES
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Check with the Best
          </p>
        </div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {listings.map((item: Listings) => (
            <div key={item.ListingId} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  {/* <Image 
                src={''}
                // src={item.image}
                alt="image"
                height={300}
                width={200}
                className="object-contain justify-center" 
                /> */}

                  {/* {listings.map((listing: Listings) => (
                    <img
                      key={listing.Media[0].Order}
                      src={listing.Media[0].MediaURL}
                      alt="this is image"
                    />
                  ))} */}

                  {listings.map((listing: Listings) => (
                    <div key={listing.Media[0].Order}>
                      {listing.Media && listing.Media.length > 0 && (
                        <img
                          src={listing.Media[1].MediaURL}
                          alt="this is image"
                          height={300}
                          width={200}
                          className="object-contain justify-center"
                        />
                      )}
                    </div>
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
        </div>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredPropertes.map((item:Course)=> (
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
                  <p className="text-lg sm:text-xl text-neutral-100 mt-4 mb-2 dark:text-netural-200">{item.title}</p>
                  <p className="text-sm  text-neutral-600 dark:text-netural-400 flex-grow">{item.descripation}</p>
                  <Link href={`/courese/${item.slug}`}>
                    Learn More
                  </Link>
                </div>
                
              </BackgroundGradient>
            </div>
          ))}
        </div> */}
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
