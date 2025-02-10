import React from "react";
import { Activities, Contacts, notifications } from "./Data";

function Notification() {
  return (
    <div className="md:w-[21.3%] w-full font-inter text-[18px] font-normal bg-white p-[20px_8px_2px_28px]">
      <div className=" md:space-y-4 ">
        <div className="md:Leftcontent">
          <h1 className="md:font-bold md:text-lg">Notifications</h1>
        </div>

        <div className="flex flex-col gap-2">
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="md:rounded-md  flex items-center p-2 md:h-[52px] md:w-full md:cursor-pointer md:transition md:duration-300 md:ease-in-out md:transform md:hover:translate-x-1   hover:bg-slate-100 gap-3
"
            >
              <img
                src={notification.icon}
                alt="Icon"
                className="m-[8px_0_20px_8px] w-6 h-6 "
              />
              <div className="flex flex-col justify-center items-start :ml-2 gap-1 md:transition-transform md:duration-300 md:origin-left">
                <p className="text-black text-sm font-bold">
                  {notification.message}
                </p>
                <p className="text-gray-500 text-xs ">{notification.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" md:mb-4 ">
        <div className="md:Leftcontent">
          <h1 className="md:font-bold md:text-lg">Activities</h1>
        </div>
        <div className="md:flex md:flex-col md:gap-2 ">
          {Activities.map((notification, index) => (
            <div
              key={index}
              className="md:flex md:items-center md:p-2 md:h-[52px] md:w-full md:rounded-md md:cursor-pointer md:transition md:duration-300 md:ease-in-out md:transform md:hover:translate-x-1   hover:bg-slate-100 gap-3"
            >
              <img
                src={notification.icon}
                alt="Icon"
                className=" w-6 h-6  md:ml-2"
              />
              <div className="flex flex-col justify-center items-start ml-2 gap-1">
                <p className="text-black text-sm font-bold">
                  {notification.message}
                </p>
                <p className="text-gray-500 text-xs ">{notification.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="Leftcontent">
          <h1 className="font-bold text-lg">Contacts</h1>
        </div>
        <div className="flex flex-col gap-2">
          {Contacts.map((notification, index) => (
            <div
              key={index}
              className="md:flex md:items-center md:p-2 md:h-[52px] md:w-full md:rounded-md md:cursor-pointer md:transition md:duration-300 md:ease-in-out md:transform md:hover:translate-x-1   hover:bg-slate-100 gap-3"
            >
              <img
                src={notification.icon}
                alt="Icon"
                className=" w-6 h-6  md:ml-2"
              />
              <div className="flex flex-col justify-center items-start ml-2 gap-1">
                <p className="text-black text-sm font-normal">
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

/*

 <div
        className={
          !isOpen
            ? `
       hidden  flex-col fixed top-0 left-0 w-full gap-0 bg-gray-700 `: `fixed left-[-100%]`
        }
      >
       

        <section
          className=" md:w-full md:flex md:flex-col md:justify-center mb-8
        
        bg-white  left-0 top-0 w-full h-auto"
        >
          <div className="md:flex md:items-center md:gap-3 py-[1.4rem]">
            <img
              src="../Image/Frame.png"
              alt="Prelura"
              className="md:w-12 md:h-12 md:rounded-full"
            />
            <h1>Prelura</h1>
          </div>

       
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

      
        <section
          className=" md:w-full md:flex md:flex-col md:justify-center 
         bg-white gap-2 w-full left-0 top-0"
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
                className="md:w-8 md:h-8"
              />
              <span>Overview</span>
            </div>
            <div className="md:flex md:items-center md:gap-3 md:cursor-pointer md:transition md:duration-300 md:ease-in-out md:mt-1 md:text-lg md:font-normal md:font-inter md:h-9 md:w-40 md:hover:bg-[rgba(0,0,0,0.04)] md:hover:rounded md:hover:translate-x-1 ">
              <LiaAngleRightSolid className=" md:text-[rgba(0,0,0,0.2)] md:text-lg font-inter md:hover:text-black" />
              <img
                src="../Image/usermanagem.png"
                alt="usermanagem"
                className="md:w-8 md:h-8"
              />
              <span>User Mgmt</span>
            </div>
            <div className="md:flex md:items-center md:gap-3 md:cursor-pointer md:transition md:duration-300 md:ease-in-out md:mt-1 md:text-lg md:font-normal md:font-inter md:h-9 md:w-40 md:hover:bg-[rgba(0,0,0,0.04)] md:hover:rounded md:hover:translate-x-1 ">
              <LiaAngleRightSolid className=" md:text-[rgba(0,0,0,0.2)] md:text-lg md:font-inter md:hover:text-black" />
              <img
                src="../Image/listing.png"
                alt="listing"
                className="md:w-8 md:h-8"
              />
              <span>Listings</span>
            </div>
          </div>
        </section>

       
        <section
          className=" md:w-[180px] md:flex md:flex-col md:justify-center 
         bg-white m-0  w-full left-0 top-0 mb-48"
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
                className="md:w-8 md:h-8"
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
                className="md:w-8 md:h-8"
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
                className="md:w-8 md:h-8"
              />
              <span className="md:py-2 md:pl-0 md:pr-14">Social</span>
            </div>
          </div>
        </section>
        <div className="md:flex md:text-base md:font-normal md:ml-8 md:items-center md:gap-3 md:mb-8">
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


 <button
          className="mb-4 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        >
        </button>

 <button
            className="lg:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
           </button>








































    <div className="md:w-[25%] md:font-serif md:text-lg md:font-normal">
     


      <div className="Leftcontent">
        <h1>Notifications</h1>
      </div>

      <div className="md:flex md:flex-col md:gap-2">
        {notifications.map((notification, index) => (
          <div
            className="md:flex md:items-center md:p-2 md:h-[52px] md:w-full md:rounded-[6px] md:transition-transform md:duration-300 md:ease-in-out"
            key={index}
          >
            <img
              src={notification.icon}
              alt="Icon"
              className="md:m-[8px_0px_20px_8px] md:w-[24px] md:h-[24px]"
            />
            <div className="">
              <p className="md:m-0 md:p-[2px_0]">{notification.message}</p>
              <p className="md:m-0 md:p-[2px_0]">{notification.time}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="Leftcontent">
        <h1>Activities</h1>
      </div>

      <div className="notificationcontent">
        {Activities.map((notification, index) => (
          <div className="headernotification" key={index}>
            <img
              src={notification.icon}
              alt="Icon"
              className="md:m-[8px_0px_20px_8px] md:w-[24px] md:h-[24px]"
            />
            <div className="md:justify-center md:items-center md:flex md:h-[36px] md:w-[200px] md:flex-col md:m-2 md:gap-[2px] md:transition-transform md:duration-300 md:ease md:origin-left">
              <p className="md:m-0 md:p-[2px_0]">{notification.message}</p>
              <p className="md:m-0 md:p-[2px_0]">{notification.time}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="Leftcontent">
        <h1>Contacts</h1>
      </div>

      <div className="notificationcontent">
        {Contacts.map((notification, index) => (
          <div className="headernotification" key={index}>
            <img
              src={notification.icon}
              alt="Icon"
              className="md:m-[8px_0px_20px_8px] md:w-[24px] md:h-[24px]"
            />
            <div className="md:justify-center md:items-center md:flex md:h-[36px] md:w-[200px] md:flex-col md:m-2 md:gap-[2px] md:transition-transform md:duration-300 md:ease md:origin-left">
              <p style={{ color: "#000000" }}>{notification.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
 




































<!-- For .notification class -->
<div class="">
  <!-- Your content here -->
</div>

<!-- For .notificationcontent class -->
<div class="md:flex md:flex-col md:gap-2">
  <!-- Your content here -->
</div>

<!-- For .headernotification class -->
<div class=">
  <!-- Your content here -->
</div>

<!-- For .headernotification:hover .headernotificationtext class -->
<div class="group md:hover:scale-110">
  <!-- Your content here -->
</div>

<!-- For .headernotification img class -->
<img src="your-image-source.png" class="md:m-[8px_0px_20px_8px] md:w-[24px] md:h-[24px]" alt="Icon" />

<!-- For .headernotificationtext class -->
<div class="">
  <!-- Your content here -->
</div>

<!-- For .headernotificationtext p class -->
<p class="">
  <!-- Your content here -->
</p>

<!-- For .headernotificationtext p:first-child class -->
<p class="md:text-black md:text-sm md:font-bold md:font-serif">
  <!-- Your content here -->
</p>

<!-- For .headernotificationtext p:last-child class -->
<p class="md:font-serif md:text-[#00000066] md:text-xs">
  <!-- Your content here -->
</p>

<!-- For .headernotification:hover .headernotificationtext p:last-child class -->
<p class="group-hover:md:text-red-600 group-hover:md:text-[13px]">
  <!-- Your content here -->
</p>

























*/
