import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const CounterItems = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Ensures animation runs only once
        threshold: 0.9, // Triggers when 90% of the component is visible
      });

  return (
    <div ref={ref} className="mt-20" data-aos="fade-up" data-aos-delay="100">
      
      <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-32">

        <div className="flex flex-col center">
          <h2 className="h2 text-secondary font-semibold">
            {inView && <CountUp start={0} end={30} duration={7} />}+
          </h2>
          <h6 className="py-2"> Experts </h6>
          <hr className="w-1/6 md:w-4/6 border-secondary border-2" />
        </div>

        <div className="flex flex-col center">
          <h2 className="h2 text-secondary font-semibold">
            {inView && <CountUp start={0} end={15} duration={6} />}+
          </h2>
          <h6 className="py-2"> Years </h6>
          <hr className="w-1/6 md:w-4/6 border-secondary border-2" />
        </div>

        <div className="flex flex-col center">
          <h2 className="h2 text-secondary font-semibold">
            {inView && <CountUp start={0} end={500} duration={6} />}+
          </h2>
          <h6 className="py-2"> Projects </h6>
          <hr className="w-1/6 md:w-4/6 border-secondary border-2" />
        </div>
      </div>

    </div>
  );
};

export default CounterItems;
