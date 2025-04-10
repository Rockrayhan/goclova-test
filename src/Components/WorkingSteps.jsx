import React from "react";

const WorkingSteps = ({ item }) => {
  console.log(item?.service_steps, "working steps");
  const WorkingSteps = item?.service_steps;
  let i = 1 ;
  return (
    <div className="bg-primary py-16 text-forth">
      <div className="container py-16" data-aos="fade-up">
        <div className="section-header">
          <h2 className="section-title text-forth">The way we do it</h2>

          <p>
            We take your ideas and infuse them with our tech-savvy expertise to
            create the blueprint for your digital masterpiece.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
          {WorkingSteps?.map((step, index) => (
            <div key={index} className="col-span-1 bg-black rounded-lg p-10 flex flex-col gap-4">

                <span className="bg-secondary rounded-full w-8 center p-1">
                    {i++}
                </span>
              <h3 className="text-2xl">{step.title}</h3>
              <p className="text-gray-300">{step.details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkingSteps;
