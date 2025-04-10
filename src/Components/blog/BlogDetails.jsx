import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const BlogDetails = () => {
  const [myData, setMyData] = useState([]);

  const { id } = useParams();
  console.log(id);
  const idInt = parseInt(id);

  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => {
        setMyData(data);
      });
  }, []);

  const item = myData.find((SingleItem) => SingleItem.id === idInt);
  console.log(item);

  useEffect(() => {
    document.title = `${item?.title} - GoClova`;
  });

  return (
    <div>
      <div className="py-16 bg-gray-200 text-center center flex-col gap-3">
        <div
          className=" text-gray-600 my-3"
          data-aos="fade-right"
          data-aos-delay="800"
        >
          <Link to="/"> Home </Link> / <Link to="/blogs"> Blogs </Link> /
          {item?.title}
        </div>
        <h1 className="h1 text-primary-900 font-bold" data-aos="fade-up">
          {item?.title}
        </h1>
        <p className="text-gray-600" data-aos="fade-up">
          {item?.category}
        </p>

        <h6 className="text-gray-600 text-2xl" data-aos="fade-up">
          <h6 className="center gap-2 ">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </span>
            {item?.author}
          </h6>
        </h6>
      </div>

      <div className="center flex-col gap-6 container">
        <img className="rounded-lg md:h-[400px]" src={item?.img} alt="" />

        <div className="py-10">
          {item?.desc?.map((section, index) => (
            <div key={index}>
              <h3 className="h3 font-semibold mt-4" data-aos="fade-up">{section.header}</h3>
              <p className="section-content mt-2" data-aos="fade-up">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
