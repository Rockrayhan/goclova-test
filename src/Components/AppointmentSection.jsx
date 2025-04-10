import React from "react";
import { InlineWidget } from "react-calendly";

const AppointmentSection = () => {
  return (
    <div className="center bg-secondary py-16"  >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-24 w-full container pt-10" data-aos="fade-up">
        {/* Left Section */}
        <div className="lg:w-1/2 flex flex-col text-forth gap-10">
          <h2 className="mb-4 text-forth section-title font-semibold">
            Get started on your success with a free expert consultation
          </h2>
          <p className="mb-6 section-content text-forth">
            Ready to see how a web solution service agency can help you level
            up? Book a free consultation today!
          </p>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 h-full flex items-center justify-center">
          <div className="rounded-lg shadow-sm overflow-hidden w-full h-[600px] lg:h-[700px]">
            <InlineWidget
              url="https://calendly.com/khayrulalamdict/30min?hide_event_type_details=1&hide_gdpr_banner=1"
              styles={{
                height: "100%",
                width: "100%",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentSection;
