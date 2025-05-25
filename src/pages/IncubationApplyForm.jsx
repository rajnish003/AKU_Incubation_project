import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';


const IncubationApplyForm = () => {
  const formRef = useRef(null);

  useEffect(() => {
    gsap.from(formRef.current, {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: 'power3.out',
    });
  }, []);


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-200 p-6">
      <div
        ref={formRef}
        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-2xl transition-all"
      >
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">Incubation Center Form</h2>
        <form className="space-y-5">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Startup Name</label>
            <input
              type="text"
              placeholder="Enter your startup name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Founder Name</label>
            <input
              type="text"
              placeholder="Enter founder name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Phone</label>
            <input
              type="tel"
              placeholder="Enter phone number"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Sector</label>
            <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option value="">Select Sector</option>
              <option>HealthTech</option>
              <option>EdTech</option>
              <option>AgriTech</option>
              <option>FinTech</option>
              <option>Others</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Description</label>
            <textarea
              rows="4"
              placeholder="Tell us about your startup"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default IncubationApplyForm;
