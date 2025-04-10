import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service, aosEffect }) => {
  // console.log(service);
  const { id, title, short_desc } = service;
  return (
    <div>
      <div className="service-card bg-black relative overflow-hidden group" data-aos={aosEffect}>
        {/* Card Body */}
        <div className="p-5">
          <h3 className="text-2xl mt-3">{title}</h3>
          <hr className="w-1/5 mt-3 border-t-2 border-secondary" />
          <p className="mt-5">{short_desc}</p>
        </div>

        {/* Card Footer (Color changes on hover) */}
        <div className="border-t border-gray-600 absolute bottom-0 w-full p-4 transition-colors duration-300 group-hover:bg-secondary">
          <Link className="flex gap-2 items-center group" to={`/service/${id}`}>
            <span> Build & Launch</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 transition-transform duration-300 group-hover:translate-x-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
