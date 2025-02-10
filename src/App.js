import React,{useState,useEffect} from 'react';
import './App.css';
import Content from './navbar/Content ';
import Sidebar from './navbar/Sidebar';

function App() {


    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
      const closeMenu = (event) => {
        if (
          !event.target.closest(".sidebar") &&
          !event.target.closest(".menu-button")
        ) {
          setIsOpen(false);
        }
      };

      document.addEventListener("click", closeMenu);
      return () => document.removeEventListener("click", closeMenu);
    }, []);



    
  return (
    <div className="App">
     
        <Sidebar isOpen={isOpen} />
        <Content isOpen={isOpen} setIsOpen={setIsOpen} />
      
    </div>
  );
}

export default App;
