"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from 'framer-motion';

const IptvvsottPage = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [highlightedCards, setHighlightedCards] = useState<boolean[]>([false, false, false, false]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFaqPopup, setShowFaqPopup] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

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

  const toggleAccordion = (accordionId: string) => {
    setActiveAccordion(activeAccordion === accordionId ? null : accordionId);
  };

  return (
    <div className="bg-gradient-to-r from-blue-200 to-yellow-200 w-full p-10">
        <section className="container mx-auto px-4 mt-[9rem] mb-8 flex justify-center">
        <div className="w-full max-w-3xl">
          <div className="text-2xl font-bold text-center mb-4">IPTV vs OTT</div>
          <div className="flex flex-col gap-4">
            {faqData.map((faq) => (
              <div key={faq.id} className="rounded-lg bg-yellow-200 p-4">
                <motion.button
                  className="w-full text-left text-lg font-medium flex justify-between items-center text-blue hover:bg-white hover:text-blue-800 hover:border-blue-800 p-2"
                  onClick={() => toggleAccordion(faq.id)}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.question}
                  <span>{activeAccordion === faq.id ? "-" : "+"}</span>
                </motion.button>

                <motion.div
                  className="mt-2 text-gray-700"
                  initial={{ opacity: 0, maxHeight: 0 }}
                  animate={{
                    opacity: activeAccordion === faq.id ? 1 : 0,
                    maxHeight: activeAccordion === faq.id ? '1000px' : 0,
                  }}
                  transition={{ duration: 0.5 }}
                  style={{ overflow: 'hidden' }}
                >
                  {activeAccordion === faq.id && (
                    <>
                      <div>{faq.answer}</div>
                      <motion.img
                        src={faq.image}
                        alt={faq.question}
                        className="mt-4 w-full max-h-64 object-cover rounded-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      />
                    </>
                  )}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default IptvvsottPage;
