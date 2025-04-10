import React from "react";

const OurBelives = () => {
  return (
    <div className="text-forth py-24 bg-primary">
      <div className="container grid lg:grid-cols-3 sm:grid-cols-1 lg:gap-36">
        {/* left side */}
        <div
          className="col-span-1 py-8 h-fit sm:sticky sm:top-16 flex flex-col gap-8">
          <h2 className="section-title text-forth">Our Belief</h2>

          <p className="section-content  text-forth">
            We believe digital marketing is a game-changer for businesses of all
            sizes, helping them connect with their audience and achieve success.
            That’s why we’re dedicated to empowering our clients with innovative
            strategies that drive real results.
          </p>
        </div>

        {/* right side */}
        <div className="col-span-2 py-10">
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-6">

            <div className="service-card bg-black relative overflow-hidden col-span-1 " data-aos="fade-right">
              <div className="p-5">
                <h3 className="text-2xl mt-3">
                  Cultivating Strong Connections
                </h3>
                <hr className="w-1/5 mt-3 border-t-2 border-secondary" />
                <p className="mt-10">
                  We prioritize meaningful relationships, built on trust,
                  transparency, and long-term collaboration.
                </p>
              </div>
            </div>

            <div className="service-card bg-black relative overflow-hidden col-span-1 mt-10" data-aos="fade-left">
              <div className="p-5">
                <h3 className="text-2xl mt-3"> Passion-Driven Excellence </h3>
                <hr className="w-1/5 mt-3 border-t-2 border-secondary" />
                <p className="mt-10">
                  Our love for digital innovation fuels our dedication to
                  crafting impactful solutions for our clients.
                </p>
              </div>
            </div>

            <div className="service-card bg-black relative overflow-hidden col-span-1 -mt-10" data-aos="fade-right">
              <div className="p-5">
                <h3 className="text-2xl mt-3"> Striving for Growth </h3>
                <hr className="w-1/5 mt-3 border-t-2 border-secondary" />
                <p className="mt-10">
                  We embrace continuous learning and improvement to deliver
                  cutting-edge strategies and solutions.
                </p>
              </div>
            </div>

            <div className="service-card bg-black relative overflow-hidden col-span-1 " data-aos="fade-left">
              <div className="p-5">
                <h3 className="text-2xl mt-3"> Commitment to Excellence </h3>
                <hr className="w-1/5 mt-3 border-t-2 border-secondary" />
                <p className="mt-10">
                  We stay true to our word, ensuring reliability, quality, and
                  results that exceed expectations.
                </p>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBelives;
