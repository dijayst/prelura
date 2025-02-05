import React ,{useState}from "react";
import "./App.css";
import Content from "./navbar/Content ";
import Sidebar from "./navbar/Sidebar";

function App() {
  
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
      <Sidebar isOpen={isOpen} />

      <Content isOpen={isOpen}setIsOpen={setIsOpen}/>
     
    </div>
  );
}

export default App;
