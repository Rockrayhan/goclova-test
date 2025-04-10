import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const CaseStudiesSlider = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/caseStudies.json")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error("Error fetching caseStudies:", err));
  }, []);

  return (
    <div className="container mx-auto py-12">
      {/* Header with Title & Navigation Arrows */}
      <div className="flex md:flex-row flex-col justify-between md:items-center mb-6 px-4 container" data-aos="fade-left">
        <h2 className="h2"> Our case studies</h2>

        {/* ✅ Fixed Navigation Arrows - Now Buttons Stay Here */}
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-secondary rounded swiper-custom-prev">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>

          <button className="px-4 py-2 bg-secondary rounded swiper-custom-next">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-custom-next",
          prevEl: ".swiper-custom-prev",
        }}
        spaceBetween={20}
        loop={true} // Enable infinite loop
        breakpoints={{
          320: { slidesPerView: 1 }, // Small screens (1 item)
          768: { slidesPerView: 2 }, // Medium screens (2 items)
          1024: { slidesPerView: 4 }, // Large screens (4 items)
        }}
        className="case-studies-slider !static"
         data-aos="fade-up"
         data-aos-delay="100"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id} className="case-studies-card w-full">
          <Link to={`/case-studies/${item.id}`} className="group flex flex-col items-center w-full">
            <div className="overflow-hidden rounded-lg w-full sm:w-3/4 md:w-[300px]">
              <img
                src={item.img}
                alt={item.title}
                className="h-[200px] w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <h3 className="py-2 h3 hover:text-secondary text-center">{item.title}</h3>
            <div className="py-2 flex gap-2 flex-wrap justify-center">
              {item.tags.map((tag, index) => (
                <small key={index} className="border border-primary rounded-lg px-3 py-1 text-xs">
                  {tag}
                </small>
              ))}
            </div>
          </Link>
        </SwiperSlide>
        
        ))}
      </Swiper>


      <div className="center py-10 mt-5"  data-aos="fade-up" data-aos-delay="100">
        <Link to="/case-studies"> <button className="btn btn-secondary text-forth"> Explore more </button> </Link>
      </div>
    </div>
  );
};

export default CaseStudiesSlider;
