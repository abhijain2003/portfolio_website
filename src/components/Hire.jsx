import React from 'react';
import hire from "../images/hire.png";

function Hire({ color }) {


  return (
    <div className='h-[89vh] justify-center flex flex-col lg:grid' style={{ backgroundColor: color ? "#f2c365" : 'rgba(26, 32, 44, 0.8)', gridTemplateColumns: '50% 50%' }} >
      <div className='flex flex-col justify-evenly  w-[80%] mx-auto'>
        <div className='mb-8'>
          <h1 style={{ color: color ? "rgb(31 41 55)" : "white" }} className='uppercase font-bold text-2xl' >Hey, I am a freelance full-stack Web Developer</h1>
          <h1 style={{ color: color ? "rgb(31 41 55)" : "white" }} className='uppercase font-bold text-xl' >Hire me for your next website</h1>
        </div>
        <div >
          <a href='mailto:abhikumarjain05@gmail.com' style={{ backgroundColor: color ? "rgba(26, 32, 44, 0.8)" : '#f2c365', color: color ? "white" : "rgb(31 41 55)" }} type="submit" className="w-full text-center mb-4 px-6 py-2.5 font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out">Email me</a>
        </div>
      </div>
      <div className='items-center flex justify-center'>
        <img alt='' src={hire} />
      </div>
    </div>
  )
}

export default Hire