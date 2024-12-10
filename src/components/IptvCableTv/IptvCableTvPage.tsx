"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";

const IptvCableTvPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [questionClicked_1, setQuestionClicked_1] = useState(true);
  const [questionClicked_2, setQuestionClicked_2] = useState(false);
  const [questionClicked_3, setQuestionClicked_3] = useState(false);
  const [selectedTypeOfAns, setSelectedTypeOfAns] = useState(
    "InpharmD&apos;s Answer"
  );
  const [selectedBtn, setSelectedBtn] = useState("Background");

  const handleAnsType = (type: string) => {
    setSelectedTypeOfAns(type);
  };

  const handleBtnClicked = (btn: string) => {
    setSelectedBtn(btn);
  };

  const handleQueClicked_1 = () => {
    setQuestionClicked_1(true);
    setQuestionClicked_2(false);
    setQuestionClicked_3(false);
  };

  const handleQueClicked_2 = () => {
    setQuestionClicked_2(true);
    setQuestionClicked_1(false);
    setQuestionClicked_3(false);
  };

  const handleQueClicked_3 = () => {
    setQuestionClicked_3(true);
    setQuestionClicked_2(false);
    setQuestionClicked_1(false);
  };

  const images = [
    { src: "/ipsstv.png", alt: "Image 3" },
    { src: "/ggg.jpg", alt: "Image 1" },
    { src: "/ol.webp", alt: "Image 2" },
  ];

  const texts = [
    {
      title: "Cable TV requires Dedicated 2GB-3GB bandwidth for the Trunk Line against 310mbps to 1Gbps BW for Rcast",
      description:
        "Cable TV requires Edge QAM modulator and EDFA at each Distribution Location costing Rs.300k-400k.",
      mobileAppText:
        "Rcast CDN (Streaming Server) at Rs.15k-50k.",
      moreInfo:
        "Distribution of Digital Cable TV requires dedicated Dark fiber Network and WDM couplers and Decouplers which adds to the CAPEX of distribution.",
      footerText:
        "Rcast distributes the IPTV signal in existing local broadband Networks and cost of dedicated high power laser network can be avoided.",
    },
    {
      title: "Cable TV requires Dedicated 2GB-3GB bandwidth for the Trunk Line against 310mbps to 1Gbps BW for Rcast",
      description:
        "Cable TV requires Edge QAM modulator and EDFA at each Distribution Location costing Rs.300k-400k.",
      mobileAppText:
        "Rcast CDN (Streaming Server) at Rs.15k-50k.",
      moreInfo:
        "Distribution of Digital Cable TV requires dedicated Dark fiber Network and WDM couplers and Decouplers which adds to the CAPEX of distribution.",
      footerText:
        "Rcast distributes the IPTV signal in existing local broadband Networks and cost of dedicated high power laser network can be avoided.",
    },
    {
      title: "Cable TV requires Dedicated 2GB-3GB bandwidth for the Trunk Line against 310mbps to 1Gbps BW for Rcast",
      description:
        "Cable TV requires Edge QAM modulator and EDFA at each Distribution Location costing Rs.300k-400k.",
      mobileAppText:
        "Rcast CDN (Streaming Server) at Rs.15k-50k.",
      moreInfo:
        "Distribution of Digital Cable TV requires dedicated Dark fiber Network and WDM couplers and Decouplers which adds to the CAPEX of distribution.",
      footerText:
        "Rcast distributes the IPTV signal in existing local broadband Networks and cost of dedicated high power laser network can be avoided.",
    },
  ];
  
  return (
    <div className="bg-white">
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 mt-[8rem]">
        <div>
          <Carousel
            showThumbs={true}
            autoPlay
            infiniteLoop
            onChange={(index) => setActiveIndex(index)}
          >
            {images.map((image, index) => (
              <div key={index} className="flex justify-center items-center mt-[2rem]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={500}
                  height={500}
                  className="rounded-lg"
                />
              </div>
            ))}
          </Carousel>
        </div>

        <div className="flex flex-col justify-start items-center md:items-start text-center md:text-left mb-8 mt-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {texts[activeIndex]?.title}
          </h1>
          <p className="text-gray-600 mb-4">{texts[activeIndex]?.description}</p>
          <div className="text-xl font-semibold text-green-600 mb-4">
            {texts[activeIndex]?.mobileAppText}
          </div>
          <p className="text-gray-500 mb-6">{texts[activeIndex]?.moreInfo}</p>
          <p className="text-sm text-gray-400">
            {texts[activeIndex]?.footerText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default IptvCableTvPage;
