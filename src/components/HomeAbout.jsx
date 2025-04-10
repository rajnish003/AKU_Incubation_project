import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const datas = [
  {
    name: "Establishment of Incubation Centre at the Aryabhatta Knowledge University",
    description:
      "Through an e-mail dated 10.02.2023 received from Startup Support Unit, Department of Industries, Govt. of Bihar, appointment of Nodal Officer was requested for providing all relevant information and communication regarding startups, handholding and related activities.",
    description2:
      "For the establishment of Incubation Centre at Aryabhatta Knowledge University, Patna, Dr. Manisha Prakash, Assistant Professor, School of Journalism and Mass Communication was nominated as Nodal Officer vide memo no. 012/Acad/04-39/AKU/2024-1297 date 13.03.2024.",
    image:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const data2 = [
  {
    name: "Objectives of the Incubation Centre",
    points: [
      "Help entrepreneurs overcome obstacles like obtaining capital and enhancing business models.",
      "Assist entrepreneurs in starting a business venture with minimum risks.",
      "Transform innovative ideas into viable business propositions.",
      "Provide resources such as office equipment, lab facilities, and technological assistance.",
      "Offer mentorship with guidance from experienced entrepreneurs and business leaders.",
      "Facilitate networking with other entrepreneurs and potential investors.",
      "Ensure compliance with access to professional services from accountants and lawyers.",
      "Help secure financing from angel investors, government organizations, and other sources.",
    ],
    image:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const HomeAbout = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 200,
    });
  }, []);

  return (
    <div className="w-full bg-gray-200"
    
    style={{
      position: "relative",  // Prevents particles from appearing inside
      zIndex: 100, // Ensures it's always on top e3e1e1
      background: "#fff",
    }}


    >
      {datas.map((data, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row  mx-auto bg-white shadow-lg rounded-lg overflow-hidden px-6 md:px-16 py-10 gap-8 justify-around "
        > 
          {/* left Side: Image */}
           <div className="w-full md:w-1/3" data-aos="fade-right">
            <img
              src={data.image}
              alt="Incubation Centre"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Left Side: Text Content */}
          <div className="w-full md:w-2/4 p-6 " data-aos="fade-right">
            <h2 className="text-3xl font-bold text-orange-500 mb-4">{data.name}</h2>
            <p className="text-gray-700 leading-10 mt-8">{data.description}</p>
            <p className="text-gray-700  leading-10 mt-6">{data.description2}</p>
          </div>
        </div>
      ))}

      {/* Second Section: Incubation Centre Objectives */}
      {data2.map((item, index) => (
        <div key={index} className="w-full mx-auto">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 bg-[#f2f0f0] shadow-lg rounded-lg overflow-hidden p-6 md:p-10 justify-around">
            {/* Right Side: Image */}
            <div className="w-full md:w-1/3" data-aos="fade-left">
              <img
                src={item.image}
                alt="Objective"
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>

            {/* Left Side: Objectives */}
            <div className="w-full md:w-2/3 " data-aos="fade-right">
              <h2 className="text-4xl font-bold text-orange-500 mb-10 text-center md:text-left">{item.name}</h2>
              <ul className="list-disc list-inside space-y-4 text-gray-700 text-lg">
                {item.points.map((point, idx) => (
                  <li key={idx} className="leading-7">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeAbout;
