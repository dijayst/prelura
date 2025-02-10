import React, { useState } from "react";
import { Overview } from "./Data";
import Barchart from "../Chart/Barchart";
import Piechart from "../Chart/Piechart";
import Linechart from "../Chart/Linechart";

import { LiaAngleRightSolid } from "react-icons/lia";

import Notification from "./Notification";

function Content({ isOpen, setIsOpen,handlenav }) {
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
  return (
    <div
      className="flex   flex-grow md:ml-[18%] ml-0  pb-[200px]  gap-6 
    w-full m-0 p-0  bg-white "
    >
      <div className="w-[77%] bg-white ">
        <section className="border border-[#0000001a] border-r-0 border-t-0  flex w-full  justify-between">
          <div className="flex m-[20px_8px_2px_28px] gap-2 ">
            <div className="md:flex md:gap-2">
              <div
                className="md:h-5 md:w-5 
                
                block 
                 cursor-pointer  items-center"
                onClick={handlenav}
              >
                <img src="/Image/Icon.png" alt="star" className="w-5 h-5" />
              </div>
              <img
                src="/Image/star.png"
                alt="star"
                className="w-5 h-5
                
               "
              />
            </div>
            <div className="flex md:gap-2 h-7 items-center ">
              <h1 className="text-[#00000066] md:transition-transform md:duration-300 md:ease md:hover:translate-x-2">
                Dashboards
              </h1>
              <p>/</p>
              <h2
                className="text-black
                transition-transform
                duration-300
                ease
                hover:translate-x-2
                text-sm"
              >
                Default
              </h2>
            </div>
          </div>
          <div className="flex  h-7 gap-2 m-[20px_28px_20px_0px]">
            <div
              className={`search-input  px-[.8rem] bg-gray-100 h-[2.5rem] rounded-[9px] flex  items-center w-full`}
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

            <div className="flex gap-2 items-center">
              <img src="/Image/darkmode.png" alt="Icon" className=" w-6 h-6 " />
              <img
                src="/Image/history.png"
                alt="Icon"
                className=" w-6 h-6 
                "
              />
              <img
                src="/Image/alarm.png"
                alt="Icon"
                className="w-6 h-6 
                "
              />
            </div>
          </div>
        </section>

        <section className="m-[20px_28px_2px_28px] ">
          <div className="flex justify-between mb-2">
            <h1>Overview</h1>
            <span className="flex ">
              Today
              <LiaAngleRightSolid className=" text-[rgba(0,0,0,0.2)] text-sm font-inter hover:text-black justify-center text-center" />
            </span>
          </div>
          <div
            className="md:flex md:w-full md:min-h-[150px] gap-7 md:flex-row 
            flex-wrap
          flex flex-col mb-8"
          >
            {Overview.map((notification, cardIdx) => (
              <div
                className="rounded-[16px] md:flex md:flex-col md:p-6 md:flex-[1_1_200px] md:gap-3 "
                key={cardIdx}
                style={{ backgroundColor: notification.color }}
              >
                <p
                  className="
                transition-transform
                duration-300
                ease
                hover:translate-x-2"
                >
                  {notification.text}
                </p>
                <div
                  className="md:flex md:gap-[14px] md:h-9 md:items-center 
                  justify-between
"
                >
                  <div className="md:flex md:font-inter md:font-semibold md:text-[24px] ">
                    {[
                      notification.Numberofproduct1,
                      notification.Numberofproduct2,
                      notification.Numberofproduct3,
                      notification.Numberofproduct4,
                    ].map((digit, digitIdx) => (
                      <p
                        key={digitIdx}
                        onMouseEnter={() => handleMouseEnter(cardIdx, digitIdx)}
                        onMouseLeave={() => handleMouseLeave(cardIdx, digitIdx)}
                        className={hoveredDigits[cardIdx]?.[digitIdx] ? "" : ""}
                      >
                        {hoveredDigits[cardIdx]?.[digitIdx] ? "0" : digit}
                      </p>
                    ))}
                  </div>

                  <div
                    className="flex md:gap-2 md:items-center
"
                  >
                    <p
                      className="
                transition-transform
                duration-300
                ease
                hover:translate-x-2"
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

          <div className="md:flex gap-7 md:flex-col md:mt-7 md:w-full ">
            <div
              className=" md:flex-row 
             gap-7 flex flex-col"
            >
              <div
                className="md:w-[66%] md:h-[330px] 
                bg-[#f9f9fa] md:p-6 rounded-[16px] text-lg 
                
                w-full
"
              >
                <div className="md:flex md:gap-4 md:font-semibold ">
                  <div>Total Users</div>
                  <div className="font-normal">Total Listings</div>
                  <div>|</div>
                  <div className="md:flex md:items-center md:gap-1.25 md:font-normal md:text-xs">
                    <div className="md:rounded-[16px] md:h-[6px] md:w-[6px] md:bg-black"></div>
                    Today
                  </div>
                  <div className="md:flex md:items-center md:gap-[5px] md:font-normal md:text-xs">
                    <div className="md:rounded-[16px] md:h-[6px] md:w-[6px] bg-[#AEC7ED]"></div>
                    This month
                  </div>
                </div>
                <Linechart />
              </div>

              <div
                className="p-6 md:w-[30%] md:h-[330px] flex  md:flex-col bg-[#f9f9fa] rounded-[16px] md:font-serif md:text-lg font-normal  w-full !important flex-col gap-4
"
              >
                <p className="md:transition-transform md:duration-300 md:ease group md:hover:translate-x-[10px]">
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
                className="md:font-serif md:w-[47.6%] md:h-[280px] bg-[#f9f9fa] md:rounded-[16px] md:p-6 md:text-lg md:font-semibold
                
w-[full]"
              >
                <Barchart />
              </div>
              <div
                className="font-serif md:w-[47.6%] md:h-[280px] bg-[#f9f9fa] rounded-[16px] md:p-6 text-lg font-semibold
"
              >
                <h2 className="md:transition-transform md:duration-300 md:ease ">
                  Traffic by Location
                </h2>
                <Piechart />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Notification/>
    </div>
  );
}

export default Content;
