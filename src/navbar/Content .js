import React from 'react'

import { Overview } from './Data'


function Content () {

  
  return (
    <div >
        <div className='divcontent'>
        <div className='maincontent'>
        <div className='contentimg'>
        <img src="../Image/Icon.png" alt="Icon" />
         <img src="../Image/star.png" alt="star" />
        </div>
        <div className='contentdash'>
            <h1>Dashboards</h1><p>/</p>
            <h2>Default</h2>
        </div></div>
        <div className='inputdiv'>
        <div className="container2">
            <input placeholder='Search'className="input2"/>
            <img src="../Image/placeholderimg.png" alt="ytfytf"className="image3"/>
            <img src="../Image/search.png" alt="ytfytf"className="image2"/>
        </div>
            <div className='headerimg'>
            <img src="../Image/darkmode.png" alt="Icon" /> 
            <img src="../Image/history.png" alt="Icon" />
             <img src="../Image/alarm.png" alt="Icon" />
             <img src="../Image/Icon.png" alt="Icon" />
            </div>
        </div>
      </div>
      <div className='content'>
      <h1>Overview</h1>
      <div className='Overviewcontainer '>

        {Overview.map((notification, index) => (
                <div className='Overview' key={index}>
                 <p>{notification.text}</p>
                  <div className="Overviewcontent">
                    <p >{notification.Numberofproduct}</p>
                    <div className='overviewpercent '>
                    <p>{notification.percentage}</p>
                    <img src={notification.arrow} alt="Icon" />
                    </div></div>
                </div>
              ))}

      </div>
      </div>

    </div>
  )
}

export default Content 
