import React, { useState } from "react";

const AllClients = () => {
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
    "/clients/client26.jpg",
    "/clients/client27.jpg",
    "/clients/client28.jpg",
    "/clients/client29.jpg",
    "/clients/client30.jpg",
    "/clients/client31.jpg",
    "/clients/client32.jpg",
  ];

  const [visibleCount, setVisibleCount] = useState(12);

  const handleSeeMore = () => {
    setVisibleCount((prevCount) => prevCount + 12);
  };

  return (
    <div className="container py-16">
      <div className="section-header text-center" data-aos="fade-up">
        <h2 className="section-title">
          The brands that are making a difference
        </h2>
        <p className="section-content">
          We feel grateful to have partnered with some of the world's prominent
          brands!
        </p>
      </div>

      <div className="flex justify-center" data-aos="fade-up">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 lg:gap-24">
          {clientLogos.slice(0, visibleCount).map((logo, index) => (
            <div key={index} className="col-span-1 ">
              <img src={logo} alt={`Client ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {visibleCount < clientLogos.length && (
        <div className="flex justify-center mt-16"  data-aos="fade-up">
          <button
            className="btn btn-secondary text-white px-12"
            onClick={handleSeeMore}
          >
            See more
          </button>
        </div>
      )}
    </div>
  );
};

export default AllClients;
