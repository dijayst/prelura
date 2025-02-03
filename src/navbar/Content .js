import React,{useState} from 'react'

import { Overview } from './Data'
import Barchart from '../Chart/Barchart';
import Piechart from  '../Chart/Piechart';



function Content () {


  const [hoveredDigit, setHoveredDigit] = useState(null);

  const handleMouseEnter = (digit) => {
    setHoveredDigit(digit);
  };

  const handleMouseLeave = () => {
    setHoveredDigit(null);
  };
 
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
                <div className='Overview' key={index} style={{ backgroundColor: notification.color }}
                >
                 <p className="hover-effect">{notification.text}</p>
                  <div className="Overviewcontent">
                 {/*<div className='Numberofproduct'>
                      
                    <p >{notification.Numberofproduct1}</p>
                    <p >{notification.Numberofproduct2}</p>
                    <p >{notification.Numberofproduct3}</p>
                    <p >{notification.Numberofproduct4}</p>
                    </div>*/}   


                    <div className='Numberofproduct'>
                  {[notification.Numberofproduct1, notification.Numberofproduct2, notification.Numberofproduct3, notification.Numberofproduct4].map((digit, idx) => (
                    <p 
                      key={idx} 
                      onMouseEnter={() => handleMouseEnter(idx)}
                      onMouseLeave={handleMouseLeave}
                      className={hoveredDigit === idx ? 'hovered' : ''} 
                    >
                      {hoveredDigit === idx ? '0' : digit}
                    </p>
                  ))}
                </div>


                
                   <div className='overviewpercent '>
                    <p className="hover-effect">{notification.percentage}</p>
                    <img src={notification.arrow} alt="Icon" />
                    </div></div>
                </div>
              ))}

      </div>




      <div style={{display:"flex",gap:"28px"}}>

      <div style={{width:"432px",height:"280px",backgroundColor:"#F9F9FA",borderRadius:"16px",padding:24}}>
      <Barchart />
      </div>
      <div style={{width:"432px",height:"280px",backgroundColor:"#F9F9FA",borderRadius:"16px",padding:24}}>
      <Piechart/>
      </div>
      </div>
      </div>
     
    </div>
  )
}

export default Content 
