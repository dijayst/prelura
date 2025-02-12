import React from "react";
import { GoDotFill } from "react-icons/go";
import { LiaAngleRightSolid } from "react-icons/lia";
//import { FaAngleRight } from "react-icons/fa";

const Sidebar = ({ isOpen, setisOpen, darkMode }) => {
  return (
    <div className="flex min-h-screen    ">
      {/*desktop*/}
      <div
        className={` hidden md:flex flex-col w-[18%] h-screen   space-y-6 fixed border border-b-1 border-r-1 border-l-0 border-t-0 overflow-y-scroll no-scrollbar scrollbar-hide px-4 dark:bg-gray-900  bg-white 
           ${darkMode ? "text-[#FFFFFF]" : ""}  ${
          darkMode ? "border-[#FFFFFF26]" : "border-[#0000001a]"
        }`}
      >
        <section
          className=" md:flex md:flex-col  
        
          left-0 top-0 w-full h-auto "
        >
          <div className="flex md:items-center gap-3 py-[1.4rem] ">
            <img
              src="../Image/Frame.png"
              alt="Prelura"
              className="w-12 h-12 md:rounded-full"
            />
            <h1>Prelura</h1>
          </div>

          {/* Favorites and Recent */}
          <div>
            <div className="md:w-[180px] md:h-6 md:flex md:gap-5 md:mb-2">
              <span
                className={
                  "md:text-[1rem] md:font-normal md:font-inter md:cursor-pointer md:transition md:duration-300 md:ease-in-out md:transform md:hover:translate-x-1 md:text-[rgba(0,0,0,0.4)] md:p-1 hover:bg-slate-100"
                }
              >
                Favorites
              </span>
              <span
                className={
                  "md:text-lg md:font-normal md:font-inter md:cursor-pointer md:transition md:duration-300 md:ease-in-out md:hover:bg-hover md:transform hover:translate-x-1 text-[rgba(0,0,0,0.2)] p-1"
                }
              >
                Recent
              </span>
            </div>
            <div>
              <div className="font-inter text-[16px] font-normal md:h-9 md:w-[180px] md:flex md:gap-1 items-center md:cursor-pointer md:mt-1  md:transition md:duration-300 md:ease-in-out  md:hover:bg-hover md:hover:translate-x-1 py-2 ">
                <GoDotFill className="md:text-[rgba(0,0,0,0.2)] md:text-xs " />
                <span>Overview</span>
              </div>
              <div className="flex items-center md:text-[16px] font-normal font-inter h-9 md:w-45 md:cursor-pointer md:transition md:duration-300 md:ease-in-out md:mt-1 md:hover:bg-hover md:hover:translate-x-1 py-2 ">
                <GoDotFill className="md:text-[rgba(0,0,0,0.2)] md:text-xs " />
                <span>Listings</span>
              </div>
            </div>
          </div>
        </section>
        <section
          className=" md:w-full md:flex md:flex-col md:justify-center 
         gap-2 w-full left-0 top-0"
        >
          <h3
            className={` md:mt-[23px] md:mr-[4px] md:mb-[4px]  md:w-[180px] md:h-[28px] md:text-lg md:font-normal md:font-inter md:leading-[20px]  md:decoration-skip-none md:text-[rgba(0,0,0,0.4)] ${
              darkMode ? "text-[#FFFFFF66]" : ""
            }`}
          >
            Dashboards
          </h3>
          <div className="flex flex-col ">
            <div className="md:flex md:items-center md:gap-3 md:cursor-pointer md:transition md:duration-300 md:ease-in-out md:mt-1 text-[15.5px] font-normal font-inter md:h-9 md:w-[40px] md:hover:bg-[rgba(0,0,0,0.04)] md:hover:rounded md:hover:translate-x-1">
              <GoDotFill className=" md:text-[rgba(0,0,0,0.2)] md:text-lg md:font-inter md:hover:text-black" />
              <img
                src="../Image/overview.png"
                alt="overview"
                className="w-6 h-6"
              />
              <span>Overview</span>
            </div>
            <div className="md:flex md:items-center md:gap-3 md:cursor-pointer md:transition md:duration-300 md:ease-in-out mt-1 text-[15.5px] font-normal font-inter md:h-9 md:w-40 md:hover:bg-[rgba(0,0,0,0.04)] md:hover:rounded md:hover:translate-x-1 ">
              <LiaAngleRightSolid className=" md:text-[rgba(0,0,0,0.2)] text-sm font-inter md:hover:text-black" />
              <img
                src="../Image/usermanagem.png"
                alt="usermanagem"
                className="w-6 h-6"
              />
              <span className="whitespace-nowrap">User Mgmt</span>
            </div>
            <div className="md:flex md:items-center md:gap-3 md:cursor-pointer md:transition md:duration-300 md:ease-in-out md:mt-1 text-[15.5px] font-normal font-inter md:h-9 md:w-40 md:hover:bg-[rgba(0,0,0,0.04)] md:hover:rounded md:hover:translate-x-1 ">
              <LiaAngleRightSolid className=" md:text-[rgba(0,0,0,0.2)] text-sm md:font-inter md:hover:text-black" />
              <img
                src="../Image/listing.png"
                alt="listing"
                className="w-6 h-6"
              />
              <span>Listings</span>
            </div>
          </div>
        </section>
        {/* Reports */}
        <section
          className=" md:w-[180px] flex md:flex-col md:justify-center 
          m-0  w-full left-0 top-0 mb-4"
        >
          <h3 className=" md:mt-[23px] md:mr-[4px] md:mb-[4px]  md:w-[180px] md:h-[28px] md:text-lg md:font-normal md:font-inter md:leading-[20px]  md:decoration-skip-none md:text-[rgba(0,0,0,0.4)]">
            Reports
          </h3>
          <div>
            <div className="md:flex md:items-center md:gap-3 md:cursor-pointer md:transition md:duration-300 md:ease-in-out md:mt-1 text-[15.5px] font-normal font-inter md:h-9 md:w-40 md:hover:bg-[rgba(0,0,0,0.04)] md:hover:rounded md:hover:translate-x-1 ">
              <LiaAngleRightSolid className=" md:text-[rgba(0,0,0,0.2)] text-sm md:font-inter md:hover:text-black" />
              <img
                src="../Image/IdentificationBadge.png"
                alt="IdentificationBadge"
                className="w-6 h-6"
              />
              <span>Flagged</span>
            </div>
            <div className="">
              <div
                className=" 
              md:flex  md:gap-1 md:cursor-pointer md:transition md:duration-300 md:ease-in-out md:mt-1 md:h-9 md:w-40 md:hover:bg-[rgba(0,0,0,0.04)] md:hover:rounded md:hover:h-9 md:hover:w-45 md:rounded-t-3xl mr-28 text-[15.5px] font-normal font-inter
"
              >
                <span className="py-2 px-14">Listings</span>
              </div>
              <div
                className="  md:flex md:items-center md:gap-3 md:cursor-pointer md:transition md:duration-300 md:ease-in-out md:mt-1 md:h-9 md:w-40 md:hover:bg-[rgba(0,0,0,0.04)] md:hover:rounded md:hover:h-9 md:hover:w-45 ml-4
"
              >
                <span className="py-2 px-10">Users</span>
              </div>
              <div className=" md:flex md:items-center md:gap-3 md:cursor-pointer md:transition md:duration-300 md:ease-in-out md:mt-1 md:h-9 md:w-40 md:hover:bg-[rgba(0,0,0,0.04)] md:hover:rounded md:hover:h-9 md:hover:w-45 md:rounded-t-3xl md:justify-center text-[15.5px] font-normal font-inter">
                <span className="md:py-2 md:px-0">Messages</span>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <div className="md:flex md:items-center md:gap-3 md:cursor-pointer md:transition md:duration-300 md:ease-in-out md:mt-1 text-[15.5px] font-normal font-inter md:h-9 md:w-40 md:hover:bg-[rgba(0,0,0,0.04)] md:hover:rounded md:hover:translate-x-1">
              <LiaAngleRightSolid className="  md:text-[rgba(0,0,0,0.2)] text-sm md:font-inter md:hover:text-black" />
              <img src="../Image/acct.png" alt="acct" className="w-6 h-6" />
              <span className="md:py-2 md:pl-0 md:pr-0">Account</span>
            </div>
            <div className="md:flex md:items-center md:gap-3 md:cursor-pointer md:transition md:duration-300 md:ease-in-out md:mt-1 text-[15.5px] font-normal font-inter md:h-9 md:w-40 md:hover:bg-[rgba(0,0,0,0.04)] md:hover:rounded md:hover:translate-x-1 ">
              <LiaAngleRightSolid className="md:text-[rgba(0,0,0,0.2)] text-sm md:font-inter md:hover:text-black" />
              <img
                src="../Image/cooperate.png"
                alt="cooperate"
                className="w-6 h-6"
              />
              <span className="md:py-2 md:pl-0 md:pr-0">Corporate</span>
            </div>
            <div className="md:flex md:items-center md:gap-3 md:cursor-pointer md:transition md:duration-300 md:ease-in-out md:mt-1 text-[15.5px] font-normal font-inter md:h-9 md:w-40 md:hover:bg-[rgba(0,0,0,0.04)] md:hover:rounded md:hover:translate-x-1 ">
              <LiaAngleRightSolid className="  md:text-[rgba(0,0,0,0.2)] text-sm md:font-inter md:hover:text-black" />
              <img src="../Image/blog.png" alt="blog" className="w-6 h-6" />
              <span className="md:py-2 md:pl-0 md:pr-10">Blog</span>
            </div>
            <div className="md:flex md:items-center md:gap-3 md:cursor-pointer md:transition md:duration-300 md:ease-in-out md:mt-1 text-[15.5px] font-normal font-inter md:h-9 md:w-40 md:hover:bg-[rgba(0,0,0,0.04)] md:hover:rounded md:hover:translate-x-1 ">
              <LiaAngleRightSolid className="  md:text-[rgba(0,0,0,0.2)] text-sm md:font-inter md:hover:text-black" />
              <img src="../Image/social.png" alt="social" className="w-6 h-6" />
              <span className="md:py-2 md:pl-0 md:pr-10">Social</span>
            </div>
          </div>
        </section>

       
          <div></div> <div></div> <div></div> <div></div>
          <div></div> <div></div> 
          
        
        <div className="md:flex md:text-base md:font-normal md:ml-8 md:items-center md:gap-3  mb-8 ">
          <img
            src="../Image/Group 15 1.png"
            alt="Prelura"
            className="w-6 h-6"
          />
          <div>
            <p>Prelura 2025</p>
          </div>
        </div>
        
          <div></div> <div></div> <div></div> 
        
      </div>
    </div>
  );
};

export default Sidebar;
//w-full pb-[4rem] md:px-[2rem] px-[1rem] bg-white  min-h-screen  