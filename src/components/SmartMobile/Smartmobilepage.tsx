"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Smartmobilepage = () => {
  return (
    <div className="bg-gradient-to-r from-blue-200 to-yellow-200 min-h-screen w-full flex flex-col">
      <div className="mt-6 p-6">
        <h2 className="text-center font-semibold text-4xl font-poppins text-blue-800 mt-[5rem]">
          Smart Apps for Mobile
        </h2>
      </div>

      <div className="relative w-full flex flex-wrap gap-4 px-4">
        {["/vgfcv.png", "/hgfghb.png", "/ssadc.png"].map((src, index) => (
          <div
            key={index}
            className="relative flex-1 h-[10rem] sm:h-[15rem] md:h-[20rem] lg:h-[25rem] xl:h-[40rem]"
          >
            <Image
              src={src}
              alt={`Facility Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-5 mt-8 px-4">
        {[
          "ULKA Mini App for the Android Mobiles is available in all the major mobile play stores.",
          "The App meets all the regulatory compliances. The channels are available only within the network of the network operator and designated CDN.",
          "ULKA Mini App for the IOS i-Phones is under development and hardware supported is available for Google Widevine without using Apple Fairplay.",
          "My ULKA App is available for Android and Apple mobile phones and can be used by customers for Subscription management.",
        ].map((text, index) => (
          <motion.div
            key={index}
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{
              duration: 1.5,
              type: "spring",
              stiffness: 50,
              delay: index * 0.3,
            }}
            className="bg-[#0a0f2c] text-white p-5 rounded-lg shadow-md w-full max-w-2xl hover:bg-blue-400 hover:text-black"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-xl font-bold">{text}</h2>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-[3rem] px-4">
        <div className="w-full max-w-[1400px]">
          <Image
            src="/lopkop.png"
            alt="Large Facility Image"
            width={1500}
            height={600}
            objectFit="cover"
            priority
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-5 mt-8 px-4 mb-8">
        {[
          "My ULKA App is available for Android and Apple mobile phones and can be used by customers for Subscription management which includes renewals and subscription of additional channels on demand without depending on the reseller.",
          "My ULKA App can be activated in the subscriber mobile phones by scanning the barcode displayed on the TV when the subscriber tries to view an unsubscribed channel.",
        ].map((text, index) => (
          <motion.div
            key={index}
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{
              duration: 1.5,
              type: "spring",
              stiffness: 50,
              delay: index * 0.3,
            }}
            className="bg-white text-blue-500 p-5 rounded-lg shadow-md w-full max-w-2xl hover:bg-blue-400 hover:text-black"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-xl font-bold">{text}</h2>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Smartmobilepage;
