"use client";
// import React, { useState, useEffect } from "react";
import Image from "next/image";
import { WifiHigh } from "@phosphor-icons/react";
// import Link from "next/link";

const Homepage = () => {
  // const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const [isScrolled, setScrolled] = useState(false);
  // const [showImages, setShowImages] = useState(false);

  // const toggleMobileMenu = () => {
  //   setMobileMenuOpen((prev) => !prev);
  // };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 50) {
  //       setScrolled(true);
  //     } else {
  //       setScrolled(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <>
      <div className="bg-gradient-to-r from-blue-200 to-yellow-200 w-full p-10 rounded-lg shadow-lg relative flex items-center justify-center mt-[5rem] text-white">
        <div className="relative w-full max-w-7xl px-6 py-6 text-center">
          <div className="relative space-y-6">
            <div
              className="text-[20px] font-extrabold uppercase xl:text-[90px] text-red-600"
            >
              The Future of <span className="text-red-600 font-extrabold">Entertainment</span> is <span className="text-red-600 font-extrabold ">Here</span> 
            </div>

            <div className="flex justify-center space-x-8">
              {[
                { name: 'Smart TV', link: '/smarttv' },
                { name: 'Smart Mobile', link: '/smartmobile' },
                { name: 'STB', link: '/stb' },
                { name: 'Stick', link: '/smarttv' },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 text-xl font-bold text-white bg-red-500 rounded-xl hover:bg-[#0a0f2c]"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <p className="text-3xl text-red-600">
              No more <span className="font-bold text-red-500">CABLE</span> worries<br />
              GO Wireless Use 
              <span className="font-bold text-red-500 inline-flex items-center">
                Wi-Fi 
                <WifiHigh size={32} className="text-black ml-2 text-[20px] font-bold"/>
              </span>
            </p>

            <p className="text-4xl font-semibold text-red-600">
              With <span className="text-yellow-500">4K Ultra HD</span> support
            </p>

            <div className="relative mx-auto max-w-xs sm:max-w-5xl">
              <div className="absolute w-full h-full bg-red-500 skew-x-12 scale-x-150 rounded-t-[50%] rounded-b-[20%]"></div>
                <p className="relative text-3xl sm:text-6xl font-extrabold uppercase text-white py-3 sm:py-6 px-4 sm:px-8">
                  1000+ IPTV Channels
                </p>
              </div>
            </div>

            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 mt-10">
              <div className="flex justify-center items-center">
                <Image src="/COLORSRISTHEY.png" alt="COLORSRISTHEY" width={100} height={100} className="object-contain" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/SonyMAXHD.png" alt="SonyMAXHD" width={70} height={70} className="object-contain" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/ColorsHD.png" alt="Physician" width={100} height={100} className="object-contain" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/ZEETVHD.png" alt="ZEETVHD" width={100} height={100} className="object-contain" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/ETVHD.png" alt="ETVHD" width={100} height={100} className="object-contain" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/AsianetMoviesHD.png" alt="Physician" width={100} height={100} className="object-contain" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/SansadTVHD.png" alt="SWSA" width={100} height={100} className="object-contain" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/zeemari.jpg" alt="SWSA" width={70} height={70} className="object-contain" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/VijayHD.png" alt="SWSA" width={100} height={100} className="object-contain" />
              </div>
              <div className="flex justify-center items-center">
                  <Image src="/COLORSINFINITY.png" alt="COLORSRISTHEY" width={70} height={100} className="object-contain" />
                </div>
                <div className="flex justify-center items-center">
                  <Image src="/StarKirnoHD.png" alt="SonyMAXHD" width={70} height={100} className="object-contain" />
                </div>
                <div className="flex justify-center items-center">
                  <Image src="/SONYTEN1HD.png" alt="Physician" width={70} height={100} className="object-contain" />
                </div>
            </div>

            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 gap-6 mt-10">
            <div className="flex justify-center items-center">
                <Image src="/Sports18.png" alt="ZEETVHD" width={70} height={100} className="object-contain" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/STARSPORTS1HD.png" alt="ETVHD" width={100} height={100} className="object-contain" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/COLORSINFINITY.png" alt="COLORSRISTHEY" width={150} height={150} className="object-contain" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/StarKirnoHD.png" alt="SonyMAXHD" width={150} height={150} className="object-contain" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/SONYTEN1HD.png" alt="Physician" width={150} height={150} className="object-contain" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/Sports18.png" alt="ZEETVHD" width={150} height={150} className="object-contain" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/STARSPORTS1HD.png" alt="ETVHD" width={150} height={150} className="object-contain" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/AAZTAKHD.png" alt="Physician" width={150} height={150} className="object-contain" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/SUNTV.png" alt="SWSA" width={150} height={150} className="object-contain" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/Tarang.png" alt="SWSA" width={100} height={100} className="object-contain" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/MazhavilManorama.png" alt="SWSA" width={150} height={150} className="object-contain" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/wion.png" alt="COLORSRISTHEY" width={150} height={150} className="object-contain" />
              </div>
            </div>

            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 gap-6 mt-10">
              <div className="flex justify-center items-center">
                <Image src="/TIMESNOWWORLDHD.png" alt="Physician" width={150} height={150} className="object-contain" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/INDIATODAY.png" alt="ZEETVHD" width={100} height={100} className="object-contain" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/DDNATIONALHD.png" alt="ETVHD" width={100} height={100} className="object-contain" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/PTCPunjabhi.png" alt="Physician" width={150} height={150} className="object-contain" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/NICKHD.png" alt="SWSA" width={150} height={150} className="object-contain" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/SONYBBCEARTHHD.png" alt="SWSA" width={100} height={100} className="object-contain" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/ABPSanjha.png" alt="SWSA" width={100} height={100} className="object-contain" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/COLORSCINEPLEXHD.png" alt="COLORSRISTHEY" width={150} height={150} className="object-contain" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/NDTV24X7.png" alt="SonyMAXHD" width={150} height={150} className="object-contain" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/SONYSABHD.png" alt="Physician" width={80} height={80} className="object-contain" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/ZeeBangla.png" alt="ZEETVHD" width={100} height={100} className="object-contain" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/B4UMovies.png" alt="ETVHD" width={100} height={100} className="object-contain" />
              </div>
            </div>

            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 gap-6 mt-10">
              <div className="flex justify-center items-center">
                <Image src="/DISCOVERYHD.png" alt="Physician" width={150} height={150} className="object-contain" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/DisneyChannelHD.png" alt="SWSA" width={70} height={70} className="object-contain" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/NATGEOWILDHD.png" alt="SWSA" width={150} height={150} className="object-contain" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/INDIATVPRIMEHD.png" alt="SWSA" width={150} height={150} className="object-contain" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/SVBCTTD128.png" alt="COLORSRISTHEY" width={150} height={150} className="object-contain" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/Aastha.png" alt="SonyMAXHD" width={150} height={150} className="object-contain" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/StarGold2HD.png" alt="Physician" width={150} height={150} className="object-contain" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/nchch.png" alt="ZEETVHD" width={200} height={200} className="object-contain" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/BBCWorldNews.png" alt="ETVHD" width={150} height={150} className="object-contain" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/DDNEWSHD.png" alt="Physician" width={150} height={150} className="object-contain" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/Aljazeera.png" alt="SWSA" width={150} height={150} className="object-contain" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/ddindiahD.png" alt="SWSA" width={150} height={150} className="object-contain" />
              </div>
            </div>
            {/* <div className="w-full rounded-[40px] p-6 mt-4">
              {!showImages && (
                 <div className="flex justify-center">
                 <button
                   onClick={() => setShowImages(true)}
                   className="text-white text-lg font-medium px-4 py-2 border bg-red-600 rounded-[20px]"
                 >
                   Read More
                 </button>
               </div>
              )}

              {showImages && (
                <>
                  <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 gap-6 mt-10">
                    {[
                      "/1598262027507cnbcawaaz.png",
                      "/1629351810662COLORSINFINITYCopy.jpg",
                      "/1629351766193starworldhd.jpg",
                      "/1629281799249MTVHD.jpg",
                      "/1629280759065ZEENEWS.jpg",
                      "/1629279376306DDNEWSHD.jpg",
                      "/1629279290425AAZTAKHD.jpg",
                      "/1629277249790ZEECINEMAHD.jpg",
                      "/1629270857707DDNATIONALHD.jpg",
                      "/1594376411842Republictv.png",
                      "/1670937814630SONYBBCEARTHHD.jpg",
                      "/1635340479303ETVBalBharatenglish.jpg",
                    ].map((src, index) => (
                      <div key={index} className="flex justify-center items-center">
                        <Image
                          src={src}
                          alt="Channel"
                          width={150}
                          height={150}
                          className="object-contain"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 gap-6 mt-10">
                    {[
                      "/1629354176453NICKHDCopy.jpg",
                      "/1629355242433NDTVGOODTIMES.jpg",
                      "/1629358198645TIMESNOWWORLDHDCopy.jpg",
                      "/1629358250697ddindiahD.jpg",
                      "/1629358495675cnbctv18primehd.JPG",
                      "/1629359770804INDIATODAYCopy.jpg",
                      "/1629358713068Aljazeera.jpg",
                      "/1629359848227wion.jpg",
                      "/1629362105335STARSPORTS1HD.jpg",
                      "/1629536652435b4ubhojpuri.jpg",
                      "/1632125451082SansadTVHD.jpg",
                      "/1671009706293SETHD.jpg",
                    ].map((src, index) => (
                      <div key={index} className="flex justify-center items-center">
                        <Image
                          src={src}
                          alt="Channel"
                          width={150}
                          height={150}
                          className="object-contain"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 gap-6 mt-10">
                    {[
                      "/1699956309346Flowers.jpg",
                      "/1670939067760SONYTEN1HD.jpg",
                      "/1687853515126StarGold2HD.jpg",
                      "/1687854617467VijaySuperHD.jpg",
                      "/16085551768191596188691998DDnational128.jpg",
                      "/16388750499881629279242288ZEECINEMA.jpg",
                      "/ktvHD.png",
                      "/MazhavilManorama.png",
                      "/1629536744619STARJALSHAHD.jpg",
                      "/PravahHD.png",
                      "/1629533473258abpMAJHA.jpg",
                      "/1629536652380COLORSBANGLAHD.jpg",
                    ].map((src, index) => (
                      <div key={index} className="flex justify-center items-center">
                        <Image
                          src={src}
                          alt="Channel"
                          width={150}
                          height={150}
                          className="object-contain"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 gap-6 mt-10">
                    {[
                      "/1629266959241starplushd.jpg",
                      "/1629270395855COLORSRISTHEY.jpg",
                      "/1629365015298ZEETELUGUHD.jpg",
                      "/1629531035301ZEEMARATHIHD.jpg",
                      "/1629533231266ZEETALKIESHD.jpg",
                      "/1670939067760SONYTEN1HD.jpg",
                      "/1629538063880tarangtv.jpg",
                      "/1629787693917COLORSBANGLA.jpg",
                      "/1687853515126StarGold2HD.jpg",
                      "/B4UMovies.png",
                      "/BBCWorldNews.png",
                      "/ABPSanjha.png",
                    ].map((src, index) => (
                      <div key={index} className="flex justify-center items-center">
                        <Image
                          src={src}
                          alt="Channel"
                          width={150}
                          height={150}
                          className="object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div> */}
          </div>       
      </div>
    </>
  );
};

export default Homepage;
