import React from "react";
import { GoDotFill } from "react-icons/go";
import { LiaAngleRightSolid } from "react-icons/lia";
//import { FaAngleRight } from "react-icons/fa";

const Sidebar = ({ isOpen, setisOpen }) => {

  
  return (
    <div className="flex">
      {/*desktop*/}
      <div className=" hidden md:flex flex-col w-[18%] h-screen   space-y-4 fixed border border-[#0000001a] border-r-1 border-t-0 overflow-y-auto scrollbar-hide ">
        <section
          className=" md:flex md:flex-col md:justify-center 
        
          left-0 top-0 w-full h-auto mt-6"
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
              <div className="md:font-inter md:text-lg md:font-normal md:h-9 md:w-[180px] md:flex md:gap-1 md:items-center md:cursor-pointer md:mt-1  md:transition md:duration-300 md:ease-in-out  md:hover:bg-hover md:hover:translate-x-1 py-2 px-10">
                <GoDotFill className="md:text-[rgba(0,0,0,0.2)] md:text-xs " />
                <span>Overview</span>
              </div>
              <div className="md:flex md:items-center md:text-lg md:font-normal md:font-inter md:h-9 md:w-45 md:cursor-pointer md:transition md:duration-300 md:ease-in-out md:mt-1 md:hover:bg-hover md:hover:translate-x-1 py-2 px-10">
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
          <h3 className=" md:mt-[23px] md:mr-[4px] md:mb-[4px]  md:w-[180px] md:h-[28px] md:text-lg md:font-normal md:font-inter md:leading-[20px] md:underline md:decoration-skip-none md:text-[rgba(0,0,0,0.4)]">
            Dashboards
          </h3>
          <div className="flex flex-col pl-5">
            <div className="md:flex md:items-center md:gap-3 md:cursor-pointer md:transition md:duration-300 md:ease-in-out md:mt-1 md:text-lg md:font-normal md:font-inter md:h-9 md:w-[40px] md:hover:bg-[rgba(0,0,0,0.04)] md:hover:rounded md:hover:translate-x-1">
              <GoDotFill className=" md:text-[rgba(0,0,0,0.2)] md:text-lg md:font-inter md:hover:text-black" />
              <img
                src="../Image/overview.png"
                alt="overview"
                className="w-8 h-8"
              />
              <span>Overview</span>
            </div>
            <div className="md:flex md:items-center md:gap-3 md:cursor-pointer md:transition md:duration-300 md:ease-in-out md:mt-1 md:text-lg md:font-normal md:font-inter md:h-9 md:w-40 md:hover:bg-[rgba(0,0,0,0.04)] md:hover:rounded md:hover:translate-x-1 ">
              <LiaAngleRightSolid className=" md:text-[rgba(0,0,0,0.2)] md:text-lg font-inter md:hover:text-black" />
              <img
                src="../Image/usermanagem.png"
                alt="usermanagem"
                className="w-8 h-8"
              />
              <span className="whitespace-nowrap">User Mgmt</span>
            </div>
            <div className="md:flex md:items-center md:gap-3 md:cursor-pointer md:transition md:duration-300 md:ease-in-out md:mt-1 md:text-lg md:font-normal md:font-inter md:h-9 md:w-40 md:hover:bg-[rgba(0,0,0,0.04)] md:hover:rounded md:hover:translate-x-1 ">
              <LiaAngleRightSolid className=" md:text-[rgba(0,0,0,0.2)] md:text-lg md:font-inter md:hover:text-black" />
              <img
                src="../Image/listing.png"
                alt="listing"
                className="w-8 h-8"
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
          <h3 className=" md:mt-[23px] md:mr-[4px] md:mb-[4px]  md:w-[180px] md:h-[28px] md:text-lg md:font-normal md:font-inter md:leading-[20px] md:underline md:decoration-skip-none md:text-[rgba(0,0,0,0.4)]">
            Reports
          </h3>
          <div>
            <div className="md:flex md:items-center md:gap-3 md:cursor-pointer md:transition md:duration-300 md:ease-in-out md:mt-1 md:text-lg md:font-normal md:font-inter md:h-9 md:w-40 md:hover:bg-[rgba(0,0,0,0.04)] md:hover:rounded md:hover:translate-x-1 ">
              <LiaAngleRightSolid className=" md:text-[rgba(0,0,0,0.2)] md:text-lg md:font-inter md:hover:text-black" />
              <img
                src="../Image/IdentificationBadge.png"
                alt="IdentificationBadge"
                className="w-8 h-8"
              />
              <span>Flagged</span>
            </div>
            <div className="">
              <div
                className=" 
              md:flex  md:gap-1 md:cursor-pointer md:transition md:duration-300 md:ease-in-out md:mt-1 md:h-9 md:w-40 md:hover:bg-[rgba(0,0,0,0.04)] md:hover:rounded md:hover:h-9 md:hover:w-45 md:rounded-t-3xl mr-28 
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
              <div className=" md:flex md:items-center md:gap-3 md:cursor-pointer md:transition md:duration-300 md:ease-in-out md:mt-1 md:h-9 md:w-40 md:hover:bg-[rgba(0,0,0,0.04)] md:hover:rounded md:hover:h-9 md:hover:w-45 md:rounded-t-3xl md:justify-center">
                <span className="md:py-2 md:px-0">Messages</span>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <div className="md:flex md:items-center md:gap-3 md:cursor-pointer md:transition md:duration-300 md:ease-in-out md:mt-1 md:text-lg md:font-normal md:font-inter md:h-9 md:w-40 md:hover:bg-[rgba(0,0,0,0.04)] md:hover:rounded md:hover:translate-x-1">
              <LiaAngleRightSolid className="  md:text-[rgba(0,0,0,0.2)] md:text-lg md:font-inter md:hover:text-black" />
              <img src="../Image/acct.png" alt="acct" className="w-8 h-8" />
              <span className="md:py-2 md:pl-0 md:pr-0">Account</span>
            </div>
            <div className="md:flex md:items-center md:gap-3 md:cursor-pointer md:transition md:duration-300 md:ease-in-out md:mt-1 md:text-lg md:font-normal md:font-inter md:h-9 md:w-40 md:hover:bg-[rgba(0,0,0,0.04)] md:hover:rounded md:hover:translate-x-1 ">
              <LiaAngleRightSolid className="md:text-[rgba(0,0,0,0.2)] md:text-lg md:font-inter md:hover:text-black" />
              <img
                src="../Image/cooperate.png"
                alt="cooperate"
                className="w-8 h-8"
              />
              <span className="md:py-2 md:pl-0 md:pr-0">Corporate</span>
            </div>
            <div className="md:flex md:items-center md:gap-3 md:cursor-pointer md:transition md:duration-300 md:ease-in-out md:mt-1 md:text-lg md:font-normal md:font-inter md:h-9 md:w-40 md:hover:bg-[rgba(0,0,0,0.04)] md:hover:rounded md:hover:translate-x-1 ">
              <LiaAngleRightSolid className="  md:text-[rgba(0,0,0,0.2)] md:text-lg md:font-inter md:hover:text-black" />
              <img src="../Image/blog.png" alt="blog" className="w-8 h-8" />
              <span className="md:py-2 md:pl-0 md:pr-10">Blog</span>
            </div>
            <div className="md:flex md:items-center md:gap-3 md:cursor-pointer md:transition md:duration-300 md:ease-in-out md:mt-1 md:text-lg md:font-normal md:font-inter md:h-9 md:w-40 md:hover:bg-[rgba(0,0,0,0.04)] md:hover:rounded md:hover:translate-x-1 ">
              <LiaAngleRightSolid className="  md:text-[rgba(0,0,0,0.2)] md:text-lg md:font-inter md:hover:text-black" />
              <img src="../Image/social.png" alt="social" className="w-8 h-8" />
              <span className="md:py-2 md:pl-0 md:pr-10">Social</span>
            </div>
          </div>
        </section>
        <div className="md:flex md:text-base md:font-normal md:ml-8 md:items-center md:gap-3 mb-8 ">
          <img
            src="../Image/Group 15 1.png"
            alt="Prelura"
            className="md:w-9 md:h-9"
          />
          <div>
            <p>Prelura 2025</p>
          </div>
        </div>
      </div>

      {/*mobile */}
    </div>
  );
};

export default Sidebar;
