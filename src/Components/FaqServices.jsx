import React from "react";
import { Link } from "react-router-dom";

const FaqServices = () => {
  return (
    <div className="container py-16"  data-aos="fade-up">
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="col-span-1 ">
          <h2 className="section-title">
            We've got our focus laser-locked on what our customers value
          </h2>

          <div>
          <button className="btn btn-secondary">
            <Link> Request a service </Link>
          </button>
          </div>
        </div>
        <div className="flex flex-col  col-span-1">
          {/* FAQ 1 */}
          <div className="collapse bg-base-200 border-2 border-gray-300 group group-has-[input:checked]:border-blue-500">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium flex justify-between items-center group-has-[input:checked]:text-secondary">
              <span className="p-3">What services do you offer?</span>
              <div className="relative w-6 h-6">
                {/* Plus Icon */}
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
                {/* Minus Icon */}
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
              <p>
                We provide web development, mobile app development, SEO
                optimization, digital marketing, branding, and custom software
                solutions to enhance your online presence and business growth.
              </p>
            </div>
          </div>

          {/* FAQ 2 */}
          <div className="collapse bg-base-200 border-2 border-gray-300 group group-has-[input:checked]:border-blue-500">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium flex justify-between items-center group-has-[input:checked]:text-secondary">
              <span className="p-3">
                How long does it take to develop a website?
              </span>
              <div className="relative w-6 h-6">
                {/* Plus Icon */}
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
                {/* Minus Icon */}
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
              <p>
                The development time depends on the complexity of the project. A
                simple website may take 4-6 weeks, while more complex ones can
                take 8-12 weeks.
              </p>
            </div>
          </div>

          {/* FAQ 3 */}
          <div className="collapse bg-base-200 border-2 border-gray-300 group group-has-[input:checked]:border-blue-500">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium flex justify-between items-center group-has-[input:checked]:text-secondary">
              <span className="p-3">
                Do you offer ongoing support after the project is completed?
              </span>
              <div className="relative w-6 h-6">
                {/* Plus Icon */}
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
                {/* Minus Icon */}
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
              <p>
                Yes, we offer ongoing support and maintenance services to ensure
                your digital product remains updated, secure, and optimized for
                the best performance.
              </p>
            </div>
          </div>

          {/* FAQ 4 */}
          <div className="collapse bg-base-200 border-2 border-gray-300 group group-has-[input:checked]:border-blue-500">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium flex justify-between items-center group-has-[input:checked]:text-secondary">
              <span className="p-3">
                How much does a digital marketing campaign cost?
              </span>
              <div className="relative w-6 h-6">
                {/* Plus Icon */}
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
                {/* Minus Icon */}
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
              <p>
                The cost varies depending on the scope and type of campaign. We
                offer tailored pricing based on your needs, goals, and the
                platforms involved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqServices;
