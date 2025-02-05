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

  return (
    <div className="contentcontainer">
      <div style={{ width: "79%" }}>
        <section className="divcontent">
          <div className="maincontent">
            <div className="contentimg">
              <div onClick={() => setIsOpen(!isOpen)}>
                <img src="/Image/Icon.png" alt="Icon" />
              </div>
              <img src="/Image/star.png" alt="star" className="hide" />
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
                src="/Image/placeholderimg.png"
                alt="ytfytf"
                className="image3"
              />
              <img src="/Image/search.png" alt="ytfytf" className="image2" />
            </div>
            <div className="headerimg">
              <img src="/Image/darkmode.png" alt="Icon" />
              <img src="/Image/history.png" alt="Icon" className="hide" />
              <img src="/Image/alarm.png" alt="Icon" className="hide" />
              <img src="/Image/Icon.png" alt="Icon" className="hide" />
            </div>
          </div>
        </section>
       
        <section className="content">
          <h1>Overview</h1>

          <div className="Overviewcontainer">
            {Overview.map((notification, cardIdx) => (
              <div
                className="Overview"
                key={cardIdx}
                style={{ backgroundColor: notification.color }}
              >
                <p className="hover-effect">{notification.text}</p>
                <div className="Overviewcontent">
                  <div className="Numberofproduct">
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
                        className={
                          hoveredDigits[cardIdx]?.[digitIdx] ? "hovered" : ""
                        }
                      >
                        {hoveredDigits[cardIdx]?.[digitIdx] ? "0" : digit}
                      </p>
                    ))}
                  </div>

                  <div className="overviewpercent">
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
            <div className="containerchart">
              <div className="linechart">
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
                    style={{
                      display: "flex",
                      gap: "16px",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ width: "100%" }}>
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
                    style={{
                      display: "flex",
                      gap: "16px",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ width: "100%" }}>
                      <p>YouTube</p>
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
                    style={{
                      display: "flex",
                      gap: "16px",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ width: "100%" }}>
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
                    style={{
                      display: "flex",
                      gap: "16px",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ width: "100%" }}>
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
                    style={{
                      display: "flex",
                      gap: "16px",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ width: "100%" }}>
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
                    style={{
                      display: "flex",
                      gap: "16px",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ width: "100%" }}>
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

            <div className="containerchart">
              <div className="chart">
                <Barchart />
              </div>
              <div className="chart">
                <h2>Traffic by Location</h2>
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
