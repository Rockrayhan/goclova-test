import React, { useEffect, useState } from "react";
import Blog from "./Blog";
import { Link } from "react-router-dom";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [visibleBlogs, setVisibleBlogs] = useState(6);

  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error("Error fetching blogs:", err));
  }, []);

  const featuredBlog = blogs.find((blog) => blog.featured);

  return (
    <div className="container">

      {/* Featured blog */}
      {featuredBlog && (
        <div className="flex flex-col md:flex-row my-8 p-6 border rounded-lg shadow-lg group">
         <img
            src={featuredBlog.img}
            alt={featuredBlog.title}
            className="md:w-1/3 object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
             data-aos="fade-right"
          />
          <div className="ml-6 flex flex-col justify-center gap-3"  data-aos="fade-left">
            <span className="text-sm text-gray-500">
              {featuredBlog.category}
            </span>
            <h3 className="text-2xl font-bold ">
              {featuredBlog.title} Featured blog{" "}
            </h3>
            {/* <p className="my-4">{featuredBlog.desc} Description </p> */}
             <Link to={`/blog/${featuredBlog.id}`}>
            <button className="btn btn-secondary text-forth"> See Details </button>
             </Link>
          </div>
        </div>
      )}


      {/* Blog Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-16"  data-aos="fade-up">
        {blogs.slice(0, visibleBlogs).map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </div>

      {/* "See More" Button */}
      {visibleBlogs < blogs.length && (
        <button
          className="btn btn-secondary text-forth px-20 block mx-auto mt-6"
          onClick={() => setVisibleBlogs(visibleBlogs + 6)}
        >
          See more
        </button>
      )}
    </div>
  );
};

export default AllBlogs;
