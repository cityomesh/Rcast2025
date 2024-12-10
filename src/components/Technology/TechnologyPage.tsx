"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Plus, X, ArrowLeft } from "@phosphor-icons/react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import { motion } from 'framer-motion';

const TechnologyPage = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [highlightedCards, setHighlightedCards] = useState<boolean[]>([false, false, false, false]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const [animate, setAnimate] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => setAnimate(true), 200);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const images = ["/iptv-business.jpg", "/poll.jpg"];


  const faqData = [
    {
      id: "collapseOne",
      question: "IPTV is licensed by M.I.B and it is exempted from AGR using existing local broadband networks. AGR is payable for OTT Applications since they use internet.",
      image: "/blog-OTT.png",
    },
    {
      id: "collapseTwo",
      question: "ALL OTT Applications use Global Streaming Servers like Amazon and Akamai and consumes internet bandwidth and hence cost of internet becomes expensive.",
      image: "/iil.png",
    },
    {
      id: "collapseFour",
      question: "Distribution of licensed Satellite channels is permitted only from Licensed Distribution Platform operators (IPTV, DTH, Hits, Digital Cable TV).",
      image: "/dth-vs-ott.webp",
    },
    {
      id: "collapseThree",
      question: "M.I.B is already in the Process of withdrawal of Live satellite channels from OTT platforms and Major Broadcasters like Star and Sony have already withdrawn their live channels from their OTT Apps Disney Hotstar and Sony LIV.",
      answer: (
        <p></p>
      ),
      image: "/Blog-image-01.jpg",
    },
  ];

  const features = [
    {
      title: "Pallycon is a Multi-DRM product of INKA networks who is a pioneer in the field of Digital Rights Management Software.",
    },
    {
      title: "It supports Google Widevine, Apple Fairplay, Microsoft Playready. City Media DRM server is currently using only Google Widevine.",
    },
    {
      title: "Authorizations tokens were issued to the subscribers for each channel access as per the subscription status of the subscriber in the the DRM Application Server which is pushed from the SMS server at the time of subscription activations. ",
    },
    {
      title: "The token log server maintains the logs with subscriber id, device id, channel id, with time stamps. These logs provide subscriber viewership analysis of channels for rating of the channels which is authentic. ",
    },
    {
      title: "Pallycon provides forensic watermarking, Key rotation, Blacklisting and whitelisting of Device IDs used by subscribers.",
    },
    {
      title: " The token server logs were maintained locally by CityMedia and in the cloud by Pallycon.",
    },
  ];

  const handleCardClick = (index: number) => {
    setHighlightedCards(prev => {
      const updatedCards = [...prev];
      updatedCards[index] = !updatedCards[index];
      return updatedCards;
    });
  };

 

  return (
    <div className="bg-gradient-to-r from-blue-200 to-yellow-200 w-full p-10">
      

      <div className="mt-6 p-6">
        <h2 className="text-center font-semibold text-2xl font-poppins text-blue-800 mt-[4rem]">Technology</h2>
      </div>

      <section className="text-center container mx-auto px-8 mt-6 flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 md:gap-10">
          <div
            className="bg-white shadow-lg border border-gray-300 rounded-[20px] p-5 md:p-8 text-center cursor-pointer hover:bg-blue-400   hover:ring-2 hover:ring-[#F7961E] transition-all duration-500 ease-in-out">
            <div className="flex flex-col items-center group">
              <h3 className="text-2xl mt-4 text-[#032963] hover:text-white">IPTV distributes live television channels on local broadband networks without any Internet data consumption & dedicated Cable TV Network.</h3>
            </div>
          </div>
          <div
            className="bg-white shadow-lg border border-gray-300 rounded-[20px] p-5 md:p-8 text-center cursor-pointer hover:bg-blue-400 hover:ring-2 hover:ring-[#F7961E] transition-all duration-500 ease-in-out">
            <div className="flex flex-col items-center group">            
              <h3 className="text-2xl mt-4 text-[#032963] hover:text-white">All channels are transcoded to HEVC Codec supporting future 4k/8k Resolutions using AI-Nvidia GPUs offering the best quality in the Industry competing Major Global Players.</h3>
            </div>
          </div>

          <div
            className="bg-white shadow-lg border border-gray-300 rounded-[20px] p-5 md:p-8 text-center cursor-pointer hover:bg-blue-400 hover:ring-2 hover:ring-[#F7961E] transition-all duration-500 ease-in-out">
            <div className="flex flex-col items-center group">
              <h3 className="text-2xl mt-4 text-[#032963] hover:text-white">Rcast have developed its own CDN system and not dependent on 3rd Party Vendors and they can be cascaded to save the trunk line capacity and offers regional advertisements. </h3>
            </div>
          </div>

          <div
            className="bg-white shadow-lg border border-gray-300 rounded-[20px] p-5 md:p-8 text-center cursor-pointer hover:bg-blue-400   hover:ring-2 hover:ring-[#F7961E] transition-all duration-500 ease-in-out">
            <div className="flex flex-col items-center group">
              <h3 className="text-2xl mt-4 text-[#032963] hover:text-white">Lowest Trunk Line requirement for connecting CDN servers
                150-300 Mbps for 250 SD+16 HD Channels
                500-1000 Mbps for all the 1000 Channels.</h3>
            </div>
          </div>
        </div>
      </section>

      <div className="p-2">
        <h2 className="text-center font-semibold text-2xl font-poppins text-blue-800 mt-[5rem]">Subscriber Management System</h2>
      </div>

      <div className="flex flex-col mt-10 md:flex-row items-center max-w-6xl mx-auto mb-8">
        <div
          className={`md:w-1/2 w-full h-full flex items-center justify-center ${
            animate ? "opacity-0 animate-slide-left" : ""
          }`}
        >
          <Image
            src="/smart.png"
            alt="Team Meeting"
            width={800}
            height={600}
            className="object-cover w-[90%] h-auto transition-opacity duration-1000 ease-in-out"
          />
        </div>

        <div
          className={`md:w-1/2 w-full p-4 ${
            animate ? "opacity-0 animate-slide-right" : ""
          }`}
        >
          <h2 className="text-3xl font-bold leading-10 text-black text-[16px]">
            <span className="text-[#33CCC5]">
            The Subscriber Management System provides multi level reseller management and revenue sharing with all the stake holders and also includes enhanced CRM features for the customer satisfaction. Android and IOS mobile Apps for subscription management and instant activations. 
            </span>{" "}
            API integration with popular broadband billing systems to offer combo packs with IPTV bouquets. API integration to the DRM Application server to push the subscription data and customer information in real time to meet the regulatory compliances.  
            <span className="text-[#0A8FC3]">
              {" "}
              The system is built on robust Linux operating system. The application and database servers can be independently hosted for scalability. Realtime scalable options like Openstack and Kubernetes can be deployed for unlimited expansion. 
            </span>
          </h2>
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

      <div className="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 py-9">
        <h2 className="text-center font-semibold text-2xl font-poppins text-blue-800 mb-8">DRM Token Server</h2>
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-lg font-bold text-gray-800">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center ">
        <h2 className="font-semibold text-2xl font-poppins text-blue-800 mt-[5rem]">DRM Application Server</h2>
      </div>
      <div className="flex flex-col items-center mt-10 space-y-4 mb-8 px-4 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full sm:max-w-6xl mx-auto">
          {[
            "City Media is a technical partner of Pallycon Multi-DRM encryption service Provider and developed the DRM Application Server to meet the TRAI regulatory specifications. The DRM Server is integrated with Multi-DRM Key server with Site ID, Site Key and Access Key.",
            "DRM do not have any facility to activate and deactivate a Subscriber directly from the Graphical User Interface (GUI) terminal of DRM. All activation, de-activations, bouquets and channel assignments are done only in SMS and the data is pushed to DRM server.",
            "The system is built on robust Linux operating system. The application and database servers can be independently hosted for scalability. Realtime scalable options like Openstack and Kubernetes can be deployed for unlimited expansion.",
          ].map((text, index) => (
            <div
              key={index}
              className="p-4 bg-[#0a0f2c] rounded shadow w-full transition duration-300 hover:bg-white group"
              style={{
                maxWidth: "400px",
              }}
            >
              <h2 className="text-xl sm:text-xl font-bold leading-6 sm:leading-7 text-white text-center group-hover:text-blue-500">
                <span className="block text-[20px] text-[#33CCC5] mt-2 group-hover:text-gray-400">
                  {text}
                </span>
              </h2>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <h2 className="font-semibold text-2xl font-poppins text-blue-800 mt-[3rem] mb-8">Transcoding and Encryption Servers</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-5">
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5, type: "spring", stiffness: 50 }}
          className="bg-[#0a0f2c] text-white p-5 rounded-lg shadow-md w-full max-w-2xl mb-5 hover:bg-blue-400 hover:text-black"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-lg font-bold mb-2">Transcoding and Encryption is implemented in a single process the output streams are connected to the distribution Streaming / CDN servers. If the Encoders deployed are already supported with the required codec and file format only Encryption can be implemented saving GPU resources.</h2>
        </motion.div>

        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5, type: "spring", stiffness: 50, delay: 0.5 }}
          className="bg-[#0a0f2c] text-white p-5 rounded-lg shadow-md w-full max-w-2xl mb-5 hover:bg-blue-400 hover:text-black"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-lg font-bold mb-2">The Transcoding / Encryption Servers can accept almost all types of input streams from the Encoders or the IRDs which includes Multicast/Unicast, MPTS/SPTS, MPEG-2, MPEG-4, H.264, H.265, MPEG-TS, HLS, MPEG-DASH etc.</h2>
        </motion.div>

        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5, type: "spring", stiffness: 50, delay: 0.5  }}
          className="bg-[#0a0f2c] text-white p-5 rounded-lg shadow-md w-full max-w-2xl mb-5 hover:bg-blue-400 hover:text-black"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-lg font-bold mb-2">Professional Nvidia GPUs are used in Transcoder Servers and support 100 to 160 streams per server as per the Server and GPU specifications. N+1 Servers are recommended for redundancy and the configurations can be backed up and restored in the Spare Server.</h2>
        </motion.div>

        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5, type: "spring", stiffness: 50, delay: 0.5  }}
          className="bg-[#0a0f2c] text-white p-5 rounded-lg shadow-md w-full max-w-2xl mb-5 hover:bg-blue-400 hover:text-black"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-lg font-bold mb-2">Web browser based configuration and management of the channels is available. The Server and GPU resources also can be monitored remotely. All the Channels status including the bitrates can be monitored to ensure 24/7 operation.</h2>
        </motion.div>
      </div>
    </div>
  );
};

export default TechnologyPage;
