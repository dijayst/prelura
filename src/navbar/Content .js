import React, { useState } from "react";

import { Overview } from "./Data";
import Barchart from "../Chart/Barchart";
import Piechart from "../Chart/Piechart";
import Linechart from "../Chart/Linechart";

function Content() {
  const [hoveredDigit, setHoveredDigit] = useState(null);

  const handleMouseEnter = (digit) => {
    setHoveredDigit(digit);
  };

  const handleMouseLeave = () => {
    setHoveredDigit(null);
  };

  return (
    <div>
      <div className="divcontent">
        <div className="maincontent">
          <div className="contentimg">
            <img src="../Image/Icon.png" alt="Icon" />
            <img src="../Image/star.png" alt="star" />
          </div>
          <div className="contentdash">
            <h1 style={{ fontSize: "16px" }}>Dashboards</h1>
            <p>/</p>
            <h2 style={{ fontSize: "14px" }}>Default</h2>
          </div>
        </div>
        <div className="inputdiv">
          <div className="container2">
            <input placeholder="Search" className="input2" />
            <img
              src="../Image/placeholderimg.png"
              alt="ytfytf"
              className="image3"
            />
            <img src="../Image/search.png" alt="ytfytf" className="image2" />
          </div>
          <div className="headerimg">
            <img src="../Image/darkmode.png" alt="Icon" />
            <img src="../Image/history.png" alt="Icon" />
            <img src="../Image/alarm.png" alt="Icon" />
            <img src="../Image/Icon.png" alt="Icon" />
          </div>
        </div>
      </div>

      <div className="content">
        <h1 style={{ fontSize: "14px", fontWeight: "Semi Bold" }}>Overview</h1>
        <div className="Overviewcontainer ">
          {Overview.map((notification, index) => (
            <div
              className="Overview"
              key={index}
              style={{ backgroundColor: notification.color }}
            >
              <p className="hover-effect">{notification.text}</p>
              <div className="Overviewcontent">
                {/*<div className='Numberofproduct'>
                      
                    <p >{notification.Numberofproduct1}</p>
                    <p >{notification.Numberofproduct2}</p>
                    <p >{notification.Numberofproduct3}</p>
                    <p >{notification.Numberofproduct4}</p>
                    </div>*/}

                <div className="Numberofproduct">
                  {[
                    notification.Numberofproduct1,
                    notification.Numberofproduct2,
                    notification.Numberofproduct3,
                    notification.Numberofproduct4,
                  ].map((digit, idx) => (
                    <p
                      key={idx}
                      onMouseEnter={() => handleMouseEnter(idx)}
                      onMouseLeave={handleMouseLeave}
                      className={hoveredDigit === idx ? "hovered" : ""}
                    >
                      {hoveredDigit === idx ? "0" : digit}
                    </p>
                  ))}
                </div>

                <div className="overviewpercent ">
                  <p className="hover-effect">{notification.percentage}</p>
                  <img src={notification.arrow} alt="Icon" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            gap: "28px",
            flexDirection: "column",
            marginTop: "28px",
          }}
        >
          <div style={{ display: "flex", gap: "28px", width: "892px" }}>
            <div
              style={{
                width: "662px",
                height: "330px",
                backgroundColor: "#F9F9FA",
                padding: "24px",
                borderRadius: "16px",
                fontSize: "14px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  fontWeight: "Semi Bold",
                }}
              >
                <div>Total Users</div>
                <div style={{ fontWeight: "400" }}>Total Listings</div>
                <div>|</div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    fontWeight: "400",
                    fontSize: "12",
                  }}
                >
                  <div
                    style={{
                      borderRadius: "16px",
                      height: "6px",
                      width: "6px",
                      backgroundColor: "#000000",
                    }}
                  ></div>
                  Today
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    fontWeight: "400",
                    fontSize: "12px",
                  }}
                >
                  <div
                    style={{
                      borderRadius: "16px",
                      height: "6px",
                      width: "6px",
                      backgroundColor: "#AEC7ED",
                    }}
                  ></div>
                  This month
                </div>
              </div>
              <Linechart />
            </div>

            <div className="traffic">
              <p className="ptraffic">Traffic by Website</p>
              <div className="trafficcontent">
                <div
                  style={{ display: "flex", gap: "16px", alignItems: "center" }}
                >
                  <div style={{ width: "57px" }}>
                    <p>Google</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      width: "80px",
                      height: "34.33px",
                      alignItems: "center",
                      gap: "2px",
                    }}
                  >
                    <div
                      style={{
                        width: "9.71px",
                        backgroundColor: "#000000",
                        height: "2.33px",
                      }}
                    ></div>
                    <div
                      style={{
                        width: "9.71px",
                        backgroundColor: "#00000066",
                        height: "2.33px",
                      }}
                    ></div>
                    <div
                      style={{
                        width: "9.71px",
                        backgroundColor: "#0000001A",
                        height: "2.33px",
                      }}
                    ></div>
                  </div>
                </div>
                <div
                  style={{ display: "flex", gap: "16px", alignItems: "center" }}
                >
                  <div style={{ width: "57px" }}>
                    {" "}
                    <p>YouTube</p>{" "}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      width: "80px",
                      height: "34.33px",
                      alignItems: "center",
                      gap: "2px",
                    }}
                  >
                    <div
                      style={{
                        width: "18.5px",
                        backgroundColor: "#000000",
                        height: "2.33px",
                      }}
                    ></div>
                    <div
                      style={{
                        width: "18.5px",
                        backgroundColor: "#00000066",
                        height: "2.33px",
                      }}
                    ></div>
                    <div
                      style={{
                        width: "18.5px",
                        backgroundColor: "#0000001A",
                        height: "2.33px",
                      }}
                    ></div>
                  </div>
                </div>
                <div
                  style={{ display: "flex", gap: "16px", alignItems: "center" }}
                >
                  <div style={{ width: "57px" }}>
                    <p>Instagram</p>{" "}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      width: "80px",
                      height: "34.33px",
                      alignItems: "center",
                      gap: "2px",
                    }}
                  >
                    <div
                      style={{
                        width: "11.67px",
                        backgroundColor: "#000000",
                        height: "2.33px",
                      }}
                    ></div>
                    <div
                      style={{
                        width: "11.67px",
                        backgroundColor: "#00000066",
                        height: "2.33px",
                      }}
                    ></div>
                    <div
                      style={{
                        width: "11.67px",
                        backgroundColor: "#0000001A",
                        height: "2.33px",
                      }}
                    ></div>
                  </div>
                </div>
                <div
                  style={{ display: "flex", gap: "16px", alignItems: "center" }}
                >
                  <div style={{ width: "57px" }}>
                    <p>Pinterest</p>{" "}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      width: "80px",
                      height: "34.33px",
                      alignItems: "center",
                      gap: "2px",
                    }}
                  >
                    <div
                      style={{
                        width: "9.71px",
                        backgroundColor: "#000000",
                        height: "2.33px",
                      }}
                    ></div>
                    <div
                      style={{
                        width: "9.71px",
                        backgroundColor: "#00000066",
                        height: "2.33px",
                      }}
                    ></div>
                    <div
                      style={{
                        width: "9.71px",
                        backgroundColor: "#0000001A",
                        height: "2.33px",
                      }}
                    ></div>
                  </div>
                </div>
                <div
                  style={{ display: "flex", gap: "16px", alignItems: "center" }}
                >
                  <div style={{ width: "57px" }}>
                    <p>Facebook</p>{" "}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      width: "80px",
                      height: "34.33px",
                      alignItems: "center",
                      gap: "2px",
                    }}
                  >
                    <div
                      style={{
                        width: "25.33px",
                        backgroundColor: "#000000",
                        height: "2.33px",
                      }}
                    ></div>
                    <div
                      style={{
                        width: "25.33px",
                        backgroundColor: "#00000066",
                        height: "2.33px",
                      }}
                    ></div>
                    <div
                      style={{
                        width: "25.33px",
                        backgroundColor: "#0000001A",
                        height: "2.33px",
                      }}
                    ></div>
                  </div>
                </div>
                <div
                  style={{ display: "flex", gap: "16px", alignItems: "center" }}
                >
                  <div style={{ width: "57px" }}>
                    <p>Twitter</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      width: "80px",
                      height: "34.33px",
                      alignItems: "center",
                      gap: "2px",
                    }}
                  >
                    <div
                      style={{
                        width: "9.71px",
                        backgroundColor: "#000000",
                        height: "2.33px",
                      }}
                    ></div>
                    <div
                      style={{
                        width: "9.71px",
                        backgroundColor: "#00000066",
                        height: "2.33px",
                      }}
                    ></div>
                    <div
                      style={{
                        width: "9.71px",
                        backgroundColor: "#0000001A",
                        height: "2.33px",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", gap: "28px", width: "892px" }}>
            <div className="chart">
              <Barchart />
            </div>
            <div className="chart">
              <h2>Traffic by Location</h2>
              <Piechart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
