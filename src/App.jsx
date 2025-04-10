import { Outlet } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import Header from "./Shared/Header";
import Footer from "./Shared/Footer";
// import CustomPointer from "./Shared/CustomPointer";
import CanvasCursor from "./Shared/CanvasCursor";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./Shared/ScrollToTop";



function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      // once: true, 
    });
// using set timeout is better for dynamic data
    setTimeout(() => {
      AOS.refresh();
    }, 1000);

  }, []);
  return (
    <>
    {/* <CustomPointer/> */}
    <CanvasCursor/>
      <Header />
      <ScrollToTop/>

      <div className="bg-forth min-h-screen">
      <Outlet />
      </div>
      
      <Footer />
    </>
  );
}

export default App;
