import React from "react";
import { Activities, Contacts, notifications } from "./Data";

function Notification({darkMode}) {
  return (
    <div className="md:w-[21.3%] w-full   border border-[#0000001a] border-l-1 border-t-0  border-r-0 border-b-0 pl-4  md:overflow-x-hidden  md:overflow-y-scroll no-scrollbar md:scrollbar-hide h-screen bg-white  dark:bg-gray-900 hidden md:hidden lg:block">
      <div className=" md:space-y-4  mb-9 ">
        <div>
          <h1
            className={`font-[500] text-[16px] font-inter mt-6 ${
              darkMode ? "text-white" : "text-black"
            }
        `}
          >
            Notifications
          </h1>
        </div>

        <div className="flex flex-col gap-2">
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="md:rounded-md  flex items-center p-2 md:h-[52px] md:w-full md:cursor-pointer md:transition md:duration-300 md:ease-in-out md:transform   hover:bg-slate-100 gap-3
"
            >
              <img src={notification.icon} alt="Icon" className="w-6 h-6 " />
              <div className="flex flex-col justify-center items-start :ml-2 gap-1 md:transition-transform md:duration-300 md:origin-left">
                <p className="text-black text-sm font-normal text-[14px] whitespace-nowrap">
                  {notification.message}
                </p>
                <p className="text-gray-500 text-xs ">{notification.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" mb-4 ">
        <div>
          <h1 className="font-[500] text-[16px] font-inter mt-6 ">
            Activities
          </h1>
        </div>
        <div className="flex flex-col gap-2 ">
          {Activities.map((notification, index) => (
            <div
              key={index}
              className="flex items-center p-2 h-[52px] w-full md:rounded-md md:cursor-pointer md:transition md:duration-300 md:ease-in-out md:transform  hover:bg-slate-100 gap-3 "
            >
              <img
                src={notification.icon}
                alt="Icon"
                className=" w-6 h-6  ml-2"
              />
              <div className="flex flex-col ml-2 gap-1">
                <p className="text-black font-inter text-sm font-normal whitespace-nowrap">
                  {notification.message}
                </p>
                <p className="text-gray-500 text-xs ">{notification.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div>
          <h1 className="font-[500] text-[16px] font-inter mt-6 ">Contacts</h1>
        </div>
        <div className="flex flex-col gap-2">
          {Contacts.map((notification, index) => (
            <div
              key={index}
              className="flex items-center p-2 h-[52px] w-full md:rounded-md md:cursor-pointer md:transition md:duration-300 md:ease-in-out md:transform   hover:bg-slate-100 gap-3"
            >
              <img
                src={notification.icon}
                alt="Icon"
                className=" w-6 h-6  ml-2"
              />
              <div className="flex flex-col justify-center items-start ml-2 gap-1">
                <p className="text-black text-sm font-normal font-inter whitespace-nowrap">
                  {notification.message}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Notification;
