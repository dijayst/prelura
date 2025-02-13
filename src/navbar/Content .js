import React, {  useState } from "react";
import { Overview } from "./Data";
import Barchart from "../Chart/Barchart";
import Piechart from "../Chart/Piechart";
import Linechart from "../Chart/Linechart";
import { GoDotFill } from "react-icons/go";
import { LiaAngleRightSolid } from "react-icons/lia";
import { IoIosArrowDown } from "react-icons/io";

import Notification from "./Notification";

function Content({ isOpen, setIsOpen, toggleDarkMode, darkMode }) {
  const [hoveredDigits, setHoveredDigits] = useState({});

  const handleMouseEnter = (cardIdx, digitIdx) => {
    setHoveredDigits((prev) => ({
      ...prev,
      [cardIdx]: { ...prev[cardIdx], [digitIdx]: true },
    }));
  };

  const handleMouseLeave = (cardIdx, digitIdx) => {
    setHoveredDigits((prev) => ({
      ...prev,
      [cardIdx]: { ...prev[cardIdx], [digitIdx]: false },
    }));
  };

  console.log(isOpen);

  // Apply theme on mount
  //md:w-[calc(100%-18.2%)]
  console.log("Menu clicked, isOpen:", !isOpen);

  console.log(onclick);
  return (
    <div className="relative flex  flex-grow xl:ml-[18.2%]  w-full m-0 p-0   flex-col md:flex-row dark:bg-gray-900  bg-white md:min-h-screen ">
      <div className="xl:w-[77%]  w-full   md:overflow-y-scroll no-scrollbar md:scrollbar-hide md:h-screen  md:overflow-x-hidden">
        <section
          className={`border border-[#0000001a] border-r-0 border-t-0  flex w-full pr-8 md:pl-8 pl-2 justify-between 
            ${darkMode ? "border-[#FFFFFF26]" : "border-[#0000001a]"}
            `}
        >
          <div className="flex  gap-2 m-[20px_8px_2px_8px] ">
            <div
              className="h-10 w-10 
                block 
                 cursor-pointer  items-center"
              onClick={() => setIsOpen(!isOpen)}
            >
              <img src="/Image/Icon.png" alt="star" className="w-5 h-5 " />
            </div>
            <img src="/Image/star.png" alt="star" className="w-5 h-5" />

            <div className=" md:gap-2 h-7   hidden md:flex">
              <h1
                className={`transition-transform md:duration-300 md:ease md:hover:translate-x-2  ${
                  darkMode ? "text-[#FFFFFF66]" : "text-[#00000066]"
                }
            `}
              >
                Dashboards
              </h1>
              <p>/</p>
              <h2
                className={`
                transition-transform
                duration-300
                ease
                hover:translate-x-2
                text-sm ${darkMode ? "text-[#FFFFFF]" : "text-black"}
            `}
              >
                Default
              </h2>
            </div>
          </div>
          <div className="flex  h-7 md:gap-2 m-[20px_8px_2px_28px] items-center">
            <div
              className={`  search-input  px-[.8rem]   h-[2.5rem] rounded-[9px] md:flex hidden  items-center w-full ${
                darkMode ? "bg-[#FFFFFF1A]" : "bg-gray-100 "
              }
            `}
            >
              <div className="image-container">
                <img
                  src={"/Image/search.png"}
                  alt="search-icon"
                  width={20}
                  height={20}
                />
              </div>
              <input
                type="text"
                placeholder="Search"
                className={`px-2placeholder:text-white/40 bg-transparent border-none outline-none text-[16px]`}
              />
            </div>

            <div className="flex  items-center     toggle-section  justify-center gap-2">
              <div className="w-12 h-12 pt-3" onClick={toggleDarkMode}>
                <img
                  src={
                    darkMode ? "/Image/darkIcon (2).svg" : "/Image/darkmode.png"
                  }
                  alt="Icon"
                  className=" w-6 h-6 "
                />
              </div>
              <img
                src={
                  darkMode ? "/Image/darkIcon (3).svg" : "/Image/history.png"
                }
                alt="Icon"
                className=" w-6 h-6 
                "
              />
              <img
                src={darkMode ? "/Image/svgBell.svg" : "/Image/alarm.png"}
                alt="Icon"
                className="w-6 h-6 
                "
              />
            </div>
          </div>
        </section>

        {/**mobile navigation */}
        {isOpen && (
          <div
            id="sidebar"
            className={`fixed bottom-0 mr-[750px] w-[18%] h-full hidden bg-red-800 p-5 transition-transform  flex-col items-center  self-end py-8 mt-10 space-y-6 font-bold  sm:w-auto sm:self-center  right-6 drop-shadow-md ease-in-out duration-500  ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } md:hidden`}
          >
            <section
              className=" md:w-full md:flex md:flex-col md:justify-center mb-8
        
         left-0 top-0 w-full h-auto"
            >
              <div className="md:flex md:items-center md:gap-3 py-[1.4rem]">
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
                  <div className="md:font-inter md:text-lg md:font-normal md:h-9 md:w-[180px] md:flex md:gap-1 md:items-center md:cursor-pointer md:mt-1  md:transition md:duration-300 md:ease-in-out  md:hover:bg-hover md:hover:translate-x-1">
                    <GoDotFill className="md:text-[rgba(0,0,0,0.2)] md:text-xs " />
                    <span>Overview</span>
                  </div>
                  <div className="md:flex md:items-center md:text-lg md:font-normal md:font-inter md:h-9 md:w-45 md:cursor-pointer md:transition md:duration-300 md:ease-in-out md:mt-1 md:hover:bg-hover md:hover:translate-x-1">
                    <GoDotFill className="md:text-[rgba(0,0,0,0.2)] md:text-xs " />
                    <span>Listings</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Dashboards */}
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
                  <span>User Mgmt</span>
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
              className=" md:w-[180px] md:flex md:flex-col md:justify-center 
          m-0  w-full left-0 top-0 mb-48"
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
                <div
                  className=" 
              md:flex  md:gap-1 md:cursor-pointer md:transition md:duration-300 md:ease-in-out md:mt-1 md:h-9 md:w-40 md:hover:bg-[rgba(0,0,0,0.04)] md:hover:rounded md:hover:h-9 md:hover:w-45 md:rounded-t-3xl mr-28 
"
                >
                  <span className="md:py-2 md:px-14">Listings</span>
                </div>
                <div
                  className="  md:flex md:items-center md:gap-3 md:cursor-pointer md:transition md:duration-300 md:ease-in-out md:mt-1 md:h-9 md:w-40 md:hover:bg-[rgba(0,0,0,0.04)] md:hover:rounded md:hover:h-9 md:hover:w-45 ml-4
"
                >
                  <span className="md:py-2 md:px-14">Users</span>
                </div>
                <div className=" md:flex md:items-center md:gap-3 md:cursor-pointer md:transition md:duration-300 md:ease-in-out md:mt-1 md:h-9 md:w-40 md:hover:bg-[rgba(0,0,0,0.04)] md:hover:rounded md:hover:h-9 md:hover:w-45 md:rounded-t-3xl md:justify-center">
                  <span className="md:py-2 md:px-14">Messages</span>
                </div>
              </div>
              <div>
                <div className="md:flex md:items-center md:gap-3 md:cursor-pointer md:transition md:duration-300 md:ease-in-out md:mt-1 md:text-lg md:font-normal md:font-inter md:h-9 md:w-40 md:hover:bg-[rgba(0,0,0,0.04)] md:hover:rounded md:hover:translate-x-1">
                  <LiaAngleRightSolid className="  md:text-[rgba(0,0,0,0.2)] md:text-lg md:font-inter md:hover:text-black" />
                  <img src="../Image/acct.png" alt="acct" className="w-8 h-8" />
                  <span className="md:py-2 md:pl-0 md:pr-14">Account</span>
                </div>
                <div className="md:flex md:items-center md:gap-3 md:cursor-pointer md:transition md:duration-300 md:ease-in-out md:mt-1 md:text-lg md:font-normal md:font-inter md:h-9 md:w-40 md:hover:bg-[rgba(0,0,0,0.04)] md:hover:rounded md:hover:translate-x-1 ">
                  <LiaAngleRightSolid className="md:text-[rgba(0,0,0,0.2)] md:text-lg md:font-inter md:hover:text-black" />
                  <img
                    src="../Image/cooperate.png"
                    alt="cooperate"
                    className="w-8 h-8"
                  />
                  <span className="md:py-2 md:pl-0 md:pr-14">Corporate</span>
                </div>
                <div className="md:flex md:items-center md:gap-3 md:cursor-pointer md:transition md:duration-300 md:ease-in-out md:mt-1 md:text-lg md:font-normal md:font-inter md:h-9 md:w-40 md:hover:bg-[rgba(0,0,0,0.04)] md:hover:rounded md:hover:translate-x-1 ">
                  <LiaAngleRightSolid className="  md:text-[rgba(0,0,0,0.2)] md:text-lg md:font-inter md:hover:text-black" />
                  <img src="../Image/blog.png" alt="blog" className="w-8 h-8" />
                  <span className="md:py-2 md:pl-0 md:pr-14">Blog</span>
                </div>
                <div className="md:flex md:items-center md:gap-3 md:cursor-pointer md:transition md:duration-300 md:ease-in-out md:mt-1 md:text-lg md:font-normal md:font-inter md:h-9 md:w-40 md:hover:bg-[rgba(0,0,0,0.04)] md:hover:rounded md:hover:translate-x-1 ">
                  <LiaAngleRightSolid className="  md:text-[rgba(0,0,0,0.2)] md:text-lg md:font-inter md:hover:text-black" />
                  <img
                    src="../Image/social.png"
                    alt="social"
                    className="w-8 h-8"
                  />
                  <span className="py-2 pl-0 pr-14">Social</span>
                </div>
              </div>
            </section>
            <div className="flex text-base font-normal ml-8 md:items-center gap-3 mb-8">
              <img
                src="../Image/Group 15 1.png"
                alt="Prelura"
                className="w-9 h-9"
              />
              <div>
                <p>Prelura 2025</p>
              </div>
            </div>
          </div>
        )}

        <section className="m-[20px_28px_2px_28px] ">
          <div className="flex justify-between mb-2">
            <h1>Overview</h1>
            <span className="flex items-center gap-1">
              Today
              <IoIosArrowDown className=" text-[rgba(0,0,0,0.2)] text-sm font-inter hover:text-black justify-center text-center" />
            </span>
          </div>
          <div
            className="md:flex md:w-full md:min-h-[150px]  gap-6 md:flex-row 
            flex-wrap
          flex flex-col mb-8"
          >
            {Overview.map((notification, cardIdx) => (
              <div
                className="rounded-[16px] flex flex-col p-6 md:flex-[1_1_200px] gap-3 "
                key={cardIdx}
                style={{ backgroundColor: notification.color }}
              >
                <p
                  className="
                transition-transform
                duration-300
                ease
                hover:translate-x-2 font-inter font-normal text-[15px]
                "
                >
                  {notification.text}
                </p>
                <div
                  className="flex gap-[14px] h-9 items-center 
                  justify-between
"
                >
                  <div className="flex font-inter font-semibold text-[20px]">
                    {notification.Numberofproduct.split("").map(
                      (digit, digitIdx) => (
                        <div
                          key={digitIdx}
                          className="relative w-[12px] h-[30px] overflow-hidden flex items-center"
                          onMouseEnter={() =>
                            handleMouseEnter(cardIdx, digitIdx)
                          }
                          onMouseLeave={() =>
                            handleMouseLeave(cardIdx, digitIdx)
                          }
                        >
                          <span
                            className={`absolute transition-transform duration-300 ${
                              hoveredDigits[cardIdx]?.[digitIdx]
                                ? "-translate-y-full opacity-0"
                                : "translate-y-0 opacity-100"
                            }`}
                          >
                            {digit}
                          </span>
                          <span
                            className={`absolute transition-transform duration-300 ${
                              hoveredDigits[cardIdx]?.[digitIdx]
                                ? "translate-y-0 opacity-100"
                                : "translate-y-full opacity-0"
                            }`}
                          >
                            0
                          </span>
                        </div>
                      )
                    )}
                  </div>

                  {/*  <span className="block font-semibold text-black md:text-[1.75vw] text-[1.5rem]">
                    {" "}
                    {notification.Numberofproduct.split("").map(
                      (digit, digitIdx) => (
                        <span
                          className={`digit ${hovered ? "hovered" : ""}`}
                          onMouseOver={() => setHovered(true)}
                          onAnimationEnd={() => setHovered(false)}
                        >
                          {digit}
                        </span>
                      )
                    )}
                  </span>*/}

                  <div
                    className="flex md:gap-2 md:items-center
"
                  >
                    <p
                      className="
                transition-transform
                duration-300
                ease
                hover:translate-x-2 font-inter font-normal text-[14px]"
                    >
                      {notification.percentage}
                    </p>
                    <img
                      src={notification.arrow}
                      alt="Icon"
                      className="w-4 h-4"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="md:flex gap-7 md:flex-col mt-7 md:w-full ">
            <div
              className=" md:flex-row 
             gap-7 flex flex-col"
            >
              <div
                className={`md:w-[66%] md:h-[330px] 
                bg-[#f9f9fa] md:p-6 rounded-[16px] text-lg 
                
                w-full
                 ${darkMode ? "bg-[#FFFFFF0A]" : ""}`}
              >
                <div className="flex gap-4 font-semibold ">
                  <div className="font-inter font-normal text-[15px]">
                    Total Users
                  </div>
                  <div className="font-inter font-normal text-[15px]">
                    Total Listings
                  </div>
                  <div>|</div>
                  <div className="flex items-center gap-1.25 font-normal text-xs">
                    <div className="rounded-[16px] h-[6px] w-[6px] bg-black"></div>
                    Today
                  </div>
                  <div className="flex items-center gap-[5px] font-normal text-xs">
                    <div className="rounded-[16px] h-[6px] w-[6px] bg-[#AEC7ED]"></div>
                    This month
                  </div>
                </div>
                <Linechart />
              </div>

              <div
                className={`p-6 md:w-[30%] md:h-[330px] flex  flex-col bg-[#f9f9fa] rounded-[16px] font-serif text-lg font-normal  w-full !important  gap-4
 ${darkMode ? "bg-[#FFFFFF0A]" : ""}`}
              >
                <p className="md:transition-transform md:duration-300 md:ease group md:hover:translate-x-[10px] font-inter font-normal text-[15px]">
                  Traffic by Website
                </p>
                <div className="md:transition-transform md:duration-300 md:ease md:text-xs md:font-normal group md:hover:translate-x-[10px]">
                  <div class="flex gap-4 items-center">
                    <div>
                      <p>Google</p>
                    </div>
                    <div class="flex w-[80px] h-[34.33px] items-center gap-[2px]">
                      <div class="w-[25.33px] bg-[#000000]   h-[2.33px]"></div>
                      <div class="w-[25.33px] bg-[#00000066] h-[2.33px]"></div>
                      <div class="w-[25.33px] bg-[#0000001A] h-[2.33px]"></div>
                    </div>
                  </div>
                  <div class="flex gap-4 items-center">
                    <div>
                      <p>YouTube</p>
                    </div>
                    <div class="flex w-[80px] h-[34.33px] items-center gap-[2px]">
                      <div class="w-[25.33px] bg-[#000000]   h-[2.33px]"></div>
                      <div class="w-[25.33px] bg-[#00000066] h-[2.33px]"></div>
                      <div class="w-[25.33px] bg-[#0000001A] h-[2.33px]"></div>
                    </div>
                  </div>
                  <div class="flex gap-4 items-center">
                    <div>
                      <p>Instagram</p>
                    </div>
                    <div class="flex w-[80px] h-[34.33px] items-center gap-[2px]">
                      <div class="w-[25.33px] bg-[#00000066] h-[2.33px]"></div>
                      <div class="w-[25.33px] bg-[#0000001A] h-[2.33px]"></div>
                      <div class="w-[25.33px] bg-[#000000]   h-[2.33px]"></div>
                    </div>
                  </div>
                  <div class="flex gap-4 items-center">
                    <div>
                      <p>Pinterest</p>
                    </div>
                    <div class="flex w-[80px] h-[34.33px] items-center gap-[2px]">
                      <div class="w-[25.33px] bg-[#000000]   h-[2.33px]"></div>
                      <div class="w-[25.33px] bg-[#00000066] h-[2.33px]"></div>
                      <div class="w-[25.33px] bg-[#0000001A] h-[2.33px]"></div>
                    </div>
                  </div>
                  <div class="flex gap-4 items-center">
                    <div>
                      <p>Pinterest</p>
                    </div>
                    <div class="flex w-[80px] h-[34.33px] items-center gap-[2px]">
                      <div class="w-[25.33px] bg-[#000000]   h-[2.33px]"></div>
                      <div class="w-[25.33px] bg-[#00000066] h-[2.33px]"></div>
                      <div class="w-[25.33px] bg-[#0000001A] h-[2.33px]"></div>
                    </div>
                  </div>{" "}
                  <div class="flex gap-4 items-center">
                    <div>
                      <p>Facebook</p>
                    </div>
                    <div class="flex w-[80px] h-[34.33px] items-center gap-[2px]">
                      <div class="w-[25.33px] bg-[#000000]   h-[2.33px]"></div>
                      <div class="w-[25.33px] bg-[#00000066] h-[2.33px]"></div>
                      <div class="w-[25.33px] bg-[#0000001A] h-[2.33px]"></div>
                    </div>
                  </div>{" "}
                  <div class="flex gap-4 items-center">
                    <div>
                      <p>Twitter</p>
                    </div>
                    <div class="flex w-[80px] h-[34.33px] items-center gap-[2px]">
                      <div class="w-[25.33px] bg-[#000000]   h-[2.33px]"></div>
                      <div class="w-[25.33px] bg-[#00000066] h-[2.33px]"></div>
                      <div class="w-[25.33px] bg-[#0000001A] h-[2.33px]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="flex md:flex-row  
            gap-7 flex-col"
            >
              <div
                className={`font-serif md:w-[47.6%] md:h-[280px] bg-[#f9f9fa] md:rounded-[16px] p-6 text-lg font-semibold
                
w-[full]  ${darkMode ? "bg-[#FFFFFF0A]" : ""}`}
              >
                <Barchart />
              </div>
              <div
                className={`font-serif md:w-[47.6%] md:h-[280px] bg-[#f9f9fa] rounded-[16px] p-6 text-lg font-semibold
 ${darkMode ? "bg-[#FFFFFF0A]" : ""}`}
              >
                <h2 className="md:transition-transform md:duration-300 md:ease font-inter font-normal text-[15px] ">
                  Traffic by Location
                </h2>
                <Piechart />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Notification />
    </div>
  );
}

export default Content;