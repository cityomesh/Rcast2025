"use client";
// import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Aboutpage = () => {
  // const [currentSlide, setCurrentSlide] = useState<number>(0);
  // const handleSlideChange = (index: number) => setCurrentSlide(index);
  // const [highlightedCards, setHighlightedCards] = useState<boolean[]>([false, false, false, false]);

  const fourCardsData = [
    {
      content: "City Online Media (P) Limited is promoted by technocrats having more than two decades of experience in Internet and Television Industry.",
      bgColor: "bg-orange-500",
    },
    {
      content: "Rcast the IPTV SAAS (Software As A Solution) is deployed for ULKA TV services  for more than 4 years. The Concept of IPTV is tested by Public and Private ISPs by deploying ULKA TV in their broadband Networks.",
      bgColor: "bg-blue-500",
    },
    {
      content: " Evaluation of responses from ISPs and users helped us to proceed to the next stage of development in the right direction with clarity on features and functionality of the product. We focused on the quality and distribution efficiency of IPTV service which can be deployed in all types of broadband networks.",
      bgColor: "bg-pink-500",
    },
    {
      content: "ULKA TV using Rcast successfully passed all the Audits conducted by the Broadcasters and its own self Audits for the last four years.",
      bgColor: "bg-red-500",
    },
  ];

  // const services = [
  //   {
  //     description: "The Television sets are being upgraded at a very fast pace.4K Smart TVs are common today and the traditional Set-top-Boxes are unable to upgrade to the standards of 4K Televisions."
  //   },
  //   {
  //     description: "LED TVs are preferred for their energy efficiency, slimmer design, and enhanced picture quality compared to traditional LCDs. They offer better brightness, contrast, and a broader color spectrum."
  //   },
  //   {
  //     title: "",
  //     description: "Smart TV share of new Television sales is more then 95%, Rcast 4K compatible distribution system has TRAI approved Virtual STB Application for Smart TVs and Smart Phones.."
  //   },
  // ];

  // const handleCardClick = (index: number) => {
  //   setHighlightedCards(prev => {
  //     const updatedCards = [...prev];
  //     updatedCards[index] = !updatedCards[index];
  //     return updatedCards;
  //   });
  // };

  return (
    <div className="bg-white">
      <div className="w-full">
      <div className="max-w-8xl mx-auto p-4 mt-[6rem]">
        <h1 className="text-center text-2xl text-blue-900 mt-2 font-bold mb-8">
          ABOUT US  
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 font-bold text-[25px] mb-8">
          {fourCardsData.map((card, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg text-white flex flex-col justify-center items-center h-[450px] ${card.bgColor} relative group transition-colors duration-300`}
            >
              <div
                className="absolute inset-0 rounded-full bg-purple-600 opacity-0 scale-50 group-hover:opacity-50 group-hover:scale-100 transition-all duration-300 pointer-events-none"
                style={{
                  width: "22rem",
                  height: "22rem",
                  margin: "auto",
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                }}
              ></div>
              <p className="relative text-center">{card.content}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Aboutpage;
