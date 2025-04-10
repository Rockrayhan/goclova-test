import React, { useEffect, useState } from "react";
import Blog from "./Blog";


const FeaturedBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/blogs.json");
        const data = await response.json();

        if (Array.isArray(data)) {
          setBlogs(data.slice(0, 3)); // Only take the first 3 blogs
        } else {
          console.error("Invalid data format:", data);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="py-16">
      <h2 className="h2 text-center" data-aos="fade-right">Featured Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container my-16 "  data-aos="fade-up"  data-aos-delay="100">
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedBlogs;
