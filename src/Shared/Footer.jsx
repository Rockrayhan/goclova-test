import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-primary text-forth h-fit pt-10">
      <footer className="footer text-base-content p-10 container ">
        <aside>
          <h1> GoClova </h1>
          <p>
            A sister concern of
             
            <a
              target="_blank"
              href="https://www.finaltouch.com.bd"
            >
             &nbsp; <u>Final Touch</u>
            </a>
            <br />
            Providing reliable tech since 2016
          </p>

          {/* social links */}
          <div className="mt-4">
            <h6 className="footer-title">Follow us</h6>
            <div className="flex gap-4">
              <span className="bg-forth hover:bg-blue-200 h-8 w-8 rounded-full center">
                <a href="#">
                  <FaFacebook className="text-primary text-2xl" />
                </a>
              </span>
              <span className="bg-forth hover:bg-blue-200 h-8 w-8 rounded-full center">
                <a href="#">
                  <CiLinkedin className="text-primary text-2xl" />
                </a>
              </span>
              <span className="bg-forth hover:bg-blue-200 h-8 w-8 rounded-full center">
                <a href="#">
                  <FaInstagram className="text-primary text-2xl" />
                </a>
              </span>
              <span className="bg-forth hover:bg-blue-200 h-8 w-8 rounded-full center">
                <a href="#">
                  <FaSquareXTwitter className="text-primary text-2xl" />
                </a>
              </span>
            </div>
          </div>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <Link to="/services" className="link link-hover">
            Custom Web Development
          </Link>
          <Link to="/services" className="link link-hover">
            Search Engine Optimization (SEO)
          </Link>
          <Link to="/services" className="link link-hover">
            Strategy & Digital Marketing
          </Link>
          <Link to="/services" className="link link-hover">
            Branding & Communications
          </Link>
          <Link to="/services" className="link link-hover">
            Resource Augmentation
          </Link>
          <Link to="/services" className="link link-hover">
            Video Production & Photography
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link to="/about" className="link link-hover">
            About us
          </Link>
          <Link to="/contact" className="link link-hover">
            Contact
          </Link>
          <Link to="/case-studies" className="link link-hover">
            Case-studies
          </Link>
          <Link to="/services" className="link link-hover">
            All Services
          </Link>
          <Link to="/blogs" className="link link-hover">
            Blogs
          </Link>
        </nav>
        <nav>
          <div className="flex flex-col gap-2">
            <h6 className="footer-title">Contact Us</h6>
            <a className="link link-hover">info@goclova.com</a>
            <a className="link link-hover">+880 1708 527443</a>
            <a className="link link-hover"> Mirpur-10, Dhaka, Bangladesh </a>
          </div>
        </nav>
      </footer>
      <hr className="border-gray-600" />
      <footer className="container flex justify-between items-center py-5">
        <small> &#169; GoClova {new Date().getFullYear()} </small>

        <small className="">
          <a href="#"> Privacy Policy </a> 
          <span className="mx-1">|</span>
          <a href="#"> Terms & Conditions </a>
        </small>
      </footer>
    </div>
  );
};

export default Footer;
