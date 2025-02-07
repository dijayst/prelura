import React, { useState } from "react";
import { Overview } from "./Data";
import Barchart from "../Chart/Barchart";
import Piechart from "../Chart/Piechart";
import Linechart from "../Chart/Linechart";
import Notification from "../navbar/Notification";

function Content({ isOpen, setIsOpen }) {
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
      className="md:flex   md:flex-grow md:ml-[18%] md:p-0  md:pb-20 ] md:w-[80%] gap-6
    w-full m-0 p-0 flex  bg-white"
    >
      <div
        className="md:w-[85%] 
      w-full p-6.5"
      >
        <section
          className="md:border md:border-[#0000001a] md:border-r-0 md:border-t-0 md:flex md:gap-[200px] 
        gap-[6px]"
        >
          <div className="md:flex md:m-[20px_8px_2px_28px] md:gap-2 md:h-7 md:w-[30%] md:items-center">
            <div className="md:flex md:gap-2">
              <div
                className="md:h-5 md:w-5
                 cursor-pointer flex items-center"
                onClick={() => setIsOpen(!isOpen)}
              >
                <img src="/Image/Icon.png" alt="star" />
              </div>
              <img
                src="/Image/star.png"
                alt="star"
                className="md:w-5 md:h-5 w-5 h-5"
              />
            </div>
            <div className="md:flex md:gap-2 h-7 md:items-center">
              <h1 className="md:text-[#00000066] md:transition-transform md:duration-300 md:ease md:hover:translate-x-2">
                Dashboardsgg
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
          <div className="md:flex md:gap-5 md:h-7 md:w-[316px] md:m-[20px_28px_20px_0px]   ">
            <div
              className={`search-input  px-[.8rem] bg-gray-100 h-[2.5rem] rounded-[9px] md:flex hidden items-center w-full`}
            >
              <div className="image-container w-[8rem]">
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
              <img
                src="/Image/darkmode.png"
                alt="Icon"
                className="md:w-6 md:h-6"
              />
              <img
                src="/Image/history.png"
                alt="Icon"
                className="md:w-6 md:h-6 
                "
              />
              <img
                src="/Image/alarm.png"
                alt="Icon"
                className="md:w-6 md:h-6
                "
              />
            </div>
          </div>
        </section>

        <section className="md:m-[20px_8px_2px_28px]">
          <h1>Overview</h1>

          <div
            className="md:flex md:w-full md:min-h-[150px] md:gap-7 md:flex-row flex-wrap
          flex flex-col"
          >
            {Overview.map((notification, cardIdx) => (
              <div
                className="md:rounded-[16px] md:flex md:flex-col md:p-6 md:flex-[1_1_200px] md:gap-3 "
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
                  className="md:flex md:gap-[14px] md:h-9 md:items-center justify-between
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
                      className="md:w-4 md:h-4"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="md:flex md:gap-7 md:flex-col md:mt-7 md:w-full ">
            <div className="md:flex md:flex-row md:gap-7  gap-7 flex flex-col">
              <div
                className="md:w-[66%] md:h-[330px] md:bg-[#f9f9fa] md:p-6 md:rounded-[16px] md:text-lg w-full
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
                    <div className="md:rounded-[16px] md:h-[6px] md:w-[6px] md:bg-[#AEC7ED]"></div>
                    This month
                  </div>
                </div>
                <Linechart />
              </div>

              <div
                className="md:p-6 md:w-[30%] md:h-[330px] md:flex md:gap-4 md:flex-col md:bg-[#f9f9fa] md:rounded-[16px] md:font-serif md:text-lg md:font-normal w-full !important flex flex-col gap-4
"
              >
                <p className="md:transition-transform md:duration-300 md:ease group md:hover:translate-x-[10px]">
                  Traffic by Website
                </p>
                <div className="md:transition-transform md:duration-300 md:ease md:text-xs md:font-normal group md:hover:translate-x-[10px]">
                  <div class="md:flex md:gap-4 md:items-center">
                    <div class="w-full">
                      <p>Google</p>
                    </div>
                    <div class="md:flex md:w-[80px] md:h-[34.33px] md:items-center md:gap-[2px]">
                      <div class="md:w-[25.33px] md:bg-[#000000] md:h-[2.33px]"></div>
                      <div class="md:w-[25.33px] md:bg-[#00000066] md:h-[2.33px]"></div>
                      <div class="md:w-[25.33px] md:bg-[#0000001A] md:h-[2.33px]"></div>
                    </div>
                  </div>
                  <div class="md:flex md:gap-4 md:items-center">
                    <div class="md:w-full">
                      <p>YouTube</p>
                    </div>
                    <div class="md:flex md:w-[80px] md:h-[34.33px] md:items-center md:gap-[2px]">
                      <div class="md:w-[25.33px] md:bg-[#000000] md:h-[2.33px]"></div>
                      <div class="md:w-[25.33px] md:bg-[#00000066] md:h-[2.33px]"></div>
                      <div class="md:w-[25.33px] md:bg-[#0000001A] md:h-[2.33px]"></div>
                    </div>
                  </div>
                  <div class="md:flex md:gap-4 md:items-center">
                    <div class="md:w-full">
                      <p>Instagram</p>
                    </div>
                    <div class="md:flex md:w-[80px] md:h-[34.33px] md:items-center md:gap-[2px]">
                      <div class="md:w-[25.33px] md:bg-[#000000] md:h-[2.33px]"></div>
                      <div class="md:w-[25.33px] md:bg-[#00000066] md:h-[2.33px]"></div>
                      <div class="md:w-[25.33px] md:bg-[#0000001A] md:h-[2.33px]"></div>
                    </div>
                  </div>
                  <div class="md:flex md:gap-4 md:items-center">
                    <div class="md:w-full">
                      <p>Pinterest</p>
                    </div>
                    <div class="md:flex md:w-[80px] md:h-[34.33px] md:items-center md:gap-[2px]">
                      <div class="md:w-[25.33px] md:bg-[#000000] md:h-[2.33px]"></div>
                      <div class="md:w-[25.33px] md:bg-[#00000066] md:h-[2.33px]"></div>
                      <div class="md:w-[25.33px] md:bg-[#0000001A] md:h-[2.33px]"></div>
                    </div>
                  </div>
                  <div class="md:flex md:gap-4 md:items-center">
                    <div class="md:w-full">
                      <p>Pinterest</p>
                    </div>
                    <div class="md:flex md:w-[80px] md:h-[34.33px] md:items-center md:gap-[2px]">
                      <div class="md:w-[25.33px] md:bg-[#000000] md:h-[2.33px]"></div>
                      <div class="md:w-[25.33px] md:bg-[#00000066] md:h-[2.33px]"></div>
                      <div class="md:w-[25.33px] md:bg-[#0000001A] md:h-[2.33px]"></div>
                    </div>
                  </div>{" "}
                  <div class="md:flex md:gap-4 md:items-center">
                    <div class="md:w-full">
                      <p>Facebook</p>
                    </div>
                    <div class="md:flex md:w-[80px] md:h-[34.33px] md:items-center md:gap-[2px]">
                      <div class="md:w-[25.33px] md:bg-[#000000] md:h-[2.33px]"></div>
                      <div class="md:w-[25.33px] md:bg-[#00000066] md:h-[2.33px]"></div>
                      <div class="md:w-[25.33px] md:bg-[#0000001A] md:h-[2.33px]"></div>
                    </div>
                  </div>{" "}
                  <div class="md:flex md:gap-4 md:items-center">
                    <div class="md:w-full">
                      <p>Twitter</p>
                    </div>
                    <div class="md:flex md:w-[80px] md:h-[34.33px] md:items-center md:gap-[2px]">
                      <div class="md:w-[25.33px] md:bg-[#000000] md:h-[2.33px]"></div>
                      <div class="md:w-[25.33px] md:bg-[#00000066] md:h-[2.33px]"></div>
                      <div class="md:w-[25.33px] md:bg-[#0000001A] md:h-[2.33px]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:flex md:flex-row md:gap-7  gap-7 flex flex-col">
              <div
                className="md:font-serif md:w-[47.6%] md:h-[280px] md:bg-[#f9f9fa] md:rounded-[16px] md:p-6 md:text-lg md:font-semibold
w-[full]"
              >
                <Barchart />
              </div>
              <div
                className="md:font-serif md:w-[47.6%] md:h-[280px] md:bg-[#f9f9fa] md:rounded-[16px] md:p-6 md:text-lg md:font-semibold
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

      <Notification />
    </div>
  );
}

export default Content;
