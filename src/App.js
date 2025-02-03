
import './App.css';
import Content from './navbar/Content ';
import Sidebar from './navbar/Sidebar';
import "@fontsource/inter";

import "@fontsource/inter/300.css"; // Light
import "@fontsource/inter/400.css"; // Regular
import "@fontsource/inter/600.css"; // Semi-bold
import "@fontsource/inter/700.css";





import Notification from './navbar/Notification';

function App() {
  return (
    <div className="App">
    <Sidebar/>
   <div className='content-container'>
     <Content/>
     <Notification/>
     </div>
    </div>
  );
}

export default App;
