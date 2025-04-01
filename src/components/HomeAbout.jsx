import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 
const datas = [
  {
    name: "Establishment of Incubation Centre at the Aryabhatta Knowledge University",
    description:
      "Through an e-mail dated 10.02.2023 received from Startup Support Unit, Department of Industries, Govt. of Bihar, appointment of Nodal Officer was requested for providing all relevant information and communication regarding startups, handholding and related activities. A letter was received from Mr. Pankaj Dixit, I.A.S., Director of Industry, Department of Industries, Govt. of Bihar regarding establishment of Incubation Centre at Aryabhatta Knowledge University (AKU), Patna to promote innovation and entrepreneurial ecosystem at AKU and surrounding areas." ,
      description2: "For the establishment of Incubation Centre at Aryabhatta Knowledge University, Patna, Dr. Manisha Prakash, Assistant Professor, School of Journalism and Mass Communication was nominated as Nodal Officer vide memo no. 012/Acad/04-39/AKU/2024-1297 date 13.03.2024.",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your image
  }
];

const HomeAbout = () => {


    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration
          once: true, // Ensures animation runs only once
          offset: 200, // Start animation when element is 200px in viewport
        });
      }, []);


  return (
    <div
    style={{
        position: "relative",  // Prevents particles from appearing inside
        zIndex: 100, // Ensures it's always on top
        background: "#fff",
      }}
      className="w-full "
    >
      {datas.map((data, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-center mx-auto bg-gray-100 shadow-lg rounded-lg overflow-hidden px-10 py-10 justify-around"

           //  Use fade-up for a better effect
        >
          {/* Left Side: Image */}
          <div className="w-full md:w-1/3"
          data-aos="fade-right"
          >
            <img
              src={data.image}
              alt="Incubation Centre"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          {/* Right Side: Text Content */}
          <div className="w-full md:w-2/4 p-6 ">
            <h2 className="text-3xl font-bold text-orange-400"
            data-aos="fade-left"
            >{data.name}</h2>
            <p className="text-gray-700 mt-11 leading-8"
            data-aos="fade-up"
            >{data.description}</p>
            <p className="text-gray-700 mt-4 leading-8"
            data-aos="fade-up"
            >{data.description2}</p>
          </div>
        </div>
      ))}

        <div>

        </div>


    </div>
  );
};

export default HomeAbout;
