"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
const PartnersPage = () => {

  const getBackgroundColor = (language: string): string => {
    switch (language.toLowerCase()) {
      case "hindi":
        return "bg-red-100";
      case "english":
        return "bg-blue-200";
      case "telugu":
        return "bg-yellow-200";
      case "tamil":
        return "bg-green-200";
      case "kannada":
          return "bg-red-300";
      case "marathi":
        return "bg-yellow-300";
      case "malayalam":
        return "bg-orange-400";
      case "gujarati":
        return "bg-white";          
      case "bengali":
        return "bg-pink-200";
      case "bhojpuri":
        return "bg-purple-200";
      case "assamese":
        return "bg-teal-200";
      case "punjabi":
        return "bg-orange-200";
      case "odia":
        return "bg-gray-200";
      default:
        return "bg-white";
    }
  };
  
  const channelData = [
    { number: 101, name: "STAR PLUS HD", language: "Hindi", price: 22 },
    { number: 102, name: "Colors HD", language: "Hindi", price: 19 },
    { number: 103, name: "STAR BHARAT HD", language: "Hindi", price: 19 },
    { number: 104, name: "SONY SET HD", language: "Hindi", price: 19 },
    { number: 105, name: "SONY SAB HD", language: "Hindi", price: 19 },
    { number: 107, name: "Zee TV HD", language: "Hindi", price: 19 },
    { number: 108, name: "&Tv HD", language: "Hindi", price: 19 },
    { number: 109, name: "DD NATIONAL HD", language: "Hindi", price: 0 },
    { number: 121, name: "STAR PLUS", language: "Hindi", price: 19 },
    { number: 122, name: "STAR BHARAT", language: "Hindi", price: 12 },
    { number: 123, name: "Colors", language: "Hindi", price: 19 },
    { number: 126, name: "Zee Tv", language: "Hindi", price: 19 },
    { number: 125, name: "STAR UTSAV", language: "Hindi", price: 0.5 },
    { number: 124, name: "SONY SET", language: "Hindi", price: 19 },
    { number: 127, name: "& Tv", language: "Hindi", price: 6 },
    { number: 128, name: "SONY SAB", language: "Hindi", price: 19 },
    { number: 129, name: "Epic", language: "Hindi", price: 5 },
    { number: 133, name: "SONY PAL", language: "Hindi", price: 0.5 },
    { number: 134, name: "COLORS RISHTEY", language: "Hindi", price: 0.5 },
    { number: 135, name: "ZEE Anmol", language: "Hindi", price: 0.1 },
    { number: 136, name: "Big Magic", language: "Hindi", price: 0.1 },
    { number: 141, name: "Ishara TV", language: "Hindi", price: 5 },
    { number: 144, name: "The Q India", language: "Hindi", price: 0 },
    { number: 145, name: "SHEMAROO TV", language: "Hindi", price: 0 },
    { number: 146, name: "DD NATIONAL", language: "Hindi", price: 0 },
    { number: 147, name: "DD UTTAR PRADESH", language: "Hindi", price: 0 },
    { number: 148, name: "DD MADHYA PRADESH", language: "Hindi", price: 0 },
    { number: 149, name: "DD Rajasthan", language: "Hindi", price: 0 },
    { number: 150, name: "DD Bihar", language: "Hindi", price: 0 },
    { number: 151, name: "DD UTTARAKHAND", language: "Hindi", price: 0 },
    { number: 153, name: "DD SIKKIM", language: "Hindi", price: 0 },
    { number: 154, name: "DD MEGHALAYA", language: "Hindi", price: 0 },
    { number: 157, name: "DD JHARKAND", language: "Hindi", price: 0 },
    { number: 159, name: "DD HARYANA", language: "Hindi", price: 0 },
    { number: 165, name: "HISTORY TV 18 HD", language: "Hindi", price: 7 },
    { number: 166, name: "THE HISTORY CHANNEL", language: "Hindi", price: 3 },
    { number: 167, name: "DD KISAN", language: "Hindi", price: 0 },
    { number: 168, name: "GYANDARSHAN 1", language: "Hindi", price: 0 },
    { number: 172, name: "STAR SPORTS 1 HD HINDI", language: "Hindi", price: 19 },
    { number: 173, name: "SONY TEN 3 HD", language: "Hindi", price: 19 },
    { number: 175, name: "STAR SPORTS 1 HINDI", language: "Hindi", price: 19 },
    { number: 176, name: "SONY TEN 3", language: "Hindi", price: 19 },
    { number: 177, name: "Dangal", language: "Hindi", price: 0 },
    { number: 178, name: "SUN NEO", language: "Hindi", price: 0 },
    { number: 186, name: "HUNGAMA TV", language: "Hindi", price: 2 },
    { number: 187, name: "Cartoon Network", language: "Hindi", price: 4.75 },
    { number: 188, name: "ETV BAL BHARAT HINDI HD", language: "Hindi", price: 6 },
    { number: 191, name: "FOOD FOOD", language: "Hindi", price: 0 },
    { number: 193, name: "Foodxp", language: "Hindi", price: 1.5 },
    { number: 201, name: "STAR GOLD HD", language: "Hindi", price: 19 },
    { number: 202, name: "SONY MAX HD", language: "Hindi", price: 19 },
    { number: 203, name: "COLORS CINEPLEX HD", language: "Hindi", price: 19 },
    { number: 204, name: "Zee Cinema HD", language: "Hindi", price: 19 },
    { number: 205, name: "Star Gold2 HD", language: "Hindi", price: 5 },
    { number: 206, name: "STAR GOLD SELECT HD", language: "Hindi", price: 8 },
    { number: 207, name: "& Pictures HD", language: "Hindi", price: 19 },
    { number: 208, name: "&Xplor HD", language: "Hindi", price: 4 },
    { number: 211, name: "STAR GOLD", language: "Hindi", price: 19 },
    { number: 212, name: "SONY MAX", language: "Hindi", price: 19 },
    { number: 214, name: "BINDASS", language: "Hindi", price: 0.1 },
    { number: 215, name: "STAR GOLD 2", language: "Hindi", price: 3 },
    { number: 216, name: "&Pictures", language: "Hindi", price: 10 },
    { number: 217, name: "SONY MAX 2", language: "Hindi", price: 1 },
    { number: 218, name: "STAR GOLD THRILLS", language: "Hindi", price: 2 },
    { number: 219, name: "COLORS CINEPLEX", language: "Hindi", price: 19 },
    { number: 220, name: "STAR UTSAV MOVIES", language: "Hindi", price: 0.5 },
    { number: 221, name: "STAR GOLD ROMANCE", language: "Hindi", price: 2 },
    { number: 222, name: "STAR GOLD SELECT", language: "Hindi", price: 7 },
    { number: 223, name: "Zee Bollywood", language: "Hindi", price: 3 },
    { number: 224, name: "SONY WAH", language: "Hindi", price: 0.1 },
    { number: 225, name: "Zee Anmol Cinema", language: "Hindi", price: 0.1 },
    { number: 226, name: "Zee Action", language: "Hindi", price: 0.1 },
    { number: 227, name: "B4U Movies", language: "Hindi", price: 0 },
    { number: 228, name: "Goldmines Bollywood", language: "Hindi", price: 0 },
    { number: 229, name: "B4U KADAK", language: "Hindi", price: 0 },
    { number: 230, name: "Goldmines", language: "Hindi", price: 0 },
    { number: 231, name: "Dhamaal", language: "Hindi", price: 0 },
    { number: 232, name: "ENTER 10", language: "Hindi", price: 0 },
    
    
    { number: 233, name: "BFLIX_MOVIES", language: "Hindi", price: 0 },
    { number: 234, name: "Shemaroo Classic", language: "Hindi", price: 0 },
    { number: 235, name: "Colors Superhits", language: "Hindi", price: 0.1 },
    { number: 236, name: "Colors Cineplex Bollywood", language: "Hindi", price: 0.1 },
    { number: 237, name: "MOVIE PLUSE", language: "Hindi", price: 0 },
    { number: 238, name: "RAAPCHICK", language: "Hindi", price: 0 },
    { number: 240, name: "DHINCHAAK", language: "Hindi", price: 0 },
    { number: 241, name: "SHUBH CINEMA", language: "Hindi", price: 0 },
    { number: 242, name: "Manoranjan Grand", language: "Hindi", price: 0 },
    { number: 245, name: "Zee Cinema", language: "Hindi", price: 19 },
    { number: 247, name: "GOLDMINES MOVIES", language: "Hindi", price: 0 },
    { number: 248, name: "DHAMAKA MOVIES B4U", language: "Hindi", price: 0 },
    { number: 249, name: "Zee Classic", language: "Hindi", price: 0.1 },
    { number: 250, name: "Mtv Beats HD", language: "Hindi", price: 1 },
    { number: 251, name: "Mtv HD", language: "Hindi", price: 2 },
    { number: 255, name: "MTV BEATS", language: "Hindi", price: 0.1 },
    { number: 256, name: "ZOOM", language: "Hindi", price: 0.5 },
    { number: 257, name: "9XM", language: "Hindi", price: 0 },
    { number: 258, name: "9X JALWA", language: "Hindi", price: 0 },
    { number: 260, name: "Zing", language: "Hindi", price: 0.1 },
    { number: 261, name: "MUSIC INDIA", language: "Hindi", price: 0 },
    { number: 262, name: "MASTIII", language: "Hindi", price: 0 },
    { number: 263, name: "B4U MUSIC INDIA", language: "Hindi", price: 0 },
    { number: 265, name: "ShowBox", language: "Hindi", price: 0.1 },
    { number: 266, name: "E24", language: "Hindi", price: 0 },
    { number: 269, name: "INSYNC", language: "Hindi", price: 0 },
    { number: 270, name: "Mtv", language: "Hindi", price: 1 },
    { number: 275, name: "AAJ TAK HD", language: "Hindi", price: 2 },
    { number: 276, name: "DD News HD", language: "Hindi", price: 0 },
    { number: 277, name: "TIMES NOW NAVBHARAT HD", language: "Hindi", price: 1.5 },
    { number: 278, name: "DD SANSAD TV HD", language: "Hindi", price: 0 },
    { number: 279, name: "DD Sansad Tv Rajyasabha", language: "Hindi", price: 0 },
    { number: 281, name: "Ndtv India", language: "Hindi", price: 1 },
    { number: 282, name: "AAJ TAK", language: "Hindi", price: 0.75 },
    { number: 283, name: "News18 India", language: "Hindi", price: 0.1 },
    { number: 284, name: "NEWS18 UP/UK", language: "Hindi", price: 0.1 },
    { number: 285, name: "NEWS18 BIHAR/JHARKHAND", language: "Hindi", price: 0.1 },
    { number: 286, name: "News18 Rajasthan", language: "Hindi", price: 0.1 },
    { number: 287, name: "News18 Mp Chattisgarh", language: "Hindi", price: 0.1 },
    { number: 288, name: "Cnbc Awaaz", language: "Hindi", price: 0.1 },
    { number: 289, name: "GOOD NEWS TODAY", language: "Hindi", price: 0.25 },
    { number: 291, name: "Zee News", language: "Hindi", price: 0 },
    { number: 294, name: "IndiaTV", language: "Hindi", price: 0 },
    { number: 295, name: "ABP NEWS", language: "Hindi", price: 0 },
    { number: 296, name: "Republic TV Bharat", language: "Hindi", price: 0 },
    { number: 297, name: "TV9 BHARATHVARSH", language: "Hindi", price: 0 },
    { number: 298, name: "NEWS 24", language: "Hindi", price: 0 },
    { number: 299, name: "NEWS INDIA", language: "Hindi", price: 0 },
    { number: 302, name: "ZEE BIHAR JHARKHAND", language: "Hindi", price: 0 },
    { number: 305, name: "DD NEWS", language: "Hindi", price: 0 },
    { number: 306, name: "DD BHARATI", language: "Hindi", price: 0 },
    { number: 307, name: "DD SANSAD TV", language: "Hindi", price: 0 },
    { number: 308, name: "VIP NEWS", language: "Hindi", price: 0 },
    { number: 309, name: "India News UP", language: "Hindi", price: 0 },
    { number: 310, name: "INDIA NEWS MP", language: "Hindi", price: 0 },
    { number: 311, name: "INDIA NEWS RAJASTHAN", language: "Hindi", price: 0 },
    { number: 312, name: "INDIA NEWS HARYANA", language: "Hindi", price: 0 },
    { number: 315, name: "JK_24X7_NEWS", language: "Hindi", price: 0 },
    { number: 316, name: "Zee Mp Chattisgarh", language: "Hindi", price: 0 },
    { number: 317, name: "ET NOW SWADESH", language: "Hindi", price: 1 },
    { number: 318, name: "News Nation", language: "Hindi", price: 0 },
    { number: 320, name: "Times Now Navabharat", language: "Hindi", price: 0 },
    { number: 321, name: "TV 100", language: "Hindi", price: 0 },
    { number: 324, name: "IND 24", language: "Hindi", price: 0 },
    { number: 329, name: "Sadhna Plus", language: "Hindi", price: 0 },
    { number: 330, name: "APN", language: "Hindi", price: 0 },
    { number: 331, name: "TV ANAADI NEWS", language: "Hindi", price: 0 },
    { number: 332, name: "K NEWS", language: "Hindi", price: 0 },
    { number: 333, name: "News State UP UK", language: "Hindi", price: 0 },
    { number: 334, name: "JANATA TV", language: "Hindi", price: 0 },
    { number: 335, name: "Network 10", language: "Hindi", price: 0 },
    { number: 336, name: "NEWS STATE MP", language: "Hindi", price: 0 },
    { number: 340, name: "News1 India", language: "Hindi", price: 0 },
    { number: 342, name: "SWARAJEXPRESS", language: "Hindi", price: 0 },
    { number: 343, name: "HINDI KHABAR", language: "Hindi", price: 0 },
    { number: 346, name: "BHARAT SAMACHAR", language: "Hindi", price: 0 },
    { number: 348, name: "KHABRE ABHITAK", language: "Hindi", price: 0 },
    { number: 351, name: "DD ARUNPRABHA", language: "Hindi", price: 0 },
    { number: 353, name: "TV 24", language: "Hindi", price: 0 },
    { number: 354, name: "INH24X7", language: "Hindi", price: 0 },
    { number: 355, name: "INDIAVOICE", language: "Hindi", price: 0 },
    { number: 357, name: "IBC24", language: "Hindi", price: 0 },
    { number: 358, name: "BANSAL", language: "Hindi", price: 0 },
    { number: 359, name: "NEPAL 1", language: "Hindi", price: 0 },
    { number: 360, name: "LIVING INDIA NEWS", language: "Hindi", price: 0 },
    { number: 366, name: "NAAPTOL", language: "Hindi", price: 0 },
    { number: 370, name: "SVBC HINDI", language: "Hindi", price: 0 },
    { number: 371, name: "Aastha", language: "Hindi", price: 0 },
    { number: 372, name: "Sanskar", language: "Hindi", price: 0 },
    { number: 373, name: "Disha TV", language: "Hindi", price: 0 },
    { number: 375, name: "Shraddha Mh1", language: "Hindi", price: 0 },
    { number: 377, name: "PEACE OF MIND", language: "Hindi", price: 0 },
    { number: 378, name: "JINVANI", language: "Hindi", price: 0 },
    { number: 379, name: "DHARMA SANDESH", language: "Hindi", price: 0 },
    { number: 380, name: "Ishwar Bhakti", language: "Hindi", price: 0 },
    { number: 383, name: "PARAS GOLD", language: "Hindi", price: 0 },
    { number: 384, name: "Satsang", language: "Hindi", price: 0 },
    { number: 385, name: "SHUBH TV", language: "Hindi", price: 0 },
    { number: 388, name: "SADHNA BHAKTI", language: "Hindi", price: 0 },
    { number: 389, name: "DARSHAN_24X7", language: "Hindi", price: 0 },
    { number: 392, name: "Subharti", language: "Hindi", price: 0 },
    { number: 395, name: "CHANNEL WIN", language: "Hindi", price: 0 },
    { number: 397, name: "Sanskriti 24/7", language: "Hindi", price: 0 },
    { number: 1203, name: "DD HIMACHAL PRADESH", language: "Hindi", price: 0 },
    { number: 1205, name: "DD CHATTISGARH", language: "Hindi", price: 0 },
    { number: 1206, name: "DD TRIPURA", language: "Hindi", price: 0 },
    { number: 1231, name: "Gangaur", language: "Hindi", price: 0 },




    { number: 402, name: "Colors Infinity HD", language: "ENGLISH", price: 9 },
    { number: 403, name: "Zee Cafe HD", language: "ENGLISH", price: 10 },
    { number: 404, name: "Comedy Central HD", language: "ENGLISH", price: 9 },
    { number: 405, name: "ARIRANG HD", language: "ENGLISH", price: 0 },
    { number: 406, name: "DISNEY INTERNATIONAL HD", language: "ENGLISH", price: 19 },
    { number: 412, name: "Colors Infinity", language: "ENGLISH", price: 5 },
    { number: 413, name: "Zee Cafe", language: "ENGLISH", price: 10 },
    { number: 414, name: "Comedy Central", language: "ENGLISH", price: 5 },
    { number: 419, name: "Woman Tv", language: "ENGLISH", price: 3 },
    { number: 422, name: "NATIONAL GEOGRAPHIC HD", language: "ENGLISH", price: 14 },
    { number: 423, name: "NAT GEO WILD HD", language: "ENGLISH", price: 8 },
    { number: 424, name: "Discovery HD", language: "ENGLISH", price: 8 },
    { number: 425, name: "SONY BBC EARTH HD", language: "ENGLISH", price: 19 },
    { number: 426, name: "INVESTIGATION DISCOVERY HD", language: "ENGLISH", price: 2 },
    { number: 427, name: "Animal Planet HD world", language: "ENGLISH", price: 5 },
    { number: 429, name: "ZEE ZEST HD", language: "ENGLISH", price: 10 },
    { number: 431, name: "NATIONAL GEOGRAPHIC", language: "ENGLISH", price: 2 },
    { number: 433, name: "NAT GEO WILD", language: "ENGLISH", price: 1 },
    { number: 434, name: "DISCOVERY CHANNEL", language: "ENGLISH", price: 4 },
    { number: 435, name: "SONY BBC EARTH", language: "ENGLISH", price: 3 },
    { number: 436, name: "Discovery Turbo", language: "ENGLISH", price: 1 },
    { number: 437, name: "Investigation Discovery", language: "ENGLISH", price: 1 },
    { number: 438, name: "Discovery Science", language: "ENGLISH", price: 1 },
    { number: 439, name: "ANIMAL PLANET", language: "ENGLISH", price: 2 },
    { number: 440, name: "ZEE ZEST", language: "ENGLISH", price: 1 },
    { number: 441, name: "DISNEY CHANNEL HD", language: "ENGLISH", price: 15 },
    { number: 442, name: "NICK HD+", language: "ENGLISH", price: 10 },
    { number: 445, name: "ETV BAL BHARAT ENGLISH HD", language: "ENGLISH", price: 6 },
    { number: 446, name: "Pogo", language: "ENGLISH", price: 4.75 },
    { number: 447, name: "DISNEY JUNIOR", language: "ENGLISH", price: 4 },
    { number: 448, name: "DISNEY CHANNEL", language: "ENGLISH", price: 10 },
    { number: 449, name: "SUPER HUNGAMA", language: "ENGLISH", price: 4 },
    { number: 450, name: "NICK", language: "ENGLISH", price: 6 },
    { number: 451, name: "Discovery Kids", language: "ENGLISH", price: 3.5 },
    { number: 452, name: "Sonic Nickelodeon", language: "ENGLISH", price: 1 },
    { number: 453, name: "SONY YAY", language: "ENGLISH", price: 4 },
    { number: 454, name: "NICK JR", language: "ENGLISH", price: 1 },
    { number: 455, name: "Gubbare", language: "ENGLISH", price: 3 },
    { number: 456, name: "CBeebies", language: "ENGLISH", price: 3 },
    { number: 460, name: "TLC HD World", language: "ENGLISH", price: 3 },
    { number: 461, name: "Star Life HD", language: "ENGLISH", price: 2 },
    { number: 462, name: "travelxp HD", language: "ENGLISH", price: 9 },
    { number: 463, name: "Ndtv Good Times", language: "ENGLISH", price: 1.5 },
    { number: 464, name: "Star Life", language: "ENGLISH", price: 1 },
    { number: 465, name: "Ftv India", language: "ENGLISH", price: 0 },
    { number: 466, name: "TLC", language: "ENGLISH", price: 2 },
    { number: 467, name: "travelxp", language: "ENGLISH", price: 3 },
    { number: 471, name: "STAR MOVIES HD", language: "ENGLISH", price: 19 },
    { number: 472, name: "SONY PIX HD", language: "ENGLISH", price: 19 },
    { number: 473, name: "Movies Now HD", language: "ENGLISH", price: 14 },
    { number: 474, name: "MNX HD", language: "ENGLISH", price: 10 },
    { number: 475, name: "MN+ HD", language: "ENGLISH", price: 10 },
    { number: 476, name: "&Flix HD", language: "ENGLISH", price: 19 },
    { number: 477, name: "STAR MOVIES SELECT HD", language: "ENGLISH", price: 19 },
    { number: 479, name: "& Prive HD", language: "ENGLISH", price: 6 },
    { number: 481, name: "STAR MOVIES", language: "ENGLISH", price: 19 },
    { number: 482, name: "SONY PIX", language: "ENGLISH", price: 10 },
    { number: 483, name: "Movies Now", language: "ENGLISH", price: 10 },
    { number: 484, name: "Mnx", language: "ENGLISH", price: 5 },
    { number: 486, name: "&Flix", language: "ENGLISH", price: 15 },
    { number: 487, name: "STAR MOVIES SELECT", language: "ENGLISH", price: 7 },
    { number: 488, name: "Romedy Now", language: "ENGLISH", price: 5 },
    { number: 496, name: "Vh1 HD", language: "ENGLISH", price: 1 },
    { number: 497, name: "VH1", language: "ENGLISH", price: 0.1 },
    { number: 501, name: "Times Now World HD", language: "ENGLISH", price: 3 },
    { number: 502, name: "DD INDIA HD", language: "ENGLISH", price: 0 },
    { number: 503, name: "CNBC Tv18 Prime HD", language: "ENGLISH", price: 1 },
    { number: 504, name: "ALJazeera English HD", language: "ENGLISH", price: 0 },
    { number: 505, name: "Channel News Asia HD", language: "ENGLISH", price: 0 },
    { number: 507, name: "DW", language: "ENGLISH", price: 0 },
    { number: 508, name: "Russia Today HD", language: "ENGLISH", price: 0 },
    { number: 509, name: "ABC AUSTRALIA", language: "ENGLISH", price: 0 },
    { number: 551, name: "STAR SPORTS HD 1", language: "ENGLISH", price: 19 },
    { number: 552, name: "STAR SPORTS HD2", language: "ENGLISH", price: 19 },
    { number: 554, name: "STAR SPORTS SELECT HD 1", language: "ENGLISH", price: 19 },
    { number: 555, name: "STAR SPORTS SELECT HD 2", language: "ENGLISH", price: 15 },
    { number: 556, name: "SONY TEN 1 HD", language: "ENGLISH", price: 19 },
    { number: 577, name: "DD SPORTS", language: "ENGLISH", price: 0 },
    { number: 578, name: "EUROSPORT", language: "ENGLISH", price: 4 },
    { number: 581, name: "Sports18 2", language: "ENGLISH", price: 1 },



    { number: 601, name: "ETV HD", language: "TELUGU", price: 19 },
    { number: 602, name: "Zee Telugu HD", language: "TELUGU", price: 19 },
    { number: 603, name: "STAR MAA HD", language: "TELUGU", price: 22 },
    { number: 604, name: "GEMINI TV HD", language: "TELUGU", price: 19 },
    { number: 608, name: "ETV PLUS HD", language: "TELUGU", price: 16 },
    { number: 611, name: "Etv", language: "TELUGU", price: 19 },
    { number: 612, name: "Zee Telugu", language: "TELUGU", price: 19 },
    { number: 613, name: "STAR MAA", language: "TELUGU", price: 19 },
    { number: 614, name: "GEMINI TV", language: "TELUGU", price: 19 },
    { number: 615, name: "ETV PLUS", language: "TELUGU", price: 12 },
    { number: 617, name: "DD SAPTAGIRI", language: "TELUGU", price: 0 },
    { number: 618, name: "DD YADAGIRI", language: "TELUGU", price: 0 },
    { number: 619, name: "VISSA TV", language: "TELUGU", price: 0 },
    { number: 620, name: "STUDIO ONE", language: "TELUGU", price: 0 },
    { number: 621, name: "STUDIO YUVA", language: "TELUGU", price: 0 },
    { number: 624, name: "STAR MAA MOVIES HD", language: "TELUGU", price: 19 },
    { number: 625, name: "ETV Cinema HD", language: "TELUGU", price: 19 },
    { number: 626, name: "Gemini Movies HD", language: "TELUGU", price: 19 },
    { number: 627, name: "Zee Cinemalu HD", language: "TELUGU", price: 19 },
    { number: 629, name: "STAR MAA MOVIES", language: "TELUGU", price: 19 },
    { number: 630, name: "Etv Cinema", language: "TELUGU", price: 15 },
    { number: 631, name: "Gemini Movies", language: "TELUGU", price: 17 },
    { number: 632, name: "Zee Cinemalu", language: "TELUGU", price: 15 },
    { number: 633, name: "STAR MAA GOLD", language: "TELUGU", price: 9 },
    { number: 637, name: "Gemini Music HD", language: "TELUGU", price: 19 },
    { number: 639, name: "STAR MAA MUSIC", language: "TELUGU", price: 5 },
    { number: 640, name: "Gemini Music", language: "TELUGU", price: 4 },
    { number: 642, name: "RAJ MUSIX TELUGU", language: "TELUGU", price: 0 },
    { number: 644, name: "Gemini Life", language: "TELUGU", price: 5 },
    { number: 645, name: "Etv Abhiruchi", language: "TELUGU", price: 3 },
    { number: 648, name: "Vanitha Tv", language: "TELUGU", price: 0 },
    { number: 649, name: "STUDIO ONE PLUS", language: "TELUGU", price: 0 },
    { number: 650, name: "CVR HEALTH", language: "TELUGU", price: 0 },
    { number: 652, name: "ETV BAL BHARAT TELUGUHD", language: "TELUGU", price: 6 },
    { number: 653, name: "ETV BAL BHARAT TELUGU", language: "TELUGU", price: 4 },
    { number: 654, name: "POGO TELUGU", language: "TELUGU", price: 4.75 },
    { number: 655, name: "Kushi Tv", language: "TELUGU", price: 4 },
    { number: 656, name: "STAR SPORTS 1 TELUGU HD", language: "TELUGU", price: 19 },
    { number: 657, name: "SONY TEN 4 HD", language: "TELUGU", price: 19 },
    { number: 658, name: "STAR SPORTS 1 TELUGU", language: "TELUGU", price: 19 },
    { number: 659, name: "SONY TEN 4", language: "TELUGU", price: 17 },
    { number: 661, name: "Gemini Comedy", language: "TELUGU", price: 5 },
    { number: 663, name: "Etv Andhrapradesh", language: "TELUGU", price: 2 },
    { number: 664, name: "Etv Telangana", language: "TELUGU", price: 2 },
    { number: 665, name: "TV5", language: "TELUGU", price: 0 },
    { number: 667, name: "NTV", language: "TELUGU", price: 0 },
    { number: 668, name: "Sakshi Tv", language: "TELUGU", price: 0 },
    { number: 669, name: "ABN NEWS", language: "TELUGU", price: 0 },
    { number: 670, name: "TV9 Telugu", language: "TELUGU", price: 0 },
    { number: 671, name: "I NEWS", language: "TELUGU", price: 0 },
    { number: 672, name: "T NEWS", language: "TELUGU", price: 0 },
    { number: 673, name: "V6", language: "TELUGU", price: 0 },
    { number: 674, name: "Mahaa News", language: "TELUGU", price: 0 },
    { number: 675, name: "HMTV", language: "TELUGU", price: 0 },
    { number: 676, name: "10 TV", language: "TELUGU", price: 0 },
    { number: 677, name: "RAJ NEWS TELUGU", language: "TELUGU", price: 0 },
    { number: 678, name: "99TV", language: "TELUGU", price: 0 },
    { number: 679, name: "6 TV", language: "TELUGU", price: 0 },
    { number: 680, name: "CVR NEWS", language: "TELUGU", price: 0 },
    { number: 682, name: "PRIME9 NEWS", language: "TELUGU", price: 0 },
    { number: 683, name: "STUDIO N NEWS", language: "TELUGU", price: 0 },
    { number: 684, name: "BIG TV", language: "TELUGU", price: 0 },
    { number: 685, name: "Swatantra Tv", language: "TELUGU", price: 0 },
    { number: 686, name: "Naaptol telugu", language: "TELUGU", price: 0 },
    { number: 688, name: "SVBC", language: "TELUGU", price: 0 },
    { number: 689, name: "SRISAILAM TV", language: "TELUGU", price: 0 },
    { number: 690, name: "BHAKTHI TV", language: "TELUGU", price: 0 },
    { number: 691, name: "Etv Life", language: "TELUGU", price: 2 },
    { number: 692, name: "AASTHA TELUGU", language: "TELUGU", price: 0 },
    { number: 693, name: "HINDU DHARMAM", language: "TELUGU", price: 0 },
    { number: 695, name: "CVR SPRITUAL OM", language: "TELUGU", price: 0 },
    { number: 696, name: "Subhavaartha Tv", language: "TELUGU", price: 0 },
    { number: 697, name: "CALAVARY", language: "TELUGU", price: 0 },
    { number: 698, name: "NIREEKSHANA", language: "TELUGU", price: 0 },
    { number: 699, name: "Swara Sagar", language: "TELUGU", price: 0 },


    { number: 701, name: "Sun Tv HD", language: "TAMIL", price: 19 },
    { number: 702, name: "VIJAY HD", language: "TAMIL", price: 22 },
    { number: 703, name: "Colors Tamil HD", language: "TAMIL", price: 7 },
    { number: 704, name: "Jaya TV HD", language: "TAMIL", price: 6 },
    { number: 705, name: "Zee Tamil HD", language: "TAMIL", price: 19 },
    { number: 711, name: "Sun Tv", language: "TAMIL", price: 19 },
    { number: 712, name: "VIJAY", language: "TAMIL", price: 19 },
    { number: 713, name: "Colors Tamil", language: "TAMIL", price: 3 },
    { number: 714, name: "Zee Tamil", language: "TAMIL", price: 19 },
    { number: 715, name: "KALAIGNAR", language: "TAMIL", price: 12 },
    { number: 716, name: "VIJAY SUPER", language: "TAMIL", price: 10 },
    { number: 718, name: "MAKKAL_TV", language: "TAMIL", price: 0 },
    { number: 719, name: "Polimer Tv", language: "TAMIL", price: 0 },
    { number: 720, name: "DD PODHIGAI", language: "TAMIL", price: 0 },
    { number: 722, name: "Vaanavil", language: "TAMIL", price: 0 },
    { number: 723, name: "MOONTV", language: "TAMIL", price: 0 },
    { number: 724, name: "Vasanth Tv", language: "TAMIL", price: 0 },
    { number: 725, name: "VENDHAR", language: "TAMIL", price: 0 },
    { number: 726, name: "Peppers Tv", language: "TAMIL", price: 0 },
    { number: 727, name: "Chutti Tv", language: "TAMIL", price: 6 },
    { number: 728, name: "ETV BAL BHARAT TAMIL HD", language: "TAMIL", price: 6 },
    { number: 729, name: "KALAIGNAR CHITHIRAM", language: "TAMIL", price: 0 },
    { number: 730, name: "Vijay Super HD", language: "TAMIL", price: 19 },
    { number: 731, name: "Ktv HD", language: "TAMIL", price: 19 },
    { number: 732, name: "Ktv", language: "TAMIL", price: 19 },
    { number: 735, name: "J movie", language: "TAMIL", price: 2.25 },
    { number: 737, name: "Zee Thirai HD", language: "TAMIL", price: 16 },
    { number: 738, name: "ZEE THIRAI", language: "TAMIL", price: 10 },
    { number: 741, name: "Adithya Tv", language: "TAMIL", price: 9 },
    { number: 742, name: "KALAIGNAR SIRIPPOLI", language: "TAMIL", price: 8 },
    { number: 744, name: "Sun Music HD", language: "TAMIL", price: 19 },
    { number: 745, name: "Sun Music", language: "TAMIL", price: 6 },
    { number: 746, name: "VIJAY TAKKAR", language: "TAMIL", price: 2 },
    { number: 747, name: "Jaya Max", language: "TAMIL", price: 2.25 },
    { number: 751, name: "7S MUSIC", language: "TAMIL", price: 0 },
    { number: 752, name: "MK SIX", language: "TAMIL", price: 0 },
    { number: 753, name: "MK TUNES", language: "TAMIL", price: 0 },
    { number: 759, name: "KALAIGNAR ISAI ARUVI", language: "TAMIL", price: 4 },
    { number: 760, name: "KALAIGNAR MURASU", language: "TAMIL", price: 12 },
    { number: 761, name: "Sun Life", language: "TAMIL", price: 9 },
    { number: 767, name: "JAYA PLUS", language: "TAMIL", price: 0.5 },
    { number: 768, name: "KALAIGNAR SEITHIGAL", language: "TAMIL", price: 1 },
    { number: 769, name: "MALAI MURUSU TV", language: "TAMIL", price: 0 },
    { number: 771, name: "NEWS 7 TAMIL", language: "TAMIL", price: 0 },
    { number: 772, name: "News18 Tamil", language: "TAMIL", price: 0.1 },
    { number: 773, name: "NewsJ", language: "TAMIL", price: 0 },
    { number: 774, name: "PUTHIYATHALAIMURAI", language: "TAMIL", price: 0 },
    { number: 776, name: "Sathiyam Tv", language: "TAMIL", price: 0 },
    { number: 777, name: "Sun News", language: "TAMIL", price: 1 },
    { number: 778, name: "Thanthi Tv", language: "TAMIL", price: 0 },
    { number: 779, name: "VELICHAM PLUS", language: "TAMIL", price: 0 },
    { number: 783, name: "Madhimugam", language: "TAMIL", price: 0 },
    { number: 784, name: "MALAR TV", language: "TAMIL", price: 0 },
    { number: 786, name: "SAITV", language: "TAMIL", price: 0 },
    { number: 787, name: "DHEERAN", language: "TAMIL", price: 0 },
    { number: 789, name: "SVBC TAMIL", language: "TAMIL", price: 0 },
    { number: 790, name: "Nambikkai Tv", language: "TAMIL", price: 0 },
    { number: 791, name: "Angel Tv", language: "TAMIL", price: 0 },
    { number: 792, name: "Imayam", language: "TAMIL", price: 0 },
    { number: 793, name: "ASEERVATHAM", language: "TAMIL", price: 0 },
    { number: 795, name: "Madha", language: "TAMIL", price: 0 },
    { number: 796, name: "Sri Sankara Tv", language: "TAMIL", price: 0 },
    { number: 797, name: "Star Sports 1 Tamil HD", language: "TAMIL", price: 19 },
    { number: 798, name: "STAR SPORTS 1 TAMIL", language: "TAMIL", price: 19 },

    { number: 801, name: "STAR SUVARNA HD", language: "KANNADA", price: 22 },
    { number: 802, name: "Colors Kannada HD", language: "KANNADA", price: 19 },
    { number: 803, name: "Udaya HD", language: "KANNADA", price: 19 },
    { number: 804, name: "Zee Kannada HD", language: "KANNADA", price: 19 },
    { number: 807, name: "STAR SUVARNA", language: "KANNADA", price: 19 },
    { number: 808, name: "Colors Kannada", language: "KANNADA", price: 19 },
    { number: 809, name: "Udaya Tv", language: "KANNADA", price: 19 },
    { number: 810, name: "Zee Kannada", language: "KANNADA", price: 19 },
    { number: 811, name: "Colors Super", language: "KANNADA", price: 1 },
    { number: 813, name: "Udaya Movies", language: "KANNADA", price: 19 },
    { number: 815, name: "Udaya Comedy", language: "KANNADA", price: 6 },
    { number: 819, name: "SIRI KANNADA ALL Time", language: "KANNADA", price: 0 },
    { number: 820, name: "DD CHANDANA", language: "KANNADA", price: 0 },
    { number: 822, name: "Chintu Tv", language: "KANNADA", price: 5 },
    { number: 823, name: "ETV BAL BHARAT KANNADA HD", language: "KANNADA", price: 6 },
    { number: 825, name: "Colors Kannada Cinema", language: "KANNADA", price: 5 },
    { number: 826, name: "Zee Picchar HD", language: "KANNADA", price: 16 },
    { number: 827, name: "Zee Picchar", language: "KANNADA", price: 15 },
    { number: 828, name: "STAR SUVARNA PLUS", language: "KANNADA", price: 8 },
    { number: 830, name: "PUBLICMOVIES", language: "KANNADA", price: 0 },
    { number: 832, name: "Udaya Music", language: "KANNADA", price: 5 },
    { number: 834, name: "RAJ MUSIX KANNADA", language: "KANNADA", price: 0 },
    { number: 835, name: "Public Music", language: "KANNADA", price: 0 },
    { number: 839, name: "News18 Kannada", language: "KANNADA", price: 0.1 },
    { number: 840, name: "TV9 Kannada", language: "KANNADA", price: 0 },
    { number: 841, name: "Suvarna News 24X7", language: "KANNADA", price: 0 },
    { number: 842, name: "Public Tv", language: "KANNADA", price: 0 },
    { number: 843, name: "News 1st Kannada", language: "KANNADA", price: 0 },
    { number: 844, name: "TV5 KANNADA", language: "KANNADA", price: 0 },
    { number: 846, name: "REPUBLIC KANNADA", language: "KANNADA", price: 0 },
    { number: 848, name: "POWER TV", language: "KANNADA", price: 0 },
    { number: 849, name: "RAJ NEWS KANNADA", language: "KANNADA", price: 0 },
    { number: 853, name: "SVBC KANNADA", language: "KANNADA", price: 0 },
    { number: 854, name: "AASTHA KANNADA", language: "KANNADA", price: 0 },
    { number: 855, name: "AYUSH TV", language: "KANNADA", price: 0 },
    { number: 858, name: "STAR SPORTS 1 KANNADA", language: "KANNADA", price: 19 },


    { number: 860, name: "STAR PRAVAH HD", language: "MARATHI", price: 19 },
    { number: 861, name: "Colors Marathi HD", language: "MARATHI", price: 19 },
    { number: 862, name: "Zee Marathi HD", language: "MARATHI", price: 19 },
    { number: 865, name: "SONY MARATHI", language: "MARATHI", price: 6 },
    { number: 866, name: "Colors Marathi", language: "MARATHI", price: 15 },
    { number: 867, name: "STAR PRAVAH", language: "MARATHI", price: 19 },
    { number: 868, name: "Zee Marathi", language: "MARATHI", price: 19 },
    { number: 869, name: "Sun Marathi", language: "MARATHI", price: 0 },
    { number: 870, name: "Zee Yuva", language: "MARATHI", price: 1 },
    { number: 871, name: "DD SAHYADRI", language: "MARATHI", price: 0 },
    { number: 872, name: "DD GOA", language: "MARATHI", price: 0 },
    { number: 873, name: "Star Pravah Picture HD", language: "MARATHI", price: 6 },
    { number: 874, name: "Star Pravah Picture", language: "MARATHI", price: 3 },
    { number: 875, name: "Shemaroo Marathibana", language: "MARATHI", price: 0 },
    { number: 876, name: "Zee Talkies", language: "MARATHI", price: 9 },
    { number: 877, name: "Zee Talkies HD", language: "MARATHI", price: 19 },
    { number: 880, name: "9X JHAKAAS", language: "MARATHI", price: 0 },
    { number: 881, name: "Sangeet Marathi", language: "MARATHI", price: 0 },
    { number: 883, name: "ETV BAL BHARAT MARATHI HD", language: "MARATHI", price: 6 },
    { number: 885, name: "Abp Majha", language: "MARATHI", price: 0 },
    { number: 887, name: "JAI MAHARASTRA", language: "MARATHI", price: 0 },
    { number: 888, name: "MKN", language: "MARATHI", price: 0 },
    { number: 889, name: "News18 Lokmat", language: "MARATHI", price: 0.1 },
    { number: 890, name: "SAAM TV", language: "MARATHI", price: 0 },
    { number: 891, name: "TV9 Mumbai", language: "MARATHI", price: 0 },
    { number: 892, name: "Zee 24 Taas", language: "MARATHI", price: 0 },
    { number: 895, name: "MaiBoli", language: "MARATHI", price: 0 },

    { number: 901, name: "ASIANET HD", language: "MALAYALAM", price: 22 },
    { number: 902, name: "Mazhavil Manorama HD", language: "MALAYALAM", price: 0 },
    { number: 903, name: "SURYA HD", language: "MALAYALAM", price: 19 },
    { number: 904, name: "ZEE KERALAM HD", language: "MALAYALAM", price: 10 },
    { number: 911, name: "ASIANET", language: "MALAYALAM", price: 19 },
    { number: 912, name: "ASIANET PLUS", language: "MALAYALAM", price: 7 },
    { number: 913, name: "Surya Tv", language: "MALAYALAM", price: 12 },
    { number: 914, name: "Mazhavil Manorama", language: "MALAYALAM", price: 0 },
    { number: 915, name: "WE", language: "MALAYALAM", price: 0 },
    { number: 916, name: "ATE", language: "MALAYALAM", price: 0 },
    { number: 917, name: "KERALA VISION", language: "MALAYALAM", price: 0 },
    { number: 918, name: "Jaihind Tv", language: "MALAYALAM", price: 0 },
    { number: 919, name: "Amrita Tv", language: "MALAYALAM", price: 0 },
    { number: 920, name: "Jeevan Tv", language: "MALAYALAM", price: 0 },
    { number: 921, name: "KAUMUDY", language: "MALAYALAM", price: 0 },
    { number: 922, name: "DD MALAYALAM", language: "MALAYALAM", price: 0 },
    { number: 923, name: "Flowers", language: "MALAYALAM", price: 10 },
    { number: 924, name: "KAIRALI TV", language: "MALAYALAM", price: 0 },
    { number: 925, name: "SAFARI", language: "MALAYALAM", price: 0 },
    { number: 931, name: "Kochu Tv", language: "MALAYALAM", price: 5 },
    { number: 932, name: "ETV BAL BHARAT MALAYALAM HD", language: "MALAYALAM", price: 6 },
    { number: 933, name: "Surya Comedy", language: "MALAYALAM", price: 4 },
    { number: 934, name: "Asianet Movies HD", language: "MALAYALAM", price: 19 },
    { number: 935, name: "ASIANET MOVIES", language: "MALAYALAM", price: 19 },
    { number: 936, name: "Surya Movies", language: "MALAYALAM", price: 11 },
    { number: 940, name: "KAPPA TV", language: "MALAYALAM", price: 0 },
    { number: 941, name: "RAJ MUSIX MALAYALAM", language: "MALAYALAM", price: 0 },
    { number: 942, name: "Surya Music", language: "MALAYALAM", price: 4 },
    { number: 945, name: "24 NEWS", language: "MALAYALAM", price: 0 },
    { number: 946, name: "Asianet News", language: "MALAYALAM", price: 0 },
    { number: 948, name: "KAIRALINEWS", language: "MALAYALAM", price: 0 },
    { number: 949, name: "Manorama News central", language: "MALAYALAM", price: 0 },
    { number: 950, name: "MATRABHUMI NEWS", language: "MALAYALAM", price: 0 },
    { number: 951, name: "MEDIA ONE", language: "MALAYALAM", price: 0 },
    { number: 952, name: "News18 KERALA", language: "MALAYALAM", price: 0.1 },
    { number: 953, name: "RAJ NEWS MALAYALAM", language: "MALAYALAM", price: 0 },
    { number: 954, name: "REPORTER", language: "MALAYALAM", price: 0 },
    { number: 955, name: "Zee Keralam", language: "MALAYALAM", price: 10 },
    { number: 961, name: "DARSHAN TV", language: "MALAYALAM", price: 0 },
    { number: 962, name: "Goodness Tv", language: "MALAYALAM", price: 0 },
    { number: 965, name: "SHALOMTV", language: "MALAYALAM", price: 0 },

    { number: 971, name: "Colors Gujarati", language: "GUJARATI", price: 6 },
    { number: 972, name: "DD GUJARATI GIRNAR", language: "GUJARATI", price: 0 },
    { number: 975, name: "COLORS GUJARATI CINEMA", language: "GUJARATI", price: 1 },
    { number: 978, name: "ETV BAL BHARAT GUJARATI HD", language: "GUJARATI", price: 6 },
    { number: 981, name: "Abp Asmita", language: "GUJARATI", price: 0 },
    { number: 982, name: "CNBC BAJAAR", language: "GUJARATI", price: 1 },
    { number: 983, name: "India news gujarati", language: "GUJARATI", price: 0 },
    { number: 984, name: "News18 Gujarati", language: "GUJARATI", price: 0.1 },
    { number: 986, name: "TV9 Gujarati", language: "GUJARATI", price: 0 },
    { number: 987, name: "Vtv News", language: "GUJARATI", price: 0 },
    { number: 988, name: "ZEE Kalak", language: "GUJARATI", price: 0 },
    { number: 989, name: "AASTHA GUJARATHI", language: "GUJARATI", price: 0 },
    { number: 992, name: "DD KASHIR", language: "GUJARATI", price: 0 },
    { number: 993, name: "DD URDU", language: "GUJARATI", price: 0 },
    { number: 995, name: "4TV NEWS", language: "GUJARATI", price: 0 },
    { number: 996, name: "GULISTAN NEWS", language: "GUJARATI", price: 0 },
    { number: 997, name: "NEWS18 JKLHP", language: "GUJARATI", price: 0.1 },
    { number: 998, name: "RM MERCY TV", language: "GUJARATI", price: 0 },

    { number: 1001, name: "Colors Bangla HD", language: "BENGALI", price: 14 },
    { number: 1002, name: "STAR JALSHA HD", language: "BENGALI", price: 19 },
    { number: 1003, name: "Zee Bangla HD", language: "BENGALI", price: 19 },
    { number: 1011, name: "STAR JALSHA", language: "BENGALI", price: 19 },
    { number: 1012, name: "Colors Bangla", language: "BENGALI", price: 7 },
    { number: 1013, name: "Enterr10 Bangla", language: "BENGALI", price: 0 },
    { number: 1014, name: "Rupasi Bangla", language: "BENGALI", price: 0 },
    { number: 1015, name: "SONY AATH", language: "BENGALI", price: 6 },
    { number: 1016, name: "SUN BANGLA", language: "BENGALI", price: 0 },
    { number: 1017, name: "AAKASH BANGLA", language: "BENGALI", price: 0 },
    { number: 1018, name: "DD BANGLA", language: "BENGALI", price: 0 },
    { number: 1019, name: "Zee Bangla", language: "BENGALI", price: 19 },
    { number: 1021, name: "JALSHA MOVIES HD", language: "BENGALI", price: 19 },
    { number: 1022, name: "COLORS BANGLA CINEMA", language: "BENGALI", price: 5 },
    { number: 1023, name: "JALSHA MOVIES", language: "BENGALI", price: 15 },
    { number: 1024, name: "Khushboo Bangla", language: "BENGALI", price: 0 },
    { number: 1026, name: "ZEE Bangla Cinema", language: "BENGALI", price: 10 },
    { number: 1028, name: "ETV BAL BHARAT BENGALI HD", language: "BENGALI", price: 6 },
    { number: 1032, name: "Dhoom music", language: "BENGALI", price: 0 },
    { number: 1033, name: "RONGEEN", language: "BENGALI", price: 0 },
    { number: 1034, name: "SangeetBangla", language: "BENGALI", price: 0 },
    { number: 1038, name: "NEWS HOUR", language: "BENGALI", price: 0 },
    { number: 1041, name: "Abp Ananda", language: "BENGALI", price: 0 },
    { number: 1043, name: "News Time Bangla", language: "BENGALI", price: 0 },
    { number: 1044, name: "News18 Bangla", language: "BENGALI", price: 0.1 },
    { number: 1045, name: "RPLUS", language: "BENGALI", price: 0 },
    { number: 1046, name: "ZEE 24 GHANTE", language: "BENGALI", price: 0 },
    { number: 1047, name: "TV9 BANGLA", language: "BENGALI", price: 0 },
    { number: 1048, name: "Kolkata Tv", language: "BENGALI", price: 0 },
    { number: 1049, name: "REPUBLIC BANGALA", language: "BENGALI", price: 0 },
    { number: 1052, name: "RPLUS GOLD", language: "BENGALI", price: 0 },
    { number: 1056, name: "Hare Krsna", language: "BENGALI", price: 0 },
    { number: 1061, name: "Zee_Ganga", language: "BENGALI", price: 0.5 },

    { number: 1070, name: "Filamchi", language: "BHOJPURI", price: 0.25 },
    { number: 1071, name: "B4U Bhojpuri", language: "BHOJPURI", price: 0 },
    { number: 1072, name: "Bhojpuri Cinema", language: "BHOJPURI", price: 0 },
    { number: 1073, name: "DABANGG", language: "BHOJPURI", price: 0 },
    { number: 1074, name: "Oscar Movies Bhojpuri", language: "BHOJPURI", price: 0 },
    { number: 1076, name: "Zee Biskope", language: "BHOJPURI", price: 0.1 },
    { number: 1078, name: "SANGEET BHOJPURI", language: "BHOJPURI", price: 0 },
    { number: 1081, name: "ASSAM TALKS", language: "BHOJPURI", price: 0 },
    { number: 1082, name: "NK TV", language: "BHOJPURI", price: 0 },
    { number: 1083, name: "NEWS TIME ASSAM", language: "BHOJPURI", price: 0 },

    { number: 1085, name: "DD NORTH EAST", language: "ASSAMESE", price: 0 },
    { number: 1086, name: "POPULAR TV", language: "ASSAMESE", price: 0 },
    { number: 1088, name: "ETV BAL BHARAT ASSAMESE HD", language: "ASSAMESE", price: 6 },
    { number: 1089, name: "News Live", language: "ASSAMESE", price: 0 },
    { number: 1090, name: "PRARTHAM KHABHAR 24X7", language: "ASSAMESE", price: 0 },
    { number: 1091, name: "Rangoni", language: "ASSAMESE", price: 0 },
    { number: 1092, name: "NE News", language: "ASSAMESE", price: 0 },
    { number: 1093, name: "News18 Assam NE", language: "ASSAMESE", price: 0.1 },
    { number: 1094, name: "Prag News", language: "ASSAMESE", price: 0 },
    { number: 1095, name: "Indradhanu", language: "ASSAMESE", price: 0 },
    { number: 1096, name: "Ramdhenu Tv", language: "ASSAMESE", price: 0 },
    { number: 1097, name: "Rang Tv", language: "ASSAMESE", price: 0 },
    { number: 1098, name: "Dy365", language: "ASSAMESE", price: 0 },
    { number: 1099, name: "Jonack", language: "ASSAMESE", price: 0 },
    { number: 1201, name: "DD Mizoram", language: "ASSAMESE", price: 0 },

    { number: 1101, name: "BALLE BALLE", language: "PUNJABI", price: 0 },
    { number: 1102, name: "DD PUNJABI", language: "PUNJABI", price: 0 },
    { number: 1103, name: "ZEE PUNJABI", language: "PUNJABI", price: 10 },
    { number: 1111, name: "Maha Punjabi", language: "PUNJABI", price: 0 },
    { number: 1113, name: "PITARA", language: "PUNJABI", price: 0 },
    { number: 1114, name: "PTC Punjabi Gold", language: "PUNJABI", price: 0 },
    { number: 1115, name: "POPCORN MOVIES", language: "PUNJABI", price: 0 },
    { number: 1118, name: "ETV BAL BHARAT PUNJABI HD", language: "PUNJABI", price: 6 },
    { number: 1119, name: "9X Tashan", language: "PUNJABI", price: 0 },
    { number: 1121, name: "Mh One Music", language: "PUNJABI", price: 0 },
    { number: 1122, name: "Ptc Chakde", language: "PUNJABI", price: 0 },
    { number: 1123, name: "PTC Music", language: "PUNJABI", price: 0 },
    { number: 1124, name: "Chardikla Time Tv", language: "PUNJABI", price: 0 },
    { number: 1125, name: "India News Punjab", language: "PUNJABI", price: 0 },
    { number: 1126, name: "Mh ONE News", language: "PUNJABI", price: 0 },
    { number: 1127, name: "News18 Punjab", language: "PUNJABI", price: 0.1 },
    { number: 1128, name: "PTC NEWS", language: "PUNJABI", price: 0 },
    { number: 1129, name: "ZEE Punjab Hr Hp", language: "PUNJABI", price: 0 },
    { number: 1135, name: "MH1 Shradha vishwas", language: "PUNJABI", price: 0 },
    { number: 1136, name: "Ptc Punjabi", language: "PUNJABI", price: 0 },
    { number: 1137, name: "PTC Simran", language: "PUNJABI", price: 0 },

    { number: 1150, name: "STAR KIRAN HD", language: "ODIA", price: 15 },
    { number: 1151, name: "Colors Oriya", language: "ODIA", price: 6 },
    { number: 1152, name: "DD ORIYA", language: "ODIA", price: 0 },
    { number: 1153, name: "STAR KIRAN", language: "ODIA", price: 15 },
    { number: 1154, name: "Zee Sarthak", language: "ODIA", price: 19 },
    { number: 1155, name: "TARANG TV", language: "ODIA", price: 17 },
    { number: 1157, name: "Manjari TV", language: "ODIA", price: 0 },
    { number: 1158, name: "ETV BAL BHARAT ODIA HD", language: "ODIA", price: 6 },
    { number: 1161, name: "Alankar", language: "ODIA", price: 4 },
    { number: 1165, name: "Tarang Music", language: "ODIA", price: 2 },
    { number: 1171, name: "Kanak News", language: "ODIA", price: 0 },
    { number: 1173, name: "News18 Odia", language: "ODIA", price: 0.1 },
    { number: 1174, name: "Otv", language: "ODIA", price: 0 },
    { number: 1177, name: "NANDIGHOSHA TV", language: "ODIA", price: 0 },
    { number: 1178, name: "Kalinga Tv", language: "ODIA", price: 0 },
    { number: 1179, name: "Prameya News 7", language: "ODIA", price: 0 },
    { number: 1181, name: "Prarthana Tv", language: "ODIA", price: 2 },
  ];

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center mt-[5rem] space-y-6 lg:space-y-0 lg:space-x-6">

      {/* Channel List Section */}
      <div className="w-full max-w-6xl bg-white p-6 overflow-hidden">
        <h1 className="text-[30px] font-bold mb-4 text-blue-900 text-center">Channel List</h1>
        <div className="flex bg-blue-300 font-bold text-[25px]">
          <p className="border-gray-300 py-3 ml-[2rem] font-bold">Number</p>
          <p className="border-gray-300 py-3 ml-[15rem] font-bold">Name</p>
          <p className="border-gray-300 py-3 ml-[23rem] font-bold">Language</p>
          <p className="border-gray-300 py-3 ml-[5rem] font-bold">Price (₹)</p>
        </div>
        <div className="overflow-hidden max-h-[600px]">
          <table className="font-bold text-[30px] table-auto w-full border-collapse border border-gray-300 animate-scroll-up">
            <tbody>
              {channelData.map((channel) => (
                <tr
                  key={channel.number}
                  className={`text-center ${getBackgroundColor(channel.language)}`}
                >
                  <td className="border-2 border-gray-400 font-bold px-6 py-4 hover:text-blue-900">
                    {channel.number}
                  </td>
                  <td className="border-2 border-gray-400 font-bold px-6 py-4">{channel.name}</td>
                  <td className="border-2 border-gray-400 font-bold px-6 py-4">{channel.language}</td>
                  <td className="border-2 border-gray-400 font-bold px-6 py-4">{channel.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-up {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-100%);
          }
        }

        .animate-scroll-up {
          animation: scroll-up 420s linear infinite;
        }
      `}</style>
    </div>

  );
};

export default PartnersPage;



// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// const PartnersPage = () => {

//   const getBackgroundColor = (language: string): string => {
//     switch (language.toLowerCase()) {
//       case "hindi":
//         return "bg-red-200";
//       case "english":
//         return "bg-blue-200";
//       case "telugu":
//         return "bg-yellow-200";
//       case "tamil":
//         return "bg-green-200";
//       case "bengali":
//         return "bg-pink-200";
//       case "bhojpuri":
//         return "bg-purple-200";
//       case "assamese":
//         return "bg-teal-200";
//       case "punjabi":
//         return "bg-orange-200";
//       case "odia":
//         return "bg-gray-200";
//       default:
//         return "bg-white";
//     }
//   };
  
//   const channelData = [
//     { number: 101, name: "STAR PLUS HD", language: "Hindi", price: 22 },
//     { number: 102, name: "Colors HD", language: "Hindi", price: 19 },
//     { number: 103, name: "STAR BHARAT HD", language: "Hindi", price: 19 },
//     { number: 104, name: "SONY SET HD", language: "Hindi", price: 19 },
//     { number: 105, name: "SONY SAB HD", language: "Hindi", price: 19 },
//     { number: 107, name: "Zee TV HD", language: "Hindi", price: 19 },
//     { number: 108, name: "&Tv HD", language: "Hindi", price: 19 },
//     { number: 109, name: "DD NATIONAL HD", language: "Hindi", price: 0 },
//     { number: 121, name: "STAR PLUS", language: "Hindi", price: 19 },
//     { number: 122, name: "STAR BHARAT", language: "Hindi", price: 12 },
//     { number: 123, name: "Colors", language: "Hindi", price: 19 },
//     { number: 126, name: "Zee Tv", language: "Hindi", price: 19 },
//     { number: 125, name: "STAR UTSAV", language: "Hindi", price: 0.5 },
//     { number: 124, name: "SONY SET", language: "Hindi", price: 19 },
//     { number: 127, name: "& Tv", language: "Hindi", price: 6 },

//     { number: 1179, name: "Prameya News 7", language: "ODIA", price: 0 },
//     { number: 1181, name: "Prarthana Tv", language: "ODIA", price: 2 },
//   ];

//   return (
//     <div className="flex flex-col lg:flex-row justify-center items-center mt-[5rem] space-y-6 lg:space-y-0 lg:space-x-6">
//       {/* Image Section */}


//       <div className="w-full max-w-6xl bg-white p-6 overflow-hidden">
//       <div className="flex flex-col lg:flex-row bg-[#0a0f2c]">
//         <div className="relative w-full lg:w-1/5 h-[6.8rem]">
//           <Image
//             src="/ulkka.png"
//             alt="Facility Image"
//             layout="responsive"
//             width={400}
//             height={500}
//             priority
//             className="rounded-md shadow-lg object-cover"
//           />
//         </div>
//         <div className="flex flex-col justify-center text-center text-white px-6">
//           <h1 className="text-[24px] font-bold py-2">Smart TV User?</h1>
//           <p className="text-[16px] font-bold">
//             Download UlkaLite from any of Android, Samsung or FireTV Play stores.
//           </p>
//         </div>
//       </div>

//         <div className="flex bg-blue-300 font-bold">
//           <p className="border-gray-300 py-3 ml-[3rem]">Number</p>
//           <p className="border-gray-300 py-3 ml-[18rem]">Name</p>
//           <p className="border-gray-300 py-3 ml-[22rem]">Language</p>
//           <p className="border-gray-300 py-3 ml-[8rem]">Price (₹)</p>
//         </div>
//         <div className="overflow-hidden max-h-[600px]">
//           <table className="font-bold text-[20px] table-auto w-full border-collapse border border-gray-300 animate-scroll-up">
//             <tbody>
//               {channelData.map((channel) => (
//                 <tr
//                   key={channel.number}
//                   className={`text-center ${getBackgroundColor(channel.language)}`}
//                 >
//                   <td className="border-2 border-gray-400 font-bold px-6 py-4 hover:text-blue-900">
//                     {channel.number}
//                   </td>
//                   <td className="border-2 border-gray-400 font-bold px-6 py-4">{channel.name}</td>
//                   <td className="border-2 border-gray-400 font-bold px-6 py-4">{channel.language}</td>
//                   <td className="border-2 border-gray-400 font-bold px-6 py-4">{channel.price}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes scroll-up {
//           0% {
//             transform: translateY(0);
//           }
//           100% {
//             transform: translateY(-100%);
//           }
//         }

//         .animate-scroll-up {
//           animation: scroll-up 50s linear infinite;
//         }
//       `}</style>
//     </div>

//   );
// };

// export default PartnersPage;
