import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

const clientLogos = [
  "/clients/client1.jpg",
  "/clients/client2.jpg",
  "/clients/client3.jpg",
  "/clients/client4.jpg",
  "/clients/client5.jpg",
  "/clients/client6.jpg",
  "/clients/client7.jpg",
  "/clients/client8.jpg",
  "/clients/client9.jpg",
  "/clients/client10.jpg",
  "/clients/client11.jpg",
  "/clients/client12.jpg",
  "/clients/client13.jpg",
  "/clients/client14.jpg",
  "/clients/client15.jpg",
  "/clients/client16.jpg",
  "/clients/client17.jpg",
  "/clients/client18.jpg",
  "/clients/client19.jpg",
  "/clients/client20.jpg",
  "/clients/client21.jpg",
  "/clients/client22.jpg",
  "/clients/client23.jpg",
  "/clients/client24.jpg",
  "/clients/client25.jpg",
  "/clients/client25.jpg",
  "/clients/client27.jpg",
  "/clients/client28.jpg",
  "/clients/client29.jpg",
  "/clients/client30.jpg",
  "/clients/client31.jpg",
  "/clients/client32.jpg",
];

const OurClients = () => {
  return (
    <div className="py-16">
      <div className="section-header container" data-aos="fade-up">
        <h2 className="section-title">Trust is the Key to Success</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          We're the technology solutions partner that cares about your success.
          These are just a handful of the brands who have trusted us for their
          tech and digital services.
        </p>
      </div>

      {/* Swiper Slider */}
      <Swiper
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        speed={6000}
        grabCursor={false} // Ensures no grabbing cursor
        allowTouchMove={false} // Disables dragging
        modules={[Autoplay]}
        className="mySwiper"
      >
        {clientLogos.map((logo, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center cursor-grab py-16"
          >
            <img
              src={logo}
              alt={`Client ${index + 1}`}
              className="w-32 h-16 object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="center my-10" data-aos="fade-up">
        <Link to="/about#all-clients">
        <button className="btn btn-forth px-20 text-secondary hover:bg-secondary hover:text-white">See All Our Clients</button>
        </Link>
      </div>
    </div>
  );
};

export default OurClients;
