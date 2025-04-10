import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CaseStudiesDetails = () => {
  const [myData, setMyData] = useState([]);

  const { id } = useParams();
  console.log(id);
  const idInt = parseInt(id);

  useEffect(() => {
    fetch("/caseStudies.json")
      .then((res) => res.json())
      .then((data) => {
        setMyData(data);
      });
  }, []);

  const item = myData.find((SingleItem) => SingleItem.id === idInt);
  console.log(item);

  const faq = item?.faqs;
  // console.log(faq);

  useEffect(() => {
    document.title = `${item?.title} - GoClova `;
  });

  return (
    <div>
      {/* page header */}
      <div className="py-16 bg-gray-200 text-center center flex-col gap-8">
        <div
          className=" text-gray-600"
          data-aos="fade-right"
          data-aos-delay="800"
        >
          <Link to="/"> Home </Link> /
          <Link to="/case-studies"> Case-stuides </Link> / {item?.title}
        </div>
        <h1 className="h1 text-primary-900 font-bold" data-aos="fade-up">
          {item?.title}
        </h1>

        <div className="center container" data-aos="fade-up">
          <img className="md:h-[400px] rounded-lg" src={item?.img} alt="" />
        </div>
      </div>

      <div className="container grid grid-cols-1 lg:grid-cols-2 py-10 md:gap-2 gap-10">
        <div className="col-span-1 flex flex-col gap-8 p-4" data-aos="fade-left">
          <h2 className="h2"> Summary </h2>
          <div>
            <p>Year:</p> <p className="font-bold"> {item?.year} </p>
          </div>
          <div>
            <p>Industry:</p> <p className="font-bold"> {item?.industry} </p>
          </div>
          <div>
            <p>Team Involvement:</p>
            <p className="font-bold"> {item?.team_involvement} </p>
          </div>

          <div>
            <p>Services we provided:</p>
            <ul className="font-bold list-disc">
              {item?.services_we_provided.map((services, index) => (
                <li key={index} className="font-bold">
                  {services}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-span-1 space-y-6" data-aos="fade-right">
          {/* Problem Section */}
          <div>
            <h2 className="h2 text-gray-800">The Problem</h2>
            <p className="text-gray-600">{item?.the_Problem}</p>
          </div>

          {/* Solution Section */}
          <div>
            <h2 className="h2 text-gray-800">The Solution</h2>
            <ul className="list-disc pl-5 space-y-2">
              {item?.the_solution?.map((solution, index) => (
                <li key={index}>
                  <strong>{solution.title}:</strong> {solution.details}
                </li>
              ))}
            </ul>
          </div>

          {/* Results Section */}
          <div>
            <h2 className="h2 text-gray-800">Results</h2>
            <p className="text-gray-600">{item?.the_results}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesDetails;
