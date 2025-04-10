import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Blog from "./Pages/Blogs.jsx";
import CaseStudies from "./Pages/CaseStudies.jsx";
import Contact from "./Pages/Contact.jsx";
import Services from "./Pages/Services.jsx";
import ServiceDetails from "./Components/service/ServiceDetails.jsx";
import PageNotFound from "./Pages/PageNotFound.jsx";
import BlogDetails from "./Components/blog/BlogDetails.jsx";
import CaseStudiesDetails from "./Pages/CaseStudiesDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/blogs",
        element: <Blog/>
      },
      {
        path:"/blog/:id",
        element: <BlogDetails/>,
        loader: () => fetch('./blogs.json')
      },
      {
        path: "/services",
        element: <Services/>
      },
      {
        path:"/service/:id",
        element: <ServiceDetails/>,
        loader: () => fetch('./services.json')
      },
      {
        path: "/case-studies",
        element: <CaseStudies/>
      },
      {
        path:"/case-studies/:id",
        element: <CaseStudiesDetails/>,
        loader: () => fetch('./caseStudies.json')
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "*",
        element: <PageNotFound/>
      },
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
