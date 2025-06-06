import React, { useState } from "react";
import { NavLink,useNavigate } from "react-router-dom";
import { HiMenuAlt3, HiX} from "react-icons/hi";
import {SlArrowDown, SlArrowUp } from "react-icons/sl";


const HeaderNavBar = () => {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const menus = [
    { name: "Home", link: "/" },
    { name: "About Us", 
      dropdown: [
        {name:"About BSFT",link:"/startup-bsft"},
        {name: "MoU With TIE",link:"/mou-with-tie"},
        { name: "Project Evaluation Team", link: "/project-evaluation-team" },
        { name: "IC AKU Team", link: "/ic-aku-team" },
      ], 
  },
    { name: "Incubation Program", 
      dropdown: [
      {name: "University Outreach ",link:"/university-outreach"},
      { name: "Nidhi Prayas", link: "/nidhi-prayas" },
      { name: "Nidhi-EIR", link: "/nidhi-eir" },
      { name: "SISF", link: "/sisf" },
      { name: "BioNEST-ICAKU", link: "/bionest-icaku" },
    ],  
  },
    {
      name: "Events", 
      dropdown: [
        {name: "Governing society",link:"/governing-society"},
        { name: "Project Evaluation Team", link: "/project-evaluation-team" },
        { name: "IC AKU Team", link: "/ic-aku-team" },
      ], 
    },
    {
      name: "Portfolio",
      dropdown: [
        { name: "MeitY-Scheme", link: "/MeitY-Scheme" },
        { name: "SISF Scheme", link: "/SISF-Scheme" },
        { name: "Nidhi EIR Scheme", link: "/nidhi-eir-scheme" },
        { name: "Nidhi Prayas Scheme", link: "/nidhi-prayas-scheme" },
      ],
    },
    { name: "Notification", dropdown: [
      { name: "Career", link: "/career" },
      { name: "Call For Proposal", link: "/call=for-proposal" },
      { name: "NIQ/Tender", link: "/niq-tender" },
    ],
   },
    { name: "Facilites", link: "/facilites" },
    { name: "Contacts", link: "/contactUS" },
  ];
   
  // navigate the Login Button
  const navigate = useNavigate();

   const ApplyHandler=()=>{
    navigate("/applynow");
   }

   const clickHandler=()=>{
    navigate("/");
   }
   

  return (
    <nav className="bg-white shadow-md"
    style={{
        position: "relative",  // Prevents particles from appearing inside
        zIndex: 100, // Ensures it's always on top
        background: "#fff",
      }}
    >
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between py-4">
        {/* Logo */}
        <button  
        onClick={clickHandler}
        >
        <img
            src="/logos/AKU_LOGO.png"
            alt="Logo"
            className="h-10 w-10 mb-2 md:mb-0 md:mr-3"
          />
        </button>
       
        {/* Hamburger Menu (Mobile) */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-3xl text-gray-800"
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8 items-center">
          {menus.map((menu, index) => (
           <li
           key={index}
           className="relative group"
           onMouseEnter={() => setOpenDropdown(index)}
           onMouseLeave={() => setOpenDropdown(null)}
         >
           {menu.dropdown ? (
             <>
               {/* Dropdown Button */}
               <button className="flex items-center justify-between w-full text-gray-800 hover:text-[#ffbf75] transition">
                 {menu.name}
                    {openDropdown === index ? (
                     <SlArrowUp className="ml-2" />
                     ) : (
                     <SlArrowDown className="ml-2" />
                      )}
                </button>
         
               {/* Always render dropdown, control visibility with CSS */}
               <ul
                 className={`absolute left-0 pt-2 w-56 bg-white shadow-lg rounded-lg border border-gray-200 z-50 transition-opacity duration-300 ${
                   openDropdown === index ? "opacity-100 visible" : "opacity-0 invisible"
                 }`}
               >
                 {menu.dropdown.map((item, subIndex) => (
                   <li key={subIndex}>
                     <NavLink
                       to={item.link}
                       className={({ isActive }) =>
                         `${
                           isActive ? "text-[#ffbf75] font-semibold" : "text-gray-700"
                         } block mx-1 mb-1 px-3 py-2 rounded-full hover:bg-[#fcebd4] transition-colors duration-200`
                       }
                     >
                       {item.name}
                     </NavLink>
                   </li>
                 ))}
               </ul>
             </>
           ) : (
             <NavLink
               to={menu.link}
               className={({ isActive }) =>
                 `${isActive ? "text-[#ffbf75] font-semibold" : "text-gray-800"} hover:text-[#ffbf75] transition`
               }
             >
               {menu.name}
             </NavLink>
           )}
         </li>
          ))}
        </ul>

        {/* Buttons (Signup/Login) */}
        <div className="hidden lg:flex space-x-4 ml-1">
          {/* <button 
            onClick={loginHandler}
          className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-100 transition">
            Login
          </button> */}
          <button 
          onClick={ApplyHandler}
          className="border border-orange-500 text-orange-500 px-4 py-2 rounded-md hover:bg-orange-300 hover:text-white transition font-semibold">
            Apply
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
     {/* Mobile Menu */}
{open && (
  <div className="lg:hidden bg-gray-100">
    
    <ul className="flex flex-col items-start px-6 py-4 space-y-4">
      {menus.map((menu, index) => (
        <li key={index} className="w-full">
          {menu.dropdown ? (
            <>
              {/* Dropdown Button */}
              <button
                onClick={() =>
                  setOpenDropdown(openDropdown === index ? null : index)
                }
                className="w-full text-left text-gray-800 hover:text-blue-500 transition"
              >
                {menu.name}
              </button>

              {/* Dropdown List (Mobile) */}
              {openDropdown === index && (
                <ul className="ml-4 mt-2 border-l-2 border-gray-300 pl-4 space-y-2">
                  {menu.dropdown.map((item, subIndex) => (
                    <li key={subIndex}>
                      <NavLink
                        to={item.link}
                        className="block text-gray-700 hover:text-blue-500 transition"
                        onClick={() => setOpen(false)} // Close menu on click
                      >
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </>
          ) : (
            <NavLink
              to={menu.link}
              className="text-gray-800 hover:text-blue-500 transition"
              onClick={() => setOpen(false)} // Close menu on click
            >
              {menu.name}
            </NavLink>
          )}
        </li>
      ))}
    </ul>

    <div className=" lg:flex space-x-4 ml-5 pb-2">
          {/* <button 
            onClick={loginHandler}
          className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-100 transition">
            Login
          </button> */}
          <button 
          onClick={ApplyHandler }
          className="border border-orange-500 text-orange-500 px-4 py-2 rounded-md hover:bg-orange-300 hover:text-white transition font-semibold">
            Apply
          </button>
    </div>
  </div>
)}
    </nav>
  );
};

export default HeaderNavBar;
