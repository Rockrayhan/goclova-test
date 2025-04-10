import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos"; // Import AOS


const AllCaseStudies = () => {
  const [items, setItems] = useState([]); // Store all items
  const [filteredItems, setFilteredItems] = useState([]); // Store filtered items
  const [categories, setCategories] = useState([]); // Store unique categories
  const [activeCategory, setActiveCategory] = useState("ALL"); // Track selected category

  // Fetch data once when the component loads
  useEffect(() => {
    fetch("/caseStudies.json")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setFilteredItems(data); // Show all items initially

        // Extract unique categories dynamically
        const uniqueCategories = [
          "ALL",
          ...new Set(data.map((item) => item.category)),
        ];
        setCategories(uniqueCategories);

        // Refresh AOS after data is loaded
        setTimeout(() => {
          AOS.refresh();
        }, 100);
      });
  }, []);

  // Filter items based on category
  const handleFilter = (category) => {
    setActiveCategory(category); // Update active category
    if (category === "ALL") {
      setFilteredItems(items); // Show all items
    } else {
      setFilteredItems(items.filter((item) => item.category === category)); // Show only matched category
    }
  };

  return (
    <div className="container mb-16 p-10"  data-aos="fade-up">
      {/* Dynamic Category Buttons */}
      <div className="center gap-2 md:gap-6 mb-10 ">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleFilter(category)}
            className={`border border-primary rounded-lg px-3 py-1 ${
              activeCategory === category ? "bg-primary text-white" : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Show Filtered Items */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="case-studies-card group flex justify-center"
          >
            <Link to={`/case-studies/${item.id}`}>
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-[300px] w-[500px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="py-2 h3 hover:text-secondary">{item.title}</h3>
              <div className="py-2 flex gap-2 flex-wrap">
                {item.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="border border-primary rounded-lg px-3 py-1 text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCaseStudies;
