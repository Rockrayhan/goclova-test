import React from "react";

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Sezedul Islam",
      role: "Founder & CEO",
      image: "/images/team/ceo.jpg",
    },
    {
      name: "Ashik Ahmed",
      role: "Business Manager",
      image: "/images/team/user.png",
    },
    {
      name: "Ahsan Jannat",
      role: "Web Developer",
      image: "/images/team/ahsan.jpg",
    },
    {
      name: "Akash Biswas",
      role: "Web Developer",
      image: "/images/team/akash.png",
    },
    {
      name: "Khayrul Alam",
      role: "Jr. Web Developer",
      image: "/images/team/user.png",
    },
    {
      name: "Sudip Sen Gupta",
      role: "Brand Designer",
      image: "/images/team/user.png",
    },
    {
      name: "Mahamud Hassan",
      role: "SEO Specialist",
      image: "/images/team/user.png",
    },


  ];

  return (
    <div className="bg-primary text-forth md:py-32 py-24">
      <div className="mx-10">
        <div className="mb-10 md:mb-24" data-aos="fade-up">
          <h2 className="h2 text-forth">Shaping the Future with Global Expertise.</h2>
          <p className="text-forth">
            Behind every great product is a team driven by curiosity and
            innovation. Our global team brings diverse experiences and
            perspectives to solve complex challenges. We approach every project
            with care, creativity, and a commitment to excellence. Together,
            we're shaping solutions that impact millions around the world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 center" data-aos="fade-right">
            <div>
              <h3 className="h3 "> The Team </h3>
              <p>Bringing experience and capabilities from around the globe.</p>
            </div>
          </div>

          <div
            className="col-span-3 border border-secondary p-5 rounded-lg"
            data-aos="fade-left"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-lg shadow-secondary transition-all duration-300 shadow-sm"
                >
                  <img
                    className="w-12 h-12 rounded-full object-cover"
                    src={member.image}
                    alt={member.name}
                    onError={(e) => (e.target.src = "/images/team/user.png")} // Fallback Image
                  />
                  <div>
                    <h6 className="text-lg font-medium">{member.name}</h6>
                    <small className="text-gray-200">{member.role}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
