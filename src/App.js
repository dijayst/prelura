import React,{useState,useEffect} from 'react';
import './App.css';
import Content from './navbar/Content ';
import Sidebar from './navbar/Sidebar';





/*

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
     
      <header className="bg-blue-600 text-white p-4 md:p-6 flex justify-between items-center">
        <h1 className="text-lg md:text-2xl font-bold">My Website</h1>
        <nav>
          <ul className="hidden md:flex space-x-6">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
          <button className="md:hidden">☰</button>
        </nav>
      </header>

   
      <section className="flex flex-col md:flex-row items-center text-center md:text-left px-6 py-12 md:py-20">
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
            Welcome to Our Site
          </h2>
          <p className="mt-4 text-gray-600">
            This is a fully responsive React + Tailwind website that adapts to desktop, iPad, and mobile.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Get Started
          </button>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img src="https://via.placeholder.com/500" alt="Hero" className="rounded-lg shadow-lg" />
        </div>
      </section>

    
      <section className="p-6">
        <h3 className="text-center text-2xl font-bold text-gray-800">Our Features</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {["Feature 1", "Feature 2", "Feature 3", "Feature 4"].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h4 className="text-lg font-semibold">{feature}</h4>
              <p className="text-gray-600 mt-2">Description of {feature}.</p>
            </div>
          ))}
        </div>
      </section>

   
      <footer className="bg-gray-900 text-white text-center p-4 mt-12">
        &copy; {new Date().getFullYear()} My Website. All Rights Reserved.
      </footer>
    </div>
  );
}


 */
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
      className={`flex   h-screen bg-white ${
        darkMode ? "dark" : ""
      }`}
    >
      <Sidebar isOpen={isOpen} darkMode={darkMode}/>
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


