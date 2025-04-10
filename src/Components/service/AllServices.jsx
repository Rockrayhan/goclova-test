import React, { useEffect, useState } from "react";
import Service from "./service";


const AllServices = () => {
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
    <div>
      <div className="container section-header"  data-aos="fade-up">
        <h1 className="section-title">
          Our way of making a positive impact
        </h1>

        <p className="section-content">
          We're the tech experts behind innovative digital and technology
          solutions that will make your brand stand out! Let us be your guides
          in achieving your boldest business objectives.
        </p>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 container my-16 p-10 text-forth">
        {services.map((service, index) => (
          <Service 
          key={service.id} 
          service={service}
          aosEffect={index % 2 === 0 ? "fade-right" : "fade-left"}
          />
        ))}
      </div>
    </div>
  );
};

export default AllServices;
