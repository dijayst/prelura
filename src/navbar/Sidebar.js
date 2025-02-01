import { GoDotFill } from "react-icons/go";
import { LiaAngleRightSolid } from "react-icons/lia";
//import { FaAngleRight } from "react-icons/fa";
import './Sidebar.css';
const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Header */}
    
      <div className="hy">
      <div className="mb-6 text-xl font-bold"> <img src="../Image/Frame.png" alt="Prelura" width="94" height="24" />
      <img src="../Image/1647193675741.jpeg" alt="Prelura" width={94}height={24} />
      <h1>Prelura</h1>
      </div>
      
      {/* Favorites and Recent */}
      <div className="mb-4">
        <div className="flex justify-between text-sm font-semibold text-gray-400">
          <span>Favorites</span>
          <span className="sub-header">Recent</span>
        </div>
        <div>
          <div className="flex items-center mb-2"><GoDotFill className="custom-icon"/><span className="ml-2">Overview</span></div>
          <div className="flex items-center mb-2"><GoDotFill className="custom-icon"/><span className="ml-2">Listings</span></div>
        </div>
      </div>

     
      </div>
      
      {/* Dashboards */}
      <div className="mb-4">
        <h3 className="sub-header">Dashboards</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-2"><GoDotFill className="custom-icon"/><span>Overview</span></div>
          <div className="flex items-center gap-2"><LiaAngleRightSolid className="custom-icon"/><span>User Mgmt</span></div>
          <div className="flex items-center gap-2"><LiaAngleRightSolid className="custom-icon"/><span>Listings</span></div>
        </div>
      </div>
      
      {/* Reports */}
      <div>
        <h3 className="sub-header">Reports</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-2"><LiaAngleRightSolid className="custom-icon"/><span>Flagged</span></div>
          <div className="flex items-center gap-2"><GoDotFill className="custom-icon"/><span>Listings</span></div>
          <div className="flex items-center gap-2"><GoDotFill className="custom-icon"/><span>Users</span></div>
          <div className="flex items-center gap-2"><GoDotFill className="custom-icon"/><span>Messicons</span></div>
        </div>
        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2"><LiaAngleRightSolid className="custom-icon"/><span>Account</span></div>
          <div className="flex items-center gap-2"><LiaAngleRightSolid className="custom-icon"/><span>Corporate</span></div>
          <div className="flex items-center gap-2"><LiaAngleRightSolid className="custom-icon"/><span>Blog</span></div>
          <div className="flex items-center gap-2"><LiaAngleRightSolid className="custom-icon"/><span>Social</span></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
