import React, { useEffect } from "react";
import Banner from "../Components/Banner";
import FeaturedBlogs from "../Components/blog/FeaturedBlogs";
import ContactSection from "../Components/ContactSection";
import HomeServices from "../Components/service/HomeServices";
import OurClients from "../Components/OurClients";
import TestimonialSection from "../Components/TestimonialSection";
import StrategySection from "../Components/StrategySection";
import CaseStudiesSlider from "../Components/CaseStudiesSlider";

const Home = () => {
  
  useEffect(() => {
    document.title = `GoClova | Professional Cloud Based Services For You`;
  });

  return (
  <div>
  <Banner/>
  <CaseStudiesSlider/>

  <div className="bg-primary text-forth pb-16">
  <HomeServices/>
  <TestimonialSection textColor="text-forth"/>
  </div>

  <StrategySection/>
  <div className="md:py-16">
  <img className="w-full lg:h-[500px] object-cover" loading="lazy" src="/images/planning.webp" alt="" />
  </div>


  <OurClients/>
  <FeaturedBlogs/>
  <ContactSection/>
  </div>
  );
};

export default Home;
