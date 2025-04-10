import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Force scroll to top even if navigating to the same page
    window.scrollTo(0, 0);
  }, [pathname]); 

  return null;
};

export default ScrollToTop;
