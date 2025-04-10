import React, { useEffect } from "react";
import Breadcrumb from "../Shared/Breadcrumb";
import ContactSection from "../Components/ContactSection";
import AppointmentSection from "../Components/AppointmentSection";
import { Link } from "react-router-dom";
import ContactInfo from "../Components/ContactInfo";

const Contact = () => {
  useEffect(() => {
    document.title = `Get In Touch With GoClova's Expert Team`;
  });

  return (
    <div>
      {/* <Breadcrumb /> */}
      <ContactSection />

      {/* work together section */}
      <section className="pt-16  bg-primary ">
        <div className="py-24 center">
          <div className="container text-forth"  data-aos="fade-up">
            <div className="flex flex-col gap-2">
              <h2 className="h2 py-2 text-forth">
                Need expert tech solutions? Then look no further! 
              </h2>
              <p>
                We will make your brand stand out with Cutting-Edge Technology &
                Expert Strategists.
              </p>

            <Link to="/services">
              <button className="btn btn-secondary text-forth">
               See our services
              </button>
            </Link>
            </div>
          </div>
        </div>
      </section>

      <AppointmentSection/>

      <ContactInfo/>


    </div>
  );
};

export default Contact;
