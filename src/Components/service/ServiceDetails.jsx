import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AppointmentSection from "../AppointmentSection";
import WhyChooseUs from "../WhyChooseUs";
import WorkingSteps from "../WorkingSteps";
import TestimonialSection from "../TestimonialSection";

const ServiceDetails = () => {
  const [myData, setMyData] = useState([]);

  const { id } = useParams();
  console.log(id);
  const idInt = parseInt(id);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => {
        setMyData(data);
      });
  }, []);

  const item = myData.find((SingleItem) => SingleItem.id === idInt);
  console.log(item);

  const faq = item?.faqs;
  // console.log(faq);

  useEffect(() => {
    document.title = `${item?.title} - GoClova`;
  });

  return (
    <div>
      <div className="py-16 bg-gray-200 text-center center flex-col gap-8">
        <div className=" text-gray-600" data-aos="fade-right" data-aos-delay="800">
          <Link to="/"> Home </Link> / <Link to="/services"> Services </Link> / 
          {item?.title}
        </div>
        <h1 className="h1" data-aos="fade-up">{item?.title}</h1>
        <p className="text-gray-600 section-content" data-aos="fade-up">{item?.short_desc}</p>

      <div className="center container">
        <img className="rounded-lg" src={item?.img} alt="" />
      </div>
      </div>

      <WhyChooseUs />

      <WorkingSteps item={item} />

      {/* faq section */}
      <section className="py-16 mt-10" data-aos="fade-up">
        <h2 className="text-center section-title">
           
          Frequently Asked Questions 
        </h2>

        <div className="container center flex-col py-10 md:w-3/5">
          {faq?.map((item, index) => (
            <div key={index} className="collapse bg-base-200 border-2 group group-has-[input:checked]:border-blue-500 ">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-medium flex justify-between items-center group-has-[input:checked]:text-secondary">
                <span className="p-3">{item.question}</span>
                {/* Plus and Minus Icons with Smooth Transition */}
                <div className="relative w-6 h-6">
                  {/* Plus Icon (visible when unchecked) */}
                  <svg
                    className="w-6 h-6 absolute inset-0 transition-opacity duration-200 opacity-100 group-has-[input:checked]:opacity-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  {/* Minus Icon (visible when checked) */}
                  <svg
                    className="w-6 h-6 absolute inset-0 transition-opacity duration-200 opacity-0 group-has-[input:checked]:opacity-100"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 12H4"
                    />
                  </svg>
                </div>
              </div>
              <div className="collapse-content">
                <p>{item.ans}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <AppointmentSection />

      <div className="text-primary">
        <TestimonialSection textColor="text-primary" />
      </div>
      
    </div>
  );
};

export default ServiceDetails;
