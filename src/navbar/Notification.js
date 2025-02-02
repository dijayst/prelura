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
  const Activities = [
    {
      icon: "../Image/Avatar Abstract 03.png",
      message: "Changed the style.",
      time: "Just now"
    },
    {
      icon: "../Image/Avatar Female 03.png",
      message: "Released a new version.",
      time: "59 minutes ago"
    },{
      icon: "../Image/Avatar Male 02.png",
      message: "Submitted a bug.",
      time: "12 hours ago"
    },{
      icon: "../Image/Avatar 3D 03.png",
      message: "Modified A data in Page X.",
      time: "Today, 11:59 AM"
    },{
      icon: "../Image/Avatar Abstract 04.png",
      message: "Deleted a page in Project X.",
      time: "Feb 2, 2025"
    }
  ];

  
  const Contacts = [
    {
      icon: "../Image/Frame (1).png",
      message: "Changed the style.",
      
    },
    {
      icon: "../Image/Frame (2).png",
      message: "Released a new version.",
    
    },{
      icon: "../Image/Icon (1).png",
      message: "Submitted a bug.",
     
    },{
      icon: "../Image/Avatar Male 04.png",
      message: "Modified A data in Page X.",
      
    },{
      icon: "../Image/Icon (2).png",
      message: "Deleted a page in Project X.",
     
    },{
      icon: "../Image/Icon (3).png",
      message: "Deleted a page in Project X.",
     
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
            <p >{notification.message}</p>
            <p >{notification.time}</p>
          </div>
        </div>
      ))}
    </div>
    <div className='Leftcontent'>
    <h1>Activities</h1>
  </div>

    
  <div className="notificationcontent">
      {Activities.map((notification, index) => (
        <div className="headernotification" key={index}>
          <img src={notification.icon} alt="Icon" />
          <div className="headernotificationtext">
            <p >{notification.message}</p>
            <p >{notification.time}</p>
          </div>
        </div>
      ))}
    </div>

    
    <div className='Leftcontent'>
    <h1>Contacts</h1>
  </div>

  
  <div className="notificationcontent">
      {Activities.map((notification, index) => (
        <div className="headernotification" key={index}>
          <img src={notification.icon} alt="Icon" />
          <div className="headernotificationtext">
            <p style={{color:"#000000"}}>{notification.message}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Notification
