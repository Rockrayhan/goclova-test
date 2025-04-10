import React, { useEffect, useRef, useState } from "react";

const CustomPointer = () => {
  const pointerRef = useRef(null); // Ref for direct DOM manipulation
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    let mouseX = 0,
      mouseY = 0;
    let pointerX = 0,
      pointerY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.pageX; // Use pageX/pageY for document-wide positioning
      mouseY = e.pageY;
    };

    const animatePointer = () => {
      // Smooth interpolation
      pointerX += (mouseX - pointerX) * 0.1;
      pointerY += (mouseY - pointerY) * 0.1;

      if (pointerRef.current) {
        pointerRef.current.style.transform = `translate(${pointerX - 10}px, ${pointerY - 10}px)`;
      }

      requestAnimationFrame(animatePointer);
    };

    document.addEventListener("mousemove", handleMouseMove);
    animatePointer();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const hoverTargets = document.querySelectorAll(".hover-target, a, link, button");

    hoverTargets.forEach((target) => {
      target.addEventListener("mouseenter", () => setHovered(true));
      target.addEventListener("mouseleave", () => setHovered(false));
    });

    return () => {
      hoverTargets.forEach((target) => {
        target.removeEventListener("mouseenter", () => setHovered(true));
        target.removeEventListener("mouseleave", () => setHovered(false));
      });
    };
  }, []);

  return (
    <div
      ref={pointerRef}
      className={`custom-pointer ${hovered ? "hovered" : ""}`}
      style={{ position: "absolute", top: 0, left: 0 }}
    />
  );
};

export default CustomPointer;
