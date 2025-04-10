import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const testimonials = [
  {
    text: "This company is super cool. I recommended everyone to work with them, as they behave like friends rather than clients.",
    name: "Mr. Jaynul Abedin",
    position: "Former Chief Designer, BD Arts Master",
    img: "/images/client_face1.jpeg",
  },
  {
    text: "Working with them was an amazing experience. Their team is professional and friendly.",
    name: "Sarah Khan",
    position: "Marketing Head, Creative Solutions",
    img: "/images/client_face2.jpg",
  },
  {
    text: "Excellent service and great support. I highly recommend them for any digital solutions!",
    name: "John Doe",
    position: "CEO, Tech Innovators",
    img: "/images/client_face3.jpg",
  },
];

const TestimonialSection = ({ textColor }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 container py-16 md:my-10 gap-24">
      <div className="col-span-1" data-aos="fade-up">
        <h2 className={`section-title ${textColor}`}>
          See what our clients are saying about us!
        </h2>

        <button className="btn btn-secondary text-white px-10">
          <Link to="/services">Explore a service</Link>
        </button>
      </div>

      {/* slider content */}
      <div className="col-span-2" data-aos="fade-up" data-aos-delay="300">
        <Swiper
          ref={swiperRef}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          modules={[Navigation]}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <p className="text-2xl italic">"{testimonial.text}"</p>

              <div className="flex items-center gap-4 mt-5">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h6 className={`text-lg font-semibold ${textColor}`}>
                    {testimonial.name}
                  </h6>
                  <p className="text-sm text-gray-400">{testimonial.position}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="flex gap-5 mt-16">
          {/* left arrow */}
          <button ref={prevRef} className="px-4 py-2 bg-secondary rounded">
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

          {/* right arrow */}
          <button ref={nextRef} className="px-4 py-2 bg-secondary rounded">
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
    </div>
  );
};

export default TestimonialSection;
