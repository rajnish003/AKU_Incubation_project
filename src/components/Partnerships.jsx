import React from "react";

const partnerships = [
  {
    name: "Industry Department, Government of Bihar",
    logo: "/logos/bihar-logo-red.png",
    url:"https://state.bihar.gov.in/industries/CitizenHome.html"
  },
  {
    name: "Bihar Startup Fund",
    logo: "/logos/bihar-startup-logo.png",
    url:"https://startup.bihar.gov.in/"
  },
  {
    name: "Zero Lab",
    logo: "/logos/zero-lab.jpeg",
    url:"https://iciitp.com/zerolab/"
  },
  {
    name: "CIMP-BIIF",
    logo: "/logos/CIMP_Logo.png",
    url:"https://cimp.ac.in/?pagelayer-template=about-us-startup-cell"
  },
  {
    name: "TIE",
    logo: "/logos/Tie-logo.png",
    url:"https://events.tie.org/Patna/events"
  },
];

const Partnerships = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6"
    style={{
      position: "relative",
      zIndex: 100,
      // background: "#fff",
    }}

    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold  text-orange-500">Our Partnerships</h2>
       <div className="flex items-center justify-center mb-8 mt-2">
       <div className="w-40 h-1.5 bg-[#6eb2fc]  rounded-lg"></div>
       </div>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {partnerships.map((partner, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center hover:shadow-lg transition-all duration-300"
            >
              <a href={partner.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-16 object-contain mb-4 hover:scale-105 transition-transform duration-200"
                />
              </a>
              <p className="text-center text-lg font-medium text-gray-700">
                {partner.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partnerships;
