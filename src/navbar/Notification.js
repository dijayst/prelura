import React from 'react'
import { Activities,Contacts,notifications } from './Data'

function Notification() {



  return (
    <div className="notification">
      <div style={{width:"248px",gap:"16px"}}>
    <div className='Leftcontent'>
    <h1 style={{ fontFamily: 'Inter, sans-serif' }}>Notifications</h1>
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
    </div>


    <div style={{width:"248px",marginBottom:"16px"}}>
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
    </div>

    <div style={{width:"248px"}}>
    <div className='Leftcontent'>
    <h1>Contacts</h1>
  </div>

  
  <div className="notificationcontent">
      {Contacts.map((notification, index) => (
        <div className="headernotification" key={index}>
          <img src={notification.icon} alt="Icon" />
          <div className="headernotificationtext">
            <p style={{color:"#000000"}}>{notification.message}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  </div>
  )
}

export default Notification
