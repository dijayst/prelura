import React,{useState,useEffect} from 'react';
import './App.css';
import Content from './navbar/Content ';
import Sidebar from './navbar/Sidebar';

function App() {


   const [isOpen, setIsOpen] = useState(false);

   const handlenav=()=>{
setIsOpen(!isOpen);
   }

   useEffect(() => {
     const closeMenu = (event) => {
       if (!event.target.closest(".contentcontainer")) {
         setIsOpen(false);
       }
     };

     document.addEventListener("click", closeMenu);
     return () => document.removeEventListener("click", closeMenu);
   }, []);


  return (
    <div className="App">
      <Sidebar isOpen={isOpen} />
    <Content isOpen={isOpen} setIsOpen={setIsOpen} handlenav={handlenav}/>
        
    </div>
  );
}

export default App;
