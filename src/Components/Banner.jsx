import React from "react";
import banner_lotty from "../../public/banner_lotty.json";
import Lottie from "lottie-react";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-primary min-h-screen flex items-center ">
      {/* Center content vertically and horizontally */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 container" data-aos="fade-up">

        <div className="col-span-1 flex flex-col justify-center items-start">
          <h1 className="text-third text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-start md:text-center">
            Transform your Business with
          </h1>
          <h1 className="text-secondary text-2xl md:text-3xl lg:text-4xl font-semibold mb-6">
            <Typewriter
              options={{
                strings: ["Cloud based services","Custom Web Development", "Corporate Branding"],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 75,
              }}
            />
          </h1>
            <Link to="/contact">
          <button className="btn btn-secondary text-forth border-0 px-8 md:px-16 hover:bg-transparent hover:border hover:shadow-secondary  transition-all duration-300 shadow-md">
          Get Started
          </button>
            </Link>
        </div>

        <div className="col-span-1  flex justify-center items-center">
          <Lottie animationData={banner_lotty} />
        </div>
        
      </div>
    </div>
  );
};

export default Banner;
