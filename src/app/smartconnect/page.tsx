"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmartApp from "@/components/SmartApp/SmartAppPage";
import SmartConnect from "@/components/SmartConnect/SmartConnectPage"

const SmartAppPage: React.FC = () => {

  return (
    <>     
      <Header/>
      <SmartConnect />
      <Footer />
    </>
  );
};

export default SmartAppPage;
