import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  const location = useLocation();

  const handleClick = (event) => {
    if (location.pathname === to) {
      event.preventDefault(); // Prevent reloading if already on the same page
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <NavLink
      to={to}
      onClick={handleClick}
      className={({ isActive }) => (isActive ? "active-link" : "")}
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
