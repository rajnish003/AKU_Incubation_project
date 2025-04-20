import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// ✅ Combined array with content
const contentData = [
  {
    name: "Who We Are",
    description:
      "The Aryabhatta Knowledge University Incubation Centre is a dynamic hub designed to nurture groundbreaking ideas, support ambitious entrepreneurs, and foster innovation. We provide startups, visionaries, and early-stage businesses with the resources, mentorship, and infrastructure they need to thrive in today's competitive ecosystem.",
    description2: "",
    image:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Why Choose Us?",
    sections: [
      {
        heading: "Comprehensive Support:",
        points: [
          "From idea validation to market entry, we guide you at every stage of your journey.",
        ],
      },
      {
        heading: "Mentorship: ",
        points: [
          "Work with industry leaders, seasoned entrepreneurs, and domain experts to refine your vision.",
        ],
      },
      {
        heading: "State-of-the-Art Facilities: ",
        points: [
          "Co working spaces, Computer labs, Media Lab and meeting rooms",
        ],
      },
      {
        heading: "Funding Opportunities: ",
        points: [
          "Connect with angel investors, venture capitalists, and funding networks to accelerate your growth.",
        ],
      },
      {
        heading: "Networking & Collaboration:  ",
        points: [
          "Be part of a thriving community of innovators, startups, and partners.",
        ],
      },
    ],
    image:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "What We Offer",
    sections: [
      {
        heading: "1.	Startup Incubation:",
        points: [
          "Tailored programs for startups, including training, strategy development, and business model validation.",
        ],
      },
      {
        heading: "Mentorship Programs: ",
        points: [
          "Expert guidance to overcome challenges and scale your business.",
        ],
      },
      {
        heading: "Workspaces:  ",
        points: [
          "Affordable, modern, and fully equipped workspaces to support your team's productivity.",
        ],
      },
      {
        heading: "Workshops & Events: ",
        points: [
          "Regularly organized boot camps, seminars, and networking events to expand your knowledge and connections.",
        ],
      },
      {
        heading: "Funding Assistance:   ",
        points: [
          "Support in crafting pitch decks and connecting with potential investors.",
        ],
      },
    ],
    image:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Establishment of Incubation Centre at the Aryabhatta Knowledge University",
    description:
      "Through an e-mail dated 10.02.2023 received from Startup Support Unit, Department of Industries, Govt. of Bihar, appointment of Nodal Officer was requested for providing all relevant information and communication regarding startups, handholding and related activities.",
    description2:
      "For the establishment of Incubation Centre at Aryabhatta Knowledge University, Patna, Dr. Manisha Prakash, Assistant Professor, School of Journalism and Mass Communication was nominated as Nodal Officer vide memo no. 012/Acad/04-39/AKU/2024-1297 date 13.03.2024.",
    image:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
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
    <div
      className="w-full"
      style={{
        position: "relative",
        zIndex: 100,
        background: "#fff",
      }}
    >
      {contentData.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          } mx-auto shadow-lg rounded-lg overflow-hidden px-6 md:px-16 py-10 gap-8 justify-around ${
            index % 2 === 0 ? "bg-white" : "bg-[#f2f0f0]"
          }`}
        >
          {/* Image Section */}
          <div className="w-full md:w-1/3" data-aos="fade-right">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Content Section */}
          <div className="w-full md:w-2/4 p-6 gap-2" data-aos="fade-left">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6 bg-gray-200 p-4 rounded-lg">
              {item.name}
            </h2>

            {item.description && (
              <p className="text-gray-700 leading-8 mt-4">{item.description}</p>
            )}
            {item.description2 && (
              <p className="text-gray-700 leading-8 mt-4">{item.description2}</p>
            )}

            {/* Sections with headings */}
            {item.sections && (
              <div className="space-y-6 mt-6">
                {item.sections.map((section, idx) => (
                  <div key={idx}>
                    <h3 className="text-xl font-semibold text-orange-600 mb-2">
                      {section.heading}
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 text-base">
                      {section.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Flat points list fallback */}
            {item.points && (
              <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg mt-6">
                {item.points.map((point, idx) => (
                  <li key={idx} className="leading-7">
                    {point}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeAbout;
