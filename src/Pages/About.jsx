import React, { useEffect } from "react";
import Breadcrumb from "../Shared/Breadcrumb";
import AllClients from "../Components/AllClients";
import CounterItems from "../Components/CounterItems";
import TestimonialSection from "../Components/TestimonialSection";
import OurBelives from "../Components/OurBelives";
import ContactSection from "../Components/ContactSection";
import OurTeam from "../Components/OurTeam";
import { useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#all-clients") {
      const element = document.getElementById("all-clients");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  useEffect(() => {
        document.title = `GoClova | Know About Us`;
      });
    

  return (
    <div>
      {/* page header */}
      <div className="py-16 bg-gray-200 text-center center flex-col gap-8" >
        <div>
          <Breadcrumb />
        </div>

       
          
        <h1 className="page-title" data-aos="fade-up" data-aos-delay="300">
          GoClova is a family of briliant minds   
        </h1>
        <p className="section-content text-center container md:w-3/5" data-aos="fade-up">
          GoClova is your dedicated partner in crafting impactful digital and
          technology solutions. We're an advanced technology solutions agency
          known for our innovative approach and fearless pursuit of
          possibilities.
        </p>

        <div className="center container" data-aos="fade-up">
          <img
            className="rounded-lg md:h-[500px] w-[1000px]"
            src="https://t3.ftcdn.net/jpg/05/39/65/40/360_F_539654005_M7XZRGAG3TAarymgapSSgSUdgkNKQL2G.jpg"
            alt=""
          />
        </div>
      

      </div>

{/* about content */}
      <div className="section-header container py-16 md:w-3/5" data-aos="fade-up">
        <h3 className="h3">
          From our headquarters in Dhaka, Bangladesh, our team of experts
          collaborates to craft tailored solutions for your business - both
          online and offline.
        </h3>
        <h3 className="h3 py-3">
          With over a decade of experience, we have a deep understanding of the
          industry, making us a trusted name in the business.
        </h3>
        <h3 className="h3 py-3">
          Our small yet dynamic team allows us to be agile, innovative, and
          highly adaptable—perfectly positioned to provide cutting-edge
          technology and digital services for businesses in fast-evolving
          markets.
        </h3>
        <h3 className="h3">
          If you're looking for a web solutions agency that can elevate your
          business to new heights, GoClova is your ideal partner.
        </h3>
        <CounterItems />

      </div>

    {/* <OurTeam/> */}
      

      <div id="all-clients">
        <AllClients />
      </div>

    <OurBelives/>

      <TestimonialSection/>
      <ContactSection/>
    </div>
  );
};

export default About;
