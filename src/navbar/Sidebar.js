import { GoDotFill } from "react-icons/go";
import { LiaAngleRightSolid } from "react-icons/lia";
//import { FaAngleRight } from "react-icons/fa";
import './Sidebar.css';
const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Header */}
      <div className="sidebar-scroll-container">
    <div className="maincontainer">
      <div className="container">
      <div className="headerimg"> 
       <img src="../Image/Frame.png" alt="Prelura"  />
      <h1>Prelura</h1>
      </div>
      
      {/* Favorites and Recent */}

      <div className="mb-4">
        <div className="subheadergroup">
          <span style={{color:"#00000066"}}className="subheadergroup1">Favorites</span>
          <span style={{color:"#00000033"}}className="subheadergroup2">Recent</span>
        </div>
        <div >
          <div className="sidemenu"><GoDotFill className="custom-icon-dot"/><span className="ml-2">Overview</span></div>
          <div className="sidemenu"><GoDotFill className="custom-icon-dot"/><span className="ml-2">Listings</span></div>
        </div>
      </div>

     
      </div>
      
      {/* Dashboards */}
      <div className="container">
        <h3 className="subheader">Dashboards</h3>
        <div className="space-y-2">
          <div className="menu"><GoDotFill className="custom-icon"/><img src="../Image/overview.png" alt="overview" /><span>Overview</span></div>
          <div className="menu"><LiaAngleRightSolid className="custom-icon"/><img src="../Image/usermanagem.png" alt="usermanagem" /><span>User Mgmt</span></div>
          <div className="menu"><LiaAngleRightSolid className="custom-icon"/><img src="../Image/listing.png" alt="listing" /><span>Listings</span></div>
        </div>
      </div>
      
      {/* Reports */}
      <div className="container">
        <h3 className="subheader">Reports</h3>
        <div className="space-y-2">
          <div className="menu"><LiaAngleRightSolid className="custom-icon"/><img src="../Image/IdentificationBadge.png" alt="IdentificationBadge" /><span>Flagged</span></div>
          <div className="submenu"><span>Listings</span></div>
          <div className="submenu"><span>Users</span></div>
          <div className="submenu"><span>Messages</span></div>
        </div>
        <div className="mt-4 space-y-2">
          <div className="menu"><LiaAngleRightSolid className="custom-icon"/><img src="../Image/acct.png" alt="acct" /><span>Account</span></div>
          <div className="menu"><LiaAngleRightSolid className="custom-icon"/><img src="../Image/cooperate.png" alt="cooperate"  /><span>Corporate</span></div>
          <div className="menu"><LiaAngleRightSolid className="custom-icon"/><img src="../Image/blog.png" alt="blog"  /><span>Blog</span></div>
          <div className="menu"><LiaAngleRightSolid className="custom-icon"/><img src="../Image/social.png" alt="social"  /><span>Social</span></div>
        </div>
       
      </div>
</div>
      <div style={{display:"flex",fontSize:"14px",fontWeight:"Regular",marginLeft:"32px",alignItems:"center",gap:"12px",marginBottom:"32px"}}><img src="../Image/Group 15 1.png" alt="Prelura"  /><div><p>Prelura 2025</p></div></div>
    </div>
    </div>
  );
};

export default Sidebar;
