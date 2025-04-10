import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="py-16 bg-gray-200">
      <div className="container">
        <div className="center flex-col gap-8" data-aos="fade-up">
          <h2 className="section-title"> Why we're the top pick </h2>
          <p className="section-content text-center">
            We're not just marketers; we're digital magicians who turn data into
            insights, ideas into strategies and
            <br />
            clicks into customers. With us, your success isn't a goal; it's a
            guarantee.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 py-16 gap-6 place-items-center" data-aos="fade-up">
          <div className="card bg-forth text-primary md:w-96 border-t-2 border-secondary col-span-1 mx-auto">
            <div className="card-body text-center">
              <h2 className="text-center text-2xl">The Trustworthy Choice</h2>
              <p className="section-content">
                We get the urgency of our clients, and that's why we've honed
                our process to be a well-oiled machine. It's how we consistently
                deliver exceptional results, always right on time.
              </p>
            </div>
          </div>

          <div className="card bg-forth text-primary md:w-96 border-t-2 border-secondary col-span-1 mx-auto">
            <div className="card-body text-center">
              <h2 className="text-center text-2xl">Experts</h2>
              <p className="section-content">
                We've got a team of certified experts who are your ticket to
                flexible platforms. We'll help you choose systems that let you
                make modifications with ease. No more tech headaches for you!
              </p>
            </div>
          </div>

          <div className="card bg-forth text-primary md:w-96 border-t-2 border-secondary col-span-1 mx-auto">
            <div className="card-body text-center">
              <h2 className="text-center text-2xl">Adaptability</h2>
              <p className="section-content">
                Just like fingerprints, no two clients are the same. We're the
                Sherlock Holmes of adapting and addressing your unique needs
                when it comes to brand marketing and communications.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
