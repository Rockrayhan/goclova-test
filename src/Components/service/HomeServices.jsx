import React, { useEffect, useState } from "react";
import Service from "./service";

const HomeServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("/services.json");
        const data = await response.json();

        if (Array.isArray(data)) {
          setServices(data);
        } else {
          console.error("Invalid data format:", data);
        }
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);
  return (
    <div className="text-forth py-16">
      <div className="container grid grid-cols-1 md:grid-cols-3 lg:gap-36">

        {/* left side */}
        <div className="col-span-1 py-8 h-fit sm:sticky sm:top-16 flex flex-col gap-8"  data-aos="fade-up">
          <h2 className="section-title text-forth">Solutions come in packs of services</h2>

          <p className="section-content  text-forth">
            That's why we have prepared some for you!
          </p>

         <div>
         <button className="btn btn-secondary text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            Download brushure
          </button>
         </div>
        </div>

    {/* right side */}
        <div className="col-span-2 py-8">
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-6">
            {services.map((service , index) => (
              <Service 
              key={service.id} 
              service={service} 
              aosEffect={index % 2 === 0 ? "fade-right" : "fade-left"}
              />
            ))}
          </div>
        </div>


      </div>
    </div>
  );
};

export default HomeServices;
