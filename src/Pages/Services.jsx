import React, { useEffect } from "react";
import Breadcrumb from "../Shared/Breadcrumb";
import ContactSection from "../Components/ContactSection";
import AppointmentSection from "../Components/AppointmentSection";
import AllServices from "../Components/service/AllServices";
import TestimonialSection from "../Components/TestimonialSection";
import FaqServices from "../Components/FaqServices";

const Services = () => {

    useEffect(() => {
      document.title = `GoClova | Discover Our Services`;
    });
  

  return (
    <div>
      <div className="pt-16">
        <Breadcrumb />
        <AllServices />
      </div>
      <FaqServices/>

      <AppointmentSection />
      <TestimonialSection />
      <ContactSection />
    </div>
  );
};

export default Services;
