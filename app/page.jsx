'use client'
import Banner from "@/components/Banner.jsx";
import FeaturedProduct from "@/components/FeaturedProduct";
import HeaderSlider from "@/components/HeaderSlider";
import HomeProducts from "@/components/HomeProducts";
import NewsLetter from "@/components/NewsLetter";
import React from "react";


const Home = () => {
  return (
    <>
      <div className="px-6 md:px-16 lg:px-32">
        <HeaderSlider/>
        <HomeProducts/>
        <FeaturedProduct/>
        <Banner/>
        <NewsLetter/>
      </div>
    </>
  );
};

export default Home;
