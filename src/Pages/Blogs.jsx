import React, { useEffect } from "react";
import Breadcrumb from "../Shared/Breadcrumb";
import AllBlogs from "../Components/blog/AllBlogs";
import ContactSection from "../Components/ContactSection";
import { Link } from "react-router-dom";

const Blogs = () => {

  useEffect(() => {
    document.title = `Exciting and updated news with GoClova`;
  });

  return (
    <div>
      <div className="py-16 bg-gray-200">
        <Breadcrumb />
        <h1 className="page-title pt-4" data-aos="fade-up"> Here are All Blogs </h1>
      </div>

      <AllBlogs />

{/* work together section */}
      <section className="pt-16 mt-16">
        <div className="py-24 bg-primary">
          <div className="container section-header" data-aos="fade-up">
            <h2 className="h2 text-forth py-2"> Have any projects in your mind? </h2>
           <Link to="/contact">
           <button className="btn btn-secondary text-forth">
              Let's discuss
            </button>
           </Link>
          </div>
        </div>
      </section>
      

      <ContactSection />
    </div>
  );
};

export default Blogs;
