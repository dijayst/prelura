import React from 'react'

function Notification() {
  const notifications = [
    {
      icon: "../Image/bug.png",
      message: "You fixed a bug.",
      time: "Just now"
    },
    {
      icon: "../Image/manager.png",
      message: "New user registered..",
      time: "59 minutes ago"
    },{
      icon: "../Image/bug.png",
      message: "You fixed a bug.",
      time: "12 hours ago"
    },{
      icon: "../Image/wifi.png",
      message: "Andi Lane subscribed to you..",
      time: "Today, 11:59 AM"
    }
  ];
  return (
    <div className="notification">
    <div className='Leftcontent'>
    <h1>Notifications</h1>
  </div>


  <div className="notificationcontent">
      {notifications.map((notification, index) => (
        <div className="headernotification" key={index}>
          <img src={notification.icon} alt="Icon" />
          <div className="headernotificationtext">
            <p>{notification.message}</p>
            <p style={{color:"#00000066"}}>{notification.time}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Notification
