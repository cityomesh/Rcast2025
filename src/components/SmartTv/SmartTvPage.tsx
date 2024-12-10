"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const SmartTvPage: React.FC = () => {
  const [highlightedCards, setHighlightedCards] = useState<boolean[]>([false, false, false]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleSlideChange = (index: any) => setCurrentSlide(index);
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState("/ulka.png");

  const contentSections = [
    {
      src: "/etv.png",
      alt: "CRT Tube TV",
      label: "CRT Tube TV",
    },
    {
      src: "/lcd.png",
      alt: "LCD / LED TV",
      label: "LCD / LED TV",
    },
    {
      src: "/smarttv.png",
      alt: "Smart TV",
      label: "SMART TV",
    },
  ];

  const images = [
    { src: "/yte.png", alt: "Smart TV" },
    { src: "/ksdjfh.jpg", alt: "Smart TV" },
    { src: "/smartone.webp", alt: "Smart TV" },  
    { src: "/yte.png", alt: "Smart TV" },
    { src: "/sddefault.jpg", alt: "Smart TV" },
  ];
 
  const texts = [
    {
      title: "Rcast Smart TV App for connected Smart Televisions , ULKA Lite App is available in Android TV, Google TV, Fire TV, Fire Stick, Samsung TV App Stores and LG TV is under Process",
      description:
        "Rcast Mini Mobile App is available in Android Smart Phones and I-Phone is under Process.",
      mobileAppText:
        "My Rcast App for Subscription Management and on the fly online subscription of addon packs or channels on demand.",
      moreInfo:
        "Available in Android and I-Phone Mobile App Stores.",
      footerText:
        "Rcast STBs and Sticks supporting popular OTT Apps available for upgrading Older TVs to Smart TVs",
    },
    {
      title: "Rcast Smart TV App for connected Smart Televisions , ULKA Lite App is available in Android TV, Google TV, Fire TV, Fire Stick, Samsung TV App Stores and LG TV is under Process",
      description:
        "Rcast Mini Mobile App is available in Android Smart Phones and I-Phone is under Process.",
      mobileAppText:
        "My Rcast App for Subscription Management and on the fly online subscription of addon packs or channels on demand.",
      moreInfo:
        "Available in Android and I-Phone Mobile App Stores.",
      footerText:
        "Rcast STBs and Sticks supporting popular OTT Apps available for upgrading Older TVs to Smart TVs",
    },
    {
      title: "Rcast Smart TV App for connected Smart Televisions , ULKA Lite App is available in Android TV, Google TV, Fire TV, Fire Stick, Samsung TV App Stores and LG TV is under Process",
      description:
        "Rcast Mini Mobile App is available in Android Smart Phones and I-Phone is under Process.",
      mobileAppText:
        "My Rcast App for Subscription Management and on the fly online subscription of addon packs or channels on demand.",
      moreInfo:
        "Available in Android and I-Phone Mobile App Stores.",
      footerText:
        "Rcast STBs and Sticks supporting popular OTT Apps available for upgrading Older TVs to Smart TVs",
    },
    {
      title: "Rcast Smart TV App for connected Smart Televisions , ULKA Lite App is available in Android TV, Google TV, Fire TV, Fire Stick, Samsung TV App Stores and LG TV is under Process",
      description:
        "Rcast Mini Mobile App is available in Android Smart Phones and I-Phone is under Process.",
      mobileAppText:
        "My Rcast App for Subscription Management and on the fly online subscription of addon packs or channels on demand.",
      moreInfo:
        "Available in Android and I-Phone Mobile App Stores.",
      footerText:
        "Rcast STBs and Sticks supporting popular OTT Apps available for upgrading Older TVs to Smart TVs",
    },
    {
      title: "Rcast Smart TV App for connected Smart Televisions , ULKA Lite App is available in Android TV, Google TV, Fire TV, Fire Stick, Samsung TV App Stores and LG TV is under Process",
      description:
        "Rcast Mini Mobile App is available in Android Smart Phones and I-Phone is under Process.",
      mobileAppText:
        "My Rcast App for Subscription Management and on the fly online subscription of addon packs or channels on demand.",
      moreInfo:
        "Available in Android and I-Phone Mobile App Stores.",
      footerText:
        "Rcast STBs and Sticks supporting popular OTT Apps available for upgrading Older TVs to Smart TVs",
    },
  ];

  const platforms = [
    { name: 'Android TV', src: "/smarttv.png", }, // Replace with actual image paths
    { name: 'Google TV', src: "/googletv.jpg", },
    { name: 'Fire TV', src: "/firetv.jpeg", },
    { name: 'Fire Stick', src: "/feature-image.webp", },
    { name: 'Samsung TV', src: "/dsed.jpeg", },
    { name: 'LG TV (under process)', src: "/lg.webp", },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-yellow-100 flex flex-col items-center justify-center px-4 py-8 mt-[5rem]">
      
      <div className="flex flex-col items-center px-4 py-6 sm:px-6 sm:py-12">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <div>
            <Carousel
              showThumbs={true}
              autoPlay
              infiniteLoop
              onChange={(index) => setActiveIndex(index)}
            >
              {images.map((image, index) => (
                <div key={index} className="flex justify-center items-center">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={500}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              ))}
            </Carousel>
          </div>

          <div className="flex flex-col justify-start items-center md:items-start text-center md:text-left mt-3">
            <h1 className="text-[18px] font-bold text-gray-800 mb-4">
              {texts[activeIndex]?.title}
            </h1>
            <p className="text-gray-600  text-[18px] mb-4">{texts[activeIndex]?.description}</p>
            <div className="text-3xl font-semibold text-[18px]  text-green-600 mb-4">
              {texts[activeIndex]?.mobileAppText}
            </div>
            <p className="text-gray-500 mb-6 text-[18px]">{texts[activeIndex]?.moreInfo}</p>
            <p className="text-sm text-gray-400 text-[18px]">
              {texts[activeIndex]?.footerText}
            </p>
          </div>
        </div>

      </div>


      {/* <div className="flex justify-center items-center mt-[3rem] px-4">
        <div className="w-full max-w-[1400px] flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="flex-1">
            <Image
              src="/andriodtv.webp"
              alt="Large Facility Image"
              width={500}
              height={600}
              objectFit="cover"
              priority
            />
          </div>
          
          <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">
              ULKA Lite App is available in Android TV, Google TV, Fire TV, Fire Stick, Samsung TV App Stores, and LG TV is under process?
            </h2>
            <p className="text-gray-700">
            The ULKA Lite App is available on the following platforms:

            Android TV
            Google TV
            Fire TV
            Fire Stick
            Samsung TV App Stores
            The app's availability on LG TV is currently under process.
            </p>
          </div>
        </div>
      </div> */}

      <div className="p-6 bg-[#0a0f2c] rounded-[20px]">
      <h2 className="text-2xl font-bold text-center text-white mb-6">ULKA Lite App is available in Android TV, Google TV, Fire TV, Fire Stick, Samsung TV App Stores, and LG TV is under process:</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {platforms.map((platform, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg"
          >
            <Image
              src={platform.src}
              alt={platform.name}
              width={350}
              height={300}
              className="mb-4"
            />
            <p className="text-xl text-center font-bold">
              {platform.name}
            </p>
          </div>
        ))}
      </div>
    </div>

    </div>
  );
};

export default SmartTvPage;
