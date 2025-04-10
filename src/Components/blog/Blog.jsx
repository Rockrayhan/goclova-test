import React from "react";
import { Link } from "react-router-dom";

const Blog = (props) => {
  const { id, title, img, desc, author, category } = props.blog;
  return (
    <div>
        <Link to={`/blog/${id}`}>
        <div className="card card-compact bg-base-100 md:w-96 shadow-xl cursor-pointer group">
        <figure className="shadow-sm overflow-hidden">
          <img
            className="md:h-[315px] md:w-[525px] object-cover transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
            src={img}
            alt={title}
          />
        </figure>
        <div className="card-body h-36">
          <span> {category} </span>
          <h2 className="card-title hover:underline hover:text-secondary transition-colors duration-200 delay-150 ">{title} </h2>
        </div>
      </div>
        </Link>
    </div>
  );
};

export default Blog;
