import React from "react";
import { Activities, Contacts, notifications } from "./Data";

function Notification() {

  return (
    <div className="md:w-[15%] md:font-inter md:text-[18px] md:font-normal ">
      <div className="md:w-[248px] md:space-y-4">
        <div className="md:Leftcontent">
          <h1 className="md:font-bold md:text-lg">Notifications</h1>
        </div>

        <div className="md:flex md:flex-col md:gap-2">
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="md:flex md:items-center md:p-2 md:h-[52px] md:w-full md:rounded-md md:transition-transform md:duration-300 md:hover:scale-105"
            >
              <img
                src={notification.icon}
                alt="Icon"
                className="md:m-[8px_0_20px_8px] md:w-6 md:h-6"
              />
              <div className="md:flex md:flex-col md:justify-center md:items-start md:ml-2 md:gap-1 md:transition-transform md:duration-300 md:origin-left">
                <p className="md:text-black md:text-sm md:font-bold">
                  {notification.message}
                </p>
                <p className="md:text-gray-500 md:text-xs md:hover:text-red-500 md:hover:text-[13px]">
                  {notification.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="md:w-[248px] md:mb-4">
        <div className="md:Leftcontent">
          <h1 className="md:font-bold md:text-lg">Activities</h1>
        </div>
        <div className="md:flex md:flex-col md:gap-2">
          {Activities.map((notification, index) => (
            <div
              key={index}
              className="md:flex md:items-center md:p-2 md:h-[52px] md:w-full md:rounded-md md:transition-transform md:duration-300 md:hover:scale-105"
            >
              <img
                src={notification.icon}
                alt="Icon"
                className="md:w-6 md:h-6 md:ml-2"
              />
              <div className="md:flex md:flex-col md:justify-center md:items-start md:ml-2 md:gap-1">
                <p className="md:text-black md:text-sm md:font-bold">
                  {notification.message}
                </p>
                <p className="md:text-gray-500 md:text-xs md:hover:text-red-500 md:hover:text-[13px]">
                  {notification.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="md:w-[248px]">
        <div className="md:Leftcontent">
          <h1 className="md:font-bold md:text-lg">Contacts</h1>
        </div>
        <div className="md:flex md:flex-col md:gap-2">
          {Contacts.map((notification, index) => (
            <div
              key={index}
              className="md:flex md:items-center md:p-2 md:h-[52px] md:w-full md:rounded-md md:transition-transform md:duration-300 md:hover:scale-105"
            >
              <img
                src={notification.icon}
                alt="Icon"
                className="md:w-6 md:h-6 md:ml-2"
              />
              <div className="md:flex md:flex-col md:justify-center md:items-start md:ml-2 md:gap-1">
                <p className="md:text-black md:text-sm md:font-bold">
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
