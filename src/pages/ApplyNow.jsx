import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ApplyNow = () => {
    
    useEffect(() => {
        AOS.init({ duration: 1000, once: true, offset: 200 });
      }, []);
    
      const applicants = [
        "Aspiring entrepreneurs with disruptive ideas.",
        "Early-stage startups seeking structured support.",
        "Innovators looking for mentorship and funding.",
      ];
    
      return (
        <section
          className="w-full py-16 px-6 md:px-20 bg-gradient-to-br from-white to-[#f1dcdc]"
        >
          <div className="max-w-5xl mx-auto text-center" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-orange-500 mb-6">
              Who Can Apply?
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              We're open to individuals and teams who are ready to innovate and make an impact.
            </p>
            <ul className="grid gap-6 md:grid-cols-3">
              {applicants.map((item, index) => (
                <li
                  key={index}
                  className="bg-white border border-gray-200 p-6 rounded-xl shadow-lg transition transform hover:scale-105"
                  data-aos="zoom-in"
                  data-aos-delay={index * 150}
                >
                  <span className="block text-lg text-gray-800 font-medium leading-7">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 flex items-center content-center">
              <button className="px-4 sm:px-6 py-2 sm:py-3 text-white font-semibold rounded-full bg-gradient-to-r from-blue-500 to-teal-400 hover:scale-105 transition-all duration-300 shadow-lg text-sm sm:text-base md:text-lg" >
                Apply Now
              </button>
          </div>
        </section>
      );
    };
export default ApplyNow;
