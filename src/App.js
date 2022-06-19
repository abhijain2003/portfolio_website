import "./App.css";
import React, { useState } from "react";
import Home from "./components/Home";
import { NavLink } from "react-router-dom";
import abhi from "./images/abhi.png";
import About from "./components/About";
import { useLocation } from "react-router-dom";
import Project from "./components/Project";
import { Routes, Route } from "react-router-dom";
import Hire from "./components/Hire";

function App() {

  const [day, setday] = useState(true);
  const [mobile, setmobile] = useState(false);
  const param = useLocation();

  return (
    <div className="App" style={{ backgroundColor: day ? 'white' : 'rgba(26, 32, 44, 0.8)' }} >
      <nav style={{ color: day ? 'gray' : 'white' }}>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-center h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

              <button onClick={() => setmobile(curr => !curr)} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>

                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <NavLink exact to="/"><img alt="" src={abhi} style={{ border: day ? '2px solid gray' : '2px solid white' }} className="hover:scale-125 ease-in duration-300 w-[40px] h-[40px] rounded-[50%]" /></NavLink>
              <h1 className="block px-3 py-2 rounded-md font-medium" >Abhi Jain</h1>
              <div className="hidden sm:block sm:ml-16">
                <div className="flex space-x-4">
                  <NavLink exact to={param.pathname === "/" ? "/ABOUT" : "/"} className="block px-3 py-2 rounded-md font-medium" aria-current="page">{param.pathname === "/ABOUT" ? "HOME" : "ABOUT"}</NavLink>

                  <NavLink exact to={param.pathname === "/" ? "/PROJECTS" : "/"} className="block px-3 py-2 rounded-md text-base font-medium">{param.pathname === "/PROJECTS" ? "HOME" : "PROJECTS"}</NavLink>

                  <NavLink exact to={param.pathname === "/" ? "/HIRE" : "/"} className="block px-3 py-2 rounded-md text-base font-medium">{param.pathname === "/HIRE" ? "HOME" : "HIRE ME"}</NavLink>

                  <a href="https://web3talks.co/" className="block px-3 py-2 rounded-md text-base font-medium">BLOGS</a>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="ml-3 relative">
                <div>
                  <button className="text-2xl" onClick={() => setday(!day)} >{day ? "☀️" : "🌙"}</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:hidden" style={{ transition: '0.3s ease-in', display: mobile ? 'block' : 'none' }} >
          <div className="px-2 pt-2 pb-3 space-y-1">

            <NavLink exact to={param.pathname === "/" ? "/ABOUT" : "/"} className="block px-3 py-2 rounded-md font-medium" aria-current="page">{param.pathname === "/ABOUT" ? "HOME" : "ABOUT"}</NavLink>

            <NavLink exact to={param.pathname === "/" ? "/PROJECTS" : "/"} className="block px-3 py-2 rounded-md text-base font-medium">{param.pathname === "/PROJECTS" ? "HOME" : "PROJECTS"}</NavLink>

            <NavLink exact to={param.pathname === "/" ? "/HIRE" : "/"} className="block px-3 py-2 rounded-md text-base font-medium">{param.pathname === "/HIRE" ? "HOME" : "HIRE ME"}</NavLink>

            <a href="https://web3talks.co/" className="block px-3 py-2 rounded-md text-base font-medium">BLOGS</a>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home color={day} />} />
        <Route path="/ABOUT" element={<About color={day} />} />
        <Route path="/PROJECTS" element={<Project color={day} />} />
        <Route path="/HIRE" element={<Hire color={day} />} />
      </Routes>
    </div>
  );
}

export default App;
