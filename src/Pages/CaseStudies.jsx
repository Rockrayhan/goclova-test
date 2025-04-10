import React, { useEffect } from "react";
import Breadcrumb from "../Shared/Breadcrumb";
import AllCaseStudies from "../Components/AllCaseStudies";
import { Link } from "react-router-dom";
import TestimonialSection from "../Components/TestimonialSection";
import ContactSection from "../Components/ContactSection";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

const CaseStudies = () => {
  useEffect(() => {
    document.title = `GoClova | Discover Our Exeptional Works`;
  });

  return (
    <div>
      <div className="pt-16">
        <Breadcrumb />
        <h1 className="page-title mt-5" data-aos="fade-up" data-aos-delay="300">
          Some of our prideful works 
        </h1>
      </div>

      <AllCaseStudies />

      {/* work together section */}
      <section className="pt-16 mt-16">
        <div className="py-24 bg-primary">
          <div className="container section-header" data-aos="fade-up">
            <h2 className="h2 text-forth py-2">
               
              Have any projects in your mind? 
            </h2>

            <div>
              <Link to="/contact">
                <button className="btn btn-secondary text-forth">
                  Request a proposal
                </button>
              </Link>

              <Link to="/services">
                <button className="btn btn-primary text-forth bg-black">
                  See our services
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TestimonialSection />
      <ContactSection />
    </div>
  );
};

export default CaseStudies;
