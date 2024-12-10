"use client";
// import React, { useState } from "react";
import Image from "next/image";

const StbAppPage = () => {
  return (
    <div className="bg-white">

      <div className="bg-white mt-6 p-6">
        <h2 className="text-center font-semibold text-3xl font-poppins text-blue-800 mt-[5rem]">STB and Smart Apps</h2>
      </div>

      <div className="flex flex-wrap justify-center gap-5">
        <div className="bg-[#0a0f2c] text-white p-5 rounded-lg shadow-md w-full max-w-2xl mb-5 hover:bg-yellow-400 hover:text-black">
          <h2 className="text-2xl font-bold mb-2">We have developed AOSP (Android Open Source Platform) STB with customized launcher to meet the TRAI regulatory compliance.</h2>
        </div>

        <div className="bg-[#0a0f2c] text-white p-5 rounded-lg shadow-md w-full max-w-2xl mb-5 hover:bg-yellow-400 hover:text-black">
          <h2 className="text-2xl font-bold mb-2">OTT Apps available to the user and their placement is managed by our DRM Application Server or a dedicated OTA server for higher Scalability.</h2>
        </div>

        <div className="bg-[#0a0f2c] text-white p-5 rounded-lg shadow-md w-full max-w-2xl mb-5 hover:bg-yellow-400 hover:text-black">
          <h2 className="text-2xl font-bold mb-2">We have ULKA Lite App available in Google TV / Android TV play stores but can be used only in our partner s network.</h2>
        </div>

        <div className="bg-[#0a0f2c] text-white p-5 rounded-lg shadow-md w-full max-w-2xl mb-5 hover:bg-yellow-400 hover:text-black">
          <h2 className="text-2xl font-bold mb-2">Alternately the same app can be downloaded from our Website for manual installation in AOSP STB or AOSP Smart TV. Android Version 7.1 to 13 are supported</h2>
        </div>

        <div className="bg-[#0a0f2c] text-white p-5 rounded-lg shadow-md w-full max-w-2xl mb-5 hover:bg-yellow-400 hover:text-black">
          <h2 className="text-2xl font-bold mb-2">ULKA Lite App is approved in Samsung App store and meets all the regulatory compliance.</h2>
        </div>

        <div className="bg-[#0a0f2c] text-white p-5 rounded-lg shadow-md w-full max-w-2xl mb-5 hover:bg-yellow-400 hover:text-black">
          <h2 className="text-2xl font-bold mb-2">The DRM is supported from Tizen OS version 3.0 and above in the models 2016 to 2024. But currently Samsung have approved only in the Models 2020 to 2024.</h2>
        </div>

        <div className="bg-[#0a0f2c] text-white p-5 rounded-lg shadow-md w-full max-w-2xl mb-5 hover:bg-yellow-400 hover:text-black">
          <h2 className="text-2xl font-bold mb-2">ULKA Lite App is approved in LG App Store and approved in all the models using Web OS 3.0 and above.</h2>
        </div>

        <div className="bg-[#0a0f2c] text-white p-5 rounded-lg shadow-md w-full max-w-2xl mb-5 hover:bg-yellow-400 hover:text-black">
          <h2 className="text-2xl font-bold mb-2">Currently we have enabled only FTA channels and the regulatory compliance of fingerprint development is under process.</h2>
        </div>
      </div>

        <h2 className="text-gray-800 text-[16px] md:text-[20px] xl:text-[30.556px] text-center font-semibold cursor-default mt-4 mb-8">
            Bouquets and Channels
        </h2>

        <div className="flex justify-center items-center mb-8">
        <div className="flex justify-center w-[90rem] items-center rounded-[30px] flex-col bg-gradient-to-b from-[#05020A] to-[#200C42] p-[32px] md:p-[37.5px] xl:py-[75px] xl:px-[135px]">
            <p className="text-white text-[10px] md:text-[16px] xl:text-[20px] font-normal text-center animate-fadeInUp">
            We distribute nearly 700 licensed Satellite Channels and can include local channels on select CDN servers as per requirements of distributors.
            </p>

            <div className="grid grid-cols-3 gap-8 py-[20px] md:py-[40px] xl:py-[71.11px] max-w-[1180px] mx-auto">
            <div className="relative flex flex-col justify-center items-center bg-gradient-to-b from-[#F8FEFB] to-[#A0FBCB] px-[20px] py-[9px] md:px-[40px] md:py-[20px] xl:py-[120px] xl:px-[180px] rounded-[5px] md:rounded-[10px] xl:rounded-[17.8px] cursor-default transition transform hover:scale-105 hover:shadow-lg overflow-hidden w-full max-w-[300px] md:max-w-[400px] xl:max-w-[500px]">
                <Image
                src="/ulka.png"
                alt="Facility Image"
                layout="intrinsic"
                width={180}
                height={180}
                priority
                className="absolute rounded-[5px] md:rounded-[10px] xl:rounded-[17.8px] border-4 border-gray-300"
                />
            </div>
            <div className="relative flex flex-col justify-center items-center bg-gradient-to-b from-[#F8FEFB] to-[#A0FBCB] px-[12px] py-[6px] md:px-[20px] md:py-[10px] xl:py-[8px] xl:px-[12px] rounded-[5px] md:rounded-[8px] xl:rounded-[12px] cursor-default transition transform hover:scale-105 hover:shadow-lg overflow-hidden">
                <Image
                src="/oioo.png"
                alt="Facility Image"
                layout="intrinsic"
                width={180} 
                height={180}
                priority
                className="rounded-[5px] md:rounded-[8px] xl:rounded-[12px] border-4 border-gray-300"
                />
            </div>
            <div className="flex flex-col justify-center items-center bg-gradient-to-b from-[#FFECD7] to-[#F0AB62] px-[12px] py-[6px] md:px-[20px] md:py-[10px] xl:py-[8px] xl:px-[12px] rounded-[5px] md:rounded-[8px] xl:rounded-[12px] cursor-default transition transform hover:scale-105 hover:shadow-lg overflow-hidden">
                <Image
                src="/ter.png"
                alt="Facility Image"
                layout="intrinsic"
                width={180}
                height={180}
                priority
                className="rounded-[5px] md:rounded-[8px] xl:rounded-[12px] border-4 border-gray-300"
                />
            </div>
            </div>
            <p className="text-[14px] md:text-[16px] animate-highlightText xl:text-[20px] font-normal text-center flex flex-col animate-fadeInUp">
            <span className="text-white">
                Interconnect Agreements with all the Major Broadcasters including Star TV, ZEE, SONY, TV18, ETV, SUN, Gemini, Times, India Today, Discovery, OTV, NDTV and others.
            </span>
            <span className="text-white">
                Choice of Broadcaster Bouquets and Ala-carte channels.
                Best value Regional and Multilingual Package offers of ULKA TV which includes 360+ Free to Air Channels. 
            </span>
            <span className="text-white">
                The channels are organized language and genre wise for easy navigation and selection of channels in Entertainment, Movies, News, Infotainment, Music, Kids, Devotional, Sports etc. 
            </span>
            </p>

            <style jsx global>{`
            @keyframes highlightText {
            0% {
                background-color: transparent;
                color: white;
            }
            50% {
                background-color: rgba(255, 255, 0, 0.6); /* Yellow highlight */
                color: black; /* Change text color when highlighted */
            }
            100% {
                background-color: transparent;
                color: white;
            }
            }

            .animate-highlightText {
            animation: highlightText 2s ease-in-out infinite;
            }
        `}</style>
        </div>
        </div>

    </div>
  );
};

export default StbAppPage;
