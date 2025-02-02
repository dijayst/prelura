
import './App.css';
import Content from './navbar/Content ';
import Sidebar from './navbar/Sidebar';

import Notification from './navbar/Notification';

function App() {
  return (
    <div className="App">
    <Sidebar/>
    
     <Content/>
     <Notification/>
     
    </div>
  );
}

export default App;
