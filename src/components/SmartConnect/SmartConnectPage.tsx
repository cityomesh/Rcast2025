"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const SmartConnectPage = () => {


  const [animate, setAnimate] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => setAnimate(true), 200);
    }, 4000);

    return () => clearInterval(interval);
  }, []);


  const projects = [
    {
      imageUrl: './ulka.png',
      link: 'https://ulka.tv/',
    },
    {
      imageUrl: './iptvv.jpg',
      link: 'https://ulka.tv/ulka-lite',
    },
    {
      imageUrl: './futures4.jpg',
      link: 'https://ulka.tv/packs',
    },
    {
      imageUrl: './resa.png',
      link: 'https://www.android.com/better-together/',
    },
  ];
  
  const images = [
    { src: "/rem.png", alt: "Image 1" },
    { src: "/smrt.png", alt: "Image 2" },
    { src: "/des.png", alt: "Image 3" },
    { src: "/maraj.png", alt: "Image 4" },  
  ];
  
  const services = [
    {
      image: "wifinet.png",
    },
    {
      image: "online.png",
    },
    {
      image: "ssta.png",
    },
    {
      image: "asa.png",
    },
    {
      image: "style.png",
    },
    {
      image: "dst.png",
    },
    {
      image: "dis.png",
    },
    {
      image: "swsa.png",
    },
    {
      image: "qwa.png",
    },
    {
      title: "",
      image: "ser.png",
    },
  ];
  
  return (
    <div className="bg-white">
      <section className="container mx-auto px-4 flex flex-col justify-center mt-[8rem] mb-8">
        <div className="flex flex-wrap gap-6 justify-center">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-[#0a0f2c] rounded-lg shadow-lg p-6 flex flex-col justify-between items-center transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-400 w-64 h-50`}
            >
              <h3 className="text-xl font-semibold text-white text-center">{service.title}</h3>
              <img
                src={service.image}
                alt={service.title}
                className="mt-4 w-40 h-40 object-contain rounded-xl"
              />
            </div>
          ))}
        </div>
      </section>


      <div className="flex flex-col md:flex-row items-center max-w-5xl mx-auto mb-8">
        <div
          className={`md:w-1/2 w-full h-full flex items-center justify-center ${
            animate ? "opacity-0 animate-slide-left" : ""
          }`}
        >
          <div>
            <h2 className="text-3xl font-bold leading-10 text-black text-[20px]">
              <span className="text-black hover-bg-blue-700">
                • All Smart TVs, Smart STBs, Smart Sticks can be connected to Home Wi-Fi
                Network without Fiber, Coaxial, or Lan Cables.
              </span>
              <p>
                • All types of Last Mile Distribution Networks are supported, including
                GPON, EPON, 1G/10G Lan, Air Fiber, Point-to-Point, and Point-to-Multipoint
                Wireless Links.
              </p>
            </h2>
          </div>
        </div>

        <div
          className={`md:w-1/2 w-full h-full p-4 ${
            animate ? "opacity-0 animate-slide-right" : ""
          }`}
        >
          <div>
            <h2 className="text-3xl font-bold leading-10 mt-8 text-black text-[20px]">
              <span>
                • Rcast CDN Servers are available in various configurations to suit Small
                and Large Networks with 1G Copper and 1G/10G/40G Fiber ports supporting
                8000 to 100,000 concurrent users.
              </span>
              <p>
                • All types of Last Mile Distribution Networks are supported, including
                GPON, EPON, 1G/10G Lan, Air Fiber, Point-to-Point, and Point-to-Multipoint
                Wireless Links.
              </p>
            </h2>
          </div>
        </div>

        <style jsx>{`
          @keyframes slide-left {
            0% {
              transform: translateX(-100%);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }

          @keyframes slide-right {
            0% {
              transform: translateX(100%);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }

          .animate-slide-left {
            animation: slide-left 2s ease-out forwards;
          }

          .animate-slide-right {
            animation: slide-right 2s ease-out forwards;
          }
        `}</style>
      </div>



      {/* <div className="container lg:w-[80%] mb-16 mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
            >
              <img
                src={project.imageUrl}
                alt={`Project ${index + 1}`}
                className="w-full h-[9rem] object-cover"
              />
              <div className="p-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 flex font-bold items-center mt-2"
                >
                  View Website
                </a>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default SmartConnectPage;
