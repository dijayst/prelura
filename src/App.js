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




     const storedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        const initialTheme = storedTheme ? storedTheme === "dark" : prefersDark;
    
        const [darkMode, setDarkMode] = useState(initialTheme);
    
        // Apply theme on mount
        useEffect(() => {
          if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
          } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
          }
        }, [darkMode]);
    
    
         console.log(darkMode);


    
  return (
    <div
      className={`flex h-screen bg-white min-h-screen ${darkMode ? "dark" : ""}`}
    >
      <Sidebar isOpen={isOpen} />
      <Content
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        toggleDarkMode={() => setDarkMode(!darkMode)}
        darkMode={darkMode}
      />
    </div>
  );
}

export default App;
