import "./App.css";
import React, { useState } from "react";
import Home from "./components/Home";
import { NavLink } from "react-router-dom";
import abhi from "./images/abhi.png";
import About from "./components/About";
import { useLocation } from "react-router-dom";
import Project from "./components/Project";
import { Routes, Route } from "react-router-dom";

function App() {

  const [day, setday] = useState(true);
  const param = useLocation();

  return (
    <div className="App" style={{ backgroundColor: day ? 'white' : 'rgba(26, 32, 44, 0.8)' }} >
      <div className="h-[70px] w-full shadow-md">
        <div style={{ color: day ? 'gray' : 'white' }} className="font-medium h-full w-full mx-auto flex justify-evenly items-center">
          <NavLink exact to="/"><img alt="" src={abhi} style={{ border: day ? '2px solid gray' : '2px solid white' }} className="hover:scale-125 ease-in duration-300 w-[40px] h-[40px] rounded-[50%]" /></NavLink>
          <div className="w-[30%] flex justify-evenly opacity-0 sm:opacity-100">
            <NavLink className={day ? "under" : "uper"} exact to={param.pathname === "/" ? "/ABOUT" : "/"} >{param.pathname === "/ABOUT" ? "HOME" : "ABOUT"}</NavLink>
            <NavLink className={day ? "under" : "uper"} exact to={param.pathname === "/" ? "/PROJECTS" : "/"} >{param.pathname === "/PROJECTS" ? "HOME" : "PROJECTS"}</NavLink>
            <a href="https://web3talks.co/" className={day ? "under" : "uper"} >BLOGS</a>
          </div>
          <button className="text-2xl" onClick={() => setday(!day)} >{day ? "☀️" : "🌙"}</button>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home color={day} />} />
        <Route path="/ABOUT" element={<About color={day} />} />
        <Route path="/PROJECTS" element={<Project color={day} />} />
      </Routes>
    </div>
  );
}

export default App;
